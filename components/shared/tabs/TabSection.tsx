import { cn } from '@/utils/cn'

import { ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface TabSectionProps {
	title: string
	onPressSeeAll?: () => void
	seeAllText?: string
	timeSlot?: string
	className?: string
	children: ReactNode
}

export function TabSection({
	title,
	onPressSeeAll,
	seeAllText = 'See all',
	timeSlot,
	className,
	children,
}: TabSectionProps) {
	return (
		<View className='mb-8'>
			<View
				className={cn(
					'flex-row justify-between items-center px-[23px] mb-4',
					className
				)}
			>
				<Text className='text-white text-base font-poppins-semibold'>
					{title}
				</Text>
				{timeSlot && (
					<Text className='text-primary text-base font-poppins-semibold'>
						{timeSlot}
					</Text>
				)}
				{!timeSlot && onPressSeeAll && (
					<TouchableOpacity onPress={onPressSeeAll} activeOpacity={0.8}>
						<Text className='text-[#d6d3d1] text-base font-poppins-semibold'>
							{seeAllText}
						</Text>
					</TouchableOpacity>
				)}
			</View>
			{children}
		</View>
	)
}
