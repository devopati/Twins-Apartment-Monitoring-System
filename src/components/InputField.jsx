import React from "react";

const InputField = ({
  onChangeHandler,
  value,
  name,
  id,
  type,
  label,
  placeholder,
  fieldErr,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-600"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type ? type : "text"}
          id={id}
          name={name}
          autoComplete="email"
          value={value}
          onChange={onChangeHandler}
          placeholder={placeholder}
          // required ? required
          className={`block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ${
            fieldErr ? "ring-red-400 " : "ring-gray-300 "
          } placeholder:to-gray-400 focus:ring-indigo-600 sm:text-sm sm:leading-6 px-2`}
        />
      </div>
    </div>
  );
};

export default InputField;
