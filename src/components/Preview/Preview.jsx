import React ,{useEffect } from 'react'
import './Preview.css';
import { useHistory } from 'react-router';
import CloseIcon from '@material-ui/icons/Close';
import SendIcon from '@material-ui/icons/Send';
import Swal from 'sweetalert2'

const Preview = () => {
    const history = useHistory();
    let image = localStorage.getItem('imageURL');

    useEffect(()=>{
        if(!image) history.replace('/');
    },[image, history]);

    const closePreview = ()=>{
        image='';
       history.replace('/'); 
    }
    
    const sendPost = ()=>{
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Post Shared Successfully',
            showConfirmButton: false,
            timer: 1500
          })
          image='';
        history.replace('/');
    }

    return (
        <div className='preview'>
            <CloseIcon
            onClick={closePreview} className='preview-close'/>
            <img src={image} alt="" />
            <div 
            onClick={sendPost}className='preview-footer'>
                <h2>Send Now</h2>
                <SendIcon 
                fontSize='small' className='preview-sendIcon'/>
            </div>
        </div>
    )
}

export default Preview
