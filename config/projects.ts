export interface Project {
  id: number
  name: string
  categories: string[]
  chains: string[]
  notion: string
  updatedAt: Date
}

export const projects: Project[] = [
  {
    id: 1,
    name: '0XLSD',
    categories: ['DeFi'],
    chains: ['Ethereum'],
    notion:
      'https://ruckplus.notion.site/0XLSD-d73b1aaa14ea4dc187a3e64a5a56b418?pvs=4',
    updatedAt: new Date('2024-03-06'),
  },
  {
    id: 2,
    name: 'KoiTrading',
    categories: ['DEX'],
    chains: ['Ethereum', 'BSC'],
    notion:
      'https://ruckplus.notion.site/KoiTrading-f29b4b8512a94a449706a526649b63ef?pvs=4',
    updatedAt: new Date('2024-03-06'),
  },
]
