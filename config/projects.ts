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
      'https://ruckplus.notion.site/0XLSD-b5ef6c3672dd44428cec19c191d4b9a6?pvs=4',
    updatedAt: new Date('2024-03-06'),
  },
  {
    id: 2,
    name: 'Koi Trading',
    categories: ['DEX'],
    chains: ['Ethereum', 'BSC'],
    notion:
      'https://ruckplus.notion.site/KoiTrading-4c4faf9e5a244287b580e456313e1b4f?pvs=4',
    updatedAt: new Date('2024-03-06'),
  },
  {
    id: 3,
    name: 'DOP',
    categories: ['ZKP'],
    chains: ['Ethereum'],
    notion:
      'https://ruckplus.notion.site/DataOwnershipProtocol-6785aab4dee04414963e642720307070?pvs=4',
    updatedAt: new Date('2024-03-06'),
  }
]
