import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";
import Spinner from "components/Spinner/Spinner";
import AppContext from "context/AppContext";
import Error from "components/Error/Error";
import UserInfo from "components/UserInfo/UserInfo";
import TableUserInfo from "components/TableUserInfo/TableUserInfo";
import { Id } from "hooks/IUseApp";

const User = ():JSX.Element=> {
  const router = useRouter();
  const {
    query: { id },
  } = router;

  const {
    useAppHook: {
      userData,
      loading,
      error,
      getUserData,
      addToFavoriteList,
      setLoading,
      showErrorModal,
    },
  } = useContext(AppContext);

  useEffect(() => {
    setLoading(true);
    getUserData(id as Id);

    if(error){
      showErrorModal();
    }
  
  }, [id]);

  return (
    <div className="bigContainer">
      {error ? <Error msg={error} /> : null}
      {loading ? (
        <Spinner />
      ) :  (
        <>
          <UserInfo userInfo={userData} addUser={addToFavoriteList} />
          <TableUserInfo userData={userData} />
        </>
      )}
    </div>
  );
};

export default User;
