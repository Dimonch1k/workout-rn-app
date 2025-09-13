import { TabSection } from '@/components/shared/tabs/TabSection'

import type { NotificationListSectionProps } from '@/types/notifications.interface'

import { NotificationListSectionItem } from './NotificationListSectionItem'

export function NotificationListSection({
	notificationList,
	sectionTitle,
	badgeText,
}: NotificationListSectionProps) {
	return (
		<TabSection title={sectionTitle} badgeText={badgeText} className='px-0'>
			{notificationList.map((notification, idx) => (
				<NotificationListSectionItem
					key={idx}
					image={notification.image}
					title={notification.title}
					subtitle={notification.subtitle}
					time={notification.time}
				/>
			))}
		</TabSection>
	)
}
