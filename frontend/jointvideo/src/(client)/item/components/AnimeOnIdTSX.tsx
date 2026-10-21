import {
    Maximize, Pause, Play, Settings, SkipForward, Subtitles, Volume2,
} from "lucide-react";
import type { NewAnime } from "../../MainPage/types/NewAnimeTypes.ts";

interface Props {
    anime?: NewAnime;
}

export const AnimeOnIdTSX = ({ anime }: Props): React.ReactNode => {
    return (
        <div className="flex flex-col gap-4">
            <VideoPlayer />
            <EpisodeInfoCard anime={anime} />
        </div>
    );
};

/* ---------- Плеер ---------- */

const VideoPlayer = (): React.ReactNode => (
    <div className="relative bg-black rounded-xl overflow-hidden shadow-2xl border border-white/5 aspect-video group">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-neutral-900 to-rose-900/40 flex items-center justify-center">
            <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition">
                <Play size={32} fill="white" className="ml-1" />
            </button>
        </div>

        <PlayerTopBar />
        <PlayerControls />
    </div>
);

const PlayerTopBar = (): React.ReactNode => (
    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
        <p className="text-sm font-medium">Атака Титанов · Эпизод 12</p>
        <p className="text-xs text-neutral-300">Озвучка: AniLibria · 1080p</p>
    </div>
);

const PlayerControls = (): React.ReactNode => (
    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
        <div className="h-1 rounded-full bg-white/20 overflow-hidden mb-3 cursor-pointer">
            <div className="h-full w-1/4 bg-rose-500 rounded-full" />
        </div>

        <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
                <button className="hover:text-rose-400 transition"><Pause size={20} /></button>
                <button className="hover:text-rose-400 transition"><SkipForward size={20} /></button>
                <div className="flex items-center gap-2">
                    <Volume2 size={18} />
                    <div className="w-20 h-1 bg-white/20 rounded-full">
                        <div className="w-2/3 h-full bg-white rounded-full" />
                    </div>
                </div>
                <span className="text-xs text-neutral-200">05:32 / 23:40</span>
            </div>

            <div className="flex items-center gap-3">
                <button className="hover:text-rose-400 transition"><Subtitles size={18} /></button>
                <button className="hover:text-rose-400 transition"><Settings size={18} /></button>
                <button className="hover:text-rose-400 transition"><Maximize size={18} /></button>
            </div>
        </div>
    </div>
);

/* ---------- Карточка эпизода ---------- */

const EpisodeInfoCard = ({ anime }: { anime?: NewAnime }): React.ReactNode => (
    // ⬇️ без собственного фона — чтобы не было «карточка в карточке».
    // Если хочешь выделить — поменяй на bg-neutral-900/40
    <div className="rounded-xl p-5 border border-white/5">
        <div className="flex items-start justify-between">
            <div>
                <h2 className="text-xl font-bold">
                    {anime?.russian ?? "Атака Титанов"}
                </h2>
                <p className="text-sm text-neutral-400 mt-1">
                    Сезон 4 · Эпизод 12 · 2023
                </p>
            </div>
            <div className="flex gap-2">
                <span className="px-2 py-1 rounded-md bg-rose-500/20 text-rose-300 text-xs">TV</span>
                <span className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs">9.1</span>
            </div>
        </div>
    </div>
);