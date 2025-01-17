import styled from 'styled-components'
import { Close } from '@lidofinance/icons'
import { ButtonIcon } from '@lidofinance/button'

export const ModalStyle = styled.div<{ $center: boolean }>`
  width: 432px;
  max-width: 100%;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xs}px;
  line-height: 1.5em;
  text-align: ${({ $center }) => ($center ? 'center' : 'left')};
  border-radius: ${({ theme }) => theme.borderRadiusesMap.xl}px;
  box-shadow: ${({ theme }) =>
    `${theme.boxShadows.xxl} ${theme.colors.shadowDark}`};
`

export const ModalBaseStyle = styled.div`
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.foreground};
  border-radius: inherit;
  position: relative;
  z-index: 1;
`

export const ModalHeaderStyle = styled.div<{
  $short: boolean
  $withTitleIcon: boolean
}>`
  display: flex;
  align-items: ${({ $withTitleIcon }) =>
    $withTitleIcon ? 'flex-start' : 'center'};
  min-height: 32px;
  margin: 0;
  margin-bottom: ${({ $short, theme }) => ($short ? -theme.spaceMap.md : 0)}px;
  padding: ${({ theme }) => theme.spaceMap.xl}px
    ${({ theme }) => theme.spaceMap.xxl}px;
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  line-height: 1.5em;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.xl}px
      ${({ theme }) => theme.spaceMap.lg}px;
  }
`

export const ModalTitleStyle = styled.div<{
  $center: boolean
  $withTitleIcon: boolean
}>`
  font-size: ${({ theme }) => theme.fontSizesMap.md}px;
  line-height: 1.5em;
  font-weight: 800;
  margin-right: auto;
  padding-right: 32px;
  padding-left: ${({ $center }) => ($center ? '32px' : '0px')};
  padding-top: ${({ $withTitleIcon }) => ($withTitleIcon ? '40px' : '0')};
  margin-bottom: -20px;
  flex-grow: 1;

  ${({ $center, $withTitleIcon }) =>
    $center &&
    $withTitleIcon &&
    `
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`

export const ModalTitleIconStyle = styled.div`
  padding-bottom: ${({ theme }) => theme.spaceMap.xl}px;
`

export const ModalCloseStyle = styled(ButtonIcon).attrs({
  icon: <Close />,
  color: 'secondary',
  variant: 'ghost',
  size: 'xs',
})`
  flex-shrink: 0;
  margin: 0 -10px 0 -22px;
  border-radius: 50%;

  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0 0 0 -32px;
  }
`

export const ModalContentStyle = styled.div`
  padding: ${({ theme }) => theme.spaceMap.xxl}px;
  padding-top: 0;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: ${({ theme }) => theme.spaceMap.lg}px;
    padding-top: 0;
  }
`
