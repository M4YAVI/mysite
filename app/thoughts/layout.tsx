import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Thoughts",
};

export default function ThoughtsListLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
