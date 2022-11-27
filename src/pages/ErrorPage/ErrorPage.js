import React from 'react'
import { useRouteError } from "react-router-dom";



function ErrorPage() {
    const error = useRouteError();
    console.error(error);
    return (
        <div>I am still in Development process</div>
    )
}

export default ErrorPage