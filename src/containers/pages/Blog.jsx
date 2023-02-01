import Layout from "hocs/layouts/layout"
import Navbar from "components/navigation/navbar"
import Footer from "components/navigation/footer"

function Blog() {
    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
                Blog
            </div>
            <Footer/>
        </Layout>
    )
}

export default Blog