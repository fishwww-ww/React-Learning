import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            404 Not Found
            <Link to="/">Go to Layout</Link>
        </div>
    );
}

export default NotFound;