import { cn } from '@/utils/cn'

import { ReactNode } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

interface TabScreenProps {
	className?: string
	children: ReactNode
}

export function TabScreen({ className, children }: TabScreenProps) {
	return (
		<SafeAreaView
			style={{ flex: 1 }}
			edges={['top']}
			className={cn('bg-secondary', className)}
		>
			{children}
		</SafeAreaView>
	)
}
