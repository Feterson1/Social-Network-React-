import React from "react";
import p from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  return (
    <div>
      <div>
        <img src="https://u.kanobu.ru/editor/images/10/16611bcc-3fba-4cb5-8ec1-c6be543ec1ca.webp" className={p.jojo}  alt="jojo" />
      </div>
      <div className= {p.descriptionBlock}>
        ava + desc
      </div>
    </div>
  );

}
export default ProfileInfo;