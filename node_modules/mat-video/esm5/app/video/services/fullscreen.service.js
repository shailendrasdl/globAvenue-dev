import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var FullscreenService = /** @class */ (function () {
    function FullscreenService() {
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
        var ret = {};
        var val;
        for (var i = 0; i < this.fnMap.length; i++) {
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
    FullscreenService.prototype.request = function (elem) {
        var request = this.fn.requestFullscreen;
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
    };
    FullscreenService.prototype.exit = function () {
        document[this.fn.exitFullscreen]();
    };
    FullscreenService.prototype.toggle = function (elem) {
        if (this.isFullscreen()) {
            this.exit();
        }
        else {
            this.request(elem);
        }
    };
    FullscreenService.prototype.onChange = function (callback) {
        document.addEventListener(this.fn.fullscreenchange, callback, false);
    };
    FullscreenService.prototype.onError = function (callback) {
        document.addEventListener(this.fn.fullscreenerror, callback, false);
    };
    FullscreenService.prototype.isFullscreen = function () {
        return Boolean(document[this.fn.fullscreenElement]);
    };
    FullscreenService.prototype.isEnabled = function () {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[this.fn.fullscreenEnabled]);
    };
    FullscreenService.prototype.getElement = function () {
        return document[this.fn.fullscreenElement];
    };
    FullscreenService = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [])
    ], FullscreenService);
    return FullscreenService;
}());
export { FullscreenService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbHNjcmVlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbWF0LXZpZGVvLyIsInNvdXJjZXMiOlsiYXBwL3ZpZGVvL3NlcnZpY2VzL2Z1bGxzY3JlZW4uc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUkzQztJQXVESTtRQXJEUSxVQUFLLEdBQWU7WUFDeEIsY0FBYztZQUNkO2dCQUNJLG1CQUFtQjtnQkFDbkIsZ0JBQWdCO2dCQUNoQixtQkFBbUI7Z0JBQ25CLG1CQUFtQjtnQkFDbkIsa0JBQWtCO2dCQUNsQixpQkFBaUI7YUFDcEI7WUFDRCxhQUFhO1lBQ2I7Z0JBQ0kseUJBQXlCO2dCQUN6QixzQkFBc0I7Z0JBQ3RCLHlCQUF5QjtnQkFDekIseUJBQXlCO2dCQUN6Qix3QkFBd0I7Z0JBQ3hCLHVCQUF1QjthQUUxQjtZQUNELDBCQUEwQjtZQUMxQjtnQkFDSSx5QkFBeUI7Z0JBQ3pCLHdCQUF3QjtnQkFDeEIsZ0NBQWdDO2dCQUNoQyx3QkFBd0I7Z0JBQ3hCLHdCQUF3QjtnQkFDeEIsdUJBQXVCO2FBRTFCO1lBQ0QsVUFBVTtZQUNWO2dCQUNJLHNCQUFzQjtnQkFDdEIscUJBQXFCO2dCQUNyQixzQkFBc0I7Z0JBQ3RCLHNCQUFzQjtnQkFDdEIscUJBQXFCO2dCQUNyQixvQkFBb0I7YUFDdkI7WUFDRCxLQUFLO1lBQ0w7Z0JBQ0kscUJBQXFCO2dCQUNyQixrQkFBa0I7Z0JBQ2xCLHFCQUFxQjtnQkFDckIscUJBQXFCO2dCQUNyQixvQkFBb0I7Z0JBQ3BCLG1CQUFtQjthQUN0QjtTQUNKLENBQUM7UUFNRSxJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sT0FBTyxLQUFLLFdBQVcsSUFBSSxzQkFBc0IsSUFBSSxPQUFPLENBQUM7UUFDM0YsSUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ3BCLElBQUksR0FBRyxDQUFDO1FBRVIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQUksR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxRQUFRLEVBQUU7Z0JBQzNCLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDN0IsMkNBQTJDO29CQUMzQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDN0M7Z0JBQ0QsSUFBSSxDQUFDLEVBQUUsR0FBRyxHQUFHLENBQUM7YUFDakI7U0FDSjtJQUNMLENBQUM7SUFFTSxtQ0FBTyxHQUFkLFVBQWUsSUFBUztRQUNwQixJQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDO1FBRTFDLElBQUksR0FBRyxJQUFJLElBQUksUUFBUSxDQUFDLGVBQWUsQ0FBQztRQUV4QyxrREFBa0Q7UUFDbEQsaURBQWlEO1FBQ2pELCtDQUErQztRQUMvQyw0QkFBNEI7UUFDNUIsSUFBSSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO1NBQ25CO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUUsT0FBZSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNwRjtJQUNMLENBQUM7SUFFTSxnQ0FBSSxHQUFYO1FBQ0ksUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRU0sa0NBQU0sR0FBYixVQUFjLElBQVM7UUFDbkIsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFLEVBQUU7WUFDckIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO1NBQ2Y7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDdEI7SUFDTCxDQUFDO0lBRU0sb0NBQVEsR0FBZixVQUFnQixRQUFhO1FBQ3pCLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGdCQUFnQixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU0sbUNBQU8sR0FBZCxVQUFlLFFBQWE7UUFDeEIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsZUFBZSxFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBRU0sd0NBQVksR0FBbkI7UUFDSSxPQUFPLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7SUFDeEQsQ0FBQztJQUVNLHFDQUFTLEdBQWhCO1FBQ0ksMENBQTBDO1FBQzFDLE9BQU8sT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBRU0sc0NBQVUsR0FBakI7UUFDSSxPQUFPLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGlCQUFpQixDQUFDLENBQUM7SUFDL0MsQ0FBQztJQXZIUSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFOztPQUNBLGlCQUFpQixDQXlIN0I7SUFBRCx3QkFBQztDQUFBLEFBekhELElBeUhDO1NBekhZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRnVsbHNjcmVlbkNvbnRyb2xzIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9mdWxsc2NyZWVuLWNvbnRyb2xzLmludGVyZmFjZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBGdWxsc2NyZWVuU2VydmljZSB7XHJcblxyXG4gICAgcHJpdmF0ZSBmbk1hcDogc3RyaW5nW11bXSA9IFtcclxuICAgICAgICAvLyBPYmplY3Qga2V5c1xyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ3JlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ2V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5FbGVtZW50JyxcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5FbmFibGVkJyxcclxuICAgICAgICAgICAgJ2Z1bGxzY3JlZW5jaGFuZ2UnLFxyXG4gICAgICAgICAgICAnZnVsbHNjcmVlbmVycm9yJ1xyXG4gICAgICAgIF0sXHJcbiAgICAgICAgLy8gTmV3IFdlYktpdFxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgJ3dlYmtpdFJlcXVlc3RGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ3dlYmtpdEV4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ3dlYmtpdEZ1bGxzY3JlZW5FbGVtZW50JyxcclxuICAgICAgICAgICAgJ3dlYmtpdEZ1bGxzY3JlZW5FbmFibGVkJyxcclxuICAgICAgICAgICAgJ3dlYmtpdGZ1bGxzY3JlZW5jaGFuZ2UnLFxyXG4gICAgICAgICAgICAnd2Via2l0ZnVsbHNjcmVlbmVycm9yJ1xyXG5cclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE9sZCBXZWJLaXQgKFNhZmFyaSA1LjEpXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnd2Via2l0UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgICAgICd3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnQnLFxyXG4gICAgICAgICAgICAnd2Via2l0Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgICAgICd3ZWJraXRmdWxsc2NyZWVuY2hhbmdlJyxcclxuICAgICAgICAgICAgJ3dlYmtpdGZ1bGxzY3JlZW5lcnJvcidcclxuXHJcbiAgICAgICAgXSxcclxuICAgICAgICAvLyBNb3ppbGxhXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnbW96UmVxdWVzdEZ1bGxTY3JlZW4nLFxyXG4gICAgICAgICAgICAnbW96Q2FuY2VsRnVsbFNjcmVlbicsXHJcbiAgICAgICAgICAgICdtb3pGdWxsU2NyZWVuRWxlbWVudCcsXHJcbiAgICAgICAgICAgICdtb3pGdWxsU2NyZWVuRW5hYmxlZCcsXHJcbiAgICAgICAgICAgICdtb3pmdWxsc2NyZWVuY2hhbmdlJyxcclxuICAgICAgICAgICAgJ21vemZ1bGxzY3JlZW5lcnJvcidcclxuICAgICAgICBdLFxyXG4gICAgICAgIC8vIE1TXHJcbiAgICAgICAgW1xyXG4gICAgICAgICAgICAnbXNSZXF1ZXN0RnVsbHNjcmVlbicsXHJcbiAgICAgICAgICAgICdtc0V4aXRGdWxsc2NyZWVuJyxcclxuICAgICAgICAgICAgJ21zRnVsbHNjcmVlbkVsZW1lbnQnLFxyXG4gICAgICAgICAgICAnbXNGdWxsc2NyZWVuRW5hYmxlZCcsXHJcbiAgICAgICAgICAgICdNU0Z1bGxzY3JlZW5DaGFuZ2UnLFxyXG4gICAgICAgICAgICAnTVNGdWxsc2NyZWVuRXJyb3InXHJcbiAgICAgICAgXVxyXG4gICAgXTtcclxuXHJcbiAgICBwcml2YXRlIGZuOiBGdWxsc2NyZWVuQ29udHJvbHM7XHJcbiAgICBwcml2YXRlIGtleWJvYXJkQWxsb3dlZDogYm9vbGVhbjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmtleWJvYXJkQWxsb3dlZCA9IHR5cGVvZiBFbGVtZW50ICE9PSAndW5kZWZpbmVkJyAmJiAnQUxMT1dfS0VZQk9BUkRfSU5QVVQnIGluIEVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcclxuICAgICAgICBsZXQgdmFsO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZm5NYXAubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdmFsID0gdGhpcy5mbk1hcFtpXTtcclxuICAgICAgICAgICAgaWYgKHZhbCAmJiB2YWxbMV0gaW4gZG9jdW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCB2YWwubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBNYXAgZXZlcnl0aGluZyB0byB0aGUgZmlyc3QgbGlzdCBvZiBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0W3RoaXMuZm5NYXBbMF1baV0udG9TdHJpbmcoKV0gPSB2YWxbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZuID0gcmV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXF1ZXN0KGVsZW06IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSB0aGlzLmZuLnJlcXVlc3RGdWxsc2NyZWVuO1xyXG5cclxuICAgICAgICBlbGVtID0gZWxlbSB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIC8vIFdvcmsgYXJvdW5kIFNhZmFyaSA1LjEgYnVnOiByZXBvcnRzIHN1cHBvcnQgZm9yXHJcbiAgICAgICAgLy8ga2V5Ym9hcmQgaW4gZnVsbHNjcmVlbiBldmVuIHRob3VnaCBpdCBkb2Vzbid0LlxyXG4gICAgICAgIC8vIEJyb3dzZXIgc25pZmZpbmcsIHNpbmNlIHRoZSBhbHRlcm5hdGl2ZSB3aXRoXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCBpcyBldmVuIHdvcnNlLlxyXG4gICAgICAgIGlmICgvNVxcLjFbLlxcZF0qIFNhZmFyaS8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSkge1xyXG4gICAgICAgICAgICBlbGVtW3JlcXVlc3RdKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWxlbVtyZXF1ZXN0XSh0aGlzLmtleWJvYXJkQWxsb3dlZCA/IChFbGVtZW50IGFzIGFueSkuQUxMT1dfS0VZQk9BUkRfSU5QVVQgOiB7fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleGl0KCkge1xyXG4gICAgICAgIGRvY3VtZW50W3RoaXMuZm4uZXhpdEZ1bGxzY3JlZW5dKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvZ2dsZShlbGVtOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0Z1bGxzY3JlZW4oKSkge1xyXG4gICAgICAgICAgICB0aGlzLmV4aXQoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3QoZWxlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbkNoYW5nZShjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmZuLmZ1bGxzY3JlZW5jaGFuZ2UsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9uRXJyb3IoY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5mbi5mdWxsc2NyZWVuZXJyb3IsIGNhbGxiYWNrLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRnVsbHNjcmVlbigpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRW5hYmxlZCgpIHtcclxuICAgICAgICAvLyBDb2VyY2UgdG8gYm9vbGVhbiBpbiBjYXNlIG9mIG9sZCBXZWJLaXRcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFt0aGlzLmZuLmZ1bGxzY3JlZW5FbmFibGVkXSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEVsZW1lbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50W3RoaXMuZm4uZnVsbHNjcmVlbkVsZW1lbnRdO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=