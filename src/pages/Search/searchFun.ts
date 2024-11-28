import { Client, Databases, ID, Query } from "appwrite";
import { stemmer } from "stemmer";

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);


function tagMaker(query: string) {

    let q = query.split(" ")
    let temp = []
  
    for (var i = 0; i < q.length; i++) {
      temp.push(stemmer(q[i]))
    }
  
    return temp;
  
  }
  
  async function search(query: string) {

    return databases.listDocuments(
      '673f5e8f002dd3d80882', // databaseId
      '673f5e9e0010d2dbaf2d', // collectionId
      [
        Query.contains('Tags', tagMaker(query)),
        Query.equal('Enable', [true])
      ]
    )

  }

  async function submitHandle(id: any, info: any) {

    await databases.updateDocument(
      '673f5e8f002dd3d80882', // databaseId
      '673f5e9e0010d2dbaf2d', // collectionId
      id, // documentId
      {
        Enable: false
      },
    );

    return databases.createDocument(
      '673f5e8f002dd3d80882',
      '6740f08a000e5aaa2bb2',
      ID.unique(),
      {
        ...info,
        ItemID: id
      },
    );

  }


  export {search, submitHandle}