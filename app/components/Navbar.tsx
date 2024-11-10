// components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light menu-bg-color fixed-top">
            <div className="container">
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link href="#home" className="nav-link text-white">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#about" className="nav-link text-white">
                                Download PDF
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="#tools" className="nav-link text-white">
                                Tools
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
