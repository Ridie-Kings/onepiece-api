import { Container } from "../components/Container";

export const HomePage = () => {
    const IMAGES = [
        {
            src: "https://images.unsplash.com/photo-1587613866194-2f8d3f5e2d7d",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1587613866194-2f8d3f5e2d7d",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1587613866194-2f8d3f5e2d7d",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1587613866194-2f8d3f5e2d7d",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1587613866194-2f8d3f5e2d7d",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        },
        {
            src: "https://images.unsplash.com/photo-1587613866194-2f8d3f5e2d7d",
            alt: "A person standing on a mountain during sunset",
            caption: "Sunset on the mountain"
        }
    ]
    return (
        <Container>
            <h1 className="text-4xl text-yellow-400 flex flex-col items-center">FEATURED SECTIONS</h1>
            <p>Select the section to discover</p>

        </Container>
    );
};