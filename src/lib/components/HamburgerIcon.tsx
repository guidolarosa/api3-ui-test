import * as React from "react";
import { useState } from 'react';
import { Flex, Box } from 'rebass';
import styled, { ThemeContext } from 'styled-components';

export const HamburgerIcon = (props : any) => {
  const theme = React.useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  const lineStyle = {
    width: '1.75rem',
    height: '1px',
    background: theme.colors.text[9],
    position: 'absolute',
    left: 0,
    transition: '0.15s ease-in-out all',
  };

  const onClick = () => {
    props.onClick && props.onClick();
    setIsActive(!isActive);
  }

  return (
    <StyledHamburgerIcon theme={theme} className={isActive ? 'active' : 'inactive'} {...props} sx={{
      position: 'relative',
      flexDirection: 'column',
      width: '1.75rem',
      height: '1rem',
      ...props.sx
    }}
      onClick={onClick}>
      <Box sx={{
        top: '0',
        opacity: isActive ? 0 : 1,
        ...lineStyle
      }}/>
      <Box sx={{
        top: '0.5rem',
        transform: isActive ? 'rotate(45deg)' : 'none',
        ...lineStyle
      }}/>
      <Box sx={{
        top: '0.5rem',
        transform: isActive ? 'rotate(-45deg)' : 'none',
        ...lineStyle
      }}/>
      <Box sx={{
        top: '1rem',
        opacity: isActive ? 0 : 1,
        ...lineStyle
      }}/>
    </StyledHamburgerIcon>
  )
};

const StyledHamburgerIcon = styled(Flex)``;
