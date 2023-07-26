import React from "react";
import style from "./userInfo.module.css"
import Image from "next/image";
import BarChart from "components/BarChart/BarChart";
import { UserInfoProps } from "./IUserInfo";

const UserInfo = ({userInfo, addUser}:UserInfoProps):JSX.Element=>{
    return (
      
        <div className={style.gridContainer}>
        <div className={style.containerImg}>
          <Image
            src={userInfo.avatar_url}
            alt={userInfo.login}
            height={340}
            width={340}
          />
        </div>
        <div className={style.containerData}>
          <h3 className={style.title}>{userInfo.name}</h3>
          <p className={style.precio}>Id: {userInfo.id}</p>
          <p className={style.github}>GitHub: {userInfo.html_url}</p>
          <button className={style.buttonAdd} onClick={()=>addUser(userInfo)}>
            Add to FavoriteList
          </button>
        </div>
        <div className={style.containerInfo}>
          <div className={style.info}>
            <h4>Chart</h4>
            <div className={style.barChart}>
              <BarChart
                followers={userInfo.followers}
                following={userInfo.following}
                repos={userInfo.public_repos}
              />
            </div>
          </div>
        </div>
      </div>
    )
};

export default UserInfo;