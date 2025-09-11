import { cn } from '@/utils/cn'

import { Ionicons } from '@expo/vector-icons'
import { TextInput, TextInputProps, View } from 'react-native'

type IoniconsName = keyof typeof Ionicons.glyphMap

interface InputProps extends TextInputProps {
	icon?: IoniconsName
	iconColor?: string
	iconSize?: number
	containerClassName?: string
	inputClassName?: string
}

export function Input({
	icon,
	iconColor = '#9ca3af',
	iconSize = 20,
	containerClassName,
	inputClassName,
	...textInputProps
}: InputProps) {
	return (
		<View
			className={cn(
				'flex-row items-center bg-white rounded-[10px] p-4',
				containerClassName
			)}
		>
			{icon && (
				<Ionicons
					name={icon}
					size={iconSize}
					color={iconColor}
					className='mr-3'
				/>
			)}
			<TextInput
				className={cn(
					'w-full text-base font-poppins-regular text-[#bababa] outline-none',
					inputClassName
				)}
				placeholderTextColor={textInputProps.placeholderTextColor || '#9ca3af'}
				{...textInputProps}
				style={{
					outlineWidth: 0,
				}}
			/>
		</View>
	)
}
