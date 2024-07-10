import { config } from "dotenv";

config({
    path: ".env",
});

export const conf = {
    PORT: process.env.PORT || 8000,
    APPWRITE_URL: String(process.env.APPWRITE_URL),
    APPWRITE_PROJECT_ID: String(process.env.APPWRITE_PROJECT_ID),
    APPWRITE_DATABASE_ID: String(process.env.APPWRITE_DATABASE_ID),
    APPWRITE_USERS_COLLECTION_ID: String(
        process.env.APPWRITE_USERS_COLLECTION_ID
    ),
    APPWRITE_BUCKET_ID: String(process.env.APPWRITE_BUCKET_ID),
    APPWRITE_DILIB_STORE_COLLECTION_ID: String(
        process.env.APPWRITE_DILIB_STORE_COLLECTION_ID
    ),
    GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
    SESSION_SECRET: process.env.SESSION_SECRET,
};
