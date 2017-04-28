// NG2
import { Component, NgZone, OnInit } from '@angular/core';
// Vendor
import { AppBridge } from 'novo-elements';

@Component({
    selector: 'app-root',
    templateUrl: './card1.component.html',
    styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {
    public appBridge: AppBridge;
    public gotEvent = false;

    constructor(private zone: NgZone) { }

    ngOnInit() {
        this.appBridge = new AppBridge('CustomCard1');
        this.appBridge.register();
        this.appBridge.tracing = true;
        this.appBridge.addEventListener('CustomCard2', (data) => {
            console.log('[CustomCard1] RECIEVED CUSTOM EVENT', data);
            this.zone.run(() => {
                this.gotEvent = true;
            });
        });
    }

    get() {
        this.appBridge.httpGET('/relativeURL/here').then(data => {
            console.log('[CustomCard1] HTTP GET SUCCESS', data);
        }, error => {
            console.log('[CustomCard1] HTTP GET ERROR', error);
        });
    }

    open() {
        this.appBridge.open({ test: 'Test' }).then(data => {
            console.log('[CustomCard1] OPEN SUCCESS', data);
        }, error => {
            console.log('[CustomCard1] OPEN ERROR', error);
        });
    }

    fire() {
        this.appBridge.fireEvent('CustomCard1', { from: 'CustomCard1' }).then(data => {
            console.log('[CustomCard1] FIRE SUCCESS', data);
        }, error => {
            console.log('[CustomCard1] FIRE ERROR', error);
        });
    }
}
