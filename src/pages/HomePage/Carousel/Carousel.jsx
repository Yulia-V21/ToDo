import { motion } from "framer-motion";
import { img1, img2, img3 } from "./img/index";

const Carousel = () => {
  const images = [img2,img1, img3 ];

  return (
    <div
      style={{
        display: "flex",
        gap: "30px",
        overflow: "hidden",
        marginTop: "30px",
        justifyContent: "center",
      }}
    >
      {images.map((img, index) => (
        <motion.div
          key={index}
          whileHover={{ scale: 1.05 }}
          style={{ cursor: "pointer" }}
        >
          <img
            src={img}
            alt={`Картинка ${index + 1}`}
            style={{ width: "300px", borderRadius: "15px" }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Carousel;
