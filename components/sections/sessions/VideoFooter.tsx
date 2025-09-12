import { CategoryIcon } from '@/components/ui/icons/CategoryIcon'
import { FilterIcon } from '@/components/ui/icons/FilterIcon'
import { VolumeUpIcon } from '@/components/ui/icons/VolumeUpIcon'
import { cn } from '@/utils/cn'

import { Text, View } from 'react-native'

interface VideoFooterProps {
	nowTime: string
	endTime: string
}

export function VideoFooter({ nowTime, endTime }: VideoFooterProps) {
	return (
		<View
			className={cn(
				'absolute bottom-0 left-0 right-0',
				'w-full flex-row justify-between bg-[#252836] rounded-b-[16px]',
				'px-4 pt-2.5 pb-3'
			)}
		>
			<Text className='text-[#d3d4d7] text-[9.5px]'>
				<Text>{nowTime}</Text>
				<Text> / </Text>
				<Text>{endTime}</Text>
			</Text>

			<View className='flex-row items-center gap-[21px]'>
				<VolumeUpIcon />
				<CategoryIcon />
				<FilterIcon />
				{/* <Image source={volumeUpImage} className='w-[14px] h-[14px]' />
				<Image source={categoryImage} className='w-[14px] h-[14px]' />
				<Image source={filterImage} className='w-[14px] h-[14px]' /> */}
			</View>
		</View>
	)
}
