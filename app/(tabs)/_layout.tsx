import { tabScreens } from '@/data/tab-screens.data'
import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#FFF50A',
				tabBarInactiveTintColor: 'white',
				headerShown: false,
				tabBarStyle: {
					backgroundColor: '#0f172a',
					height: 80,
					paddingTop: 10,
					borderTopWidth: 0,
					elevation: 0,
					shadowOpacity: 0,
				},
				tabBarLabelStyle: {
					fontSize: 12,
					fontFamily: 'Poppins-Bold',
					marginTop: 5,
				},
			}}
		>
			{tabScreens.map(({ name, title, Icon }) => (
				<Tabs.Screen
					key={name}
					name={name}
					options={{
						headerShown: false,
						title,
						tabBarIcon: ({ color }) => <Icon color={color} />,
					}}
				/>
			))}
		</Tabs>
	)
}
