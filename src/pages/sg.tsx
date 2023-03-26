export async function getStaticProps() {
  const random = Math.floor(Math.random() * 100)
  return {
    props: {
      random,
    },
  }
}

type Props = {
  random: number
}

const SGPage = ({ random }: Props) => {
  return (
    <div>
      <h1>SG</h1>
      <h2>{random}</h2>
    </div>
  )
}

export default SGPage
