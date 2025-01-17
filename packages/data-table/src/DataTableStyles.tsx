import { Question } from '@lidofinance/icons'
import styled from 'styled-components'

export const DataTableStyle = styled.div``

export const DataTableRowStyle = styled.div`
  display: flex;
  margin: ${({ theme }) => theme.spaceMap.md}px 0;
  font-weight: 500;
  font-size: ${({ theme }) => theme.fontSizesMap.xxs}px;
  line-height: 1.6em;

  &:first-child {
    margin-top: 0;
  }

  &:last-child {
    margin-bottom: 0;
  }
`

export const DataTableTitleStyle = styled.div`
  color: ${({ theme }) => theme.colors.textSecondary};
  flex-grow: 1;
`

export const DataTableValueStyle = styled.div<{ $highlight: boolean }>`
  color: ${({ theme, $highlight }) =>
    $highlight ? theme.colors.success : theme.colors.text};
  text-align: right;
  margin-left: ${({ theme }) => theme.spaceMap.xxl}px;
  flex-grow: 1;
`

export const DataTableQuestionStyle = styled(Question)`
  margin: -6px 0 -5px 0;
  vertical-align: middle;
`
