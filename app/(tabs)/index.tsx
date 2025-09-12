import {
	CategorySection,
	DiscoverSection,
	HeaderSection,
	TrendingSection,
	WorkoutSection,
} from '@/components/sections/home'
import { TabScreen } from '@/components/shared/tabs/TabScreen'

import {
	categoryDataList,
	discoverDataList,
	trendingDataList,
	workoutPlanDataList,
} from '@/data/home.data'

import { ScrollView, StatusBar } from 'react-native'

export default function DashboardHomeScreen() {
	return (
		<TabScreen>
			<StatusBar barStyle='light-content' backgroundColor='#062029' />
			<ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
				<HeaderSection />
				<WorkoutSection plans={workoutPlanDataList} />
				<CategorySection categories={categoryDataList} onSeeAll={() => {}} />
				<TrendingSection items={trendingDataList} onSeeAll={() => {}} />
				<DiscoverSection items={discoverDataList} />
			</ScrollView>
		</TabScreen>
	)
}
