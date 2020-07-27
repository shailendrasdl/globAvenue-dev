import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MatTimeControlComponent = /** @class */ (function () {
    function MatTimeControlComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLVideoElement)
    ], MatTimeControlComponent.prototype, "video", void 0);
    MatTimeControlComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-time-control',
            template: "<div class=\"playtime\">\r\n  {{ video?.currentTime | secondsToTime }} / {{ video?.duration | secondsToTime}}\r\n</div>",
            styles: [".playtime{display:inline;font-size:12px}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatTimeControlComponent);
    return MatTimeControlComponent;
}());
export { MatTimeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQ7SUFHRTtJQUFnQixDQUFDO0lBRlI7UUFBUixLQUFLLEVBQUU7MENBQVEsZ0JBQWdCOzBEQUFDO0lBRHRCLHVCQUF1QjtRQUxuQyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLG1JQUFnRDs7U0FFakQsQ0FBQzs7T0FDVyx1QkFBdUIsQ0FLbkM7SUFBRCw4QkFBQztDQUFBLEFBTEQsSUFLQztTQUxZLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWF0LXRpbWUtY29udHJvbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL21hdC10aW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC10aW1lLWNvbnRyb2wuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBNYXRUaW1lQ29udHJvbENvbXBvbmVudCB7XHJcbiAgQElucHV0KCkgdmlkZW86IEhUTUxWaWRlb0VsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiJdfQ==