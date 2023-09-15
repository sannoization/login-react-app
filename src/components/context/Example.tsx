// @flow
import * as React from 'react';
import {useContext, useEffect, useState} from "react";
import {ContextProvider} from "./ContextExample";

export const Example = (props: any) => {
  const value = useContext(ContextProvider)
  const [checker, setChecker] = useState(value);

  

  useEffect(() => {
      if (value === "light") setChecker("default value");
  }, []);

  return (
      <div style={{textAlign: "center"}}>
        <span>{checker}</span>
      </div>
  );
};