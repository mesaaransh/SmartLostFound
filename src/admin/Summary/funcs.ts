import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);

export function lostItemFetcherweek(){

    return databases.listDocuments(
        '673f5e8f002dd3d80882',
        '673f5e9e0010d2dbaf2d',
        [
            Query.greaterThan("DateAdded", ['2024-11-22T00:00:00Z']),
            Query.orderDesc("DateAdded")
        ]
    );

}