import React, { useContext } from "react";
import User from "./User/User";
import style from "./userList.module.css";
import Spinner from "components/Spinner/Spinner";
import Error from "components/Error/Error";
import FavoriteUsers from "./FavoriteUsers/FavoriteUsers";
import { UserListProps } from "./IUserList";

const UsersList = ({
  usersList,
  favoriteUsers,
  loading,
  error,
}: UserListProps): JSX.Element => {
  
  return (
    <div className={style.usersList}>
      {error ? <Error msg={error} /> : null}
      {loading ? (
        <Spinner />
      ) : usersList ? (
        usersList.map((user) => <User key={user.id} user={user} />)
      ) : (
        favoriteUsers?.map((user) => (
          <FavoriteUsers key={user.id} user={user} />
        ))
      )}
    </div>
  );
};

export default UsersList;
