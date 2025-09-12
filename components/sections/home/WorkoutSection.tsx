import { TabSection } from '@/components/shared/tabs/TabSection'

import type { WorkoutSectionProps } from '@/types/home.interface'

import { Image, ScrollView, Text, View } from 'react-native'

export function WorkoutSection({ planList }: WorkoutSectionProps) {
	return (
		<TabSection title='Today Workout Plan' timeSlot='6am-8am'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-[22px] pr-[23px]'
			>
				{planList.map((item, index) => (
					<View key={index} className='relative items-center'>
						<Image
							source={item.image}
							className='w-[148px] h-[169px] rounded-2xl'
						/>
						{item.label && (
							<Text className='absolute bottom-[15px] text-white text-base font-poppins-bold'>
								{item.label}
							</Text>
						)}
					</View>
				))}
			</ScrollView>
		</TabSection>
	)
}
