type Poster = {
    src: string;
    preview: string;
    thumbnail: string;
    optimized: {
        src: string;
        preview: string;
        thumbnail: string;
    }
}

export type NewAnime = {
    id: number;
    year: number;
    name:{
        main: string;
        english: string;
        alternative: string | null;
    }
    poster: Poster;
    shikimori:{
        id: number;
        url: string;
        votes: number;
        rating: number;
    }
    genres: {
        id: number;
        name: string;
    }[]
    latest_episode: {
        id: string;
        name: string;
        ordinal: number;
    }
}

export type WatchAnime = {
    id: number;
    year: number;
    name:{
        main: string;
        english: string;
        alternative: string | null;
    }
    poster: Poster;
    is_ongoing: boolean;
    shikimori:{
        id: number;
        url: string;
        votes: number;
        rating: number;
    }
    genres: {
        id: number;
        name: string;
    }[]
}