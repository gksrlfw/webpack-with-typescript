import MainView from "../routes/Main/MainView";
import MusicView from "../routes/Music/MusicView";
import PostView from "../routes/Post/PostView";



export const pages: Array<{ page: any, path: string }> = [
    { page: MainView, path: '/' },
    { page: MusicView, path: '/music' },
    { page: PostView, path: '/post' },
];

export const main = document.createElement('div');