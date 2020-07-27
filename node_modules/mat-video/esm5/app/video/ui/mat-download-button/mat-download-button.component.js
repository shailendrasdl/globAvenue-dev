import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var MatDownloadButtonComponent = /** @class */ (function () {
    function MatDownloadButtonComponent() {
    }
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", HTMLVideoElement)
    ], MatDownloadButtonComponent.prototype, "video", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], MatDownloadButtonComponent.prototype, "title", void 0);
    MatDownloadButtonComponent = tslib_1.__decorate([
        Component({
            selector: 'mat-download-button',
            template: "<a mat-icon-button [href]=\"video?.currentSrc\" [download]=\"title\">\r\n  <mat-icon>file_download</mat-icon>\r\n</a>",
            styles: ["a{color:inherit;text-decoration:none}"]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MatDownloadButtonComponent);
    return MatDownloadButtonComponent;
}());
export { MatDownloadButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQ7SUFJRTtJQUFnQixDQUFDO0lBSFI7UUFBUixLQUFLLEVBQUU7MENBQVEsZ0JBQWdCOzZEQUFDO0lBQ3hCO1FBQVIsS0FBSyxFQUFFOzs2REFBZTtJQUZaLDBCQUEwQjtRQUx0QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLGlJQUFtRDs7U0FFcEQsQ0FBQzs7T0FDVywwQkFBMEIsQ0FNdEM7SUFBRCxpQ0FBQztDQUFBLEFBTkQsSUFNQztTQU5ZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtZG93bmxvYWQtYnV0dG9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdERvd25sb2FkQnV0dG9uQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcclxuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxufVxyXG4iXX0=