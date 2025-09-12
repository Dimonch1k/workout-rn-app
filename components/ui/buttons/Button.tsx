import { cn } from '@/utils/cn'
import React from 'react'
import {
	ActivityIndicator,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from 'react-native'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends TouchableOpacityProps {
	children: React.ReactNode
	variant?: ButtonVariant
	size?: ButtonSize
	loading?: boolean
	className?: string
	textClassName?: string
}

const buttonVariants = {
	primary: 'bg-primary',
	secondary: 'bg-secondary',
	outline: 'border border-white bg-transparent',
	ghost: 'bg-transparent',
}

const buttonSizes = {
	sm: 'px-3 py-2',
	md: 'px-4 py-4',
	lg: 'px-6 py-5',
}

const textVariants = {
	primary: 'text-black font-poppins-bold',
	secondary: 'text-white font-poppins-bold',
	outline: 'text-white font-poppins-bold',
	ghost: 'text-white font-poppins-regular',
}

const textSizes = {
	sm: 'text-sm',
	md: 'text-lg',
	lg: 'text-xl',
}

export function Button({
	children,
	variant = 'primary',
	size = 'md',
	loading = false,
	className,
	textClassName,
	disabled,
	...touchableOpacityProps
}: ButtonProps) {
	return (
		<TouchableOpacity
			className={cn(
				'flex rounded-[10px] justify-center items-center',
				buttonVariants[variant],
				buttonSizes[size],
				disabled && 'opacity-90',
				className
			)}
			disabled={disabled || loading}
			activeOpacity={0.8}
			{...touchableOpacityProps}
		>
			{loading ? (
				<ActivityIndicator
					color={variant === 'primary' ? '#000' : '#fff'}
					size='small'
				/>
			) : (
				<Text
					className={cn(textVariants[variant], textSizes[size], textClassName)}
				>
					{children}
				</Text>
			)}
		</TouchableOpacity>
	)
}
