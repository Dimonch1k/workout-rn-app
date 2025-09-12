import { cn } from '@/utils/cn'

import { ReactNode } from 'react'
import { View } from 'react-native'

interface TabScreenProps {
	className?: string
	children: ReactNode
}

export function TabScreen({ className, children }: TabScreenProps) {
	return (
		<View className={cn('flex-1 bg-secondary', className)}>{children}</View>
	)
}
