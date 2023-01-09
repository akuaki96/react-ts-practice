import { FC } from "react";
import type { User } from "../types/user";

export const ListItems: FC<User> = (props) => {
  const { id, name, username, address } = props;

  return (
    <>
      <p>
        {id}:{name}
      </p>
      <p>username: {username}</p>
      <p>street: {address.street}</p>
      <p>city: {address.city}</p>
    </>
  );
};
