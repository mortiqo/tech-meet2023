import { Children } from "react"

export default function Navbar() {
    return ( <nav className="nav">
        <a href="/" className="site-title">Morten P. Ollestad</a>
        <ul>
            <CustomLink href="/about">About me</CustomLink>
            <CustomLink href="/projects">Projects</CustomLink>
            <CustomLink href="/contact">Contact me</CustomLink>
        </ul>
    </nav>
    )
}

function CustomLink({ href, children, ...props}) {
    const path = window.location.pathname 

    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}