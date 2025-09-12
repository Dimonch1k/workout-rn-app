import { TabSection } from '@/components/shared/tabs/TabSection'

import type { TutorialSectionProps } from '@/types/sessions.interface'

import { Image, ScrollView } from 'react-native'

export function TutorialsSection({
	tutorialList,
	onSeeAll,
}: TutorialSectionProps) {
	return (
		<TabSection title='Tutorials' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-4 pr-[23px]'
			>
				{tutorialList.map((item, index) => (
					<Image
						key={index}
						source={item.image}
						className='w-[227px] h-[114px] rounded-[15px] mr-4'
					/>
				))}
			</ScrollView>
		</TabSection>
	)
}
