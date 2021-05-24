import styled, { css } from 'styled-components'
import { InputMessageVariants, InputVariants } from './types'
import {
  labelEmptyValueCSS,
  labelFocusCSS,
  labelErrorCSS,
  InputLabelStyle,
} from './LabelStyles'

const statesCSS = css`
  &:hover {
    z-index: 1;
    border-color: ${({ theme }) => theme.colors.borderHover};
  }

  &:focus-within {
    z-index: 2;
    border-color: ${({ theme }) => theme.colors.primary};

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`

const activeCSS = css`
  &,
  &:hover,
  &:focus-within {
    z-index: 2;
    border-color: ${({ theme }) => theme.colors.primary};

    ${InputLabelStyle} {
      ${labelFocusCSS}
    }
  }
`

const errorCSS = css`
  &,
  &:hover,
  &:focus-within {
    border-color: ${({ theme }) => theme.colors.error};

    ${InputLabelStyle} {
      ${labelErrorCSS}
    }
  }
`

export const InputWrapperStyle = styled.label<{
  $error: boolean
  $active: boolean
  $disabled: boolean
  $fullwidth: boolean
}>`
  position: relative;
  display: inline-flex;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background: ${({ theme }) => theme.colors.controlBg};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.lg}px;
  align-items: stretch;
  box-sizing: border-box;
  padding: 0 15px;
  margin-bottom: 40px;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'text')};
  transition: border-color ${({ theme }) => theme.duration.fast} ease;
  color: ${({ theme }) => theme.colors.text};
  width: ${({ $fullwidth }) => ($fullwidth ? '100%' : 'auto')};

  ${({ $disabled }) => ($disabled ? '' : statesCSS)}

  ${({ $active }) => ($active ? activeCSS : '')}
  ${({ $error }) => ($error ? errorCSS : '')}
`

const contentVariants = {
  default: css`
    padding: 17px 0;
  `,
  small: css`
    padding: 9px 0;
  `,
}

export const InputContentStyle = styled.span<{ $variant: InputVariants }>`
  font-size: ${({ theme }) => theme.fontSizesMap.sm}px;
  display: flex;
  flex-grow: 1;
  position: relative;

  ${({ $variant }) => contentVariants[$variant]};
`

const labeledCSS = css`
  &:not(:focus):placeholder-shown {
    & + ${InputLabelStyle} {
      ${labelEmptyValueCSS}
    }

    &::placeholder {
      opacity: 0;
    }
  }
`

export const InputStyle = styled.input<{ $labeled: boolean }>`
  width: 100%;
  font-family: inherit;
  font-size: 1em;
  line-height: 1.25em;
  padding: 0;
  border-radius: 0px;
  background: transparent;
  box-shadow: none;
  border: none;
  outline: none;
  position: relative;
  top: ${({ $labeled }) => ($labeled ? 8 : 0)}px;
  color: ${({ theme }) => theme.colors.text};

  &:disabled {
    color: ${({ theme }) => theme.colors.textSecondary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
    transition: opacity ${({ theme }) => theme.duration.fast} ease;
    opacity: 0.5;
  }

  &:-webkit-autofill {
    box-shadow: 0 0 0 100px ${({ theme }) => theme.colors.controlBg} inset !important;
  }

  ${({ $labeled }) => ($labeled ? labeledCSS : '')}
`

const messageVariants = {
  error: css`
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.errorContrast};
    box-shadow: ${({ theme }) =>
      `${theme.boxShadows.sm} ${theme.colors.shadowLight}`};
  `,
  success: css`
    color: ${({ theme }) => theme.colors.success};
  `,
}

export const InputMessageStyle = styled.span<{
  $variant: InputMessageVariants
}>`
  left: -1px;
  position: absolute;
  margin-top: 5px;
  top: 100%;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  border-radius: ${({ theme }) => theme.borderRadiusesMap.sm}px;
  line-height: 1.4em;
  padding: 6px 10px;
  white-space: nowrap;
  overflow: hidden;
  box-sizing: border-box;
  text-overflow: ellipsis;
  max-width: calc(100% + 2px);

  ${({ $variant }) => messageVariants[$variant]}
`

const decoratorCSS = css`
  flex-grow: 0;
  flex-shrink: 0;
  cursor: inherit;
  display: flex;
  align-items: center;
`

export const InputLeftDecoratorStyle = styled.span`
  ${decoratorCSS}
  padding-right: 16px;
`

export const InputRightDecoratorStyle = styled.span`
  ${decoratorCSS}
  padding-left: 16px;
`
