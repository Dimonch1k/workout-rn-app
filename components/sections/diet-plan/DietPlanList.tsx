import type { DietPlanSectionProps } from '@/types/diet-plan.interface'

import { Image, ScrollView, Text, View } from 'react-native'

export function DietPlanList({ mealList }: DietPlanSectionProps) {
	return (
		<ScrollView
			horizontal={false}
			showsVerticalScrollIndicator={false}
			className='px-[23px]'
			contentContainerClassName='w-full flex flex-row flex-wrap gap-x-[33px] gap-y-6'
		>
			{mealList.map((meal, index) => (
				<View key={index} className='w-fit relative items-center'>
					<Image
						source={meal.image}
						className='w-[166px] h-[225px] rounded-[15px]'
					/>

					<Text className='absolute bottom-[15px] text-white text-lg font-poppins-bold'>
						{meal.label}
					</Text>
				</View>
			))}
		</ScrollView>
	)
}
