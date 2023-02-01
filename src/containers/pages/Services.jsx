import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function Services() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Services
            </div>
            <Footer/>
        </Layout>
    )
}

export default Services