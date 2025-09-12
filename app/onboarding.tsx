import BrandTitle from '@/components/shared/BrandTitle'
import { AuthLayout } from '@/components/ui/AuthLayout'
import { Button } from '@/components/ui/buttons/Button'

import { LinearGradient } from 'expo-linear-gradient'
import { useRouter } from 'expo-router'
import { Text, View } from 'react-native'

export default function OnboardingScreen() {
	const router = useRouter()

	const handleGetStarted = () => {
		router.push('/sign-in')
	}

	return (
		<AuthLayout
			showScrollView={false}
			backgroundImage={require('../assets/images/onboarding.png')}
			linearGradientChildren={
				<LinearGradient
					colors={['transparent', '#062029', '#062029']}
					locations={[0, 0.8, 1]}
					className='absolute top-0 left-0 right-0 bottom-0'
				/>
			}
		>
			<View className='flex-1 flex justify-end items-center pb-10'>
				<Text className='text-white text-2xl font-poppins-regular text-center'>
					Welcome to
				</Text>

				<BrandTitle />

				{/* Subtitle */}
				<Text className='text-[#d1d5db] text-base font-poppins-regular text-center mb-10'>
					Achieve your body goals with us
				</Text>

				{/* Get Started Button */}
				<Button
					variant='primary'
					className='w-[60vw] p-4 rounded-[15px] shadow-sm shadow-black'
					onPress={handleGetStarted}
					textClassName='text-[22px]'
				>
					Get Started
				</Button>
			</View>
		</AuthLayout>
	)
}
