import React from "react";
import Select, { ValueType } from "react-select";
import { IFilter } from "../../interfaces";

interface ICustomSelectProps {
  filters: IFilter[];
  setFilters: (value: IFilter[]) => void;
}

const options: IFilter[] = [
  { value: "fantasy", label: "fantasy" },
  { value: "classic", label: "classic" },
  { value: "horror", label: "horror" },
  { value: "humor", label: "humor" },
  { value: "legend", label: "legend" },
  { value: "detective", label: "detective" },
  { value: "drama", label: "drama" }
];

export const CustomSelect: React.FC<ICustomSelectProps> = ({
  setFilters,
  filters
}) => {
  const changeHandler = (selectedOption: ValueType<IFilter>) => {
    setFilters(selectedOption as IFilter[]);
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
