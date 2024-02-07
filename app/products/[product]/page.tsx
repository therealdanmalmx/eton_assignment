import { Product } from '@/interfaces'
import React from 'react'

interface ProductProp {
    product: Product
}

const ProducDetailPage = ({product}: ProductProp) => {
  return (
    <div>{product.name}</div>
  )
}

export default ProducDetailPage