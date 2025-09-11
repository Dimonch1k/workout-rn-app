import { Dimensions, StyleSheet } from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#062029',
	},
	backgroundImage: {
		width: screenWidth,
		flex: 1,
	},
	gradientOverlay: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
	},
	contentContainer: {
		flex: 1,
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingHorizontal: 40,
		paddingBottom: 40,
	},
	formContainer: {
		width: '100%',
		flexDirection: 'column',
		gap: 20,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 15,
	},
	inputIcon: {
		marginRight: 12,
	},
	textInput: {
		width: '100%',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		color: '#bababa',
		outlineWidth: 0,
	},
	forgotPasswordContainer: {
		alignItems: 'center',
		marginBottom: 12,
	},
	forgotPasswordText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins-Bold',
		fontWeight: '700',
	},
	signInButton: {
		backgroundColor: '#FFF50A',
		borderRadius: 10,
		height: 56,
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 20,
	},
	signInButtonText: {
		color: '#000',
		fontSize: 18,
		fontFamily: 'Poppins-Bold',
	},
	signUpContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	signUpText: {
		color: 'white',
		fontSize: 14,
		fontFamily: 'Poppins-Regular',
	},
	signUpLink: {
		color: '#FFF50A',
		fontSize: 14,
		fontFamily: 'Poppins-Bold',
	},
})
