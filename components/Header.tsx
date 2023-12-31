import React from "react"
import Button from "@/components/Button";
import Image from "next/image";
import ContactDialog from "./ContactDialog";

const Header = () => {
    return (
        <div className="bloque h-[500px] flex items-center justify-between pr-16 pl-16">
            <div className="flex flex-col gap-5 w-[650px]">
                <div className="flex flex-col gap-1">
                    <h1 className="text-5xl font-bold letra-oscura">I am Jhon Torres</h1>
                    <div>
                        <span className="text-5xl font-bold sec-color">Back-end </span>
                        <span className="text-5xl font-bold letra-oscura">Developer</span>
                    </div>
                </div>
                <p className="mb-6 text-lg letra-clara">Passionate Systems Engineering student, specializing in Web Development. My goal is to transform code lines into creative solutions. I am actively seeking exciting challenges where my skills can bring innovative software projects to life.
                </p>
                <div className="w-40 h-14">
                    <ContactDialog/>
                </div>

            </div>

            <div className="h-full w-[500px] flex items-end">
                <Image src="/images/foto_portada.png" alt="Foto de portada" width={500} height={500}></Image>
            </div>

        </div>
    )
}

export default Header