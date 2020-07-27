import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MatQualityControlComponent = class MatQualityControlComponent {
    constructor() { }
};
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
export { MatQualityControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXF1YWxpdHktY29udHJvbC9tYXQtcXVhbGl0eS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSwwQkFBMEIsR0FBdkMsTUFBYSwwQkFBMEI7SUFHckMsZ0JBQWdCLENBQUM7Q0FFbEIsQ0FBQTtBQUpVO0lBQVIsS0FBSyxFQUFFO3NDQUFRLGdCQUFnQjt5REFBQztBQUR0QiwwQkFBMEI7SUFMdEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHFCQUFxQjtRQUMvQixnSEFBbUQ7O0tBRXBELENBQUM7O0dBQ1csMEJBQTBCLENBS3RDO1NBTFksMEJBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtcXVhbGl0eS1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXF1YWxpdHktY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFF1YWxpdHlDb250cm9sQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIl19