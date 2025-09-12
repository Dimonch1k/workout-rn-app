import { useState } from 'react'

interface UseAuthFormProps {
	initialEmail?: string
	initialPassword?: string
	initialConfirmPassword?: string
}

export function useAuthForm({
	initialEmail = '',
	initialPassword = '',
	initialConfirmPassword = '',
}: UseAuthFormProps = {}) {
	const [email, setEmail] = useState(initialEmail)
	const [password, setPassword] = useState(initialPassword)
	const [confirmPassword, setConfirmPassword] = useState(initialConfirmPassword)
	const [loading, setLoading] = useState(false)

	const validateEmail = (email: string) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return emailRegex.test(email)
	}

	const validatePassword = (password: string) => {
		return password.length >= 6
	}

	const validateConfirmPassword = (
		password: string,
		confirmPassword: string
	) => {
		return password === confirmPassword
	}

	const isFormValid = (includeConfirmPassword = false) => {
		const emailValid = validateEmail(email)
		const passwordValid = validatePassword(password)

		if (includeConfirmPassword) {
			const confirmPasswordValid = validateConfirmPassword(
				password,
				confirmPassword
			)
			return emailValid && passwordValid && confirmPasswordValid
		}

		return emailValid && passwordValid
	}

	const resetForm = () => {
		setEmail('')
		setPassword('')
		setConfirmPassword('')
		setLoading(false)
	}

	return {
		email,
		setEmail,
		password,
		setPassword,
		confirmPassword,
		setConfirmPassword,
		loading,
		setLoading,
		validateEmail,
		validatePassword,
		validateConfirmPassword,
		isFormValid,
		resetForm,
	}
}
