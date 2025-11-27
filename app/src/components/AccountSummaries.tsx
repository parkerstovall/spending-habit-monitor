import { useAccounts } from '../context/account-context'
import { useAccountTotals } from '../hooks/use-account-totals'
import { AccountSummaryCard } from './AccountSummaryCard'

export const AccountSummaries = () => {
  const { accounts } = useAccounts()
  const totals = useAccountTotals(accounts)

  if (totals.length === 0) {
    return null
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Account Summaries</h2>
      <div className="grid grid-cols-3 gap-4">
        {totals.map((total) => {
          return (
            <AccountSummaryCard
              key={total.accountId}
              accountName={
                accounts.find((account) => account.id === total.accountId)
                  ?.label || ''
              }
              accountTotal={total}
            />
          )
        })}
      </div>
    </div>
  )
}
