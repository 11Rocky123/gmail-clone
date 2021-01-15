import { configureStore } from "@reduxjs/toolkit";
import mailReducer from "../features/mailSlice";
import userReducer from "../features/userSlice";
import sectionReducer from "../features/sectionSlicer";

export default configureStore({
	reducer: {
		mail: mailReducer,
		user: userReducer,
		section: sectionReducer,
	},
});
