import type { DietPlanSectionProps } from '@/types/diet-plan.interface'

import { FlatList, Image, Text, View } from 'react-native'

export function DietPlanList({ mealList }: DietPlanSectionProps) {
	return (
		<FlatList
			data={mealList}
			keyExtractor={item => item.id}
			numColumns={2}
			columnWrapperStyle={{ columnGap: 32 }}
			showsVerticalScrollIndicator={false}
			className='px-[23px]'
			contentContainerClassName='gap-y-6 pb-20'
			renderItem={({ item }) => (
				<View className='relative flex-1 items-center'>
					<Image
						source={item.image}
						className='w-full rounded-[15px] object-contain'
						resizeMode='contain'
					/>

					<Text className='absolute bottom-[15px] text-white text-lg font-poppins-bold'>
						{item.label}
					</Text>
				</View>
			)}
		/>
	)
}
