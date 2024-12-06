// import { useEffect, useState } from "react";
// import { motion, useMotionValue } from "framer-motion";
// import { Container } from "../components/Container";

// const imagen = "https://images.unsplash.com/photo-1534447677768-be436bb09401";

// // Definimos manualmente los 7 nodos
// const nodo1 = { imagen, next: nodo2, prev: nodo7 };
// const nodo2 = { imagen, next: nodo3, prev: nodo2 };
// const nodo3 = { imagen, next: nodo4, prev: nodo2 };
// const nodo4 = { imagen, next: nodo5, prev: nodo3 };
// const nodo5 = { imagen, next: nodo6 , prev: nodo4 };
// const nodo6 = { imagen, next: nodo7, prev: nodo5 };
// const nodo7 = { imagen, next: nodo1, prev: nodo6 };

// const imgs = [nodo1, nodo2, nodo3, nodo4, nodo5, nodo6, nodo7];

// export const HomePage = () => {
//     const [currentNode, setCurrentNode] = useState(nodo1);

//     // Function to go to the next image
//     const nextImage = () => {
//         setCurrentNode(currentNode.next);
//     };

//     // Function to go to the previous image
//     const prevImage = () => {
//         setCurrentNode(currentNode.prev);
//     };

//     // Auto slide every 10 seconds
//     useEffect(() => {
//         const interval = setInterval(nextImage, 10000);
//         return () => clearInterval(interval);
//     }, [currentNode]);

//     return (
//         <Container>
//             <motion.div
//                 key={currentNode.imagen}
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 transition={{ duration: 0.5 }}
//             >
//                 <img src={currentNode.imagen} alt="Carousel" style={{ width: "100%", height: "auto" }} />
//             </motion.div>
//             <button onClick={prevImage}>Previous</button>
//             <button onClick={nextImage}>Next</button>
//         </Container>
//     );
// };
import { motion } from "framer-motion";
import { useState } from "react";
import { Container } from "../components/Container";

// Imágenes del carrusel
const images = [
    {   src : "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        name: "Characters",
        id: 1
    },
    {   src : "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        name: "Crews",
        id: 2
    },
    {   src : "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        name: "Races",
        id: 3
    },
    {   src : "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        name: "Devil's Fruits",
        id: 4
    },
    {   src : "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        name: "Hakis",
        id: 5
    },
    {   src : "https://images.unsplash.com/photo-1534447677768-be436bb09401",
        name: "Origins",
        id: 6
    },
];

export const HomePage = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mover al siguiente elemento
    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Mover al elemento anterior
    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <Container>
            <div style={styles.carousel}>
                {images.map(({src,name}, index) => {
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
                            style={{
                                ...styles.imageContainer,
                                ...transformStyle,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <img
                                src={src}
                                alt={`Image ${index + 1}`}
                                style={styles.image}
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

// Estilos CSS en línea
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

// Exportamos el componente
export default HomePage;
// import { useState } from "react";
// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Container } from "../components/Container";

// const imagen = "https://images.unsplash.com/photo-1534447677768-be436bb09401";

// // Definimos los nodos de la lista circular
// const nodo1 = { imagen, next: null, prev: null };
// const nodo2 = { imagen, next: null, prev: nodo1 };
// const nodo3 = { imagen, next: null, prev: nodo2 };
// const nodo4 = { imagen, next: null, prev: nodo3 };
// const nodo5 = { imagen, next: null, prev: nodo4 };
// const nodo6 = { imagen, next: null, prev: nodo5 };
// const nodo7 = { imagen, next: null, prev: nodo6 };

// // Conectamos los nodos de forma circular
// nodo1.next = nodo2;
// nodo2.next = nodo3;
// nodo3.next = nodo4;
// nodo4.next = nodo5;
// nodo5.next = nodo6;
// nodo6.next = nodo7;
// nodo7.next = nodo1;
// nodo1.prev = nodo7;
// nodo2.prev = nodo1;
// nodo3.prev = nodo2;
// nodo4.prev = nodo3;
// nodo5.prev = nodo4;
// nodo6.prev = nodo5;
// nodo7.prev = nodo6;

// export const HomePage = () => {
//     const [currentNode, setCurrentNode] = useState(nodo1);
//     const [direction, setDirection] = useState(0); // 1 para avanzar, -1 para retroceder

//     // Función para avanzar al siguiente nodo
//     const nextNode = () => {
//         setDirection(1);
//         setCurrentNode(currentNode.next);
//     };

//     // Función para retroceder al nodo anterior
//     const prevNode = () => {
//         setDirection(-1);
//         setCurrentNode(currentNode.prev);
//     };

//     // Función para manejar el arrastre
//     const handleDragEnd = (event, info) => {
//         if (info.offset.x < -50) {
//             // Arrastre hacia la izquierda (avanzar)
//             nextNode();
//         } else if (info.offset.x > 50) {
//             // Arrastre hacia la derecha (retroceder)
//             prevNode();
//         }
//     };

//     return (
//         <Container>
//             <div style={styles.carousel}>
//                 <AnimatePresence initial={false} custom={direction}>
//                     {/* Contenedor de la imagen actual */}
//                     <motion.div
//                         key={currentNode.imagen}
//                         custom={direction}
//                         initial={{ x: direction === 1 ? 300 : -300, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         exit={{ x: direction === 1 ? -300 : 300, opacity: 0 }}
//                         transition={{ duration: 0.5 }}
//                         drag="x"
//                         dragConstraints={{ left: 0, right: 0 }}
//                         onDragEnd={handleDragEnd}
//                         style={styles.imageContainer}
//                     >
//                         <img
//                             src={currentNode.imagen}
//                             alt="Carousel"
//                             style={styles.image}
//                         />
//                     </motion.div>
//                 </AnimatePresence>
//             </div>
//         </Container>
//     );
// };

// // Estilos CSS
// const styles = {
//     carousel: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         position: "relative",
//         height: "400px",
//         overflow: "hidden",
//         width: "100%",
//     },
//     imageContainer: {
//         width: "300px",
//         height: "300px",
//         borderRadius: "10px",
//         overflow: "hidden",
//         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
//         cursor: "grab",
//     },
//     image: {
//         width: "100%",
//         height: "100%",
//         objectFit: "cover",
//     },
// };

// export default HomePage;
