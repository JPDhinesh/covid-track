import React from 'react'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './CountryData.css'
import AsiaData from './AsiaData'
import EuropeData from './EuropeData'
import NorthAmericaData from './NorthAmericaData'
import SouthAmericaData from './SouthAmericaData'
import AfricaData from './AfricaData'
import OceaniaData from './OceaniaData'

const Home = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className='home'>
            <h5>COVID TRACK</h5>
            <div>
                <h6>ASIA <i class="fas fa-plus-circle" onClick={handleShow}></i></h6>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className='modal-header'>ASIA</Modal.Header>
                    <Modal.Body className='modal-show'><AsiaData /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <h6>EUROPE <i class="fas fa-plus-circle" onClick={handleShow}></i></h6>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className='modal-header'>EUROPE</Modal.Header>
                    <Modal.Body className='modal-show'><EuropeData /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <h6>NORTH AMERICA <i class="fas fa-plus-circle" onClick={handleShow}></i></h6>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className='modal-header'>NORTH AMERICA</Modal.Header>
                    <Modal.Body className='modal-show'><NorthAmericaData /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <h6>SOUTH AMERICA <i class="fas fa-plus-circle" onClick={handleShow}></i></h6>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className='modal-header'>SOUTH AMERICA</Modal.Header>
                    <Modal.Body className='modal-show'><SouthAmericaData /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <h6>AFRICA <i class="fas fa-plus-circle" onClick={handleShow}></i></h6>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className='modal-header'>AFRICA</Modal.Header>
                    <Modal.Body className='modal-show'><AfricaData /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
            <div>
                <h6>OCEANIA <i class="fas fa-plus-circle" onClick={handleShow}></i></h6>
                <Modal show={show} onHide={handleClose} >
                    <Modal.Header className='modal-header'>OCEANIA</Modal.Header>
                    <Modal.Body className='modal-show'><OceaniaData /></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </div>
    )
}


export default Home;
