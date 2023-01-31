import React from "react";
import '../styles/Footer.css';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import ForumIcon from '@mui/icons-material/Forum';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MicIcon from '@mui/icons-material/Mic';
import EmailIcon from '@mui/icons-material/Email';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useNavigate} from "react-router-dom";
const Footer = () =>{
    const navigate = useNavigate();
    return (
        <div className="containerFooter">
            <ul>
                <li><a href=""><ChatBubbleIcon/></a></li>
                <li><a href=""><ForumIcon/></a></li>
                <li><a href=""><WhatsAppIcon/></a></li>
                <li><a href=""><MicIcon/></a></li>
                <li><a href=""><EmailIcon/></a></li>
                <li><a href=""><TwitterIcon/></a></li>
                <li><a href=""><PersonSearchIcon/></a></li>
                <li><a href=""><LocalParkingIcon/></a></li>
                <li><a href=""><ListAltIcon/></a></li>
                <li><a href="">LEADr</a></li>
                <li><a style={{marginLeft : '100px'}} onClick={() => navigate(+1)}><ArrowCircleRightIcon style={{fontSize:'45px'}}/></a></li>
            </ul>
        </div>
    )
}

export default Footer;