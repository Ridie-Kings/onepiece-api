import { Container } from "../components/Container";
import { motion, useDragControls } from "framer-motion"
export const HomePage = () => {
    const IMAGES = [
        {
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1534447677768-be436bb09401",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        }
    ]

    const controls = useDragControls()
    console.log(controls);

    return (
        <Container className={""}>
            <h1 className="text-4xl text-yellow-400 flex flex-col items-center">FEATURED SECTIONS</h1>
            <p>Select the section to discover</p>

            <motion.div
                drag
                dragControls={controls}
                className="w-screen overflow-hidden flex gap-10"
            >
                {IMAGES.map((image) => (
                    <motion.img
                        dragControls={controls}

                        key={image.src}
                        src={image.src}
                        width={250}
                        height={250}
                    />
                ))}
            </motion.div>
        </Container>
    );
};