import axios from "axios";
import React from "react";
import { NavLink } from "react-router-dom";
import userPhoto from "../../assets/images/user.png";
import styles from './Users.module.css';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {

        pages.push(i);
    }

    let curP = props.currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);




    return (
        <div>
            <div>
                {slicedPages.map(p => {
                    return <button className={props.currentPage === p && styles.selectedPage}
                        onClick={(e) => {
                            props.onPageChanged(p)
                        }}>{p}</button>
                })}
            </div>


            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to = {`/profile/${u.id}`}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto} alt="" />
                        </NavLink>
                    </div>
                    <div>

                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials:true,
                                    headers: {
                                        'API-KEY': `1ea8dfc2-a376-4354-b20f-260898ca89c4`,
                                    }
                                })
                                    .then(response =>{
                                        if(response.data.resultCode === 0){
                                            props.unfollow(u.id)

                                        }

                                    })

                                
                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                                    withCredentials:true,
                                })
                                    .then(response =>{
                                        if(response.data.resultCode === 0){
                                            props.follow(u.id)

                                        }

                                    })


                                
                            }}>Follow</button>}


                    </div>
                </span>
                <span>

                </span>
                <span>
                    <div>{u.name}</div><div>{u.status}</div>
                </span>
                <span>

                </span>

            </div>)
            }
        </div>
    )


}

export default Users;