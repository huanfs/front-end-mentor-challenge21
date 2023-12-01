import {useState} from "react";
import {useEffect} from "react";
import icon_share from "../../public/images/icon-share.svg";
import icon_facebook from "../../public/images/icon-facebook.svg";
import icon_pinterest from "../../public/images/icon-pinterest.svg";
import icon_twitter from "../../public/images/icon-twitter.svg";
const Share = () => {
    const [state, setState] = useState(false);
    function HideOrShow(){
        setState(state=>!state);
        console.log(state)
    }
    useEffect(()=>{
        let shareOptions = document.querySelector(".shareLinks");
        if(state==false){
            shareOptions.style.display="none";
        }
        else if(state==true){
            shareOptions.style.display="flex";
        }
    })
    return(
        <div className="share" onClick={HideOrShow}>
            <button>
                <img src={icon_share}/>
            </button>
            <div className="shareLinks">
                <p>share</p>
                <img src={icon_facebook}/>
                <img src={icon_twitter}/>
                <img src={icon_pinterest}/>
            </div>
        </div>
    )
}

export default Share;