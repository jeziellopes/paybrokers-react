import fs from 'fs'
import path from 'path'

import { SellModel } from '../../data/models'

export const sells: SellModel[] = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './sells.json'), 'utf8')
)
