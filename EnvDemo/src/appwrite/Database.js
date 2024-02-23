import config from "../Config/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";
export class DatabaseService {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(String(import.meta.env.VITE_APPWRITE_URL)) // this is API Key 
            .setProject(String(import.meta.env.VITE_APPWRITE_PROJECT_ID)) // Project id It was generated in appwrite
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {

            return await this.databases.createDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                // config.appwriteDatabaseId,
                // config.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                },
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error)

        }
    }


    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: updatePost :: error", error)
        }
    }

    async deletePost(slug) {
        try {
            await this.databases.deleteDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deletePost :: error", error)
            return false
        }
    }

    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                slug,
            )
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error)
            return false
        }
    }

    
    // In Appwite databse Index is more important to Perform any query ex: index is like id(uniqueId)
    async getAllPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
                String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
                queries,
                console.log("queries", queries)
            )
        } catch (error) {
            console.log("Appwrite Service :: getAllPosts :: error", error)
            return false
        }
    }


    // File Upload Service 

    async fileUpload(file) {
        try {
            return await this.bucket.createFile(
                String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite Service :: fileUpload :: error", error)
            return false
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(
                String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error)
            return false
        }
    }

     getFilePreview(fileId) {
        console.log( "fileId", fileId)
        return  this.bucket.getFilePreview(
            String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
            fileId
        )
    }
}


const databaseService = new DatabaseService()
export default databaseService