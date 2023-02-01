import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function Cases() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Cases
            </div>
            <Footer/>
        </Layout>
    )
}

export default Cases