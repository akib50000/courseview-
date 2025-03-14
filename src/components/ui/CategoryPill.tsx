
import { cn } from '@/lib/utils';

interface CategoryPillProps {
  label: string;
  isActive?: boolean;
  onClick?: () => void;
  className?: string;
}

const CategoryPill = ({ 
  label, 
  isActive = false, 
  onClick,
  className 
}: CategoryPillProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "category-pill",
        isActive && "active",
        className
      )}
    >
      {label}
    </button>
  );
};

export default CategoryPill;
