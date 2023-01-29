import { connect } from "react-redux"
import { Link } from "react-router-dom"

function Navbar() {
   return(
    <nav className="w-full py-10 shadow-md fixed">
        <div className="bg-white px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <div className="ml-4 mt-2">
                <img
                src="" 
                className="" />
                </div>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <Link to="/casos" className="inline-flex text-lg font-medium leading-6 text-gray-900 mx-4">Casos</Link>
                    <Link to="/servicios" className="inline-flex text-lg font-medium leading-6 text-gray-900 mx-4">Servicios</Link>
                    <Link to="/nosotros" className="inline-flex text-lg font-medium leading-6 text-gray-900 mx-4">Nosotros</Link>
                    <Link to="/carreras" className="inline-flex text-lg font-medium leading-6 text-gray-900 mx-4">Carreras</Link>
                    <Link to="/blog" className="inline-flex text-lg font-medium leading-6 text-gray-900 mx-4">Blog</Link>
                    <Link to="/contacto" className="inline-flex text-lg font-medium leading-6 text-gray-900 mx-4">Contacto</Link>
                    <button
                        type="button"
                        className="ml-12 relative inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                        Create new job
                    </button>
                </div>
            </div>
        </div>
    </nav>
   )
}

const mapStateToProps = state => ({
    // para llamar a alguna variable en redux
})

export default connect(mapStateToProps, {}) (Navbar)