import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";


const FreeTrialModal = ({
  showModal,
  setShowModal,
  setFadeIn,
  setInputValues,
  setAgreement
}) => {
  const [loading, setLoading] = useState(false);
  let history = useHistory();
  const toggle = (e) => {
    e.preventDefault();
    setLoading(true);
    history.push(`/`);
  };

  const onCloseModal = () => {
    setShowModal(false);
    setInputValues({
      fullName: "",
      email: "",
      jobTitle: "",
      company: "",
      country: ""
    });
    setAgreement(false)
    if (setFadeIn) setFadeIn(false);
  };

  return (

    <Modal
      size="sm"
      show={showModal}
      onHide={onCloseModal}
      id="confirm-modal"
      centered
      className="freeTrialModal"
    >
      <Modal.Body className="p-0">
        <div className='text-center'>
          <div class="mainPopUp">
            <div class="statusSec">
                <p className="mb-3"><img src="./images/tick-arrow.png" /></p>
                <span>Success</span>
            </div>
            <div class="message">
                <p className="mb-4">Thank you, your account has been successfully registered with us. Our sales team will contact you within 48 working hours </p>
                <button className="gobacktoHome mr-1 mb-3" onClick={(e) => toggle(e)}>Go back to Home</button>
                <button className="registerBtn mb-3" onClick={onCloseModal} >Register for another account</button>
            </div>
        </div>
          
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FreeTrialModal;
