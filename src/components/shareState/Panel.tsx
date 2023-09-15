import * as React from 'react';
import {FC} from "react";

type Props = {
    title: string;
    children: any;
    isActive: boolean;
    onShow: () => void;
};
export const Panel: FC<Props> = ({title, children, isActive, onShow}) => {

  return (
      <section className="panel">
        <h3>{title}</h3>
        {isActive ? (
            <p>{children}</p>
        ) : (
            <button onClick={onShow}>
              Show
            </button>
        )}
      </section>
  );
}