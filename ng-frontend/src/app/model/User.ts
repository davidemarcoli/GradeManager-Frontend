export class User {
  id: string | undefined;
  first_name: string | undefined;
  last_name: string | undefined;
  email: string | undefined;

  constructor(id: string | undefined, first_name: string | undefined, last_name: string | undefined, email: string | undefined) {
    this.id = id;
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
  }
}
