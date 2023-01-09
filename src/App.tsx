import axios from "axios";
import { ListItems } from "./components/ListItems";
import { useEffect, useState } from "react";
import type { User } from "./types/user";

export const App = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItems
          id={user.id}
          name={user.name}
          username={user.username}
          street={user.address.street}
          city={user.address.city}
        ></ListItems>
      ))}
    </div>
  );
};

/* <ul>
        {users.map((users) => (
          <li key={users.id}>
            {users.id}
            {users.name}
            <br></br>
          </li>
        ))}

      //   {/* {users.map((user)=>)} */
// </ul> */}
