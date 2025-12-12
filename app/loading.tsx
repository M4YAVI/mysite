import { Skeleton } from "@/components/ui/Skeleton";

export default function Loading() {
    return (
        <div className="min-h-screen w-full flex items-start md:items-center justify-center px-4 md:px-12 lg:px-32 pb-8 pt-24 md:pt-8 bg-[#0a0a0a]">
            <div className="w-full max-w-6xl mx-auto flex flex-col gap-12 lg:gap-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <Skeleton className="h-12 w-64 md:w-96 rounded-lg" />
                    <Skeleton className="h-10 w-full md:w-80 rounded-full" />
                </div>

                <div className="w-full h-auto md:aspect-[16/9] lg:aspect-[2/1] grid grid-cols-1 md:grid-cols-12 md:grid-rows-6 gap-4">
                    <Skeleton className="md:col-span-8 md:row-span-3 rounded-3xl" />
                    <Skeleton className="md:col-span-4 md:row-span-4 rounded-3xl" />
                    <Skeleton className="md:col-span-8 md:row-span-3 rounded-3xl" />
                    <Skeleton className="md:col-span-4 md:row-span-2 rounded-3xl" />
                </div>
            </div>
        </div>
    );
}
