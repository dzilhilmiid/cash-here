import { Link, Outlet } from "react-router-dom"
import "../styles/userlayout.css"
import "../styles/color.css"
import {
    FaHome,
    FaArrowDown,
    FaArrowUp,
    FaExchangeAlt,
    FaChartBar,
    FaWallet,
    FaPiggyBank,
    FaBell,
    FaSearch
} from "react-icons/fa"

function UserLayout() {
    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="logo">
                    <h1>Cash-Here</h1>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/dashboard"><FaHome />Dashboard</Link></li>
                        <li><Link to="/income"><FaArrowDown />Pemasukan</Link></li>
                        <li><Link to="/expense"><FaArrowUp />Pengeluaran</Link></li>
                        <li><Link to="/transfer"><FaExchangeAlt />Transfer</Link></li>
                        <li><Link to="/report"><FaChartBar />Laporan</Link></li>
                        <li><Link to="/budget"><FaWallet />Budget</Link></li>
                    </ul>
                </nav>
            </aside>

            <div className="main-section">
                <header className="topbar">
                    <div className="topbar-left">
                        <div className="searchbox">
                            <input
                                type="text"
                                placeholder="Apa yang kamu cari?"
                            />
                            <button>
                                <FaSearch />
                            </button>
                        </div>
                    </div>
                    <div className="topbar-right">
                        <div className="notification">
                            <FaBell />
                        </div>
                        <div className="profile">
                            <img
                                src="https://i.pravatar.cc/40"
                                alt="Profile"
                                className="profile-img"
                            />

                            <div className="dropdown">
                                <Link to="/profile">Profile</Link>
                                <Link to="/setting">Setting</Link>

                                <button
                                    type="button"
                                    className="logout-btn"
                                >
                                    Logout
                                </button>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="content">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}

export default UserLayout