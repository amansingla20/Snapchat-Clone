import React, {useRef, useState, useCallback} from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useHistory } from 'react-router';
import './WebcamCapture.css'

const videoConstraints = {
    width: 350,
    height: 500,
    facingMode: "user",
};

const WebcamCapture = ()=>{
    const webcamRef = useRef(null);
    const [image, setImage] = useState(null);

    const history = useHistory();
    
    const capture = useCallback(()=>{
        const imgSrc= webcamRef.current.getScreenshot();
        setImage(imgSrc);
        localStorage.setItem('imageURL', imgSrc);
        history.push('/preview');
    },[webcamRef]);
    return(
        <div className='webcamCapture'>
            <Webcam
            audio={false}
            height={videoConstraints.height}
            ref= {webcamRef}
            screenshotFormat="image/jpeg"
            width={videoConstraints.width}
            videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon
            className='webcamCapture_button'
            onClick={capture}
            fontSize='large'
            />

            
        </div>
    )
}

export default WebcamCapture;
