import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
var MatPlayButtonComponent = /** @class */ (function () {
    function MatPlayButtonComponent(renderer, evt) {
        this.renderer = renderer;
        this.evt = evt;
        this.play = false;
        this.playChanged = new EventEmitter();
        this.keyboard = true;
    }
    MatPlayButtonComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.events = [
            { element: this.video, name: 'play', callback: function (event) { return _this.setVideoPlayback(true); }, dispose: null },
            { element: this.video, name: 'pause', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: 'durationchange', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: 'ended', callback: function (event) { return _this.setVideoPlayback(false); }, dispose: null },
            { element: this.video, name: 'click', callback: function (event) { return _this.toggleVideoPlayback(); }, dispose: null }
        ];
        this.evt.addEvents(this.renderer, this.events);
    };
    MatPlayButtonComponent.prototype.ngOnDestroy = function () {
        this.evt.removeEvents(this.events);
    };
    MatPlayButtonComponent.prototype.setVideoPlayback = function (value) {
        if (this.play !== value)
            this.toggleVideoPlayback();
    };
    MatPlayButtonComponent.prototype.toggleVideoPlayback = function () {
        this.play = !this.play;
        this.updateVideoPlayback();
    };
    MatPlayButtonComponent.prototype.updateVideoPlayback = function () {
        this.play ? this.video.play() : this.video.pause();
        this.playChanged.emit(this.play);
    };
    MatPlayButtonComponent.prototype.onPlayKey = function (event) {
        if (this.keyboard) {
            this.toggleVideoPlayback();
            event.preventDefault();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLVideoElement)
    ], MatPlayButtonComponent.prototype, "video", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MatPlayButtonComponent.prototype, "play", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MatPlayButtonComponent.prototype, "playChanged", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MatPlayButtonComponent.prototype, "keyboard", void 0);
    tslib_1.__decorate([
        HostListener('document:keyup.space', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
        tslib_1.__metadata("design:returntype", void 0)
    ], MatPlayButtonComponent.prototype, "onPlayKey", null);
    MatPlayButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-play-button',
            template: "<button mat-icon-button (click)=\"toggleVideoPlayback()\">\r\n  <mat-icon *ngIf=\"!play\">play_arrow</mat-icon>\r\n  <mat-icon *ngIf=\"play\">pause</mat-icon>\r\n</button>",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [Renderer2,
            EventService])
    ], MatPlayButtonComponent);
    return MatPlayButtonComponent;
}());
export { MatPlayButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPNUQ7SUFXRSxnQ0FDVSxRQUFtQixFQUNuQixHQUFpQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWbEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUVyQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFM0MsYUFBUSxHQUFZLElBQUksQ0FBQztJQU85QixDQUFDO0lBRUwsZ0RBQWUsR0FBZjtRQUFBLGlCQVVDO1FBVEMsSUFBSSxDQUFDLE1BQU0sR0FBRztZQUNaLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQTNCLENBQTJCLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUNwRyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDdEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsUUFBUSxFQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUE1QixDQUE0QixFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDL0csRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBNUIsQ0FBNEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsbUJBQW1CLEVBQUUsRUFBMUIsQ0FBMEIsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1NBQ3JHLENBQUM7UUFFRixJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQsNENBQVcsR0FBWDtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsaURBQWdCLEdBQWhCLFVBQWlCLEtBQWM7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUs7WUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG9EQUFtQixHQUFuQjtRQUNFLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFFRCxvREFBbUIsR0FBbkI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ25ELElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsMENBQVMsR0FBVCxVQUFVLEtBQW9CO1FBQzVCLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUMzQixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBcERRO1FBQVIsS0FBSyxFQUFFOzBDQUFRLGdCQUFnQjt5REFBQztJQUV4QjtRQUFSLEtBQUssRUFBRTs7d0RBQXVCO0lBRXJCO1FBQVQsTUFBTSxFQUFFOzsrREFBMkM7SUFFM0M7UUFBUixLQUFLLEVBQUU7OzREQUEwQjtJQXlDbEM7UUFEQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7aURBQ2hDLGFBQWE7OzJEQUs3QjtJQXJEVSxzQkFBc0I7UUFMbEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGlCQUFpQjtZQUMzQix1TEFBK0M7O1NBRWhELENBQUM7aURBYW9CLFNBQVM7WUFDZCxZQUFZO09BYmhCLHNCQUFzQixDQXVEbEM7SUFBRCw2QkFBQztDQUFBLEFBdkRELElBdURDO1NBdkRZLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFmdGVyVmlld0luaXQsIENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkRlc3Ryb3ksIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBFdmVudEhhbmRsZXIgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL2V2ZW50LWhhbmRsZXIuaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1wbGF5LWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1wbGF5LWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0UGxheUJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XHJcblxyXG4gIEBJbnB1dCgpIHBsYXk6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgQE91dHB1dCgpIHBsYXlDaGFuZ2VkID0gbmV3IEV2ZW50RW1pdHRlcjxib29sZWFuPigpO1xyXG5cclxuICBASW5wdXQoKSBrZXlib2FyZDogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gIHByaXZhdGUgZXZlbnRzOiBFdmVudEhhbmRsZXJbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlXHJcbiAgKSB7IH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ldmVudHMgPSBbXHJcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3BsYXknLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKHRydWUpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ3BhdXNlJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuc2V0VmlkZW9QbGF5YmFjayhmYWxzZSksIGRpc3Bvc2U6IG51bGwgfSxcclxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAnZHVyYXRpb25jaGFuZ2UnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKGZhbHNlKSwgZGlzcG9zZTogbnVsbCB9LFxyXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdlbmRlZCcsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ2NsaWNrJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMudG9nZ2xlVmlkZW9QbGF5YmFjaygpLCBkaXNwb3NlOiBudWxsIH1cclxuICAgIF07XHJcblxyXG4gICAgdGhpcy5ldnQuYWRkRXZlbnRzKHRoaXMucmVuZGVyZXIsIHRoaXMuZXZlbnRzKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5ldnQucmVtb3ZlRXZlbnRzKHRoaXMuZXZlbnRzKTtcclxuICB9XHJcblxyXG4gIHNldFZpZGVvUGxheWJhY2sodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgIGlmICh0aGlzLnBsYXkgIT09IHZhbHVlKVxyXG4gICAgICB0aGlzLnRvZ2dsZVZpZGVvUGxheWJhY2soKTtcclxuICB9XHJcblxyXG4gIHRvZ2dsZVZpZGVvUGxheWJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYXkgPSAhdGhpcy5wbGF5O1xyXG4gICAgdGhpcy51cGRhdGVWaWRlb1BsYXliYWNrKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVWaWRlb1BsYXliYWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wbGF5ID8gdGhpcy52aWRlby5wbGF5KCkgOiB0aGlzLnZpZGVvLnBhdXNlKCk7XHJcbiAgICB0aGlzLnBsYXlDaGFuZ2VkLmVtaXQodGhpcy5wbGF5KTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLnNwYWNlJywgWyckZXZlbnQnXSlcclxuICBvblBsYXlLZXkoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICh0aGlzLmtleWJvYXJkKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlVmlkZW9QbGF5YmFjaygpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19