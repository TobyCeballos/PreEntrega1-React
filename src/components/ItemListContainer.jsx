import React, { useState } from "react";

const ItemListContainer = ({greeting}) => {
  const [categories, setCategories] = useState("");

  return (
    <div className="px-[15%] pt-[80px]">
      <h1 className=" text-3xl text-slate-600 mb-2 ml-2 font-mono font-semibold">{greeting}</h1>
      <div className="w-full bg-slate-50 p-3">
        <select
          onChange={(e) => {
            setCategories(e.target.value);
          }}
          className="bg-transparent text-slate-600 py-1 px-4 rounded-full border border-slate-300 overflow-hidden"
        >
          <option className="bg-slate-200" value="">
            All
          </option>
          <option className="bg-slate-200" value="narrative">
            Narrative
          </option>
          <option className="bg-slate-200" value="lyrical">
            Lyrical
          </option>
          <option className="bg-slate-200" value="dramatic">
            Dramatic
          </option>
          <option className="bg-slate-200" value="poetic">
            Poetic
          </option>
          <option className="bg-slate-200" value="didactic">
            Didactic
          </option>
        </select>
      </div>
    </div>
  );
};

export default ItemListContainer;
