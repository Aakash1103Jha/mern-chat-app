import { ReactNode } from "react"

interface CommonProps {
	inlineStyles?: object
	classname?: string
	children?: ReactNode

	callback?: () => void
}

export default CommonProps
