import aerobicsImage from '@/assets/images/notifications/aerobics.png'
import joggingImage from '@/assets/images/notifications/jogging.png'
import mealTimeImage from '@/assets/images/notifications/meal-time.png'
import yogaSessionImage from '@/assets/images/notifications/yoga-session.png'

import dailyPushUpImage from '@/assets/images/notifications/daily-push-up.png'
import fullBodyWorkout1Image from '@/assets/images/notifications/full-body-workout-1.png'
import fullBodyWorkout2Image from '@/assets/images/notifications/full-body-workout-2.png'

import type { INotificationListSectionItem } from '@/types/notifications.interface'

export const notificationDataList: INotificationListSectionItem[] = [
	// Today
	{
		image: mealTimeImage,
		title: 'Meal Time',
		subtitle: 'Time to eat your breakfast',
		time: 'Now',
	},
	{
		image: joggingImage,
		title: 'Jogging',
		subtitle: 'It’s time for your jogging session',
		time: '7:30am',
	},
	{
		image: yogaSessionImage,
		title: 'Yoga Session',
		subtitle: 'Get ready for you Yoga routine ',
		time: '7:00am',
	},
	{
		image: aerobicsImage,
		title: 'Aerobics',
		subtitle: 'It’s time for aerobics',
		time: '6:00am',
	},
	// This week
	{
		image: fullBodyWorkout1Image,
		title: 'Full Body Workout',
		subtitle: 'Time to hit the gym',
		time: '6:00am',
	},
	{
		image: dailyPushUpImage,
		title: 'Daily Push Up',
		subtitle: 'Time to push your body',
		time: '7:00am',
	},
	{
		image: fullBodyWorkout2Image,
		title: 'Full Body Workout',
		subtitle: 'Time to hit the gym',
		time: '6:00am',
	},
]
