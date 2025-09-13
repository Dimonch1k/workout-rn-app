import { Text, View } from 'react-native'

interface TabSectionBadgeProps {
	text: string
}

export function TabSectionBadge({ text }: TabSectionBadgeProps) {
	return (
		<View className='px-2 bg-primary rounded-[12px] items-center justify-center'>
			<Text className='text-black text-[12px] leading-2 font-poppins-semibold'>
				{text}
			</Text>
		</View>
	)
}
