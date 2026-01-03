import { motion } from "motion/react";

function App() {
  return (
    <div>
      <motion.div
        className="box"
        drag
        whileDrag={{ scale: 0.8 }}
        dragConstraints={{
          left:0,
          top:0,
          right:1000,
          bottom:500
        }}
        dragDirectionLock='true'
        whileHover={{ backgroundColor: "green" }}
        whileTap={{ scale: 0.8 }}
        initial={{ x: 0, y: 0 }}
        animate={{
          x: [0, 800, 800, 0, 0],
          y: [0, 0, 300, 300, 0],
          rotate: [0, 360, -360, 0],
        }}
        transition={{
          duration: 4,
          delay: 1,
        }}
      />
    </div>
  );
}

export default App;
