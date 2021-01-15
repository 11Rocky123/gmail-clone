import React from "react";
import "./EmailRow.css";
import { Checkbox, IconButton } from "@material-ui/core";
import LabelImportantOutlinedIcon from "@material-ui/icons/LabelImportantOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { selectMail } from "./features/mailSlice";
import { db } from "./firebase";
import StarIcon from "@material-ui/icons/Star";

function EmailRow({ id, starred, to, subject, description, time }) {
	const history = useHistory();
	const dispatch = useDispatch();

	const openMail = () => {
		dispatch(
			selectMail({
				id,
				starred,
				to,
				subject,
				description,
				time,
			})
		);
		history.push("/mail");
	};

	const addToStarSection = () => {
		db.collection("emails").doc(id).update({
			starred: !starred,
		});
		if (starred == false) {
			db.collection("starEmails").doc(id).set({
				to: to,
				subject: subject,
				message: description,
				timestamp: time,
				starred: !starred,
			});
		} else {
			db.collection("starEmails").doc(id).delete();
		}
	};

	return (
		<div className="emailRow">
			<div className="emailRow__options">
				<Checkbox />
				<IconButton onClick={addToStarSection}>
					{starred ? <StarIcon /> : <StarBorderOutlinedIcon />}
				</IconButton>
				<IconButton>
					<LabelImportantOutlinedIcon />
				</IconButton>
			</div>
			{/* onClick={openMail} */}

			<div className="emailRow__title">
				<h3 className="emailRow__title">{to}</h3>
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
