import * as tslib_1 from "tslib";
import { Component, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatSeekProgressControlComponent = /** @class */ (function () {
    function MatSeekProgressControlComponent(renderer, evt) {
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
    MatSeekProgressControlComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: 'seeking', callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
            { element: this.video, name: 'canplaythrough', callback: function (event) { return _this.updateBufferedTime(); }, dispose: null },
            { element: this.video, name: 'timeupdate', callback: function (event) { return _this.updateCurrentTime(_this.video.currentTime); }, dispose: null },
            { element: this.video, name: 'progress', callback: function (event) { return _this.updateBufferedTime(); }, dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    };
    MatSeekProgressControlComponent.prototype.ngOnDestroy = function () {
        this.evt.removeEvents(this.events);
    };
    MatSeekProgressControlComponent.prototype.seekVideo = function (value) {
        var percentage = value / 100;
        var newTime = this.video.duration * percentage;
        this.video.currentTime = newTime;
    };
    MatSeekProgressControlComponent.prototype.updateCurrentTime = function (time) {
        this.currentTime = time;
        this.curTimePercent = this.updateTime(this.currentTimeChanged, this.currentTime);
    };
    MatSeekProgressControlComponent.prototype.updateBufferedTime = function () {
        if (this.video.buffered.length > 0) {
            var largestBufferValue = 0;
            for (var i = 0; i < this.video.buffered.length; i++) {
                var cur = this.video.currentTime;
                var start = this.video.buffered.start(i);
                var end = this.video.buffered.end(i);
                if (start <= cur && end > cur && (end - start) > largestBufferValue)
                    largestBufferValue = end;
            }
            this.bufferedTime = largestBufferValue;
            this.bufTimePercent = this.updateTime(this.bufferedTimeChanged, this.bufferedTime);
        }
    };
    MatSeekProgressControlComponent.prototype.updateTime = function (emitter, time) {
        emitter.emit(time);
        return time / this.video.duration * 100;
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
    return MatSeekProgressControlComponent;
}());
export { MatSeekProgressControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbC9tYXQtc2Vlay1wcm9ncmVzcy1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTVHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU81RDtJQWtCRSx5Q0FDVSxRQUFtQixFQUNuQixHQUFpQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFuQjNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBQzNCLG1CQUFjLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLFVBQUssR0FBcUIsSUFBSSxDQUFDO1FBRS9CLFVBQUssR0FBaUIsU0FBUyxDQUFDO1FBRWhDLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBRXZCLHVCQUFrQixHQUFHLElBQUksWUFBWSxFQUFVLENBQUM7UUFFakQsaUJBQVksR0FBVyxDQUFDLENBQUM7UUFFeEIsd0JBQW1CLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztJQU92RCxDQUFDO0lBRUwseURBQWUsR0FBZjtRQUFBLGlCQVNDO1FBUkMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBOUMsQ0FBOEMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFF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QU8sSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQztJQUMxQyxDQUFDO0lBL0RRO1FBQVIsS0FBSyxFQUFFOzBDQUFRLGdCQUFnQjtrRUFBUTtJQUUvQjtRQUFSLEtBQUssRUFBRTs7a0VBQWlDO0lBRWhDO1FBQVIsS0FBSyxFQUFFOzt3RUFBeUI7SUFFdkI7UUFBVCxNQUFNLEVBQUU7OytFQUFpRDtJQUVqRDtRQUFSLEtBQUssRUFBRTs7eUVBQTBCO0lBRXhCO1FBQVQsTUFBTSxFQUFFOztnRkFBa0Q7SUFkaEQsK0JBQStCO1FBTDNDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSwyQkFBMkI7WUFDckMsa05BQXlEOztTQUUxRCxDQUFDO2lEQW9Cb0IsU0FBUztZQUNkLFlBQVk7T0FwQmhCLCtCQUErQixDQXFFM0M7SUFBRCxzQ0FBQztDQUFBLEFBckVELElBcUVDO1NBckVZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbnB1dCwgT25EZXN0cm95LCBPdXRwdXQsIFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZXZlbnQtaGFuZGxlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXNlZWstcHJvZ3Jlc3MtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1zZWVrLXByb2dyZXNzLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRTZWVrUHJvZ3Jlc3NDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBjdXJUaW1lUGVyY2VudDogbnVtYmVyID0gMDtcclxuICBidWZUaW1lUGVyY2VudDogbnVtYmVyID0gMDtcclxuXHJcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjogVGhlbWVQYWxldHRlID0gJ3ByaW1hcnknO1xyXG5cclxuICBASW5wdXQoKSBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgQE91dHB1dCgpIGN1cnJlbnRUaW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBASW5wdXQoKSBidWZmZXJlZFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gIEBPdXRwdXQoKSBidWZmZXJlZFRpbWVDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxudW1iZXI+KCk7XHJcblxyXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ldmVudHMgPSBbXHJcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3NlZWtpbmcnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVDdXJyZW50VGltZSh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSwgZGlzcG9zZTogbnVsbCB9LFxyXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdjYW5wbGF5dGhyb3VnaCcsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUJ1ZmZlcmVkVGltZSgpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3RpbWV1cGRhdGUnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy51cGRhdGVDdXJyZW50VGltZSh0aGlzLnZpZGVvLmN1cnJlbnRUaW1lKSwgZGlzcG9zZTogbnVsbCB9LFxyXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdwcm9ncmVzcycsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnVwZGF0ZUJ1ZmZlcmVkVGltZSgpLCBkaXNwb3NlOiBudWxsIH1cclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5ldnQuYWRkRXZlbnRzKHRoaXMucmVuZGVyZXIsIHRoaXMuZXZlbnRzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcclxuICB9XHJcblxyXG4gIHNlZWtWaWRlbyh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZXJjZW50YWdlID0gdmFsdWUgLyAxMDA7XHJcbiAgICBjb25zdCBuZXdUaW1lID0gdGhpcy52aWRlby5kdXJhdGlvbiAqIHBlcmNlbnRhZ2U7XHJcbiAgICB0aGlzLnZpZGVvLmN1cnJlbnRUaW1lID0gbmV3VGltZTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUN1cnJlbnRUaW1lKHRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5jdXJyZW50VGltZSA9IHRpbWU7XHJcbiAgICB0aGlzLmN1clRpbWVQZXJjZW50ID0gdGhpcy51cGRhdGVUaW1lKHRoaXMuY3VycmVudFRpbWVDaGFuZ2VkLCB0aGlzLmN1cnJlbnRUaW1lKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUJ1ZmZlcmVkVGltZSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpZGVvLmJ1ZmZlcmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgbGV0IGxhcmdlc3RCdWZmZXJWYWx1ZSA9IDA7XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy52aWRlby5idWZmZXJlZC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGN1ciA9IHRoaXMudmlkZW8uY3VycmVudFRpbWU7XHJcbiAgICAgICAgY29uc3Qgc3RhcnQgPSB0aGlzLnZpZGVvLmJ1ZmZlcmVkLnN0YXJ0KGkpO1xyXG4gICAgICAgIGNvbnN0IGVuZCA9IHRoaXMudmlkZW8uYnVmZmVyZWQuZW5kKGkpO1xyXG4gICAgICAgIGlmIChzdGFydCA8PSBjdXIgJiYgZW5kID4gY3VyICYmIChlbmQgLSBzdGFydCkgPiBsYXJnZXN0QnVmZmVyVmFsdWUpXHJcbiAgICAgICAgICBsYXJnZXN0QnVmZmVyVmFsdWUgPSBlbmQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5idWZmZXJlZFRpbWUgPSBsYXJnZXN0QnVmZmVyVmFsdWU7XHJcbiAgICAgIHRoaXMuYnVmVGltZVBlcmNlbnQgPSB0aGlzLnVwZGF0ZVRpbWUodGhpcy5idWZmZXJlZFRpbWVDaGFuZ2VkLCB0aGlzLmJ1ZmZlcmVkVGltZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1cGRhdGVUaW1lKGVtaXR0ZXI6IEV2ZW50RW1pdHRlcjxudW1iZXI+LCB0aW1lOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgZW1pdHRlci5lbWl0KHRpbWUpO1xyXG4gICAgcmV0dXJuIHRpbWUgLyB0aGlzLnZpZGVvLmR1cmF0aW9uICogMTAwO1xyXG4gIH1cclxuXHJcbn1cclxuIl19