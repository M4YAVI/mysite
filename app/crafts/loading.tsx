import { Skeleton } from "@/components/ui/Skeleton";
import Navigation from "@/components/Navigation";

export default function Loading() {
    return (
        <div className="min-h-[100dvh] w-full flex items-start justify-center px-4 md:px-12 lg:px-32 pb-8 pt-24 md:pt-8 relative overflow-hidden bg-[#0a0a0a]">
            <main className="relative z-10 w-full max-w-6xl mx-auto mt-8 flex flex-col gap-12 lg:gap-16">

                {/* Header / Navigation */}
                <header className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Skeleton className="h-12 w-48 rounded-lg" />
                    <div className="opacity-50 pointer-events-none">
                        <Navigation />
                    </div>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(6)].map((_, i) => (
                        <div key={i} className="aspect-square rounded-3xl overflow-hidden bg-white/5 border border-white/10 p-4 flex flex-col gap-4">
                            <Skeleton className="w-full h-full rounded-2xl opacity-50" />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
