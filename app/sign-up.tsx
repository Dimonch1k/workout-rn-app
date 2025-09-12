import BrandTitle from '@/components/shared/BrandTitle'
import { Divider } from '@/components/shared/Divider'
import { LinkText } from '@/components/shared/LinkText'
import { AuthLayout } from '@/components/ui/AuthLayout'
import { Button } from '@/components/ui/buttons/Button'
import { Input } from '@/components/ui/Input'

import { useAuthForm } from '@/hooks/useAuthForm'

import { Ionicons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { TouchableOpacity, View } from 'react-native'

const socialProviders: {
	provider: 'apple' | 'facebook' | 'google'
	iconName: 'logo-apple' | 'logo-facebook' | 'logo-google'
	color: string
}[] = [
	{ provider: 'apple', iconName: 'logo-apple', color: '#000' },
	{ provider: 'facebook', iconName: 'logo-facebook', color: '#1877f2' },
	{ provider: 'google', iconName: 'logo-google', color: '#ea4335' },
]

export default function SignUpScreen() {
	const router = useRouter()
	const {
		email,
		setEmail,
		password,
		setPassword,
		confirmPassword,
		setConfirmPassword,
		loading,
		setLoading,
		isFormValid,
		resetForm,
	} = useAuthForm()

	const handleSignUp = () => {
		if (!isFormValid(true)) {
			alert(
				'Please fill in a valid email, password, and matching confirmation password'
			)
			return
		}

		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			resetForm()
			router.replace('/(tabs)')
		}, 1000)
	}

	const handleSignIn = () => router.push('/sign-in')

	const handleSocialSignUp = (provider: 'apple' | 'facebook' | 'google') => {
		console.log(`Sign up with ${provider}`)
	}

	return (
		<AuthLayout
			backgroundImage={require('../assets/images/sign-up.png')}
			linearGradientChildren={
				<LinearGradient
					colors={['transparent', '#062029', '#062029'] as const}
					locations={[0, 0.4, 1] as const}
					className='absolute top-0 left-0 right-0 bottom-0'
				/>
			}
		>
			<BrandTitle className='mb-5' />

			<View className='w-full flex flex-col gap-5'>
				{/* Email */}
				<Input
					icon='mail-outline'
					customPlaceholder='Email'
					value={email}
					onChangeText={setEmail}
					keyboardType='email-address'
					autoCapitalize='none'
				/>

				{/* Password */}
				<Input
					icon='lock-closed-outline'
					customPlaceholder='Password'
					value={password}
					onChangeText={setPassword}
					secureTextEntry
				/>

				{/* Confirm Password */}
				<Input
					icon='lock-closed-outline'
					customPlaceholder='Confirm Password'
					value={confirmPassword}
					onChangeText={setConfirmPassword}
					secureTextEntry
				/>

				{/* Sign Up Button */}
				<Button
					variant='primary'
					className='w-full p-4 rounded-[15px] shadow-sm shadow-black'
					onPress={handleSignUp}
					disabled={loading}
				>
					{loading ? 'Signing up...' : 'Sign Up'}
				</Button>

				<Divider />

				{/* Social Signup */}
				<View className='flex flex-row justify-center gap-4 mb-6'>
					{socialProviders.map(({ provider, iconName, color }) => (
						<TouchableOpacity
							key={provider}
							onPress={() => handleSocialSignUp(provider)}
							className='size-14 bg-white rounded-xl flex justify-center items-center'
							activeOpacity={0.8}
						>
							<Ionicons name={iconName} size={24} color={color} />
						</TouchableOpacity>
					))}
				</View>

				{/* Sign In Link */}
				<LinkText
					normalText='Already have an account?'
					linkText='Sign In here'
					onPress={handleSignIn}
				/>
			</View>
		</AuthLayout>
	)
}
