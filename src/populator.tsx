import { Client, ID, Storage } from "appwrite";

export default function Populator() {

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('673f5e400033c82ce943'); // Your project ID

    const storage = new Storage(client);

    function wait(ms: number) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    async function changeHadnler(e: any){

        console.log(e.target.files.length);
        var len = e.target.files.length
        for(var i = 0; i < len; i++){

            await wait(500);

            try{
                await storage.createFile(
                    '67492c440016c7cc5bd0',
                    ID.unique(),
                    e.target.files[i]
                ).then(() => {
                    console.log(i, "Done");
                }).catch((err) => {
                    console.log(err);
                    i--
                })
            }catch(err){
                console.log(err);
            }

        }
    }


    return (
        <div>
            <input type="file" id="uploader" multiple onInput={changeHadnler} />
        </div>
    )
}
