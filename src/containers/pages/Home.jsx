import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"
import Header from "components/home/Header"

function Home() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                <Header />
            </div>
            <Footer/>
        </Layout>
    )
}

export default Home