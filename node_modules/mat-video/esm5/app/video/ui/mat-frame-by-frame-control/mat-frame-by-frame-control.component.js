import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MatFrameByFrameControlComponent = /** @class */ (function () {
    function MatFrameByFrameControlComponent() {
        this.fps = 29.97;
    }
    MatFrameByFrameControlComponent.prototype.ngOnInit = function () {
    };
    MatFrameByFrameControlComponent.prototype.seekFrames = function (nbFrames) {
        if (!this.video.paused) {
            this.video.pause();
        }
        var currentFrames = this.video.currentTime * this.fps;
        var newPos = ((currentFrames + nbFrames) / this.fps) + 0.00001;
        this.video.currentTime = newPos;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLVideoElement)
    ], MatFrameByFrameControlComponent.prototype, "video", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Number)
    ], MatFrameByFrameControlComponent.prototype, "fps", void 0);
    MatFrameByFrameControlComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-frame-by-frame-control',
            template: "<button mat-icon-button (click)=\"seekFrames(-5)\">\r\n    <mat-icon>skip_previous</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(-1)\">\r\n    <mat-icon>arrow_left</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(1)\">\r\n    <mat-icon>arrow_right</mat-icon>\r\n</button>\r\n\r\n<button mat-icon-button (click)=\"seekFrames(5)\">\r\n    <mat-icon>skip_next</mat-icon>\r\n</button>",
            styles: [""]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatFrameByFrameControlComponent);
    return MatFrameByFrameControlComponent;
}());
export { MatFrameByFrameControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFJSTtRQUZTLFFBQUcsR0FBVyxLQUFLLENBQUM7SUFFYixDQUFDO0lBRWpCLGtEQUFRLEdBQVI7SUFDQSxDQUFDO0lBRUQsb0RBQVUsR0FBVixVQUFXLFFBQWdCO1FBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDO1NBQ3RCO1FBRUQsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQztRQUN4RCxJQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxPQUFPLENBQUM7UUFDakUsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO0lBQ3BDLENBQUM7SUFoQlE7UUFBUixLQUFLLEVBQUU7MENBQVEsZ0JBQWdCO2tFQUFDO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOztnRUFBcUI7SUFGcEIsK0JBQStCO1FBTDNDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsaWNBQTBEOztTQUU3RCxDQUFDOztPQUNXLCtCQUErQixDQW1CM0M7SUFBRCxzQ0FBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLCtCQUErQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdEZyYW1lQnlGcmFtZUNvbnRyb2xDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XHJcbiAgICBASW5wdXQoKSBmcHM6IG51bWJlciA9IDI5Ljk3O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICB9XHJcblxyXG4gICAgc2Vla0ZyYW1lcyhuYkZyYW1lczogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnZpZGVvLnBhdXNlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpZGVvLnBhdXNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjdXJyZW50RnJhbWVzID0gdGhpcy52aWRlby5jdXJyZW50VGltZSAqIHRoaXMuZnBzO1xyXG4gICAgICAgIGNvbnN0IG5ld1BvcyA9ICgoY3VycmVudEZyYW1lcyArIG5iRnJhbWVzKSAvIHRoaXMuZnBzKSArIDAuMDAwMDE7XHJcbiAgICAgICAgdGhpcy52aWRlby5jdXJyZW50VGltZSA9IG5ld1BvcztcclxuICAgIH1cclxuXHJcbn1cclxuIl19