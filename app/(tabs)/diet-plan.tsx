import { DietPlanList } from '@/components/sections/diet-plan/DietPlanList'
import { DietPlanSelector } from '@/components/sections/diet-plan/DietPlanSelector'
import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

import { dietPlanDataList } from '@/data/diet-plan.data'

export default function DietPlanScreen() {
	return (
		<TabScreen>
			<TabScreenHeader hasBackArrow hasProfile title='Diet Plan' />
			<DietPlanSelector />
			<DietPlanList mealList={dietPlanDataList} />
		</TabScreen>
	)
}
