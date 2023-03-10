import React, {  Fragment} from 'react'
import Header from '../shared/Header/Header'

const Layout = (props) => {
    return (
        <Fragment>
            <Header/>
            <main>{props.children}</main>
        </Fragment>
    )
}

export default Layout;