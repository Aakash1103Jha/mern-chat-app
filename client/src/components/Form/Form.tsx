import { type FC } from "react"
import CommonProps from "../../interfaces/CommonProps"
interface FormProps extends CommonProps {
	handleSubmit: (event: React.FormEvent<HTMLFormElement>) => {} | void
}

const Form: FC<FormProps> = (props) => {
	return (
		<form
			onSubmit={props.handleSubmit}
			className={`universal_container shadow_container form ${props.classname}`}
			style={props.inlineStyles}>
			{props.children}
		</form>
	)
}

export default Form
