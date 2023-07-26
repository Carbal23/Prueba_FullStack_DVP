import { ChangeEvent, FormEvent } from "react";

export interface UserData {
  avatar_url: string;
  events_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  html_url: string;
  id: number;
  login: string;
  node_id: string;
  organizations_url: string;
  received_events_url: string;
  repos_url: string;
  score: number;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  type: string;
  url: string;
}

export interface UserDataByName {
  avatar_url: string;
  bio: string | null;
  blog: string | null;
  company: string | null;
  created_at: string;
  email: string | null;
  events_url: string;
  followers: number;
  followers_url: string;
  following: number;
  following_url: string;
  gists_url: string;
  gravatar_id: string;
  hireable: boolean | null;
  html_url: string;
  id: number;
  location: string | null;
  login: string;
  name: string;
  node_id: string;
  organizations_url: string;
  public_gists: number;
  public_repos: number;
  received_events_url: string;
  repos_url: string;
  site_admin: boolean;
  starred_url: string;
  subscriptions_url: string;
  twitter_username: string | null;
  type: string;
  updated_at: string;
  url: string;
}

export interface FavoriteUser {
  avatar: string;
  createdAt: string;
  follower: number;
  following: number;
  gists: number;
  id: number;
  idGH: number;
  name: string;
  repos: number;
  updatedAt: string;
  urlGH: string;
}

export interface UseAppHook {
  search: string;
  usersList: UserData[];
  userData: UserDataByName;
  followers: Follower;
  filteredUser: FavoriteUser[];
  loading: boolean;
  error: ErrorMsg;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  getUserData: (id: Id) => Promise<void>;
  getFollowersNumber: (url: Url) => Promise<void>;
  addToFavoriteList: (user: UserDataByName) => void;
  getFavoriteList: () => Promise<void>;
  deleteUser: (id: number) => void;
  handleError: (msg: ErrorMsg) => void;
  setLoading: (data: boolean) => void;
  showErrorModal: () => void;
}

export type SearchName = string;
export type ErrorMsg = string;
export type Url = string;
export type Id = string;
export type Follower = number;
