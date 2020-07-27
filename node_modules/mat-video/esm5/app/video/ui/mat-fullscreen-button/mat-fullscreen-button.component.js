import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
import { FullscreenService } from '../../services/fullscreen.service';
var MatFullscreenButtonComponent = /** @class */ (function () {
    function MatFullscreenButtonComponent(fscreen, evt) {
        this.fscreen = fscreen;
        this.evt = evt;
        this.canFullscreen = false;
        this.fullscreen = false;
        this.fullscreenChanged = new EventEmitter();
        this.keyboard = true;
    }
    MatFullscreenButtonComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.fscreen.isEnabled())
            this.canFullscreen = true;
        this.fscreen.onChange(function (event) { return _this.fscreen.isFullscreen() ? _this.onChangesFullscreen(true) : _this.onChangesFullscreen(false); });
    };
    MatFullscreenButtonComponent.prototype.setFullscreen = function (value) {
        if (this.canFullscreen && this.fullscreen !== value)
            this.toggleFullscreen();
    };
    MatFullscreenButtonComponent.prototype.toggleFullscreen = function () {
        this.fullscreen = !this.fullscreen;
        this.updateFullscreen();
    };
    MatFullscreenButtonComponent.prototype.updateFullscreen = function () {
        this.fullscreen ? this.fscreen.request(this.player) : this.fscreen.exit();
        this.fullscreenChanged.emit(this.fullscreen);
    };
    MatFullscreenButtonComponent.prototype.onChangesFullscreen = function (value) {
        this.fullscreen = value;
        this.fullscreenChanged.emit(this.fullscreen);
    };
    MatFullscreenButtonComponent.prototype.onFullscreenKey = function (event) {
        if (this.keyboard) {
            this.toggleFullscreen();
            event.preventDefault();
        }
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLVideoElement)
    ], MatFullscreenButtonComponent.prototype, "player", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MatFullscreenButtonComponent.prototype, "fullscreen", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], MatFullscreenButtonComponent.prototype, "fullscreenChanged", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], MatFullscreenButtonComponent.prototype, "keyboard", void 0);
    tslib_1.__decorate([
        HostListener('document:keyup.f', ['$event']),
        tslib_1.__metadata("design:type", Function),
        tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
        tslib_1.__metadata("design:returntype", void 0)
    ], MatFullscreenButtonComponent.prototype, "onFullscreenKey", null);
    MatFullscreenButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-fullscreen-button',
            template: "<button mat-icon-button [disabled]=\"!canFullscreen\" (click)=\"toggleFullscreen()\">\r\n  <mat-icon *ngIf=\"!fullscreen\">fullscreen</mat-icon>\r\n  <mat-icon *ngIf=\"fullscreen\">fullscreen_exit</mat-icon>\r\n</button>",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [FullscreenService,
            EventService])
    ], MatFullscreenButtonComponent);
    return MatFullscreenButtonComponent;
}());
export { MatFullscreenButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtZnVsbHNjcmVlbi1idXR0b24vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBVSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFFN0YsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzVELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBT3RFO0lBV0Usc0NBQ1UsT0FBMEIsRUFDMUIsR0FBaUI7UUFEakIsWUFBTyxHQUFQLE9BQU8sQ0FBbUI7UUFDMUIsUUFBRyxHQUFILEdBQUcsQ0FBYztRQVozQixrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUl0QixlQUFVLEdBQVksS0FBSyxDQUFDO1FBRTNCLHNCQUFpQixHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFFakQsYUFBUSxHQUFZLElBQUksQ0FBQztJQUs5QixDQUFDO0lBRUwsK0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUU1QixJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLEtBQUssQ0FBQyxFQUE5RixDQUE4RixDQUFDLENBQUM7SUFDakksQ0FBQztJQUVELG9EQUFhLEdBQWIsVUFBYyxLQUFjO1FBQzFCLElBQUksSUFBSSxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLEtBQUs7WUFDakQsSUFBSSxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELHVEQUFnQixHQUFoQjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQ25DLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCx1REFBZ0IsR0FBaEI7UUFDRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUUsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDL0MsQ0FBQztJQUVELDBEQUFtQixHQUFuQixVQUFvQixLQUFjO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFHRCxzREFBZSxHQUFmLFVBQWdCLEtBQW9CO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztZQUN4QixLQUFLLENBQUMsY0FBYyxFQUFFLENBQUM7U0FDeEI7SUFDSCxDQUFDO0lBOUNRO1FBQVIsS0FBSyxFQUFFOzBDQUFTLGdCQUFnQjtnRUFBQztJQUV6QjtRQUFSLEtBQUssRUFBRTs7b0VBQTZCO0lBRTNCO1FBQVQsTUFBTSxFQUFFOzsyRUFBaUQ7SUFFakQ7UUFBUixLQUFLLEVBQUU7O2tFQUEwQjtJQW1DbEM7UUFEQyxZQUFZLENBQUMsa0JBQWtCLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7aURBQ3RCLGFBQWE7O3VFQUtuQztJQWpEVSw0QkFBNEI7UUFMeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyx3T0FBcUQ7O1NBRXRELENBQUM7aURBYW1CLGlCQUFpQjtZQUNyQixZQUFZO09BYmhCLDRCQUE0QixDQW1EeEM7SUFBRCxtQ0FBQztDQUFBLEFBbkRELElBbURDO1NBbkRZLDRCQUE0QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBIb3N0TGlzdGVuZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgRXZlbnRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZXZlbnQuc2VydmljZSc7XHJcbmltcG9ydCB7IEZ1bGxzY3JlZW5TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZnVsbHNjcmVlbi5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LWZ1bGxzY3JlZW4tYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWZ1bGxzY3JlZW4tYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtZnVsbHNjcmVlbi1idXR0b24uY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRGdWxsc2NyZWVuQnV0dG9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjYW5GdWxsc2NyZWVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBJbnB1dCgpIHBsYXllcjogSFRNTFZpZGVvRWxlbWVudDtcclxuXHJcbiAgQElucHV0KCkgZnVsbHNjcmVlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBAT3V0cHV0KCkgZnVsbHNjcmVlbkNoYW5nZWQgPSBuZXcgRXZlbnRFbWl0dGVyPGJvb2xlYW4+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGtleWJvYXJkOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGZzY3JlZW46IEZ1bGxzY3JlZW5TZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBldnQ6IEV2ZW50U2VydmljZVxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZnNjcmVlbi5pc0VuYWJsZWQoKSlcclxuICAgICAgdGhpcy5jYW5GdWxsc2NyZWVuID0gdHJ1ZTtcclxuXHJcbiAgICB0aGlzLmZzY3JlZW4ub25DaGFuZ2UoZXZlbnQgPT4gdGhpcy5mc2NyZWVuLmlzRnVsbHNjcmVlbigpID8gdGhpcy5vbkNoYW5nZXNGdWxsc2NyZWVuKHRydWUpIDogdGhpcy5vbkNoYW5nZXNGdWxsc2NyZWVuKGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBzZXRGdWxsc2NyZWVuKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICBpZiAodGhpcy5jYW5GdWxsc2NyZWVuICYmIHRoaXMuZnVsbHNjcmVlbiAhPT0gdmFsdWUpXHJcbiAgICAgIHRoaXMudG9nZ2xlRnVsbHNjcmVlbigpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlRnVsbHNjcmVlbigpOiB2b2lkIHtcclxuICAgIHRoaXMuZnVsbHNjcmVlbiA9ICF0aGlzLmZ1bGxzY3JlZW47XHJcbiAgICB0aGlzLnVwZGF0ZUZ1bGxzY3JlZW4oKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUZ1bGxzY3JlZW4oKTogdm9pZCB7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPyB0aGlzLmZzY3JlZW4ucmVxdWVzdCh0aGlzLnBsYXllcikgOiB0aGlzLmZzY3JlZW4uZXhpdCgpO1xyXG4gICAgdGhpcy5mdWxsc2NyZWVuQ2hhbmdlZC5lbWl0KHRoaXMuZnVsbHNjcmVlbik7XHJcbiAgfVxyXG5cclxuICBvbkNoYW5nZXNGdWxsc2NyZWVuKHZhbHVlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICB0aGlzLmZ1bGxzY3JlZW4gPSB2YWx1ZTtcclxuICAgIHRoaXMuZnVsbHNjcmVlbkNoYW5nZWQuZW1pdCh0aGlzLmZ1bGxzY3JlZW4pO1xyXG4gIH1cclxuXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5dXAuZicsIFsnJGV2ZW50J10pXHJcbiAgb25GdWxsc2NyZWVuS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICBpZiAodGhpcy5rZXlib2FyZCkge1xyXG4gICAgICB0aGlzLnRvZ2dsZUZ1bGxzY3JlZW4oKTtcclxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==