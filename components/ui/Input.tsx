import { cn } from '@/utils/cn'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react'
import { Text, TextInput, TextInputProps, View } from 'react-native'

type IoniconsName = keyof typeof Ionicons.glyphMap

interface InputProps extends TextInputProps {
  icon?: IoniconsName
  iconColor?: string
  iconSize?: number
  containerClassName?: string
  inputClassName?: string
  customPlaceholder?: string
  placeholderClassName?: string
}

export function Input({
  icon,
  iconColor = '#9ca3af',
  iconSize = 20,
  containerClassName,
  inputClassName,
  customPlaceholder,
  placeholderClassName,
  ...textInputProps
}: InputProps) {
  const [value, setValue] = useState(textInputProps.value ?? '')

  return (
    <View
      className={cn(
        'flex flex-row items-center bg-white rounded-[10px] px-[15px] py-[8px]',
        containerClassName
      )}
    >
      {icon && (
        <Ionicons
          name={icon}
          size={iconSize}
          color={iconColor}
          className="mr-3"
        />
      )}

      <View className="flex-1 justify-center">
        {customPlaceholder && !value && (
          <Text
            className={cn(
              'absolute left-1 text-sm text-[#9ca3af]',
              placeholderClassName
            )}
          >
            {customPlaceholder}
          </Text>
        )}

        <TextInput
          {...textInputProps}
          value={value}
          onChangeText={(text) => {
            setValue(text)
            textInputProps.onChangeText?.(text)
          }}
          className={cn(
            'text-sm font-poppins-regular text-black',
            inputClassName
          )}
          placeholder={undefined}
          style={{ outlineWidth: 0 }}
        />
      </View>
    </View>
  )
}
