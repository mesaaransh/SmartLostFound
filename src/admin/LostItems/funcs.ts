import { Client, Databases } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);


function lostItemFetcher(){

    return databases.listDocuments(
        '673f5e8f002dd3d80882',
        '673f5e9e0010d2dbaf2d',
        []
    );

}

export {lostItemFetcher}