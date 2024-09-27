import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Add from '../Components/Add';
import View from '../Components/View';
import Category from '../Components/Category';

function Home() {
  const [uploadVideoResponse,setUploadVideoResponse]=useState({})
  const [dropVideoResponse,setDropVideoResponse]=useState({})
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <div className="add-videos">
          <Add setUploadVideoResponse={setUploadVideoResponse}/>
        </div>
        <Link
          to={'/Watchhistory'}
          style={{ textDecoration: 'none', color: 'black', fontSize: '20px' }}
        >
          Watch History <i className="fa-solid fa-arrow-right-to-bracket"></i>
        </Link>
      </div>
      <div className='container-fluid w-100 mt-5 mb-5 row'>
        <div className="all-videos col-lg-9">
          <h1 className='fw-bolder fs-4'>ALL VIDEOS</h1>
          <View uploadVideoResponse={uploadVideoResponse} setDropVideoResponse={setDropVideoResponse} />
        </div>
        <div className='all-videos col-lg-3'>
          <Category dropVideoResponse ={dropVideoResponse} />
        </div>
      </div>
    </>
  );
}

export default Home;
