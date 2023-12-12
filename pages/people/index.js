import Link from 'next/link'

function PeopleList({ people }) {
  return (
    <>
      <h1>List of People v14.0.2</h1>
      {people.map(person => {
        return (
          <div key={person.id}>
            <Link href={`people/${person.id}`}>
              <h2>
                {person.id} {person.name} {person.email}
              </h2>
            </Link>
            <hr />
          </div>
        )
      })}
    </>
  )
}

export default PeopleList

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()

  return {
    props: {
      people: data.slice(0, 3)
    }
  }
}