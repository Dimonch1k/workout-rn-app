import { Image, ScrollView, Text, View } from 'react-native'

import { HomeSection } from './HomeSection'

interface WorkoutSectionProps {
	plans: { image: any; label: string }[]
}

export function WorkoutSection({ plans }: WorkoutSectionProps) {
	return (
		<HomeSection title='Today Workout Plan' timeSlot='6am-8am'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-[22px] pr-[23px]'
			>
				{plans.map((item, index) => (
					<View key={index} className='relative items-center'>
						<Image
							source={item.image}
							className='w-[148px] h-[169px] rounded-2xl'
						/>
						<Text className='absolute bottom-[15px] text-white text-base font-poppins-bold'>
							{item.label}
						</Text>
					</View>
				))}
			</ScrollView>
		</HomeSection>
	)
}
