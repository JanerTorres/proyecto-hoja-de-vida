import React, { useState } from 'react';
import Modal from 'react-modal';

const ButtonModal = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const openModal = () => {
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <button className='text-lg font-medium sec-color' onClick={openModal}>Learn More {">"}</button>
            <Modal
                className="modal"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Información adicional">

                <div className='w-96 h-96 bg-gray-50 border-2 rounded-xl flex flex-col items-center p-9'>
                    <h2>Información Adicional</h2>
                    <p>Aquí puedes agregar más información.</p>
                    <button onClick={closeModal}>Cerrar</button>
                </div>
            </Modal>
        </div>
    )
}

export default ButtonModal