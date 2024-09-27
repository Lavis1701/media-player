import React, { useState } from 'react'
import { Button,Modal, Form } from 'react-bootstrap';
import { uploadVideoAPI } from '../../Services/AllAPI';


function Add({setUploadVideoResponse}) {

  const [uploadVideo, setUploadVideo] = useState({
    id: "",
    caption: "",
    url: "",
    link: ""
  });

  const getYoutubeLink = (e) => {
    const { value } = e.target;
    if (value.includes("v=")) {
      let vID = value.split("v=")[1].slice(0, 11);
      console.log(`http://www.youtube.com/embed/${vID}`);
      setUploadVideo({ ...uploadVideo, link: `http://www.youtube.com/embed/${vID}` });
    } else {
      setUploadVideo({ ...uploadVideo, link: "" });
    }
  };

  const handleAdd = async () => {
    const { id, caption, url, link } = uploadVideo;
    if (!id || !caption || !url || !link) {
      alert("Please fill in all the fields");
      return;
    }

    try {
      const result = await uploadVideoAPI(uploadVideo);
      if (result.status >= 200 && result.status <= 300) {
        alert("Video uploaded successfully");
        setUploadVideo({
          id: "",
          caption: "",
          url: "",
          link: ""
        });
        setUploadVideoResponse(result.data)
      } else {
        alert("Failed to upload video");
      }
    } catch (error) {
      console.error("Error uploading video:", error);
      alert("Error uploading video. Please try again.");
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex align-items-center'>
        <Button onClick={handleShow}className='ms-3 btn btn-success   fw-bold'>UPLOAD VIDEOS</Button>
    </div>
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-success fw-bolder fs-1'>UPLOAD VIDEOS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Video id" onChange={(e)=>setUploadVideo({... uploadVideo,id:e.target.value})}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Video Name" onChange={(e)=>setUploadVideo({... uploadVideo,caption:e.target.value})}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Image URL" onChange={(e)=>setUploadVideo({... uploadVideo,url:e.target.value})}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Video URL" onChange={getYoutubeLink}
                autoFocus
              />
            </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAdd}>UPLOAD</Button>
        </Modal.Footer>
      </Modal>
      
    </>
  )
}

export default Add
