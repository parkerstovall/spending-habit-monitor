export type Account = {
  id: number
  label: string
}

export type AccountTotal = {
  accountId: number
  totalIncome: number
  totalCharges: number
  balance: number
}

export type AccountInfoByDay = {
  accountId: number
  data: {
    date: string
    income: number
    charges: number
  }[]
}
