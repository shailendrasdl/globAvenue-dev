import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { EventService } from '../../services/event.service';
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
export { MatPlayButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtcGxheS1idXR0b24vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFpQixTQUFTLEVBQUUsWUFBWSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQWEsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUcxSCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFPNUQsSUFBYSxzQkFBc0IsR0FBbkMsTUFBYSxzQkFBc0I7SUFXakMsWUFDVSxRQUFtQixFQUNuQixHQUFpQjtRQURqQixhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQ25CLFFBQUcsR0FBSCxHQUFHLENBQWM7UUFWbEIsU0FBSSxHQUFZLEtBQUssQ0FBQztRQUVyQixnQkFBVyxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFM0MsYUFBUSxHQUFZLElBQUksQ0FBQztJQU85QixDQUFDO0lBRUwsZUFBZTtRQUNiLElBQUksQ0FBQyxNQUFNLEdBQUc7WUFDWixFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUU7WUFDcEcsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQ3RHLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFO1lBQy9HLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtZQUN0RyxFQUFFLE9BQU8sRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLG1CQUFtQixFQUFFLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRTtTQUNyRyxDQUFDO1FBRUYsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELGdCQUFnQixDQUFDLEtBQWM7UUFDN0IsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLEtBQUs7WUFDckIsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDbkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFHRCxTQUFTLENBQUMsS0FBb0I7UUFDNUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQzNCLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FFRixDQUFBO0FBdERVO0lBQVIsS0FBSyxFQUFFO3NDQUFRLGdCQUFnQjtxREFBQztBQUV4QjtJQUFSLEtBQUssRUFBRTs7b0RBQXVCO0FBRXJCO0lBQVQsTUFBTSxFQUFFOzsyREFBMkM7QUFFM0M7SUFBUixLQUFLLEVBQUU7O3dEQUEwQjtBQXlDbEM7SUFEQyxZQUFZLENBQUMsc0JBQXNCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7NkNBQ2hDLGFBQWE7O3VEQUs3QjtBQXJEVSxzQkFBc0I7SUFMbEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQix1TEFBK0M7O0tBRWhELENBQUM7NkNBYW9CLFNBQVM7UUFDZCxZQUFZO0dBYmhCLHNCQUFzQixDQXVEbEM7U0F2RFksc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50SGFuZGxlciB9IGZyb20gJy4uLy4uL2ludGVyZmFjZXMvZXZlbnQtaGFuZGxlci5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBFdmVudFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9ldmVudC5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXBsYXktYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXBsYXktYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtcGxheS1idXR0b24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRQbGF5QnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcclxuXHJcbiAgQElucHV0KCkgcGxheTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgcGxheUNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgcHJpdmF0ZSBldmVudHM6IEV2ZW50SGFuZGxlcltdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgZXZ0OiBFdmVudFNlcnZpY2VcclxuICApIHsgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmV2ZW50cyA9IFtcclxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAncGxheScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2sodHJ1ZSksIGRpc3Bvc2U6IG51bGwgfSxcclxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAncGF1c2UnLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy5zZXRWaWRlb1BsYXliYWNrKGZhbHNlKSwgZGlzcG9zZTogbnVsbCB9LFxyXG4gICAgICB7IGVsZW1lbnQ6IHRoaXMudmlkZW8sIG5hbWU6ICdkdXJhdGlvbmNoYW5nZScsIGNhbGxiYWNrOiBldmVudCA9PiB0aGlzLnNldFZpZGVvUGxheWJhY2soZmFsc2UpLCBkaXNwb3NlOiBudWxsIH0sXHJcbiAgICAgIHsgZWxlbWVudDogdGhpcy52aWRlbywgbmFtZTogJ2VuZGVkJywgY2FsbGJhY2s6IGV2ZW50ID0+IHRoaXMuc2V0VmlkZW9QbGF5YmFjayhmYWxzZSksIGRpc3Bvc2U6IG51bGwgfSxcclxuICAgICAgeyBlbGVtZW50OiB0aGlzLnZpZGVvLCBuYW1lOiAnY2xpY2snLCBjYWxsYmFjazogZXZlbnQgPT4gdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCksIGRpc3Bvc2U6IG51bGwgfVxyXG4gICAgXTtcclxuXHJcbiAgICB0aGlzLmV2dC5hZGRFdmVudHModGhpcy5yZW5kZXJlciwgdGhpcy5ldmVudHMpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmV2dC5yZW1vdmVFdmVudHModGhpcy5ldmVudHMpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlkZW9QbGF5YmFjayh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgaWYgKHRoaXMucGxheSAhPT0gdmFsdWUpXHJcbiAgICAgIHRoaXMudG9nZ2xlVmlkZW9QbGF5YmFjaygpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlVmlkZW9QbGF5YmFjaygpOiB2b2lkIHtcclxuICAgIHRoaXMucGxheSA9ICF0aGlzLnBsYXk7XHJcbiAgICB0aGlzLnVwZGF0ZVZpZGVvUGxheWJhY2soKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZVZpZGVvUGxheWJhY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYXkgPyB0aGlzLnZpZGVvLnBsYXkoKSA6IHRoaXMudmlkZW8ucGF1c2UoKTtcclxuICAgIHRoaXMucGxheUNoYW5nZWQuZW1pdCh0aGlzLnBsYXkpO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuc3BhY2UnLCBbJyRldmVudCddKVxyXG4gIG9uUGxheUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKHRoaXMua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVWaWRlb1BsYXliYWNrKCk7XHJcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=