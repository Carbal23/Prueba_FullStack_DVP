import { ErrorMsg, FavoriteUser, UserData } from "hooks/IUseApp";

export interface UserListProps {
    usersList?: UserData[], 
    favoriteUsers?: FavoriteUser[],
    loading: boolean,
    error: ErrorMsg,
  }