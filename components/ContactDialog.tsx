import React, { useState } from "react";
import Modal from "react-modal";


const ContactDialog = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div className="h-full">
            <button className="button-primary text-lg " onClick={openModal}>HIRE ME {"->"}</button>
            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Información adicional">

                <div className="bg-gray-50 border-2 rounded-xl flex flex-col items-center p-9 justify-between">
                    <h2 className="text-2xl letra-oscura font-semibold text-rose-500">Contact Information</h2>

                    <div>
                        <div className="more-content">
                        <span className="text-lg letra-oscura font-medium">Here You can find the necessary information to reach out to me here.</span>
                            <ul>
                                <li className="">
                                    <span>Email: </span>
                                    <span>janer.torres@udea.edu.co</span>
                                </li>
                                <li className="">
                                    <span>Phone: </span>
                                    <span>(+57) 312 828 0220</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button className="medium-title" onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </div>
    )
}

export default ContactDialog;