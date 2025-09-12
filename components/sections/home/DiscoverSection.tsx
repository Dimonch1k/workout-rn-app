import { Image, ScrollView } from 'react-native'

import { HomeSection } from './HomeSection'

interface DiscoverSectionProps {
	items: { image: any }[]
}

export function DiscoverSection({ items }: DiscoverSectionProps) {
	return (
		<HomeSection title='Discover'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-4 pr-[23px]'
			>
				{items.map((d, index) => (
					<Image
						key={index}
						source={d.image}
						className='w-[227px] h-[97px] rounded-2xl mr-4'
					/>
				))}
			</ScrollView>
		</HomeSection>
	)
}
