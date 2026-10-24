import React from "react";
import {Link, useLocation} from "react-router";

interface AuthLayoutProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
    footer: React.ReactNode;
}

const AuthLayout: React.FC<AuthLayoutProps> = ({
                                                   title,
                                                   subtitle,
                                                   children,
                                                   footer,
                                               }) => {
    const { pathname } = useLocation();

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0d0f] text-neutral-100 px-5 py-8 font-sans">
            {/* фон с подсветкой */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background:
                        "radial-gradient(900px 500px at 85% -10%, rgba(230,57,70,0.18), transparent 60%), radial-gradient(700px 500px at 10% 110%, rgba(230,57,70,0.10), transparent 60%), linear-gradient(180deg,#0d0d0f 0%,#0a0a0c 100%)",
                }}
            />
            {/* точки-текстура */}
            <div
                className="absolute inset-0 z-0 opacity-60"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.03) 1px, transparent 1px), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.02) 1px, transparent 1px)",
                    backgroundSize: "40px 40px, 60px 60px",
                }}
            />

            <div className="relative z-10 w-full max-w-5xl">
                <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden border border-neutral-800 bg-[#16161a] shadow-[0_30px_80px_rgba(0,0,0,0.5)]">
                    {/* ЛЕВАЯ ЧАСТЬ — ФОРМА */}
                    <div className="p-8 md:p-11 flex flex-col">
                        <Link
                            to="/"
                            className="w-fit text-lg font-bold tracking-wide text-neutral-100 no-underline mb-7"
                        >
                            Diana Anime
                            <span className="block w-9 h-0.5 bg-[#e63946] rounded mt-1.5" />
                        </Link>

                        <div className="inline-flex w-fit p-1 mb-6 rounded-[10px] border border-neutral-800 bg-[#1c1c22]">
                            <Link
                                to="/login"
                                className={`px-[18px] py-2 rounded-md text-sm transition-all ${
                                    pathname === "/login"
                                        ? "bg-[#e63946] text-white shadow-[0_4px_14px_rgba(230,57,70,0.35)]"
                                        : "text-neutral-400 hover:text-neutral-100"
                                }`}
                            >
                                Вход
                            </Link>
                            <Link
                                to="/register"
                                className={`px-[18px] py-2 rounded-md text-sm transition-all ${
                                    pathname === "/register"
                                        ? "bg-[#e63946] text-white shadow-[0_4px_14px_rgba(230,57,70,0.35)]"
                                        : "text-neutral-400 hover:text-neutral-100"
                                }`}
                            >
                                Регистрация
                            </Link>
                        </div>

                        <h1 className="text-[28px] font-bold m-0 mb-2">
                            {title}
                        </h1>
                        <p className="text-sm text-neutral-400 m-0 mb-7">
                            {subtitle}
                        </p>

                        <div className="flex flex-col gap-4">{children}</div>

                        <div className="mt-7 text-sm text-neutral-400">
                            {footer}
                        </div>
                    </div>

                    {/* ПРАВАЯ ЧАСТЬ — ИЛЛЮСТРАЦИЯ */}
                    <div className="relative hidden md:flex items-end justify-center overflow-hidden bg-gradient-to-br from-[#1a1216] via-[#141418] to-[#0f0f12]">
                        {/* красное свечение за персонажем */}
                        <div
                            className="absolute w-[520px] h-[520px] rounded-full blur-3xl top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                            style={{
                                background:
                                    "radial-gradient(circle, rgba(230,57,70,0.35) 0%, rgba(230,57,70,0.08) 40%, transparent 70%)",
                            }}
                        />
                        {/* декоративный круг */}
                        <div className="absolute top-10 right-10 w-24 h-24 border border-[#e63946]/30 rounded-full" />
                        <div className="absolute top-16 right-16 w-14 h-14 border border-[#e63946]/50 rounded-full" />
                        {/* японский иероглиф-акцент */}
                        <div className="absolute top-8 left-8 text-6xl font-bold text-[#e63946]/15 select-none">
                            夢
                        </div>

                        <img
                            src={'/amoMy.png'}
                            alt="Diana Anime"
                            className="relative z-10 h-[85%] w-auto object-contain object-bottom drop-shadow-[0_20px_40px_rgba(230,57,70,0.25)]"
                        />

                        {/* подпись снизу */}
                        <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-[#0d0d0f] via-[#0d0d0f]/80 to-transparent">
                            <div className="flex flex-col gap-1">
                                <span className="text-[#e63946] text-sm tracking-wider">
                                    「 Добро пожаловать домой 」
                                </span>
                                <span className="text-neutral-400 text-xs">
                                    Погрузись в мир аниме вместе с нами
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;