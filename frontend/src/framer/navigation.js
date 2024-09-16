// @ts-nocheck
/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/Ujm2cDZJrG6BGf3gPyaf/c5mt84xmKZHFbzFjnWt9/j6oGRcNtb.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  SVG,
  useActiveVariantCallback,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
var cycleOrder = ['dNSFe_iUx', 'OlRDtOhw4', 'QdnqlRfg6',];
var serializationHash = 'framer-BlqPw';
var variantClassNames = { dNSFe_iUx: 'framer-v-1y5t2b2', OlRDtOhw4: 'framer-v-ljpkez', QdnqlRfg6: 'framer-v-1fm9697', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { damping: 40, delay: 0, mass: 1, stiffness: 400, type: 'spring', };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { 'Phone Open': 'QdnqlRfg6', Desktop: 'dNSFe_iUx', Phone: 'OlRDtOhw4', };
var getProps = ({ height, id, width, ...props },) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return {
    ...props,
    variant:
      (_ref =
            (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null &&
              _humanReadableVariantMap_props_variant !== void 0
              ? _humanReadableVariantMap_props_variant
              : props.variant) !== null && _ref !== void 0
        ? _ref
        : 'dNSFe_iUx',
  };
};
var createLayoutDependency = (props, variants,) => {
  if (props.layoutDependency) return variants.join('-',) + props.layoutDependency;
  return variants.join('-',);
};
var Component = /* @__PURE__ */ React.forwardRef(function (props, ref,) {
  const { activeLocale, setLocale, } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props,);
  const {
    baseVariant,
    classNames,
    clearLoadingGesture,
    gestureHandlers,
    gestureVariant,
    isLoading,
    setGestureState,
    setVariant,
    variants,
  } = useVariantState({ cycleOrder, defaultVariant: 'dNSFe_iUx', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const { activeVariantCallback, delay, } = useActiveVariantCallback(baseVariant,);
  const onTap17c4210 = activeVariantCallback(async (...args) => {
    setVariant('QdnqlRfg6',);
  },);
  const onTapx8p2zq = activeVariantCallback(async (...args) => {
    setVariant('OlRDtOhw4',);
  },);
  const ref1 = React.useRef(null,);
  const isDisplayed = () => {
    if (['OlRDtOhw4', 'QdnqlRfg6',].includes(baseVariant,)) return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.nav, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-1y5t2b2', className, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'dNSFe_iUx',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(0, 0, 0)', ...style, },
          ...addPropertyOverrides(
            { OlRDtOhw4: { 'data-framer-name': 'Phone', }, QdnqlRfg6: { 'data-framer-name': 'Phone Open', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-sowwyr',
              'data-framer-name': 'Top',
              layoutDependency,
              layoutId: 'GreM8yNQp',
              ...addPropertyOverrides(
                {
                  OlRDtOhw4: { 'data-highlight': true, onTap: onTap17c4210, },
                  QdnqlRfg6: { 'data-highlight': true, onTap: onTapx8p2zq, },
                },
                baseVariant,
                gestureVariant,
              ),
              children: [
                /* @__PURE__ */ _jsx(SVG, {
                  background: { alt: '', positionX: 'center', positionY: 'center', },
                  className: 'framer-6zwpvp',
                  'data-framer-name': 'Logo',
                  description: 'An SVG icon of the Framer Logo.',
                  layout: 'position',
                  layoutDependency,
                  layoutId: 'BFCpIWM7v',
                  opacity: 1,
                  svg:
                    '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 31"><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><g><defs><pattern id="idss10866671094_3g-fillImage" width="100%" height="100%" patternContentUnits="objectBoundingBox"><image width="1" height="1" href="https://framerusercontent.com/images/hpEiNiXZw2BBNLWn9qtJfO690Mc.jpg" preserveAspectRatio="none" transform="translate(0, 0) scale(1, 1)"></image></pattern></defs><path d="M 6 0 L 37 0 L 37 31 L 6 31 Z" fill="url(#idss10866671094_3g-fillImage)"></path></g></svg>',
                  svgContentId: 10866671094,
                  title: 'Framer Logo',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      OlRDtOhw4: {
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 31"><g><defs><pattern id="idss10744037584_1g-fillImage" width="100%" height="100%" patternContentUnits="objectBoundingBox"><image width="1" height="1" href="https://framerusercontent.com/images/hpEiNiXZw2BBNLWn9qtJfO690Mc.jpg" preserveAspectRatio="none" transform="translate(0, 0) scale(1, 1)"></image></pattern></defs><path d="M 6 0 L 37 0 L 37 31 L 6 31 Z" fill="url(#idss10744037584_1g-fillImage)"></path></g><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><g><defs><pattern id="idss10744037584_3g-fillImage" width="100%" height="100%" patternContentUnits="objectBoundingBox"><image width="1" height="1" href="https://framerusercontent.com/images/hpEiNiXZw2BBNLWn9qtJfO690Mc.jpg" preserveAspectRatio="none" transform="translate(0, 0) scale(1, 1)"></image></pattern></defs><path d="M 6 0 L 37 0 L 37 31 L 6 31 Z" fill="url(#idss10744037584_3g-fillImage)"></path></g></svg>',
                        svgContentId: 10744037584,
                      },
                      QdnqlRfg6: {
                        svg:
                          '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 37 31"><path d="" fill="rgba(0,170,255,0.5)" stroke="#0AF"></path><g><defs><pattern id="idss10158270715_2g-fillImage" width="100%" height="100%" patternContentUnits="objectBoundingBox"><image width="1" height="1" href="https://framerusercontent.com/images/hpEiNiXZw2BBNLWn9qtJfO690Mc.jpg" preserveAspectRatio="none" transform="translate(0, 0) scale(1, 1)"></image></pattern></defs><path d="M 6 0 L 37 0 L 37 31 L 6 31 Z" fill="url(#idss10158270715_2g-fillImage)"></path></g><g><defs><pattern id="idss10158270715_3g-fillImage" width="100%" height="100%" patternContentUnits="objectBoundingBox"><image width="1" height="1" href="https://framerusercontent.com/images/hpEiNiXZw2BBNLWn9qtJfO690Mc.jpg" preserveAspectRatio="none" transform="translate(0, 0) scale(1, 1)"></image></pattern></defs><path d="M 6 0 L 37 0 L 37 31 L 6 31 Z" fill="url(#idss10158270715_3g-fillImage)"></path></g></svg>',
                        svgContentId: 10158270715,
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                isDisplayed() && /* @__PURE__ */ _jsxs(motion.div, {
                  className: 'framer-1bmr3ij',
                  'data-framer-name': 'Icon',
                  layoutDependency,
                  layoutId: 'qBS_H8iyC',
                  children: [
                    /* @__PURE__ */ _jsx(motion.div, {
                      className: 'framer-1rwtbw4',
                      'data-framer-name': 'Bottom',
                      layoutDependency,
                      layoutId: 'auv0cOuZN',
                      style: {
                        backgroundColor: 'rgb(153, 153, 153)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        rotate: 0,
                      },
                      variants: { QdnqlRfg6: { rotate: -45, }, },
                    },),
                    /* @__PURE__ */ _jsx(motion.div, {
                      className: 'framer-vxenmo',
                      'data-framer-name': 'Top',
                      layoutDependency,
                      layoutId: 'lufit0koC',
                      style: {
                        backgroundColor: 'rgb(153, 153, 153)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderTopRightRadius: 10,
                        rotate: 0,
                      },
                      variants: { QdnqlRfg6: { rotate: 45, }, },
                    },),
                  ],
                },),
              ],
            },),
            /* @__PURE__ */ _jsxs(motion.div, {
              className: 'framer-17s6yys',
              'data-framer-name': 'Links',
              layoutDependency,
              layoutId: 'O_3zXQC2t',
              style: { opacity: 1, },
              variants: { OlRDtOhw4: { opacity: 0, }, },
              children: [
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.01em',
                        '--framer-line-height': '2em',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                      },
                      children: 'Future Games',
                    },),
                  },),
                  className: 'framer-u8r087',
                  fonts: ['Inter-Medium',],
                  layoutDependency,
                  layoutId: 'xlQkfqs3I',
                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      OlRDtOhw4: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNjAw',
                              '--framer-font-family': '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                              '--framer-font-size': '32px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'Future Games',
                          },),
                        },),
                        fonts: ['GF;Inter Tight-600',],
                      },
                      QdnqlRfg6: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNjAw',
                              '--framer-font-family': '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                              '--framer-font-size': '32px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'Future Games',
                          },),
                        },),
                        fonts: ['GF;Inter Tight-600',],
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.2px',
                        '--framer-line-height': '2em',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                      },
                      children: 'Live Rating',
                    },),
                  },),
                  className: 'framer-6wgfva',
                  fonts: ['Inter-Medium',],
                  layoutDependency,
                  layoutId: 'ihDcRTia9',
                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      OlRDtOhw4: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'SW50ZXItTWVkaXVt',
                              '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                              '--framer-font-size': '15px',
                              '--framer-font-weight': '500',
                              '--framer-letter-spacing': '-0.2px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'Live Rating',
                          },),
                        },),
                      },
                      QdnqlRfg6: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNjAw',
                              '--framer-font-family': '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                              '--framer-font-size': '32px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'Live Rating',
                          },),
                        },),
                        fonts: ['GF;Inter Tight-600',],
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.2px',
                        '--framer-line-height': '2em',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                      },
                      children: 'Leaderboard',
                    },),
                  },),
                  className: 'framer-y5dgm2',
                  fonts: ['Inter-Medium',],
                  layoutDependency,
                  layoutId: 'j39a4qjaI',
                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      OlRDtOhw4: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNjAw',
                              '--framer-font-family': '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                              '--framer-font-size': '32px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'Leaderboard',
                          },),
                        },),
                        fonts: ['GF;Inter Tight-600',],
                      },
                      QdnqlRfg6: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNjAw',
                              '--framer-font-family': '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                              '--framer-font-size': '32px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'Leaderboard',
                          },),
                        },),
                        fonts: ['GF;Inter Tight-600',],
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
                /* @__PURE__ */ _jsx(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx(React.Fragment, {
                    children: /* @__PURE__ */ _jsx(motion.p, {
                      style: {
                        '--font-selector': 'SW50ZXItTWVkaXVt',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '15px',
                        '--framer-font-weight': '500',
                        '--framer-letter-spacing': '-0.2px',
                        '--framer-line-height': '2em',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                      },
                      children: 'User',
                    },),
                  },),
                  className: 'framer-16s5cwp',
                  fonts: ['Inter-Medium',],
                  layoutDependency,
                  layoutId: 'E6O7UTHu4',
                  style: { '--extracted-r6o4lv': 'rgb(255, 255, 255)', '--framer-paragraph-spacing': '0px', },
                  verticalAlignment: 'top',
                  withExternalLayout: true,
                  ...addPropertyOverrides(
                    {
                      OlRDtOhw4: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'SW50ZXItTWVkaXVt',
                              '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                              '--framer-font-size': '15px',
                              '--framer-font-weight': '500',
                              '--framer-letter-spacing': '-0.2px',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'User',
                          },),
                        },),
                      },
                      QdnqlRfg6: {
                        children: /* @__PURE__ */ _jsx(React.Fragment, {
                          children: /* @__PURE__ */ _jsx(motion.p, {
                            style: {
                              '--font-selector': 'R0Y7SW50ZXIgVGlnaHQtNjAw',
                              '--framer-font-family': '"Inter Tight", "Inter Tight Placeholder", sans-serif',
                              '--framer-font-size': '32px',
                              '--framer-font-weight': '600',
                              '--framer-line-height': '1.5em',
                              '--framer-text-alignment': 'left',
                              '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                            },
                            children: 'User',
                          },),
                        },),
                        fonts: ['GF;Inter Tight-600',],
                      },
                    },
                    baseVariant,
                    gestureVariant,
                  ),
                },),
              ],
            },),
            /* @__PURE__ */ _jsx(motion.div, {
              className: 'framer-10hctwx',
              'data-framer-name': 'Bottom Line',
              layoutDependency,
              layoutId: 'HY4Gto6DS',
              style: { backgroundColor: 'rgba(255, 255, 255, 0.08)', },
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-BlqPw.framer-1x3y98b, .framer-BlqPw .framer-1x3y98b { display: block; }',
  '.framer-BlqPw.framer-1y5t2b2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: 64px; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1200px; }',
  '.framer-BlqPw .framer-sowwyr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 10px 0px 10px 10px; position: relative; width: min-content; }',
  '.framer-BlqPw .framer-6zwpvp { flex: none; height: 31px; position: relative; width: 37px; }',
  '.framer-BlqPw .framer-1bmr3ij { flex: none; height: 40px; overflow: hidden; position: relative; width: 40px; }',
  '.framer-BlqPw .framer-1rwtbw4 { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(62.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-BlqPw .framer-vxenmo { flex: none; height: 2px; left: calc(50.00000000000002% - 20px / 2); overflow: hidden; position: absolute; top: calc(37.50000000000002% - 2px / 2); width: 20px; will-change: var(--framer-will-change-override, transform); }',
  '.framer-BlqPw .framer-17s6yys { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-BlqPw .framer-u8r087, .framer-BlqPw .framer-6wgfva, .framer-BlqPw .framer-y5dgm2, .framer-BlqPw .framer-16s5cwp { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }',
  '.framer-BlqPw .framer-10hctwx { bottom: 0px; flex: none; height: 1px; left: 0px; overflow: visible; position: absolute; right: 0px; z-index: 1; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BlqPw.framer-1y5t2b2, .framer-BlqPw .framer-sowwyr, .framer-BlqPw .framer-17s6yys { gap: 0px; } .framer-BlqPw.framer-1y5t2b2 > *, .framer-BlqPw .framer-17s6yys > * { margin: 0px; margin-left: calc(20px / 2); margin-right: calc(20px / 2); } .framer-BlqPw.framer-1y5t2b2 > :first-child, .framer-BlqPw .framer-sowwyr > :first-child, .framer-BlqPw .framer-17s6yys > :first-child { margin-left: 0px; } .framer-BlqPw.framer-1y5t2b2 > :last-child, .framer-BlqPw .framer-sowwyr > :last-child, .framer-BlqPw .framer-17s6yys > :last-child { margin-right: 0px; } .framer-BlqPw .framer-sowwyr > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } }',
  '.framer-BlqPw.framer-v-ljpkez.framer-1y5t2b2 { flex-direction: column; gap: 0px; width: 390px; }',
  '.framer-BlqPw.framer-v-ljpkez .framer-sowwyr, .framer-BlqPw.framer-v-1fm9697 .framer-sowwyr { cursor: pointer; gap: unset; justify-content: space-between; padding: 10px; width: 100%; }',
  '.framer-BlqPw.framer-v-ljpkez .framer-1bmr3ij { height: 44px; width: 42px; }',
  '.framer-BlqPw.framer-v-ljpkez .framer-17s6yys { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; padding: 20px 20px 120px 20px; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BlqPw.framer-v-ljpkez.framer-1y5t2b2, .framer-BlqPw.framer-v-ljpkez .framer-sowwyr, .framer-BlqPw.framer-v-ljpkez .framer-17s6yys { gap: 0px; } .framer-BlqPw.framer-v-ljpkez.framer-1y5t2b2 > *, .framer-BlqPw.framer-v-ljpkez .framer-17s6yys > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-BlqPw.framer-v-ljpkez.framer-1y5t2b2 > :first-child, .framer-BlqPw.framer-v-ljpkez .framer-17s6yys > :first-child { margin-top: 0px; } .framer-BlqPw.framer-v-ljpkez.framer-1y5t2b2 > :last-child, .framer-BlqPw.framer-v-ljpkez .framer-17s6yys > :last-child { margin-bottom: 0px; } .framer-BlqPw.framer-v-ljpkez .framer-sowwyr > *, .framer-BlqPw.framer-v-ljpkez .framer-sowwyr > :first-child, .framer-BlqPw.framer-v-ljpkez .framer-sowwyr > :last-child { margin: 0px; } }',
  '.framer-BlqPw.framer-v-1fm9697.framer-1y5t2b2 { flex-direction: column; gap: 0px; height: min-content; max-height: calc(var(--framer-viewport-height, 100vh) * 1); overflow: auto; overscroll-behavior: contain; width: 390px; }',
  '.framer-BlqPw.framer-v-1fm9697 .framer-1bmr3ij { height: 44px; width: 44px; }',
  '.framer-BlqPw.framer-v-1fm9697 .framer-1rwtbw4, .framer-BlqPw.framer-v-1fm9697 .framer-vxenmo { top: calc(50.00000000000002% - 2px / 2); }',
  '.framer-BlqPw.framer-v-1fm9697 .framer-17s6yys { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 0px; padding: 20px; width: 100%; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-BlqPw.framer-v-1fm9697.framer-1y5t2b2, .framer-BlqPw.framer-v-1fm9697 .framer-sowwyr, .framer-BlqPw.framer-v-1fm9697 .framer-17s6yys { gap: 0px; } .framer-BlqPw.framer-v-1fm9697.framer-1y5t2b2 > *, .framer-BlqPw.framer-v-1fm9697 .framer-17s6yys > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } .framer-BlqPw.framer-v-1fm9697.framer-1y5t2b2 > :first-child, .framer-BlqPw.framer-v-1fm9697 .framer-17s6yys > :first-child { margin-top: 0px; } .framer-BlqPw.framer-v-1fm9697.framer-1y5t2b2 > :last-child, .framer-BlqPw.framer-v-1fm9697 .framer-17s6yys > :last-child { margin-bottom: 0px; } .framer-BlqPw.framer-v-1fm9697 .framer-sowwyr > *, .framer-BlqPw.framer-v-1fm9697 .framer-sowwyr > :first-child, .framer-BlqPw.framer-v-1fm9697 .framer-sowwyr > :last-child { margin: 0px; } }',
];
var Framerj6oGRcNtb = withCSS(Component, css, 'framer-BlqPw',);
var stdin_default = Framerj6oGRcNtb;
Framerj6oGRcNtb.displayName = 'Navigation';
Framerj6oGRcNtb.defaultProps = { height: 64, width: 1200, };
addPropertyControls(Framerj6oGRcNtb, {
  variant: {
    options: ['dNSFe_iUx', 'OlRDtOhw4', 'QdnqlRfg6',],
    optionTitles: ['Desktop', 'Phone', 'Phone Open',],
    title: 'Variant',
    type: ControlType.Enum,
  },
},);
addFonts(Framerj6oGRcNtb, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/5A3Ce6C9YYmCjpQx9M4inSaKU.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/Qx95Xyt0Ka3SGhinnbXIGpEIyP4.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/6mJuEAguuIuMog10gGvH5d3cl8.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/xYYWaj7wCU5zSQH0eXvSaS19wo.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/otTaNuNpVK4RbdlT7zDDdKvQBA.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/d3tHnaQIAeqiE5hGcRw4mmgWYU.woff2',
    weight: '500',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/DolVirEGb34pEXEp8t8FQBSK4.woff2',
    weight: '500',
  }, {
    family: 'Inter Tight',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/intertight/v7/NGSnv5HMAFg6IuGlBNMjxJEL2VmU3NS7Z2mj0QiqWSRToK8EPg.woff2',
    weight: '600',
  },],
},], { supportsExplicitInterCodegen: true, },);

// virtual:navigation
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var navigation_default = stdin_default;
export { navigation_default as default, };
