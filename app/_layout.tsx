import '@/styles/global.css'

import { useFonts } from 'expo-font'
import { Stack } from 'expo-router'

export default function RootLayout() {
	const [fontsLoaded] = useFonts({
		'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
		'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
		'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
	})

	if (!fontsLoaded) return null

	return (
		<Stack>
			<Stack.Screen name='index' options={{ headerShown: false }} />
			<Stack.Screen name='onboarding' options={{ headerShown: false }} />
			<Stack.Screen name='sign-in' options={{ headerShown: false }} />
			<Stack.Screen name='sign-up' options={{ headerShown: false }} />
			<Stack.Screen name='(tabs)' options={{ headerShown: false }} />
			<Stack.Screen name='+not-found' />
		</Stack>
	)
}
