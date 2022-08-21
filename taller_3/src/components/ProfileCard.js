import React from "react";
import "./ProfileCard.css";
import avatar from "../images/J.jpg";

function ProfileCard(props) {
	return (
		<div className="card-container">
			<header>
				<img src={avatar} alt={props.name} />
			</header>
			<h1 className="bold-text">
				Joel Alexander Flores Hernandez, 20<span className="normal-text"></span>
			</h1>
			<h2 className="normal-text">Estudio Ing en Sistema</h2>
			<h2 className="normal-text">SKILL en HTML,PHP,JS</h2>
			
		
			</div>
		
	);
}

export default ProfileCard;
