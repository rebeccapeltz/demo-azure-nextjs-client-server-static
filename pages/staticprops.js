import { useEffect, useState } from "react";
import UserRow from "./UserRow";

export default function Index(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={4} className="topnav">
              Rendered By Next JS | Static props: Client side rendered
            </th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <UserRow key={user.id} user={user} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export const getStaticProps = async () => {
  // debugger
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return {
    props: { users },
  };
};
