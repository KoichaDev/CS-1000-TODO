import React from 'react';

interface InputObject {
  label: string;
  input: object;
}

const Input: React.FC<InputObject> = ({ label, input }) => {
  return (
    <>
      <label htmlFor={label}>{label}</label>
      <input {...input} />
    </>
  );
};

export default Input;
