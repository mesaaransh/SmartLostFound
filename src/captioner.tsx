import { Client, Databases, ID, Storage } from "appwrite";
import { removeStopwords } from "stopword";
import { stemmer } from 'stemmer'

export default function Captioner() {

    const places = [
        'Tan Building',
        'Main Auditorium',
        'Cos Complex',
        'LT 104',
        'LT 206',
        'Tan Auditorium',
        'LP 120',
        'LP 121',
        'G Block',
        'Jaggi',
        'Ahaar',
        'B Block',
    ]

    const client = new Client()
        .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
        .setProject('673f5e400033c82ce943'); // Your project ID

    const storage = new Storage(client);
    const databases = new Databases(client);

    const API_URL = "https://api-inference.huggingface.co/models/Salesforce/blip-image-captioning-base";
    const headers = {
        "Authorization": "Bearer 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"
    };


    function getRandomDate(startDate: string, endDate: string) {
        const start = new Date(startDate).getTime();
        const end = new Date(endDate).getTime();
        const randomTime = Math.floor(Math.random() * (end - start + 1)) + start;
        return new Date(randomTime);
    }

    async function clickHandle() {

        const result = await storage.listFiles(
            '673f5fc50019b8ffb728',
            []
        );

        for (var i = 0; i < result.files.length; i++) {

            try{
                
                let fileID = result.files[i].$id
                let url: string = 'https://cloud.appwrite.io/v1/storage/buckets/673f5fc50019b8ffb728/files/' + fileID + '/view?project=673f5e400033c82ce943&mode=admin';
                const fileResponse = await fetch(url);
                const fileContent = await fileResponse.blob();
    
                const apiResponse = await fetch(API_URL, {
                    method: "POST",
                    headers: headers,
                    body: fileContent
                });
    
                const res = await apiResponse.json();
                let temp = removeStopwords(res[0].generated_text.split(' '))
                let tags = [];
    
                for (var j = 0; j < temp.length; j++) {
                    tags.push(stemmer(temp[j]));
                }
    
                const caption = await databases.createDocument(
                    '673f5e8f002dd3d80882',
                    '673f5e9e0010d2dbaf2d',
                    ID.unique(),
                    {
                        Description: res[0].generated_text,
                        Tags: tags,
                        Place: places[Math.floor(Math.random() * 12)],
                        ImageURL: url,
                        ImageID: fileID,
                        DateAdded: getRandomDate('2024-11-01', '2024-11-31'),
                        Enable: true
                    }
                );
    
                console.log(caption);

            }catch(err){
                console.log(err);
            }

        }

        console.log('Done');

    }


    return (
        <div>
            <button onClick={clickHandle}>Hello!</button>
        </div>
    )
}


