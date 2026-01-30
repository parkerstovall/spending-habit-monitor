import { LineChart } from '@mui/x-charts'
import { useAccountInfoByDay } from '../hooks/use-account-info-by-day'
import type { Account } from '../types'

export const AccountOverTimeChart = ({ account }: { account: Account }) => {
  const accountInfo = useAccountInfoByDay(account)
  const dates = accountInfo.map((entry) => new Date(entry.date))
  const incomeData = accountInfo.map((entry) => entry.income)
  const chargesData = accountInfo.map((entry) => entry.charges)

  return (
    <LineChart
      xAxis={[
        {
          data: dates,
          valueFormatter: (value: Date) => {
            return `${value.getMonth() + 1}/${value.getDate()}`
          },
          scaleType: 'point',
        },
      ]}
      series={[
        {
          data: incomeData,
          label: 'Income',
        },
        {
          data: chargesData,
          label: 'Charges',
        },
      ]}
      title={'Account Info By Day'}
    />
  )
}
