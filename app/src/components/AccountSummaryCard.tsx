import { Card, CardContent, CardHeader } from '@mui/material'
import type { AccountTotal } from '../types'

export const AccountSummaryCard = ({
  accountName,
  accountTotal,
}: {
  accountName: string
  accountTotal: AccountTotal
}) => {
  return (
    <Card>
      <CardHeader title={accountName} />
      <CardContent>
        <p className="font-bold text-lg">${accountTotal.balance}</p>
        <p className="text-green-600">+ ${accountTotal.totalIncome}</p>
        <p className="text-red-600">- ${accountTotal.totalCharges}</p>
      </CardContent>
    </Card>
  )
}
