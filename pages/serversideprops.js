import UserRow from "./UserRow";

export default function ServerSideProps(props) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th colSpan={4} className="topnav">
              Rendered By React JS | Server side rendered
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

export const getServerSideProps = async (context) => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await data.json();
  // console.log('Logging : ', users);
  return { props: { users } };
};
