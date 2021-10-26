export class User {
  id: number | undefined;
  username: string | undefined;
  password: string | undefined;


  constructor(id: number | undefined, username: string | undefined, password: string | undefined) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}
