type Poster = {
    id: string;
    originalUrl: string;
    mainUrl: string;
};

type AiredOn = {
    year: number;
    month: number;
    day: number;
    date: string;
};

export type Genre = {
    id: string;
    name: string;
    russian: string;
    kind: "genre" | "theme" | "demographic" | string;
};

export type NewAnime = {
    id: string;
    malId: string;
    name: string;
    russian: string;
    english: string | null;
    synonyms: string[];
    rating: string;
    score: number;
    status: "released" | "ongoing" | "anons" | string;
    episodes: number;
    episodesAired: number;
    duration: number;
    airedOn: AiredOn;
    releasedOn: AiredOn | null;
    season: string;
    poster: Poster;
    fandubbers: string[];
    licensors: string[];
    genres: Genre[];
    description: string | null;
    nextEpisodeAt: string | null;
    createdAt: string;
    updatedAt: string;
};

export type AnimesResponse = {
    data: {
        animes: NewAnime[];
    };
};