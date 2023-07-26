import React, { useContext, useEffect } from "react";
import UsersList from "components/UsersList/UserList";
import AppContext from "context/AppContext";
import Search from "components/Search/Search";

const favoriteList = (): JSX.Element => {
  const {
    useAppHook: { filteredUser, loading, error ,getFavoriteList, setLoading},
  } = useContext(AppContext);

  useEffect(() => {
    getFavoriteList();
    setLoading(true);
  }, []);

  return (
    <div className="app">
      <Search fav={true}/>
      <UsersList favoriteUsers={filteredUser} loading={loading} error={error} />
    </div>
  );
};

export default favoriteList;
