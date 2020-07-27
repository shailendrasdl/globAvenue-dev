import * as tslib_1 from "tslib";
import { Directive, ElementRef, Host, Input } from '@angular/core';
import { MatVideoComponent } from '../video.component';
var MatVideoTrackDirective = /** @class */ (function () {
    function MatVideoTrackDirective(matVideoComponent, el) {
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
    MatVideoTrackDirective.prototype.ngOnChanges = function (changes) {
        this.track.src = this.src;
        this.track.kind = this.kind;
        this.track.srclang = this.srclang;
        this.track.label = this.label;
        if (!this.init)
            this.video.load();
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "src", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "kind", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "srclang", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatVideoTrackDirective.prototype, "label", void 0);
    MatVideoTrackDirective = tslib_1.__decorate([
        Directive({
            selector: '[matVideoTrack]'
        }),
        tslib_1.__param(0, Host()),
        tslib_1.__metadata("design:paramtypes", [MatVideoComponent,
            ElementRef])
    ], MatVideoTrackDirective);
    return MatVideoTrackDirective;
}());
export { MatVideoTrackDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZpZGVvLXRyYWNrLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby9kaXJlY3RpdmVzL21hdC12aWRlby10cmFjay5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxLQUFLLEVBQTRCLE1BQU0sZUFBZSxDQUFDO0FBRTdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBS3ZEO0lBVUksZ0NBQ29CLGlCQUFvQyxFQUM1QyxFQUFjO1FBRE4sc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUM1QyxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBWGpCLFFBQUcsR0FBVyxJQUFJLENBQUM7UUFDbkIsU0FBSSxHQUFXLElBQUksQ0FBQztRQUNwQixZQUFPLEdBQVcsSUFBSSxDQUFDO1FBQ3ZCLFVBQUssR0FBVyxJQUFJLENBQUM7UUFFdEIsU0FBSSxHQUFHLElBQUksQ0FBQztRQVFoQixJQUFJLENBQUMsS0FBSyxHQUFHLGlCQUFpQixDQUFDO1FBQy9CLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsSUFBSSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDO0lBRUQsNENBQVcsR0FBWCxVQUFZLE9BQXNCO1FBQzlCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDMUIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztRQUM1QixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFFOUIsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJO1lBQ1YsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBMUJRO1FBQVIsS0FBSyxFQUFFOzt1REFBb0I7SUFDbkI7UUFBUixLQUFLLEVBQUU7O3dEQUFxQjtJQUNwQjtRQUFSLEtBQUssRUFBRTs7MkRBQXdCO0lBQ3ZCO1FBQVIsS0FBSyxFQUFFOzt5REFBc0I7SUFKckIsc0JBQXNCO1FBSGxDLFNBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxpQkFBaUI7U0FDOUIsQ0FBQztRQVlPLG1CQUFBLElBQUksRUFBRSxDQUFBO2lEQUE0QixpQkFBaUI7WUFDeEMsVUFBVTtPQVpqQixzQkFBc0IsQ0E2QmxDO0lBQUQsNkJBQUM7Q0FBQSxBQTdCRCxJQTZCQztTQTdCWSxzQkFBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3QsIElucHV0LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE1hdFZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlkZW8uY29tcG9uZW50JztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gICAgc2VsZWN0b3I6ICdbbWF0VmlkZW9UcmFja10nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRWaWRlb1RyYWNrRGlyZWN0aXZlIGltcGxlbWVudHMgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIHNyYzogc3RyaW5nID0gbnVsbDtcclxuICAgIEBJbnB1dCgpIGtpbmQ6IHN0cmluZyA9IG51bGw7XHJcbiAgICBASW5wdXQoKSBzcmNsYW5nOiBzdHJpbmcgPSBudWxsO1xyXG4gICAgQElucHV0KCkgbGFiZWw6IHN0cmluZyA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0ID0gdHJ1ZTtcclxuICAgIHByaXZhdGUgdmlkZW86IE1hdFZpZGVvQ29tcG9uZW50O1xyXG4gICAgcHJpdmF0ZSB0cmFjazogSFRNTFRyYWNrRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBASG9zdCgpIHByaXZhdGUgbWF0VmlkZW9Db21wb25lbnQ6IE1hdFZpZGVvQ29tcG9uZW50LFxyXG4gICAgICAgIHByaXZhdGUgZWw6IEVsZW1lbnRSZWZcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudmlkZW8gPSBtYXRWaWRlb0NvbXBvbmVudDtcclxuICAgICAgICB0aGlzLnRyYWNrID0gZWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICB0aGlzLmluaXQgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50cmFjay5zcmMgPSB0aGlzLnNyYztcclxuICAgICAgICB0aGlzLnRyYWNrLmtpbmQgPSB0aGlzLmtpbmQ7XHJcbiAgICAgICAgdGhpcy50cmFjay5zcmNsYW5nID0gdGhpcy5zcmNsYW5nO1xyXG4gICAgICAgIHRoaXMudHJhY2subGFiZWwgPSB0aGlzLmxhYmVsO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaW5pdClcclxuICAgICAgICAgICAgdGhpcy52aWRlby5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==