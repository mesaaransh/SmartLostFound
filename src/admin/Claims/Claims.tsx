import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { claimFetcher, claimVerifier } from "./funcs"
import "./Claims.css"


export default function AdminClaims() {
    
    const queryClient = useQueryClient()
    let claims = useQuery({
        queryKey: ['c'],
        queryFn: claimFetcher
    })

    let verifier = useMutation({
        mutationFn: (a) => (claimVerifier(a)),
        onSuccess: () => {
            alert("Verified Successfully")
            queryClient.invalidateQueries({
                queryKey: ['c']
            })
        }
    })

  return (
    <div>
        {
            claims.data?.documents.map((data: any) => (
                <div className="claims">
                    <div>
                        <h4>Claim for {data.item.Description}</h4>
                        <br />
                        <p>Name:  {data.Name}</p>
                        <p>Phone: {data.Phone}</p>
                        <p>Email: {data.Email}</p>
                    </div>

                    <div className="verifyClaim" onClick={() => {verifier.mutate(data.$id)}}>
                        Verify
                    </div>
                </div>
            ))
        }
    </div>
  )
}
