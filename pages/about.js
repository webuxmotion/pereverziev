function About() {
  return <div>About</div>
}

export async function getStaticProps(context) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/postsa`)
  const data = await res.json()

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {}, // will be passed to the page component as props
    revalidate: 1, // In seconds
  }
}

export default About
