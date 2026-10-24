import React from "react";
import { Link } from "react-router";
import AuthLayout from "../accountlayout/authlayout.tsx";


const inputCls =
    "w-full bg-[#1c1c22] border border-neutral-800 rounded-[10px] px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-all focus:border-[#e63946] focus:ring-2 focus:ring-[#e63946]/20";

const labelCls =
    "text-[12px] text-neutral-400 uppercase tracking-[0.6px]";

const LoginPage: React.FC = () => {
    return (
        <AuthLayout
            title="С возвращением"
            subtitle="Войди в аккаунт, чтобы продолжить просмотр"
            footer={
                <>
                    Нет аккаунта?{" "}
                    <Link
                        to="/register"
                        className="text-[#e63946] hover:text-[#ff4d5c] font-medium"
                    >
                        Создать
                    </Link>
                </>
            }
        >
            <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Email или логин</span>
                <input
                    type="text"
                    placeholder="example@mail.com"
                    className={inputCls}
                />
            </label>

            <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Пароль</span>
                <input
                    type="password"
                    placeholder="••••••••"
                    className={inputCls}
                />
            </label>

            <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer text-neutral-300">
                    <input
                        type="checkbox"
                        className="w-4 h-4 accent-[#e63946] cursor-pointer"
                    />
                    <span>Запомнить меня</span>
                </label>
                <Link
                    to="/forgot"
                    className="text-[#e63946] hover:text-[#ff4d5c] text-xs"
                >
                    Забыли пароль?
                </Link>
            </div>

            <button
                type="button"
                className="mt-2 w-full py-3 rounded-[10px] bg-[#e63946] hover:bg-[#ff4d5c] text-white font-semibold text-sm transition-all shadow-[0_8px_24px_rgba(230,57,70,0.35)] hover:shadow-[0_12px_32px_rgba(230,57,70,0.45)] active:scale-[0.98]"
            >
                Войти
            </button>
        </AuthLayout>
    );
};

export default LoginPage;