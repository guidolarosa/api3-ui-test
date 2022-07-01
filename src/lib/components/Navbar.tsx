import * as React from "react";
import { Flex, Text, Box, Image, Link } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import { HamburgerIcon } from "./HamburgerIcon";
import * as Popover from '@radix-ui/react-popover';
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

export const Navbar = (props : any) => {
    return (
        <StyledNavbar data-aos={'fade-down'} className="navbar" sx={{
            position: 'relative', 
            zIndex: '1',
            background: props.style == 'light' ? 'white' : theme.colors.background
            }}>
            <Flex 
                sx={theme.layouts.expanded}
                height="7.5rem"
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Link href="/">
                    <Logo type={props.style}/>
                </Link>
                <Flex sx={{display: ['block', 'none', 'none', 'none']}}>
                    <HamburgerIcon backgroundColor={props.style}/>
                </Flex>
                <Box as="nav" sx={{display: ['none', 'block', 'block', 'block']}} className={'desktop-nav'}>
                    <Flex as="ul" sx={{listStyle: 'none'}}>
                    {Links.map((link, index) => (
                        <Box as="li" key={index}>
                            <NavbarLink 
                                link={link} 
                                backgroundColor={props.style}
                            >
                                {link.label}
                            </NavbarLink>
                        </Box>
                    ))}
                    </Flex>
                </Box>
            </Flex>
        </StyledNavbar>
    )
}

Navbar.defaultProps = {
    style: 'dark'
}

const StyledNavbar = styled(Flex)``;
