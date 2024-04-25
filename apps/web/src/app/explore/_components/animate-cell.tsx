import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  id: number;
}

const AnimateCell: React.FC<Props> = ({ children, id }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 1,
        delay: 0.1 * id,
      }}
      className=""
    >
      {children}
    </motion.div>
  );
};
export default AnimateCell;
