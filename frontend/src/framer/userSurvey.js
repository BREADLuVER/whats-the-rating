// @ts-nocheck
/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/Wp3udDFej29GQDPImCOx/Cjav34nfNklxcEB0UCrc/XiKKufNe7.js
import { jsx as _jsx, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls,
  ControlType,
  cx,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';
import { useNavigate } from'react-router-dom';
var cycleOrder = ['E_hf9L2LL', 'wCzCfTl94', 'lV0cKwHkW',];
var serializationHash = 'framer-9KsDl';
var variantClassNames = { E_hf9L2LL: 'framer-v-xc23t', lV0cKwHkW: 'framer-v-1xivxd7', wCzCfTl94: 'framer-v-1w0nrx8', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: 'spring', };
var transition2 = { bounce: 0.25, delay: 0, duration: 0.45, type: 'spring', };
var animation = { opacity: 1, rotate: 0, rotateX: 0, rotateY: 0, scale: 1.1, skewX: 0, skewY: 0, transition: transition2, };
var Transition = ({ value, children, },) => {
  const config = React.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { Desktop: 'E_hf9L2LL', Phone: 'wCzCfTl94', Tablet: 'lV0cKwHkW', };
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
        : 'E_hf9L2LL',
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
  } = useVariantState({ cycleOrder, defaultVariant: 'E_hf9L2LL', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  const navigate = useNavigate();
  const onClickFutureGames = () => {
    navigate('/');
  };
  return /* @__PURE__ */ _jsx(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.div, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-xc23t', className, classNames,),
          'data-border': true,
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'E_hf9L2LL',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: {
            '--border-bottom-width': '0px',
            '--border-color': 'rgb(10, 10, 10)',
            '--border-left-width': '0px',
            '--border-right-width': '0px',
            '--border-style': 'solid',
            '--border-top-width': '7px',
            background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(1, 3, 20) 39.63958465301239%, rgb(0, 0, 0) 100%)',
            ...style,
          },
          ...addPropertyOverrides(
            { lV0cKwHkW: { 'data-framer-name': 'Tablet', }, wCzCfTl94: { 'data-framer-name': 'Phone', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsxs(React.Fragment, {
                children: [
                  /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--framer-font-size': '18px',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(227, 225, 225))',
                    },
                    children: /* @__PURE__ */ _jsx(motion.br, { className: 'trailing-break', },),
                  },),
                  /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'SW50ZXItTGlnaHQ=',
                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                      '--framer-font-size': '18px',
                      '--framer-font-weight': '300',
                      '--framer-letter-spacing': '-0.05em',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-2gxw0f, rgb(199, 197, 197))',
                    },
                    children: 'Submit a form to populate this website with future games you look forward rating',
                  },),
                ],
              },),
              className: 'framer-1x9iwtz',
              fonts: ['Inter-Light',],
              layoutDependency,
              layoutId: 'IDHRx3jks',
              style: {
                '--extracted-2gxw0f': 'rgb(199, 197, 197)',
                '--extracted-r6o4lv': 'rgb(227, 225, 225)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              verticalAlignment: 'center',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  lV0cKwHkW: {
                    children: /* @__PURE__ */ _jsxs(React.Fragment, {
                      children: [
                        /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--framer-font-size': '18px',
                            '--framer-line-height': '1.5em',
                            '--framer-text-alignment': 'center',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(227, 225, 225))',
                          },
                          children: /* @__PURE__ */ _jsx(motion.br, { className: 'trailing-break', },),
                        },),
                        /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTGlnaHQ=',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-weight': '300',
                            '--framer-letter-spacing': '-0.05em',
                            '--framer-line-height': '1.5em',
                            '--framer-text-alignment': 'center',
                            '--framer-text-color': 'var(--extracted-2gxw0f, rgb(199, 197, 197))',
                          },
                          children: 'Submit a form to populate this website with future games you look forward rating',
                        },),
                      ],
                    },),
                  },
                  wCzCfTl94: {
                    children: /* @__PURE__ */ _jsxs(React.Fragment, {
                      children: [
                        /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--framer-text-alignment': 'center',
                            '--framer-text-color': 'var(--extracted-r6o4lv, rgb(227, 225, 225))',
                          },
                          children: /* @__PURE__ */ _jsx(motion.br, { className: 'trailing-break', },),
                        },),
                        /* @__PURE__ */ _jsx(motion.p, {
                          style: {
                            '--font-selector': 'SW50ZXItTGlnaHQ=',
                            '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                            '--framer-font-weight': '300',
                            '--framer-letter-spacing': '-0.05em',
                            '--framer-text-alignment': 'center',
                            '--framer-text-color': 'var(--extracted-2gxw0f, rgb(199, 197, 197))',
                          },
                          children: 'Submit a form to populate this website with future games you look forward rating',
                        },),
                      ],
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
            /* @__PURE__ */ _jsx(motion.button, {
              className: 'framer-pm3zeo',
              'data-framer-name': 'Button',
              'data-reset': 'button',
              layoutDependency,
              layoutId: 'ePLafuKok',
              style: {
                backgroundColor: 'rgb(34, 34, 34)',
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                boxShadow:
                  '0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.14764), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)',
              },
              whileHover: animation,
              children: /* @__PURE__ */ _jsx(RichText, {
                __fromCanvasComponent: true,
                children: /* @__PURE__ */ _jsx(React.Fragment, {
                  children: /* @__PURE__ */ _jsx(motion.p, {
                    style: {
                      '--font-selector': 'R0Y7SW50ZXItNjAw',
                      '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                      '--framer-font-size': '14px',
                      '--framer-font-weight': '600',
                      '--framer-text-alignment': 'center',
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(199, 197, 197))',
                    },
                    onClick: () => navigate('/userForm'),
                    children: 'Click Here',
                  },),
                },),
                className: 'framer-1ef4p9i',
                fonts: ['GF;Inter-600',],
                layoutDependency,
                layoutId: 'xM2NlQvEC',
                style: {
                  '--extracted-r6o4lv': 'rgb(199, 197, 197)',
                  '--framer-link-text-color': 'rgb(0, 153, 255)',
                  '--framer-link-text-decoration': 'underline',
                  '--framer-paragraph-spacing': '0px',
                },
                verticalAlignment: 'top',
                withExternalLayout: true,
              },),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-9KsDl.framer-1bzucgt, .framer-9KsDl .framer-1bzucgt { display: block; }',
  '.framer-9KsDl.framer-xc23t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 400px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }',
  '.framer-9KsDl .framer-1x9iwtz { flex: none; height: 73px; position: relative; white-space: pre-wrap; width: 405px; word-break: break-word; word-wrap: break-word; }',
  '.framer-9KsDl .framer-pm3zeo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 15px 23px 15px 23px; position: relative; width: min-content; }',
  '.framer-9KsDl .framer-1ef4p9i { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9KsDl.framer-xc23t, .framer-9KsDl .framer-pm3zeo { gap: 0px; } .framer-9KsDl.framer-xc23t > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-9KsDl.framer-xc23t > :first-child { margin-top: 0px; } .framer-9KsDl.framer-xc23t > :last-child { margin-bottom: 0px; } .framer-9KsDl .framer-pm3zeo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-9KsDl .framer-pm3zeo > :first-child { margin-left: 0px; } .framer-9KsDl .framer-pm3zeo > :last-child { margin-right: 0px; } }',
  '.framer-9KsDl.framer-v-1w0nrx8.framer-xc23t { width: 390px; }',
  '.framer-9KsDl.framer-v-1w0nrx8 .framer-1x9iwtz { width: 330px; }',
  '.framer-9KsDl.framer-v-1xivxd7.framer-xc23t { width: 810px; }',
  '.framer-9KsDl[data-border="true"]::after, .framer-9KsDl [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }',
];
var FramerXiKKufNe7 = withCSS(Component, css, 'framer-9KsDl',);
var stdin_default = FramerXiKKufNe7;
FramerXiKKufNe7.displayName = 'userSurvey';
FramerXiKKufNe7.defaultProps = { height: 400, width: 1200, };
addPropertyControls(FramerXiKKufNe7, {
  variant: {
    options: ['E_hf9L2LL', 'wCzCfTl94', 'lV0cKwHkW',],
    optionTitles: ['Desktop', 'Phone', 'Tablet',],
    title: 'Variant',
    type: ControlType.Enum,
  },
},);
addFonts(FramerXiKKufNe7, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F',
    url: 'https://framerusercontent.com/assets/BkDpl4ghaqvMi1btKFyG2tdbec.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/zAMK70AQRFSShJgUiaR5IiIhgzk.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/IETjvc5qzUaRoaruDpPSwCUM8.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/oLCoaT3ioA0fHdJnWR9W6k7NY.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/Sj0PCHQSBjFmEp6NBWg6FNaKc.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/v2q8JTTTs7McDMSEhnxAIBqd0.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/H4TfENUY1rh8R9UaSD6vngjJP3M.woff2',
    weight: '300',
  }, {
    family: 'Inter',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2',
    weight: '600',
  },],
},], { supportsExplicitInterCodegen: true, },);

// virtual:userSurvey
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var userSurvey_default = stdin_default;
export { userSurvey_default as default, };
