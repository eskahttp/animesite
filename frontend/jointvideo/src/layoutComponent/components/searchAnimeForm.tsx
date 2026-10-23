import * as React from "react";
import { useEffect, useRef, useState } from "react";
import { SearchAnimeAction } from "./searchanimeaction/searchAnimeAction.ts";
import { SearchAnimeFormView } from "./SearchAnimeFormView.tsx";

export type AnimeSearchType = {
    id: string;
    name: string;
    russian: string;
    english: string;
    airedOn: {
        year: number;
    };
    poster: {
        id: string;
        mainUrl: string;
    };
};

export const SearchAnimeForm = (): React.ReactNode => {
    const [inputValue, setInputValue] = useState<string>("");
    const [animeArray, setAnimeArray] = useState<AnimeSearchType[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const query = inputValue.trim();

        if (!query) {
            setAnimeArray([]);
            setIsLoading(false);
            return;
        }

        setIsLoading(true);
        const debounceFn = setTimeout(async () => {
            try {
                const result = await SearchAnimeAction(query);
                setAnimeArray(result ?? []);
                setIsOpen(true);
            } finally {
                setIsLoading(false);
            }
        }, 600);

        return () => clearTimeout(debounceFn);
    }, [inputValue]);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(e.target as Node)
            ) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleChange = (value: string) => setInputValue(value);

    const handleFocus = () => {
        if (inputValue) setIsOpen(true);
    };

    const handleClear = () => {
        setInputValue("");
        setAnimeArray([]);
        setIsOpen(false);
    };

    return (
        <SearchAnimeFormView
            containerRef={containerRef}
            inputValue={inputValue}
            animeArray={animeArray}
            isOpen={isOpen && inputValue.trim().length > 0}
            isLoading={isLoading}
            onChange={handleChange}
            onFocus={handleFocus}
            onClear={handleClear}
        />
    );
};