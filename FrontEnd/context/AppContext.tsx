import React, { createContext } from "react";
import { ContextValue } from "./IAppContext";

const AppContext = createContext<ContextValue>({} as ContextValue);

export default AppContext;
