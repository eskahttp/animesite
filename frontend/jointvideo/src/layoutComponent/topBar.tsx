import {BarChart2, Home, List, LogIn, UserPlus, Users} from "lucide-react";
import {NavLink} from "react-router";

interface Props {}

export const TopBar = ({}: Props) : React.ReactNode => {

    const linkClass = ({ isActive }: { isActive: boolean }) =>
        `relative flex items-center gap-2 uppercase tracking-wide transition-colors
     ${isActive ? 'text-white' : 'text-neutral-300 hover:text-white'}
     after:absolute after:left-1/2 after:-translate-x-1/2 after:-top-[18px]
     after:w-0 after:h-0
     after:border-l-[6px] after:border-r-[6px] after:border-t-[6px]
     after:border-l-transparent after:border-r-transparent
     ${isActive ? 'after:border-t-rose-500' : 'after:border-t-transparent'}`

    return (<div className={'bg-neutral-900 text-neutral-100 font-sans'} >
        <section
            className="relative w-full h-[220px] bg-cover bg-center"
            style={{
                backgroundImage: "url(/backsite.png)",
            }}
        >
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-neutral-900" />

            <div className="absolute top-5 right-6 flex gap-3 z-10">
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition text-sm">
                    <LogIn size={16} />
                    Вход
                </button>
                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-rose-500/90 hover:bg-rose-500 transition text-sm font-medium shadow-lg shadow-rose-500/30">
                    <UserPlus size={16} />
                    Регистрация
                </button>
            </div>

            <div className="absolute bottom-6 left-10 z-10">
                <h1 className="text-3xl font-bold drop-shadow-lg">AniWave</h1>
                <p className="text-neutral-200 text-xs mt-1 drop-shadow">
                    Твоя волна аниме
                </p>
            </div>
        </section>

        <nav className="relative bg-neutral-800 border-t-2 border-rose-500">
            <div className="flex items-center gap-10 py-4 justify-end pr-10 text-sm font-medium">
                <NavLink to="/" className={linkClass}>
                    <Home size={16} /> Главная
                </NavLink>
                <NavLink to="/anime" className={linkClass}>
                    <List size={16} /> Аниме
                </NavLink>
                <NavLink to="/films" className={linkClass}>
                    <BarChart2 size={16} /> Фильмы
                </NavLink>
                <NavLink to="/viewing/1" className={linkClass}>
                    <Users size={16} /> Просмотр
                </NavLink>
            </div>
        </nav>
    </div>)
}