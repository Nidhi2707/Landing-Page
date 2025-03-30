import React, { useState, useEffect, useRef } from "react";
import { Modal } from "react-bootstrap"
// import ModalHeader from "./ModalHeader";

const NewThemeModal = (props) => {

  const { showModal, setShowModal, children, header, onClose, style, modal } = props;
  const [fullscreen, setFullscreen] = useState('smallscreen');
  const modalRef = useRef();

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 27) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  return (
    <Modal
      dialogClassName="newModal modal-xl"
      style={style}
      show={showModal}
      onHide={onClose}
      animation={false}
      ref={modalRef}
      contentClassName={`${fullscreen}`}
    >
      <div className="modalbtns">
        <div className={fullscreen === "fullscreen" ? `${modal === "terms" ? "fullmodalBlack" : ""} fullmodal` : `${modal === "terms" ? "smallmodalBlack" : ""} smallmodal`} onClick={() => fullscreen === "fullscreen" ? setFullscreen('smallscreen') : setFullscreen("fullscreen")}></div>
        <div
          onClick={onClose}
          className={`${modal === "terms" ? "closemodalBlack" : ""} ml-3 closemodal`}
          data-dismiss="modal"
          aria-label="Close"
        ></div>
      </div>
      {children}

    </Modal>
    // <>
    //   <Button variant="primary" onClick={handleShow}>
    //     Launch demo modal
    //   </Button>

    //   <Modal 
    //   dialogClassName="newModal modal-xl"
    //     style={style}
    //     show={showModal}
    //     onHide={onClose}
    //     animation={false}
    //     ref={modalRef}
    //     contentClassName={`${fullscreen}`}>
    //     <Modal.Header closeButton>
    //       <Modal.Title>Modal heading</Modal.Title>
    //     </Modal.Header>
    //     <Modal.Body>
    //       <Form>
    //         <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
    //           <Form.Label>Email address</Form.Label>
    //           <Form.Control
    //             type="email"
    //             placeholder="name@example.com"
    //             autoFocus
    //           />
    //         </Form.Group>
    //         <Form.Group
    //           className="mb-3"
    //           controlId="exampleForm.ControlTextarea1"
    //         >
    //           <Form.Label>Example textarea</Form.Label>
    //           <Form.Control as="textarea" rows={3} />
    //         </Form.Group>
    //       </Form>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button variant="secondary" onClick={onClose}>
    //         Close
    //       </Button>
    //       <Button variant="primary" onClick={onClose}>
    //         Save Changes
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </>
  );
};

export default NewThemeModal;