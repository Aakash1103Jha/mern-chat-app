import { type FC } from "react"
import CommonProps from "../../interfaces/CommonProps"
import styles from "./MessageBubble.module.css"

interface IMessageBubble extends CommonProps {}

const MessageBubble: FC<IMessageBubble> = (props) => {
	return (
		<div className={`${styles.message_bubble} ${props.classname}`} style={props.inlineStyles}>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
				incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
				exercitation ullamco laboris nisi ut
			</p>
			<p>{new Date().toLocaleString()}</p>
		</div>
	)
}

export default MessageBubble
