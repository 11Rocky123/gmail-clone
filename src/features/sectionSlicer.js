import { createSlice } from "@reduxjs/toolkit";
import { useHistory } from "react-router-dom";

export const sectionSlice = createSlice({
	name: "section",
	initialState: {
		section: "emails",
	},
	reducers: {
		setInbox: (state) => {
			state.section = "emails";
		},
		setStarred: (state) => {
			state.section = "starEmails";
		},
	},
});

export const { setInbox, setStarred } = sectionSlice.actions;

export const section = (state) => state.section.section;

export default sectionSlice.reducer;
