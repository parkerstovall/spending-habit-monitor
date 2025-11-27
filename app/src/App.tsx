import './App.css'
import { AccountByDay } from './components/AccountByDay'
import { AccountChooser } from './components/AccountChooser'
import { AccountSummaries } from './components/AccountSummaries'

export const App = () => {
  return (
    <>
      <AccountChooser />
      <AccountSummaries />
      <AccountByDay />
    </>
  )
}
