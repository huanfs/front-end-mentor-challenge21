
import avatar from "../../public/images/avatar-michelle.jpg";
import Share from "./share.jsx";
const UserComment = () => {
    return(
        <div className="userComment">
            <img src={avatar}/>
            <div className="userName_and_data">
                <p>Michelle Aplwetton</p>
                <p>28 jun 2020</p>
            </div>
            <Share/>
        </div>
    )
}

export default UserComment;