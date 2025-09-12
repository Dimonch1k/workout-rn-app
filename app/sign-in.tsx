import BrandTitle from '@/components/shared/BrandTitle'
import { LinkText } from '@/components/shared/LinkText'

import { AuthLayout } from '@/components/ui/AuthLayout'
import { Button } from '@/components/ui/buttons/Button'
import { Input } from '@/components/ui/Input'

import { useAuthForm } from '@/hooks/useAuthForm'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { View } from 'react-native'

export default function SignInScreen() {
	const router = useRouter()
	const {
		email,
		setEmail,
		password,
		setPassword,
		loading,
		setLoading,
		isFormValid,
		resetForm,
	} = useAuthForm()

	const handleSignIn = () => {
		if (!isFormValid()) {
			alert('Please enter a valid email and password')
			return
		}
		setLoading(true)

		setTimeout(() => {
			setLoading(false)
			resetForm()
			router.replace('/(tabs)')
		}, 1000)
	}

	const handleSignUp = () => router.push('/sign-up')

	return (
		<AuthLayout
			backgroundImage={require('../assets/images/sign-in.png')}
			linearGradientChildren={
				<LinearGradient
					colors={['transparent', '#062029', '#062029'] as const}
					locations={[0, 0.5, 1] as const}
					className='absolute top-0 left-0 right-0 bottom-0'
				/>
			}
			className='pb-10'
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

				{/* Forgot Password */}
				<Button
					variant='ghost'
					size='sm'
					className='items-center mb-3 p-0'
					textClassName='text-sm font-poppins-bold font-bold'
				>
					Forgot Password
				</Button>

				{/* Sign In Button */}
				<Button
					variant='primary'
					className='w-full p-4 shadow-sm shadow-black'
					onPress={handleSignIn}
					disabled={loading}
				>
					{loading ? 'Signing in...' : 'Sign In'}
				</Button>

				{/* Sign Up Link */}
				<LinkText
					normalText="Didn't have any account?"
					linkText='Sign Up here'
					onPress={handleSignUp}
				/>
			</View>
		</AuthLayout>
	)
}
