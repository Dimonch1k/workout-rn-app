import liveSession1Image from '@/assets/images/sessions/live-session-1.png'
import liveSession2Image from '@/assets/images/sessions/live-session-2.png'

import trainerAmakaImage from '@/assets/images/sessions/trainer-amaka.png'
import trainerDerickImage from '@/assets/images/sessions/trainer-derick.png'
import trainerSeanImage from '@/assets/images/sessions/trainer-sean.png'
import trainerStellaImage from '@/assets/images/sessions/trainer-stella.png'
import trainerTayoImage from '@/assets/images/sessions/trainer-tayo.png'

import video1Image from '@/assets/images/sessions/video-1.png'
import video2Image from '@/assets/images/sessions/video-2.png'
import video3Image from '@/assets/images/sessions/video-3.png'

import tutorial1Image from '@/assets/images/sessions/tutorial-1.png'
import tutorial2Image from '@/assets/images/sessions/tutorial-2.png'

import type {
	ILiveSessionsSectionItem,
	ISessionSectionItem,
	ITrainerSectionItem,
} from '@/types/sessions.interface'

export const liveSessionDataList: ILiveSessionsSectionItem[] = [
	{
		image: liveSession1Image,
		isLive: true,
		nowTime: '17.34',
		endTime: '59.32',
	},
	{
		image: liveSession2Image,
		isLive: false,
		nowTime: '30:31',
		endTime: '38:12',
	},
]

export const trainerDataList: ITrainerSectionItem[] = [
	{ image: trainerAmakaImage, label: 'Amaka', isChecked: true },
	{ image: trainerStellaImage, label: 'Stella', isChecked: true },
	{ image: trainerDerickImage, label: 'Derick', isChecked: false },
	{ image: trainerTayoImage, label: 'Tayo', isChecked: false },
	{ image: trainerSeanImage, label: 'Sean', isChecked: false },
]

export const videoDataList: ISessionSectionItem[] = [
	{ image: video1Image },
	{ image: video2Image },
	{ image: video3Image },
]

export const tutorialDataList: ISessionSectionItem[] = [
	{ image: tutorial1Image },
	{ image: tutorial2Image },
]
