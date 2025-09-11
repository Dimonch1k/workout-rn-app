import { cn } from '@/utils/cn'
import { Text, View } from 'react-native'

interface DividerProps {
	text?: string
	className?: string
	lineClassName?: string
	textClassName?: string
}

export function Divider({
	text = 'Or',
	className,
	lineClassName,
	textClassName,
}: DividerProps) {
	return (
		<View className={cn('flex-row items-center', className)}>
			<View className={cn('flex-1 h-px bg-white', lineClassName)} />
			<Text
				className={cn(
					'text-white text-base font-poppins-regular mx-5',
					textClassName
				)}
			>
				{text}
			</Text>
			<View className={cn('flex-1 h-px bg-white', lineClassName)} />
		</View>
	)
}
