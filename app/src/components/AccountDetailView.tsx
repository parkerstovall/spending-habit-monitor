import type { Account } from '../types'
import { AccountOverTimeChart } from './AccountOverTimeChart'
import { AccountSummaryCard } from './AccountSummaryCard'
import { CustomAccordion } from './CustomAccordion'

export const AccountDetailView = ({ account }: { account: Account }) => {
  return (
    <CustomAccordion level={2} title={account.label}>
      <CustomAccordion level={3} title="Account Summary">
        <AccountSummaryCard account={account} />
      </CustomAccordion>
      <CustomAccordion level={3} title="Account Over Time">
        <AccountOverTimeChart account={account} />
      </CustomAccordion>
    </CustomAccordion>
  )
}
