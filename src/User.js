import React, { useContext,useRef,useState } from 'react'
import { CgProfile } from "react-icons/cg"; 
import DataContext from './context/DataContext';
import "./login.css"

const User = () => {

    const {userDetail, setUserDetail} = useContext(DataContext)

    const fileInputRef = useRef(null);
    const [Image, setImage] = useState(null);
    
    const handleIconClick = () => {  
      fileInputRef.current.click();
    };
  
  
    const handleFileSelect = (e) => {
      
      const file = e.target.files[0];
  
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImage(reader.result);
      };
  
      if (file) {
        reader.readAsDataURL(file);
      }
    };
  
    return (
        
        <div className='Container'>
          <div>
            <input
              type="file"
              style={{ display: 'none' }}
              ref={fileInputRef}
              onChange={handleFileSelect}
            />
            <span 
               onClick={handleIconClick}
               id='profileIcon'
            >
             
              <CgProfile/>
            </span>
  
            <img 
            src={Image} 
            alt={Image}
            id='profileImg'
            />
  
          </div>
       
     <main>
        {
          userDetail.length?(
            userDetail.map((user) => (
              <div>
              <p>Name:{user.username}</p>
              <p>PassWord:{user.password}</p>
              </div>
            ))
          ):
          <p>
            sorry, you till not login
          </p>
        }
      </main>
      </div>
    )
}

export default User
