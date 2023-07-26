import react, { useContext } from "react";
import Search from "components/Search/Search";
import UsersList from "components/UsersList/UserList";
import AppContext from "context/AppContext";
import { UseAppHook } from "hooks/IUseApp";

const Home= ():JSX.Element => {
  const { useAppHook } = useContext(AppContext);
  const { usersList, loading, error } : UseAppHook = useAppHook;

  return (
    <div className="app">
      <Search />
      <UsersList usersList={usersList} loading={loading} error={error} />
    </div>
  );
};

export default Home;
