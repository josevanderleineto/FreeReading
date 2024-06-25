// eslint-disable-next-line no-unused-vars
import { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import { GiBookshelf } from "react-icons/gi";
import { TbCategoryPlus } from "react-icons/tb";
import { IoSearch } from "react-icons/io5";
import { Link } from 'react-router-dom';








const Header = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(prevMenuVisible => !prevMenuVisible);
    };


    return(
        <div>

        <div className="container"> 

            <nav>
                <button type="button" onClick={toggleMenu}><IoMenu className="menu"/>
                 </button>
                {menuVisible && (
                    <ul>
                        <li><Link to="/"><FaHome className="menuIcon"/>Home</Link></li>
                        <li><Link to="/catalog"><GiBookshelf className="menuIcon"/>Catalogo
                        </Link></li>
                        <li><Link to="*"><TbCategoryPlus className="menuIcon"/>
                        Categorias</Link></li>                
                    </ul>
                )}
            </nav>
        </div>
        </div>

    );
}

export default Header;
