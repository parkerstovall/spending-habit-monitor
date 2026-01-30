import type { Account } from '../types'

export const useAccountTotals = (accounts: Account) => {
  return [
    {
      accountId: 1,
      totalIncome: 3000,
      totalCharges: 2000,
      balance: 1000,
    },
    {
      accountId: 2,
      totalIncome: 1500,
      totalCharges: 500,
      balance: 1000,
    },
    {
      accountId: 3,
      totalIncome: 5000,
      totalCharges: 4500,
      balance: 500,
    },
  ].find((total) => total.accountId === accounts.id)!
}
