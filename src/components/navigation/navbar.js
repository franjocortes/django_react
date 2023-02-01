import { connect } from "react-redux"
import { NavLink, Link } from "react-router-dom"
import mylogo from "assets/img/logo.png"
import loading_dots from "assets/img/loading-dots.gif"
import { useState } from "react"
import { DotLoader } from "react-spinners"

function Navbar() {
    
    const [loading, setLoading] = useState(true)

   return(
    <nav className="w-full py-4 top-0 fixed">
        <div className="px-4 sm:px-6">
            <div className="-ml-4 -mt-2 flex flex-wrap items-center justify-between sm:flex-nowrap md:px-14 px-2">
                <Link to="/" className="ml-4 mt-2">
                    <img
                    src={mylogo}
                    width={60}
                    height={60}
                    className="" />
                </Link>
                <div className="ml-4 mt-2 flex-shrink-0">
                    <NavLink to="/casos" className="inline-flex text-lg font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Casos</NavLink>
                    <NavLink to="/servicios" className="inline-flex text-lg font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Servicios</NavLink>
                    <NavLink to="/nosotros" className="inline-flex text-lg font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Nosotros</NavLink>
                    <NavLink to="/carreras" className="inline-flex text-lg font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Carreras</NavLink>
                    <NavLink to="/blog" className="inline-flex text-lg font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Blog</NavLink>
                    <NavLink to="/contacto" className="inline-flex text-lg font-medium leading-6 text-gray-900 border-b-2 border-white hover:border-orange-500 mx-4">Contacto</NavLink>

                    <Link
                        to="/contacto"
                        className="inline-flex ml-12 items-center rounded-md border border-transparent bg-orange-button px-6 py-3 text-base font-medium text-white shadow-sm transition duration-900 ease-in-out hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                    >
                        Hire Us
                        <DotLoader className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" loading={loading} size={20} color="#f2f2f2" />
                    </Link>
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