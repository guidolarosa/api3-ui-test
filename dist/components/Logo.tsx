import * as React from "react";
import { Box } from 'rebass';
import styled from 'styled-components';
import theme from '../themes/default';
import API3Logo from './../img/API Logo.svg';
import './../styles/globals.css'

export const Logo = (props : any) => {

  const onClick = () => {
    props.onClick && props.onClick();
  }

  return (
    <StyledLogo 
        theme={theme} 
        onClick={onClick} 
        sx={{
            width: ['2.625rem', '3.5rem'],
        }}
        {...props}
        >
        <Box 
            src={API3Logo}
             alt="API3" 
            as='img'
            sx={{
                filter: props.type == 'dark' ? 'none' : 'invert(0.7)'
            }}
        />
    </StyledLogo>
  )
};

const StyledLogo = styled(Box)``;

Logo.defaultProps = {
    type: 'dark'
}

export default Logo;