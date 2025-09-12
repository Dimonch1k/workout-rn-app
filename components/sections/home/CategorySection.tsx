import { TabSection } from '@/components/shared/tabs/TabSection'

import type { CategorySectionProps } from '@/types/home.interface'

import { Image, ScrollView, Text, View } from 'react-native'

export function CategorySection({
	categoryList,
	onSeeAll,
}: CategorySectionProps) {
	return (
		<TabSection title='Categories' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-2 pr-[23px]'
			>
				{categoryList.map((cat, index) => (
					<View key={index} className='relative items-center'>
						<Image
							source={cat.image}
							className='w-[77px] h-[104px] rounded-2xl'
						/>
						<Text className='absolute bottom-[15px] text-white text-xs font-poppins-bold'>
							{cat.label}
						</Text>
					</View>
				))}
			</ScrollView>
		</TabSection>
	)
}
