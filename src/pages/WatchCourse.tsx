
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ThumbsUp, ThumbsDown, Share, Download, 
  Save, Flag, MessagesSquare
} from 'lucide-react';
import Navbar from '@/components/layout/Navbar';
import Sidebar from '@/components/layout/Sidebar';
import VideoPlayer from '@/components/layout/VideoPlayer';
import CourseCard from '@/components/ui/CourseCard';

// Mock data for a single course
const courseData = {
  id: '1',
  title: 'React JS Crash Course for Beginners - Learn React in 2023',
  description: 'In this crash course, you\'ll learn the fundamentals of React JS, including components, props, state, hooks, and more. By the end of this course, you\'ll be able to build your own React applications from scratch.',
  videoUrl: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
  thumbnail: 'https://i.ytimg.com/vi/w7ejDZ8SWv8/maxresdefault.jpg',
  instructor: {
    id: 'instructor1',
    name: 'WebDev Mastery',
    avatar: 'https://i.pravatar.cc/150?img=14',
    subscribers: '1.2M'
  },
  views: '1.2M',
  likes: '85K',
  publishedAt: '2023-05-15',
  postedTime: '3 months ago'
};

// Mock data for related courses
const relatedCourses = [
  {
    id: '2',
    title: 'Advanced React Patterns - Custom Hooks, Context API, and More',
    thumbnail: 'https://i.ytimg.com/vi/4UZrsTqkcW4/maxresdefault.jpg',
    instructorName: 'React Masters',
    views: '945K',
    postedTime: '2 months ago',
    duration: '2:12:45'
  },
  {
    id: '3',
    title: 'Build a Full Stack App with React, Node.js, and MongoDB',
    thumbnail: 'https://i.ytimg.com/vi/7CqJlxBYj-M/maxresdefault.jpg',
    instructorName: 'MERN Stack Dev',
    views: '1.1M',
    postedTime: '4 months ago',
    duration: '3:45:12'
  },
  {
    id: '4',
    title: 'React Performance Optimization Techniques',
    thumbnail: 'https://i.ytimg.com/vi/6-e9Jw3rJgQ/maxresdefault.jpg',
    instructorName: 'Performance Guru',
    views: '724K',
    postedTime: '1 month ago',
    duration: '1:58:37'
  },
  {
    id: '5',
    title: 'React Testing Library - Complete Guide',
    thumbnail: 'https://i.ytimg.com/vi/GLSSRtnNY0g/maxresdefault.jpg',
    instructorName: 'Test Driven Dev',
    views: '512K',
    postedTime: '5 months ago',
    duration: '2:15:23'
  }
];

const WatchCourse = () => {
  const { id } = useParams<{ id: string }>();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  // Format description with max lines when collapsed
  const formatDescription = (text: string) => {
    if (isDescriptionExpanded) {
      return text;
    }
    
    return text.length > 150 ? `${text.substring(0, 150)}...` : text;
  };
  
  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);
  
  return (
    <div className="min-h-screen bg-youtube-black text-white">
      <Navbar toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} />
      
      <main className={`pt-20 pb-10 youtube-transition ${
        isSidebarOpen ? 'ml-60' : 'ml-0'
      }`}>
        <div className="max-w-[1800px] mx-auto px-4 lg:px-6 flex flex-col lg:flex-row gap-6">
          {/* Main Content - Video and Info */}
          <div className="lg:w-8/12">
            {/* Video Player */}
            <VideoPlayer 
              src={courseData.videoUrl} 
              title={courseData.title}
              poster={courseData.thumbnail}
            />
            
            {/* Course Information */}
            <div className="mt-4 space-y-4">
              <h1 className="text-xl font-bold leading-tight md:text-2xl">{courseData.title}</h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img 
                        src={courseData.instructor.avatar} 
                        alt={courseData.instructor.name} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">{courseData.instructor.name}</p>
                      <p className="text-sm text-youtube-lightgray">{courseData.instructor.subscribers} subscribers</p>
                    </div>
                  </div>
                  
                  <button className="px-4 py-2 bg-white text-youtube-black font-medium rounded-full hover:bg-white/90 youtube-transition">
                    Subscribe
                  </button>
                </div>
                
                <div className="flex items-center flex-wrap gap-2">
                  <div className="flex items-center rounded-full bg-youtube-gray">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-l-full hover:bg-youtube-hover youtube-transition">
                      <ThumbsUp className="w-5 h-5" />
                      <span>{courseData.likes}</span>
                    </button>
                    <div className="w-px h-6 bg-youtube-lightgray/20" />
                    <button className="px-4 py-2 rounded-r-full hover:bg-youtube-hover youtube-transition">
                      <ThumbsDown className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-youtube-gray rounded-full hover:bg-youtube-hover youtube-transition">
                    <Share className="w-5 h-5" />
                    <span>Share</span>
                  </button>
                  
                  <button className="flex items-center gap-2 px-4 py-2 bg-youtube-gray rounded-full hover:bg-youtube-hover youtube-transition">
                    <Download className="w-5 h-5" />
                    <span>Download</span>
                  </button>
                  
                  <button className="flex items-center justify-center w-10 h-10 bg-youtube-gray rounded-full hover:bg-youtube-hover youtube-transition">
                    <Flag className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              {/* Stats and Description */}
              <div className="p-4 bg-youtube-gray rounded-lg">
                <div className="flex gap-2 font-medium mb-2">
                  <span>{courseData.views} views</span>
                  <span>{courseData.postedTime}</span>
                </div>
                
                <div className="relative">
                  <p className="whitespace-pre-line">{formatDescription(courseData.description)}</p>
                  
                  {courseData.description.length > 150 && (
                    <button 
                      onClick={() => setIsDescriptionExpanded(!isDescriptionExpanded)}
                      className="mt-2 text-blue-400 font-medium"
                    >
                      {isDescriptionExpanded ? 'Show less' : 'Show more'}
                    </button>
                  )}
                </div>
              </div>
              
              {/* Comments Section Preview */}
              <div className="p-4 bg-youtube-gray rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <MessagesSquare className="w-5 h-5" />
                  <h3 className="text-lg font-medium">Comments</h3>
                  <span className="text-youtube-lightgray">(324)</span>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src="https://i.pravatar.cc/150?img=12" 
                      alt="Commenter" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-medium">John Doe</p>
                      <span className="text-xs text-youtube-lightgray">2 weeks ago</span>
                    </div>
                    <p className="mt-1">This course was incredibly helpful! I've been trying to learn React for months, and this finally made it click for me. Thank you!</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button className="flex items-center gap-1 text-youtube-lightgray hover:text-white youtube-transition">
                        <ThumbsUp className="w-4 h-4" />
                        <span>142</span>
                      </button>
                      <button className="text-youtube-lightgray hover:text-white youtube-transition">
                        <ThumbsDown className="w-4 h-4" />
                      </button>
                      <button className="text-youtube-lightgray hover:text-white youtube-transition text-sm font-medium">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
                
                <button className="mt-4 text-blue-400 font-medium">
                  View all 324 comments
                </button>
              </div>
            </div>
          </div>
          
          {/* Sidebar - Related Courses */}
          <div className="lg:w-4/12">
            <h2 className="text-lg font-medium mb-4">Related courses</h2>
            <div className="space-y-3">
              {relatedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  title={course.title}
                  thumbnail={course.thumbnail}
                  instructorName={course.instructorName}
                  views={course.views}
                  postedTime={course.postedTime}
                  duration={course.duration}
                  className="!flex gap-2 h-[94px]"
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WatchCourse;
