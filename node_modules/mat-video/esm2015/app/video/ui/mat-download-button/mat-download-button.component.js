import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MatDownloadButtonComponent = class MatDownloadButtonComponent {
    constructor() { }
};
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
export { MatDownloadButtonComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LWRvd25sb2FkLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LWRvd25sb2FkLWJ1dHRvbi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPekQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFJckMsZ0JBQWdCLENBQUM7Q0FFbEIsQ0FBQTtBQUxVO0lBQVIsS0FBSyxFQUFFO3NDQUFRLGdCQUFnQjt5REFBQztBQUN4QjtJQUFSLEtBQUssRUFBRTs7eURBQWU7QUFGWiwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixpSUFBbUQ7O0tBRXBELENBQUM7O0dBQ1csMEJBQTBCLENBTXRDO1NBTlksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ21hdC1kb3dubG9hZC1idXR0b24nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9tYXQtZG93bmxvYWQtYnV0dG9uLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTWF0RG93bmxvYWRCdXR0b25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50O1xyXG4gIEBJbnB1dCgpIHRpdGxlOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG59XHJcbiJdfQ==