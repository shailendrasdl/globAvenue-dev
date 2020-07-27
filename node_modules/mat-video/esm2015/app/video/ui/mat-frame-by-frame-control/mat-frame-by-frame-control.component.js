import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
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
export { MatFrameByFrameControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3VpL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sL21hdC1mcmFtZS1ieS1mcmFtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSwrQkFBK0IsR0FBNUMsTUFBYSwrQkFBK0I7SUFJeEM7UUFGUyxRQUFHLEdBQVcsS0FBSyxDQUFDO0lBRWIsQ0FBQztJQUVqQixRQUFRO0lBQ1IsQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFnQjtRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEVBQUU7WUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQztTQUN0QjtRQUVELE1BQU0sYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDeEQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsT0FBTyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLE1BQU0sQ0FBQztJQUNwQyxDQUFDO0NBRUosQ0FBQTtBQWxCWTtJQUFSLEtBQUssRUFBRTtzQ0FBUSxnQkFBZ0I7OERBQUM7QUFDeEI7SUFBUixLQUFLLEVBQUU7OzREQUFxQjtBQUZwQiwrQkFBK0I7SUFMM0MsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLDRCQUE0QjtRQUN0QyxpY0FBMEQ7O0tBRTdELENBQUM7O0dBQ1csK0JBQStCLENBbUIzQztTQW5CWSwrQkFBK0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXQtZnJhbWUtYnktZnJhbWUtY29udHJvbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWF0LWZyYW1lLWJ5LWZyYW1lLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRGcmFtZUJ5RnJhbWVDb250cm9sQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xyXG4gICAgQElucHV0KCkgZnBzOiBudW1iZXIgPSAyOS45NztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgfVxyXG5cclxuICAgIHNlZWtGcmFtZXMobmJGcmFtZXM6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy52aWRlby5wYXVzZWQpIHtcclxuICAgICAgICAgICAgdGhpcy52aWRlby5wYXVzZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY3VycmVudEZyYW1lcyA9IHRoaXMudmlkZW8uY3VycmVudFRpbWUgKiB0aGlzLmZwcztcclxuICAgICAgICBjb25zdCBuZXdQb3MgPSAoKGN1cnJlbnRGcmFtZXMgKyBuYkZyYW1lcykgLyB0aGlzLmZwcykgKyAwLjAwMDAxO1xyXG4gICAgICAgIHRoaXMudmlkZW8uY3VycmVudFRpbWUgPSBuZXdQb3M7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==