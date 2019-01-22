/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Input, TemplateRef, ViewEncapsulation } from '@angular/core';
import { fadeAnimation } from '../core/animation/fade-animations';
import { isNotNil } from '../core/util';
import { NzToolTipComponent } from '../tooltip/nz-tooltip.component';
var NzPopoverComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr) {
        var _this = _super.call(this, cdr) || this;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    NzPopoverComponent.prototype.isContentEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isTitleEmpty = this.nzTitle instanceof TemplateRef ? false : (this.nzTitle === '' || !isNotNil(this.nzTitle));
        /** @type {?} */
        var isContentEmpty = this.nzContent instanceof TemplateRef ? false : (this.nzContent === '' || !isNotNil(this.nzContent));
        return isTitleEmpty && isContentEmpty;
    };
    NzPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popover',
                    animations: [fadeAnimation],
                    template: "<ng-content></ng-content>\n<ng-template\n  #overlay=\"cdkConnectedOverlay\"\n  cdkConnectedOverlay\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\n  (backdropClick)=\"hide()\"\n  (detach)=\"hide()\"\n  (positionChange)=\"onPositionChange($event)\"\n  [cdkConnectedOverlayPositions]=\"_positions\"\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\n  <div class=\"ant-popover\" [ngClass]=\"_classMap\" [ngStyle]=\"nzOverlayStyle\" [@fadeAnimation]=\"''+(visible$ | async)\"\n    (@fadeAnimation.done)=\"_afterVisibilityAnimation($event)\">\n    <div class=\"ant-popover-content\">\n      <div class=\"ant-popover-arrow\"></div>\n      <div class=\"ant-popover-inner\">\n        <div class=\"ant-popover-title\" *ngIf=\"nzTitle\">\n          <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\n        </div>\n        <div class=\"ant-popover-inner-content\">\n          <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\n        </div>\n      </div>\n    </div>\n  </div>\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["\n    .ant-popover {\n      position: relative;\n    }\n  "]
                }] }
    ];
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NzPopoverComponent.propDecorators = {
        nzTitle: [{ type: Input }, { type: ContentChild, args: ['neverUsedTemplate',] }],
        nzContent: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }]
    };
    return NzPopoverComponent;
}(NzToolTipComponent));
export { NzPopoverComponent };
if (false) {
    /** @type {?} */
    NzPopoverComponent.prototype._prefix;
    /** @type {?} */
    NzPopoverComponent.prototype.nzTitle;
    /** @type {?} */
    NzPopoverComponent.prototype.nzContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vcG9wb3Zlci9uei1wb3BvdmVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBRSxXQUFXLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0ksT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDeEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFckU7SUFhd0MsOENBQWtCO0lBTXhELDRCQUFZLEdBQXNCO1FBQWxDLFlBQ0Usa0JBQU0sR0FBRyxDQUFDLFNBQ1g7UUFQRCxhQUFPLEdBQUcsdUJBQXVCLENBQUM7O0lBT2xDLENBQUM7Ozs7O0lBRVMsMkNBQWM7Ozs7SUFBeEI7O1lBQ1EsWUFBWSxHQUFHLElBQUksQ0FBQyxPQUFPLFlBQVksV0FBVyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sS0FBSyxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztZQUM3RyxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsWUFBWSxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxLQUFLLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0gsT0FBTyxZQUFZLElBQUksY0FBYyxDQUFDO0lBQ3hDLENBQUM7O2dCQTNCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFhLFlBQVk7b0JBQ2pDLFVBQVUsRUFBVyxDQUFFLGFBQWEsQ0FBRTtvQkFDdEMsMmxDQUFrRDtvQkFDbEQsZUFBZSxFQUFNLHVCQUF1QixDQUFDLE1BQU07b0JBQ25ELGFBQWEsRUFBUSxpQkFBaUIsQ0FBQyxJQUFJO29CQUMzQyxtQkFBbUIsRUFBRSxLQUFLOzZCQUNILDREQUl0QjtpQkFDRjs7OztnQkFqQmlDLGlCQUFpQjs7OzBCQXFCaEQsS0FBSyxZQUFJLFlBQVksU0FBQyxtQkFBbUI7NEJBQ3pDLEtBQUssWUFBSSxZQUFZLFNBQUMsWUFBWTs7SUFXckMseUJBQUM7Q0FBQSxBQTVCRCxDQWF3QyxrQkFBa0IsR0FlekQ7U0FmWSxrQkFBa0I7OztJQUM3QixxQ0FBa0M7O0lBRWxDLHFDQUFnRjs7SUFDaEYsdUNBQTJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIENvbnRlbnRDaGlsZCwgSW5wdXQsIFRlbXBsYXRlUmVmLCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZmFkZUFuaW1hdGlvbiB9IGZyb20gJy4uL2NvcmUvYW5pbWF0aW9uL2ZhZGUtYW5pbWF0aW9ucyc7XG5pbXBvcnQgeyBpc05vdE5pbCB9IGZyb20gJy4uL2NvcmUvdXRpbCc7XG5pbXBvcnQgeyBOelRvb2xUaXBDb21wb25lbnQgfSBmcm9tICcuLi90b29sdGlwL256LXRvb2x0aXAuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yICAgICAgICAgICA6ICduei1wb3BvdmVyJyxcbiAgYW5pbWF0aW9ucyAgICAgICAgIDogWyBmYWRlQW5pbWF0aW9uIF0sXG4gIHRlbXBsYXRlVXJsICAgICAgICA6ICcuL256LXBvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb24gICAgOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIGVuY2Fwc3VsYXRpb24gICAgICA6IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxuICBzdHlsZXMgICAgICAgICAgICAgOiBbIGBcbiAgICAuYW50LXBvcG92ZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIH1cbiAgYCBdXG59KVxuZXhwb3J0IGNsYXNzIE56UG9wb3ZlckNvbXBvbmVudCBleHRlbmRzIE56VG9vbFRpcENvbXBvbmVudCB7XG4gIF9wcmVmaXggPSAnYW50LXBvcG92ZXItcGxhY2VtZW50JztcblxuICBASW5wdXQoKSBAQ29udGVudENoaWxkKCduZXZlclVzZWRUZW1wbGF0ZScpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+OyAvLyB1c2VkIHRvIHJlbW92ZSBOelRvb2xUaXBDb21wb25lbnQgQENvbnRlbnRDaGlsZCgnbnpUZW1wbGF0ZScpXG4gIEBJbnB1dCgpIEBDb250ZW50Q2hpbGQoJ256VGVtcGxhdGUnKSBuekNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+O1xuXG4gIGNvbnN0cnVjdG9yKGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihjZHIpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGlzQ29udGVudEVtcHR5KCk6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGlzVGl0bGVFbXB0eSA9IHRoaXMubnpUaXRsZSBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiAodGhpcy5uelRpdGxlID09PSAnJyB8fCAhaXNOb3ROaWwodGhpcy5uelRpdGxlKSk7XG4gICAgY29uc3QgaXNDb250ZW50RW1wdHkgPSB0aGlzLm56Q29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmID8gZmFsc2UgOiAodGhpcy5uekNvbnRlbnQgPT09ICcnIHx8ICFpc05vdE5pbCh0aGlzLm56Q29udGVudCkpO1xuICAgIHJldHVybiBpc1RpdGxlRW1wdHkgJiYgaXNDb250ZW50RW1wdHk7XG4gIH1cbn1cbiJdfQ==