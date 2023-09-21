import { Link } from "react-router-dom"

export default function Wrapper() {
    return(
        <ul className="wrapperNav">
            <li>
              <Link className="lists" to="erkek">
                 Erkek
              </Link>
            </li>
            <li>
              <Link className="lists" to="kadin">
                 Kadın
              </Link>
            </li>
            <li>
              <Link className="lists" to="canta">
                 Çanta
              </Link>
            </li>
        </ul>
    )
    
}