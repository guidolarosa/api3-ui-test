import * as React from "react";
import { useState } from 'react';
import { Flex, Box } from 'rebass';
import styled from 'styled-components';
import theme from '../themes/default';
export const HamburgerIcon = (props) => {
    const [isActive, setIsActive] = useState(false);
    const lineStyle = {
        width: '1.75rem',
        height: '1px',
        background: props.backgroundColor == 'dark' ? theme.colors.white[9] : theme.colors.black[9],
        position: 'absolute',
        left: 0,
        transition: '0.15s ease-in-out all',
    };
    const onClick = () => {
        props.onClick && props.onClick();
        setIsActive(!isActive);
    };
    return (React.createElement(StyledHamburgerIcon, Object.assign({ theme: theme, className: isActive ? 'active' : 'inactive' }, props, { sx: Object.assign({ position: 'relative', flexDirection: 'column', width: '1.75rem', height: '1rem' }, props.sx), onClick: onClick }),
        React.createElement(Box, { sx: Object.assign({ top: '0', opacity: isActive ? 0 : 1 }, lineStyle) }),
        React.createElement(Box, { sx: Object.assign({ top: '0.5rem', transform: isActive ? 'rotate(45deg)' : 'none' }, lineStyle) }),
        React.createElement(Box, { sx: Object.assign({ top: '0.5rem', transform: isActive ? 'rotate(-45deg)' : 'none' }, lineStyle) }),
        React.createElement(Box, { sx: Object.assign({ top: '1rem', opacity: isActive ? 0 : 1 }, lineStyle) })));
};
const StyledHamburgerIcon = styled(Flex) ``;
