import { motion } from "framer-motion";
import "./Animation.css";

const Animation = () => {
    
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="animation_title">Мои задачи</h1>
        <h2 className="animation_subtitle">Ваш помощник в управлении задачами.</h2>
        <h3 className="animation_slogan"> Планируйте, выполняйте, достигайте!</h3>
    </motion.div>
    
  );
};
export default Animation;
