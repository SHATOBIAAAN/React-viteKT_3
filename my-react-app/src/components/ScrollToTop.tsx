import { FC, useState, useEffect } from 'react'

const ScrollToTop: FC = () => {
    const [isVisible, setIsVisible] = useState(false)

    const handleScroll = () => {
        if (window.scrollY > 300) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        })
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <button
            className={`scroll-top ${isVisible ? 'visible' : ''}`}
            onClick={scrollToTop}
            aria-label="Scroll to top"
        >
            <i className="fa fa-arrow-up"></i>
        </button>
    )
}

export default ScrollToTop
