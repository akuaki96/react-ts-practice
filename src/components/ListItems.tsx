import { FC } from "react";
import type { User } from "../types/user";

export const ListItems: FC<User> = (props) => {
  const { id, name, username, street, city } = props;

  return (
    <>
      <p>
        {id}:{name}
      </p>
      <p>username: {username}</p>
      <p>street: {street}</p>
      <p>city: {city}</p>
    </>
  );
};
