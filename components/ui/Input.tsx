import { cn } from '@/utils/cn'

import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'

type IoniconsName = keyof typeof Ionicons.glyphMap

interface InputProps extends TextInputProps {
	icon?: IoniconsName
	iconColor?: string
	iconSize?: number
	containerClassName?: string
	inputClassName?: string
	placeholderClassName?: string
}

export function Input({
	icon,
	iconColor = '#9ca3af',
	iconSize = 20,
	containerClassName,
	inputClassName,
	placeholderClassName,
	...textInputProps
}: InputProps) {
	const [value, setValue] = useState(textInputProps.value ?? '')

	return (
		<View
			className={cn(
				'flex flex-row items-center bg-white rounded-[10px] p-[15px]',
				'border border-[#bababa]',
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

			<View className='flex-1 justify-center'>
				<TextInput
					{...textInputProps}
					value={value}
					onChangeText={text => {
						setValue(text)
						textInputProps.onChangeText?.(text)
					}}
					className={cn(
						'text-sm font-poppins-regular text-black',
						'py-0',
						inputClassName
					)}
					style={{ height: 20, lineHeight: 20, outlineWidth: 0 }}
					underlineColorAndroid='transparent'
				/>
			</View>
		</View>
	)
}
