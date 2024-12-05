import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { Container } from "../components/Container";

const imgs = [
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
    "https://images.unsplash.com/photo-1534447677768-be436bb09401",
];

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
    type: "spring",
    mass: 3,
    stiffness: 400,
    damping: 50,
};

export const HomePage = () => {
    const [imgIndex, setImgIndex] = useState(0);
    const [isPending, setIsPending] = useState(false);

    const dragX = useMotionValue(0);

    useEffect(() => {
        const intervalRef = setInterval(() => {
            const x = dragX.get();

            if (x === 0) {
                setImgIndex((pv) => {
                    if (pv === imgs.length - 1) {
                        return 0;
                    }
                    return pv + 1;
                });
            }
        }, AUTO_DELAY);

        return () => clearInterval(intervalRef);
    }, [dragX]);

    useEffect(() => {
        const handleKeyPress = (event) => {

            if (event.key === "ArrowLeft" && !isPending) {
                if (imgIndex != 0) {
                    setImgIndex((pv) => pv - 1);
                    setIsPending(true)
                }
                setTimeout(() => {
                    setIsPending(false)
                }, 400)
            } else if (event.key === "ArrowRight" && !isPending) {
                if (imgIndex < (imgs.length * 3) - 1) {
                    setImgIndex((pv) => pv + 1);
                    setIsPending(true)
                }
                else {
                    setImgIndex(0);
                    setIsPending(true)
                }
                setTimeout(() => {
                    setIsPending(false)
                }, 400)
            }
        }
        window.addEventListener("keydown", handleKeyPress);

        return () => {
            window.removeEventListener("keydown", handleKeyPress);
        };
    })

    const onDragEnd = () => {
        const x = dragX.get();

        if (x <= -DRAG_BUFFER && imgIndex < (imgs.length * 3) - 1) {
            setImgIndex((pv) => pv + 1);
        } else if (x >= DRAG_BUFFER && imgIndex > 0) {
            setImgIndex((pv) => pv - 1);
        }
    };

    return (
        <Container >
            <div className=" w-full relative flex flex-col items-center justify-center py-8 overflow-hidden">
                <div className="relative h-full flex flex-col w-[500px]">
                    <motion.div
                        drag="x"
                        dragConstraints={{
                            left: 0,
                            right: 0,
                        }}
                        style={{
                            x: dragX,
                        }}
                        initial={{
                            translateX: 0,
                        }}
                        animate={{
                            translateX: `-${imgIndex * 580}px`,
                        }}
                        transition={SPRING_OPTIONS}
                        onDragEnd={onDragEnd}
                        className="flex cursor-grab items-center active:cursor-grabbing space-x-20"
                    >
                        <Images imgIndex={imgIndex} />
                    </motion.div>
                </div>
            </div>
            <div className="flex text-gray-500 absolute right-5 bottom-5 animate-pulse opacity-30">
                <SquareArrowLeft />
                <SquareArrowRight />
            </div>
        </Container>
    );
};

const Images = ({ imgIndex }) => {
    return (
        <>
            {[...imgs, ...imgs, ...imgs].map((imgSrc, idx) => {
                return (
                    <motion.div
                        key={idx}
                        style={{
                            backgroundImage: `url(${imgSrc})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                        initial={{
                            translateY: `100%`,
                            opacity: 0,
                        }}
                        animate={{
                            scale: imgIndex === idx ? 0.95 : 0.85,
                            translateY: imgIndex - 2 === idx ? "20%" : imgIndex - 1 === idx ? `10%` : imgIndex === idx ? `0"` : imgIndex + 1 === idx ? "10%" : imgIndex + 2 === idx && "20%",
                            rotate: imgIndex - 2 === idx ? "-30deg" : imgIndex - 1 === idx ? `-15deg` : imgIndex === idx ? `0deg"` : imgIndex + 1 === idx ? "15deg" : imgIndex + 2 === idx && "30deg",
                            opacity: imgIndex - 1 === idx ? 0.2 : imgIndex === idx ? 1 : imgIndex + 1 === idx && 0.2,

                        }}
                        transition={{ SPRING_OPTIONS }}
                        className="aspect-video w-[500px] h-[500px] shrink-0 rounded-full bg-neutral-800 object-cover"
                    />
                );
            })}
        </>
    );
};

import PropTypes from 'prop-types';
import { SquareArrowLeft, SquareArrowRight } from "lucide-react";

Images.propTypes = {
    imgIndex: PropTypes.number.isRequired,
}