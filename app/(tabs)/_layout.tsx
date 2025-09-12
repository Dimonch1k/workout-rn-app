import { tabScreens } from '@/data/tab-screens.data'

import { Tabs } from 'expo-router'

export default function TabLayout() {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: '#fff50a',
				tabBarInactiveTintColor: '#fff',
				headerShown: false,
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
						title,
						tabBarIcon: ({ color }) => <Icon color={color} />,
						tabBarStyle: {
							backgroundColor: '#062029',
							height: 80,
							paddingTop: 10,
							paddingBottom: 10,
							borderTopWidth: 0,
							elevation: 0,
							shadowOpacity: 0,
						},
						...(name !== 'index' && {
							tabBarStyle: {
								display: 'none',
							},
						}),
					}}
				/>
			))}
		</Tabs>
	)
}
