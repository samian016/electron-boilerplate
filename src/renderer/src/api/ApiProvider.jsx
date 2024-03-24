import React, { createContext, useContext } from 'react';
import Api from './api';
import { io } from 'socket.io-client';

const api = createContext();
class Station {
    constructor({ serverUrl = 'http://localhost:4000/v1', socketUrl = 'http://localhost:4000' }) {
        this.apiHandler = new Api(serverUrl);
        this.socket = io(socketUrl, {
            withCredentials: true,
            autoConnect: false
        });
    };
    api(...args) {
        return this.apiHandler.entry(...args);
    }
};

export function ApiProvider({ children }) {
    return (
        <api.Provider value={new Station({ serverUrl: import.meta.env.RENDERER_VITE_SERVER_URL, socketUrl: import.meta.env.RENDERER_VITE_APP_SOCKET_URL })}>
            {children}
        </api.Provider>
    );
}

export const useApiCtx = () => useContext(api);