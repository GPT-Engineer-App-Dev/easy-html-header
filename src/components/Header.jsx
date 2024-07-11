import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar } from "@/components/ui/avatar";
import { NavLink } from "react-router-dom";
import { Home, Info, Services, Contact, Search, User } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 flex items-center justify-between bg-background p-4 shadow-md">
      <div className="flex items-center space-x-4">
        <img src="/placeholder.svg" alt="Logo" className="mx-auto object-cover w-10 h-10" />
        <nav className="hidden md:flex space-x-4">
          <NavLink to="/" className="text-muted-foreground hover:text-foreground">
            <Home className="inline-block w-5 h-5 mr-1" /> Home
          </NavLink>
          <NavLink to="/about" className="text-muted-foreground hover:text-foreground">
            <Info className="inline-block w-5 h-5 mr-1" /> About
          </NavLink>
          <NavLink to="/services" className="text-muted-foreground hover:text-foreground">
            <Services className="inline-block w-5 h-5 mr-1" /> Services
          </NavLink>
          <NavLink to="/contact" className="text-muted-foreground hover:text-foreground">
            <Contact className="inline-block w-5 h-5 mr-1" /> Contact
          </NavLink>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Input type="text" placeholder="Search..." className="hidden md:block" />
        <Button variant="outline" size="icon" className="md:hidden">
          <Search className="w-5 h-5" />
        </Button>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="secondary" size="icon" className="rounded-full">
              <User className="w-5 h-5" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default Header;