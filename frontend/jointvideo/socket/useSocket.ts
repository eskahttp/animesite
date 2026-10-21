// useSocket.ts
import { useEffect } from "react";
import {socket} from "./socket.ts";

export const useSocket = () => {
    useEffect(() => {
        socket.connect();
        return () => { socket.disconnect(); };
    }, []);
    return socket;
};