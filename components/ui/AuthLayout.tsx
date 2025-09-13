import { cn } from '@/utils/cn'

import React from 'react'
import {
	Dimensions,
	ImageBackground,
	KeyboardAvoidingView,
	Platform,
	ScrollView,
	StatusBar,
	View,
} from 'react-native'

const { width: screenWidth } = Dimensions.get('window')

interface AuthLayoutProps {
	backgroundImage?: any
	showScrollView?: boolean
	className?: string
	children: React.ReactNode
	linearGradientChildren?: React.ReactNode
}

export function AuthLayout({
	backgroundImage = require('../../assets/images/onboarding.png'),
	showScrollView = true,
	className,
	children,
	linearGradientChildren,
}: AuthLayoutProps) {
	const content = (
		<View className={cn('flex-1 bg-secondary', className)}>
			<StatusBar barStyle='light-content' />

			<ImageBackground
				source={backgroundImage}
				resizeMode='cover'
				style={{
					width: screenWidth,
					height: '100%',
					flex: 1,
					justifyContent: 'flex-start',
				}}
			>
				{linearGradientChildren}

				<View className='flex-1 justify-end items-center px-10 pb-10'>
					{children}
				</View>
			</ImageBackground>
		</View>
	)

	if (showScrollView) {
		return (
			<KeyboardAvoidingView
				className='flex-1'
				behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
			>
				<ScrollView
					className='flex-1'
					contentContainerStyle={{ flexGrow: 1 }}
					showsVerticalScrollIndicator={false}
					keyboardShouldPersistTaps='handled'
				>
					{content}
				</ScrollView>
			</KeyboardAvoidingView>
		)
	}

	return content
}
