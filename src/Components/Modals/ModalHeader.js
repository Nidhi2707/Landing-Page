import React from 'react'

export default function ModalHeader({title,setFullscreen,fullscreen, closeModal}) {

  // const [changeImg,setChangeImg] = useState(false);

    return (
        <div
          className="innerbanner modalHeader"
          // style={{ backgroundImage: `url(images/bg2.jpg)` }}
        >
          <div className="modalbtns">
            <div className={fullscreen === "fullscreen" ? "fullmodal" : "smallmodal"} onClick={() => fullscreen === "fullscreen" ? setFullscreen('smallscreen') : setFullscreen("fullscreen")}></div>
            <div
              // onClick={() => setShowModal(false)}
              onClick={closeModal}
              className="closemodal ml-3"
              data-dismiss="modal"
              aria-label="Close"
            ></div>
          </div>
          <h3 className="ellipsis w-50">{title}</h3>
        </div>
    )
}
