import React from "react";
import {Option} from './Option';
interface Props {}

export const SelectHeader = ({selectValue, onChangeCategory, categories, total}:any) => {



  return (
    <div className="header">
      <label>Category: </label>
      <select
        name="category"
        id="category"
        value={selectValue}
        onChange={onChangeCategory}
      >
        {categories?.categories.map((category:any) => (
          <Option category={category} key={category.id} />
        ))}
      </select>
      <div>Total:{total}</div>
    </div>
  );
};
