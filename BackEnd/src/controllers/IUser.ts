export interface IUser {
  name: string;
  idGH: number;
  avatar: string;
  urlGH: string;
  repos: number;
  gists: number;
  follower: number;
  following: number;
}

export interface CreateUserRequestBody {
  name: string;
  idGH: number;
  avatar: string;
  urlGH: string;
  repos: number;
  gists: number;
  follower: number;
  following: number;
}

export interface GetUserResponse {
  users?: IUser[];
  error?: string;
}

export interface DeleteUserResponse {
  message?: string;
  error?: string;
}


