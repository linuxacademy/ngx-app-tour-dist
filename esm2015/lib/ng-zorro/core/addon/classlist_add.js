/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
export class NzClassListAddDirective {
    /**
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.classList = [];
    }
    /**
     * @param {?} list
     * @return {?}
     */
    set nzClassListAdd(list) {
        this.classList.forEach(name => {
            this.renderer.removeClass(this.elementRef.nativeElement, name);
        });
        list.forEach(name => {
            this.renderer.addClass(this.elementRef.nativeElement, name);
        });
        this.classList = list;
    }
}
NzClassListAddDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzClassListAdd]'
            },] }
];
/** @nocollapse */
NzClassListAddDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
NzClassListAddDirective.propDecorators = {
    nzClassListAdd: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzClassListAddDirective.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzClassListAddDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xhc3NsaXN0X2FkZC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1hcHAtdG91ci8iLCJzb3VyY2VzIjpbImxpYi9uZy16b3Jyby9jb3JlL2FkZG9uL2NsYXNzbGlzdF9hZGQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLeEUsTUFBTSxPQUFPLHVCQUF1Qjs7Ozs7SUFjbEMsWUFBb0IsVUFBc0IsRUFBVSxRQUFtQjtRQUFuRCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQWJ2RSxjQUFTLEdBQUcsRUFBRSxDQUFDO0lBZWYsQ0FBQzs7Ozs7SUFiRCxJQUNJLGNBQWMsQ0FBQyxJQUFjO1FBQy9CLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQzVCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM5RCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ3hCLENBQUM7OztZQWZGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2FBQzdCOzs7O1lBSm1CLFVBQVU7WUFBUyxTQUFTOzs7NkJBUTdDLEtBQUs7Ozs7SUFGTiw0Q0FBZTs7Ozs7SUFhSCw2Q0FBOEI7Ozs7O0lBQUUsMkNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBJbnB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuekNsYXNzTGlzdEFkZF0nXG59KVxuZXhwb3J0IGNsYXNzIE56Q2xhc3NMaXN0QWRkRGlyZWN0aXZlIHtcbiAgY2xhc3NMaXN0ID0gW107XG5cbiAgQElucHV0KClcbiAgc2V0IG56Q2xhc3NMaXN0QWRkKGxpc3Q6IHN0cmluZ1tdKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH0pO1xuICAgIGxpc3QuZm9yRWFjaChuYW1lID0+IHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3ModGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIG5hbWUpO1xuICAgIH0pO1xuICAgIHRoaXMuY2xhc3NMaXN0ID0gbGlzdDtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XG5cbiAgfVxufVxuIl19