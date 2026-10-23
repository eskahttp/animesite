import { useQuery } from "@tanstack/react-query";
import { selectNewAnime } from "./selectNewAnime/selectNewAnime.ts";
import { AnimeRowCard } from "./components/AnimeRowCard.tsx";
import type {NewAnime} from "./types/NewAnimeTypes.ts";
import {MainPageSkeleton} from "./components/AnimeRowCardSkeleton.tsx";

interface Props {}

export const MainPage = ({}: Props): React.ReactNode => {
    const { data: animeList, isLoading, error } = useQuery<NewAnime[]>({
        queryKey: ["anime", "ongoing", 1],
        queryFn: async () => selectNewAnime(),
        staleTime: 1000 * 60 * 60,
    });

    if (isLoading) return <MainPageSkeleton/>

    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Новые аниме
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {animeList?.map((anime) => (
                        <AnimeRowCard
                            key={anime.id}
                            id={anime.id}
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