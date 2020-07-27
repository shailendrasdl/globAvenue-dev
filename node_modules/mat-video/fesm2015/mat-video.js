import { __decorate, __metadata, __param } from 'tslib';
import { CommonModule } from '@angular/common';
import { Injectable, EventEmitter, ViewChild, ElementRef, Input, Output, Component, Renderer2, Directive, Host, ChangeDetectionStrategy, Optional, Attribute, ChangeDetectorRef, Pipe, HostListener, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR, MatSliderModule } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';

let EventService = class EventService {
    constructor() { }
    addEvents(renderer, events) {
        for (const event of events)
            event.dispose = renderer.listen(event.element, event.name, newEvent => event.callback(newEvent));
    }
    removeEvents(events) {
        for (const event of events)
            if (event.dispose)
                event.dispose();
    }
};
EventService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], EventService);

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
__decorate([
    ViewChild('player'),
    __metadata("design:type", ElementRef)
], MatVideoComponent.prototype, "player", void 0);
__decorate([
    ViewChild('video'),
    __metadata("design:type", ElementRef)
], MatVideoComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoComponent.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoComponent.prototype, "title", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "autoplay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "preload", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "loop", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "quality", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "fullscreen", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "showFrameByFrame", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatVideoComponent.prototype, "fps", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "download", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoComponent.prototype, "spinner", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoComponent.prototype, "poster", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "keyboard", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "overlay", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVideoComponent.prototype, "muted", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatVideoComponent.prototype, "mutedChange", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MatVideoComponent.prototype, "time", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatVideoComponent.prototype, "timeChange", void 0);
MatVideoComponent = __decorate([
    Component({
        selector: 'mat-video',
        template: "<div #player class=\"videoplayer\" [ngClass]=\"getOverlayClass('show-mouse', 'hide-mouse')\">\r\n    <div class=\"header\" *ngIf=\"title\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\r\n        {{title}}\r\n    </div>\r\n\r\n    <video #video class=\"video\" [attr.src]=\"src ? src : null\" [attr.autoplay]=\"autoplay ? true : null\"\r\n        [preload]=\"preload ? 'auto' : 'metadata'\" [attr.poster]=\"poster ? poster : null\"\r\n        [attr.loop]=\"loop ? loop : null\">\r\n        <ng-content select=\"source\"></ng-content>\r\n        <ng-content select=\"track\"></ng-content>\r\n        This browser does not support HTML5 video.\r\n    </video>\r\n\r\n    <div class=\"controls\" *ngIf=\"videoLoaded\" [ngClass]=\"getOverlayClass('visible', 'hidden')\">\r\n        <div class=\"progress\">\r\n            <mat-seek-progress-control [color]=\"color\" [video]=\"video\"></mat-seek-progress-control>\r\n        </div>\r\n\r\n        <div class=\"menu\">\r\n            <div class=\"left\">\r\n                <mat-play-button (playChanged)=\"playing = $event\" [video]=\"video\" [keyboard]=\"keyboard\">\r\n                </mat-play-button>\r\n\r\n                <mat-frame-by-frame-control *ngIf=\"showFrameByFrame\" [video]=\"video\" [fps]=\"fps\"></mat-frame-by-frame-control>\r\n\r\n                <mat-volume-control [muted]=\"muted\" (mutedChanged)=\"muted = $event; mutedChange.emit(muted);\"\r\n                    [color]=\"color\" [video]=\"video\" [keyboard]=\"keyboard\">\r\n                </mat-volume-control>\r\n\r\n                <mat-time-control [video]=\"video\"></mat-time-control>\r\n            </div>\r\n\r\n            <div class=\"right\">\r\n                <mat-quality-control *ngIf=\"quality\" [video]=\"video\"></mat-quality-control>\r\n\r\n                <mat-download-button *ngIf=\"download\" [title]=\"title\" [video]=\"video\"></mat-download-button>\r\n\r\n                <mat-fullscreen-button *ngIf=\"fullscreen\" (fullscreenChanged)=\"isFullscreen = $event\" [player]=\"player\"\r\n                    [keyboard]=\"keyboard\"></mat-fullscreen-button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <mat-video-spinner [spinner]=\"spinner\" [video]=\"video\"></mat-video-spinner>\r\n</div>\r\n",
        styles: [".videoplayer{font-family:Roboto,\"Helvetica Neue\",sans-serif;background-color:#000;position:relative;width:100%;height:100%}.header{color:#fff;display:flex;justify-content:center;align-items:center;position:absolute;left:0;top:0;padding:14px 0;width:100%;z-index:1;background-image:linear-gradient(to top,rgba(0,0,0,0),rgba(0,0,0,.65))}.video{display:block;width:100%;height:100%;z-index:0}.controls{color:#fff;position:absolute;left:0;bottom:0;width:100%;z-index:1;background-image:linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.65))}.controls .progress{height:26px}.controls .menu{display:flex;align-items:center;flex-direction:row;justify-content:space-between;height:48px}.controls .menu .left{justify-content:flex-start}.controls .menu .right{justify-content:flex-end}.visible{visibility:visible;opacity:1;transition:opacity .5s linear}.hidden{visibility:hidden;opacity:0;transition:visibility .5s,opacity .5s linear}.show-mouse{cursor:default}.hide-mouse{cursor:none}", "@font-face{font-family:'Material Icons';font-style:normal;font-weight:400;src:url(https://fonts.gstatic.com/s/materialicons/v36/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2')}::ng-deep.material-icons{font-family:'Material Icons';font-weight:400;font-style:normal;font-size:24px;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;font-feature-settings:'liga';-webkit-font-feature-settings:'liga';-webkit-font-smoothing:antialiased}"]
    }),
    __metadata("design:paramtypes", [Renderer2,
        EventService])
], MatVideoComponent);

let MatVideoSourceDirective = class MatVideoSourceDirective {
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.type = null;
        this.init = true;
        this.video = matVideoComponent;
        this.source = el.nativeElement;
        this.init = false;
    }
    ngOnChanges(changes) {
        this.source.src = this.src;
        this.source.type = this.type;
        if (!this.init)
            this.video.load();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoSourceDirective.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoSourceDirective.prototype, "type", void 0);
MatVideoSourceDirective = __decorate([
    Directive({
        selector: '[matVideoSource]'
    }),
    __param(0, Host()),
    __metadata("design:paramtypes", [MatVideoComponent,
        ElementRef])
], MatVideoSourceDirective);

let MatVideoTrackDirective = class MatVideoTrackDirective {
    constructor(matVideoComponent, el) {
        this.matVideoComponent = matVideoComponent;
        this.el = el;
        this.src = null;
        this.kind = null;
        this.srclang = null;
        this.label = null;
        this.init = true;
        this.video = matVideoComponent;
        this.track = el.nativeElement;
        this.init = false;
    }
    ngOnChanges(changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init)
            this.video.load();
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoTrackDirective.prototype, "src", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoTrackDirective.prototype, "kind", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoTrackDirective.prototype, "srclang", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoTrackDirective.prototype, "label", void 0);
MatVideoTrackDirective = __decorate([
    Directive({
        selector: '[matVideoTrack]'
    }),
    __param(0, Host()),
    __metadata("design:paramtypes", [MatVideoComponent,
        ElementRef])
], MatVideoTrackDirective);

/** Counter used to generate unique IDs for progress bars. */
let sliderprogressbarId = 0;
let MatSliderProgressBarComponent = class MatSliderProgressBarComponent extends MatSlider {
    constructor(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        super(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex);
        this.mode = 'buffer';
        this.value = 0;
        this._bufferValue = 0;
        /** The id of the progress bar. */
        this.sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /** CSS styles for the track fill element. */
    get _trackBufferStyles() {
        if (this.mode === 'buffer') {
            const axis = this.vertical ? 'Y' : 'X';
            return {
                'transform': `translate${axis}(0px) scale${axis}(${this._bufferValue / 100})`
            };
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", String)
], MatSliderProgressBarComponent.prototype, "mode", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatSliderProgressBarComponent.prototype, "value", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MatSliderProgressBarComponent.prototype, "bufferValue", null);
MatSliderProgressBarComponent = __decorate([
    Component({
        selector: 'mat-slider-progress-bar',
        template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\r\n    <div class=\"mat-slider-track-wrapper\">\r\n        <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\r\n            <defs>\r\n                <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\r\n                    <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\r\n                </pattern>\r\n            </defs>\r\n            <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\r\n        </svg>\r\n        <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\r\n        <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\r\n    </div>\r\n    <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\r\n        <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\r\n    </div>\r\n    <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\r\n        <div class=\"mat-slider-focus-ring\"></div>\r\n        <div class=\"mat-slider-thumb\"></div>\r\n        <div class=\"mat-slider-thumb-label\">\r\n            <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\r\n        </div>\r\n    </div>\r\n</div>",
        providers: [MAT_SLIDER_VALUE_ACCESSOR],
        host: {
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(click)': 'this["_onClick"] ? this["_onClick"]($event) : null',
            '(mousedown)': 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            '(slide)': '_onSlide($event)',
            '(slideend)': '_onSlideEnd()',
            '(slidestart)': '_onSlideStart($event)',
            'class': 'mat-slider',
            'role': 'slider',
            '[tabIndex]': 'tabIndex',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
        },
        inputs: ['disabled', 'color', 'tabIndex'],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
    }),
    __param(3, Optional()),
    __param(4, Attribute('tabindex')),
    __metadata("design:paramtypes", [ElementRef,
        FocusMonitor,
        ChangeDetectorRef,
        Directionality, String])
], MatSliderProgressBarComponent);
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

let SecondsToTimePipe = class SecondsToTimePipe {
    constructor() {
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600,
        };
    }
    transform(seconds) {
        if (!seconds)
            return '0:00';
        else {
            let time_string = '';
            for (const key in this.times) {
                if (Math.floor(seconds / this.times[key]) > 0) {
                    time_string += Math.floor(seconds / this.times[key]).toString() + ':';
                    seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                }
            }
            time_string += Math.floor(seconds / 60).toString() + ':';
            seconds = seconds - 60 * Math.floor(seconds / 60);
            if (Math.floor(seconds) < 10)
                time_string += '0';
            time_string += Math.floor(seconds).toString();
            return time_string;
        }
    }
};
SecondsToTimePipe = __decorate([
    Pipe({
        name: 'secondsToTime'
    })
], SecondsToTimePipe);

let FullscreenService = class FullscreenService {
    constructor() {
        this.fnMap = [
            // Object keys
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Old WebKit (Safari 5.1)
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Mozilla
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            // MS
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];
        this.keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
        const ret = {};
        let val;
        for (let i = 0; i < this.fnMap.length; i++) {
            val = this.fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    // Map everything to the first list of keys
                    ret[this.fnMap[0][i].toString()] = val[i];
                }
                this.fn = ret;
            }
        }
    }
    request(elem) {
        const request = this.fn.requestFullscreen;
        elem = elem || document.documentElement;
        // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
            elem[request]();
        }
        else {
            elem[request](this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
        }
    }
    exit() {
        document[this.fn.exitFullscreen]();
    }
    toggle(elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    }
    onChange(callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    }
    onError(callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    }
    isFullscreen() {
        return Boolean(document[this.fn.fullscreenElement]);
    }
    isEnabled() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    }
    getElement() {
        return document[this.fn.fullscreenElement];
    }
};
FullscreenService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], FullscreenService);

