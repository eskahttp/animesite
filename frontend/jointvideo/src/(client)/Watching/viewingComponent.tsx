import {Maximize, Minus, Pause, Play, Send, Settings, SkipForward, Smile, Subtitles, Volume2} from "lucide-react";
import {useParams} from "react-router";

interface Props {}

export const ViewingComponent = ({}: Props) : React.ReactNode => {

    const { room } = useParams()

    return (<div className="min-h-screen bg-neutral-900 text-neutral-100 font-sans">
        <main className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <section className="lg:col-span-2 flex flex-col gap-4">
                <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/5 aspect-video group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/40 via-neutral-900 to-rose-900/40 flex items-center justify-center">
                        <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center cursor-pointer hover:bg-white/20 transition">
                            <Play size={32} fill="white" className="ml-1" />
                        </div>
                    </div>

                    <div className="absolute top-0 left-0 right-0 p-4 bg-gradient-to-b from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition">
                        <p className="text-sm font-medium">
                            Атака Титанов · Эпизод 12
                        </p>
                        <p className="text-xs text-neutral-300">
                            Озвучка: AniLibria · 1080p
                        </p>
                    </div>

                    {/* контролы снизу */}
                    <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition">
                        {/* прогресс */}
                        <div className="h-1 rounded-full bg-white/20 overflow-hidden mb-3 cursor-pointer">
                            <div className="h-full w-1/4 bg-rose-500 rounded-full" />
                        </div>

                        <div className="flex items-center justify-between text-white">
                            <div className="flex items-center gap-4">
                                <button className="hover:text-rose-400 transition">
                                    <Pause size={20} />
                                </button>
                                <button className="hover:text-rose-400 transition">
                                    <SkipForward size={20} />
                                </button>
                                <div className="flex items-center gap-2">
                                    <Volume2 size={18} />
                                    <div className="w-20 h-1 bg-white/20 rounded-full">
                                        <div className="w-2/3 h-full bg-white rounded-full" />
                                    </div>
                                </div>
                                <span className="text-xs text-neutral-200">
                    05:32 / 23:40
                  </span>
                            </div>

                            <div className="flex items-center gap-3">
                                <button className="hover:text-rose-400 transition">
                                    <Subtitles size={18} />
                                </button>
                                <button className="hover:text-rose-400 transition">
                                    <Settings size={18} />
                                </button>
                                <button className="hover:text-rose-400 transition">
                                    <Maximize size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* инфо под плеером */}
                <div className="bg-neutral-800/80 rounded-2xl p-5 border border-white/5">
                    <div className="flex items-start justify-between">
                        <div>
                            <h2 className="text-xl font-bold">Атака Титанов</h2>
                            <p className="text-sm text-neutral-400 mt-1">
                                Сезон 4 · Эпизод 12 · 2023
                            </p>
                        </div>
                        <div className="flex gap-2">
                <span className="px-2 py-1 rounded-md bg-rose-500/20 text-rose-300 text-xs">
                  TV
                </span>
                            <span className="px-2 py-1 rounded-md bg-indigo-500/20 text-indigo-300 text-xs">
                  9.1
                </span>
                        </div>
                    </div>
                    <p className="text-sm text-neutral-300 mt-3 leading-relaxed">
                        Человечество живёт за высокими стенами, скрываясь от титанов... {room}
                    </p>
                </div>
            </section>

            <aside className="bg-neutral-800/80 backdrop-blur rounded-2xl shadow-xl border border-white/5 flex flex-col overflow-hidden h-[700px]">
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-neutral-800">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <h3 className="font-semibold text-sm">Общий чат</h3>
                        <span className="text-xs text-neutral-500">· 128 онлайн</span>
                    </div>
                    <button className="w-7 h-7 rounded-md hover:bg-white/10 flex items-center justify-center transition text-neutral-400 hover:text-white">
                        <Minus size={16} />
                    </button>
                </div>

                <div className="flex-1 p-4 space-y-3 overflow-y-auto">
                    <div className="text-sm leading-snug">
                        <span className={'font-semibold text-rose-400'}>Kaito: </span>
                        <span className="text-neutral-200">Кто уже смотрел новый эпизод?</span>
                    </div>
                </div>

                <div className="p-3 border-t border-white/5 bg-neutral-800">
                    <div className="flex items-center gap-2 bg-neutral-900 rounded-lg px-3 py-2">
                        <button className="text-neutral-400 hover:text-white transition">
                            <Smile size={18} />
                        </button>
                        <input
                            type="text"
                            placeholder="Написать сообщение..."
                            className="flex-1 bg-transparent outline-none text-sm placeholder:text-neutral-500"
                        />
                        <button className="text-rose-400 hover:text-rose-300 transition">
                            <Send size={18} />
                        </button>
                    </div>
                </div>
            </aside>
        </main>
    </div>)
}