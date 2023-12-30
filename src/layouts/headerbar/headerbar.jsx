import { Link } from "react-router-dom";

export default function HeaderBar() {
    return(
        <header className="header">
            <Link to="/">
                <h1>VMBI</h1>
            </Link>
        </header>
    );
}