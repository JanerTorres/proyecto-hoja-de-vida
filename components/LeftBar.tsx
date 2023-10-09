import React from "react"
import BasicInfo from "@/components/BasicInfo";
import SlideBar from "@/components/SlideBar";
import Image from "next/image";

const LeftBar = () => {
    return (
        <div className="side-bar bloque flex-col items-center gap-6 pb-6">
            <div className="flex flex-col items-center w-48 mt-12 gap-6">
                <Image src="/images/foto_perfil_circular.png" alt="Foto de  perfil" width={192} height={192}></Image>
                <div className="flex flex-col items-center gap-1">
                    <span className="font-semibold text-xl letra-oscura">Jhon Janer Torres</span>
                    <span className="text-lg letra-clara">Back-End Developer</span>
                </div>
            </div>

            <div className="flex flex-col w-56 gap-2">
                <BasicInfo item="Age" detail="23" color="letra-oscura" />
                <BasicInfo item="Residence" detail="Med, Colombia" color="letra-oscura" />
                <BasicInfo item="Freelance" detail="Available" color="text-green-500" />
                <BasicInfo item="Email" detail="janer.torres@udea.edu.co" color="letra-oscura" />
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
                    <SlideBar item="Java" nivel={75}></SlideBar>
                    <SlideBar item="C#" nivel={60}></SlideBar>
                    <SlideBar item="Python" nivel={60}></SlideBar>
                    <SlideBar item="Typescript" nivel={50}></SlideBar>
                    <SlideBar item="MySQL" nivel={80}></SlideBar>
                </div>
            </div>
        </div>
    )
}

export default LeftBar