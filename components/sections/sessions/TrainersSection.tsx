import { TabSection } from '@/components/shared/tabs/TabSection'

import type { TrainerSectionProps } from '@/types/sessions.interface'
import { cn } from '@/utils/cn'

import { Image, ScrollView, Text, View } from 'react-native'

export function TrainersSection({
	trainerList,
	onSeeAll,
}: TrainerSectionProps) {
	return (
		<TabSection title='Categories' onPressSeeAll={onSeeAll}>
			<ScrollView
				horizontal
				showsHorizontalScrollIndicator={false}
				className='pl-[23px]'
				contentContainerClassName='flex-row gap-3 pr-[23px]'
			>
				{trainerList.map((trainer, index) => (
					<View
						key={index}
						className='flex-col items-center gap-[10px] px-[5px]'
					>
						<View className='absolute'></View>
						<Image
							source={trainer.image}
							className={cn(
								'w-[52px] h-[52px] rounded-full',
								trainer.isChecked && 'border-2 border-[#808191]'
							)}
						/>
						<Text className='text-[#808191] text-[11px] font-poppins-regular'>
							{trainer.label}
						</Text>
					</View>
				))}
			</ScrollView>
		</TabSection>
	)
}
