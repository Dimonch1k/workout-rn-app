import { TabSection } from '@/components/shared/tabs/TabSection'

import type { LiveSessionsSectionProps } from '@/types/sessions.interface'

import { Image, ScrollView, View } from 'react-native'
import { IsLiveBadge } from './IsLiveBadge'
import { VideoFooter } from './VideoFooter'

export function LiveSessionsSection({
	liveSessionList,
}: LiveSessionsSectionProps) {
	return (
		<TabSection title='Live Sessions'>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-4 pr-[23px]'
			>
				{liveSessionList.map((item, index) => (
					<View key={index} className='relative rounded-[16px] overflow-hidden'>
						<Image
							source={item.image}
							className='w-[311px] h-[210px] rounded-[15px] mr-4'
						/>

						{item.isLive && <IsLiveBadge />}
						{item.nowTime && item.endTime && (
							<VideoFooter nowTime={item.nowTime} endTime={item.endTime} />
						)}
					</View>
				))}
			</ScrollView>
		</TabSection>
	)
}
