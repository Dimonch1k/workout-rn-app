import {
	Image,
	ScrollView,
	StatusBar,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native'

import profilePic from '@/assets/images/home/profile.png'
import {
	categoryDataList,
	discoverDataList,
	trendingDataList,
	workoutPlanDataList,
} from '@/data/home.data'

export default function DashboardHomeScreen() {
	return (
		<View style={styles.container}>
			<StatusBar barStyle='light-content' backgroundColor='#0f172a' />

			<ScrollView
				style={styles.scrollView}
				showsVerticalScrollIndicator={false}
			>
				{/* Header */}
				<View style={styles.headerSection}>
					<View style={styles.greetingContainer}>
						<Text style={styles.greetingText}>
							Hello <Text style={styles.nameText}>Juliet</Text>
						</Text>
						<Text style={styles.startDayText}>Let's start your day</Text>
					</View>

					<View style={styles.profileContainer}>
						<Image
							source={profilePic}
							style={{ width: 48, height: 48, borderRadius: 24 }}
						/>
						<View style={styles.notificationDot} />
					</View>
				</View>

				{/* Workout */}
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
						{workoutPlanDataList.map((item, index) => (
							<View key={index} style={styles.workoutPlan}>
								<Image
									source={item.image}
									style={{ width: 148, height: 169, borderRadius: 16 }}
								/>
								<Text style={styles.workoutLabel}>{item.label}</Text>
							</View>
						))}
					</ScrollView>
				</View>

				{/* Categories */}
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
						{categoryDataList.map((cat, index) => (
							<View key={index} style={styles.categoryItem}>
								<Image
									source={cat.image}
									style={{ width: 77, height: 104, borderRadius: 16 }}
								/>
								<Text style={styles.categoryLabel}>{cat.label}</Text>
							</View>
						))}
					</ScrollView>
				</View>

				{/* Trending */}
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
						{trendingDataList.map((trend, index) => (
							<View key={index} style={styles.trendingItem}>
								<Image
									source={trend.image}
									style={{ width: 223, height: 119, borderRadius: 16 }}
								/>
								<Text style={styles.trendingLabel}>{trend.label}</Text>
							</View>
						))}
					</ScrollView>
				</View>

				{/* Discover */}
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
						{discoverDataList.map((d, index) => (
							<Image
								key={index}
								source={d.image}
								style={{
									width: 227,
									height: 97,
									borderRadius: 16,
									marginRight: 16,
								}}
							/>
						))}
					</ScrollView>
				</View>
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
