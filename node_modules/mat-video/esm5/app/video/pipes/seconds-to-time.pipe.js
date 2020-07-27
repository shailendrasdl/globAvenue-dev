import * as tslib_1 from "tslib";
import { Pipe } from '@angular/core';
var SecondsToTimePipe = /** @class */ (function () {
    function SecondsToTimePipe() {
        this.times = {
            year: 31557600,
            month: 2629746,
            day: 86400,
            hour: 3600,
        };
    }
    SecondsToTimePipe.prototype.transform = function (seconds) {
        if (!seconds)
            return '0:00';
        else {
            var time_string = '';
            for (var key in this.times) {
                if (Math.floor(seconds / this.times[key]) > 0) {
                    time_string += Math.floor(seconds / this.times[key]).toString() + ':';
                    seconds = seconds - this.times[key] * Math.floor(seconds / this.times[key]);
                }
            }
            time_string += Math.floor(seconds / 60).toString() + ':';
            seconds = seconds - 60 * Math.floor(seconds / 60);
            if (Math.floor(seconds) < 10)
                time_string += '0';
            time_string += Math.floor(seconds).toString();
            return time_string;
        }
    };
    SecondsToTimePipe = tslib_1.__decorate([
        Pipe({
            name: 'secondsToTime'
        })
    ], SecondsToTimePipe);
    return SecondsToTimePipe;
}());
export { SecondsToTimePipe };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2Vjb25kcy10by10aW1lLnBpcGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9tYXQtdmlkZW8vIiwic291cmNlcyI6WyJhcHAvdmlkZW8vcGlwZXMvc2Vjb25kcy10by10aW1lLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxJQUFJLEVBQWlCLE1BQU0sZUFBZSxDQUFDO0FBS3BEO0lBSEE7UUFJSSxVQUFLLEdBQUc7WUFDSixJQUFJLEVBQUUsUUFBUTtZQUNkLEtBQUssRUFBRSxPQUFPO1lBQ2QsR0FBRyxFQUFFLEtBQUs7WUFDVixJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUM7SUFvQk4sQ0FBQztJQWxCRyxxQ0FBUyxHQUFULFVBQVUsT0FBZTtRQUNyQixJQUFJLENBQUMsT0FBTztZQUNSLE9BQU8sTUFBTSxDQUFDO2FBQ2I7WUFDRCxJQUFJLFdBQVcsR0FBVyxFQUFFLENBQUM7WUFDN0IsS0FBSyxJQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUMxQixJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzNDLFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEdBQUcsR0FBRyxDQUFDO29CQUN0RSxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUMvRTthQUNKO1lBQ0QsV0FBVyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxHQUFHLEdBQUcsQ0FBQztZQUN6RCxPQUFPLEdBQUcsT0FBTyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUMsQ0FBQztZQUNsRCxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRTtnQkFBRSxXQUFXLElBQUksR0FBRyxDQUFDO1lBQ2pELFdBQVcsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDO1lBQzlDLE9BQU8sV0FBVyxDQUFDO1NBQ3RCO0lBQ0wsQ0FBQztJQXpCUSxpQkFBaUI7UUFIN0IsSUFBSSxDQUFDO1lBQ0YsSUFBSSxFQUFFLGVBQWU7U0FDeEIsQ0FBQztPQUNXLGlCQUFpQixDQTBCN0I7SUFBRCx3QkFBQztDQUFBLEFBMUJELElBMEJDO1NBMUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBQaXBlKHtcclxuICAgIG5hbWU6ICdzZWNvbmRzVG9UaW1lJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgU2Vjb25kc1RvVGltZVBpcGUgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtIHtcclxuICAgIHRpbWVzID0ge1xyXG4gICAgICAgIHllYXI6IDMxNTU3NjAwLFxyXG4gICAgICAgIG1vbnRoOiAyNjI5NzQ2LFxyXG4gICAgICAgIGRheTogODY0MDAsXHJcbiAgICAgICAgaG91cjogMzYwMCxcclxuICAgIH07XHJcblxyXG4gICAgdHJhbnNmb3JtKHNlY29uZHM6IG51bWJlcikge1xyXG4gICAgICAgIGlmICghc2Vjb25kcylcclxuICAgICAgICAgICAgcmV0dXJuICcwOjAwJztcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IHRpbWVfc3RyaW5nOiBzdHJpbmcgPSAnJztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy50aW1lcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKE1hdGguZmxvb3Ioc2Vjb25kcyAvIHRoaXMudGltZXNba2V5XSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGltZV9zdHJpbmcgKz0gTWF0aC5mbG9vcihzZWNvbmRzIC8gdGhpcy50aW1lc1trZXldKS50b1N0cmluZygpICsgJzonO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZHMgPSBzZWNvbmRzIC0gdGhpcy50aW1lc1trZXldICogTWF0aC5mbG9vcihzZWNvbmRzIC8gdGhpcy50aW1lc1trZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aW1lX3N0cmluZyArPSBNYXRoLmZsb29yKHNlY29uZHMgLyA2MCkudG9TdHJpbmcoKSArICc6JztcclxuICAgICAgICAgICAgc2Vjb25kcyA9IHNlY29uZHMgLSA2MCAqIE1hdGguZmxvb3Ioc2Vjb25kcyAvIDYwKTtcclxuICAgICAgICAgICAgaWYgKE1hdGguZmxvb3Ioc2Vjb25kcykgPCAxMCkgdGltZV9zdHJpbmcgKz0gJzAnO1xyXG4gICAgICAgICAgICB0aW1lX3N0cmluZyArPSBNYXRoLmZsb29yKHNlY29uZHMpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aW1lX3N0cmluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19