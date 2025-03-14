
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CourseCardProps {
  id: string;
  title: string;
  thumbnail: string;
  instructorName: string;
  instructorAvatar?: string;
  views: string;
  postedTime: string;
  duration?: string;
  className?: string;
}

const CourseCard = ({
  id,
  title,
  thumbnail,
  instructorName,
  instructorAvatar,
  views,
  postedTime,
  duration,
  className
}: CourseCardProps) => {
  return (
    <Link to={`/watch/${id}`} className={cn("course-card", className)}>
      <div className="thumbnail-container">
        <img 
          src={thumbnail} 
          alt={title} 
          loading="lazy"
          className="thumbnail hover:scale-105"
        />
        
        {duration && (
          <div className="absolute bottom-2 right-2 bg-black/80 px-1 py-0.5 text-xs font-medium rounded">
            {duration}
          </div>
        )}
      </div>
      
      <div className="course-info">
        <div className="instructor-avatar">
          {instructorAvatar ? (
            <img 
              src={instructorAvatar} 
              alt={instructorName}
              className="instructor-img"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
              {instructorName.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
        
        <div className="flex-1 overflow-hidden">
          <h3 className="course-title">{title}</h3>
          <p className="course-instructor">{instructorName}</p>
          <div className="course-meta">
            <span>{views} views</span>
            <span className="course-dot-separator">{postedTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
