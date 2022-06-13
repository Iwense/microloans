import { useState } from "react";

export const useDataBind = (initialValue?: any) => {
  const [value, setVal] = useState(initialValue || "");
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setVal(e.target.value);
  return { value, onChange };
};
