import { Client, Databases, Query } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);

async function claimFetcher(){

    let res = await databases.listDocuments(
        '673f5e8f002dd3d80882',
        '6740f08a000e5aaa2bb2',
        [Query.equal('Status', 1)]
    )

    for (let i = 0; i < res.documents.length; i++) {
        const data = res.documents[i];
    
        try {
            const item = await databases.getDocument(
                '673f5e8f002dd3d80882',
                '673f5e9e0010d2dbaf2d',
                data.ItemID
            );
    
            res.documents[i]['item'] = item;
            console.log(res.documents[i]);
        } catch (error) {
            console.error(`Error fetching document for ItemID ${data.ItemID}:`, error);
        }
    }

    return res;

}


function claimVerifier(id: any){

    return databases.updateDocument(
        '673f5e8f002dd3d80882', // databaseId
        '6740f08a000e5aaa2bb2', // collectionId
        id, // documentId
        {Status: 2}
    );

}

export {claimFetcher, claimVerifier}