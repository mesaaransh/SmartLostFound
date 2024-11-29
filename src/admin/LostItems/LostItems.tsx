import { useQuery } from "@tanstack/react-query"
import { format } from "date-fns";
import { lostItemFetcher } from "./funcs"

import "./Lostitems.css"
import Loader from "../../components/Loader/Loader";

export default function AdminLostItems() {

    var items = useQuery({
        queryKey: ['a'],
        queryFn: lostItemFetcher
    })

    return (
        <div>

            {
                items.isLoading?
                <Loader/>
                :
                items.data?.documents.map((data) => (
                    <div className="itemCont">
                        <div className="lostItem">
                            <img src={data.ImageURL} alt="" className="lostItemImg"/>
                            <p>{data.Description}</p>
                        </div>
                        <div className="lostItem">
                            {format(new Date(data.DateAdded), "dd MMMM, yyyy")}
                        </div>
                    </div>
                ))
            }
            
        </div>
    )
}
