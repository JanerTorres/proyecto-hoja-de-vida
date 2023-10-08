import React from 'react'
import BasicInfo from "@/components/BasicInfo";
import SlideBar from "@/components/SlideBar";

const LeftBar = () => {
    return (
        <div className="side-bar bloque flex-col items-center gap-6 pb-6">
            <div className="flex flex-col items-center w-48 mt-12 gap-6">
                <img className="" src="/images/foto_perfil_circular.png" alt="Foto de  perfil" />
                <div className="flex flex-col items-center gap-1">
                    <span className="font-semibold text-xl letra-oscura">Jhon Janer Torres</span>
                    <span className="text-lg letra-clara">Back-End Developer</span>
                </div>
            </div>

            <div className="flex flex-col w-56 gap-2">
                <BasicInfo item="Age" detail="23" color="letra-oscura" />
                <BasicInfo item="Residence" detail="Colombia" color="letra-oscura" />
                <BasicInfo item="Freelance" detail="Available" color="text-green-500" />
                <BasicInfo item="Address" detail="Medellin, Ant" color="letra-oscura" />
            </div>

            <div className="flex flex-col w-56 gap-2">
                <span className="medium-title">Languages</span>
                <div className="flex flex-col gap-2">
                    <SlideBar item="English" nivel={70}></SlideBar>
                    <SlideBar item="French" nivel={30}></SlideBar>
                    <SlideBar item="Spanish" nivel={100}></SlideBar>
                </div>
            </div>
            <div className="flex flex-col w-56 gap-2">
                <span className="medium-title">Programming Languages</span>
                <div className="flex flex-col gap-2">
                    <SlideBar item="Java" nivel={70}></SlideBar>
                    <SlideBar item="C#" nivel={30}></SlideBar>
                    <SlideBar item="Python" nivel={100}></SlideBar>
                    <SlideBar item="Typescript" nivel={100}></SlideBar>
                    <SlideBar item="MySQL" nivel={100}></SlideBar>
                </div>
            </div>
        </div>
    )
}

export default LeftBar