import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { TbCategoryPlus } from "react-icons/tb";
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prevMenuVisible => !prevMenuVisible);
    };

    return (
        <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" onClick={toggleMenu}>
                    <IoMenu className="menu-icon" />
                </button>
                <div className={`collapse navbar-collapse ${menuVisible ? 'show' : ''}`}>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <FaHome className="menuIcon" /> Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/catalog" className="nav-link">
                                <GiBookshelf className="menuIcon" /> Catalogo
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="*" className="nav-link">
                                <TbCategoryPlus className="menuIcon" /> Categorias
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;
