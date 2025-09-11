import { cn } from '@/utils/cn'
import { Text, TextProps, TouchableOpacity, View } from 'react-native'

interface LinkTextProps {
	normalText: string
	linkText: string
	onPress: () => void
	normalTextProps?: TextProps
	linkTextProps?: TextProps
	containerClassName?: string
}

export function LinkText({
	normalText,
	linkText,
	onPress,
	normalTextProps,
	linkTextProps,
	containerClassName,
}: LinkTextProps) {
	return (
		<View
			className={cn(
				'flex flex-row justify-center items-center',
				containerClassName
			)}
		>
			<Text
				className='text-white text-sm font-poppins-regular'
				{...normalTextProps}
			>
				{normalText}
			</Text>
			<TouchableOpacity onPress={onPress}>
				<Text
					className='text-primary text-sm font-poppins-bold'
					{...linkTextProps}
				>
					{' '}
					{linkText}
				</Text>
			</TouchableOpacity>
		</View>
	)
}
