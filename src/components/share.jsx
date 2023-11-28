
import icon_share from "../../public/images/icon-share.svg";
import icon_facebook from "../../public/images/icon-facebook.svg";
import icon_pinterest from "../../public/images/icon-pinterest.svg";
import icon_twitter from "../../public/images/icon-twitter.svg";
const Share = () => {
    return(
        <div className="share">
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