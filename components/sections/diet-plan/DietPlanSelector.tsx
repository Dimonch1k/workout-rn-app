import { cn } from '@/utils/cn'
import { useRef, useState } from 'react'
import {
	Animated,
	LayoutChangeEvent,
	Pressable,
	Text,
	View,
} from 'react-native'

const OPTIONS = ['Breakfast', 'Lunch', 'Dinner']

export function DietPlanSelector({
	onChange,
}: {
	onChange?: (value: string) => void
}) {
	const [selected, setSelected] = useState(0)
	const translateX = useRef(new Animated.Value(0)).current
	const [width, setWidth] = useState(0)

	const handleLayout = (e: LayoutChangeEvent) => {
		setWidth(e.nativeEvent.layout.width)
	}

	const handleSelect = (index: number) => {
		setSelected(index)
		Animated.spring(translateX, {
			toValue: index * (width / OPTIONS.length),
			useNativeDriver: true,
		}).start()
		onChange?.(OPTIONS[index])
	}

	const thumbWidth = width / OPTIONS.length || 0

	return (
		<View className='px-[23px] pb-7'>
			<View
				onLayout={handleLayout}
				className='relative h-[31px] w-full bg-[#232c30] rounded-[15px] flex-row overflow-hidden'
			>
				<Animated.View
					className='absolute top-0 left-0 h-[31px] bg-primary rounded-[15px]'
					style={{ width: thumbWidth, transform: [{ translateX }] }}
				/>
				{OPTIONS.map((label, index) => (
					<Pressable
						key={label}
						className='flex-1 items-center justify-center'
						onPress={() => handleSelect(index)}
					>
						<Text
							className={cn(
								'text-base font-poppins-semibold',
								index === selected ? 'text-black' : 'text-white'
							)}
						>
							{label}
						</Text>
					</Pressable>
				))}
			</View>
		</View>
	)
}
