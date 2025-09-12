import { cn } from '@/utils/cn'

import { Ionicons } from '@expo/vector-icons'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

type IoniconsName = keyof typeof Ionicons.glyphMap
type SocialProvider = 'apple' | 'facebook' | 'google'

interface SocialButtonProps extends TouchableOpacityProps {
	provider: SocialProvider
	size?: number
	className?: string
}

const socialConfig = {
	apple: { icon: 'logo-apple' as IoniconsName, color: '#000' },
	facebook: { icon: 'logo-facebook' as IoniconsName, color: '#1877f2' },
	google: { icon: 'logo-google' as IoniconsName, color: '#ea4335' },
}

export function SocialButton({
	provider,
	size = 24,
	className,
	...touchableOpacityProps
}: SocialButtonProps) {
	const config = socialConfig[provider]

	return (
		<TouchableOpacity
			className={cn(
				'w-14 h-14 bg-white rounded-xl justify-center items-center',
				className
			)}
			activeOpacity={0.8}
			{...touchableOpacityProps}
		>
			<Ionicons name={config.icon} size={size} color={config.color} />
		</TouchableOpacity>
	)
}
