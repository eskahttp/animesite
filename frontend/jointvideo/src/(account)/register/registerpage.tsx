import React from "react";
import { Link } from "react-router";
import AuthLayout from "../accountlayout/authlayout.tsx";

const inputCls =
    "w-full bg-[#1c1c22] border border-neutral-800 rounded-[10px] px-3.5 py-3 text-sm text-neutral-100 placeholder:text-neutral-600 outline-none transition-all focus:border-[#e63946] focus:ring-2 focus:ring-[#e63946]/20";

const labelCls =
    "text-[12px] text-neutral-400 uppercase tracking-[0.6px]";

const RegisterPage: React.FC = () => {
    return (
        <AuthLayout
            title="Создать аккаунт"
            subtitle="Присоединяйся и начни собирать свою коллекцию аниме"
            footer={
                <>
                    Уже есть аккаунт?{" "}
                    <Link
                        to="/login"
                        className="text-[#e63946] hover:text-[#ff4d5c] font-medium"
                    >
                        Войти
                    </Link>
                </>
            }
        >
            <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Имя пользователя</span>
                <input
                    type="text"
                    placeholder="Твой ник"
                    className={inputCls}
                />
            </label>

            <label className="flex flex-col gap-1.5">
                <span className={labelCls}>Email</span>
                <input
                    type="email"
                    placeholder="example@mail.com"
                    className={inputCls}
                />
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="flex flex-col gap-1.5">
                    <span className={labelCls}>Пароль</span>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className={inputCls}
                    />
                </label>
                <label className="flex flex-col gap-1.5">
                    <span className={labelCls}>Повтор пароля</span>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className={inputCls}
                    />
                </label>
            </div>

            <label className="flex items-start gap-2 cursor-pointer text-sm text-neutral-300">
                <input
                    type="checkbox"
                    className="w-4 h-4 mt-0.5 accent-[#e63946] cursor-pointer"
                />
                <span>
                    Я согласен с{" "}
                    <Link
                        to="/terms"
                        className="text-[#e63946] hover:text-[#ff4d5c]"
                    >
                        условиями
                    </Link>{" "}
                    и{" "}
                    <Link
                        to="/privacy"
                        className="text-[#e63946] hover:text-[#ff4d5c]"
                    >
                        политикой конфиденциальности
                    </Link>
                </span>
            </label>

            <button
                type="button"
                className="mt-2 w-full py-3 rounded-[10px] bg-[#e63946] hover:bg-[#ff4d5c] text-white font-semibold text-sm transition-all shadow-[0_8px_24px_rgba(230,57,70,0.35)] hover:shadow-[0_12px_32px_rgba(230,57,70,0.45)] active:scale-[0.98]"
            >
                Зарегистрироваться
            </button>
        </AuthLayout>
    );
};

export default RegisterPage;