import React from "react";
import './index.css'

export const Card: React.FC<{} & React.HTMLAttributes<HTMLDivElement>> = ({ className, children }) => {
    return (
        <div className={`card ${className}`}> { children } </div>
    )
}