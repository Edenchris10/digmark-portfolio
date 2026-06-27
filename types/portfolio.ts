export type PortfolioCategory = 'pub' | 'design'

export interface PortfolioItem {
  slug: string
  title: string
  client: string
  category: PortfolioCategory
  categoryLabel: string
  image: string
  thumb: string
}
