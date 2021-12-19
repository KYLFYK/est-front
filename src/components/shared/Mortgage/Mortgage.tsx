import React, {useState} from 'react'
import {Calculator} from './Calculator/Calculator'
import {Success} from './Success/Success'
import { Modal } from '../Modal/Modal'
import { Bid } from './Bid/Bid'

export const Mortgage: React.FC = ({}) => {

    const [bidSuccess, setBidSuccess] = useState(false)
    const [modal, setModal] = useState(false)

    return (
        <>
            {bidSuccess ? <Success/> : <Calculator setModal={setModal} />}
            <Modal setActive={() => setModal(!modal)} active={modal}>
                <Bid setBidSuccess={setBidSuccess} setModal={setModal}></Bid>
            </Modal>
        </>
        
    )
}
