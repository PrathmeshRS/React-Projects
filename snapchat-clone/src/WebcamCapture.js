import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { setCameraImage } from './features/cameraSlice';
import "./WebcamCapture.css";


function WebcamCapture() {
    const videoConstraints = {
        width: 250,
        height: 400,
        facingMode: "user"
    };

    const webcamRef = useRef(null);

    const dispatch = useDispatch();

    const history = useHistory();

    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push("/preview");
    }, [webcamRef])

    return (
        <div className="webcamCapture">
            <Webcam
                audio="flase"
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon
                className="webcamCapture__button"
                onClick={capture}
                fontSize="large"
            />
        </div>
    )
}

export default WebcamCapture;