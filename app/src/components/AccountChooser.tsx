import { Autocomplete, FormControl, TextField } from '@mui/material'
import { useAccountList } from '../hooks/use-account-list'
import { useAccounts } from '../context/account-context'

export const AccountChooser = () => {
  const allAccounts = useAccountList()
  const { accounts, setAccounts } = useAccounts()
  return (
    <div className="max-w-sm my-10">
      <FormControl fullWidth>
        <Autocomplete
          options={allAccounts}
          value={accounts}
          multiple
          onChange={(_event, value) => {
            setAccounts(
              value.filter(
                (account, index, self) =>
                  index === self.findIndex((a) => a.id === account.id),
              ),
            )
          }}
          renderInput={(params) => (
            <TextField {...params} label="Select Account" />
          )}
        />
      </FormControl>
    </div>
  )
}
