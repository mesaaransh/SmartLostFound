import { Client, Databases, Query } from "appwrite";
import { stemmer } from 'stemmer'
import { useEffect, useState } from "react"
import AppleGroup from "../AppleGroup/AppleGroup"
import "./SearchBar.css"

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
  .setProject('673f5e400033c82ce943'); // Your project ID

const databases = new Databases(client);

export default function SearchBar({populator}: any) {

  let [query, setQuery] = useState('')
  let [loading, setLoading] = useState(false)
  let tags: any = []

  function changeHandle(e: any) {
    setQuery(e.target.value);
  }

  useEffect(() => {

    let q = query.split(" ")
    let temp = []

    for(var i = 0; i < q.length; i++){
      temp.push(stemmer(q[i]))
    }

    tags = temp;

  }, [query])

  async function searchHandle(e: any) {

    e.preventDefault()
    
    await databases.listDocuments(
      '673f5e8f002dd3d80882', // databaseId
      '673f5e9e0010d2dbaf2d', // collectionId
      [
        Query.contains('Tags', tags)
      ]
    ).then((result) => {
      console.log(result);
      populator(result.documents)
    }).catch((err) => {
      console.log(err);
    })

  }


  return (
    <>

    <div className="searchBar">

      <AppleGroup />

      <form onSubmit={searchHandle} className="searchin">
        <input className="searchInput" type="text" onChange={changeHandle} placeholder={"> Search for your lost item"} />

        <div className="group">
          <button>Upload Image</button>
          <button type="submit">Search</button>
        </div>
      </form>

    </div>
    </>
  )
}
