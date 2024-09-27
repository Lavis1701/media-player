import React, { useEffect, useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addcategoryAPI, deletecategoryAPI, getcategoryAPI, getVideoAPI, updateCategoryAPI } from '../../Services/AllAPI';
import Videocard from './Videocard';


function Category({dropVideoResponse}) {
  const [categoryName,setCategoryName]=useState("")
  const [allCategories,setAllCategories]=useState([])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd=async()=>{
    if(categoryName){
      const result = await addcategoryAPI({categoryName,allVideos:[]})
      console.log(result);
      if(result.status>=200 && result.status<300){
        handleClose()
        setCategoryName("")
        getcategories()
      }else{
        alert(result.message)
      }
      
    }else{
      alert("PLEASE ADD A CATEGORY NAME")
    }
  }
  
  const getcategories = async()=>{
    const {data}= await getcategoryAPI()
    setAllCategories(data)
  }
  useEffect(()=>{
    getcategories()
  },[dropVideoResponse])
  // console.log(allCategories);

  const removeCategory=async(id)=>{
    await deletecategoryAPI(id)
    getcategories()
  }

  const dragOver = (e) => {
    e.preventDefault();
  }

  const videoDropped = async (e, categoryid) => {
    const VideoId = e.dataTransfer.getData('VideoId');
    const { data } = await getVideoAPI(VideoId);
    
    const selectedCategory = allCategories.find(item => item.id === categoryid);
    
    if (!selectedCategory) {
      console.error('Category not found:', categoryid);
      return; // Exit if the category doesn't exist
    }
  
    // Initialize allVideos if it is not defined
    if (!selectedCategory.allVideos) {
      selectedCategory.allVideos = [];
    }
  
    selectedCategory.allVideos.push(data);
    await updateCategoryAPI(categoryid, selectedCategory);
    getcategories();
  };
  

  const videoDragStarted =(e,videoId,categoryId)=>{
    let datashare = { videoId,categoryId}
    e.dataTransfer.setData("data",JSON.stringify(datashare))
  }

  return (
    <>
      <div className='d-grid'>
        <button className='btn btn-success  fw-bold' onClick={handleShow}>ADD CATEGORY</button>
      </div>

      {
        allCategories?.length>0?allCategories.map(category=>(
      <div className="border rounded mt-5" droppable='true' onDragOver={(e)=>dragOver(e)} onDrop={e=>videoDropped(e,category?.id)}>
        <div className="d-flex justify-content-between alig-items-center m-4">
          <h5 className="">{category.categoryName}</h5>
          <button className="btn" onClick={()=>removeCategory(category.id)}>
            <i className="fa-solid fa-trash text-danger"></i>
          </button>
        </div>
        <Row>
          {
            category.allVideos?.length>0?category?.allVideos.map(card=>(
              <Col  className='d-flex justify-content-center mb-3 ' draggable onDragStart={e=>videoDragStarted(e,card.id,category.id)}>
                <Videocard video={card} insideCategory={true}/>
              </Col>
            )):null
          }
        </Row>
      </div>
      )):<p className='text-danger fw-bold'>Nothing to Display</p>
      }


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form.Control type="text" placeholder="Enter category name" 
        onChange={(e)=> setCategoryName(e.target.value)} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleAdd}>Add category</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category
