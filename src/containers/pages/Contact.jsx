import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function Contact() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Contact
            </div>
            <Footer/>
        </Layout>
    )
}

export default Contact