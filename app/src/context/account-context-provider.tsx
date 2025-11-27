import { useState, type ReactNode } from 'react'
import type { Account } from '../types'
import { AccountsContext } from './account-context'

export const AccountsProvider = ({ children }: { children: ReactNode }) => {
  const [accounts, setAccounts] = useState<Account[]>([])

  const value = { accounts, setAccounts }

  return (
    <AccountsContext.Provider value={value}>
      {children}
    </AccountsContext.Provider>
  )
}
