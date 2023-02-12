import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getProfileUser } from "../../redux/profile-reducer";
import {useLocation,useNavigate,useParams,} from "react-router-dom";


export function withRouter(Component) {

    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return ComponentWithRouterProp;
}

class ProfileContainer extends React.Component {


    componentDidMount(){
        
        this.props.getProfileUser(this.props.router.params.userId);
        

    //     let userId = this.props.router.params.userId;
    //     if(!userId){
    //         userId = 2;
    //     }
    //    usersAPI.getProfile(userId)
    //    .then(data => {
      
           
    //        this.props.setUserProfile(data);
           
    //        });
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

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps,{getProfileUser,})(withUrlDataContainerComponent);