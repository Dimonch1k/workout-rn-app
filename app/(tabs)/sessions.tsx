import { StyleSheet, Text, View } from 'react-native'

export default function SessionsScreen() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Sessions</Text>
			<Text style={styles.subtitle}>Coming Soon...</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f172a', // slate-900
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	title: {
		color: 'white',
		fontSize: 28,
		fontFamily: 'Poppins-Bold',
		textAlign: 'center',
		marginBottom: 16,
	},
	subtitle: {
		color: '#9ca3af',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		textAlign: 'center',
	},
})
