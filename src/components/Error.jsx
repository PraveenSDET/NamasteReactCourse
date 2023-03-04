import { useRouteError } from "react-router-dom";

const Error = () => {
    const err = useRouteError()
    return (
        <div>
            <h1>{`${err.status}: ${err.statusText}`}</h1>
            <h3>{err.data}</h3>
            {console.log(err)}
        </div>
    )
}

export default Error;