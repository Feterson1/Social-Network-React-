import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {getProfileUser } from "../../redux/profile-reducer";
import {useLocation,useNavigate,useParams,Navigate} from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


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


let authRedirectComponent = withAuthRedirect(ProfileContainer);






let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    
})

let withUrlDataContainerComponent = withRouter(authRedirectComponent);

export default connect(mapStateToProps,{getProfileUser,})(withUrlDataContainerComponent);