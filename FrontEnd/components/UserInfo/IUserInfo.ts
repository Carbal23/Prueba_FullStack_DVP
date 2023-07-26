import { UserDataByName } from "hooks/IUseApp";

export interface UserInfoProps {
    userInfo: UserDataByName;
    addUser: (user:UserDataByName)=> void;
  }
