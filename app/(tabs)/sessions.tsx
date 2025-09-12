import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

export default function SessionsScreen() {
	return (
		<TabScreen>
			<TabScreenHeader hasBackArrow hasProfile title='Sessions' />
		</TabScreen>
	)
}
