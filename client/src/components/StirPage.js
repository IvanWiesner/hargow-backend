import React from "react"
import { BrowserRouter as Redirect } from "react-router-dom";

function StirPage ({login, setLogin, stirFry, setStirFry}) {

    if (!login) {
        return <Redirect to = "/login"/>
    }

    return (
        <div>

        </div>
    )
}

export default StirPage;