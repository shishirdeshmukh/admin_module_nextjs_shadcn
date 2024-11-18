import { Search, SearchIcon } from "lucide-react"
import { Seller  , columns} from "./columns"
import { DataTable } from "../../components/ui/DataTable"
import { Input } from "@/components/ui/input"
import PageTitle from "@/components/ui/PageTitle";
import { Button } from "@/components/ui/button";


async function getData(): Promise<Seller[]> {
  // Fetch data from your API here.
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      phone: 1234567890,
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345"

    }
  ];
}

export default async function Inventory() {
  const data = await getData()

  return (
    <div className="container mx-auto py-5">
    
    <div className="flex items-center justify-between">
        
          <PageTitle title="Seller" />
   

      <div className="flex items-center justify-between">
      <div className="flex w-full max-w-sm items-center  rounded-lg px-10">
            <SearchIcon className="h-4 w-4 mr-2.5" />
            <Input
              type="search"
              placeholder="Search Seller"
              className="w-full border-0 focus:ring-0 focus:outline-none"
            />
          </div>
        <Button>Add Seller</Button>
        </div>
      </div>
      
      <div className="container mx-auto py-5">
       
      <DataTable  columns={columns} data={data} />
    </div>
    </div>
  )
}
