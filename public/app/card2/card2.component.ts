// NG2
import { Component, NgZone, OnInit } from '@angular/core';
// Vendor
import { AppBridge } from 'novo-elements';

@Component({
    selector: 'app-root',
    templateUrl: './card2.component.html',
    styleUrls: ['./card2.component.scss']
})
export class Card2Component implements OnInit {
    public appBridge: AppBridge;
    public gotEvent = false;

    constructor(private zone: NgZone) { }

    ngOnInit() {
        this.appBridge = new AppBridge('CustomCard2');
        this.appBridge.register();
        this.appBridge.tracing = true;
        this.appBridge.addEventListener('CustomCard1', (data) => {
            console.log('[CustomCard2] RECIEVED CUSTOM EVENT', data);
            this.zone.run(() => {
                this.gotEvent = true;
            });
        });
    }

    get() {
        this.appBridge.httpGET('/relativeURL/here').then(data => {
            console.log('[CustomCard2] HTTP GET SUCCESS', data);
        }, error => {
            console.log('[CustomCard2] HTTP GET ERROR', error);
        });
    }

    open() {
        this.appBridge.open({ test: 'Test' }).then(data => {
            console.log('[CustomCard2] OPEN SUCCESS', data);
        }, error => {
            console.log('[CustomCard2] OPEN ERROR', error);
        });
    }

    fire() {
        this.appBridge.fireEvent('CustomCard2', { from: 'CustomCard2' }).then(data => {
            console.log('[CustomCard2] FIRE SUCCESS', data);
        }, error => {
            console.log('[CustomCard2] FIRE ERROR', error);
        });
    }
}
