import { ImageSourcePropType } from 'react-native'

export interface IDietPlanSectionItem {
	id: string
	image: ImageSourcePropType
	label?: string
}

export interface DietPlanSectionProps {
	mealList: IDietPlanSectionItem[]
}
