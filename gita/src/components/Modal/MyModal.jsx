import React, { useEffect } from 'react'

const MyModal = ({ closeModal }) => {


    useEffect(() => {
        document.body.style.overflowY = "hidden";
        return () => {
            document.body.style.overflowY = "scroll";
        }
    }, [])
    return (
        <>
            <div className='modal-wrapper' onClick={closeModal}></div>
            <div className='modal-container'>
                <h2>Login Using Google</h2>

                <button onClick={closeModal}>Accept It</button>
            </div>
        </>

    )
}

export default MyModal