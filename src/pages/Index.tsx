
import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import CourseCard from '@/components/ui/CourseCard';
import CategoryPill from '@/components/ui/CategoryPill';

// Mock data for categories
const categories = [
  'All', 'Web Development', 'Data Science', 'Machine Learning', 
  'Mobile Development', 'Game Development', 'UI/UX Design',
  'DevOps', 'Blockchain', 'Cloud Computing', 'Cybersecurity'
];

// Mock data for courses
const courses = [
  {
    id: '1',
    title: 'React JS Crash Course for Beginners - Learn React in 2023',
    thumbnail: 'https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg',
    instructorName: 'WebDev Mastery',
    views: '1.2M',
    postedTime: '3 months ago',
    duration: '1:21:34'
  },
  {
    id: '2',
    title: 'Data Science Fundamentals: Python, Pandas & NumPy Essentials',
    thumbnail: 'https://i.ytimg.com/vi/vmEHCJofslg/maxresdefault.jpg',
    instructorName: 'Data Science Pro',
    views: '847K',
    postedTime: '2 months ago',
    duration: '2:45:12'
  },
  {
    id: '3',
    title: 'Modern JavaScript From The Beginning - Full Course',
    thumbnail: 'https://i.ytimg.com/vi/Qqx_wzMmFeA/maxresdefault.jpg',
    instructorName: 'JavaScript Mastery',
    views: '1.5M',
    postedTime: '5 months ago',
    duration: '3:12:51'
  },
  {
    id: '4',
    title: 'Build a Full Stack E-Commerce App with Next.js, Tailwind & Prisma',
    thumbnail: 'https://i.ytimg.com/vi/4mOkFXyxfsU/maxresdefault.jpg',
    instructorName: 'Full Stack Guru',
    views: '678K',
    postedTime: '1 month ago',
    duration: '4:05:23'
  },
  {
    id: '5',
    title: 'Machine Learning for Beginners: Decision Trees & Random Forests',
    thumbnail: 'https://i.ytimg.com/vi/7eh4d6sabA0/maxresdefault.jpg',
    instructorName: 'AI Learning Hub',
    views: '923K',
    postedTime: '4 months ago',
    duration: '2:31:45'
  },
  {
    id: '6',
    title: 'Docker & Kubernetes: The Practical Guide for Developers',
    thumbnail: 'https://i.ytimg.com/vi/bhBSlnQcq2k/maxresdefault.jpg',
    instructorName: 'DevOps Masterclass',
    views: '512K',
    postedTime: '6 months ago',
    duration: '3:47:18'
  },
  {
    id: '7',
    title: 'Flutter Mobile App Development: Complete Course from Scratch',
    thumbnail: 'https://i.ytimg.com/vi/1ukSR1GRtMU/maxresdefault.jpg',
    instructorName: 'Mobile Dev Guru',
    views: '789K',
    postedTime: '2 months ago',
    duration: '5:12:36'
  },
  {
    id: '8',
    title: 'Advanced CSS and Sass: Flexbox, Grid, Animations and More!',
    thumbnail: 'https://i.ytimg.com/vi/9zBsdzdE4sM/maxresdefault.jpg',
    instructorName: 'CSS Wizardry',
    views: '1.1M',
    postedTime: '7 months ago',
    duration: '2:28:14'
  }
];

const Index = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeCategory, setActiveCategory] = useState('All');
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
    <div className="min-h-screen bg-youtube-black text-white">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <main 
        className={`pt-20 pb-10 youtube-transition ${
          isSidebarOpen ? 'ml-60' : 'ml-[72px]'
        }`}
      >
        {/* Categories */}
        <div className="mb-6 overflow-x-auto scrollbar-none">
          <div className="flex gap-3 px-6">
            {categories.map((category) => (
              <CategoryPill
                key={category}
                label={category}
                isActive={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              />
            ))}
          </div>
        </div>
        
        {/* Course Grid */}
        <div className="px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                thumbnail={course.thumbnail}
                instructorName={course.instructorName}
                views={course.views}
                postedTime={course.postedTime}
                duration={course.duration}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
