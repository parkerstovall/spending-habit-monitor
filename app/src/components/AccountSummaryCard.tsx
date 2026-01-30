import type { Account } from '../types'
import { useAccountTotals } from '../hooks/use-account-totals'

export const AccountSummaryCard = ({ account }: { account: Account }) => {
  const accountTotal = useAccountTotals(account)

  return (
    <div>
      <p className="font-bold text-lg">Balance: ${accountTotal.balance}</p>
      <p className="text-green-600">Income: + ${accountTotal.totalIncome}</p>
      <p className="text-red-600">Charges: - ${accountTotal.totalCharges}</p>
    </div>
  )
}
