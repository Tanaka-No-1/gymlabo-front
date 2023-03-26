export async function getServerSideProps() {
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

const SSRPage = ({ random }: Props) => {
  return (
    <div>
      <h1>SSR</h1>
      <h2>{random}</h2>
    </div>
  )
}

export default SSRPage
