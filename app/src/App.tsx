import './App.css'
import { AccountChooser } from './components/AccountChooser'
import { AccountDetailView } from './components/AccountDetailView'
import { useAccounts } from './context/account-context'

export const App = () => {
  const { accounts } = useAccounts()
  const prepare = async () => {
    if (import.meta.env.DEV) {
      const { worker } = await import('./mock/browser')
      await worker.start()
    }
  }

  return prepare().then(() => (
    <>
      <AccountChooser />
      {accounts.map((account) => {
        return <AccountDetailView key={account.id} account={account} />
      })}
    </>
  ))
}
