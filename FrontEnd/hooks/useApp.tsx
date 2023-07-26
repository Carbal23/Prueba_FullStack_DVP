import React, { ChangeEvent, FormEvent, useContext, useMemo, useState } from "react";
import axios,{AxiosError, AxiosResponse} from "axios";
import Swal from "sweetalert2";
import { useRouter } from "next/router";
import { ErrorMsg, FavoriteUser, Id, SearchName, Url, UserData, UserDataByName } from "./IUseApp";


const useApp = () => {
  const [usersList, setUserList] = useState<UserData[]>([]);
  const [search, setSearch] = useState<SearchName>("");
  const [userData, setUserData] = useState<UserDataByName>(
    {} as UserDataByName
  );
  const [followers, setFollowers] = useState<number>(0);
  const [favoriteListUsers, setFavoriteListUsers] = useState<FavoriteUser[]>(
    []
  );
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorMsg>("");

  const router = useRouter();

  const handleError = (msg: ErrorMsg) => {
    setError(msg);
    setTimeout(() => {
      setError("");
    }, 5000);
  };

  const searchUsersByName = async (name: SearchName): Promise<void> => {
    try {
      const result = await axios.get(
        `https://api.github.com/search/users?q=${name}`
      );
      const data = result.data.items;
      const limitedData = data.slice(0, 10);
      setUserList(limitedData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("se presento un error", error);
      handleError("Se ha presentado un error, intente mas tarde.");
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (
      search.length <= 4 ||
      search === "doublevpartners" ||
      search.trim() === ""
    ) {
      handleError("La busqueda debe contener almenos 5 caracteres");
      return;
    } else {
      searchUsersByName(search);
      setLoading(true);
    }
  };

  const getUserData = async (id: Id): Promise<void> => {
    try {
      const url = `https://api.github.com/users/${id}`;
      const result = await axios.get(url);
      const data = result.data;
      setUserData(data);
      setLoading(false);
      setSearch("")
    } catch (error) {
      console.error("hubo un error", error);
      handleError("Se a presentado un error, intentelo nuevamente mas tarde");
      setLoading(false);
    }
  };

  const addToFavoriteList = (user: UserDataByName) => {
    Swal.fire({
      icon: "question",
      title: "Do you want to save this user in the favorite list?",
      showDenyButton: false,
      showCancelButton: true,
      confirmButtonText: "Save",
    }).then(async (result): Promise<void> => {
      if (result.isConfirmed) {
        try {
          const {
            name,
            id,
            avatar_url,
            html_url,
            public_repos,
            public_gists,
            followers,
            following,
          } = user;

          await axios.post("http://localhost:4000/api/user", {
            name,
            idGH: id,
            avatar: avatar_url,
            urlGH: html_url,
            repos: public_repos,
            gists: public_gists,
            follower: followers,
            following,
          });
        } catch (error) {
          if (error instanceof AxiosError && error.response?.data.message) {
            handleError(error.response?.data.message);
          } else {
            handleError('Error desconocido');
        
          }
            return;
        }
        Swal.fire({
          icon: "success",
          title: "Do you want to go to the favorite list?",
          showDenyButton: false,
          confirmButtonText: "Go...",
          showCancelButton: true,
        }).then((result) => {
          if (result.isConfirmed) {
            console.log("dirigiendonos a la favorite list");
            router.push("/favoriteList");
          }
        });
      }
    });
  };

  const getFollowersNumber = async (url: Url): Promise<void> => {
    try {
      const result = await axios.get(url);
      const follower = result.data.length;
      setFollowers(follower);
    } catch (error) {
      console.error("hubo un error", error);
      handleError("Se a presentao un error, intentelo nuevamente mas tarde");
    }
  };

  const getFavoriteList = async (): Promise<void> => {
    try {
      const response = await axios.get("http://localhost:4000/api/user");
      const favoriteList = response.data.users;
      setFavoriteListUsers(favoriteList);
      setLoading(false);
      setSearch("")
    } catch (error) {
      console.error("hubo un error", error);
      handleError("Se a presentao un error, intentelo nuevamente mas tarde");
    }
  };

  const deleteUser = (id: number): void => {
    try {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await axios.delete(`http://localhost:4000/api/user/${id}`);
          const newFavoriteListUsers = favoriteListUsers.filter(
            (user) => user.id !== id
          );
          setFavoriteListUsers(newFavoriteListUsers);
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    } catch (error) {
      console.error("hubo un error", error);
      handleError("Se a presentao un error, intentelo nuevamente mas tarde");
    }
  };

  const filteredUser = useMemo(
    () =>
      favoriteListUsers.filter((users) => {
        return users.name.toLowerCase().includes(search.toLowerCase());
      }),
    [favoriteListUsers, search]
  );

  const showErrorModal = ()=>{
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!',
      confirmButtonText: "volver",
      allowOutsideClick: false,
    })
    .then((result) => {
      if (result.isConfirmed) {
        router.push("/");
        setError("");
      }
    });
  }

  return {
    search,
    usersList,
    userData,
    followers,
    filteredUser,
    loading,
    error,
    handleOnChange,
    handleSubmit,
    getUserData,
    getFollowersNumber,
    addToFavoriteList,
    getFavoriteList,
    deleteUser,
    handleError,
    setLoading,
    showErrorModal,
  };
};

export default useApp;
