import React from 'react';
import zafirtest from './zafirtest.png';
import Edit from "./Edit.png";
import './EditName.css'

class EditName extends React.Component {
	constructor(props) {
		super(props)

		
			this.state = {
                name: '',
                password:'',
                newpassword:'',
                confirmpassword:''
                
            }
		
	}
    onPrevChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onnewPassChange = (event) => {
        this.setState({ newpassword: event.target.value })
    }
    onconfirmPassChange = (event) => {
        this.setState({ confirmpassword: event.target.value })
    }

	// componentWillMount() {
	// 	fetch('http://localhost:3000/homepage', {
	// 		method: 'get',
	// 		headers: {'Content-Type': 'application/json'}
	// 	})
	// 	.then(response => response.json())
	// 	.then(json => {
	// 		this.setState({ happenings: json })
	// 	})
	// }

    onSubmitPost = (event) => {
        event.preventDefault()
		fetch('http://localhost:3000//Editprofile/password', {
			method: 'post',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(this.state)
		})
		.then(response => response.json())
		.then(user => {	
			this.props.onRouteChange('EditProfile')
			
		})
	}

	render() {
		const studentName = "Zafir Ansari"
        const { onRouteChange } = this.props;
        const { user } = this.props;
		return (
            
            
			<div className="homepage body-center-align">
				<div className="homepageprofile">
                <img className="iconpic" src={ Edit } />
                <div className="usecasename">
                        <p>Edit Name</p>
                        </div>
                        <div></div>
					<img className="homepagepicedit" src={ zafirtest } />
					{/* <p>In love with this new app!</p> */}
					<h1>{ user.fullname }</h1>
					{/* <h3>Student</h3> */}
				</div>
				

                {/* <a className="form-green-button-viewdisplay"  onClick={() => { onRouteChange('ViewMyFoodDeliveryRequest') }}>Change Display Name</a>
                <a className="form-green-button-postdisplay"  onClick={() => { onRouteChange('PostFoodDeliveryRequest') }}>Change Password</a>
                <a className="form-green-button-changedisplay"  onClick={() => { onRouteChange('PostFoodDeliveryRequest') }}>Change Display Picture</a> */}

            
<div className="post-containereditprofile">
                    <div>
                        <form className="postform" onSubmit={this.onSubmitPost}>
                            <input className="posttitle" placeholder="Enter Previous Password" type="text" onChange={this.onPrevChange} />

                            <input className="posttitle" placeholder="Enter New Password" type="text" onChange={this.onnewPassChange} />
                            <input className="posttitle" placeholder="Confirm Password" type="text" onChange={this.onconfirmPassChange} />

                            {/* <input className="posttitle" placeholder="Posted by" type="text" onChange={this.onPostedByChange} />
                            <input className="posttitle" placeholder="Contact" type="text" onChange={this.onContactChange} />
                            <input className="posttitle" placeholder="Compensation" type="text" onChange={this.onCompensationChange} />
                            <input className="posttitle" placeholder="Area to" type="text" onChange={this.onAreaToChange} />
                            <input className="posttitle" placeholder="Area from" type="text" onChange={this.onAreaFromChange} />

                            <input className="postdetails" placeholder="Post Details" type="text" onChange={this.onDetailsChange} /> */}
                            
                            <input className="post-green-buttondisplay" value="Change Password" type="submit" />
                        </form>
                    </div>
                   
                </div>
                   
                

			</div>
		)
	}
}

export default EditName;