let MatDownloadButtonComponent = class MatDownloadButtonComponent {
    constructor() { }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatDownloadButtonComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatDownloadButtonComponent.prototype, "title", void 0);
MatDownloadButtonComponent = __decorate([
    Component({
        selector: 'mat-download-button',
        template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\r\n  <mat-icon>file_download</mat-icon>\r\n</a>",
        styles: ["a{color:inherit;text-decoration:none}"]
    }),
    __metadata("design:paramtypes", [])
], MatDownloadButtonComponent);

let MatFrameByFrameControlComponent = class MatFrameByFrameControlComponent {
    constructor() {
        this.fps = 29.97;
    }
    ngOnInit() {
    }
    seekFrames(nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        const currentFrames = this.video.currentTime * this.fps;
        const newPos = ((currentFrames + nbFrames) / this.fps) + 0.00001;
        this.video.currentTime = newPos;
    }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatFrameByFrameControlComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatFrameByFrameControlComponent.prototype, "fps", void 0);
MatFrameByFrameControlComponent = __decorate([
    Component({
        selector: 'mat-frame-by-frame-control',
        template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\r\n    <mat-icon>skip_previous</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(-1)\">\r\n    <mat-icon>arrow_left</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(1)\">\r\n    <mat-icon>arrow_right</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(5)\">\r\n    <mat-icon>skip_next</mat-icon>\r\n</button>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [])
], MatFrameByFrameControlComponent);

let MatFullscreenButtonComponent = class MatFullscreenButtonComponent {
    constructor(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new EventEmitter();
        this.keyboard = true;
    }
    ngOnInit() {
        if (this.fscreen.isEnabled())
            this.canFullscreen = true;
        this.fscreen.onChange(event => this.fscreen.isFullscreen() ? this.onChangesFullscreen(true) : this.onChangesFullscreen(false));
    }
    setFullscreen(value) {
        if (this.canFullscreen && this.fullscreen !== value)
            this.toggleFullscreen();
    }
    toggleFullscreen() {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    }
    updateFullscreen() {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    }
    onChangesFullscreen(value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    }
    onFullscreenKey(event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatFullscreenButtonComponent.prototype, "player", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
__decorate([
    HostListener('document:keyup.f', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
MatFullscreenButtonComponent = __decorate([
    Component({
        selector: 'mat-fullscreen-button',
        template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\r\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\r\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\r\n</button>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [FullscreenService,
        EventService])
], MatFullscreenButtonComponent);

let MatPlayButtonComponent = class MatPlayButtonComponent {
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new EventEmitter();
        this.keyboard = true;
    }
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: 'play', callback: event => this.setVideoPlayback(true), dispose: null },
            { element: this.video, name: 'pause', callback: event => this.setVideoPlayback(false), dispose: null },
            { element: this.video, name: 'durationchange', callback: event => this.setVideoPlayback(false), dispose: null },
            { element: this.video, name: 'ended', callback: event => this.setVideoPlayback(false), dispose: null },
            { element: this.video, name: 'click', callback: event => this.toggleVideoPlayback(), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    setVideoPlayback(value) {
        if (this.play !== value)
            this.toggleVideoPlayback();
    }
    toggleVideoPlayback() {
        this.play = !this.play;
        this.updateVideoPlayback();
    }
    updateVideoPlayback() {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    }
    onPlayKey(event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatPlayButtonComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatPlayButtonComponent.prototype, "play", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatPlayButtonComponent.prototype, "playChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatPlayButtonComponent.prototype, "keyboard", void 0);
__decorate([
    HostListener('document:keyup.space', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MatPlayButtonComponent.prototype, "onPlayKey", null);
MatPlayButtonComponent = __decorate([
    Component({
        selector: 'mat-play-button',
        template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\r\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\r\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\r\n</button>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [Renderer2,
        EventService])
], MatPlayButtonComponent);

let MatQualityControlComponent = class MatQualityControlComponent {
    constructor() { }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatQualityControlComponent.prototype, "video", void 0);
MatQualityControlComponent = __decorate([
    Component({
        selector: 'mat-quality-control',
        template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">\r\n  {{ video.videoHeight }}p\r\n</div>",
        styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
    }),
    __metadata("design:paramtypes", [])
], MatQualityControlComponent);

let MatSeekProgressControlComponent = class MatSeekProgressControlComponent {
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.curTimePercent = 0;
        this.bufTimePercent = 0;
        this.video = null;
        this.color = 'primary';
        this.currentTime = 0;
        this.currentTimeChanged = new EventEmitter();
        this.bufferedTime = 0;
        this.bufferedTimeChanged = new EventEmitter();
    }
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: 'seeking', callback: event => this.updateCurrentTime(this.video.currentTime), dispose: null },
            { element: this.video, name: 'canplaythrough', callback: event => this.updateBufferedTime(), dispose: null },
            { element: this.video, name: 'timeupdate', callback: event => this.updateCurrentTime(this.video.currentTime), dispose: null },
            { element: this.video, name: 'progress', callback: event => this.updateBufferedTime(), dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    }
    ngOnDestroy() {
        this.evt.removeEvents(this.events);
    }
    seekVideo(value) {
        const percentage = value / 100;
        const newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    }
    updateCurrentTime(time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    }
    updateBufferedTime() {
        if (this.video.buffered.length > 0) {
            let largestBufferValue = 0;
            for (let i = 0; i < this.video.buffered.length; i++) {
                const cur = this.video.currentTime;
                const start = this.video.buffered.start(i);
                const end = this.video.buffered.end(i);
                if (start <= cur && end > cur && (end - start) > largestBufferValue)
                    largestBufferValue = end;
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    }
    updateTime(emitter, time) {
        emitter.emit(time);
        return time / this.video.duration * 100;
    }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatSeekProgressControlComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatSeekProgressControlComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
MatSeekProgressControlComponent = __decorate([
    Component({
        selector: 'mat-seek-progress-control',
        template: "<mat-slider-progress-bar [color]=\"color\" mode=\"buffer\" step=\"0.01\" [value]=\"curTimePercent\" [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"></mat-slider-progress-bar>",
        styles: [""]
    }),
    __metadata("design:paramtypes", [Renderer2,
        EventService])
], MatSeekProgressControlComponent);

let MatTimeControlComponent = class MatTimeControlComponent {
    constructor() { }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatTimeControlComponent.prototype, "video", void 0);
MatTimeControlComponent = __decorate([
    Component({
        selector: 'mat-time-control',
        template: "<div class=\"playtime\">\r\n  {{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime}}\r\n</div>",
        styles: [".playtime{display:inline;font-size:12px}"]
    }),
    __metadata("design:paramtypes", [])
], MatTimeControlComponent);

let MatVideoSpinnerComponent = class MatVideoSpinnerComponent {
    constructor(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.spinner = 'spin';
        this.videoBuffering = false;
        this.videoLoaded = false;
        this.events = [];
    }
    ngAfterViewInit() {
        this.events = [
            { element: this.video, name: 'loadstart', callback: event => this.videoLoaded = false, dispose: null },
            { element: this.video, name: 'loadedmetadata', callback: event => this.videoLoaded = true, dispose: null },
            { element: this.video, name: 'canplay', callback: event => this.videoBuffering = false, dispose: null },
            { element: this.video, name: 'waiting', callback: event => this.videoBuffering = true, dispose: null },
            { element: this.video, name: 'durationchange', callback: event => this.videoBuffering = true, dispose: null }
        ];
        this.video.onloadeddata = () => this.videoLoaded = true;
        this.evt.addEvents(this.renderer, this.events);
    }
    ngOnDestroy() {
        this.video.onloadeddata = null;
        this.evt.removeEvents(this.events);
    }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatVideoSpinnerComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVideoSpinnerComponent.prototype, "spinner", void 0);
MatVideoSpinnerComponent = __decorate([
    Component({
        selector: 'mat-video-spinner',
        template: "<div *ngIf=\"!videoLoaded || videoBuffering\" [class]=\"spinner\"></div>",
        styles: [":host{position:absolute;left:calc(50% - 32px);top:calc(50% - 32px);z-index:1}", ".spin{box-sizing:border-box;width:64px;height:64px;border-radius:100%;border:10px solid rgba(255,255,255,.2);border-top-color:#fff;-webkit-animation:1s linear infinite spin;animation:1s linear infinite spin}@-webkit-keyframes spin{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", ".dot{width:64px;height:64px;background-color:#fff;border-radius:100%;-webkit-animation:1s ease-in-out infinite dot;animation:1s ease-in-out infinite dot}@-webkit-keyframes dot{0%{-webkit-transform:scale(0)}100%{-webkit-transform:scale(1);opacity:0}}@keyframes dot{0%{-webkit-transform:scale(0);transform:scale(0)}100%{-webkit-transform:scale(1);transform:scale(1);opacity:0}}", ".split-ring{display:inline-block;width:64px;height:64px}.split-ring:after{content:\" \";display:block;width:46px;height:46px;margin:1px;border-radius:50%;border:5px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s linear infinite split-ring;animation:1.2s linear infinite split-ring}@-webkit-keyframes split-ring{0%{-webkit-transform:rotate(0)}100%{-webkit-transform:rotate(360deg)}}@keyframes split-ring{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}", ".hourglass{display:inline-block;position:relative;width:64px;height:64px}.hourglass:after{content:\" \";display:block;border-radius:50%;width:0;height:0;margin:6px;box-sizing:border-box;border:26px solid #fff;border-color:#fff transparent;-webkit-animation:1.2s infinite hourglass;animation:1.2s infinite hourglass}@-webkit-keyframes hourglass{0%{-webkit-transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg)}}@keyframes hourglass{0%{-webkit-transform:rotate(0);transform:rotate(0);-webkit-animation-timing-function:cubic-bezier(.55,.055,.675,.19);animation-timing-function:cubic-bezier(.55,.055,.675,.19)}50%{-webkit-transform:rotate(360deg);transform:rotate(360deg);-webkit-animation-timing-function:cubic-bezier(.215,.61,.355,1);animation-timing-function:cubic-bezier(.215,.61,.355,1)}100%{-webkit-transform:rotate(720deg);transform:rotate(720deg)}}"]
    }),
    __metadata("design:paramtypes", [Renderer2,
        EventService])
], MatVideoSpinnerComponent);

let MatVolumeControlComponent = class MatVolumeControlComponent {
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    get muted() { return this._muted; }
    set muted(v) {
        this._muted = v;
        this.video.muted = this._muted;
    }
    setVolume(value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0)
            this.setMuted(false);
    }
    setMuted(value) {
        if (this.muted !== value)
            this.toggleMuted();
    }
    toggleMuted() {
        this.muted = !this.muted;
        this.updateMuted();
    }
    updateMuted() {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
    }
    onMuteKey(event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    }
};
__decorate([
    Input(),
    __metadata("design:type", HTMLVideoElement)
], MatVolumeControlComponent.prototype, "video", void 0);
__decorate([
    Input(),
    __metadata("design:type", String)
], MatVolumeControlComponent.prototype, "color", void 0);
__decorate([
    Input(),
    __metadata("design:type", Number)
], MatVolumeControlComponent.prototype, "volume", void 0);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MatVolumeControlComponent.prototype, "muted", null);
__decorate([
    Output(),
    __metadata("design:type", Object)
], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
__decorate([
    Input(),
    __metadata("design:type", Boolean)
], MatVolumeControlComponent.prototype, "keyboard", void 0);
__decorate([
    HostListener('document:keyup.m', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [KeyboardEvent]),
    __metadata("design:returntype", void 0)
], MatVolumeControlComponent.prototype, "onMuteKey", null);
MatVolumeControlComponent = __decorate([
    Component({
        selector: 'mat-volume-control',
        template: "<div class=\"volume-control\">\r\n  <button mat-icon-button (click)=\"toggleMuted()\">\r\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\r\n  </button>\r\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\">\r\n  </mat-slider>\r\n</div>",
        styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
    }),
    __metadata("design:paramtypes", [EventService])
], MatVolumeControlComponent);

let MatVideoModule = class MatVideoModule {
};
MatVideoModule = __decorate([
    NgModule({
        declarations: [
            SecondsToTimePipe,
            MatVideoComponent,
            MatSliderProgressBarComponent,
            MatPlayButtonComponent,
            MatVolumeControlComponent,
            MatDownloadButtonComponent,
            MatFullscreenButtonComponent,
            MatTimeControlComponent,
            MatQualityControlComponent,
            MatVideoSpinnerComponent,
            MatSeekProgressControlComponent,
            MatVideoSourceDirective,
            MatVideoTrackDirective,
            MatFrameByFrameControlComponent
        ],
        imports: [
            CommonModule,
            MatIconModule,
            MatButtonModule,
            MatSliderModule,
        ],
        exports: [
            MatVideoComponent,
            MatVideoSourceDirective,
            MatVideoTrackDirective
        ],
        providers: [
            FullscreenService,
            EventService
        ]
    })
], MatVideoModule);

/**
 * Generated bundle index. Do not edit.
 */

export { MatVideoModule, SecondsToTimePipe as ɵa, MatVideoComponent as ɵb, EventService as ɵc, MatSliderProgressBarComponent as ɵd, MatPlayButtonComponent as ɵe, MatVolumeControlComponent as ɵf, MatDownloadButtonComponent as ɵg, MatFullscreenButtonComponent as ɵh, FullscreenService as ɵi, MatTimeControlComponent as ɵj, MatQualityControlComponent as ɵk, MatVideoSpinnerComponent as ɵl, MatSeekProgressControlComponent as ɵm, MatVideoSourceDirective as ɵn, MatVideoTrackDirective as ɵo, MatFrameByFrameControlComponent as ɵp };
//# sourceMappingURL=mat-video.js.map
