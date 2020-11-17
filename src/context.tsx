import {createContext} from "react";
import {GetApiData} from "./store";
import {values} from "mobx";

export const initializeclass = {
    apiDataStore:new GetApiData(),
};

export const StoreContext= createContext(initializeclass);
