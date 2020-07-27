import * as tslib_1 from "tslib";
import { Component, Input, ElementRef, ChangeDetectorRef, ChangeDetectionStrategy, Optional, Attribute } from '@angular/core';
import { MatSlider, MAT_SLIDER_VALUE_ACCESSOR } from '@angular/material/slider';
import { FocusMonitor } from '@angular/cdk/a11y';
import { Directionality } from '@angular/cdk/bidi';
/** Counter used to generate unique IDs for progress bars. */
var sliderprogressbarId = 0;
var MatSliderProgressBarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MatSliderProgressBarComponent, _super);
    function MatSliderProgressBarComponent(elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) {
        var _this = _super.call(this, elementRef, focusMonitor, changeDetectorRef, dir, tabIndex) || this;
        _this.mode = 'buffer';
        _this.value = 0;
        _this._bufferValue = 0;
        /** The id of the progress bar. */
        _this.sliderprogressbarId = "mat-slider-progress-bar-" + sliderprogressbarId++;
        _this.tabIndex = parseInt(tabIndex) || 0;
        return _this;
    }
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "bufferValue", {
        /** Buffer value of the progress bar. Defaults to zero. */
        get: function () { return this._bufferValue; },
        set: function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MatSliderProgressBarComponent.prototype, "_trackBufferStyles", {
        /** CSS styles for the track fill element. */
        get: function () {
            if (this.mode === 'buffer') {
                var axis = this.vertical ? 'Y' : 'X';
                return {
                    'transform': "translate" + axis + "(0px) scale" + axis + "(" + this._bufferValue / 100 + ")"
                };
            }
        },
        enumerable: true,
        configurable: true
    });
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
    return MatSliderProgressBarComponent;
}(MatSlider));
export { MatSliderProgressBarComponent };
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL2ludGVybmFsL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyL21hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQXdCLFVBQVUsRUFBRSxpQkFBaUIsRUFBcUIsdUJBQXVCLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2SyxPQUFPLEVBQUUsU0FBUyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDaEYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ2pELE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUVuRCw2REFBNkQ7QUFDN0QsSUFBSSxtQkFBbUIsR0FBRyxDQUFDLENBQUM7QUF3QzVCO0lBQW1ELHlEQUFTO0lBWXhELHVDQUNJLFVBQXNCLEVBQ3RCLFlBQTBCLEVBQzFCLGlCQUFvQyxFQUN4QixHQUFtQixFQUNSLFFBQWdCO1FBTDNDLFlBT0ksa0JBQU0sVUFBVSxFQUFFLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxHQUFHLEVBQUUsUUFBUSxDQUFDLFNBRXBFO1FBcEJRLFVBQUksR0FBVyxRQUFRLENBQUM7UUFDeEIsV0FBSyxHQUFXLENBQUMsQ0FBQztRQUtuQixrQkFBWSxHQUFXLENBQUMsQ0FBQztRQUVqQyxrQ0FBa0M7UUFDbEMseUJBQW1CLEdBQUcsNkJBQTJCLG1CQUFtQixFQUFJLENBQUM7UUFVckUsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDOztJQUM1QyxDQUFDO0lBaEJELHNCQUFJLHNEQUFXO1FBRmYsMERBQTBEO2FB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RXZlbnRFbWl0dGVyLCBFbGVtZW50UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld0VuY2Fwc3VsYXRpb24sIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBPcHRpb25hbCwgQXR0cmlidXRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE1hdFNsaWRlciwgTUFUX1NMSURFUl9WQUxVRV9BQ0NFU1NPUiB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NsaWRlcic7XHJcbmltcG9ydCB7IEZvY3VzTW9uaXRvciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9hMTF5JztcclxuaW1wb3J0IHsgRGlyZWN0aW9uYWxpdHkgfSBmcm9tICdAYW5ndWxhci9jZGsvYmlkaSc7XHJcblxyXG4vKiogQ291bnRlciB1c2VkIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIHByb2dyZXNzIGJhcnMuICovXHJcbmxldCBzbGlkZXJwcm9ncmVzc2JhcklkID0gMDtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdtYXQtc2xpZGVyLXByb2dyZXNzLWJhcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vbWF0LXNsaWRlci1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyddLFxyXG4gICAgcHJvdmlkZXJzOiBbTUFUX1NMSURFUl9WQUxVRV9BQ0NFU1NPUl0sXHJcbiAgICBob3N0OiB7XHJcbiAgICAgICAgJyhmb2N1cyknOiAnX29uRm9jdXMoKScsXHJcbiAgICAgICAgJyhibHVyKSc6ICdfb25CbHVyKCknLFxyXG4gICAgICAgICcoY2xpY2spJzogJ3RoaXNbXCJfb25DbGlja1wiXSA/IHRoaXNbXCJfb25DbGlja1wiXSgkZXZlbnQpIDogbnVsbCcsIC8vIEFuZ3VsYXIgNS82IHN1cHBvcnRcclxuICAgICAgICAnKG1vdXNlZG93biknOiAndGhpc1tcIl9vbk1vdXNlZG93blwiXSA/IHRoaXNbXCJfb25Nb3VzZWRvd25cIl0oJGV2ZW50KSA6IG51bGwnLCAvLyBBbmd1bGFyIDcgc3VwcG9ydFxyXG4gICAgICAgICcoa2V5ZG93biknOiAnX29uS2V5ZG93bigkZXZlbnQpJyxcclxuICAgICAgICAnKGtleXVwKSc6ICdfb25LZXl1cCgpJyxcclxuICAgICAgICAnKG1vdXNlZW50ZXIpJzogJ19vbk1vdXNlZW50ZXIoKScsXHJcbiAgICAgICAgJyhzbGlkZSknOiAnX29uU2xpZGUoJGV2ZW50KScsXHJcbiAgICAgICAgJyhzbGlkZWVuZCknOiAnX29uU2xpZGVFbmQoKScsXHJcbiAgICAgICAgJyhzbGlkZXN0YXJ0KSc6ICdfb25TbGlkZVN0YXJ0KCRldmVudCknLFxyXG4gICAgICAgICdjbGFzcyc6ICdtYXQtc2xpZGVyJyxcclxuICAgICAgICAncm9sZSc6ICdzbGlkZXInLFxyXG4gICAgICAgICdbdGFiSW5kZXhdJzogJ3RhYkluZGV4JyxcclxuICAgICAgICAnW2F0dHIuYXJpYS1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbWF4XSc6ICdtYXgnLFxyXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbWluXSc6ICdtaW4nLFxyXG4gICAgICAgICdbYXR0ci5hcmlhLXZhbHVlbm93XSc6ICd2YWx1ZScsXHJcbiAgICAgICAgJ1thdHRyLmFyaWEtb3JpZW50YXRpb25dJzogJ3ZlcnRpY2FsID8gXCJ2ZXJ0aWNhbFwiIDogXCJob3Jpem9udGFsXCInLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1kaXNhYmxlZF0nOiAnZGlzYWJsZWQnLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1oYXMtdGlja3NdJzogJ3RpY2tJbnRlcnZhbCcsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWhvcml6b250YWxdJzogJyF2ZXJ0aWNhbCcsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLWF4aXMtaW52ZXJ0ZWRdJzogJ19pbnZlcnRBeGlzJyxcclxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItc2xpZGluZ10nOiAnX2lzU2xpZGluZycsXHJcbiAgICAgICAgJ1tjbGFzcy5tYXQtc2xpZGVyLXRodW1iLWxhYmVsLXNob3dpbmddJzogJ3RodW1iTGFiZWwnLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci12ZXJ0aWNhbF0nOiAndmVydGljYWwnLFxyXG4gICAgICAgICdbY2xhc3MubWF0LXNsaWRlci1taW4tdmFsdWVdJzogJ19pc01pblZhbHVlJyxcclxuICAgICAgICAnW2NsYXNzLm1hdC1zbGlkZXItaGlkZS1sYXN0LXRpY2tdJzogJ2Rpc2FibGVkIHx8IF9pc01pblZhbHVlICYmIF90aHVtYkdhcCAmJiBfaW52ZXJ0QXhpcycsXHJcbiAgICB9LFxyXG4gICAgaW5wdXRzOiBbJ2Rpc2FibGVkJywgJ2NvbG9yJywgJ3RhYkluZGV4J10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBNYXRTbGlkZXJQcm9ncmVzc0JhckNvbXBvbmVudCBleHRlbmRzIE1hdFNsaWRlciB7XHJcbiAgICBASW5wdXQoKSBtb2RlOiBzdHJpbmcgPSAnYnVmZmVyJztcclxuICAgIEBJbnB1dCgpIHZhbHVlOiBudW1iZXIgPSAwO1xyXG4gICAgLyoqIEJ1ZmZlciB2YWx1ZSBvZiB0aGUgcHJvZ3Jlc3MgYmFyLiBEZWZhdWx0cyB0byB6ZXJvLiAqL1xyXG4gICAgQElucHV0KClcclxuICAgIGdldCBidWZmZXJWYWx1ZSgpOiBudW1iZXIgeyByZXR1cm4gdGhpcy5fYnVmZmVyVmFsdWU7IH1cclxuICAgIHNldCBidWZmZXJWYWx1ZSh2OiBudW1iZXIpIHsgdGhpcy5fYnVmZmVyVmFsdWUgPSBjbGFtcCh2IHx8IDApOyB9XHJcbiAgICBwcml2YXRlIF9idWZmZXJWYWx1ZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICAvKiogVGhlIGlkIG9mIHRoZSBwcm9ncmVzcyBiYXIuICovXHJcbiAgICBzbGlkZXJwcm9ncmVzc2JhcklkID0gYG1hdC1zbGlkZXItcHJvZ3Jlc3MtYmFyLSR7c2xpZGVycHJvZ3Jlc3NiYXJJZCsrfWA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgZWxlbWVudFJlZjogRWxlbWVudFJlZixcclxuICAgICAgICBmb2N1c01vbml0b3I6IEZvY3VzTW9uaXRvcixcclxuICAgICAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgQE9wdGlvbmFsKCkgZGlyOiBEaXJlY3Rpb25hbGl0eSxcclxuICAgICAgICBAQXR0cmlidXRlKCd0YWJpbmRleCcpIHRhYkluZGV4OiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKGVsZW1lbnRSZWYsIGZvY3VzTW9uaXRvciwgY2hhbmdlRGV0ZWN0b3JSZWYsIGRpciwgdGFiSW5kZXgpO1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXggPSBwYXJzZUludCh0YWJJbmRleCkgfHwgMDtcclxuICAgIH1cclxuXHJcbiAgICAvKiogQ1NTIHN0eWxlcyBmb3IgdGhlIHRyYWNrIGZpbGwgZWxlbWVudC4gKi9cclxuICAgIGdldCBfdHJhY2tCdWZmZXJTdHlsZXMoKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICAgICAgaWYgKHRoaXMubW9kZSA9PT0gJ2J1ZmZlcicpIHtcclxuICAgICAgICAgICAgY29uc3QgYXhpcyA9IHRoaXMudmVydGljYWwgPyAnWScgOiAnWCc7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogYHRyYW5zbGF0ZSR7YXhpc30oMHB4KSBzY2FsZSR7YXhpc30oJHt0aGlzLl9idWZmZXJWYWx1ZSAvIDEwMH0pYFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLyoqIENsYW1wcyBhIHZhbHVlIHRvIGJlIGJldHdlZW4gdHdvIG51bWJlcnMsIGJ5IGRlZmF1bHQgMCBhbmQgMTAwLiAqL1xyXG5mdW5jdGlvbiBjbGFtcCh2OiBudW1iZXIsIG1pbiA9IDAsIG1heCA9IDEwMCkge1xyXG4gICAgcmV0dXJuIE1hdGgubWF4KG1pbiwgTWF0aC5taW4obWF4LCB2KSk7XHJcbn1cclxuIl19