import { cn } from '@/utils/cn'

import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { ProfileIcon } from '../ProfileIcon'

interface TabScreenHeaderProps {
	title?: string
	hasBackArrow?: boolean
	hasProfile?: boolean
	hasEndBlock?: boolean
	className?: string
	children?: ReactNode
}

export function TabScreenHeader({
	title,
	hasBackArrow,
	hasProfile,
	hasEndBlock,
	className,
	children,
}: TabScreenHeaderProps) {
	const router = useRouter()

	const handleBackPress = () => {
		router.push('/(tabs)')
	}

	return (
		<View
			className={cn(
				'w-full flex flex-row justify-between items-center bg-secondary',
				'px-[23px] pt-20 mb-[30px]',
				className
			)}
		>
			{hasBackArrow && (
				<TouchableOpacity onPress={handleBackPress}>
					<Ionicons name='arrow-back' color='white' size={24} />
				</TouchableOpacity>
			)}

			{!hasBackArrow && children}

			{title && (
				<Text className='text-white text-lg font-bold leading-[120%]'>
					{title}
				</Text>
			)}

			{hasProfile && <ProfileIcon />}
			{hasEndBlock && <View className='size-12'></View>}
		</View>
	)
}
