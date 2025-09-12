import { LiveSessionsSection } from '@/components/sections/sessions/LiveSessionsSection'
import { TrainersSection } from '@/components/sections/sessions/TrainersSection'
import { TutorialsSection } from '@/components/sections/sessions/TutorialsSection'
import { VideosSection } from '@/components/sections/sessions/VideosSection'

import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

import {
	liveSessionDataList,
	trainerDataList,
	tutorialDataList,
	videoDataList,
} from '@/data/sessions.data'

import { ScrollView } from 'react-native'

export default function SessionsScreen() {
	return (
		<TabScreen>
			<TabScreenHeader hasBackArrow hasProfile title='Sessions' />

			<ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
				<LiveSessionsSection liveSessionList={liveSessionDataList} />
				<TrainersSection trainerList={trainerDataList} onSeeAll={() => {}} />
				<VideosSection videoList={videoDataList} onSeeAll={() => {}} />
				<TutorialsSection tutorialList={tutorialDataList} onSeeAll={() => {}} />
			</ScrollView>
		</TabScreen>
	)
}
