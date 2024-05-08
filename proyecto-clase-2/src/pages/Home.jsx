import ItemListContainer from "../components/ItemListContainer/ItemListContainer"
import Layout  from '../components/Layout/Layout'

const Home = () => {
    const itemListContainerProps = {
        greeting: "Hello, Andres, welcome to our store!",
        bgBlue: false
      }

  return (
    <Layout>
        <ItemListContainer { ...itemListContainerProps}/>
    </Layout>
  )
}

export default Home