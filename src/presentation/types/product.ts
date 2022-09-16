export type Product = {
  id: string
  name: string
  description: string
  price: string
  group: string
  createdAt: number
}

export type ProductQuantityByGroup = {
  name: string
  quantidade: number
}

export type NewProduct = Omit<Product, 'id' | 'createdAt'>
