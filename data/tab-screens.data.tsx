import { DietPlanIcon } from '@/components/ui/icons/DietPlanIcon'
import { HomeIcon } from '@/components/ui/icons/HomeIcon'
import { NotificationIcon } from '@/components/ui/icons/NotificationIcon'
import { SessionsIcon } from '@/components/ui/icons/SessionsIcon'

export const tabScreens = [
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
