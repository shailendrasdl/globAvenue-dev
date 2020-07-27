import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
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
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", HTMLVideoElement)
], MatSeekProgressControlComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatSeekProgressControlComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], MatSeekProgressControlComponent.prototype, "currentTime", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatSeekProgressControlComponent.prototype, "currentTimeChanged", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], MatSeekProgressControlComponent.prototype, "bufferedTime", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatSeekProgressControlComponent.prototype, "bufferedTimeChanged", void 0);
MatSeekProgressControlComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-seek-progress-control',
        template: "<mat-slider-progress-bar [color]=\"color\" mode=\"buffer\" step=\"0.01\" [value]=\"curTimePercent\" [bufferValue]=\"bufTimePercent\"\n  (input)=\"seekVideo($event.value)\"></mat-slider-progress-bar>",
        styles: [""]
    }),
    tslib_1.__metadata("design:paramtypes", [Renderer2,
        EventService])
], MatSeekProgressControlComponent);
export { MatSeekProgressControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU81RCxJQUFhLCtCQUErQixHQUE1QyxNQUFhLCtCQUErQjtJQWtCMUMsWUFDVSxRQUFtQixFQUNuQixHQUFpQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFuQjNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBRS9CLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBRWhDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFakQsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFeEIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU92RCxDQUFDO0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFB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QUVGLENBQUE7QUFqRVU7SUFBUixLQUFLLEVBQUU7c0NBQVEsZ0JBQWdCOzhEQUFRO0FBRS9CO0lBQVIsS0FBSyxFQUFFOzs4REFBaUM7QUFFaEM7SUFBUixLQUFLLEVBQUU7O29FQUF5QjtBQUV2QjtJQUFULE1BQU0sRUFBRTs7MkVBQWlEO0FBRWpEO0lBQVIsS0FBSyxFQUFFOztxRUFBMEI7QUFFeEI7SUFBVCxNQUFNLEVBQUU7OzRFQUFrRDtBQWRoRCwrQkFBK0I7SUFMM0MsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLDJCQUEyQjtRQUNyQyxrTkFBeUQ7O0tBRTFELENBQUM7NkNBb0JvQixTQUFTO1FBQ2QsWUFBWTtHQXBCaEIsK0JBQStCLENBcUUzQztTQXJFWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBZnRlclZpZXdJbml0LCBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0U2Vla1Byb2dyZXNzQ29udHJvbENvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgY3VyVGltZVBlcmNlbnQ6IG51bWJlciA9IDA7XHJcbiAgYnVmVGltZVBlcmNlbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcclxuXHJcbiAgQElucHV0KCkgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gIEBPdXRwdXQoKSBjdXJyZW50VGltZUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcclxuXHJcbiAgQElucHV0KCkgYnVmZmVyZWRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICBAT3V0cHV0KCkgYnVmZmVyZWRUaW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIGV2ZW50czogRXZlbnRIYW5kbGVyW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZXZlbnRzID0gW1xyXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdzZWVraW5nJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudXBkYXRlQ3VycmVudFRpbWUodGhpcy52aWRlby5jdXJyZW50VGltZSksIGRpc3Bvc2U6IG51bGwgfSxcclxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAnY2FucGxheXRocm91Z2gnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVCdWZmZXJlZFRpbWUoKSwgZGlzcG9zZTogbnVsbCB9LFxyXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICd0aW1ldXBkYXRlJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudXBkYXRlQ3VycmVudFRpbWUodGhpcy52aWRlby5jdXJyZW50VGltZSksIGRpc3Bvc2U6IG51bGwgfSxcclxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAncHJvZ3Jlc3MnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVCdWZmZXJlZFRpbWUoKSwgZGlzcG9zZTogbnVsbCB9XHJcbiAgICBdO1xyXG5cclxuICAgIHRoaXMuZXZ0LmFkZEV2ZW50cyh0aGlzLnJlbmRlcmVyLCB0aGlzLmV2ZW50cyk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZXZ0LnJlbW92ZUV2ZW50cyh0aGlzLmV2ZW50cyk7XHJcbiAgfVxyXG5cclxuICBzZWVrVmlkZW8odmFsdWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgcGVyY2VudGFnZSA9IHZhbHVlIC8gMTAwO1xyXG4gICAgY29uc3QgbmV3VGltZSA9IHRoaXMudmlkZW8uZHVyYXRpb24gKiBwZXJjZW50YWdlO1xyXG4gICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IG5ld1RpbWU7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVDdXJyZW50VGltZSh0aW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuY3VycmVudFRpbWUgPSB0aW1lO1xyXG4gICAgdGhpcy5jdXJUaW1lUGVyY2VudCA9IHRoaXMudXBkYXRlVGltZSh0aGlzLmN1cnJlbnRUaW1lQ2hhbmdlZCwgdGhpcy5jdXJyZW50VGltZSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVCdWZmZXJlZFRpbWUoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy52aWRlby5idWZmZXJlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGxldCBsYXJnZXN0QnVmZmVyVmFsdWUgPSAwO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMudmlkZW8uYnVmZmVyZWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBjdXIgPSB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lO1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0ID0gdGhpcy52aWRlby5idWZmZXJlZC5zdGFydChpKTtcclxuICAgICAgICBjb25zdCBlbmQgPSB0aGlzLnZpZGVvLmJ1ZmZlcmVkLmVuZChpKTtcclxuICAgICAgICBpZiAoc3RhcnQgPD0gY3VyICYmIGVuZCA+IGN1ciAmJiAoZW5kIC0gc3RhcnQpID4gbGFyZ2VzdEJ1ZmZlclZhbHVlKVxyXG4gICAgICAgICAgbGFyZ2VzdEJ1ZmZlclZhbHVlID0gZW5kO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYnVmZmVyZWRUaW1lID0gbGFyZ2VzdEJ1ZmZlclZhbHVlO1xyXG4gICAgICB0aGlzLmJ1ZlRpbWVQZXJjZW50ID0gdGhpcy51cGRhdGVUaW1lKHRoaXMuYnVmZmVyZWRUaW1lQ2hhbmdlZCwgdGhpcy5idWZmZXJlZFRpbWUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlVGltZShlbWl0dGVyOiBFdmVudEVtaXR0ZXI8bnVtYmVyPiwgdGltZTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGVtaXR0ZXIuZW1pdCh0aW1lKTtcclxuICAgIHJldHVybiB0aW1lIC8gdGhpcy52aWRlby5kdXJhdGlvbiAqIDEwMDtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==