import { DietPlanIcon } from '@/components/ui/icons/DietPlanIcon'
import { HomeIcon } from '@/components/ui/icons/HomeIcon'
import { NotificationIcon } from '@/components/ui/icons/NotificationIcon'
import { SessionsIcon } from '@/components/ui/icons/SessionsIcon'

import { FC } from 'react'

interface IconProps {
	color?: string
}

interface TabScreenProps {
	name: 'index' | 'sessions' | 'diet-plan' | 'notifications'
	title: string
	Icon: FC<IconProps>
}

export const tabScreens: TabScreenProps[] = [
	{
		name: 'index',
		title: 'Home',
		Icon: HomeIcon,
	},
	{
		name: 'sessions',
		title: 'Sessions',
		Icon: SessionsIcon,
	},
	{
		name: 'diet-plan',
		title: 'Diet Plan',
		Icon: DietPlanIcon,
	},
	{
		name: 'notifications',
		title: 'Notification',
		Icon: NotificationIcon,
	},
]
