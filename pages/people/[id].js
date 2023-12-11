import { useRouter } from 'next/router'

function Person({ person }) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <h2>
        {person.id} {person.name}
      </h2>
      <p>{person.email}</p>
      <p>{person.website}</p>
    </>
  )
}

export default Person

export async function getStaticProps(context) {
  const { params } = context
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  )
  const data = await response.json()

  if (!data.id) {
    return {
      notFound: true
    }
  }

  console.log(`Generating page for /users/${params.postId}`)
  return {
    props: {
      person: data
    }
  }
}

export async function getStaticPaths() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json()
  const paths = data.map(user => {
    return {
      params: { postId: `${user.id}` }
    }
  })

  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } }
    ],
    fallback: true
  }
}