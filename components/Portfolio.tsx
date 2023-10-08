import React from 'react'
import PortfolioItem from "@/components/PortfolioItem";

const Portfolio = () => {
    return (
        <div className="flex gap-14 p-14 pt-0 justify-center">
            <PortfolioItem />
            <PortfolioItem />
            <PortfolioItem />
        </div>
    )
}

export default Portfolio