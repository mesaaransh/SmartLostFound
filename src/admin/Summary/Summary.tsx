import { format } from "date-fns"
import "./Summary.css"
import Loader from "../../components/Loader/Loader"
import { useMutation, useQuery } from "@tanstack/react-query"
import { lostItemFetcherweek } from "./funcs"
import emailjs from '@emailjs/browser';


export default function AdminSummary() {

    async function sendEmail(){
        const itemsHtml = items.data?.documents.map(item => `
            <tr>
                <td>${item.Description || 'Unknown'}</td>
                <td>${item.DateAdded || 'N/A'}</td>
                <td>${item.Place || 'N/A'}</td>
            </tr>
        `).join('');

        console.log(itemsHtml);
        

        const emailContent = `
            <h3>Lost and Found Items Report</h3>
            <table border="1" cellpadding="5" cellspacing="0">
                <thead>
                    <tr>
                        <th>Item Name</th>
                        <th>Date Added</th>
                        <th>Place Found</th>
                    </tr>
                </thead>
                <tbody>
                    ${itemsHtml}
                </tbody>
            </table>
        `;

        const templateParams = {
            to_email: "mesaaransh@gmail.com", // Pass recipient emails as a single string
            subject: "subject",
            message: emailContent,
        };

        await emailjs.send('service_samj2ge', 'template_o4rnpkh', templateParams, 'Nk-79-DlxTKcXDuOc').catch((err) => {
            console.log(err);
        })
    };

    var items = useQuery({
        queryKey: ['a'],
        queryFn: lostItemFetcherweek
    })

    var emailer = useMutation({
        mutationFn: sendEmail
    })

    return (
        <div>

            <button onClick={() => {emailer.mutate()}}>Send Report</button>
            {
                items.isLoading ?
                    <Loader />
                    :
                    items.data?.documents.map((data) => (
                        <div className="itemCont">
                            <div className="lostItem">
                                <img src={data.ImageURL} alt="" className="lostItemImg" />
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
