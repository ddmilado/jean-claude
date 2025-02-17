import { Client, Databases } from 'appwrite';

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Replace with your Appwrite endpoint
    .setProject('67b353fb001e6802cb02'); // Replace with your project ID

export const databases = new Databases(client);

// Update these IDs with your actual database and collection IDs from Appwrite console
export const DATABASE_ID = '67b35525003baa0485f6';  // Replace with your database ID
export const CONTACT_COLLECTION_ID = '67b35571002f395f3f36'; // Replace with your collection ID

export default client;
