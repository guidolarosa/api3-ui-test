import * as React from "react";
import { Button as RBButton, Text, Box } from 'rebass';
import styled, { ThemeContext } from 'styled-components';

export const Button = (props : any) => {
  const theme = React.useContext(ThemeContext);
  return (
    <StyledButton theme={theme} {...props} sx={{
      color: theme.colors.text[9],
      background: theme.colors.background,
      height: '3.5rem',
      width: 'fit-content',
      borderRadius: 0,
      px: '2rem',
      position: 'relative',
      cursor: 'pointer',
      mb: '0.5rem',
      '&:hover': {
        '.gradient-box, .gradient-line': {
          width: '100%'
        }
      },
      ...props.sx,
    }}>
      <Text 
        sx={{
          position: 'relative', 
          zIndex: 5, 
          fontSize: '1.125rem'
        }}
      >
        {props.children}
      </Text>

      <Box sx={{
        position: 'absolute',
        top: '1px',
        left: '1px',
        width: 'calc(100% - 2px)',
        height: 'calc(100% - 2px)',
        background: theme.colors.background,
        zIndex: '3'
        }}
      />
      <Box className="gradient-box" sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '0',
        height: '100%',
        background: theme.gradients.primary,
        zIndex: '2',
        transition: '0.15s ease-in-out all'
        }}
      />
      <Box sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: theme.colors.text[5],
        zIndex: '0'
        }}
      />
      <Box sx={{
        position: 'absolute',
        bottom: '-0.5rem',
        left: 0,
        width: '100%',
        height: '1px',
        background: theme.colors.text[5],
        zIndex: '0'
        }}
      />
      <Box className="gradient-line" sx={{
        position: 'absolute',
        bottom: '-0.5rem',
        left: 0,
        width: '0',
        height: '1px',
        background: theme.gradients.primary,
        zIndex: '2',
        transition: '0.15s ease-in-out all'
        }}
      />
    </StyledButton>
  )
};

const StyledButton = styled(RBButton)``;
