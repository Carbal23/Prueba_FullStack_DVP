import React, { useContext } from "react";
import style from "./search.module.css";
import AppContext from "context/AppContext";
import { SearchProps } from "./ISearch";
import { UseAppHook } from "hooks/IUseApp";

const Search = ({ fav }: SearchProps): JSX.Element => {
  const { useAppHook } = useContext(AppContext);
  const { handleOnChange, handleSubmit }:UseAppHook = useAppHook;

  return (
    <div className={style.search}>
      <form className={style.inputContainer} onSubmit={handleSubmit}>
        <input type="text" onChange={handleOnChange} placeholder="Escriba el nombre del usuario GitHub" />
        {fav ? null : (
          <button
            type="submit"
            className="fa-solid fa-magnifying-glass"
          ></button>
        )}
      </form>
    </div>
  );
};

export default Search;
