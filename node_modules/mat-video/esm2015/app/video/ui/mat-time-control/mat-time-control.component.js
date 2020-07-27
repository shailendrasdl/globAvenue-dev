import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
let MatTimeControlComponent = class MatTimeControlComponent {
    constructor() { }
};
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
export { MatTimeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vdWkvbWF0LXRpbWUtY29udHJvbC9tYXQtdGltZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPakQsSUFBYSx1QkFBdUIsR0FBcEMsTUFBYSx1QkFBdUI7SUFHbEMsZ0JBQWdCLENBQUM7Q0FFbEIsQ0FBQTtBQUpVO0lBQVIsS0FBSyxFQUFFO3NDQUFRLGdCQUFnQjtzREFBQztBQUR0Qix1QkFBdUI7SUFMbkMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLGtCQUFrQjtRQUM1QixtSUFBZ0Q7O0tBRWpELENBQUM7O0dBQ1csdUJBQXVCLENBS25DO1NBTFksdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtdGltZS1jb250cm9sJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbWF0LXRpbWUtY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFRpbWVDb250cm9sQ29tcG9uZW50IHtcclxuICBASW5wdXQoKSB2aWRlbzogSFRNTFZpZGVvRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbn1cclxuIl19