import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "../components/Container";

const images = [
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    name: "Characters",
    id: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    name: "Crews",
    id: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    name: "Races",
    id: 3,
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    name: "Devil's Fruits",
    id: 4,
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    name: "Hakis",
    id: 5,
  },
  {
    src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    name: "Origins",
    id: 6,
  },
];

export const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <Container>
      <div style={{ ...styles.carousel } as React.CSSProperties}>
        {images.map(({ src, name }, index) => {
          // Calculamos la posición del elemento
          const offset = index - currentIndex;
          let transformStyle;

          // Aplica estilos únicos según la posición
          if (offset === 0) {
            transformStyle = styles.centerImage;
          } else if (offset === -1 || offset === images.length - 1) {
            transformStyle = styles.leftImage;
          } else if (offset === 1 || offset === -images.length + 1) {
            transformStyle = styles.rightImage;
          } else {
            transformStyle = styles.hiddenImage;
          }

          return (
            <motion.div
              key={index}
              style={
                {
                  ...styles.imageContainer,
                  ...transformStyle,
                } as React.CSSProperties
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={src}
                alt={`Image ${index + 1}`}
                style={{ ...styles.image } as React.CSSProperties}
              />
              <p>{name}</p>
            </motion.div>
          );
        })}
      </div>
      <div style={styles.controls}>
        <button onClick={prevImage} style={styles.button}>
          Previous
        </button>
        <button onClick={nextImage} style={styles.button}>
          Next
        </button>
      </div>
    </Container>
  );
};

const styles = {
  carousel: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    width: "100%",
    height: "400px",
  },
  imageContainer: {
    position: "absolute",
    width: "30vw",
    height: "30vw",
    borderRadius: "10px",
    boxShadow: "0px 30px 30px rgba(0, 0, 0, 0.6)",
    transition: "transform 0.5s ease, opacity 0.5s ease",
  },
  centerImage: {
    transform: "translateX(0) scale(1)",
    zIndex: 2,
  },
  leftImage: {
    transform: "translateX(-170%) rotate(-15deg) scale(1) translateY(+50%)",
    zIndex: 1,
    opacity: 0.7,
  },
  rightImage: {
    transform: "translateX(170%) rotate(15deg) scale(1) translateY(+50%)",
    zIndex: 1,
    opacity: 0.7,
  },
  hiddenImage: {
    transform: "scale(0)",
    zIndex: 0,
    opacity: 0,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: "10px",
  },
  controls: {
    display: "flex",
    justifyContent: "center",
    marginTop: "20px",
  },
  button: {
    background: "#333",
    color: "#fff",
    border: "none",
    padding: "10px 20px",
    margin: "200px 0px 10px 10px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  },
};

export default HomePage;
