import { Search, Loader2, X } from "lucide-react";
import * as React from "react";
import type {AnimeSearchType} from "./searchAnimeForm.tsx";
import {SearchResultItem} from "./searchResultItem.tsx";



interface Props {
    containerRef: React.RefObject<HTMLDivElement | null>;
    inputValue: string;
    animeArray: AnimeSearchType[];
    isOpen: boolean;
    isLoading: boolean;
    onChange: (value: string) => void;
    onFocus: () => void;
    onClear: () => void;
}

export const SearchAnimeFormView = ({
                                        containerRef,
                                        inputValue,
                                        animeArray,
                                        isOpen,
                                        isLoading,
                                        onChange,
                                        onFocus,
                                        onClear,
                                    }: Props): React.ReactNode => {
    return (
        <div ref={containerRef} className="ml-auto relative w-full max-w-sm">
            <Search
                size={16}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none z-10"
            />

            <input
                type="text"
                value={inputValue}
                onChange={(e) => onChange(e.target.value)}
                onFocus={onFocus}
                placeholder="Поиск аниме..."
                className="w-full pl-9 pr-9 py-2 rounded-lg bg-neutral-900/70 border border-white/10
                           text-sm text-neutral-100 placeholder:text-neutral-500
                           focus:outline-none focus:border-rose-500/60 focus:bg-neutral-900
                           transition"
            />

            {inputValue && (
                <button
                    type="button"
                    onClick={onClear}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-md
                               text-neutral-400 hover:text-neutral-100 hover:bg-white/5 transition"
                >
                    {isLoading ? (
                        <Loader2 size={14} className="animate-spin" />
                    ) : (
                        <X size={14} />
                    )}
                </button>
            )}

            {isOpen && (
                <div
                    className="absolute left-0 right-0 top-full mt-2 z-50
                               rounded-xl border border-white/10 bg-neutral-900/95 backdrop-blur-xl
                               shadow-2xl shadow-black/50 overflow-hidden"
                >
                    {isLoading && animeArray.length === 0 ? (
                        <div className="flex items-center justify-center gap-2 py-6 text-sm text-neutral-400">
                            <Loader2 size={16} className="animate-spin" />
                            Поиск...
                        </div>
                    ) : animeArray.length === 0 ? (
                        <div className="py-6 text-center text-sm text-neutral-500">
                            Ничего не найдено
                        </div>
                    ) : (
                        <ul className="max-h-96 overflow-y-auto">
                            {animeArray.map((anime) => (
                                <SearchResultItem key={anime.id} anime={anime} />
                            ))}
                        </ul>
                    )}
                </div>
            )}
        </div>
    );
};