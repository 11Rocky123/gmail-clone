import { Checkbox, IconButton } from "@material-ui/core";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import RedoIcon from "@material-ui/icons/Redo";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import KeyboardHideIcon from "@material-ui/icons/KeyboardHide";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useEffect, useState } from "react";
import "./EmailList.css";
import Section from "./Section";
import InboxIcon from "@material-ui/icons/Inbox";
import PeopleIcon from "@material-ui/icons/People";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import EmailRow from "./EmailRow";
import { db } from "./firebase";
import { setInbox, setStarred, section } from "./features/sectionSlicer";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const readData = (sectionChange, setEmails) => {
	db.collection(sectionChange) // uzimi emails kolekciju
		.orderBy("timestamp", "desc") // rapsoredi ih po timestampu
		.onSnapshot((
			snapshot // uzmi snapshot trenutni
		) =>
			setEmails(
				// stavi mail da bude ovo
				snapshot.docs.map((doc) => ({
					id: doc.id, // id = doc.id nDqpnWjBpy....
					data: doc.data(), // ovo je zapravo message,subject,to itd..
				}))
			)
		);
	console.log("I read base:", sectionChange);
};

function EmailList() {
	const sectionChange = useSelector(section);
	const [emails, setEmails] = useState([]);
	const history = useHistory();

	history.push(`/${sectionChange}`);

	useEffect(() => {
		readData(sectionChange, setEmails);
	}, [sectionChange]);

	return (
		<div className="emailList">
			<div className="emailList__settings">
				<div className="emailList__settingsLeft">
					<Checkbox />
					<IconButton>
						<ArrowDropDownIcon />
					</IconButton>
					<IconButton>
						<RedoIcon />
					</IconButton>
					<IconButton>
						<MoreVertIcon />
					</IconButton>
				</div>
				<div className="emailList__settingsRight">
					<IconButton>
						<ChevronLeftIcon />
					</IconButton>
					<IconButton>
						<ChevronRightIcon />
					</IconButton>
					<IconButton>
						<KeyboardHideIcon />
					</IconButton>
					<IconButton>
						<SettingsIcon />
					</IconButton>
				</div>
			</div>
			<div className="emailList__sections">
				<Section Icon={InboxIcon} title="Primary" color="red" selected />
				<Section Icon={PeopleIcon} title="Social" color="#1A73E8" />
				<Section Icon={LocalOfferIcon} title="Promotions" color="green" />
			</div>

			<div className="emailList__list">
				{emails.map(
					({ id, data: { to, subject, message, starred, timestamp } }) => (
						<EmailRow
							id={id}
							key={id}
							starred={starred}
							to={to}
							subject={subject}
							description={message}
							time="0"
						/>
					)
				)}
			</div>
		</div>
	);
}

export default EmailList;
