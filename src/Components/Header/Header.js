import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import icons from '../../image/icon.png'

const Header = () => {
    const navbaritems = [
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'Home',
            root: '/'

        },
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'About',
            root: '/about'

        },
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'Become a Donor',
            root: '/donor-registation'

        },
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'Need Blood',
            root: '/need-blood'

        },
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'Search Blood',
            root: '/search-blood'

        },
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'Contact',
            root: '/contact'

        },
        {
            liCName: 'nav-item',
            linkCName: 'nav-link',
            menu: 'Admin',
            root: '/admin'

        },
    ]
    return (
        <div className="header">
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <Link className="navbar-brand text-white" to="/"><strong>Blood Bank System</strong></Link>

                    <img className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-label="Toggle navigation" style={{ height: '50px' }} src={icons} />

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                navbaritems.map(nav => <li className={nav.liCName}>
                                    <Link className={nav.linkCName} to={nav.root} style={{ color: '#fff' }}>{nav.menu}</Link>
                                </li>)
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Header;