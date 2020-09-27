import React from 'react';
import './index.css';

type NavBarElement = {
    href: string;
    name: string;
}

interface Props {
    Elements: Array<NavBarElement>;
}

export const NavBar: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({ Elements, className }) => {
    return (
        <div className={`Navbar ${className}`}>
            { Elements.map(e => {
                return (
                    <ul>
                        <li><a href={e.href}>{e.name}</a></li>
                    </ul>
                )
            })}
        </div>
    )
}