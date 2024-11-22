import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);


export default {databases}