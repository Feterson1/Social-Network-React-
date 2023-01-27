import React from "react";
import Profile from "./Profile";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profile-reducer";




    componentDidMount(){
        
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
       .then(response => {
      
           
           this.props.setUserProfile(response.data);
           
           });
    }

    render(){
       
        return(

            <Profile { ...this.props} profile = {this.props.profile}/>
        )
    }







}



let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

withRouter()

export default connect(mapStateToProps,{setUserProfile})(ProfileContainer);