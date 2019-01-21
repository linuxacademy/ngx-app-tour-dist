/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const POSITION_MAP = (/** @type {?} */ ((/** @type {?} */ ({
    'top': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topCenter': {
        originX: 'center',
        originY: 'top',
        overlayX: 'center',
        overlayY: 'bottom'
    },
    'topLeft': {
        originX: 'start',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'bottom'
    },
    'topRight': {
        originX: 'end',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'bottom'
    },
    'right': {
        originX: 'end',
        originY: 'center',
        overlayX: 'start',
        overlayY: 'center',
    },
    'rightTop': {
        originX: 'end',
        originY: 'top',
        overlayX: 'start',
        overlayY: 'top',
    },
    'rightBottom': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom',
    },
    'bottom': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomCenter': {
        originX: 'center',
        originY: 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    },
    'bottomLeft': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'top',
    },
    'bottomRight': {
        originX: 'end',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'top',
    },
    'left': {
        originX: 'start',
        originY: 'center',
        overlayX: 'end',
        overlayY: 'center',
    },
    'leftTop': {
        originX: 'start',
        originY: 'top',
        overlayX: 'end',
        overlayY: 'top',
    },
    'leftBottom': {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'end',
        overlayY: 'bottom',
    },
}))));
// TODO: The whole logic does not make sense here, _objectValues just returns a copy of original array
/** @type {?} */
export const DEFAULT_4_POSITIONS = _objectValues([POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left]);
/** @type {?} */
export const DEFAULT_DROPDOWN_POSITIONS = _objectValues([POSITION_MAP.bottomLeft, POSITION_MAP.topLeft]);
// export const DEFAULT_DATEPICKER_POSITIONS = [
//   {
//     originX : 'start',
//     originY : 'top',
//     overlayX: 'start',
//     overlayY: 'top',
//   },
//   {
//     originX : 'start',
//     originY : 'bottom',
//     overlayX: 'start',
//     overlayY: 'bottom',
//   }
// ] as ConnectionPositionPair[];
/** @type {?} */
export const DEFAULT_MENTION_POSITIONS = (/** @type {?} */ ([
    POSITION_MAP.bottomLeft,
    {
        originX: 'start',
        originY: 'bottom',
        overlayX: 'start',
        overlayY: 'bottom'
    }
]));
/**
 * @template T, S
 * @param {?} array
 * @param {?} iteratee
 * @return {?}
 */
function arrayMap(array, iteratee) {
    /** @type {?} */
    let index = -1;
    /** @type {?} */
    const length = array == null ? 0 : array.length;
    /** @type {?} */
    const result = Array(length);
    while (++index < length) {
        result[index] = iteratee(array[index], index, array);
    }
    return result;
}
/**
 * @template T
 * @param {?} object
 * @param {?} props
 * @return {?}
 */
function baseValues(object, props) {
    return arrayMap(props, (key) => {
        return object[key];
    });
}
/**
 * @template T
 * @param {?} object
 * @return {?}
 */
