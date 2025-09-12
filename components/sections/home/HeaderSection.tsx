import { TabScreenHeader } from '@/components/shared/tabs/TabScreenHeader'

import { Text, View } from 'react-native'

export function HeaderSection() {
	return (
		<TabScreenHeader hasProfile>
			<View className='flex-1'>
				<Text className='text-white text-base font-poppins-regular'>
					Hello <Text className='text-primary'>Juliet</Text>
				</Text>
				<Text className='text-white text-2xl font-poppins-semibold mt-[2px]'>
					Let's start your day
				</Text>
			</View>
		</TabScreenHeader>
	)
}
