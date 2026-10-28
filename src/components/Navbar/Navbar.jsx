import './Navbar.css';
import { CircleUserRound, Search } from 'lucide-react';
function Navbar() {
    return (
        <header className="navbar">
            {/* Logo area */}
            <div className="logo">
                <h1>Cini Ulagam</h1>
            </div>

            {/* Search area */}
            <div className="search-profile">

                <div className="search-container">
                    <Search />
                    <input type="text" placeholder="Search" />
                </div>

                {/* Profile area */}
                <div className="user">
                    <CircleUserRound />
                </div>

            </div>

        </header>
    );
}

export default Navbar;