import React from "react";

export default function UserRow(props) {
  // debugger
  // const { id, name,  email } = props.user;
  // debugger;
  if (props.user && props.user.id) {
    const { id, name, email } = props.user;
    return (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{email}</td>
      </tr>
    );
  } else {
    return null;
  }
}
