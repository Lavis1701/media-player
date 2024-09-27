import React, { useState } from 'react'
import { Card } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { addHistoryAPI, deleteVideoAPI } from '../../Services/AllAPI';


function Videocard({ video, setDeleteVideoResponse , insideCategory }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    const { caption, link } = video;

    let today = new Date();
    // console.log(
    //   new Intl.DateTimeFormat("en-US", {
    //     year: "numeric",
    //     month: "2-digit",
    //     day: "2-digit",
    //     hour: "2-digit",
    //     minute: "2-digit",
    //     second: "2-digit",
    //   }).format(today)
    // );

    let timeStamp = new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }).format(today);

    let videoHistory = { caption, link, timeStamp }
    await addHistoryAPI(videoHistory);

  }

  const deletevideo = async (id) => {
    await deleteVideoAPI(id)
    setDeleteVideoResponse(true)
  }

  const dragStarted=(e,id)=>{
    console.log("Drag Started.....VideoId"+id);
    e.dataTransfer.setData("VideoId",id)
    
  }




  return (
    <div>
      <Card style={{ width: '270px', height: '270px' }} draggable onDragStart={e=>dragStarted(e,video?.id)}>
        <Card.Img variant="top" src={`${video.url}`} onClick={handleShow} />
        <Card.Body>
          <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5>{video.caption}</h5>
            {
              insideCategory?null:(
                <button onClick={() => deletevideo(video.id)} className="btn"><i className='fa-solid fa-trash text-danger'></i></button>
              )
            }
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>VIDEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe width="100%" height="315" src={`${video.link}?autoplay=1&mute=1`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>
          </iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleClose}>
            DELETE
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Videocard
