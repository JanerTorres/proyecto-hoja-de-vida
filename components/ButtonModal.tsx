import React, { useState } from "react";
import Modal from "react-modal";


interface ButtonModalProps {
    choose: string,
    title: string
}

const ButtonModal = ({ choose, title }: ButtonModalProps) => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className="text-lg font-medium sec-color" onClick={openModal}>Learn More {">"}</button>
            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Información adicional">

                <div className="bg-gray-50 border-2 rounded-xl flex flex-col items-center p-9 justify-between">
                    <h2 className="text-2xl letra-oscura font-semibold text-rose-500">{title}</h2>

                    <div hidden={choose !== "web"} className="">
                        <div className="more-content">
                        <span className="text-lg letra-oscura font-medium">Web developer and designer at the DRAI (Research and Development in Engineering) department of the University of Antioquia.</span>
                            <ul>
                                <li>Responsible for the Backend area. Development of APIs with Java, management, and structuring of databases.</li>
                                <li>Implementation of design patterns and software architecture principles.</li>
                                <li>Support and execution of automated tests.</li>
                                <li>Integration and continuous deployment.</li>
                                <li>Agile methodologies (SCRUM).</li>
                                <li>Use of repositories and pipelines.</li>
                            </ul>
                        </div>
                    </div>

                    <div hidden={choose !== "gamea"}>
                        <div className="more-content">
                            <span className="text-lg letra-oscura font-medium">Course in Video Game Development offered at Talento Especializado - Valle de Aburrá</span>
                            <ul>
                                <li>As an instructor, I had the privilege of leading and guiding this exciting course.
                                    My responsibilities included imparting knowledge on game development in Unity, tackling creative challenges,
                                    and providing guidance and supervision for academic and business projects, contributing to our participants success.
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div hidden={choose !== "gameb"} className="">
                        <div className="more-content">
                            <span className="text-lg letra-oscura font-medium">Online Video Game Development Course offered in collaboration with the University of Rionegro (Argentina) and UPB (Colombia)</span>
                            <ul>
                                <li>In this course, I assumed the role of guiding students on their learning journey. 
                                    My focus was on teaching and demonstrating game development in Unity, blending skills in digital art 
                                    and harnessing the capabilities of Blender. Throughout the program, I inspired participants to explore 
                                    their creativity and prepare for excellence in the video game industry.</li>
                            </ul>
                        </div>
                    </div>
                    <button className="medium-title" onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </div>
    )
}

export default ButtonModal