import { Client, Databases, ID, Query, Storage } from "appwrite";
import fs from "fs";
import { conf } from "../utlis/conf.js";

export class Services {
    client = new Client();
    databases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.APPWRITE_URL)
            .setProject(conf.APPWRITE_PROJECT_ID);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // userDB
    async registerUser(data) {
        try {
            const response =  await this.databases.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_USERS_COLLECTION_ID,
                ID.unique(),
                data
            );

            return response
        } catch (error) {
            console.log("Appwrite Services :: registerUser :: Error", error);
        }
    }

    async updateUser(data) {
        try {
            return await this.databases.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_USERS_COLLECTION_ID,
                data
            );
        } catch (error) {
            console.log("Appwrite Services :: update User :: Error", error);
        }
    }

    // ...["hello","world","name","is"].join(",")
    async retrievedUser(mail) {
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_USERS_COLLECTION_ID,
                [
                    Query.equal("email", [mail]),
                    Query.select(["email", "image", "username", "role"]),
                ]
            );
        } catch (error) {
            console.log("Appwrite Services :: retriveUser :: Error", error);
        }
    }

    // dlibDB
    async writeFileData(data) {
        try {
            return await this.databases.createDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_DILIB_STORE_COLLECTION_ID,
                ID.unique(),
                data
            );
        } catch (error) {
            console.log("Appwrite Services :: writeDlibData :: Error", error);
        }
    }

    async updateData(id, data) {
        try {
            databases.updateDocument(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_DILIB_STORE_COLLECTION_ID,
                id,
                data
            );
        } catch (error) {
            console.log("Appwrite Services :: update file db :: Error", error);
        }
    }

    async retrieveStoreData(branch, sem, sub) {
        try {
            return await this.databases.listDocuments(
                conf.APPWRITE_DATABASE_ID,
                conf.APPWRITE_DILIB_STORE_COLLECTION_ID,
                [
                    Query.equal("branch", [branch]),
                    Query.equal("sem", [sem]),
                    Query.equal("subName", [sub]),
                    Query.select(["year", "name", "fileID"]),
                ]
            );
        } catch (error) {
            console.log("Appwrite Services :: retriveUser :: Error", error);
        }
    }

    // file upload
    async uploadFile(file, actualPath, data) {
        try {
            if (!file) return null;

            const uploadedFile = await this.bucket.createFile(
                conf.APPWRITE_BUCKET_ID,
                ID.unique(),
                file
            );

            if (!uploadedFile) {
                return false;
            }

            const newStoreInfo = await this.writeFileData({
                ...data,
                fileID: uploadedFile.$id,
                name: data.name || uploadedFile.name,
            });
            fs.unlinkSync(actualPath);
            return newStoreInfo;
        } catch (error) {
            fs.unlinkSync(actualPath);
            console.log("Apprwrite Service :: uploadFile :: ERROR", error);
            return false;
        }
    }

    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.APPWRITE_BUCKET_ID, fileId);
            return true;
        } catch (error) {
            console.log("Appwrite serive :: deleteFile :: error", error);
            return false;
        }
    }

    async getFilePreview(fileId) {
        return this.bucket.getFilePreview(conf.APPWRITE_BUCKET_ID, fileId);
    }

    async getFileDownload(fileId) {
        if (!fileId) {
            return "file ID is missing";
        }

        return this.bucket.getFileDownload(conf.APPWRITE_BUCKET_ID, fileId);
    }
}

const services = new Services();

export default services;
