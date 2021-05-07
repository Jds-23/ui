import styled, { css, keyframes } from 'styled-components'
import theme from '@lidofinance/theme'
import { SelectSize, SelectAppearance } from './types'

export const HEIGHT: Record<SelectSize, number> = {
  small: 40,
  default: 56,
}

export const appearanceStrong = css`
  font-size: 12px;
  font-weight: 700;
  line-height: 20px;
  letter-spacing: 0.4px;
  text-transform: uppercase;
`

export const Wrap = styled.div`
  position: relative;
`

export const InputEmulator = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0;
  padding: 0;
  width: 0;
  height: 0;
  opacity: 0;
`

type BoxProps = {
  size?: SelectSize
  appearance?: SelectAppearance
  isWrong?: boolean
  isFocused?: boolean
}
export const Box = styled.div<BoxProps>`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-family: inherit;
  color: ${theme.colors.text};
  height: ${(p) => HEIGHT[p.size || 'default']}px;
  border-radius: 10px;
  border: 1px solid ${theme.colors.border};
  background-color: ${theme.colors.controlBg};
  transition: border-color ease ${theme.dur.norm};
  cursor: pointer;
  user-select: none;
  border-color: ${(p) =>
    p.isWrong
      ? theme.colors.error
      : p.isFocused
      ? theme.colors.main
      : theme.colors.border};

  ${(p) =>
    p.appearance === 'strong'
      ? appearanceStrong
      : css`
          font-size: 18px;
          font-weight: 400;
        `}

  ${(p) =>
    !p.isFocused &&
    !p.isWrong &&
    css`
      &:hover {
        border-color: ${theme.colors.borderHover};
        transition-duration: ${theme.dur.fast};
      }
    `}
`

export const Placeholder = styled.div`
  color: ${theme.colors.inputPlaceholder};
`

type ArrowProps = {
  isFocused?: boolean
}
export const SelectArrow = styled.div<ArrowProps>`
  position: relative;
  top: -1px;
  margin-right: 0;
  margin-left: auto;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 3px 3px 3px;
  border-color: transparent transparent ${theme.colors.text} transparent;
  transition: transform ease ${theme.dur.norm};

  ${(p) =>
    p.isFocused &&
    css`
      transform: rotate(180deg);
    `}
`