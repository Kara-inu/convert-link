import { Injectable, Inject } from '@angular/core';
import { WINDOW } from '../window.poviders';

@Injectable()
export class UtilsService {

    constructor(@Inject(WINDOW) private window: Window) {
    }

    getHostname() : string {
        return this.window.location.hostname;
    }
    getHost() : string {
        return this.window.location.host;
    }
}