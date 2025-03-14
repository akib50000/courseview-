
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Menu, Search, Mic, Bell, User, Video, X 
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface NavbarProps {
  toggleSidebar: () => void;
}

const Navbar = ({ toggleSidebar }: NavbarProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-youtube-black z-50 px-4 flex items-center justify-between">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        <button 
          onClick={toggleSidebar}
          className="nav-icon"
          aria-label="Toggle sidebar"
        >
          <Menu className="w-5 h-5" />
        </button>
        
        <Link to="/" className="flex items-center gap-1">
          <div className="w-8 h-8 bg-youtube-red rounded-full flex items-center justify-center">
            <Video className="w-4 h-4 text-white" />
          </div>
          <span className="text-xl font-semibold">CourseView</span>
        </Link>
      </div>
      
      {/* Center Section - Search */}
      <div className={cn(
        "flex items-center max-w-[600px] w-full mx-4 transition-all duration-300",
        isSearchFocused ? "sm:w-[700px]" : ""
      )}>
        <div className="relative flex items-center w-full">
          <div className={cn(
            "absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none",
            isSearchFocused ? "text-blue-500" : "text-gray-400"
          )}>
            <Search className="h-4 w-4" />
          </div>
          
          <Input
            type="search"
            placeholder="Search courses"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setIsSearchFocused(false)}
            className={cn(
              "pl-10 pr-12 py-2 bg-youtube-gray border-youtube-gray focus:border-blue-500 text-white rounded-l-full rounded-r-none h-10",
              isSearchFocused ? "border-blue-500 ring-1 ring-blue-500" : ""
            )}
          />
          
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              className="absolute right-16 text-gray-400 hover:text-white"
            >
              <X className="h-4 w-4" />
            </button>
          )}
          
          <button className="h-10 px-5 bg-youtube-hover text-white rounded-r-full flex items-center justify-center hover:bg-youtube-gray youtube-transition">
            <Search className="h-5 w-5" />
          </button>
        </div>
        
        <button className="nav-icon ml-2">
          <Mic className="w-5 h-5" />
        </button>
      </div>
      
      {/* Right Section */}
      <div className="flex items-center gap-2">
        <button className="nav-icon">
          <Bell className="w-5 h-5" />
        </button>
        
        <button className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-600 text-white">
          <User className="w-5 h-5" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
