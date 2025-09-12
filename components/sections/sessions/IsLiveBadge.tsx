import { cn } from '@/utils/cn'

import { Text, View } from 'react-native'

export function IsLiveBadge() {
	return (
		<View
			className={cn(
				'absolute top-2.5 left-2.5',
				'px-3 py-1.5 bg-[#F51818] rounded-full',
				'flex-row items-center gap-1'
			)}
		>
			<View className='size-1 bg-white rounded-full' />
			<Text className='text-white text-[8px] capitalize font-poppins-semibold leading-3'>
				LIVE
			</Text>
		</View>
	)
}
