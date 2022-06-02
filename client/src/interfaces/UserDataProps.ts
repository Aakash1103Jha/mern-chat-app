export interface ILoginData {
	email: string
	password: string
	cb: () => {} | void
}
export interface IRegisterData {
	firstName: string
	lastName: string
	email: string
	password: string
	cb: () => {} | void
}
export interface IResetPasswordData {
	email: string
	newPassword: string
	cb: () => {} | void
}
