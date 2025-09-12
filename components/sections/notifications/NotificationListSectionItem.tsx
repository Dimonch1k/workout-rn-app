'use client'

import type { INotificationListSectionItem } from '@/types/notifications.interface'
import { cn } from '@/utils/cn'

import { Image, Text, View } from 'react-native'

export function NotificationListSectionItem({
	image,
	title,
	subtitle,
	time,
}: INotificationListSectionItem) {
	return (
		<View
			className={cn('flex-row items-start justify-between py-3 bg-transparent')}
		>
			<View className='flex-row items-start gap-3 flex-shrink'>
				<Image
					source={image}
					className='w-21 h-21 rounded-xl'
					resizeMode='cover'
				/>
				<View className='flex-shrink gap-1'>
					{title && (
						<Text className='text-white text-base font-poppins-semibold leading-[120%]'>
							{title}
						</Text>
					)}
					<Text className='text-[#c4c4c4] text-sm font-poppins-regular leading-[120%]'>
						{subtitle}
					</Text>
				</View>
			</View>

			<Text className='text-primary opacity-75 text-base font-poppins-semibold'>
				{time}
			</Text>
		</View>
	)
}
