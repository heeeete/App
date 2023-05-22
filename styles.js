import { StyleSheet, Dimensions } from "react-native";

const { width: SCRREN_WIDTH } = Dimensions.get("window");

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
	city: {
		flex: 0.5,
		justifyContent: "center",
		alignItems: "center",
	},
	cityName: {
		fontSize: 68,
	},
	weather: {
	},
	status: {
		flex: 1,
		alignItems: "center",
		width: SCRREN_WIDTH,
	},
	day: {
		fontSize: 129,
	},
});
