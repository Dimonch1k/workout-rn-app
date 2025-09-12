import profilePic from '@/assets/images/home/profile.png'

import { Image, View } from 'react-native'

interface ProfileIconProps {
	className?: string
}

export function ProfileIcon({ className }: ProfileIconProps) {
	return (
		<View className='relative'>
			<Image source={profilePic} className='w-12 h-12 rounded-full' />
			<View className='absolute top-[3px] -right-[6px] w-3 h-3 bg-blue-500 rounded-full' />
		</View>
	)
}
