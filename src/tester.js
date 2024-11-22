import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);

const result = await databases.listDocuments(
    '673f5e8f002dd3d80882', // databaseId
    '673f5e9e0010d2dbaf2d', // collectionId
    [
        Query.contains('Tags', ['watch', 'carpet'])
    ] // queries (optional)
);

console.log(result);