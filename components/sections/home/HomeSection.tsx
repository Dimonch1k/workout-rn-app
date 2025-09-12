import { ReactNode } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

interface HomeSectionProps {
	title: string
	onPressSeeAll?: () => void
	seeAllText?: string
	timeSlot?: string
	children: ReactNode
}

export function HomeSection({
	title,
	onPressSeeAll,
	seeAllText = 'See all',
	timeSlot,
	children,
}: HomeSectionProps) {
	return (
		<View className='mb-8'>
			<View className='flex-row justify-between items-center px-[23px] mb-4'>
				<Text className='text-white text-base font-poppins-semibold'>
					{title}
				</Text>
				{timeSlot && (
					<Text className='text-[#FFF50A] text-base font-poppins-semibold'>
						{timeSlot}
					</Text>
				)}
				{!timeSlot && onPressSeeAll && (
					<TouchableOpacity onPress={onPressSeeAll}>
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
