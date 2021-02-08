import LabView from "./Lab/LabView";
import MainPage from "./MainPage";
import MusicView from "./Music/MusicView";
import OtherPage from "./OtherPage";


export const pages: Array<{ page: any, path: string }> = [
    { page: MusicView, path: '/music' },
    { page: LabView, path: '/lab' },
    { page: MainPage, path: '/main' },
    { page: OtherPage, path: '/other' },
];
