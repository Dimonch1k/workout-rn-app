import { StyleSheet, Text, TextStyle } from 'react-native'

interface BrandTitleProps {
	centered?: boolean
	style?: TextStyle | TextStyle[]
}

export default function BrandTitle({
	centered = true,
	style,
}: BrandTitleProps) {
	return (
		<Text style={[styles.brandText, centered && styles.centered, style]}>
			BODY GOALS{'\n'}WORKOUT
		</Text>
	)
}

const styles = StyleSheet.create({
	brandText: {
		color: 'white',
		fontSize: 32,
		fontFamily: 'Poppins-SemiBold',
		lineHeight: 34,
		letterSpacing: 6,
	},
	centered: {
		textAlign: 'center',
	},
})
