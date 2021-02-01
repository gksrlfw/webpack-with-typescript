import Page from "../core/Page";

export default interface PageConstructor {
    new(target: HTMLElement): Page;
}
