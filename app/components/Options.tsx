import React from "react";

interface IOptions<T, K extends keyof T> {
  display: K;
  keyName?: K;
  items: T[];
}

const Options = <Y extends {id: number | string}, U extends keyof Y>({
  items,
  display,
  keyName,
}: IOptions<Y, U>) => {
  return (
    <>
      <option>Select ...</option>
      {items.map((item: Y, index: number) => (
        <option key={item.id} value={item.id}>{`${item[display]} ${
          keyName ? item[keyName] : ""
        }`}</option>
      ))}
    </>
  );
};

export default Options;
