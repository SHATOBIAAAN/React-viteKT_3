import { FC } from 'react'

interface StarsProps {
    rating: number
}

const Stars: FC<StarsProps> = ({ rating }) => {
    const roundedRating = Math.round(rating)

    return (
        <div className="stars">
            {[...Array(5)].map((_, index) => (
                <span
                    key={index}
                    className={`fa fa-star${
                        index < roundedRating ? ' active' : ''
                    }`}
                />
            ))}
        </div>
    )
}

export default Stars
