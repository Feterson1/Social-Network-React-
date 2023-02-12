import React from "react";
import { NavLink } from "react-router-dom";
import { usersAPI } from "../../api/api";
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
                            ? <button disabled={props.followingProgress.some(id => id == u.id)} onClick={() => {

                                   props.unFollow(u.id);

                                
                            }}>Unfollow</button>

                            : <button disabled={props.followingProgress.some(id => id == u.id)} onClick={() => {

                                    props.follow(u.id);
                           


                                
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