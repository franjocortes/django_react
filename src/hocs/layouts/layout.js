import { connect, Connect } from "react-redux";

function Layout({children}) {
    return(
        <div>
            {children}
        </div>
    )
}


const mapStateToProp = state => ({
    // Para llamar a cualquier variable en REDUX
})

export default connect(mapStateToProp, {}) (Layout)