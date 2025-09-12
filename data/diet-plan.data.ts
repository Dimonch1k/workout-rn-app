import breadAndTeaImage from '@/assets/images/diet-plan/bread-and-tea.png'
import cornflakesImage from '@/assets/images/diet-plan/cornflakes.png'
import fruitsSaladImage from '@/assets/images/diet-plan/fruits-salad.png'
import outmealImage from '@/assets/images/diet-plan/outmeal.png'
import pancakesImage from '@/assets/images/diet-plan/pancakes.png'
import wafflesImage from '@/assets/images/diet-plan/waffles.png'

import type { IDietPlanSectionItem } from '@/types/diet-plan.interface'

export const trainerDataList: IDietPlanSectionItem[] = [
	{ image: outmealImage, label: 'Outmeal' },
	{ image: wafflesImage, label: 'Waffles' },
	{ image: cornflakesImage, label: 'Cornflakes' },
	{ image: fruitsSaladImage, label: 'Fruits Salad' },
	{ image: pancakesImage, label: 'Pancakes' },
	{ image: breadAndTeaImage, label: 'Bread and Tea' },
]
