import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function Home() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Home
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home