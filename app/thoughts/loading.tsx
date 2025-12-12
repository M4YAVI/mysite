import { Skeleton } from "@/components/ui/Skeleton";
import Navigation from "@/components/Navigation";

export default function Loading() {
    return (
        <div className="min-h-[100dvh] w-full flex items-start justify-center px-4 md:px-12 lg:px-32 pb-8 pt-24 md:pt-8 relative overflow-hidden bg-[#0a0a0a]">
            <main className="relative z-10 w-full max-w-4xl mx-auto mt-8 flex flex-col gap-12 lg:gap-16">

                {/* Header / Navigation */}
                <header className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Skeleton className="h-12 w-64 rounded-lg" />
                    <div className="opacity-50 pointer-events-none">
                        <Navigation />
                    </div>
                </header>

                <div className="flex flex-col gap-12 mt-8">
                    {[...Array(3)].map((_, i) => (
                        <div key={i} className="flex flex-col gap-4 pl-6 border-l border-white/10">
                            <div className="flex justify-between w-full">
                                <Skeleton className="h-4 w-24" />
                                <Skeleton className="h-4 w-16" />
                            </div>
                            <Skeleton className="h-8 w-3/4" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
