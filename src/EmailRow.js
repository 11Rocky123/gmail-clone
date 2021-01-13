import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useHistory } from "react-router-dom";

function EmailRow({ id, title, subject, description, time }) {
	const history = useHistory();

	return (
		<div onClick={() => history.push("/mail")} className="emailRow">
			<div className="emailRow__options">
				<Checkbox />
				<IconButton>
					<StarBorderOutlinedIcon />
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>
			<div className="emailRow__title">
				<h3 className="emailRow__title">{title}</h3>
			</div>
			<div className="emailRow__message">
				<h4>
					{subject}{" "}
					<span className="emailRow__description">- {description}</span>
				</h4>
			</div>
			<p className="emailRow__time">{time}</p>
		</div>
	);
}

export default EmailRow;
