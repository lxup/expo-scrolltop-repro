import { ScrollView, Text } from "react-native";

const IndexScreen = () => {
	return (
		<ScrollView contentContainerStyle={{ backgroundColor: 'red' }}>
			{new Array(50).fill(1).map((_, i) => (
				<Text key={i} style={{ color: 'white', paddingVertical: 16 }}>Line {i + 1}</Text>
			))}
		</ScrollView>
	)
};

export default IndexScreen;