import { ReactNode, type FC } from "react"
import CommonProps from "../../interfaces/CommonProps"

import styles from "./Button.module.css"

interface ButtonProps extends CommonProps {
	icon?: ReactNode
	label: string
	id?: string
}

const Button: FC<ButtonProps> = (props) => {
	return (
		<button
			id={props.id}
			className={`${styles.button} ${props.classname}`}
			style={props.inlineStyles}
			onClick={props.callback}>
			{props.label}
		</button>
	)
}

export default Button
