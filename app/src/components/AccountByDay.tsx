import { useAccounts } from '../context/account-context'
import { useAccountInfoByDay } from '../hooks/use-account-info-by-day'
import { AccountByDayChart } from './AccountByDayChart'

export const AccountByDay = () => {
  const { accounts } = useAccounts()
  const infoByDay = useAccountInfoByDay(accounts)

  if (infoByDay.length === 0) {
    return null
  }

  return (
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Account Info By Day</h2>
      {infoByDay.map((accountInfo) => (
        <AccountByDayChart
          accountName={
            accounts.find((account) => account.id === accountInfo.accountId)
              ?.label || ''
          }
          accountInfo={accountInfo}
          key={accountInfo.accountId}
        />
      ))}
    </div>
  )
}
