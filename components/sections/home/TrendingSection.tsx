import { Image, ScrollView, Text, View } from 'react-native'

import { HomeSection } from './HomeSection'

interface TrendingSectionProps {
	items: { image: any; label: string }[]
	onSeeAll?: () => void
}

export function TrendingSection({ items, onSeeAll }: TrendingSectionProps) {
	return (
		<HomeSection title='Trending' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-4 pr-[23px]'
			>
				{items.map((trend, index) => (
					<View key={index} className='relative items-start'>
						<Image
							source={trend.image}
							className='w-[223px] h-[119px] rounded-2xl'
						/>
						<Text className='absolute bottom-[15px] left-[15px] text-white text-base font-poppins-bold'>
							{trend.label}
						</Text>
					</View>
				))}
			</ScrollView>
		</HomeSection>
	)
}
