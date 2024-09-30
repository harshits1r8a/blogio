import conf from "../config/Config.js";
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client)    
    }

    // singin
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if(userAccount){
                //call login for redirect
            }else{
                return userAccount;
            }
        } catch (error) {
            console.log("Appwrite serive :: createAccount :: error",error)
            throw error
        }
    }

    // login
    async login({email, password}){
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (error) {
            console.log("Appwrite serive :: login :: error",error)
            throw error
        }
    }

    //getuser
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite serive :: getCurrentUser :: error",error)
            // throw error
        }

        return null
    }

    // logout
    async logout(){
        try {
            return await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite serive :: logout :: error",error)
            throw error
        }
    }
}

const authService = new AuthService()

export default authService