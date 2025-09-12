import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

export default function NotificationsScreen() {
	return (
		<TabScreen>
			<TabScreenHeader hasBackArrow hasEndBlock title='Notifications' />
		</TabScreen>
	)
}
