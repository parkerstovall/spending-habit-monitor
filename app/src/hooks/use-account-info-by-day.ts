import type { Account } from '../types'

export const useAccountInfoByDay = (accounts: Account[]) => {
  return [
    {
      accountId: 1,
      data: [
        { date: '2024-10-01', income: 500, charges: 300 },
        { date: '2024-10-02', income: 700, charges: 200 },
        { date: '2024-10-03', income: 600, charges: 350 },
        { date: '2024-10-04', income: 550, charges: 280 },
        { date: '2024-10-05', income: 800, charges: 400 },
        { date: '2024-10-06', income: 450, charges: 250 },
        { date: '2024-10-07', income: 750, charges: 320 },
        { date: '2024-10-08', income: 900, charges: 500 },
        { date: '2024-10-09', income: 650, charges: 290 },
        { date: '2024-10-10', income: 700, charges: 380 },
        { date: '2024-10-11', income: 850, charges: 450 },
        { date: '2024-10-12', income: 600, charges: 310 },
      ],
    },
    {
      accountId: 2,
      data: [
        { date: '2024-10-01', income: 300, charges: 100 },
        { date: '2024-10-02', income: 400, charges: 150 },
        { date: '2024-10-03', income: 350, charges: 120 },
        { date: '2024-10-04', income: 450, charges: 180 },
        { date: '2024-10-05', income: 500, charges: 200 },
        { date: '2024-10-06', income: 380, charges: 140 },
        { date: '2024-10-07', income: 420, charges: 160 },
        { date: '2024-10-08', income: 550, charges: 220 },
        { date: '2024-10-09', income: 390, charges: 130 },
        { date: '2024-10-10', income: 460, charges: 190 },
        { date: '2024-10-11', income: 520, charges: 210 },
        { date: '2024-10-12', income: 410, charges: 170 },
      ],
    },
    {
      accountId: 3,
      data: [
        { date: '2024-10-01', income: 800, charges: 600 },
        { date: '2024-10-02', income: 900, charges: 700 },
        { date: '2024-10-03', income: 850, charges: 650 },
        { date: '2024-10-04', income: 950, charges: 720 },
        { date: '2024-10-05', income: 1000, charges: 800 },
        { date: '2024-10-06', income: 880, charges: 680 },
        { date: '2024-10-07', income: 920, charges: 710 },
        { date: '2024-10-08', income: 1100, charges: 850 },
        { date: '2024-10-09', income: 870, charges: 660 },
        { date: '2024-10-10', income: 940, charges: 730 },
        { date: '2024-10-11', income: 1050, charges: 820 },
        { date: '2024-10-12', income: 890, charges: 690 },
      ],
    },
  ].filter((info) => accounts.some((account) => account.id === info.accountId))
}
