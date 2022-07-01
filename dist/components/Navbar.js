import * as React from "react";
import { Flex, Box, Link } from 'rebass';
import styled from 'styled-components';
import { HamburgerIcon } from "./HamburgerIcon";
import NavbarLink from './NavbarLink';
import Logo from './Logo';
import theme from '../themes/default';
// import './../styles/globals.css';
const Links = [
    {
        label: 'Solutions',
    },
    {
        label: 'Industry',
    },
    {
        label: 'Learn',
    },
    {
        label: 'Participate'
    },
    {
        label: 'Whitepaper'
    },
    {
        label: 'Contact'
    },
];
export const Navbar = (props) => {
    return (React.createElement(StyledNavbar, { "data-aos": 'fade-down', className: "navbar", sx: {
            position: 'relative',
            zIndex: '1',
            background: props.style == 'light' ? 'white' : theme.colors.background
        } },
        React.createElement(Flex, { sx: theme.layouts.expanded, height: "7.5rem", alignItems: 'center', justifyContent: 'space-between' },
            React.createElement(Link, { href: "/" },
                React.createElement(Logo, { type: props.style })),
            React.createElement(Flex, { sx: { display: ['block', 'none', 'none', 'none'] } },
                React.createElement(HamburgerIcon, { backgroundColor: props.style })),
            React.createElement(Box, { as: "nav", sx: { display: ['none', 'block', 'block', 'block'] }, className: 'desktop-nav' },
                React.createElement(Flex, { as: "ul", sx: { listStyle: 'none' } }, Links.map((link, index) => (React.createElement(Box, { as: "li", key: index },
                    React.createElement(NavbarLink, { link: link, backgroundColor: props.style }, link.label)))))))));
};
Navbar.defaultProps = {
    style: 'dark'
};
const StyledNavbar = styled(Flex) ``;
