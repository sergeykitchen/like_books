import React from "react";
import Select from "react-select";

const options = [
  { value: "fantasy", label: "fantasy" },
  { value: "classic", label: "classic" },
  { value: "horror", label: "horror" },
  { value: "humor", label: "humor" },
  { value: "legend", label: "legend" },
  { value: "detective", label: "detective" },
  { value: "drama", label: "drama" }
];

export const CustomSelect = ({ setFilters, filters }) => {
  const changeHandler = selectedOption => {
    setFilters(selectedOption);
  };

  return (
    <Select
      placeholder="Select the tags..."
      options={options}
      isMulti
      onChange={changeHandler}
      defaultValue={filters}
    />
  );
};
