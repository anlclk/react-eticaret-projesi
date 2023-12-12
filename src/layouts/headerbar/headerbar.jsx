import { Link } from "react-router-dom";


export default function HeaderBar() {
    return(
        <header className="header">
            <Link to="/">
                <h1>VMBI</h1>
            </Link>
            <div className="headerNav">
                <Link to="#">
                    <svg viewBox="0 0 24 24" >
                        <path d="M5.651 19h12.698c-.337-1.8-1.023-3.21-1.945-4.19C15.318 13.65 13.838 13 12 13s-3.317.65-4.404 1.81c-.922.98-1.608 2.39-1.945 4.19zm.486-5.56C7.627 11.85 9.648 11 12 11s4.373.85 5.863 2.44c1.477 1.58 2.366 3.8 2.632 6.46l.11 1.1H3.395l.11-1.1c.266-2.66 1.155-4.88 2.632-6.46zM12 4c-1.105 0-2 .9-2 2s.895 2 2 2 2-.9 2-2-.895-2-2-2zM8 6c0-2.21 1.791-4 4-4s4 1.79 4 4-1.791 4-4 4-4-1.79-4-4z"></path>
                    </svg>
                    <h4>Hesabım</h4>
                </Link>
                <Link to="#">
                    <svg fill="#fff" stroke-width="2" stroke="#000" viewBox="0 0 24 24"><circle r="1" cy="21" cx="9"></circle><circle r="1" cy="21" cx="20"></circle>
                        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                    <h4>Sepetim</h4>
                </Link>

            </div>
        </header>
    );
}