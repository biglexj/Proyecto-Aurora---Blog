//Rutas

import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        lazy: async () => {
            const { default: Home } = await import("./pages/Home");
            return { Component: Home };
        },
    },
    {
        path: "/login",
        lazy: async () => {
            const { default: Login } = await import("./modules/Auth/login/login");
            return { Component: Login };
        },
    },
    {
        path: "/register",
        lazy: async () => {
            const { default: Register } = await import("./modules/Auth/register/register");
            return { Component: Register };
        },
    },
    {
        path: "/terminos-y-condiciones",
        lazy: async () => {
            const { default: Terms } = await import("./modules/Terms");
            return { Component: Terms };
        },
    },
    {
        path: "/bj-producciones",
        lazy: async () => {
            const { default: BJProducciones } = await import("./pages/bj-producciones/bj-producciones");
            return { Component: BJProducciones };
        },
    },
    {
        path: "/services",
        lazy: async () => {
            const { default: Services } = await import("./pages/services/services");
            return { Component: Services };
        },
    },
    {
        path: "/biglex-dev",
        lazy: async () => {
            const { default: Developer } = await import("./pages/biglex-dev/biglex-dev");
            return { Component: Developer };
        },
    },
    {
        path: "/biglexj",
        lazy: async () => {
            const { default: BiglexJ } = await import("./modules/Channels/pages/biglexj");
            return { Component: BiglexJ };
        },
    },
    {
        path: "/biglexpe",
        lazy: async () => {
            const { default: BiglexJProducciones } = await import("./modules/Channels/pages/biglexpe");
            return { Component: BiglexJProducciones };
        },
    },
    {
        path: "/biglexdev",
        lazy: async () => {
            const { default: BiglexDeveloper } = await import("./modules/Channels/pages/biglexdev");
            return { Component: BiglexDeveloper };
        },
    },
    {
        path: "/biglexlive",
        lazy: async () => {
            const { default: BiglexLive } = await import("./modules/Channels/pages/biglexlive");
            return { Component: BiglexLive };
        },
    },
    {
        path: "/biglexjgames",
        lazy: async () => {
            const { default: BiglexGames } = await import("./modules/Channels/pages/biglexgames");
            return { Component: BiglexGames };
        },
    },
    {
        path: "/ely_vtuber",
        lazy: async () => {
            const { default: ElyVtuber } = await import("./modules/Channels/pages/ely_vtuber");
            return { Component: ElyVtuber };
        },
    },
    {
        path: "/miku-andina",
        lazy: async () => {
            const { default: MikuAndina } = await import("./modules/Channels/pages/miku-andina");
            return { Component: MikuAndina };
        },
    },
    {
        path: "/template",
        lazy: async () => {
            const { default: Template } = await import("./modules/Channels/pages/template");
            return { Component: Template };
        },
    },
    {
        path: "/template_perfil",
        lazy: async () => {
            const { default: TemplatePerfil } = await import("./modules/Channels/pages/template_perfil");
            return { Component: TemplatePerfil };
        },
    },
]);

export default router;
