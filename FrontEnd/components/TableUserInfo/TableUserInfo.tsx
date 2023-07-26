import React from "react";
import style from "./tableUserInfo.module.css"
import { TableUserInfo } from "./ITableUserInfo";

const TableUserInfo = ({userData}:TableUserInfo):JSX.Element=>{
    return(
        <div className={style.gridData}>
        <div className={style.data}>
          <h4 className={style.title2}>Estadist</h4>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldData}>Public Repos:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultData}>{userData.public_repos}</p>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldData}>Followers:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultData}>{userData.followers}</p>
        </div>
        <div className={style.gridField}>
          <p className={style.fieldData}>Following:</p>
        </div>
        <div className={style.gridField}>
          <p className={style.resultData}>{userData.following}</p>
        </div>
      </div>
    )
};

export default TableUserInfo;