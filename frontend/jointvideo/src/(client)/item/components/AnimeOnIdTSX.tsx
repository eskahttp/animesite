import { MediaPlayer, MediaProvider } from '@vidstack/react';
import {
    defaultLayoutIcons,
    DefaultVideoLayout,
} from '@vidstack/react/player/layouts/default';

import '@vidstack/react/player/styles/default/theme.css';
import '@vidstack/react/player/styles/default/layouts/video.css';

export const AnimeOnIdTSX = () => {
    return (
        <MediaPlayer
            src={{
                src: 'https://cache.libria.fun/videos/media/ts/8674/1/1080/36903d35f45db3c8a97238f02d3eabc8.m3u8?countryIso=DK&isAuthorized=0&isWithVideoAds=1&isWithVideoAdsAlways=1',
                type: 'application/x-mpegurl',
            }}
            playsInline
        >
            <MediaProvider />
            <DefaultVideoLayout icons={defaultLayoutIcons} />
        </MediaPlayer>
    );
};