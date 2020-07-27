import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
let FullscreenService = class FullscreenService {
    constructor() {
        this.fnMap = [
            // Object keys
            [
                'requestFullscreen',
                'exitFullscreen',
                'fullscreenElement',
                'fullscreenEnabled',
                'fullscreenchange',
                'fullscreenerror'
            ],
            // New WebKit
            [
                'webkitRequestFullscreen',
                'webkitExitFullscreen',
                'webkitFullscreenElement',
                'webkitFullscreenEnabled',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Old WebKit (Safari 5.1)
            [
                'webkitRequestFullScreen',
                'webkitCancelFullScreen',
                'webkitCurrentFullScreenElement',
                'webkitCancelFullScreen',
                'webkitfullscreenchange',
                'webkitfullscreenerror'
            ],
            // Mozilla
            [
                'mozRequestFullScreen',
                'mozCancelFullScreen',
                'mozFullScreenElement',
                'mozFullScreenEnabled',
                'mozfullscreenchange',
                'mozfullscreenerror'
            ],
            // MS
            [
                'msRequestFullscreen',
                'msExitFullscreen',
                'msFullscreenElement',
                'msFullscreenEnabled',
                'MSFullscreenChange',
                'MSFullscreenError'
            ]
        ];
        this.keyboardAllowed = typeof Element !== 'undefined' && 'ALLOW_KEYBOARD_INPUT' in Element;
        const ret = {};
        let val;
        for (let i = 0; i < this.fnMap.length; i++) {
            val = this.fnMap[i];
            if (val && val[1] in document) {
                for (i = 0; i < val.length; i++) {
                    // Map everything to the first list of keys
                    ret[this.fnMap[0][i].toString()] = val[i];
                }
                this.fn = ret;
            }
        }
    }
    request(elem) {
        const request = this.fn.requestFullscreen;
        elem = elem || document.documentElement;
        // Work around Safari 5.1 bug: reports support for
        // keyboard in fullscreen even though it doesn't.
        // Browser sniffing, since the alternative with
        // setTimeout is even worse.
        if (/5\.1[.\d]* Safari/.test(navigator.userAgent)) {
            elem[request]();
        }
        else {
            elem[request](this.keyboardAllowed ? Element.ALLOW_KEYBOARD_INPUT : {});
        }
    }
    exit() {
        document[this.fn.exitFullscreen]();
    }
    toggle(elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    }
    onChange(callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    }
    onError(callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    }
    isFullscreen() {
        return Boolean(document[this.fn.fullscreenElement]);
    }
    isEnabled() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    }
    getElement() {
        return document[this.fn.fullscreenElement];
    }
};
FullscreenService = tslib_1.__decorate([
    Injectable(),
    tslib_1.__metadata("design:paramtypes", [])
], FullscreenService);
export { FullscreenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQyxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQXVEMUI7UUFyRFEsVUFBSyxHQUFlO1lBQ3hCLGNBQWM7WUFDZDtnQkFDSSxtQkFBbUI7Z0JBQ25CLGdCQUFnQjtnQkFDaEIsbUJBQW1CO2dCQUNuQixtQkFBbUI7Z0JBQ25CLGtCQUFrQjtnQkFDbEIsaUJBQWlCO2FBQ3BCO1lBQ0QsYUFBYTtZQUNiO2dCQUNJLHlCQUF5QjtnQkFDekIsc0JBQXNCO2dCQUN0Qix5QkFBeUI7Z0JBQ3pCLHlCQUF5QjtnQkFDekIsd0JBQXdCO2dCQUN4Qix1QkFBdUI7YUFFMUI7WUFDRCwwQkFBMEI7WUFDMUI7Z0JBQ0kseUJBQXlCO2dCQUN6Qix3QkFBd0I7Z0JBQ3hCLGdDQUFnQztnQkFDaEMsd0JBQXdCO2dCQUN4Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjthQUUxQjtZQUNELFVBQVU7WUFDVjtnQkFDSSxzQkFBc0I7Z0JBQ3RCLHFCQUFxQjtnQkFDckIsc0JBQXNCO2dCQUN0QixzQkFBc0I7Z0JBQ3RCLHFCQUFxQjtnQkFDckIsb0JBQW9CO2FBQ3ZCO1lBQ0QsS0FBSztZQUNMO2dCQUNJLHFCQUFxQjtnQkFDckIsa0JBQWtCO2dCQUNsQixxQkFBcUI7Z0JBQ3JCLHFCQUFxQjtnQkFDckIsb0JBQW9CO2dCQUNwQixtQkFBbUI7YUFDdEI7U0FDSixDQUFDO1FBTUUsSUFBSSxDQUFDLGVBQWUsR0FBRyxPQUFPLE9BQU8sS0FBSyxXQUFXLElBQUksc0JBQXNCLElBQUksT0FBTyxDQUFDO1FBQzNGLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixJQUFJLEdBQUcsQ0FBQztRQUVSLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN4QyxHQUFHLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksUUFBUSxFQUFFO2dCQUMzQixLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQzdCLDJDQUEyQztvQkFDM0MsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzdDO2dCQUNELElBQUksQ0FBQyxFQUFFLEdBQUcsR0FBRyxDQUFDO2FBQ2pCO1NBQ0o7SUFDTCxDQUFDO0lBRU0sT0FBTyxDQUFDLElBQVM7UUFDcEIsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQztRQUUxQyxJQUFJLEdBQUcsSUFBSSxJQUFJLFFBQVEsQ0FBQyxlQUFlLENBQUM7UUFFeEMsa0RBQWtEO1FBQ2xELGlEQUFpRDtRQUNqRCwrQ0FBK0M7UUFDL0MsNEJBQTRCO1FBQzVCLElBQUksbUJBQW1CLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQztTQUNuQjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFFLE9BQWUsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDcEY7SUFDTCxDQUFDO0lBRU0sSUFBSTtRQUNQLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFTO1FBQ25CLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3JCLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNmO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQUVNLFFBQVEsQ0FBQyxRQUFhO1FBQ3pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sT0FBTyxDQUFDLFFBQWE7UUFDeEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sWUFBWTtRQUNmLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sU0FBUztRQUNaLDBDQUEwQztRQUMxQyxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLFVBQVU7UUFDYixPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQztDQUVKLENBQUE7QUF6SFksaUJBQWlCO0lBRDdCLFVBQVUsRUFBRTs7R0FDQSxpQkFBaUIsQ0F5SDdCO1NBekhZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbHNjcmVlbkNvbnRyb2xzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mdWxsc2NyZWVuLWNvbnRyb2xzLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmbk1hcDogc3RyaW5nW11bXSA9IFtcclxuICAgICAgICAvLyBPYmplY3Qga2V5c1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ3JlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ2V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5FbGVtZW50JyxcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5FbmFibGVkJyxcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxyXG4gICAgICAgICAgICAnZnVsbHNjcmVlbmVycm9yJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gTmV3IFdlYktpdFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcclxuICAgICAgICAgICAgJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcclxuICAgICAgICAgICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxyXG4gICAgICAgICAgICAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xyXG5cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgICAgICd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxyXG4gICAgICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgICAgICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcclxuICAgICAgICAgICAgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcclxuXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBNb3ppbGxhXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICAgICAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgICAgICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXHJcbiAgICAgICAgICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXHJcbiAgICAgICAgICAgICdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcclxuICAgICAgICAgICAgJ21vemZ1bGxzY3JlZW5lcnJvcidcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE1TXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICdtc0V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxyXG4gICAgICAgICAgICAnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXHJcbiAgICAgICAgICAgICdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxyXG4gICAgICAgICAgICAnTVNGdWxsc2NyZWVuRXJyb3InXHJcbiAgICAgICAgXVxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGZuOiBGdWxsc2NyZWVuQ29udHJvbHM7XHJcbiAgICBwcml2YXRlIGtleWJvYXJkQWxsb3dlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleWJvYXJkQWxsb3dlZCA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAnQUxMT1dfS0VZQk9BUkRfSU5QVVQnIGluIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgdmFsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZm5NYXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFsID0gdGhpcy5mbk1hcFtpXTtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWxbMV0gaW4gZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgZXZlcnl0aGluZyB0byB0aGUgZmlyc3QgbGlzdCBvZiBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3RoaXMuZm5NYXBbMF1baV0udG9TdHJpbmcoKV0gPSB2YWxbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZuID0gcmV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXF1ZXN0KGVsZW06IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmZuLnJlcXVlc3RGdWxsc2NyZWVuO1xyXG5cclxuICAgICAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIFdvcmsgYXJvdW5kIFNhZmFyaSA1LjEgYnVnOiByZXBvcnRzIHN1cHBvcnQgZm9yXHJcbiAgICAgICAgLy8ga2V5Ym9hcmQgaW4gZnVsbHNjcmVlbiBldmVuIHRob3VnaCBpdCBkb2Vzbid0LlxyXG4gICAgICAgIC8vIEJyb3dzZXIgc25pZmZpbmcsIHNpbmNlIHRoZSBhbHRlcm5hdGl2ZSB3aXRoXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCBpcyBldmVuIHdvcnNlLlxyXG4gICAgICAgIGlmICgvNVxcLjFbLlxcZF0qIFNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtW3JlcXVlc3RdKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbVtyZXF1ZXN0XSh0aGlzLmtleWJvYXJkQWxsb3dlZCA/IChFbGVtZW50IGFzIGFueSkuQUxMT1dfS0VZQk9BUkRfSU5QVVQgOiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGl0KCkge1xyXG4gICAgICAgIGRvY3VtZW50W3RoaXMuZm4uZXhpdEZ1bGxzY3JlZW5dKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZShlbGVtOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZShjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmZuLmZ1bGxzY3JlZW5jaGFuZ2UsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXJyb3IoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5mbi5mdWxsc2NyZWVuZXJyb3IsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRnVsbHNjcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRW5hYmxlZCgpIHtcclxuICAgICAgICAvLyBDb2VyY2UgdG8gYm9vbGVhbiBpbiBjYXNlIG9mIG9sZCBXZWJLaXRcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbmFibGVkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50W3RoaXMuZm4uZnVsbHNjcmVlbkVsZW1lbnRdO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=