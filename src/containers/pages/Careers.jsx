import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function Careers() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Careers
            </div>
            <Footer/>
        </Layout>
    )
}

export default Careers