import React, { Fragment } from 'react'
import { ToastContainer , toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import Weather from './components/Weather'

const App = () => {
    return (
        <Fragment>
            <Weather />
            <ToastContainer />
        </Fragment>
    )
}

export default App
