import React, { useState, useContext } from 'react';
import { Link, Box } from 'rebass';
import styled from 'styled-components';
import theme from '../themes/default';
// import './../styles/globals.css';

export const NavbarLink = (props : any) => {
    const [linkClass, setLinkClass] = useState('pre-hover');
    return (
        <StyledNavbarLink theme={theme} {...props}
            ml={['2.5rem','1rem','2.5rem','2.5rem']} 
            fontWeight={400} 
            fontSize={'0.875rem'}
            className={linkClass}
            onMouseEnter={() => {setLinkClass('hover')}}
            onMouseLeave={() => {
                setLinkClass('post-hover');
                setTimeout(() => {
                    setLinkClass('pre-hover')
                }, 500)
            }}
            sx={{
                color: props.backgroundColor == 'light' ? theme.colors.black[10] : theme.colors.white[10],
                position: 'relative',
                cursor: 'pointer',
                '&:hover': {
                    '.link-underline': {
                        width: '100%',
                    }
                },
                ...props.sx
            }}
        >
            {props.link.label}
            <Box className="link-underline" sx={{
                position: 'absolute',
                bottom: '-0.5rem',
                left:  linkClass == 'pre-hover' ? 0 : 
                       linkClass == 'hover' ?  0 :
                       linkClass == 'post-hover' ? 'auto' : '',
                right: linkClass == 'pre-hover' ? 0 : 
                       linkClass == 'hover' ?  0 :
                       linkClass == 'post-hover' ? 0 : '',
                width: '0',
                height: '1px',
                display: 'inline-block',
                transition: '0.15s ease-in-out all',
                background: theme.gradients.primary
            }}/>
        </StyledNavbarLink>
    )
};

const StyledNavbarLink = styled(Link)``;

export default NavbarLink;
