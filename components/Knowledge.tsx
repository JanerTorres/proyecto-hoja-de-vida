import React from 'react'
import Skill from "@/components/Skill";

const Knowledge = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 pl-24 pr-24">
            <Skill icon="code" title="Web Development" info="Blog, E-Commerce" />
            <Skill icon="design" title="UX/UI Design" info="Graphic and Interface designer" />
            <Skill icon="bd" title="DB Management" info="Data Bases Manager, Operator" />
            <Skill icon="supp" title="App Support" info="Supporting, Testing application" />
            <Skill icon="game" title="Game Developer" info="Games Development, 3D Modeling" />
            <Skill icon="paint" title="Illustrator" info="Digital and Analog Artist" />
        </div>
    )
}

export default Knowledge