import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Optional, Attribute } from '@angular/core';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
/** Counter used to generate unique IDs for progress bars. */
let sliderprogressbarId = 0;
let MatSliderProgressBarComponent = class MatSliderProgressBarComponent extends MatSlider {
    constructor(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        super(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex);
        this.mode = 'buffer';
        this.value = 0;
        this._bufferValue = 0;
        /** The id of the progress bar. */
        this.sliderprogressbarId = `mat-slider-progress-bar-${sliderprogressbarId++}`;
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /** Buffer value of the progress bar. Defaults to zero. */
    get bufferValue() { return this._bufferValue; }
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /** CSS styles for the track fill element. */
    get _trackBufferStyles() {
        if (this.mode === 'buffer') {
            const axis = this.vertical ? 'Y' : 'X';
            return {
                'transform': `translate${axis}(0px) scale${axis}(${this._bufferValue / 100})`
            };
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatSliderProgressBarComponent.prototype, "mode", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], MatSliderProgressBarComponent.prototype, "value", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number),
    tslib_1.__metadata("design:paramtypes", [Number])
], MatSliderProgressBarComponent.prototype, "bufferValue", null);
MatSliderProgressBarComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-slider-progress-bar',
        template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\r\n    <div class=\"mat-slider-track-wrapper\">\r\n        <svg width=\"100%\" height=\"2\" focusable=\"false\" class=\"mat-slider-progress-background\">\r\n            <defs>\r\n                <pattern [id]=\"sliderprogressbarId\" x=\"2.5\" y=\"0\" width=\"5\" height=\"2.5\" patternUnits=\"userSpaceOnUse\">\r\n                    <circle cx=\"1.25\" cy=\"1.25\" r=\"1.25\" />\r\n                </pattern>\r\n            </defs>\r\n            <rect [attr.fill]=\"'url(#' + sliderprogressbarId + ')'\" width=\"100%\" height=\"100%\" />\r\n        </svg>\r\n        <div class=\"mat-slider-track-fill mat-slider-track-buffer\" [ngStyle]=\"_trackBufferStyles\"></div>\r\n        <div class=\"mat-slider-track-fill\" [ngStyle]=\"_trackFillStyles\"></div>\r\n    </div>\r\n    <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_ticksContainerStyles\">\r\n        <div class=\"mat-slider-ticks\" [ngStyle]=\"_ticksStyles\"></div>\r\n    </div>\r\n    <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_thumbContainerStyles\">\r\n        <div class=\"mat-slider-focus-ring\"></div>\r\n        <div class=\"mat-slider-thumb\"></div>\r\n        <div class=\"mat-slider-thumb-label\">\r\n            <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\r\n        </div>\r\n    </div>\r\n</div>",
        providers: [MAT_SLIDER_VALUE_ACCESSOR],
        host: {
            '(focus)': '_onFocus()',
            '(blur)': '_onBlur()',
            '(click)': 'this["_onClick"] ? this["_onClick"]($event) : null',
            '(mousedown)': 'this["_onMousedown"] ? this["_onMousedown"]($event) : null',
            '(keydown)': '_onKeydown($event)',
            '(keyup)': '_onKeyup()',
            '(mouseenter)': '_onMouseenter()',
            '(slide)': '_onSlide($event)',
            '(slideend)': '_onSlideEnd()',
            '(slidestart)': '_onSlideStart($event)',
            'class': 'mat-slider',
            'role': 'slider',
            '[tabIndex]': 'tabIndex',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
            '[class.mat-slider-disabled]': 'disabled',
            '[class.mat-slider-has-ticks]': 'tickInterval',
            '[class.mat-slider-horizontal]': '!vertical',
            '[class.mat-slider-axis-inverted]': '_invertAxis',
            '[class.mat-slider-sliding]': '_isSliding',
            '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
            '[class.mat-slider-vertical]': 'vertical',
            '[class.mat-slider-min-value]': '_isMinValue',
            '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue && _thumbGap && _invertAxis',
        },
        inputs: ['disabled', 'color', 'tabIndex'],
        changeDetection: ChangeDetectionStrategy.OnPush,
        styles: [":host{width:100%}.mat-slider-progress-background{position:absolute;height:2px;width:100%;fill:#d3d3d3}.mat-slider-track-buffer{background-color:#d3d3d3!important}.mat-slider-thumb{border-color:transparent!important;visibility:hidden;opacity:0;transition:visibility .2s,opacity .2s linear}:host:hover .mat-slider-thumb{visibility:visible;opacity:1;transition:opacity .2s linear}"]
    }),
    tslib_1.__param(3, Optional()),
    tslib_1.__param(4, Attribute('tabindex')),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        FocusMonitor,
        ChangeDetectorRef,
        Directionality, String])
], MatSliderProgressBarComponent);
export { MatSliderProgressBarComponent };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLFVBQVUsRUFBRSxpQkFBaUIsRUFBcUIsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SyxPQUFPLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCw2REFBNkQ7QUFDN0QsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUF3QzVCLElBQWEsNkJBQTZCLEdBQTFDLE1BQWEsNkJBQThCLFNBQVEsU0FBUztJQVl4RCxZQUNJLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUN4QixHQUFtQixFQUNSLFFBQWdCO1FBRXZDLEtBQUssQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixFQUFFLEdBQUcsRUFBRSxRQUFRLENBQUMsQ0FBQztRQWxCN0QsU0FBSSxHQUFXLFFBQVEsQ0FBQztRQUN4QixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBS25CLGlCQUFZLEdBQVcsQ0FBQyxDQUFDO1FBRWpDLGtDQUFrQztRQUNsQyx3QkFBbUIsR0FBRywyQkFBMkIsbUJBQW1CLEVBQUUsRUFBRSxDQUFDO1FBVXJFLElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBbEJELDBEQUEwRDtJQUUxRCxJQUFJLFdBQVcsS0FBYSxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQ3ZELElBQUksV0FBVyxDQUFDLENBQVMsSUFBSSxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBaUJqRSw2Q0FBNkM7SUFDN0MsSUFBSSxrQkFBa0I7UUFDbEIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTtZQUN4QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztZQUN2QyxPQUFPO2dCQUNILFdBQVcsRUFBRSxZQUFZLElBQUksY0FBYyxJQUFJLElBQUksSUFBSSxDQUFDLFlBQVksR0FBRyxHQUFHLEdBQUc7YUFDaEYsQ0FBQztTQUNMO0lBQ0wsQ0FBQztDQUNKLENBQUE7QUEvQlk7SUFBUixLQUFLLEVBQUU7OzJEQUF5QjtBQUN4QjtJQUFSLEtBQUssRUFBRTs7NERBQW1CO0FBRzNCO0lBREMsS0FBSyxFQUFFOzs7Z0VBQytDO0FBTDlDLDZCQUE2QjtJQXRDekMsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLHlCQUF5QjtRQUNuQyw4MUNBQXVEO1FBRXZELFNBQVMsRUFBRSxDQUFDLHlCQUF5QixDQUFDO1FBQ3RDLElBQUksRUFBRTtZQUNGLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFNBQVMsRUFBRSxvREFBb0Q7WUFDL0QsYUFBYSxFQUFFLDREQUE0RDtZQUMzRSxXQUFXLEVBQUUsb0JBQW9CO1lBQ2pDLFNBQVMsRUFBRSxZQUFZO1lBQ3ZCLGNBQWMsRUFBRSxpQkFBaUI7WUFDakMsU0FBUyxFQUFFLGtCQUFrQjtZQUM3QixZQUFZLEVBQUUsZUFBZTtZQUM3QixjQUFjLEVBQUUsdUJBQXVCO1lBQ3ZDLE9BQU8sRUFBRSxZQUFZO1lBQ3JCLE1BQU0sRUFBRSxRQUFRO1lBQ2hCLFlBQVksRUFBRSxVQUFVO1lBQ3hCLHNCQUFzQixFQUFFLFVBQVU7WUFDbEMsc0JBQXNCLEVBQUUsS0FBSztZQUM3QixzQkFBc0IsRUFBRSxLQUFLO1lBQzdCLHNCQUFzQixFQUFFLE9BQU87WUFDL0IseUJBQXlCLEVBQUUsc0NBQXNDO1lBQ2pFLDZCQUE2QixFQUFFLFVBQVU7WUFDekMsOEJBQThCLEVBQUUsY0FBYztZQUM5QywrQkFBK0IsRUFBRSxXQUFXO1lBQzVDLGtDQUFrQyxFQUFFLGFBQWE7WUFDakQsNEJBQTRCLEVBQUUsWUFBWTtZQUMxQyx3Q0FBd0MsRUFBRSxZQUFZO1lBQ3RELDZCQUE2QixFQUFFLFVBQVU7WUFDekMsOEJBQThCLEVBQUUsYUFBYTtZQUM3QyxtQ0FBbUMsRUFBRSxxREFBcUQ7U0FDN0Y7UUFDRCxNQUFNLEVBQUUsQ0FBQyxVQUFVLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQztRQUN6QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7S0FDbEQsQ0FBQztJQWtCTyxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtJQUNWLG1CQUFBLFNBQVMsQ0FBQyxVQUFVLENBQUMsQ0FBQTs2Q0FKVixVQUFVO1FBQ1IsWUFBWTtRQUNQLGlCQUFpQjtRQUNuQixjQUFjO0dBaEIxQiw2QkFBNkIsQ0FnQ3pDO1NBaENZLDZCQUE2QjtBQWtDMUMsc0VBQXNFO0FBQ3RFLFNBQVMsS0FBSyxDQUFDLENBQVMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUMzQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXIsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIE9wdGlvbmFsLCBBdHRyaWJ1dGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U2xpZGVyLCBNQVRfU0xJREVSX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcclxuaW1wb3J0IHsgRm9jdXNNb25pdG9yIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2ExMXknO1xyXG5pbXBvcnQgeyBEaXJlY3Rpb25hbGl0eSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9iaWRpJztcclxuXHJcbi8qKiBDb3VudGVyIHVzZWQgdG8gZ2VuZXJhdGUgdW5pcXVlIElEcyBmb3IgcHJvZ3Jlc3MgYmFycy4gKi9cclxubGV0IHNsaWRlcnByb2dyZXNzYmFySWQgPSAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tYXQtc2xpZGVyLXByb2dyZXNzLWJhci5jb21wb25lbnQuY3NzJ10sXHJcbiAgICBwcm92aWRlcnM6IFtNQVRfU0xJREVSX1ZBTFVFX0FDQ0VTU09SXSxcclxuICAgIGhvc3Q6IHtcclxuICAgICAgICAnKGZvY3VzKSc6ICdfb25Gb2N1cygpJyxcclxuICAgICAgICAnKGJsdXIpJzogJ19vbkJsdXIoKScsXHJcbiAgICAgICAgJyhjbGljayknOiAndGhpc1tcIl9vbkNsaWNrXCJdID8gdGhpc1tcIl9vbkNsaWNrXCJdKCRldmVudCkgOiBudWxsJywgLy8gQW5ndWxhciA1LzYgc3VwcG9ydFxyXG4gICAgICAgICcobW91c2Vkb3duKSc6ICd0aGlzW1wiX29uTW91c2Vkb3duXCJdID8gdGhpc1tcIl9vbk1vdXNlZG93blwiXSgkZXZlbnQpIDogbnVsbCcsIC8vIEFuZ3VsYXIgNyBzdXBwb3J0XHJcbiAgICAgICAgJyhrZXlkb3duKSc6ICdfb25LZXlkb3duKCRldmVudCknLFxyXG4gICAgICAgICcoa2V5dXApJzogJ19vbktleXVwKCknLFxyXG4gICAgICAgICcobW91c2VlbnRlciknOiAnX29uTW91c2VlbnRlcigpJyxcclxuICAgICAgICAnKHNsaWRlKSc6ICdfb25TbGlkZSgkZXZlbnQpJyxcclxuICAgICAgICAnKHNsaWRlZW5kKSc6ICdfb25TbGlkZUVuZCgpJyxcclxuICAgICAgICAnKHNsaWRlc3RhcnQpJzogJ19vblNsaWRlU3RhcnQoJGV2ZW50KScsXHJcbiAgICAgICAgJ2NsYXNzJzogJ21hdC1zbGlkZXInLFxyXG4gICAgICAgICdyb2xlJzogJ3NsaWRlcicsXHJcbiAgICAgICAgJ1t0YWJJbmRleF0nOiAndGFiSW5kZXgnLFxyXG4gICAgICAgICdbYXR0ci5hcmlhLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVtYXhdJzogJ21heCcsXHJcbiAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVtaW5dJzogJ21pbicsXHJcbiAgICAgICAgJ1thdHRyLmFyaWEtdmFsdWVub3ddJzogJ3ZhbHVlJyxcclxuICAgICAgICAnW2F0dHIuYXJpYS1vcmllbnRhdGlvbl0nOiAndmVydGljYWwgPyBcInZlcnRpY2FsXCIgOiBcImhvcml6b250YWxcIicsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWRpc2FibGVkXSc6ICdkaXNhYmxlZCcsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWhhcy10aWNrc10nOiAndGlja0ludGVydmFsJyxcclxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItaG9yaXpvbnRhbF0nOiAnIXZlcnRpY2FsJyxcclxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItYXhpcy1pbnZlcnRlZF0nOiAnX2ludmVydEF4aXMnLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1zbGlkaW5nXSc6ICdfaXNTbGlkaW5nJyxcclxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItdGh1bWItbGFiZWwtc2hvd2luZ10nOiAndGh1bWJMYWJlbCcsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLXZlcnRpY2FsXSc6ICd2ZXJ0aWNhbCcsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLW1pbi12YWx1ZV0nOiAnX2lzTWluVmFsdWUnLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1oaWRlLWxhc3QtdGlja10nOiAnZGlzYWJsZWQgfHwgX2lzTWluVmFsdWUgJiYgX3RodW1iR2FwICYmIF9pbnZlcnRBeGlzJyxcclxuICAgIH0sXHJcbiAgICBpbnB1dHM6IFsnZGlzYWJsZWQnLCAnY29sb3InLCAndGFiSW5kZXgnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIE1hdFNsaWRlclByb2dyZXNzQmFyQ29tcG9uZW50IGV4dGVuZHMgTWF0U2xpZGVyIHtcclxuICAgIEBJbnB1dCgpIG1vZGU6IHN0cmluZyA9ICdidWZmZXInO1xyXG4gICAgQElucHV0KCkgdmFsdWU6IG51bWJlciA9IDA7XHJcbiAgICAvKiogQnVmZmVyIHZhbHVlIG9mIHRoZSBwcm9ncmVzcyBiYXIuIERlZmF1bHRzIHRvIHplcm8uICovXHJcbiAgICBASW5wdXQoKVxyXG4gICAgZ2V0IGJ1ZmZlclZhbHVlKCk6IG51bWJlciB7IHJldHVybiB0aGlzLl9idWZmZXJWYWx1ZTsgfVxyXG4gICAgc2V0IGJ1ZmZlclZhbHVlKHY6IG51bWJlcikgeyB0aGlzLl9idWZmZXJWYWx1ZSA9IGNsYW1wKHYgfHwgMCk7IH1cclxuICAgIHByaXZhdGUgX2J1ZmZlclZhbHVlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgIC8qKiBUaGUgaWQgb2YgdGhlIHByb2dyZXNzIGJhci4gKi9cclxuICAgIHNsaWRlcnByb2dyZXNzYmFySWQgPSBgbWF0LXNsaWRlci1wcm9ncmVzcy1iYXItJHtzbGlkZXJwcm9ncmVzc2JhcklkKyt9YDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIGZvY3VzTW9uaXRvcjogRm9jdXNNb25pdG9yLFxyXG4gICAgICAgIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgICAgICBAT3B0aW9uYWwoKSBkaXI6IERpcmVjdGlvbmFsaXR5LFxyXG4gICAgICAgIEBBdHRyaWJ1dGUoJ3RhYmluZGV4JykgdGFiSW5kZXg6IHN0cmluZ1xyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoZWxlbWVudFJlZiwgZm9jdXNNb25pdG9yLCBjaGFuZ2VEZXRlY3RvclJlZiwgZGlyLCB0YWJJbmRleCk7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IHBhcnNlSW50KHRhYkluZGV4KSB8fCAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBDU1Mgc3R5bGVzIGZvciB0aGUgdHJhY2sgZmlsbCBlbGVtZW50LiAqL1xyXG4gICAgZ2V0IF90cmFja0J1ZmZlclN0eWxlcygpOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9IHtcclxuICAgICAgICBpZiAodGhpcy5tb2RlID09PSAnYnVmZmVyJykge1xyXG4gICAgICAgICAgICBjb25zdCBheGlzID0gdGhpcy52ZXJ0aWNhbCA/ICdZJyA6ICdYJztcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiBgdHJhbnNsYXRlJHtheGlzfSgwcHgpIHNjYWxlJHtheGlzfSgke3RoaXMuX2J1ZmZlclZhbHVlIC8gMTAwfSlgXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vKiogQ2xhbXBzIGEgdmFsdWUgdG8gYmUgYmV0d2VlbiB0d28gbnVtYmVycywgYnkgZGVmYXVsdCAwIGFuZCAxMDAuICovXHJcbmZ1bmN0aW9uIGNsYW1wKHY6IG51bWJlciwgbWluID0gMCwgbWF4ID0gMTAwKSB7XHJcbiAgICByZXR1cm4gTWF0aC5tYXgobWluLCBNYXRoLm1pbihtYXgsIHYpKTtcclxufVxyXG4iXX0=