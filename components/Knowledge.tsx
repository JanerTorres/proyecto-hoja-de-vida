import React from 'react'
import Skill from "@/components/Skill";

const Knowledge = () => {
    return (
        <div className="grid grid-cols-3 grid-rows-2 gap-4 pl-24 pr-24">
            <Skill icon="code" title="Web Development" info="Blog, E-Commerce" />
            <Skill icon="design" title="UX/UI Design" info="Graphic and interface design" />
            <Skill icon="paint" title="Cuarelista" info="Dibujitos lindis" />
            <Skill icon="bd" title="UX/UI Design" info="Graphic and interface design" />
            <Skill icon="game" title="UX/UI Design" info="Graphic and interface design" />
            <Skill icon="design" title="UX/UI Design" info="Graphic and interface design" />
        </div>
    )
}

export default Knowledge