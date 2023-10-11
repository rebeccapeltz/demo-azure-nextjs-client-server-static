import { useEffect, useState } from 'react'
import UserRow from './UserRow';


export default function Home(props) {
  const [reactData, setReactData] = useState([]);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        // debugger
        setReactData(data);
      }).catch((e) => { console.log(e) });
  }, []);

  return (
    <>


      <table>
        <thead>
          <tr>
            <th colSpan={4} className='topnav'>Rendered By Next JS | Client side rendered</th>
          </tr>
        </thead>
        <tbody>
          {reactData.map((user, idx) => <UserRow key={idx} user={user} />)}
        </tbody>

      </table>

      <br />
      <table>
        <thead>
          <tr>
            <th colSpan={4} className='topnav'>Rendered By React JS | Server side rendered</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => <UserRow key={user.id} user={user} />)}
        </tbody>
      </table>
    </>
  )
}


export const getServerSideProps = async (context) => {

  const data = await fetch('https://jsonplaceholder.typicode.com/users');
  // debugger
  const users = await data.json();
  // console.log('Logging : ', users);
  return { props: { users } }
}


