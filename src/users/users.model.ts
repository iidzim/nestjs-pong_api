export class User {

	constructor(
		public id: string, // id = login
		public username: string,
		public avatar: string,
		public wins: number,
		public losses: number,
		public level: number,
		public status: string,
	) {}
}