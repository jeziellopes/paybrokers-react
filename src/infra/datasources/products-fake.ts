import fs from 'fs'
import path from 'path'

import { ProductModel } from '../../data/models'

export const products: ProductModel[] = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './products.json'), 'utf8')
)
