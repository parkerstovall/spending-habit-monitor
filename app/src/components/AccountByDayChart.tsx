import { LineChart } from '@mui/x-charts'
import type { AccountInfoByDay } from '../types'
import { Paper } from '@mui/material'

export const AccountByDayChart = ({
  accountName,
  accountInfo,
}: {
  accountName: string
  accountInfo: AccountInfoByDay
}) => {
  const dates = accountInfo.data.map((entry) => new Date(entry.date))
  const incomeData = accountInfo.data.map((entry) => entry.income)
  const chargesData = accountInfo.data.map((entry) => entry.charges)
  console.log(dates, incomeData, chargesData)

  return (
    <Paper elevation={1} className="p-4 mb-6">
      <h2>{accountName}</h2>
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
        title={accountName + ' - Account Info By Day'}
      />
    </Paper>
  )
}
