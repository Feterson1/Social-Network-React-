import React from "react";
import Preloader from "../../common/preloader/preloader";
import p from './ProfileInfo.module.css';
import userPhoto from '../../../assets/images/user.png'


const ProfileInfo = (props) => {


  if(!props.profile){
    return <Preloader/>
  }

  return (
    <div>
      <div>
        <img src="https://u.kanobu.ru/editor/images/10/16611bcc-3fba-4cb5-8ec1-c6be543ec1ca.webp" className={p.jojo}  alt="jojo" />
      </div>
      <div className= {p.descriptionBlock}>
        <img src={props.profile.photos.large? props.profile.photos.large : userPhoto} alt="" />
        <p>{props.profile.fullName}</p>
        <hr />
        <p>{props.profile.lookingForAJob? 'Я ищу работу' : 'Я не ищу работу'}</p>
        <p>{props.profile.lookingForAJobDescription}</p>
      </div>
    </div>
  );

}
export default ProfileInfo;