function _objectValues(object) {
    return object == null ? [] : baseValues(object, Object.keys(object));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi1tYXAuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtYXBwLXRvdXIvIiwic291cmNlcyI6WyJsaWIvbmctem9ycm8vY29yZS9vdmVybGF5L292ZXJsYXktcG9zaXRpb24tbWFwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBRUEsTUFBTSxPQUFPLFlBQVksR0FBOEMsbUJBQUEsbUJBQUE7SUFDckUsS0FBSyxFQUFXO1FBQ2QsT0FBTyxFQUFHLFFBQVE7UUFDbEIsT0FBTyxFQUFHLEtBQUs7UUFDZixRQUFRLEVBQUUsUUFBUTtRQUNsQixRQUFRLEVBQUUsUUFBUTtLQUNuQjtJQUNELFdBQVcsRUFBSztRQUNkLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLE9BQU8sRUFBRyxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxTQUFTLEVBQU87UUFDZCxPQUFPLEVBQUcsT0FBTztRQUNqQixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsVUFBVSxFQUFNO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLFFBQVE7S0FDbkI7SUFDRCxPQUFPLEVBQVM7UUFDZCxPQUFPLEVBQUcsS0FBSztRQUNmLE9BQU8sRUFBRyxRQUFRO1FBQ2xCLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CO0lBQ0QsVUFBVSxFQUFNO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsS0FBSztRQUNmLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxLQUFLO0tBQ2hCO0lBQ0QsYUFBYSxFQUFHO1FBQ2QsT0FBTyxFQUFHLEtBQUs7UUFDZixPQUFPLEVBQUcsUUFBUTtRQUNsQixRQUFRLEVBQUUsT0FB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SSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7QUFDdkUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XG5cbmV4cG9ydCBjb25zdCBQT1NJVElPTl9NQVA6IHsgW2tleTogc3RyaW5nXTogQ29ubmVjdGlvblBvc2l0aW9uUGFpciB9ID0ge1xuICAndG9wJyAgICAgICAgIDoge1xuICAgIG9yaWdpblggOiAnY2VudGVyJyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9LFxuICAndG9wQ2VudGVyJyAgIDoge1xuICAgIG9yaWdpblggOiAnY2VudGVyJyxcbiAgICBvcmlnaW5ZIDogJ3RvcCcsXG4gICAgb3ZlcmxheVg6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xuICB9LFxuICAndG9wTGVmdCcgICAgIDoge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgfSxcbiAgJ3RvcFJpZ2h0JyAgICA6IHtcbiAgICBvcmlnaW5YIDogJ2VuZCcsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnZW5kJyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgfSxcbiAgJ3JpZ2h0JyAgICAgICA6IHtcbiAgICBvcmlnaW5YIDogJ2VuZCcsXG4gICAgb3JpZ2luWSA6ICdjZW50ZXInLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAnY2VudGVyJyxcbiAgfSxcbiAgJ3JpZ2h0VG9wJyAgICA6IHtcbiAgICBvcmlnaW5YIDogJ2VuZCcsXG4gICAgb3JpZ2luWSA6ICd0b3AnLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAndG9wJyxcbiAgfSxcbiAgJ3JpZ2h0Qm90dG9tJyA6IHtcbiAgICBvcmlnaW5YIDogJ2VuZCcsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbiAgfSxcbiAgJ2JvdHRvbScgICAgICA6IHtcbiAgICBvcmlnaW5YIDogJ2NlbnRlcicsXG4gICAgb3JpZ2luWSA6ICdib3R0b20nLFxuICAgIG92ZXJsYXlYOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gIH0sXG4gICdib3R0b21DZW50ZXInOiB7XG4gICAgb3JpZ2luWCA6ICdjZW50ZXInLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ2NlbnRlcicsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICB9LFxuICAnYm90dG9tTGVmdCcgIDoge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ3RvcCcsXG4gIH0sXG4gICdib3R0b21SaWdodCcgOiB7XG4gICAgb3JpZ2luWCA6ICdlbmQnLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICB9LFxuICAnbGVmdCcgICAgICAgIDoge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAnY2VudGVyJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICdjZW50ZXInLFxuICB9LFxuICAnbGVmdFRvcCcgICAgIDoge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAndG9wJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICd0b3AnLFxuICB9LFxuICAnbGVmdEJvdHRvbScgIDoge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ2VuZCcsXG4gICAgb3ZlcmxheVk6ICdib3R0b20nLFxuICB9LFxufSBhcyB7IH0gYXMgeyBba2V5OiBzdHJpbmddOiBDb25uZWN0aW9uUG9zaXRpb25QYWlyIH07XG5cbi8vIFRPRE86IFRoZSB3aG9sZSBsb2dpYyBkb2VzIG5vdCBtYWtlIHNlbnNlIGhlcmUsIF9vYmplY3RWYWx1ZXMganVzdCByZXR1cm5zIGEgY29weSBvZiBvcmlnaW5hbCBhcnJheVxuZXhwb3J0IGNvbnN0IERFRkFVTFRfNF9QT1NJVElPTlMgPSBfb2JqZWN0VmFsdWVzKFsgUE9TSVRJT05fTUFQLnRvcCwgUE9TSVRJT05fTUFQLnJpZ2h0LCBQT1NJVElPTl9NQVAuYm90dG9tLCBQT1NJVElPTl9NQVAubGVmdF0pO1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfRFJPUERPV05fUE9TSVRJT05TID0gX29iamVjdFZhbHVlcyhbIFBPU0lUSU9OX01BUC5ib3R0b21MZWZ0LCBQT1NJVElPTl9NQVAudG9wTGVmdCBdKTtcblxuLy8gZXhwb3J0IGNvbnN0IERFRkFVTFRfREFURVBJQ0tFUl9QT1NJVElPTlMgPSBbXG4vLyAgIHtcbi8vICAgICBvcmlnaW5YIDogJ3N0YXJ0Jyxcbi8vICAgICBvcmlnaW5ZIDogJ3RvcCcsXG4vLyAgICAgb3ZlcmxheVg6ICdzdGFydCcsXG4vLyAgICAgb3ZlcmxheVk6ICd0b3AnLFxuLy8gICB9LFxuLy8gICB7XG4vLyAgICAgb3JpZ2luWCA6ICdzdGFydCcsXG4vLyAgICAgb3JpZ2luWSA6ICdib3R0b20nLFxuLy8gICAgIG92ZXJsYXlYOiAnc3RhcnQnLFxuLy8gICAgIG92ZXJsYXlZOiAnYm90dG9tJyxcbi8vICAgfVxuLy8gXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XG5cbmV4cG9ydCBjb25zdCBERUZBVUxUX01FTlRJT05fUE9TSVRJT05TID0gW1xuICBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCxcbiAge1xuICAgIG9yaWdpblggOiAnc3RhcnQnLFxuICAgIG9yaWdpblkgOiAnYm90dG9tJyxcbiAgICBvdmVybGF5WDogJ3N0YXJ0JyxcbiAgICBvdmVybGF5WTogJ2JvdHRvbSdcbiAgfVxuXSBhcyBDb25uZWN0aW9uUG9zaXRpb25QYWlyW107XG5cbmZ1bmN0aW9uIGFycmF5TWFwPFQsIFM+KGFycmF5OiBUW10sIGl0ZXJhdGVlOiAoaXRlbTogVCwgaW5kZXg6IG51bWJlciwgYXJyOiBUW10pID0+IFMpOiBTW10ge1xuICBsZXQgaW5kZXggPSAtMTtcbiAgY29uc3QgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG4gIGNvbnN0IHJlc3VsdCA9IEFycmF5KGxlbmd0aCk7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICByZXN1bHRbIGluZGV4IF0gPSBpdGVyYXRlZShhcnJheVsgaW5kZXggXSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBiYXNlVmFsdWVzPFQ+KG9iamVjdDogeyBba2V5OiBzdHJpbmddOiBUIH0gfCBUW10sIHByb3BzOiBzdHJpbmdbXSk6IFRbXSB7XG4gIHJldHVybiBhcnJheU1hcChwcm9wcywgIChrZXkpID0+IHtcbiAgICByZXR1cm4gb2JqZWN0WyBrZXkgXTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3RWYWx1ZXM8VD4ob2JqZWN0OiB7IFtrZXk6IHN0cmluZ106IFQgfSB8IFRbXSk6IFRbXSB7XG4gIHJldHVybiBvYmplY3QgPT0gbnVsbCA/IFtdIDogYmFzZVZhbHVlcyhvYmplY3QsIE9iamVjdC5rZXlzKG9iamVjdCkpO1xufVxuIl19