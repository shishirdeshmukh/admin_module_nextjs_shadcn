import { Search, SearchIcon } from "lucide-react"
import { columns, IT} from "./columns"
import { DataTable } from "../../components/ui/DataTable"
import { Input } from "@/components/ui/input"
import PageTitle from "@/components/ui/PageTitle"
import { Button } from "@/components/ui/button"


async function getData(): Promise<IT[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      product: "Product 1",
      price: 10.99,
      quantity: 100,
      email:"john@gmail.com",
      lastOrder:"23/2/1233",
      method:"Online",
      total:2332,
      status:"Delivered",

    },{
      id: 2,
      product: "Product 2",
      price: 5.99,
      quantity: 50,
      email:"john@gmail.com",
      lastOrder:"23/2/1233",
      method:"Online",
      total:2332,
      status:"Delivered",
    }
  ]
}

export default async function Inventory() {
  const data = await getData()

  return (
    <div className="container mx-auto py-5">
    
    <div className="flex items-center justify-between">
        
          <PageTitle title="Inventory" />
   

      <div className="flex items-center justify-between">
      <div className="flex w-full max-w-sm items-center  rounded-lg px-10">
            <SearchIcon className="h-4 w-4 mr-2.5" />
            <Input
              type="search"
              placeholder="Search Inventory"
              className="w-full border-0 focus:ring-0 focus:outline-none"
            />
          </div>
        <Button>Add Inventory</Button>
        </div>
      </div>
      
      <div className="container mx-auto py-5">
       
      <DataTable  columns={columns} data={data} />
    </div>
    </div>
  )
}
