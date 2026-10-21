import { useQuery } from "@tanstack/react-query";
import { selectNewAnime } from "./selectNewAnime/selectNewAnime.ts";
import { AnimeRowCard } from "./components/AnimeRowCard.tsx";
import type { NewAnime } from "./types.ts";

interface Props {}

export const MainPage = ({}: Props): React.ReactNode => {
    const { data: animeList, isLoading, error } = useQuery<NewAnime[]>({
        queryKey: ["anime", "ongoing", 1],
        queryFn: async () => {
           const res = await selectNewAnime()
            console.log(res)
            return res
        },
        staleTime: 1000 * 60 * 60,
    });

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Новое на сайте
                    </h2>
                </div>

                {isLoading && (
                    <p className="text-neutral-400">Загрузка...</p>
                )}
                {error && (
                    <p className="text-rose-500">Ошибка загрузки</p>
                )}

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {animeList?.map((anime) => (
                        <AnimeRowCard
                            key={anime.id}
                            name={anime.russian || anime.name}
                            poster={anime.poster.mainUrl}
                            year={anime.airedOn.year}
                            episodes={anime.episodesAired}
                            genres={anime.genres}
                            score={anime.score}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};