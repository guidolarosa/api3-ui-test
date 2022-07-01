import * as React from "react";
import { Box } from 'rebass';
import styled from 'styled-components';
import theme from './../themes/default';
import './../public/css/globals.css';
import API3Logo from './../public/img/API Logo.svg';

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
            alt="API3" 
            as='img'
            src={API3Logo}
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