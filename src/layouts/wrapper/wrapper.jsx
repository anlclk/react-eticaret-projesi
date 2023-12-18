import { Link } from "react-router-dom";


export default function Wrapper() {
    return(
        <ul className="wrapperNav">
            <li>
                <Link to="/" className="lists">
                    Tüm ürünler
                </Link>
            </li>
            <li>
                <Link to="erkek" className="lists">
                    Erkek
                </Link>
            </li>
            <li>
                <Link to="kadin" className="lists">
                    Kadın
                </Link>
            </li>
            <li>
                <Link to="canta" className="lists">
                    Çanta
                </Link>
            </li>
        </ul>
    );
}