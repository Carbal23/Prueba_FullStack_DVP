import Image from "next/image";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import style from "./user.module.css";
import BarChart from "components/BarChart/BarChart";
import AppContext from "context/AppContext";
import { UserProps } from "./IUser";

const User = ({ user }: UserProps): JSX.Element => {
  const {
    useAppHook: { followers, getFollowersNumber },
  } = useContext(AppContext);

  useEffect(() => {
    if (user.followers_url) {
      getFollowersNumber(user.followers_url);
      
    }
  }, []);

  return (
    <Link href={`/user/${user.login}`} className={style.link}>
      <div className={style.cardContainer} >
        <div className={style.imgcontainer}>
          <Image
            src={user.avatar_url}
            alt={user.login}
            height={120}
            width={120}
          />
        </div>

        <div className={style.infoContainer}>
          <h3>{user.login}</h3>
          <p>ID: {user.id}</p>
        </div>
        <div className={style.chart}>
          <div className={style.barChart}>
            <BarChart followers={followers} following={0} repos={0} />
          </div>
        </div>
      </div>
     </Link>
  );
};

export default User;
