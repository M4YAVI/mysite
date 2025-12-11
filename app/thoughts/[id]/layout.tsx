import type { Metadata } from "next";
import { THOUGHTS } from "@/data/thoughts";

type Props = {
    params: Promise<{ id: string }>;
    children: React.ReactNode;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { id } = await params;
    const thought = THOUGHTS.find((t) => t.id === id);

    if (!thought) {
        return {
            title: "Thought Not Found",
            description: "This thought could not be found.",
        };
    }

    // Use the first image if available, else fallback
    const images = thought.images && thought.images.length > 0
        ? thought.images
        : ["/me.jpeg"];

    return {
        title: thought.title,
        description: thought.description,
        openGraph: {
            title: thought.title,
            description: thought.description,
            type: "article",
            publishedTime: thought.date,
            images: images.map(url => ({ url })),
        },
        twitter: {
            card: "summary_large_image",
            title: thought.title,
            description: thought.description,
            images: images,
        },
    };
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
