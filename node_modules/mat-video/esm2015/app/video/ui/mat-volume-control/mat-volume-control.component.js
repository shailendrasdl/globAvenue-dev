import * as tslib_1 from "tslib";
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
import { EventService } from '../../services/event.service';
let MatVolumeControlComponent = class MatVolumeControlComponent {
    constructor(evt) {
        this.evt = evt;
        this.video = null;
        this.color = 'primary';
        this.volume = 1;
        this.volumeChanged = new EventEmitter();
        this._muted = false;
        this.mutedChanged = new EventEmitter();
        this.keyboard = true;
    }
    get muted() { return this._muted; }
    set muted(v) {
        this._muted = v;
        this.video.muted = this._muted;
    }
    setVolume(value) {
        this.volume = value;
        this.video.volume = this.volume;
        this.volumeChanged.emit(this.volume);
        if (this.volume > 0)
            this.setMuted(false);
    }
    setMuted(value) {
        if (this.muted !== value)
            this.toggleMuted();
    }
    toggleMuted() {
        this.muted = !this.muted;
        this.updateMuted();
    }
    updateMuted() {
        this.video.muted = this.muted;
        this.mutedChanged.emit(this.muted);
    }
    onMuteKey(event) {
        if (this.keyboard) {
            this.toggleMuted();
            event.preventDefault();
        }
    }
};
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", HTMLVideoElement)
], MatVolumeControlComponent.prototype, "video", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", String)
], MatVolumeControlComponent.prototype, "color", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Number)
], MatVolumeControlComponent.prototype, "volume", void 0);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatVolumeControlComponent.prototype, "volumeChanged", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean),
    tslib_1.__metadata("design:paramtypes", [Boolean])
], MatVolumeControlComponent.prototype, "muted", null);
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", Object)
], MatVolumeControlComponent.prototype, "mutedChanged", void 0);
tslib_1.__decorate([
    Input(),
    tslib_1.__metadata("design:type", Boolean)
], MatVolumeControlComponent.prototype, "keyboard", void 0);
tslib_1.__decorate([
    HostListener('document:keyup.m', ['$event']),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [KeyboardEvent]),
    tslib_1.__metadata("design:returntype", void 0)
], MatVolumeControlComponent.prototype, "onMuteKey", null);
MatVolumeControlComponent = tslib_1.__decorate([
    Component({
        selector: 'mat-volume-control',
        template: "<div class=\"volume-control\">\r\n  <button mat-icon-button (click)=\"toggleMuted()\">\r\n    <mat-icon *ngIf=\"muted || volume === 0\">volume_off</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume > 0 && volume < 0.25\">volume_mute</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume >= 0.25 && volume < 0.5\">volume_down</mat-icon>\r\n    <mat-icon *ngIf=\"!muted && volume >= 0.5\">volume_up</mat-icon>\r\n  </button>\r\n  <mat-slider class=\"volume-slider\" [color]=\"color\" min=\"0\" max=\"1\" step=\"0.01\" value=\"1\" (input)=\"setVolume($event.value)\">\r\n  </mat-slider>\r\n</div>",
        styles: [".volume-control{display:inline}.volume-slider{margin-left:-15px}::ng-deep.mat-slider-thumb{border-color:transparent!important}::ng-deep.mat-slider-track-background{background-color:#d3d3d3!important;-webkit-transform:translateX(0)!important;transform:translateX(0)!important}.volume-control .volume-slider{visibility:hidden;opacity:0;min-width:0;width:0;transition:visibility .2s,opacity .2s linear,width .2s linear}.volume-control:hover .volume-slider{visibility:visible;opacity:1;min-width:90px;width:90px;transition:opacity .2s linear,width .2s linear,min-width .2s linear}"]
    }),
    tslib_1.__metadata("design:paramtypes", [EventService])
], MatVolumeControlComponent);
export { MatVolumeControlComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC12aWRlby8iLCJzb3VyY2VzIjpbImFwcC92aWRlby91aS9tYXQtdm9sdW1lLWNvbnRyb2wvbWF0LXZvbHVtZS1jb250cm9sLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHckYsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTzVELElBQWEseUJBQXlCLEdBQXRDLE1BQWEseUJBQXlCO0lBcUJwQyxZQUFvQixHQUFpQjtRQUFqQixRQUFHLEdBQUgsR0FBRyxDQUFjO1FBcEI1QixVQUFLLEdBQXFCLElBQUksQ0FBQztRQUUvQixVQUFLLEdBQWlCLFNBQVMsQ0FBQztRQUVoQyxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRWxCLGtCQUFhLEdBQUcsSUFBSSxZQUFZLEVBQVUsQ0FBQztRQUU3QyxXQUFNLEdBQVksS0FBSyxDQUFDO1FBUXRCLGlCQUFZLEdBQUcsSUFBSSxZQUFZLEVBQVcsQ0FBQztRQUU1QyxhQUFRLEdBQVksSUFBSSxDQUFDO0lBRU8sQ0FBQztJQVYxQyxJQUFJLEtBQUssS0FBSyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO0lBQ25DLElBQUksS0FBSyxDQUFDLENBQVU7UUFDbEIsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNqQyxDQUFDO0lBUUQsU0FBUyxDQUFDLEtBQWE7UUFDckIsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDcEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFckMsSUFBSSxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUM7WUFDakIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBRUQsUUFBUSxDQUFDLEtBQWM7UUFDckIsSUFBSSxJQUFJLENBQUMsS0FBSyxLQUFLLEtBQUs7WUFDdEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxXQUFXO1FBQ1QsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELFNBQVMsQ0FBQyxLQUFvQjtRQUM1QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztTQUN4QjtJQUNILENBQUM7Q0FFRixDQUFBO0FBdERVO0lBQVIsS0FBSyxFQUFFO3NDQUFRLGdCQUFnQjt3REFBUTtBQUUvQjtJQUFSLEtBQUssRUFBRTs7d0RBQWlDO0FBRWhDO0lBQVIsS0FBSyxFQUFFOzt5REFBb0I7QUFFbEI7SUFBVCxNQUFNLEVBQUU7O2dFQUE0QztBQUlyRDtJQURDLEtBQUssRUFBRTs7O3NEQUMyQjtBQU16QjtJQUFULE1BQU0sRUFBRTs7K0RBQTRDO0FBRTVDO0lBQVIsS0FBSyxFQUFFOzsyREFBMEI7QUE2QmxDO0lBREMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUMsUUFBUSxDQUFDLENBQUM7OzZDQUM1QixhQUFhOzswREFLN0I7QUFyRFUseUJBQXlCO0lBTHJDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsOGxCQUFrRDs7S0FFbkQsQ0FBQzs2Q0FzQnlCLFlBQVk7R0FyQjFCLHlCQUF5QixDQXVEckM7U0F2RFkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE91dHB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUaGVtZVBhbGV0dGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbmltcG9ydCB7IEV2ZW50U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2V2ZW50LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdtYXQtdm9sdW1lLWNvbnRyb2wnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9tYXQtdm9sdW1lLWNvbnRyb2wuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL21hdC12b2x1bWUtY29udHJvbC5jb21wb25lbnQuY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE1hdFZvbHVtZUNvbnRyb2xDb21wb25lbnQge1xyXG4gIEBJbnB1dCgpIHZpZGVvOiBIVE1MVmlkZW9FbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6IFRoZW1lUGFsZXR0ZSA9ICdwcmltYXJ5JztcclxuXHJcbiAgQElucHV0KCkgdm9sdW1lOiBudW1iZXIgPSAxO1xyXG5cclxuICBAT3V0cHV0KCkgdm9sdW1lQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xyXG5cclxuICBwcml2YXRlIF9tdXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG11dGVkKCkgeyByZXR1cm4gdGhpcy5fbXV0ZWQ7IH1cclxuICBzZXQgbXV0ZWQodjogYm9vbGVhbikge1xyXG4gICAgdGhpcy5fbXV0ZWQgPSB2O1xyXG4gICAgdGhpcy52aWRlby5tdXRlZCA9IHRoaXMuX211dGVkO1xyXG4gIH1cclxuXHJcbiAgQE91dHB1dCgpIG11dGVkQ2hhbmdlZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oKTtcclxuXHJcbiAgQElucHV0KCkga2V5Ym9hcmQ6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV2dDogRXZlbnRTZXJ2aWNlKSB7IH1cclxuXHJcbiAgc2V0Vm9sdW1lKHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudm9sdW1lID0gdmFsdWU7XHJcbiAgICB0aGlzLnZpZGVvLnZvbHVtZSA9IHRoaXMudm9sdW1lO1xyXG4gICAgdGhpcy52b2x1bWVDaGFuZ2VkLmVtaXQodGhpcy52b2x1bWUpO1xyXG5cclxuICAgIGlmICh0aGlzLnZvbHVtZSA+IDApXHJcbiAgICAgIHRoaXMuc2V0TXV0ZWQoZmFsc2UpO1xyXG4gIH1cclxuXHJcbiAgc2V0TXV0ZWQodmFsdWU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm11dGVkICE9PSB2YWx1ZSlcclxuICAgICAgdGhpcy50b2dnbGVNdXRlZCgpO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTXV0ZWQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm11dGVkID0gIXRoaXMubXV0ZWQ7XHJcbiAgICB0aGlzLnVwZGF0ZU11dGVkKCk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVNdXRlZCgpOiB2b2lkIHtcclxuICAgIHRoaXMudmlkZW8ubXV0ZWQgPSB0aGlzLm11dGVkO1xyXG4gICAgdGhpcy5tdXRlZENoYW5nZWQuZW1pdCh0aGlzLm11dGVkKTtcclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmtleXVwLm0nLCBbJyRldmVudCddKVxyXG4gIG9uTXV0ZUtleShldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKHRoaXMua2V5Ym9hcmQpIHtcclxuICAgICAgdGhpcy50b2dnbGVNdXRlZCgpO1xyXG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19