interface AnimeRowCardProps {
    name: string;
    poster: string;         // уже полный URL
    year: number;
    episodes: number;
    genres: { id: string; russian: string }[];
    score: number;
}

export function AnimeRowCard({
                                 name,
                                 poster,
                                 year,
                                 episodes,
                                 genres,
                                 score,
                             }: AnimeRowCardProps) {
    return (
        <article className="group flex overflow-hidden rounded-2xl bg-neutral-900/60 ring-1 ring-white/5 transition duration-300 hover:bg-neutral-900 hover:ring-rose-500/50">
            {/* Постер слева */}
            <div className="relative w-32 shrink-0 overflow-hidden bg-neutral-800 sm:w-36 lg:w-40">
                <div className="aspect-[2/3] h-full w-full">
                    <img
                        src={poster}
                        alt={name}
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </div>

                <div className="absolute inset-y-0 right-0 w-[2px] bg-gradient-to-b from-transparent via-rose-500/40 to-transparent" />
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-2.5 p-4 lg:p-5">
                <h3 className="line-clamp-2 text-sm font-bold uppercase tracking-wide text-white transition group-hover:text-rose-500 lg:text-base">
                    {name}
                </h3>

                <div className="flex items-center gap-2">
                    <svg
                        viewBox="0 0 24 24"
                        className="h-5 w-5 fill-amber-400"
                        aria-hidden
                    >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <span className="text-lg font-bold text-amber-400">
                        {score.toFixed(2)}
                    </span>
                </div>

                <p className="text-xs text-neutral-400 lg:text-sm">
                    {year}
                    <span className="mx-2 text-neutral-700">|</span>
                    Серий: <span className="text-neutral-300">{episodes}</span>
                </p>

                <div className="text-xs lg:text-sm">
                    <span className="text-neutral-400">Жанры: </span>
                    {genres.map((g, i) => (
                        <span key={g.id} className="text-rose-500 hover:underline">
                            {g.russian}
                            {i < genres.length - 1 && (
                                <span className="text-neutral-400">, </span>
                            )}
                        </span>
                    ))}
                </div>
            </div>
        </article>
    );
}