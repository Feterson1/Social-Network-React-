import React from 'react';
import style from './Users.module.css';

let Users = (props) => {
    
    if(props.users.length === 0 ){
    props.setUsers([{ id: 1, photoUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/fb1e81f37b8463f1907a7da900252b08.jpg', followed: false, fullname: 'Dmitriy', status: 'I am a boss', location: { city: 'Temirtau', country: 'Kazakhstan' }, age: 19 },
    { id: 2, photoUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/fb1e81f37b8463f1907a7da900252b08.jpg', followed: false, fullname: 'Kurt Cobain', status: 'Teen Spirit', location: { city: 'New York', country: 'USA' }, age: 27 },
    { id: 3, photoUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/fb1e81f37b8463f1907a7da900252b08.jpg', followed: true, fullname: 'Jotaro Kujo', status: 'Yare Yare Daze', location: { city: 'Tokyo', country: 'Japan' }, age: 46 },
    { id: 4, photoUrl: 'https://lastfm.freetls.fastly.net/i/u/770x0/fb1e81f37b8463f1907a7da900252b08.jpg', followed: true, fullname: 'Giorno Giovanna', status: 'MUDA MUDA MUDA', location: { city: 'Roma', country: 'Italy' }, age: 15 }]);
    }
    
     

    return <div>{
        props.users.map(u => <div key={u.id}>
            <span>
                <div>
                    <img src={u.photoUrl} className={style.userPhoto} alt="" />
                </div>
                <div>

                    {u.followed
                        ? <button onClick={() => {
                            props.unfollow(u.id)
                        }}>Unfollow</button>
                        : <button onClick={() => {
                            props.follow(u.id)
                        }}>Follow</button>}


                </div>
            </span>
            <span>

            </span>
            <span>
                <div>{u.fullname}</div><div>{u.status}</div>
            </span>
            <span>
                <div>{u.location.country}</div><div>{u.location.city}</div>
            </span>

        </div>)
    }
    </div>
}

export default Users;