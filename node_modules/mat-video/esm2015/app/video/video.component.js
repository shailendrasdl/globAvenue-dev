import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild, } from '@angular/core';
import { EventService } from './services/event.service';
let MatVideoComponent = class MatVideoComponent {
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.src = null;
        this.title = null;
        this.autoplay = false;
        this.preload = true;
        this.loop = false;
        this.quality = true;
        this.fullscreen = true;
        this.showFrameByFrame = false;
        this.fps = 29.97;
        this.download = false;
        this.color = 'primary';
        this.spinner = 'spin';
        this.poster = null;
        this.keyboard = true;
        this.overlay = null;
        this.muted = false;
        this.mutedChange = new EventEmitter();
        this.timeChange = new EventEmitter();
        this.playing = false;
        this.isFullscreen = false;
        this.videoLoaded = false;
        this.isMouseMoving = false;
        this.isMouseMovingTimeout = 2000;
    }
    get time() {
        return this.getVideoTag().currentTime;
    }
    set time(val) {
        const video = this.getVideoTag();
        if (video && val) {
            if (val > video.duration) {
                val = video.duration;
            }
            if (val < 0) {
                val = 0;
            }
            if (val !== video.currentTime) {
                video.currentTime = val;
            }
            if (this.lastTime !== video.currentTime) {
                setTimeout(() => this.timeChange.emit(video.currentTime), 0);
                this.lastTime = video.currentTime;
            }
        }
    }
    ngAfterViewInit() {
        this.events = [
            { element: this.video.nativeElement, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
            { element: this.video.nativeElement, name: 'loadedmetadata', callback: event => this.evLoadedMetadata(event), dispose: null },
            { element: this.video.nativeElement, name: 'error', callback: event => console.error('Unhandled Video Error', event), dispose: null },
            { element: this.video.nativeElement, name: 'contextmenu', callback: event => event.preventDefault(), dispose: null },
            { element: this.video.nativeElement, name: 'timeupdate', callback: event => this.evTimeUpdate(event), dispose: null },
            { element: this.player.nativeElement, name: 'mousemove', callback: event => this.evMouseMove(event), dispose: null }
        ];
        this.video.nativeElement.onloadeddata = () => this.videoLoaded = true;
        this.evt.addEvents(this.renderer, this.events);
    }
    ngOnDestroy() {
        this.video.nativeElement.onloadeddata = null;
        this.evt.removeEvents(this.events);
    }
    load() {
        if (this.video && this.video.nativeElement)
            this.video.nativeElement.load();
    }
    getVideoTag() {
        return this.video && this.video.nativeElement ? this.video.nativeElement : null;
    }
    evLoadedMetadata(event) {
        this.videoWidth = this.video.nativeElement.videoWidth;
        this.videoHeight = this.video.nativeElement.videoHeight;
        this.videoLoaded = true;
    }
    evMouseMove(event) {
        this.isMouseMoving = true;
        clearTimeout(this.isMouseMovingTimer);
        this.isMouseMovingTimer = setTimeout(() => {
            this.isMouseMoving = false;
        }, this.isMouseMovingTimeout);
    }
    evTimeUpdate(event) {
        this.time = this.getVideoTag().currentTime;
    }
    getOverlayClass(activeClass, inactiveClass) {
        if (this.overlay === null) {
            return (!this.playing || this.isMouseMoving) ? activeClass : inactiveClass;
        }
        else {
            return this.overlay ? activeClass : inactiveClass;
        }
    }
};
tslib_1.__decorate([
    ViewChild('player'),
    tslib_1.__metadata("design:type", ElementRef)
], MatVideoComponent.prototype, "player", void 0);
tslib_1.__decorate([
    ViewChild('video'),
    tslib_1.__metadata("design:type", ElementRef)
], MatVideoComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoComponent.prototype, "src", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoComponent.prototype, "title", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "autoplay", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "preload", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "loop", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "quality", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "fullscreen", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "showFrameByFrame", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], MatVideoComponent.prototype, "fps", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "download", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoComponent.prototype, "spinner", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVideoComponent.prototype, "poster", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "keyboard", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "overlay", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVideoComponent.prototype, "muted", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatVideoComponent.prototype, "mutedChange", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], MatVideoComponent.prototype, "time", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatVideoComponent.prototype, "timeChange", void 0);
MatVideoComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-video',
        template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\r\n    <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\r\n        {{title}}\r\n    </div>\r\n\r\n    <video #video class=\"video\" [attr.src]=\"src ? src : null\" [attr.autoplay]=\"autoplay ? true : null\"\r\n        [preload]=\"preload ? 'auto' : 'metadata'\" [attr.poster]=\"poster ? poster : null\"\r\n        [attr.loop]=\"loop ? loop : null\">\r\n        <ng-content select=\"source\"></ng-content>\r\n        <ng-content select=\"track\"></ng-content>\r\n        This browser does not support HTML5 video.\r\n    </video>\r\n\r\n    <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\r\n        <div class=\"progress\">\r\n            <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\r\n        </div>\r\n\r\n        <div class=\"menu\">\r\n            <div class=\"left\">\r\n                <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\">\r\n                </mat-play-button>\r\n\r\n                <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\r\n\r\n                <mat-volume-control [muted]=\"muted\" (mutedChanged)=\"muted = $event; mutedChange.emit(muted);\"\r\n                    [color]=\"color\" [video]=\"video\" [keyboard]=\"keyboard\">\r\n                </mat-volume-control>\r\n\r\n                <mat-time-control [video]=\"video\"></mat-time-control>\r\n            </div>\r\n\r\n            <div class=\"right\">\r\n                <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\r\n\r\n                <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\r\n\r\n                <mat-fullscreen-button *ngIf=\"fullscreen\" (fullscreenChanged)=\"isFullscreen = $event\" [player]=\"player\"\r\n                    [keyboard]=\"keyboard\"></mat-fullscreen-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\r\n</div>\r\n",
        styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2')}::ng-deep.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}"]
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        EventService])
], MatVideoComponent);
export { MatVideoComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlkZW8uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVILFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFFTCxNQUFNLEVBQ04sU0FBUyxFQUNULFNBQVMsR0FDWixNQUFNLGVBQWUsQ0FBQztBQUl2QixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFPeEQsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFnRTFCLFlBQ1ksUUFBbUIsRUFDbkIsR0FBaUI7UUFEakIsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUNuQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBOURwQixRQUFHLEdBQVcsSUFBSSxDQUFDO1FBQ25CLFVBQUssR0FBVyxJQUFJLENBQUM7UUFDckIsYUFBUSxHQUFZLEtBQUssQ0FBQztRQUMxQixZQUFPLEdBQVksSUFBSSxDQUFDO1FBQ3hCLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDdEIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixlQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHFCQUFnQixHQUFZLEtBQUssQ0FBQztRQUNsQyxRQUFHLEdBQVcsS0FBSyxDQUFDO1FBQ3BCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsVUFBSyxHQUFpQixTQUFTLENBQUM7UUFDaEMsWUFBTyxHQUFXLE1BQU0sQ0FBQztRQUN6QixXQUFNLEdBQVcsSUFBSSxDQUFDO1FBQ3RCLGFBQVEsR0FBWSxJQUFJLENBQUM7UUFDekIsWUFBTyxHQUFZLElBQUksQ0FBQztRQUN4QixVQUFLLEdBQVksS0FBSyxDQUFDO1FBQ3RCLGdCQUFXLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQVExQyxlQUFVLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQW9CbEQsWUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQU05QixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUVaLGtCQUFhLEdBQVksS0FBSyxDQUFDO1FBRS9CLHlCQUFvQixHQUFXLElBQUksQ0FBQztJQU94QyxDQUFDO0lBM0NMLElBQUksSUFBSTtRQUNKLE9BQU8sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLFdBQVcsQ0FBQztJQUMxQyxDQUFDO0lBR0QsSUFBSSxJQUFJLENBQUMsR0FBVztRQUNoQixNQUFNLEtBQUssR0FBcUIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ25ELElBQUksS0FBSyxJQUFJLEdBQUcsRUFBRTtZQUNkLElBQUksR0FBRyxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7Z0JBQ3RCLEdBQUcsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO2FBQ3hCO1lBQ0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUNULEdBQUcsR0FBRyxDQUFDLENBQUM7YUFDWDtZQUNELElBQUksR0FBRyxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyxXQUFXLEdBQUcsR0FBRyxDQUFDO2FBQzNCO1lBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxXQUFXLEVBQUU7Z0JBQ3JDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLFdBQVcsQ0FBQzthQUNyQztTQUNKO0lBQ0wsQ0FBQztJQXVCRCxlQUFlO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNWLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwSCxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDN0gsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDckksRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsY0FBYyxFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwSCxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNySCxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtTQUN2SCxDQUFDO1FBRUYsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBRXRFLElBQUksQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztRQUU3QyxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELElBQUk7UUFDQSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhO1lBQ3RDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hDLENBQUM7SUFFRCxXQUFXO1FBQ1AsT0FBTyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWlDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztJQUN4RyxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsS0FBVTtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztRQUN0RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQztRQUN4RCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLEtBQVU7UUFDbEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUM7UUFDMUIsWUFBWSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQy9CLENBQUMsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsWUFBWSxDQUFDLEtBQVU7UUFDbkIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsV0FBVyxDQUFDO0lBQy9DLENBQUM7SUFFRCxlQUFlLENBQUMsV0FBbUIsRUFBRSxhQUFxQjtRQUN0RCxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztTQUM5RTthQUFNO1lBQ0gsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQztTQUNyRDtJQUNMLENBQUM7Q0FFSixDQUFBO0FBNUh3QjtJQUFwQixTQUFTLENBQUMsUUFBUSxDQUFDO3NDQUFpQixVQUFVO2lEQUFDO0FBQzVCO0lBQW5CLFNBQVMsQ0FBQyxPQUFPLENBQUM7c0NBQWdCLFVBQVU7Z0RBQUM7QUFFckM7SUFBUixLQUFLLEVBQUU7OzhDQUFvQjtBQUNuQjtJQUFSLEtBQUssRUFBRTs7Z0RBQXNCO0FBQ3JCO0lBQVIsS0FBSyxFQUFFOzttREFBMkI7QUFDMUI7SUFBUixLQUFLLEVBQUU7O2tEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7K0NBQXVCO0FBQ3RCO0lBQVIsS0FBSyxFQUFFOztrREFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7O3FEQUE0QjtBQUMzQjtJQUFSLEtBQUssRUFBRTs7MkRBQW1DO0FBQ2xDO0lBQVIsS0FBSyxFQUFFOzs4Q0FBcUI7QUFDcEI7SUFBUixLQUFLLEVBQUU7O21EQUEyQjtBQUMxQjtJQUFSLEtBQUssRUFBRTs7Z0RBQWlDO0FBQ2hDO0lBQVIsS0FBSyxFQUFFOztrREFBMEI7QUFDekI7SUFBUixLQUFLLEVBQUU7O2lEQUF1QjtBQUN0QjtJQUFSLEtBQUssRUFBRTs7bURBQTBCO0FBQ3pCO0lBQVIsS0FBSyxFQUFFOztrREFBeUI7QUFDeEI7SUFBUixLQUFLLEVBQUU7O2dEQUF3QjtBQUN0QjtJQUFULE1BQU0sRUFBRTs7c0RBQTJDO0FBSXBEO0lBREMsS0FBSyxFQUFFOzs7NkNBR1A7QUFFUztJQUFULE1BQU0sRUFBRTs7cURBQXlDO0FBNUJ6QyxpQkFBaUI7SUFMN0IsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsMHVFQUFxQzs7S0FFeEMsQ0FBQzs2Q0FrRXdCLFNBQVM7UUFDZCxZQUFZO0dBbEVwQixpQkFBaUIsQ0E2SDdCO1NBN0hZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBBZnRlclZpZXdJbml0LFxyXG4gICAgQ29tcG9uZW50LFxyXG4gICAgRWxlbWVudFJlZixcclxuICAgIEV2ZW50RW1pdHRlcixcclxuICAgIElucHV0LFxyXG4gICAgT25EZXN0cm95LFxyXG4gICAgT3V0cHV0LFxyXG4gICAgUmVuZGVyZXIyLFxyXG4gICAgVmlld0NoaWxkLFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4vaW50ZXJmYWNlcy9ldmVudC1oYW5kbGVyLmludGVyZmFjZSc7XHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbWF0LXZpZGVvJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi92aWRlby5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi92aWRlby5jb21wb25lbnQuY3NzJywgJy4vc3R5bGVzL2ljb25zLmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb0NvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgICBAVmlld0NoaWxkKCdwbGF5ZXInKSBwcml2YXRlIHBsYXllcjogRWxlbWVudFJlZjtcclxuICAgIEBWaWV3Q2hpbGQoJ3ZpZGVvJykgcHJpdmF0ZSB2aWRlbzogRWxlbWVudFJlZjtcclxuXHJcbiAgICBASW5wdXQoKSBzcmM6IHN0cmluZyA9IG51bGw7XHJcbiAgICBASW5wdXQoKSB0aXRsZTogc3RyaW5nID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGF1dG9wbGF5OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwcmVsb2FkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIEBJbnB1dCgpIGxvb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHF1YWxpdHk6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBzaG93RnJhbWVCeUZyYW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBmcHM6IG51bWJlciA9IDI5Ljk3O1xyXG4gICAgQElucHV0KCkgZG93bmxvYWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIGNvbG9yOiBUaGVtZVBhbGV0dGUgPSAncHJpbWFyeSc7XHJcbiAgICBASW5wdXQoKSBzcGlubmVyOiBzdHJpbmcgPSAnc3Bpbic7XHJcbiAgICBASW5wdXQoKSBwb3N0ZXI6IHN0cmluZyA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBASW5wdXQoKSBvdmVybGF5OiBib29sZWFuID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIG11dGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBAT3V0cHV0KCkgbXV0ZWRDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG5cclxuICAgIEBJbnB1dCgpXHJcbiAgICBnZXQgdGltZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZXRWaWRlb1RhZygpLmN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIEBPdXRwdXQoKSB0aW1lQ2hhbmdlID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcbiAgICBzZXQgdGltZSh2YWw6IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gdGhpcy5nZXRWaWRlb1RhZygpO1xyXG4gICAgICAgIGlmICh2aWRlbyAmJiB2YWwpIHtcclxuICAgICAgICAgICAgaWYgKHZhbCA+IHZpZGVvLmR1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB2YWwgPSB2aWRlby5kdXJhdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsICE9PSB2aWRlby5jdXJyZW50VGltZSkge1xyXG4gICAgICAgICAgICAgICAgdmlkZW8uY3VycmVudFRpbWUgPSB2YWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMubGFzdFRpbWUgIT09IHZpZGVvLmN1cnJlbnRUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMudGltZUNoYW5nZS5lbWl0KHZpZGVvLmN1cnJlbnRUaW1lKSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gdmlkZW8uY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcGxheWluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGlzRnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIHZpZGVvV2lkdGg6IG51bWJlcjtcclxuICAgIHZpZGVvSGVpZ2h0OiBudW1iZXI7XHJcbiAgICBsYXN0VGltZTogbnVtYmVyO1xyXG5cclxuICAgIHZpZGVvTG9hZGVkID0gZmFsc2U7XHJcblxyXG4gICAgcHJpdmF0ZSBpc01vdXNlTW92aW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGlzTW91c2VNb3ZpbmdUaW1lcjogTm9kZUpTLlRpbWVyO1xyXG4gICAgcHJpdmF0ZSBpc01vdXNlTW92aW5nVGltZW91dDogbnVtYmVyID0gMjAwMDtcclxuXHJcbiAgICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2VcclxuICAgICkgeyB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZXZlbnRzID0gW1xyXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ2xvYWRzdGFydCcsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnZpZGVvTG9hZGVkID0gZmFsc2UsIGRpc3Bvc2U6IG51bGwgfSxcclxuICAgICAgICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQsIG5hbWU6ICdsb2FkZWRtZXRhZGF0YScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TG9hZGVkTWV0YWRhdGEoZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnZXJyb3InLCBjYWxsYmFjazogZXZlbnQgPT4gY29uc29sZS5lcnJvcignVW5oYW5kbGVkIFZpZGVvIEVycm9yJywgZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LCBuYW1lOiAnY29udGV4dG1lbnUnLCBjYWxsYmFjazogZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSwgZGlzcG9zZTogbnVsbCB9LFxyXG4gICAgICAgICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudCwgbmFtZTogJ3RpbWV1cGRhdGUnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5ldlRpbWVVcGRhdGUoZXZlbnQpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgICAgICAgIHsgZWxlbWVudDogdGhpcy5wbGF5ZXIubmF0aXZlRWxlbWVudCwgbmFtZTogJ21vdXNlbW92ZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLmV2TW91c2VNb3ZlKGV2ZW50KSwgZGlzcG9zZTogbnVsbCB9XHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50Lm9ubG9hZGVkZGF0YSA9ICgpID0+IHRoaXMudmlkZW9Mb2FkZWQgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC5vbmxvYWRlZGRhdGEgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMudmlkZW8gJiYgdGhpcy52aWRlby5uYXRpdmVFbGVtZW50KVxyXG4gICAgICAgICAgICB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFZpZGVvVGFnKCk6IEhUTUxWaWRlb0VsZW1lbnQgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52aWRlbyAmJiB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgPyB0aGlzLnZpZGVvLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTFZpZGVvRWxlbWVudCA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgZXZMb2FkZWRNZXRhZGF0YShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy52aWRlb1dpZHRoID0gdGhpcy52aWRlby5uYXRpdmVFbGVtZW50LnZpZGVvV2lkdGg7XHJcbiAgICAgICAgdGhpcy52aWRlb0hlaWdodCA9IHRoaXMudmlkZW8ubmF0aXZlRWxlbWVudC52aWRlb0hlaWdodDtcclxuICAgICAgICB0aGlzLnZpZGVvTG9hZGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBldk1vdXNlTW92ZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc01vdXNlTW92aW5nID0gdHJ1ZTtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5pc01vdXNlTW92aW5nVGltZXIpO1xyXG4gICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNNb3VzZU1vdmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIHRoaXMuaXNNb3VzZU1vdmluZ1RpbWVvdXQpO1xyXG4gICAgfVxyXG5cclxuICAgIGV2VGltZVVwZGF0ZShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRWaWRlb1RhZygpLmN1cnJlbnRUaW1lO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE92ZXJsYXlDbGFzcyhhY3RpdmVDbGFzczogc3RyaW5nLCBpbmFjdGl2ZUNsYXNzOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXkgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuICghdGhpcy5wbGF5aW5nIHx8IHRoaXMuaXNNb3VzZU1vdmluZykgPyBhY3RpdmVDbGFzcyA6IGluYWN0aXZlQ2xhc3M7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3ZlcmxheSA/IGFjdGl2ZUNsYXNzIDogaW5hY3RpdmVDbGFzcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==