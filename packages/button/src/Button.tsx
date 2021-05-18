import { ForwardedRef, forwardRef } from 'react'
import {
  ButtonStyle,
  ButtonContentStyle,
  ButtonLoaderStyle,
} from './ButtonStyles'
import { ButtonProps } from './types'
import { useRipple } from './useRipple'

const loaderSizes = {
  xs: 'small',
  sm: 'small',
  md: 'medium',
  lg: 'medium',
} as const

function Button(props: ButtonProps, ref?: ForwardedRef<HTMLButtonElement>) {
  const {
    size = 'md',
    variant = 'filled',
    color = 'primary',
    square = false,
    fullwidth = false,
    loading = false,
    disabled,
    children,
    ...rest
  } = props

  const { handleClick, ripple } = useRipple(props)
  const loaderSize = loaderSizes[size]

  return (
    <ButtonStyle
      $size={size}
      $variant={variant}
      $fullwidth={fullwidth}
      $color={color}
      $square={square}
      $loading={loading}
      onClick={handleClick}
      disabled={disabled || loading}
      type='button'
      ref={ref}
      {...rest}
    >
      <ButtonContentStyle $hidden={loading}>{children}</ButtonContentStyle>
      {loading && <ButtonLoaderStyle size={loaderSize} />}
      {ripple}
    </ButtonStyle>
  )
}

export default forwardRef(Button)