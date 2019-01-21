import { ElementRef, RendererFactory2 } from '@angular/core';
export declare class TourBackdropService {
    private renderer;
    private backdropElement;
    private currentBoundingRect;
    constructor(rendererFactory: RendererFactory2);
    show(targetElement: ElementRef, radius: any, color: any): void;
    close(): void;
    private setStyles;
}
