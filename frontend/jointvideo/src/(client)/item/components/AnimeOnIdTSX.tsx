import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';
import {useEffect, useState} from 'react';

interface Episode {
    hls_480: string;
    hls_720: string;
    hls_1080: string;
    id: string;
    name: string;
}

interface Props {
    episodes: Episode[] | undefined;
}

export const AnimeOnIdTSX = ({ episodes }: Props) => {
    const [mediaSrc, setMediaSrc] = useState<string>('https://cdn.jwplayer.com/manifests/pZxWPRg4.m3u8');
    const [activeId, setActiveId] = useState<string | null>(
        episodes?.[0]?.id ?? null
    );

    useEffect(() => {
        if (!episodes) return;
        setMediaSrc(episodes[0].hls_1080 || episodes[0].hls_720 || episodes[0].hls_480);
    }, []);

    const handleSelect = (ep: Episode) => {
        setActiveId(ep.id);
        setMediaSrc(ep.hls_1080 || ep.hls_720 || ep.hls_480);
    };

    return (
        <div className="w-full">
            <div className="flex flex-wrap gap-2 mb-3">
                {episodes?.map((episode, index) => {
                    const isActive = activeId === episode.id;
                    return (
                        <button
                            key={episode.id}
                            onClick={() => handleSelect(episode)}
                            className={[
                                'min-w-[40px] h-10 px-3 rounded-lg text-sm font-semibold',
                                'flex items-center justify-center select-none',
                                'transition-all duration-200 ease-out',
                                'focus:outline-none focus:ring-2 focus:ring-emerald-400/60 hover:cursor-pointer ',
                                isActive
                                    ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30 scale-105'
                                    : 'bg-neutral-800 text-neutral-200 hover:bg-neutral-700 hover:text-white',
                            ].join(' ')}
                            title={episode.name}
                        >
                            {index + 1}
                        </button>
                    );
                })}
            </div>

            <MediaPlayer
                src={{
                    src: mediaSrc,
                    type: 'application/x-mpegurl',
                }}
                playsInline
            >
                <MediaProvider />
                <DefaultVideoLayout icons={defaultLayoutIcons} />
            </MediaPlayer>
        </div>
    );
};