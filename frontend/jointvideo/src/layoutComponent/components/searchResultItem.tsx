import * as React from "react";
import type {AnimeSearchType} from "./searchAnimeForm.tsx";
import {Link} from "react-router";

interface Props {
    anime: AnimeSearchType;
}

export const SearchResultItem = ({ anime }: Props): React.ReactNode => {
    const title = anime.russian || anime.name;
    const subtitle = anime.english || (anime.russian ? anime.name : "");
    const year = anime.airedOn?.year;

    return (
        <li>
            <Link
                to={`/item/${anime.id}`}
                className="flex items-center gap-3 px-3 py-2.5
                           hover:bg-white/5 border-b border-white/5 last:border-b-0
                           transition-colors cursor-pointer group"
            >
                <div
                    className="shrink-0 w-12 h-16 rounded-md overflow-hidden
                               bg-neutral-800 border border-white/5"
                >
                    {anime.poster?.mainUrl ? (
                        <img
                            src={anime.poster.mainUrl}
                            alt={title}
                            loading="lazy"
                            className="w-full h-full object-cover
                                       group-hover:scale-105 transition-transform duration-300"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center text-[10px] text-neutral-600">
                            no img
                        </div>
                    )}
                </div>

                <div className="min-w-0 flex-1">
                    <div className="text-sm font-medium text-neutral-100 truncate group-hover:text-rose-400 transition-colors">
                        {title}
                    </div>
                    {subtitle && (
                        <div className="text-xs text-neutral-400 truncate mt-0.5">
                            {subtitle}
                        </div>
                    )}
                </div>

                {year && (
                    <span
                        className="shrink-0 text-xs text-neutral-500 bg-white/5
                                   px-2 py-0.5 rounded-md border border-white/5"
                    >
                        {year}
                    </span>
                )}
            </Link>
        </li>
    );
};