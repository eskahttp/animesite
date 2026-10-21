import {useQuery} from "@tanstack/react-query";
import {selectNewAnime} from "./selectNewAnime/selectNewAnime.ts";
import {AnimeRowCard} from "./components/AnimeRowCard.tsx";

interface Props {}

export const MainPage = ({}: Props): React.ReactNode => {

    const { data: animeList, isLoading, error } = useQuery({
        queryKey: ['anime', 'ongoing', 1],
        queryFn: () => {
            return selectNewAnime()
        },
        staleTime: 1000 * 60 * 5,
    });


    return (
        <div className="min-h-screen bg-neutral-900 text-white">
            <section className="mx-auto max-w-6xl px-6 py-10">
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                        Новое на сайте
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {animeList?.map((anime) => (
                        <AnimeRowCard key={anime.id}
                                   name={anime.name.main}
                                   poster={anime.poster.src}
                                   year={anime.year}
                                   latest_episode={anime.latest_episode.ordinal}
                                   genres={anime.genres}
                                   rating={anime.shikimori.rating}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
};