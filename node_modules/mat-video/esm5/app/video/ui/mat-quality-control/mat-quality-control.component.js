import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MatQualityControlComponent = /** @class */ (function () {
    function MatQualityControlComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLVideoElement)
    ], MatQualityControlComponent.prototype, "video", void 0);
    MatQualityControlComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-quality-control',
            template: "<div *ngIf=\"video && video.videoHeight\" class=\"quality\">\r\n  {{ video.videoHeight }}p\r\n</div>",
            styles: [".quality{display:inline-block;font-size:12px;padding-left:12px;padding-right:12px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatQualityControlComponent);
    return MatQualityControlComponent;
}());
export { MatQualityControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7SUFHRTtJQUFnQixDQUFDO0lBRlI7UUFBUixLQUFLLEVBQUU7MENBQVEsZ0JBQWdCOzZEQUFDO0lBRHRCLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGdIQUFtRDs7U0FFcEQsQ0FBQzs7T0FDVywwQkFBMEIsQ0FLdEM7SUFBRCxpQ0FBQztDQUFBLEFBTEQsSUFLQztTQUxZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXF1YWxpdHktY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC1xdWFsaXR5LWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC1xdWFsaXR5LWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRRdWFsaXR5Q29udHJvbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiJdfQ==