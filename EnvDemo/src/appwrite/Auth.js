import config from "../Config/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account;

    constructor() {
        this.client
            .setEndpoint(String(import.meta.env.VITE_APPWRITE_URL)) // this is API Key 
            .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID)) // Project id It was generated in appwrite
        this.account = new Account(this.client)
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({ email, password })
            } else {
                return userAccount
            }

        } catch (error) {
            throw error
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get();
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }

        return null;
    }

    async logout() {
        try {
            return await this.account.deleteSessions() // This is for delete all Sessions
            // return this.account.deleteSession('current' || 'all') // This is for delete current/(All) Sessions
        } catch (error) {
            console.log("Appwrite Service :: logOut :: error", error)
        }
    }
}

const authService = new AuthService()

export default authService