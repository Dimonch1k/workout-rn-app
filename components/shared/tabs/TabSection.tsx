import { cn } from '@/utils/cn'

import { ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import { TabSectionBadge } from './TabSectionBadge'

interface TabSectionProps {
	title: string
	onPressSeeAll?: () => void
	seeAllText?: string
	timeSlot?: string
	badgeText?: string
	className?: string
	children: ReactNode
}

export function TabSection({
	title,
	onPressSeeAll,
	seeAllText = 'See all',
	timeSlot,
	badgeText,
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
				<View className='flex flex-row items-center gap-1'>
					<Text className='text-white text-base font-poppins-semibold'>
						{title}
					</Text>
					{badgeText && <TabSectionBadge text={badgeText} />}
				</View>
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
