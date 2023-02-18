import React from 'react';
import { connect } from 'react-redux';
import { follow, unFollow,setCurrentPage,toggleFollowingProgress,getUsers} from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



class UsersContainer extends React.Component{
     
    componentDidMount(){

        this.props.getUsers(this.props.currentPage,this.props.pageSize);
           
    }

    onPageChanged = (pageNumber) => {

        this.props.getUsers(pageNumber,this.props.pageSize);
        
    //     this.props.toggleIsFetching(true);
    //    this.props.setCurrentPage(pageNumber);
    //    usersAPI.getUsers(pageNumber,this.props.pageSize).then(data => {
       
    //         this.props.toggleIsFetching(false);
    //        this.props.setUsers(data.items);
    //        });


    }

    
    

   render(){
       return <>
       {this.props.isFetching?
        <Preloader/>
       :null}
       <Users totalUsersCount = {this.props.totalUsersCount}
                       pageSize = {this.props.pageSize}
                       currentPage = {this.props.currentPage}
                       onPageChanged = {this.onPageChanged}
                       users = {this.props.users}
                       follow = {this.props.follow}
                       unFollow = {this.props.unFollow}
                       toggleFollowingProgress={this.props.toggleFollowingProgress}
                       followingProgress = {this.props.followingProgress}
       
       
       />
       </>

   }
}

let mapStateToProps = (state) =>{
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingProgress: state.usersPage.followingProgress,
    }

}


const withAuth = withAuthRedirect(UsersContainer);


export default connect(mapStateToProps,{
    follow,
    unFollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers,
   
})(withAuth);



