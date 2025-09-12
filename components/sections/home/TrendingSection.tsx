import { TabSection } from '@/components/shared/tabs/TabSection'

import type { TrendingSectionProps } from '@/types/home.interface'

import { Image, ScrollView, Text, View } from 'react-native'

export function TrendingSection({
	trendingList,
	onSeeAll,
}: TrendingSectionProps) {
	return (
		<TabSection title='Trending' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-4 pr-[23px]'
			>
				{trendingList.map((trend, index) => (
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
		</TabSection>
	)
}
