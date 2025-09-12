import { ImageSourcePropType } from 'react-native'

export interface ISessionSectionItem {
	image: ImageSourcePropType
	label?: string
}

export interface ILiveSessionsSectionItem extends ISessionSectionItem {
	isLive: boolean
	nowTime: string
	endTime: string
}

export interface LiveSessionsSectionProps {
	liveSessionList: ILiveSessionsSectionItem[]
}

export interface ITrainerSectionItem extends ISessionSectionItem {
	isChecked: boolean
}

export interface TrainerSectionProps {
	trainerList: ITrainerSectionItem[]
	onSeeAll?: () => void
}

export interface VideoSectionProps {
	videoList: ISessionSectionItem[]
	onSeeAll?: () => void
}

export interface TutorialSectionProps {
	tutorialList: ISessionSectionItem[]
	onSeeAll?: () => void
}
