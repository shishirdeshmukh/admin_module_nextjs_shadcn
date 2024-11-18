import { Search, SearchIcon } from "lucide-react"
import { Buyer  , columns} from "./columns"
import { DataTable } from "../../components/ui/DataTable"
import { Input } from "@/components/ui/input"
import PageTitle from "@/components/ui/PageTitle";
import { Button } from "@/components/ui/button";


async function getData(): Promise<Buyer[]> {
  // Fetch data from your API here.
  return [
    {
      name: "John Doe",
      email: "john@example.com",
      address: "Pune",
      phone: 98789334,
      status:"Pending"
    },
    {
      name: "Jane Doe",
      email: "jane@example.com",
      address: "Mumbai",
      phone: 98789334,
      status:"Pending"
      },
      {
        name: "John Doe",
        email: "john@example.com",
        address: "Pune",
        phone: 98789334,
        status:"Pending"
        },
        
  ];
}

export default async function Inventory() {
  const data = await getData()

  return (
    <div className="container mx-auto py-5">
    
    <div className="flex items-center justify-between">
        
          <PageTitle title="Buyer" />
   

      <div className="flex items-center justify-between">
      <div className="flex w-full max-w-sm items-center  rounded-lg px-10">
            <SearchIcon className="h-4 w-4 mr-2.5" />
            <Input
              type="search"
              placeholder="Search Buyer"
              className="w-full border-0 focus:ring-0 focus:outline-none"
            />
          </div>
        <Button>Add Buyer</Button>
        </div>
      </div>
      
      <div className="container mx-auto py-5">
       
      <DataTable  columns={columns} data={data} />
    </div>
    </div>
  )
}
