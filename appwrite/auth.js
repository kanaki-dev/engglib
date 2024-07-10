import { Client, Account, ID } from "appwrite";
import { conf } from "../utlis/conf";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.APPWRITE_URL)
      .setProject(conf.APPWRITE_PROJECT_ID);
    this.account = new Account(this.client);
  }
}

const authService = AuthService();
export default authService;
