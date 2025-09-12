import { TabSection } from '@/components/shared/tabs/TabSection'
import { SessionsIcon } from '@/components/ui/icons/SessionsIcon'

import type { VideoSectionProps } from '@/types/sessions.interface'

import { Image, ScrollView, Text, View } from 'react-native'

export function VideosSection({ videoList, onSeeAll }: VideoSectionProps) {
	return (
		<TabSection title='Trending' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-[14px] pr-[23px]'
			>
				{videoList.map((video, index) => (
					<View key={index} className='relative items-start'>
						<Image
							source={video.image}
							className='w-[125px] h-[119px] rounded-[15px]'
						/>
						<Text className='absolute bottom-[10px] left-[10px] text-white text-base font-poppins-bold'>
							<SessionsIcon />
						</Text>
					</View>
				))}
			</ScrollView>
		</TabSection>
	)
}
