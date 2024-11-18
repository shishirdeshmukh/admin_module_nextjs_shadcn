import { Calendar, ChevronUp, Home, Inbox, LayoutDashboard, Search, Settings, ShoppingCart, User2, UsersRound } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: LayoutDashboard,
    variant: "default",
  },
  {
    title: "Buyer",
    url: "/buyer",
    icon: UsersRound,
    variant: "ghost",
  },
  {
    title: "Seller",
    url: "/seller",
    icon: Calendar,
    variant: "ghost",
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: ShoppingCart,
    variant: "ghost",
  }
]

export function AppSidebar() {
  return (
    <Sidebar >
      <SidebarContent className="min-w-[80px] border-r pb-10 pt-24">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu> 
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
          <SidebarMenu>
            <SidebarMenuItem>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuButton>
                    <User2 /> Account
                    <ChevronUp className="ml-auto" />
                  </SidebarMenuButton>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  side="top"
                  className="w-[--radix-popper-anchor-width]"
                >
                  <DropdownMenuItem>
                    <span>Username</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Billing</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <span>Sign out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
    </Sidebar>
  )
}
