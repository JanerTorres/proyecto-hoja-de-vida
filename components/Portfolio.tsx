import React from 'react'
import PortfolioItem from "@/components/PortfolioItem";

const Portfolio = () => {
    return (
        <div className="flex gap-14 p-14 pt-0 justify-center">
            <PortfolioItem
                icon='web'
                title='Web Developer'
                date='Universidad de Antioquia, 2021 - 2023'
                description='I am responsible for the Backend department, where I focus on API development using Java.' />

            <PortfolioItem
                icon='gamea'
                title='Game Development Tutor'
                date='Ubicua, Ago 2020- Ene 2021'
                description='Leading an exciting Video Game Development Course, guiding students through Unity and real-world projects.' />

            <PortfolioItem
                icon='gameb'
                title='Game Development Course'
                date='University of Rionegro, 2020 - 2021'
                description='Teaching Unity, digital art, and Blender integration in online game development.' />

        </div>
    )
}

export default Portfolio