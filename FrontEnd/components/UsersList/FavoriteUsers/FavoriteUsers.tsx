import React, { useContext } from "react";
import BarChart from "components/BarChart/BarChart";
import Image from "next/image";
import style from "./favoriteUser.module.css";
import AppContext from "context/AppContext";
import { FavoriteUsersProps } from "./IFavoriteUser";

const FavoriteUsers = ({ user }: FavoriteUsersProps): JSX.Element => {
  const {useAppHook:{deleteUser}} = useContext(AppContext);

  return (
    <div className={style.cardContainer}>
      <div className={style.imgcontainer}>
        <Image
          src={user.avatar}
          alt={user.name}
          height={150}
          width={150}
        />
      </div>
      <div className={style.infoContainer}>
        <h3>{user.name}</h3>
        <p>DBid: {user.id}</p>
        <p>GHid: {user.idGH}</p>
        <p>Github: {user.urlGH}</p>
        <button onClick={()=>deleteUser(user.id)}>Delete</button>
      </div>
      <div className={style.chart}>
        <div className={style.barChart}>
          <BarChart
            followers={user.follower}
            following={user.following}
            repos={user.repos}
          />
        </div>
      </div>
    </div>
  );
};

export default FavoriteUsers;
