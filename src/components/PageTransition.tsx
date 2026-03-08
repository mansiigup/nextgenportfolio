import { useLocation } from 'react-router-dom';
import { useEffect, useState, type ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const PageTransition = ({ children }: PageTransitionProps) => {
  const location = useLocation();
  const [displayChildren, setDisplayChildren] = useState(children);
  const [transitionStage, setTransitionStage] = useState<'enter' | 'exit'>('enter');

  useEffect(() => {
    if (children !== displayChildren) {
      setTransitionStage('exit');
    }
  }, [children, displayChildren]);

  const handleTransitionEnd = () => {
    if (transitionStage === 'exit') {
      setDisplayChildren(children);
      setTransitionStage('enter');
    }
  };

  return (
    <div
      onTransitionEnd={handleTransitionEnd}
      className={`transition-all duration-300 ease-in-out ${
        transitionStage === 'enter'
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-2'
      }`}
    >
      {displayChildren}
    </div>
  );
};

export default PageTransition;
