import { connect } from "react-redux";

function Layout({children}) {
    return(
        <div>
            {children}
        </div>
    )
}


const mapStateToProps = state => ({
    // Para llamar a cualquier variable en REDUX
})

export default connect(mapStateToProps, {}) (Layout)