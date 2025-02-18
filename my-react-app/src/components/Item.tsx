import { FC, useState, useEffect } from 'react'
import Stars from './Stars'

interface Product {
    id: number
    title: string
    price: number
    rating: number
    thumbnail: string
}

interface ItemProps {
    product: Product
    onDelete: (id: number) => void
}

const Item: FC<ItemProps> = ({ product, onDelete }) => {
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {
        if (isDeleting) {
            const timer = setTimeout(() => onDelete(product.id), 500)
            return () => clearTimeout(timer)
        }
    })

    return (
        <div
            className={`product-card ${isDeleting ? 'fade-out' : ''}`}
            onDoubleClick={() => setIsDeleting(true)}
        >
            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />
            <h3>{product.title}</h3>
            <div className="price-rating">
                <span>${product.price}</span>
                <Stars rating={product.rating} />
            </div>
        </div>
    )
}

export default Item
