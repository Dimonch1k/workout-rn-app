import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

export default function DietPlanScreen() {
	return (
		<TabScreen>
			<TabScreenHeader hasBackArrow hasProfile title='Diet Plan' />
		</TabScreen>
	)
}
