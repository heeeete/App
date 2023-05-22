import { StatusBar } from "expo-status-bar";
import { Text, View, ScrollView } from "react-native";
import React from "react";
import { styles } from "./styles";

export default function App() {
	// const [location, setLocation] = useState();
	// const [errorMsg, setErrorMsg] = useState(true);

	return (
		<View style={styles.container}>
			<View style={styles.city}>
				<Text style={styles.cityName}>서울</Text>
			</View>
			<ScrollView
				horizontal //ScrollView 기본 적으로 세로로 스크롤 됨 이 prop를 사용하면 가로로 스크롤
				pagingEnabled // 자유롭게 스크롤하지 못하게 해주고 페이지 처럼 생성해줌 한칸 한칸 딱 지정
				showsHorizontalScrollIndicator="false" //밑에 스크롤바 없애기
				contentContainerStyle={styles.weather}
			>
				<View style={styles.status}>
					<Text style={styles.day}>27</Text>
					<Text>Sunny</Text>
				</View>
				<View style={styles.status}>
					<Text style={styles.day}>27</Text>
					<Text>Sunny</Text>
				</View>
				<View style={styles.status}>
					<Text style={styles.day}>27</Text>
					<Text>Sunny</Text>
				</View>
				<View style={styles.status}>
					<Text style={styles.day}>27</Text>
					<Text>Sunny</Text>
				</View>
				<View style={styles.status}>
					<Text style={styles.day}>27</Text>
					<Text>Sunny</Text>
				</View>
				<View style={styles.status}>
					<Text style={styles.day}>27</Text>
					<Text>Sunny</Text>
				</View>
			</ScrollView>
		</View>
	);
}
