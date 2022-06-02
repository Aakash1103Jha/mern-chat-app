import { type FC } from "react"
import CommonProps from "../../interfaces/CommonProps"

import styles from "./Form.module.css"
interface FormProps extends CommonProps {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {} | void
}

const Form: FC<FormProps> = (props) => {
	return (
		<form
			onSubmit={props.handleSubmit}
			className={`${styles.form} ${props.classname}`}
			style={props.inlineStyles}>
			{props.children}
		</form>
	)
}

export default Form
