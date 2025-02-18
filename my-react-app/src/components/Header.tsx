import { FC } from 'react'

const Header: FC = () => {
    const scrollToFooter = () => {
        const footer = document.querySelector('footer')
        if (footer) {
            footer.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header className="header">
            <h1 style={{ color: 'red' }}>Products Store</h1>
            <button onClick={scrollToFooter}>Scroll to Footer</button>
        </header>
    )
}

export default Header
