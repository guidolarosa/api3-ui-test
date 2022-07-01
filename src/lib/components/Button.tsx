import * as React from "react";
import { Button as RBButton, Text, Box } from 'rebass';
import styled, { ThemeContext } from 'styled-components';
import theme from '../themes/default';

interface ButtonProps {
  type: 'primary' | 'secondary',
  sx: any,
  children: any,
  useGlare: boolean
}

export const Button = (props : ButtonProps) => {
  
  const { type, sx, children, useGlare } = props;

  const [glarePosition, setGlarePosition] = React.useState<any>([]);

  const buttonRef = React.useRef(null);

  return (
    <StyledButton 
      theme={theme} ref={buttonRef} {...props} onMouseMove={(e : any) => {
        let button : any = buttonRef.current;
        let leftOffset : number = button.getBoundingClientRect().x;
        let topOffset : number = button.getBoundingClientRect().y;
        setGlarePosition([
          e.pageX - leftOffset ,
          e.pageY - topOffset
        ])
      }} sx={{
      color: theme.colors.text[9],
      background: theme.colors.background,
      height: '3.5rem',
      width: 'fit-content',
      borderRadius: 0,
      pr: '2rem',
      pl: type == 'primary' ? '2rem' : '1rem',
      position: 'relative',
      cursor: 'pointer',
      mb: '0.5rem',
      '&:hover': {
        '.gradient-box, .gradient-line': {
          width: '100%'
        },
        '.glare': {
          opacity: '1'
        }
      },
      ...sx,
    }}>
      <Text 
        sx={{
          position: 'relative', 
          zIndex: 5, 
          fontSize: '1.125rem'
        }}
      >
        {children}
      </Text>

      <Box sx={{
        position: 'absolute',
        top: '1px',
        left: type == 'primary' ? '1px' : '0',
        width: type == 'primary' ? 'calc(100% - 2px)' : '100%',
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
        zIndex: '0',
        pointerEvents: 'none',
        display: type == 'primary' ? 'block' : 'none'
        }}
      />
      { useGlare && (
        <Box className={'glare-container'} sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          overflow: 'hidden',
        }}
        >
          <Box className={'glare'}
            sx={{
              transition: 'ease-in-out 0.25s opacity',
              position: 'absolute',
              opacity: 0,
              top: 0,
              left: 0,
              borderRadius: '3rem',
              width: '15rem',
              height: '15rem',
              background: `radial-gradient(
                ${theme.colors.text[3]}, ${theme.colors.text[0]})`,
              zIndex: '5',
              
              pointerEvents: 'none',
              transform: `translate(calc(${glarePosition[0]}px - 7.5rem), calc(${glarePosition[1]}px - 3.75rem))`,
            }}
          />
        </Box>
      )}
      <Box className="gradient-line" sx={{
        position: 'absolute',
        bottom: '-0.5rem',
        left: 0,
        width: '0',
        height: '1px',
        background: theme.gradients.primary,
        zIndex: '2',
        transition: '0.15s ease-in-out all',
        pointerEvents: 'none',
        display: type == 'primary' ? 'block' : 'none'
        }}
      />
    </StyledButton>
  )
};

Button.defaultProps = {
  type: 'primary',
  children: '',
  useGlare: false
}

const StyledButton = styled(RBButton)``;
