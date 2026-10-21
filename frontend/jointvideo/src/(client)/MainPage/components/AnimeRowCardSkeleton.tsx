function Shimmer({ className = "" }: { className?: string }) {
    return (
        <div
            className={`relative overflow-hidden bg-neutral-800 ${className}`}
        >
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
    );
}

function CardSkeleton() {
    return (
        <article
            className="flex overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/5"
            aria-hidden="true"
        >
            <div className="relative w-32 shrink-0 sm:w-36 lg:w-40">
                <Shimmer className="aspect-[2/3] h-full w-full" />
                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-rose-500/20 to-transparent" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-4 lg:p-5">
                <div className="space-y-2">
                    <Shimmer className="h-4 w-5/6 rounded" />
                    <Shimmer className="h-4 w-3/5 rounded" />
                </div>

                <div className="flex items-center gap-2">
                    <Shimmer className="h-5 w-5 rounded-full" />
                    <Shimmer className="h-5 w-12 rounded" />
                </div>

                <Shimmer className="h-3 w-2/5 rounded" />

                <div className="mt-1 flex flex-wrap gap-2">
                    <Shimmer className="h-3 w-16 rounded" />
                    <Shimmer className="h-3 w-20 rounded" />
                    <Shimmer className="h-3 w-14 rounded" />
                    <Shimmer className="h-3 w-20 rounded" />
                </div>
            </div>
        </article>
    );
}

interface Props {
    count?: number;
}

export function MainPageSkeleton({ count = 10 }: Props) {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Новое на сайте
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {Array.from({ length: count }).map((_, i) => (
                        <CardSkeleton key={i} />
                    ))}
                </div>
            </section>
        </div>
    );
}