import { Pencil, QrCode, Heart, Gift, Bug, Maximize2 } from "lucide-react";

interface Poster { id: string; originalUrl: string; mainUrl: string; }
interface Genre { id: string; name: string; russian: string; kind: string; }

export interface Anime {
    id: string;
    malId: string;
    name: string;
    russian: string;
    english: string | null;
    synonyms: string[];
    rating: string;
    score: number;
    status: string;
    episodes: number;
    episodesAired: number;
    duration: number;
    poster: Poster | null;
    fandubbers: string[];
    genres: Genre[];
    description: string | null;
}

const STATUS_MAP: Record<string, { label: string; className: string }> = {
    anons: { label: "анонс", className: "bg-rose-500/20 text-rose-300" },
    ongoing: { label: "онгоинг", className: "bg-emerald-500/20 text-emerald-300" },
    released: { label: "вышло", className: "bg-sky-500/20 text-sky-300" },
    paused: { label: "приостановлено", className: "bg-amber-500/20 text-amber-300" },
    discontinued: { label: "прекращено", className: "bg-neutral-500/20 text-neutral-300" },
};

const RATING_MAP: Record<string, string> = {
    g: "G", pg: "PG", pg_13: "PG-13", r: "R-17", r_plus: "R+", rx: "Rx",
};

const ICON_BTNS = [Pencil, QrCode, Heart];

const cleanDescription = (text: string | null | undefined): string =>
    (text ?? "").replace(/\[character=\d+\](.*?)\[\/character\]/g, "$1");

const Chip = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
    <span className={`px-2 py-0.5 rounded-md text-xs ${className}`}>{children}</span>
);

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
    <>
        <dt className="text-neutral-300 font-medium">{label}</dt>
        <dd className="text-neutral-200">{children}</dd>
    </>
);

export const AnimeInfoHeader = ({ anime }: { anime: Anime}): React.ReactNode => {

    const status = STATUS_MAP[anime.status];
    const rating = RATING_MAP[anime.rating] ?? anime.rating?.toUpperCase();
    const genres = (anime.genres ?? []).filter((g) => g.kind === "genre" || g.kind === "theme");
    const demographic = (anime.genres ?? []).find((g) => g.kind === "demographic");
    const descParagraphs = cleanDescription(anime.description)
        .split("\n").map((p) => p.trim()).filter(Boolean);

    return (
                    <div className="flex flex-col md:flex-row gap-6">
                        {/* ПОСТЕР */}
                        <div className="flex-shrink-0 w-full md:w-64">
                            <div className="relative rounded-xl overflow-hidden border border-white/10 bg-neutral-900">
                                {anime.poster?.mainUrl && (
                                    <img
                                        src={anime.poster.mainUrl}
                                        alt={anime.russian || anime.name}
                                        className="w-full h-auto object-cover aspect-[3/4]"
                                    />
                                )}
                                <button className="absolute top-2 right-2 w-9 h-9 rounded-md bg-emerald-600/90 hover:bg-emerald-500 flex items-center justify-center transition">
                                    <Maximize2 size={16} className="text-white" />
                                </button>
                                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/90 to-transparent">
                                    <p className="text-[11px] text-rose-300 text-center leading-tight">
                                        Зарегистрируйтесь, чтобы<br />добавить аниме в свои списки
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between mt-3 px-7">
                                {ICON_BTNS.map((Icon, i) => (
                                    <button key={i} className="w-9 h-9 rounded-md bg-neutral-700/60 hover:bg-neutral-600 flex items-center justify-center transition">
                                        <Icon size={16} className="text-neutral-200" />
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* ДАННЫЕ */}
                        <div className="flex-1 min-w-0">
                            <h1 className="text-2xl md:text-3xl font-bold text-neutral-50 leading-tight">
                                {anime.russian || anime.name}
                            </h1>

                            <div className="flex flex-wrap gap-2 mt-3">
                                {[anime.english, anime.name !== anime.english ? anime.name : null]
                                    .filter(Boolean).map((t) => (
                                        <span key={t as string} className="px-3 py-1 rounded-md bg-neutral-700/60 text-neutral-200 text-sm">
                                            {t}
                                        </span>
                                    ))}
                                {anime.synonyms?.length > 0 && (
                                    <span title={anime.synonyms.join(", ")}
                                          className="px-3 py-1 rounded-md bg-neutral-700/60 text-neutral-200 text-sm cursor-pointer hover:bg-neutral-600 transition">
                                        ...
                                    </span>
                                )}
                            </div>

                            <div className="flex items-center gap-2 mt-4">
                                <span className="px-3 py-1 rounded-md bg-neutral-100 text-neutral-900 text-sm font-semibold flex items-center gap-1">
                                    <span className="text-rose-500">京</span>{anime.score?.toFixed(2)}
                                </span>
                                <a href={`https://myanimelist.net/anime/${anime.malId}`} target="_blank" rel="noreferrer"
                                   className="px-3 py-1 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold transition">
                                    MAL
                                </a>
                            </div>

                            <dl className="mt-5 grid grid-cols-[150px_1fr] gap-y-2 text-sm">
                                {status && (
                                    <Row label="Статус:">
                                        <Chip className={status.className}>{status.label}</Chip>
                                    </Row>
                                )}
                                <Row label="Тип:">Movie</Row>
                                {rating && (
                                    <Row label="Возрастной рейтинг:">
                                        <Chip className="border border-yellow-500/60 text-yellow-400">{rating}</Chip>
                                    </Row>
                                )}
                                {genres.length > 0 && (
                                    <Row label="Жанры:">
                                        <div className="flex flex-wrap gap-1.5">
                                            {genres.map((g) => (
                                                <Chip key={g.id} className="bg-neutral-700/70 text-neutral-200">
                                                    {g.russian || g.name}
                                                </Chip>
                                            ))}
                                        </div>
                                    </Row>
                                )}
                                {demographic && (
                                    <Row label="Аудитория:">{demographic.russian || demographic.name}</Row>
                                )}
                                {!!anime.episodes && (
                                    <Row label="Количество серий:">
                                        {anime.episodesAired > 0 && anime.episodesAired !== anime.episodes
                                            ? `${anime.episodesAired} / ${anime.episodes}` : anime.episodes}
                                    </Row>
                                )}
                                {!!anime.duration && <Row label="Длительность:">{anime.duration} мин.</Row>}
                                {anime.fandubbers?.length > 0 && (
                                    <Row label="Озвучки:">
                                        <div className="flex flex-wrap gap-1.5">
                                            {anime.fandubbers.map((f) => (
                                                <Chip key={f} className="bg-neutral-700/70 text-neutral-200">{f}</Chip>
                                            ))}
                                        </div>
                                    </Row>
                                )}
                            </dl>

                            {descParagraphs.length > 0 && (
                                <div className="mt-5 space-y-3">
                                    {descParagraphs.map((p, i) => (
                                        <p key={i} className="text-sm text-neutral-300 leading-relaxed">{p}</p>
                                    ))}
                                </div>
                            )}

                            <button className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium transition">
                                Порядок просмотра
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <polyline points="6 9 12 15 18 9" />
                                </svg>
                            </button>
                        </div>
                    </div>
    );
};