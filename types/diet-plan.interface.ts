import { ImageSourcePropType } from 'react-native'

export interface IDietPlanSectionItem {
	image: ImageSourcePropType
	label?: string
}

export interface DietPlanSectionProps {
	mealList: IDietPlanSectionItem[]
}
