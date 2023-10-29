export default class UrlService {
    static getParameterFromUrl(param: string): string {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param) || '';
    }
    
    static setUrlParameter(param: string, value: string): void {
        const urlParams = new URLSearchParams(window.location.search);
        urlParams.set(param, value);
        window.history.replaceState(null, '', '?' + urlParams.toString());
    }
}