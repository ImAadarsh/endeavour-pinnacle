import React from "react";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import '../styles/Next.css';
const Next = ({url}) => {
    return (
        <div className="next">
            <a href={url}><ArrowCircleRightIcon style={{fontSize:'45px',color:'black'}}></ArrowCircleRightIcon></a>
        </div>
    )
}

export default Next;