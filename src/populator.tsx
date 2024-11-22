import { Client, ID, Storage } from "appwrite";

export default function Populator() {

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('673f5e400033c82ce943'); // Your project ID

    const storage = new Storage(client);


    async function changeHadnler(e: any){

        console.log(e.target.files.length);

        var len = e.target.files.length
        for(var i = 0; i < len; i++){

            const result = await storage.createFile(
                '673f5fc50019b8ffb728',
                ID.unique(),
                e.target.files[i]
            );

        }
        
    }


    return (
        <div>
            <input type="file" id="uploader" multiple onInput={changeHadnler} />
        </div>
    )
}
