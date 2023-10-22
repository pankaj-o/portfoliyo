import React from "react";

const TextField = ({type,placeholder,name,value,onChange,className}) => {

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        className={` ${className} border rounded-lg outline-yellow-300 border-transparent font-sans bg-gray-300 outline-offset-3 p-2 transition duration-250 focus:outline-offset-5 bg-white`}
      />
    </>
  );
};

export default TextField;
