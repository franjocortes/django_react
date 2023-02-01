import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function About() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                About
            </div>
            <Footer/>
        </Layout>
    )
}

export default About