import { cn } from '@/utils/cn'

import { Text } from 'react-native'

interface BrandTitleProps {
	centered?: boolean
	className?: string
}

export default function BrandTitle({
	centered = true,
	className,
}: BrandTitleProps) {
	return (
		<Text
			className={cn(
				'text-white text-[32px] font-poppins-semibold leading-10 tracking-widest',
				centered && 'text-center',
				className
			)}
		>
			BODY GOALS{'\n'}WORKOUT
		</Text>
	)
}
