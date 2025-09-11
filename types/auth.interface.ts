export interface AuthScreenProps {
	onSignIn?: () => void
	onSignUp?: () => void
	onForgotPassword?: () => void
	onSocialAuth?: (provider: 'apple' | 'facebook' | 'google') => void
}
