// components/PageTransition.tsx
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageTransitionVariants = {
  initial: {
    opacity: 0,
    x: -100 // Start the page off-screen (to the left)
  },
  animate: {
    opacity: 1,
    x: 0, // Bring it into view
    transition: { duration: 0.5 } // Animation duration
  },
  exit: {
    opacity: 0,
    x: 100, // Exit the page to the right
    transition: { duration: 0.3 }
  }
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <motion.div initial='initial' animate='animate' exit='exit' variants={pageTransitionVariants}>
      {children}
    </motion.div>
  );
};

export default PageTransition;
