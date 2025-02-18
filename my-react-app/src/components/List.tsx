import { useState, useEffect } from 'react'
import Item from './Item'
import Loader from './Loader'

interface Product {
    id: number
    title: string
    price: number
    rating: number
    thumbnail: string
}

export default function List() {
    const [products, setProducts] = useState<Product[]>([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/products')
                const data = await response.json()
                setProducts(
                    data.products.map((p: Product) => ({
                        id: p.id,
                        title: p.title,
                        price: p.price,
                        rating: p.rating,
                        thumbnail: p.thumbnail,
                    })),
                )
            } catch (error) {
                console.error('Error fetching data:', error)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [])

    if (isLoading) {
        return <Loader />
    }

    const handleDelete = (id: number) => {
        setProducts(prev => prev.filter(product => product.id !== id))
    }

    return (
        <div className="products-grid">
            {products.map(product => (
                <Item
                    key={product.id}
                    product={product}
                    onDelete={handleDelete}
                />
            ))}
        </div>
    )
}
