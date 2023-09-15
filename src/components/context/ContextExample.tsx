// @flow
import * as React from 'react';
import {createContext} from "react";
import {Example} from "./Example";

export const ContextProvider = createContext<string>('light');

export const ContextExample = (props: any) => {
  return (
      <ContextProvider.Provider value="dark">
        <Example />
      </ContextProvider.Provider>

  );
};