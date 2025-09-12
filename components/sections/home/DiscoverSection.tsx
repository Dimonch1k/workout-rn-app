import { TabSection } from '@/components/shared/tabs/TabSection'

import type { DiscoverSectionProps } from '@/types/home.interface'

import { Image, ScrollView } from 'react-native'

export function DiscoverSection({ discoverList }: DiscoverSectionProps) {
	return (
		<TabSection title='Discover'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-4 pr-[23px]'
			>
				{discoverList.map((d, index) => (
					<Image
						key={index}
						source={d.image}
						className='w-[227px] h-[97px] rounded-2xl mr-4'
					/>
				))}
			</ScrollView>
		</TabSection>
	)
}
