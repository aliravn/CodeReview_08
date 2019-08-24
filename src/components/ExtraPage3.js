import React, {Component} from "react";
import Header from './Header';
import "./ExtraPage3.css";

class LoginPage extends Component {

	render() {
		
		return (
			<div id="login-page-container">
				<Header image={require("../img/header_flat.jpg")} />
				<div className="login-page-content">
					<div id="login-container">

					</div>
				</div>
			</div>
		);
	} 
}

export default LoginPage;