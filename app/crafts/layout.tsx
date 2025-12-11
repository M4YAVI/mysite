import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Crafts",
};

export default function CraftsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
