export interface Product {
  name: string
  img: string
  price: number
  stock: number
}

export type ProductSummary = Pick<Product, "name" | "price">

export type ProductWithoutImg = Omit<Product, "img">

export type ProductStock = Pick<Product, "stock">

export const products: Product[] = [
  { name: "Product 1", img: "https://placehold.co/400", price: 100, stock: 10 },
  { name: "Product 2", img: "https://placehold.co/400", price: 200, stock: 5 },
  { name: "Product 3", img: "https://placehold.co/400", price: 300, stock: 8 }
];

export const productWithoutImg: ProductWithoutImg[] = [
  { name: "Product 1", price: 100, stock: 10 },
  { name: "Product 2", price: 200, stock: 5 },
  { name: "Product 3", price: 300, stock: 8 }
]

