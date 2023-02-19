import React from 'react';
import {
    Nav, Navbar, NavbarBrand, NavItem,
    NavLink
} from 'reactstrap';

function Header() {
    return (
        <Navbar color="light" container="sm" className='navbar-light'>
            <NavbarBrand href="/">
                <img src='https://teros.com.br/wp-content/uploads/2021/04/Logotagline.svg' alt='Teros Logotipo' />
            </NavbarBrand>
            <Nav className="me-auto" navbar>
                <NavItem >
                    <NavLink href="/">Home</NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    );
}

export default Header;