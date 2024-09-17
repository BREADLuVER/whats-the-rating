// @ts-nocheck
/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/Wp3udDFej29GQDPImCOx/mVIzDHkxhHPxcRRx76vN/XiKKufNe7.js
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
import { useNavigate } from 'react-router-dom';
var cycleOrder = ['E_hf9L2LL', 'wCzCfTl94', 'lV0cKwHkW',];
var serializationHash = 'framer-U01LN';
var variantClassNames = { E_hf9L2LL: 'framer-v-xc23t', lV0cKwHkW: 'framer-v-1xivxd7', wCzCfTl94: 'framer-v-1w0nrx8', };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0
    ? void 0
    : variants.forEach((variant,) => variant && Object.assign(nextOverrides, overrides[variant],));
  return nextOverrides;
}
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: 'spring', };
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
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'E_hf9L2LL',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { backgroundColor: 'rgb(10, 10, 10)', ...style, },
          ...addPropertyOverrides(
            { lV0cKwHkW: { 'data-framer-name': 'Tablet', }, wCzCfTl94: { 'data-framer-name': 'Phone', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx(React.Fragment, {
                children: /* @__PURE__ */ _jsx(motion.p, {
                  style: { '--framer-text-alignment': 'center', '--framer-text-color': 'var(--extracted-r6o4lv, rgb(227, 225, 225))', },
                  children: 'Submit a form to populate this website with future games you look forward rating',
                },),
              },),
              className: 'framer-1x9iwtz',
              fonts: ['Inter',],
              layoutDependency,
              layoutId: 'IDHRx3jks',
              style: {
                '--extracted-r6o4lv': 'rgb(227, 225, 225)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  wCzCfTl94: {
                    children: /* @__PURE__ */ _jsx(React.Fragment, {
                      children: /* @__PURE__ */ _jsx(motion.p, {
                        style: {
                          '--framer-font-size': '15px',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color': 'var(--extracted-r6o4lv, rgb(227, 225, 225))',
                        },
                        children: 'Submit a form to populate this website with future games you look forward rating',
                      },),
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
              onClick: () => navigate('/userForm'),
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
                      '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                    },
                    children: 'Click Here',
                  },),
                },),
                className: 'framer-1ef4p9i',
                fonts: ['GF;Inter-600',],
                layoutDependency,
                layoutId: 'xM2NlQvEC',
                style: {
                  '--extracted-r6o4lv': 'rgb(255, 255, 255)',
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
  '.framer-U01LN.framer-1bzucgt, .framer-U01LN .framer-1bzucgt { display: block; }',
  '.framer-U01LN.framer-xc23t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 18px; height: 160px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }',
  '.framer-U01LN .framer-1x9iwtz { flex: none; height: 41px; position: relative; white-space: pre-wrap; width: 335px; word-break: break-word; word-wrap: break-word; }',
  '.framer-U01LN .framer-pm3zeo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 36px; justify-content: center; overflow: visible; padding: 15px 23px 15px 23px; position: relative; width: min-content; }',
  '.framer-U01LN .framer-1ef4p9i { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-U01LN.framer-xc23t, .framer-U01LN .framer-pm3zeo { gap: 0px; } .framer-U01LN.framer-xc23t > * { margin: 0px; margin-bottom: calc(18px / 2); margin-top: calc(18px / 2); } .framer-U01LN.framer-xc23t > :first-child { margin-top: 0px; } .framer-U01LN.framer-xc23t > :last-child { margin-bottom: 0px; } .framer-U01LN .framer-pm3zeo > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } .framer-U01LN .framer-pm3zeo > :first-child { margin-left: 0px; } .framer-U01LN .framer-pm3zeo > :last-child { margin-right: 0px; } }',
  '.framer-U01LN.framer-v-1w0nrx8.framer-xc23t { width: 390px; }',
  '.framer-U01LN.framer-v-1xivxd7.framer-xc23t { width: 810px; }',
];
var FramerXiKKufNe7 = withCSS(Component, css, 'framer-U01LN',);
var stdin_default = FramerXiKKufNe7;
FramerXiKKufNe7.displayName = 'userSurvey';
FramerXiKKufNe7.defaultProps = { height: 160, width: 1200, };
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
    url: 'https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116',
    url: 'https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+1F00-1FFF',
    url: 'https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0370-03FF',
    url: 'https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF',
    url: 'https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange:
      'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD',
    url: 'https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2',
    weight: '400',
  }, {
    family: 'Inter',
    source: 'framer',
    style: 'normal',
    unicodeRange: 'U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB',
    url: 'https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2',
    weight: '400',
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
