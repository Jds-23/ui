import { LidoComponentProps } from '@lidofinance/utils'
export type { Theme } from '@lidofinance/theme'

export enum InputMessageVariant {
  error,
  success,
}
export type InputMessageVariants = keyof typeof InputMessageVariant

export enum InputType {
  text,
  password,
  number,
  email,
  search,
  tel,
  url,
}
export type InputTypes = keyof typeof InputType

export type InputProps = LidoComponentProps<
  'input',
  {
    label?: React.ReactNode
    error?: React.ReactNode
    success?: React.ReactNode
    leftDecorator?: React.ReactNode
    rightDecorator?: React.ReactNode
    type?: InputTypes
    wrapperRef?: React.RefObject<HTMLLabelElement>
    as?: never
  }
>