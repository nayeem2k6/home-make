import { useLoaderData } from "react-router"



export default function MyProperties() {


  const Data = useLoaderData()
  console.log(Data)

  
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">My Properties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


       <div>

        </div>
        
      </div>
    </div>
  )
}
