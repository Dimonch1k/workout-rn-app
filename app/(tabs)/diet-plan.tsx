import { DietPlanList } from '@/components/sections/diet-plan/DietPlanList'
import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

import { dietPlanDataList } from '@/data/diet-plan.data'

export default function DietPlanScreen() {
	return (
		<TabScreen className='pb-20'>
			<TabScreenHeader hasBackArrow hasProfile title='Diet Plan' />
			<DietPlanList mealList={dietPlanDataList} />
		</TabScreen>
	)
}
