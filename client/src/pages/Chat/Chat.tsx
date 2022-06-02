import { type FC } from "react"
import Button from "../../components/Button/Button"
import MessageBubble from "../../components/MessageBubble/MessageBubble"
import CommonProps from "../../interfaces/CommonProps"
import styles from "./Chat.module.css"

const Chat: FC<CommonProps> = (props) => {
	return (
		<div className={`page ${styles.chat} ${props.classname}`} style={props.inlineStyles}>
			<h1 className={`${styles.title}`}>Conversations</h1>
			<div className={`universal_container ${styles.chat_window}`}>
				{/* <div className={`${styles.friend_list}`}>1</div> */}
				<div className={`${styles.messages_container}`}>
					<div className={`${styles.messages}`}>
						<MessageBubble inlineStyles={{ background: "var(--pink)" }} />
						<MessageBubble
							inlineStyles={{
								background: "var(--purple)",
								color: "var(--white)",
								marginLeft: "auto",
							}}
						/>
						<MessageBubble inlineStyles={{ background: "var(--pink)" }} />
						<MessageBubble
							inlineStyles={{
								background: "var(--purple)",
								color: "var(--white)",
								marginLeft: "auto",
							}}
						/>
						<MessageBubble inlineStyles={{ background: "var(--pink)" }} />
						<MessageBubble
							inlineStyles={{
								background: "var(--purple)",
								color: "var(--white)",
								marginLeft: "auto",
							}}
						/>
					</div>
					<div className={`${styles.message_input}`}>
						<input type="text" placeholder="Start typing..." />
						<Button label="Send" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Chat
