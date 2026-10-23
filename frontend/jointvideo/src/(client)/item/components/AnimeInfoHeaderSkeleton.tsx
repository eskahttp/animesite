function Shimmer({ className = "" }: { className?: string }) {
    return (
        <div className={`relative overflow-hidden bg-neutral-800 ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        </div>
    );
}

export function AnimeInfoHeaderSkeleton() {
    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <article
                    className="rounded-2xl bg-neutral-900/60 ring-1 ring-white/5 p-5"
                    aria-hidden="true"
                >
                    <div className="flex flex-col gap-6 md:flex-row">
                        {/* ПОСТЕР */}
                        <div className="w-full shrink-0 md:w-64">
                            <div className="relative overflow-hidden rounded-xl ring-1 ring-white/10">
                                <Shimmer className="aspect-[3/4] w-full" />
                                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-rose-500/20 to-transparent" />
                            </div>
                            <div className="mt-3 flex items-center justify-between px-1">
                                {Array.from({ length: 5 }).map((_, i) => (
                                    <Shimmer key={i} className="h-9 w-9 rounded-md" />
                                ))}
                            </div>
                        </div>

                        {/* ДАННЫЕ */}
                        <div className="min-w-0 flex-1 space-y-5">
                            {/* заголовок */}
                            <div className="space-y-2">
                                <Shimmer className="h-8 w-3/4 rounded" />
                                <Shimmer className="h-8 w-1/2 rounded" />
                            </div>

                            {/* альт. названия */}
                            <div className="flex flex-wrap gap-2">
                                <Shimmer className="h-7 w-28 rounded-md" />
                                <Shimmer className="h-7 w-40 rounded-md" />
                                <Shimmer className="h-7 w-10 rounded-md" />
                            </div>

                            {/* оценка + MAL */}
                            <div className="flex items-center gap-2">
                                <Shimmer className="h-7 w-20 rounded-md" />
                                <Shimmer className="h-7 w-14 rounded-md" />
                            </div>

                            {/* таблица свойств */}
                            <div className="grid grid-cols-[150px_1fr] gap-y-3">
                                {Array.from({ length: 7 }).map((_, i) => (
                                    <div key={`c-${i}`}>
                                        <Shimmer key={`l-${i}`} className="h-4 w-28 rounded" />
                                        <div key={`r-${i}`} className="flex flex-wrap gap-1.5">
                                            <Shimmer className="h-5 w-16 rounded" />
                                            <Shimmer className="h-5 w-20 rounded" />
                                            <Shimmer className="h-5 w-14 rounded" />
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* описание */}
                            <div className="space-y-2">
                                <Shimmer className="h-3 w-full rounded" />
                                <Shimmer className="h-3 w-11/12 rounded" />
                                <Shimmer className="h-3 w-4/5 rounded" />
                                <Shimmer className="h-3 w-10/12 rounded" />
                            </div>

                            {/* кнопка */}
                            <Shimmer className="h-9 w-44 rounded-md" />
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}