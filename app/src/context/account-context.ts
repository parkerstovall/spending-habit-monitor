import { createContext, useContext } from 'react'
import type { Account } from '../types'

// Define the context type
type AccountsContextType = {
  accounts: Account[]
  setAccounts: (accounts: Account[]) => void
}

export const AccountsContext = createContext<AccountsContextType | undefined>(
  undefined,
)

export const useAccounts = () => {
  const context = useContext(AccountsContext)
  if (!context) {
    throw new Error('useAccounts must be used within AccountsProvider')
  }
  return context
}
