import { NotificationListSection } from '@/components/sections/notifications/NotificationListSection'
import { TabScreen } from '@/components/shared/tabs/TabScreen'
import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'
import { notificationDataList } from '@/data/notifications.data'
import { ScrollView } from 'react-native'

export default function NotificationsScreen() {
	const todayNotificationList = notificationDataList.slice(0, 4)
	const thisWeekNotificationList = notificationDataList.slice(4)

	return (
		<TabScreen>
			<TabScreenHeader hasBackArrow hasEndBlock title='Notifications' />

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerClassName='flex-col gap-2 px-[23px]'
			>
				<NotificationListSection
					notificationList={todayNotificationList}
					sectionTitle='Today'
				/>
				<NotificationListSection
					notificationList={thisWeekNotificationList}
					sectionTitle='This Week'
				/>
			</ScrollView>
		</TabScreen>
	)
}
