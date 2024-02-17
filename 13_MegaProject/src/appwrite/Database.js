import config from "../Config/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class DatabaseService {
    client = new Client()
    databases;
    bucket;

    constructor() {
        this.client
            .setEndpoint(config.appwriteUrl) // this is API Key 
            .setProject(config.appwriteProjectId) // Project id It was generated in appwrite
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
                {
                    title, content, featuredImage, status, userId
                }
            )
        } catch (error) {
            console.log("Appwrite Service :: createPost :: error", error)

        }
    }


    async updatePost(slug, { title, content, featuredImage, status, userId }) {
        try {
            return await this.databases.updateDocument(
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
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
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
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
                config.appwriteDatabaseId,
                config.appwriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: getPost :: error", error)
            return false
        }
    }

    // In Appwite databse Index is more important to Perform any query ex: index is like id(uniqueId)
    async getAllPosts(queries) {
        try {
            config.appwriteDatabaseId,
                config.appwriteCollectionId,
                queries
                [
                Query.equal('status', 'active')
                ]

        } catch (error) {
            console.log("Appwrite Service :: getAllPosts :: error", error)
            return false
        }
    }


    // File Upload Service 

    async fileUpload(file) {
        try {
            return await this.bucket.createFile(
                config.appwriteBucketId,
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
                config.appwriteBucketId,
                fileId
            )
            return true
        } catch (error) {
            console.log("Appwrite Service :: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(fileId) {
        return this.bucket.getFilePreview(
            config.appwriteBucketId,
            fileId
        )
    }
}


const databaseService = new DatabaseService()
export default databaseService