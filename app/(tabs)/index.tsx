import {
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

const PlaceholderImage = ({
	width,
	height,
	style,
	text,
}: {
	width: number
	height: number
	style?: any
	text?: string
}) => (
	<View
		style={[
			{
				width,
				height,
				backgroundColor: '#374151',
				borderRadius: 16,
				justifyContent: 'center',
				alignItems: 'center',
				borderWidth: 1,
				borderColor: '#4b5563',
			},
			style,
		]}
	>
		<Text
			style={{ color: '#9ca3af', fontSize: 12, fontFamily: 'Poppins-Regular' }}
		>
			{text || `${width}x${height}`}
		</Text>
	</View>
)

export default function DashboardHomeScreen() {
	return (
		<View style={styles.container}>
			{/* just set status bar style */}
			<StatusBar barStyle='light-content' backgroundColor='#0f172a' />

			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				{/* Header Section */}
				<View style={styles.headerSection}>
					<View style={styles.greetingContainer}>
						<Text style={styles.greetingText}>
							Hello <Text style={styles.nameText}>Juliet</Text>
						</Text>
						<Text style={styles.startDayText}>Let's start your day</Text>
					</View>

					<View style={styles.profileContainer}>
						<PlaceholderImage
							width={48}
							height={48}
							style={{ borderRadius: 24 }}
							text='Profile'
						/>
						<View style={styles.notificationDot} />
					</View>
				</View>

				{/* Today Workout Plan Section */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Today Workout Plan</Text>
						<Text style={styles.timeSlot}>6am-8am</Text>
					</View>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.horizontalScroll}
						contentContainerStyle={styles.workoutPlansContainer}
					>
						<View style={styles.workoutPlan}>
							<PlaceholderImage width={148} height={169} text='Workout 1' />
							<Text style={styles.workoutLabel}>Jogging</Text>
						</View>

						<View style={styles.workoutPlan}>
							<PlaceholderImage width={148} height={169} text='Workout 2' />
							<Text style={styles.workoutLabel}>Push-up</Text>
						</View>

						<View style={styles.workoutPlan}>
							<PlaceholderImage width={148} height={169} text='Workout 3' />
							<Text style={styles.workoutLabel}>Squat</Text>
						</View>
					</ScrollView>
				</View>

				{/* Categories Section */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Categories</Text>
						<TouchableOpacity>
							<Text style={styles.seeAllText}>See all</Text>
						</TouchableOpacity>
					</View>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.horizontalScroll}
						contentContainerStyle={styles.categoriesContainer}
					>
						{['Gym', 'Yoga', 'Fitness', 'Aerobics', 'Trainers'].map(
							(category, index) => (
								<View key={index} style={styles.categoryItem}>
									<PlaceholderImage width={77} height={104} text={category} />
									<Text style={styles.categoryLabel}>{category}</Text>
								</View>
							)
						)}
					</ScrollView>
				</View>

				{/* Trending Section */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Trending</Text>
						<TouchableOpacity>
							<Text style={styles.seeAllText}>See all</Text>
						</TouchableOpacity>
					</View>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.horizontalScroll}
						contentContainerStyle={styles.trendingContainer}
					>
						<View style={styles.trendingItem}>
							<PlaceholderImage width={223} height={119} text='Trending 1' />
							<Text style={styles.trendingLabel}>Gym Centres</Text>
						</View>

						<View style={styles.trendingItem}>
							<PlaceholderImage width={207} height={119} text='Trending 2' />
							<Text style={styles.trendingLabel}>Trainer centres</Text>
						</View>
					</ScrollView>
				</View>

				{/* Discover Section */}
				<View style={styles.section}>
					<View style={styles.sectionHeader}>
						<Text style={styles.sectionTitle}>Discover</Text>
					</View>

					<ScrollView
						horizontal
						showsHorizontalScrollIndicator={false}
						style={styles.horizontalScroll}
						contentContainerStyle={styles.discoverContainer}
					>
						<PlaceholderImage width={227} height={97} text='Discover 1' />
						<PlaceholderImage width={227} height={97} text='Discover 2' />
					</ScrollView>
				</View>

				{/* Bottom spacing for tab bar */}
				<View style={{ height: 100 }} />
			</ScrollView>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#0f172a',
	},
	scrollView: {
		flex: 1,
	},
	headerSection: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 23,
		marginTop: 44,
		marginBottom: 30,
	},
	greetingContainer: {
		flex: 1,
	},
	greetingText: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Regular',
		lineHeight: 20,
	},
	nameText: {
		color: '#FFF50A',
	},
	startDayText: {
		color: 'white',
		fontSize: 24,
		fontFamily: 'Poppins-SemiBold',
		lineHeight: 28,
		marginTop: 2,
	},
	profileContainer: {
		position: 'relative',
	},
	notificationDot: {
		position: 'absolute',
		top: 3,
		right: -6,
		width: 12,
		height: 12,
		backgroundColor: '#3b82f6',
		borderRadius: 6,
	},
	section: {
		marginBottom: 32,
	},
	sectionHeader: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 23,
		marginBottom: 16,
	},
	sectionTitle: {
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-SemiBold',
		lineHeight: 20,
	},
	timeSlot: {
		color: '#FFF50A',
		fontSize: 16,
		fontFamily: 'Poppins-SemiBold',
		lineHeight: 20,
	},
	seeAllText: {
		color: '#d6d3d1',
		fontSize: 16,
		fontFamily: 'Poppins-SemiBold',
		lineHeight: 20,
	},
	horizontalScroll: {
		paddingLeft: 23,
	},
	workoutPlansContainer: {
		flexDirection: 'row',
		gap: 22,
		paddingRight: 23,
	},
	workoutPlan: {
		position: 'relative',
		alignItems: 'center',
	},
	workoutLabel: {
		position: 'absolute',
		bottom: 15,
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Bold',
		lineHeight: 20,
		marginTop: 12,
	},
	categoriesContainer: {
		flexDirection: 'row',
		gap: 8,
		paddingRight: 23,
	},
	categoryItem: {
		position: 'relative',
		alignItems: 'center',
	},
	categoryLabel: {
		position: 'absolute',
		bottom: 15,
		color: 'white',
		fontSize: 12,
		fontFamily: 'Poppins-Bold',
		lineHeight: 16,
		marginTop: 8,
	},
	trendingContainer: {
		flexDirection: 'row',
		gap: 16,
		paddingRight: 23,
	},
	trendingItem: {
		position: 'relative',
		alignItems: 'flex-start',
	},
	trendingLabel: {
		position: 'absolute',
		bottom: 15,
		left: 15,
		color: 'white',
		fontSize: 16,
		fontFamily: 'Poppins-Bold',
		lineHeight: 20,
		marginTop: 12,
	},
	discoverContainer: {
		flexDirection: 'row',
		gap: 16,
		paddingRight: 23,
	},
})
