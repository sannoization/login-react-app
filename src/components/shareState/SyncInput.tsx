// @flow
import * as React from 'react';
import {FC, useState} from "react";

type Props = {
  label: string;
  text: string;
  handleChange: (e: any) => void;
};
export const SyncInput: FC = () => {
  const [text, setText] = useState('');
  const handleChange = (e: any) => {
    setText(e.target.value)
  }

  return (
      <>
        <Input label="first input" text={text} handleChange={handleChange} />
        <Input label="second input" text={text} handleChange={handleChange} />
      </>
  );
};

const Input: FC<Props> = ({label, handleChange, text }) => {
  return (
      <label>
        {label}
        {' '}
        <input
            value={text}
            onChange={handleChange}
        />
      </label>
  );
}