import { Button, IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import "./Sidebar.css";
import AddIcon from "@material-ui/icons/Add";
import InboxIcon from "@material-ui/icons/Inbox";
import SidebarOption from "./SidebarOption";
import StarIcon from "@material-ui/icons/Star";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import LabelImportantIcon from "@material-ui/icons/LabelImportant";
import NearMeIcon from "@material-ui/icons/NearMe";
import NoteIcon from "@material-ui/icons/Note";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import PersonIcon from "@material-ui/icons/Person";
import DuoIcon from "@material-ui/icons/Duo";
import PhoneIcon from "@material-ui/icons/Phone";
import { useDispatch, useSelector } from "react-redux";
import { openSendMessage } from "./features/mailSlice";
import { db } from "./firebase";
import { useHistory } from "react-router-dom";
import { section, setInbox, setStarred } from "./features/sectionSlicer";

function Sidebar() {
	const sectionChange = useSelector(section);
	const [selected, setSelected] = useState(true);
	const dispatch = useDispatch();
	const history = useHistory();
	const [sections, setSections] = useState("");

	const url = history.push(`/${sections}`);

	return (
		<div className="sidebar">
			<Button
				className="siderbar__compose"
				startIcon={<AddIcon fontSize="large" />}
				onClick={() => dispatch(openSendMessage())}
			>
				Compose
			</Button>

			<div
				className={
					sectionChange == "" || sectionChange == "emails"
						? "test"
						: "sidebar__option"
				}
				onClick={() => dispatch(setInbox())}
			>
				<SidebarOption Icon={InboxIcon} title="Inbox" number={2} />
			</div>
			<div
				className={sectionChange == "starEmails" ? "test" : "sidebar__option"}
				onClick={() => dispatch(setStarred())}
			>
				<SidebarOption Icon={StarIcon} title="Starred" number={54} />
			</div>
			<div className={sectionChange == "snoozed" ? "test" : "sidebar__option"}>
				<SidebarOption Icon={AccessTimeIcon} title="Snoozed" number={54} />
			</div>
			<div className={sectionChange == "snoozed" ? "test" : "sidebar__option"}>
				<SidebarOption
					Icon={LabelImportantIcon}
					title="Important"
					number={54}
				/>
			</div>
			<div className={sectionChange == "snoozed" ? "test" : "sidebar__option"}>
				<SidebarOption Icon={NearMeIcon} title="Sent" number={54} />
			</div>
			<div className={sectionChange == "snoozed" ? "test" : "sidebar__option"}>
				<SidebarOption Icon={NoteIcon} title="Drafts" number={54} />
			</div>
			<div className={sectionChange == "snoozed" ? "test" : "sidebar__option"}>
				<SidebarOption Icon={ExpandMoreIcon} title="More" number={54} />
			</div>

			<div className="sidebar__footer">
				<div className="sidebar__footerIcons">
					<IconButton>
						<PersonIcon />
					</IconButton>
					<IconButton>
						<DuoIcon />
					</IconButton>
					<IconButton>
						<PhoneIcon />
					</IconButton>
				</div>
			</div>
		</div>
	);
}

export default Sidebar;
