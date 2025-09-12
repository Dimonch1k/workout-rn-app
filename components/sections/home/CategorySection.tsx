import { Image, ScrollView, Text, View } from 'react-native'

import { HomeSection } from './HomeSection'

interface CategorySectionProps {
	categories: { image: any; label: string }[]
	onSeeAll?: () => void
}

export function CategorySection({
	categories,
	onSeeAll,
}: CategorySectionProps) {
	return (
		<HomeSection title='Categories' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-2 pr-[23px]'
			>
				{categories.map((cat, index) => (
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
		</HomeSection>
	)
}
