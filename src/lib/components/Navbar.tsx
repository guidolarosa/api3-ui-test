import * as React from "react";
import { Flex, Text, Box, Image, Link } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import { HamburgerIcon } from "./HamburgerIcon";
import * as Popover from '@radix-ui/react-popover';
import NavbarLink from './NavbarLink';
import theme from '../themes/default';

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
        <StyledNavbar data-aos={'fade-down'} className="navbar" sx={{position: 'relative', zIndex: '1'}}>
            <Flex 
                sx={theme.layouts.expanded}
                height="7.5rem"
                alignItems={'center'}
                justifyContent={'space-between'}
            >
                <Link href="/">
                    <Image 
                        src="/API Logo.svg" 
                        height={['2.625rem', '3.5rem']} 
                    />
                </Link>
                <Flex sx={{display: ['block', 'none', 'none', 'none']}}>
                    <HamburgerIcon />
                </Flex>
                <Box as="nav" sx={{display: ['none', 'block', 'block', 'block']}} className={'desktop-nav'}>
                    <Flex as="ul" sx={{listStyle: 'none'}}>
                    {Links.map((link, index) => (
                        <Box as="li">
                            <NavbarLink link={link}>
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

const StyledNavbar = styled(Flex)``;
