import React from 'react';

import styled, {css} from 'styled-components'

const ButtonS = styled.button`
  padding: ${props => props.theme.size.md};
  font: 500 14px 'Noto Sans JP';
  width: auto;
  border-radius: 6px;
  transition: background .3s ease;
  border: none;
  align-self: baseline;

  cursor: pointer;
  outline: none;

  background: ${({color}) => {
    if(color === 'primary') return ({theme}) => theme.color.primary
    else if(color === 'secondary') return ({theme}) => theme.color.secondary
    else if(color === 'danger') return ({theme}) => theme.color.danger
    else return ({theme}) => theme.color.default
  }};
  
  color: ${({color}) => {
    if(color === 'default' || !color) return ({theme}) => theme.color.defaultText;
    else return ({theme}) => theme.color.white;
  }};

  &:hover {
    background: ${({color}) => {
      if(color === 'primary') return ({theme}) => theme.bgHov.primary
      else if(color === 'secondary') return ({theme}) => theme.bgHov.secondary
      else if(color === 'danger') return ({theme}) => theme.bgHov.danger
      else return ({theme}) => theme.bgHov.default
    }};
  }

  ${({variant}) => variant === 'outline' ?  variant && css`
    background: none;
    box-shadow: none !important;
      &:hover {
        background: ${({color}) => {
          if(color === 'primary') return ({theme}) => theme.bgHov.primaryOpacity
          else if(color === 'secondary') return ({theme}) => theme.bgHov.secondaryOpacity
          else if(color === 'danger') return ({theme}) => theme.bgHov.dangerOpacity
          else return ({theme}) => theme.bgHov.defaultOpacity
        }};
      }
      border: ${({color}) =>{
        if(color === 'primary') return ({theme}) => theme.border.primary
        else if(color === 'secondary') return ({theme}) => theme.border.secondary
        else if(color === 'danger') return ({theme}) => theme.border.danger
        else return ({theme}) => theme.border.default
      }};

      color: ${({color}) =>{
        if(color === 'primary') return ({theme}) => theme.color.primary
        else if(color === 'secondary') return ({theme}) => theme.color.secondary
        else if(color === 'danger') return ({theme}) => theme.color.danger
        else return ({theme}) => theme.color.default
      }};

  ` : null}

  &:disabled, &:disabled:hover {
    cursor: not-allowed;
    background: ${({theme}) => theme.color.default};
    box-shadow: none;
    color: ${({theme}) => theme.color.disabled} !important;
  }

  ${({variant}) => variant === 'text' ? variant && css`
    background: none;
    box-shadow: none !important;
      &:hover {
        background: ${({color}) => {
          if(color === 'primary') return ({theme}) => theme.bgHov.primaryOpacity
          else if(color === 'secondary') return ({theme}) => theme.bgHov.secondaryOpacity
          else if(color === 'danger') return ({theme}) => theme.bgHov.dangerOpacity
          else return ({theme}) => theme.bgHov.defaultOpacity
        }};
      }
      color: ${({color}) =>{
        if(color === 'primary') return ({theme}) => theme.color.primary
        else if(color === 'secondary') return ({theme}) => theme.color.secondary
        else if(color === 'danger') return ({theme}) => theme.color.danger
        else return ({theme}) => theme.color.default
      }};
  ` : null}

  padding: ${({size}) => {
    if(size === 'sm') return ({theme}) => theme.size.sm;
    else if(size === 'lg') return ({theme}) => theme.size.lg;
    else return ({theme}) => theme.size.md;
  }};

  ${({startIcon}) => startIcon ? startIcon &&  css`
    display: grid;
    grid-template-columns: 25px 1fr;
    place-items: center;
    gap: 10px;
  ` : null }

  ${({endIcon}) => endIcon ? endIcon &&  css`
    display: grid;
    grid-template-columns: 1fr 25px;
    place-items: center;
    gap: 10px;
    
    span {
      order: 2;
    }
  ` : null }

  ${({disabledShadow}) => disabledShadow ? disabledShadow && css`
      box-shadow: none;
  ` : css`
      box-shadow: ${({color}) => {
        if(color === 'primary') return ({theme}) => theme.shadow.primary;
        else if(color === 'secondary') return ({theme}) => theme.shadow.secondary;
        else if(color === 'danger') return ({theme}) => theme.shadow.danger;
        else return ({theme}) => theme.shadow.default;
      }}; 
  `}
`

const Button = ({children, variant, disabledShadow, color, startIcon, endIcon, size, disabled}) => {
  return (
    <ButtonS onClick={() => console.log('asdsadd')} disabled={disabled} variant={variant} disabledShadow={disabledShadow} color={color} startIcon={startIcon} endIcon={endIcon} size={size}>
      {startIcon || endIcon ?
        <span className="material-icons">
          {startIcon || endIcon}
        </span>
      : null}
      {children}
    </ButtonS>
   );
}

export default Button;