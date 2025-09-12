import { ImageSourcePropType } from 'react-native'

export interface IHomeSectionItem {
	image: ImageSourcePropType
	label?: string
}

export interface WorkoutSectionProps {
	workoutList: IHomeSectionItem[]
}

export interface CategorySectionProps {
	categoryList: IHomeSectionItem[]
	onSeeAll?: () => void
}

export interface TrendingSectionProps {
	trendingList: IHomeSectionItem[]
	onSeeAll?: () => void
}

export interface DiscoverSectionProps {
	discoverList: IHomeSectionItem[]
}
