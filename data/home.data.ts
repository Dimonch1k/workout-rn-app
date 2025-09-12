import joggingImage from '@/assets/images/home/jogging.png'
import pushUpImage from '@/assets/images/home/push-up.png'
import squatImage from '@/assets/images/home/squat.png'

import aerobicsImage from '@/assets/images/home/aerobics.png'
import fitnessImage from '@/assets/images/home/fitness.png'
import gymImage from '@/assets/images/home/gym.png'
import trainersImage from '@/assets/images/home/trainers.png'
import yogaImage from '@/assets/images/home/yoga.png'

import gymCentresImage from '@/assets/images/home/gym-centres.png'
import trainerCentresImage from '@/assets/images/home/trainer-centres.png'

import discover1Image from '@/assets/images/home/discover-1.png'
import discover2Image from '@/assets/images/home/discover-2.png'

import type { IHomeSectionItem } from '@/types/home.interface'

export const workoutPlanDataList: IHomeSectionItem[] = [
	{ image: joggingImage, label: 'Jogging' },
	{ image: pushUpImage, label: 'Push-up' },
	{ image: squatImage, label: 'Squat' },
]

export const categoryDataList: IHomeSectionItem[] = [
	{ image: gymImage, label: 'Gym' },
	{ image: yogaImage, label: 'Yoga' },
	{ image: fitnessImage, label: 'Fitness' },
	{ image: aerobicsImage, label: 'Aerobics' },
	{ image: trainersImage, label: 'Trainers' },
]

export const trendingDataList: IHomeSectionItem[] = [
	{ image: gymCentresImage, label: 'Gym Centres' },
	{ image: trainerCentresImage, label: 'Trainer centres' },
]

export const discoverDataList: IHomeSectionItem[] = [
	{ image: discover1Image },
	{ image: discover2Image },
]
