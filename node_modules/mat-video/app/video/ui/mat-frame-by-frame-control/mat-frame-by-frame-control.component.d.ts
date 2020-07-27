import { OnInit } from '@angular/core';
export declare class MatFrameByFrameControlComponent implements OnInit {
    video: HTMLVideoElement;
    fps: number;
    constructor();
    ngOnInit(): void;
    seekFrames(nbFrames: number): void;
}
