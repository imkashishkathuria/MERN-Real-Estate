import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRef } from 'react';
import { getStorage, 
          uploadBytesResumable, 
          ref, 
          getDownloadURL} from 'firebase/storage';
import {app} from '../firebase';
import { updateUserFailure, updateUserSuccess, updateUserStart, signOutStart } from '../redux/user/userSlice';
import { useDispatch } from 'react-redux';
import { deleteUserFailure, deleteUserStart, deleteUserSuccess } from '../redux/user/userSlice';
import {useNavigate } from 'react-router-dom';

export default function Profile(){
  const fileRef=useRef(null); 
  const { currentuser, loading, error } = useSelector((State)=>State.user);
  const [file, setFile]=useState(undefined);
  const [filePerc, setFilePerc]=useState(0);
  const [fileUploadError, setFileUploadError]=useState(false);
  const [formData, setFormData]= useState({});
  const [updateSuccess, setUpdateSuccess]=useState(false);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  console.log(formData);
  
  //firebase storage
  // allow read;x`
  // allow write: if  
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(()=>{
    if(file){
      handleFileUpload(file);
    }
  },[file]);
  const handleFileUpload=(file)=>{
    const storage=getStorage(app);
    const fileName=new Date().getTime() + file.name;
    const storageRef=ref(storage, fileName);
    const uploadTask=uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed',
      (snapshot)=>{
        const progress=(snapshot.bytesTransferred/snapshot.totalBytes)*100;
        console.log('Upload is '+ progress + '% done' );
        setFilePerc(Math.round(progress))
      },
      (error) => {
    setFileUploadError(true); // Handle error
  },
  ()=>{
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=>
      setFormData({...formData, avatar: downloadURL})
    );
  }
);

  
    
  };
  const handleChange=(e)=>{
    setFormData({...formData,[e.target.id]:e.target.value});
  };
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/user/update/${currentuser._id}`,{
        method:'POST',
        headers:{
          'Content-type' :  'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data=await res.json();
      if (data.success==false){
        dispatch(updateUserFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      setUpdateSuccess(true);
      
    } catch (error) {
        dispatch(updateUserFailure(error.message));
    }
  };

  const handleDelete=async()=>{
    try {
      dispatch(deleteUserStart());
      const res=await fetch(`/api/user/delete/${currentuser._id}`,{
        method: 'DELETE',
      });
      const data=await res.json();
      if(data.success==false){
        dispatch(deleteUserFailure(data.message));
        return;
      }
      
      dispatch(deleteUserSuccess(data))
      
    } catch (error) {
      dispatch(deleteUserFailure(error.message))
    }
  }

  const handleSignOut=async()=>{
    try {
      dispatch(signOutStart())
      const res=await fetch('/api/auth/signout');
      const data=await res.json();
      if(data.success === false){
        dispatch(deleteUserFailure(data.message))
        return;
      }
      dispatch(deleteUserSuccess(data));
      navigate('/sign-in');
    } catch (error) {
      dispatch(deleteUserFailure(data.message))
    }
  }
  return (
    <div className='p-3 max-w-lg mx-auto'>
    <h1 className='text-3xl font-semibold text-center my-7'>
      Profile
    </h1>
    <form 
    onSubmit={handleSubmit}
    className='flex flex-col gap-5'>
    <input 
      type='file' 
      ref={fileRef} 
      hidden accept='image/*' 
      onChange={(e)=> setFile(e.target.files[0])}/>
      <img 
        onClick={()=>fileRef.current.click()} 
        src={formData.avatar || currentuser.avatar} 
        alt='profile' 
        className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' />
        <p className='text-sm self-center'>
          {fileUploadError ? (
            <span className='text-red-700'>
              Error image upload (image must be less than 2 mb)
            </span>
          ): filePerc> 0 && filePerc <100 ?(
            <span className='text-slate-700'>{`Uploading ${filePerc} %`}</span>
          ) : filePerc === 100 ? (
            <span className='text-green-700'>
              Image uploaded successfully!
            </span>
          ):(
            ""
          )}
        </p>
      <input 
        type='text' 
        placeholder='username' 
        id='username' 
        className='border p-3 rounded-lg'
        defaultValue={currentuser.username} 
        onChange={handleChange}
        />
      <input 
        type='email' 
        placeholder='email' 
        id='email' 
        className='border p-3 rounded-lg' 
        defaultValue={currentuser.email}
        onChange={handleChange}
        />
      <input 
        type='password' 
        placeholder='password' 
        id='password' 
        className='border p-3 rounded-lg' 
        onChange={handleChange}
        />
      <button 
        className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80' 
        disabled={loading}
        >
        {loading ? 'Loading...': 'Update'}
      </button>
    </form>
    <div className='flex justify-between mt-5'>
      <span onClick={handleDelete} className='text-red-700 cursor-pointer'>
        Delete account
      </span>
      <span onClick={handleSignOut} className='text-red-700 cursor-pointer'>
        Sign out 
      </span>
    </div>

      <p className='text-red-700 mt-5'>{error ? error: ''}

      </p>
      <p className='text-green-700 mt-5'>
            {updateSuccess ? 'User is updated successfully!': ''}
      </p>
    </div>
  )
}


