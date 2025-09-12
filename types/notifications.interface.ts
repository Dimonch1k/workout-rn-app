import { ImageSourcePropType } from 'react-native'

export interface INotificationListSectionItem {
	image: ImageSourcePropType
	title?: string
	subtitle: string
	time: string
}

export interface NotificationListSectionProps {
	notificationList: INotificationListSectionItem[]
	sectionTitle: string
}
