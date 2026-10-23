import * as React from "react";
interface Props {}

export const AnimeOnIdSkeleton = ({}: Props) : React.ReactNode => {
    return (
        <div className={'flex flex-col items-center justify-center'} >
                <span className={'text-3xl'} > У анилибрии нету такой озвучки </span>
            </div>)
}