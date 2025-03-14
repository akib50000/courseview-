
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, Library, History, Clock, ThumbsUp, 
  Flame, ShoppingBag, Music, Film, Gamepad2, 
  Trophy, Lightbulb, Settings, HelpCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar = ({ isOpen }: SidebarProps) => {
  const location = useLocation();
  
  const mainNavItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Flame, label: 'Trending', path: '/trending' },
    { icon: ShoppingBag, label: 'Courses', path: '/courses' },
  ];
  
  const libraryItems = [
    { icon: Library, label: 'Library', path: '/library' },
    { icon: History, label: 'History', path: '/history' },
    { icon: Clock, label: 'Watch Later', path: '/playlist/watch-later' },
    { icon: ThumbsUp, label: 'Liked Courses', path: '/playlist/liked' },
  ];
  
  const exploreItems = [
    { icon: Music, label: 'Music', path: '/music' },
    { icon: Film, label: 'Films', path: '/films' },
    { icon: Gamepad2, label: 'Gaming', path: '/gaming' },
    { icon: Trophy, label: 'Sports', path: '/sports' },
    { icon: Lightbulb, label: 'Learning', path: '/learning' },
  ];
  
  const settingsItems = [
    { icon: Settings, label: 'Settings', path: '/settings' },
    { icon: HelpCircle, label: 'Help', path: '/help' },
  ];
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <aside 
      className={cn(
        "fixed left-0 top-14 bottom-0 z-40 bg-youtube-black youtube-transition overflow-y-auto overflow-x-hidden",
        isOpen ? "w-60" : "w-[72px]"
      )}
    >
      <div className="py-3 px-2">
        {/* Main Navigation */}
        <div className="mb-4">
          {mainNavItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                isActive(item.path) && "bg-youtube-hover"
              )}
            >
              <item.icon className="sidebar-icon" />
              {isOpen && <span className="sidebar-text">{item.label}</span>}
            </Link>
          ))}
        </div>
        
        {/* Divider */}
        {isOpen && <div className="h-px bg-youtube-gray/20 my-3" />}
        
        {/* Library */}
        {isOpen && <h3 className="px-3 py-1 text-sm font-medium">Library</h3>}
        <div className="mb-4">
          {libraryItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                isActive(item.path) && "bg-youtube-hover"
              )}
            >
              <item.icon className="sidebar-icon" />
              {isOpen && <span className="sidebar-text">{item.label}</span>}
            </Link>
          ))}
        </div>
        
        {/* Divider */}
        {isOpen && <div className="h-px bg-youtube-gray/20 my-3" />}
        
        {/* Explore */}
        {isOpen && <h3 className="px-3 py-1 text-sm font-medium">Explore</h3>}
        <div className="mb-4">
          {exploreItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                isActive(item.path) && "bg-youtube-hover"
              )}
            >
              <item.icon className="sidebar-icon" />
              {isOpen && <span className="sidebar-text">{item.label}</span>}
            </Link>
          ))}
        </div>
        
        {/* Divider */}
        {isOpen && <div className="h-px bg-youtube-gray/20 my-3" />}
        
        {/* Settings */}
        <div className="mb-4">
          {settingsItems.map((item) => (
            <Link 
              key={item.path}
              to={item.path}
              className={cn(
                "sidebar-item",
                isActive(item.path) && "bg-youtube-hover"
              )}
            >
              <item.icon className="sidebar-icon" />
              {isOpen && <span className="sidebar-text">{item.label}</span>}
            </Link>
          ))}
        </div>
        
        {/* Footer */}
        {isOpen && (
          <div className="px-4 py-3 text-xs text-youtube-lightgray">
            <p className="mb-2">© 2023 CourseView</p>
            <p>Terms of Service · Privacy</p>
          </div>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
