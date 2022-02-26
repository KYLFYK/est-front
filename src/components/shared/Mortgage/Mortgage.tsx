import React, {useState, useEffect} from 'react'
import { observer } from "mobx-react-lite"
import {Calculator} from './Calculator/Calculator'
import {Success} from './Success/Success'
import { Modal } from '../Modal/Modal'
import { Bid } from './Bid/Bid'
import {useMortGageStore} from '../../../mobx/role/bank/mortgage/MortGage'

export const Mortgage: React.FC = ({}) => {
    const store = useMortGageStore()
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
