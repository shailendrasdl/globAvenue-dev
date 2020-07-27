import { EventEmitter } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { EventService } from '../../services/event.service';
export declare class MatVolumeControlComponent {
    private evt;
    video: HTMLVideoElement;
    color: ThemePalette;
    volume: number;
    volumeChanged: EventEmitter<number>;
    private _muted;
    muted: boolean;
    mutedChanged: EventEmitter<boolean>;
    keyboard: boolean;
    constructor(evt: EventService);
    setVolume(value: number): void;
    setMuted(value: boolean): void;
    toggleMuted(): void;
    updateMuted(): void;
    onMuteKey(event: KeyboardEvent): void;
}
