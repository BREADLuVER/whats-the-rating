// @ts-nocheck
/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/dVfRKhGw53oyBBTWdfYW/jYyJiOB7wVnV7ezgW7Tq/V5lESJQt3.js
import { jsx as _jsx2, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls2,
  ComponentViewportProvider,
  ControlType as ControlType2,
  cx,
  getFonts,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React from 'react';

// https :https://framerusercontent.com/modules/HYcHVPAbe8jLEeU7c4mp/TcQV6SEsl3y6G9Op8tp0/Time.js
import { jsx as _jsx, } from 'react/jsx-runtime';
import { addPropertyControls, ControlType, RenderTarget, useLocaleCode, } from 'unframer';
import { useCallback, useEffect, useState, } from 'react';
var fontStack =
  `"Inter", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`;
function useForceRender() {
  const [_, set,] = useState(0,);
  return useCallback(() => set((v,) => v + 1), [],);
}
function formatTimeOrDate(
  outputType,
  { showYear, showMonth, showWeekday, showMinutes, showSeconds, },
  timeFormat,
  monthFormat,
  localCode,
) {
  const date = /* @__PURE__ */ new Date();
  const onlyYearIsShown = !showWeekday && !showMonth && showYear;
  switch (outputType) {
    case 'date':
      return new Intl.DateTimeFormat(localCode, {
        weekday: showWeekday ? 'long' : void 0,
        day: onlyYearIsShown ? void 0 : 'numeric',
        month: showMonth ? monthFormat : void 0,
        year: showYear ? 'numeric' : void 0,
      },).format(date,);
    case 'time':
      return new Intl.DateTimeFormat(localCode, {
        hour: 'numeric',
        minute: showMinutes ? 'numeric' : void 0,
        second: showSeconds && showMinutes ? 'numeric' : void 0,
        hour12: timeFormat === '12h',
      },).format(date,);
    default:
      return new Intl.DateTimeFormat(localCode,).format(date,);
  }
}
function Time(props,) {
  const {
    outputType,
    fontFamily,
    fontSize,
    fontWeight,
    timeFormat,
    showYear,
    showMonth,
    showWeekday,
    showHours,
    showMinutes,
    showSeconds,
    monthFormat,
    color,
    font,
    tabularFont,
    alignment,
  } = props;
  const [visible, setIsVisible,] = useState(false,);
  const isCanvas = RenderTarget.current() === RenderTarget.canvas;
  const render = useForceRender();
  const localCode = useLocaleCode();
  const textContent = formatTimeOrDate(
    outputType,
    { showYear, showMonth, showWeekday, showHours, showMinutes, showSeconds, },
    timeFormat,
    monthFormat,
    localCode,
  );
  useEffect(() => {
    setIsVisible(true,);
    if (isCanvas) return;
    const int = setInterval(() => {
      render();
    },);
    return () => {
      clearInterval(int,);
    };
  }, [],);
  return /* @__PURE__ */ _jsx('p', {
    suppressHydrationWarning: true,
    style: {
      margin: 0,
      padding: 0,
      color,
      fontFamily: fontStack,
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 1,
      visibility: visible ? 'visible' : 'hidden',
      ...font,
      fontVariantNumeric: tabularFont ? 'tabular-nums' : 'normal',
      whiteSpace: 'nowrap',
    },
    children: textContent,
  },);
}
Time.defaultProps = {
  height: 20,
  width: 140,
  outputType: 'time',
  color: '#999',
  timeFormat: '24h',
  showYear: true,
  showMonth: true,
  showWeekday: true,
  showMinutes: true,
  showSeconds: true,
  monthFormat: 'long',
  alignment: 'center',
};
Time.displayName = 'Time & Date';
addPropertyControls(Time, {
  outputType: {
    title: 'Type',
    type: ControlType.Enum,
    displaySegmentedControl: true,
    options: ['date', 'time',],
    optionTitles: ['Date', 'Time',],
    defaultValue: Time.defaultProps.outputType,
  },
  showWeekday: {
    title: 'Day',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: Time.defaultProps.showWeekday,
    hidden: (props,) => props.outputType !== 'date',
  },
  showMonth: {
    title: 'Month',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: Time.defaultProps.showMonth,
    hidden: (props,) => props.outputType !== 'date',
  },
  monthFormat: {
    title: 'Format',
    type: ControlType.Enum,
    options: ['short', 'long', 'numeric',],
    optionTitles: ['Short', 'Long', 'Numeric',],
    defaultValue: Time.defaultProps.monthFormat,
    hidden: (props,) => props.outputType !== 'date' || !props.showMonth,
  },
  showYear: {
    title: 'Year',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: Time.defaultProps.showYear,
    hidden: (props,) => props.outputType !== 'date',
  },
  timeFormat: {
    title: 'Format',
    type: ControlType.Enum,
    options: ['12h', '24h',],
    optionTitles: ['12h', '24h',],
    displaySegmentedControl: true,
    defaultValue: Time.defaultProps.timeFormat,
    hidden: (props,) => props.outputType !== 'time',
  },
  // showHours: {
  //     title: "Hours",
  //     type: ControlType.Boolean,
  //     enabledTitle: "Show",
  //     disabledTitle: "Hide",
  //     defaultValue: Time.defaultProps.showHours,
  //     hidden: (props) => props.outputType !== "time",
  // },
  showMinutes: {
    title: 'Minutes',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: Time.defaultProps.showMinutes,
    hidden: (props,) => props.outputType !== 'time',
  },
  showSeconds: {
    title: 'Seconds',
    type: ControlType.Boolean,
    enabledTitle: 'Show',
    disabledTitle: 'Hide',
    defaultValue: Time.defaultProps.showSeconds,
    hidden: (props,) => props.outputType !== 'time' || !props.showMinutes,
  },
  font: { type: ControlType.Font, controls: 'extended', },
  tabularFont: { title: 'Tabular', type: ControlType.Boolean, defaultValue: true, },
  color: { type: ControlType.Color, defaultValue: Time.defaultProps.color, },
},);

// https :https://framerusercontent.com/modules/dVfRKhGw53oyBBTWdfYW/jYyJiOB7wVnV7ezgW7Tq/V5lESJQt3.js
var TimeDateFonts = getFonts(Time,);
var cycleOrder = ['YFmbfKAkc', 'Ca3pCwa1m', 'FPp4EquH4',];
var serializationHash = 'framer-X2kpq';
var variantClassNames = { Ca3pCwa1m: 'framer-v-muo7b', FPp4EquH4: 'framer-v-1n0dnja', YFmbfKAkc: 'framer-v-9afcqs', };
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
  return /* @__PURE__ */ _jsx2(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React.Fragment,);
var humanReadableVariantMap = { Desktop: 'YFmbfKAkc', Phone: 'Ca3pCwa1m', Tablet: 'FPp4EquH4', };
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
        : 'YFmbfKAkc',
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
  } = useVariantState({ cycleOrder, defaultVariant: 'YFmbfKAkc', variant, variantClassNames, },);
  const layoutDependency = createLayoutDependency(props, variants,);
  const ref1 = React.useRef(null,);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx2(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx2(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx2(Transition, {
        value: transition1,
        children: /* @__PURE__ */ _jsxs(motion.header, {
          ...restProps,
          ...gestureHandlers,
          className: cx(serializationHash, ...sharedStyleClassNames, 'framer-9afcqs', className, classNames,),
          'data-framer-name': 'Desktop',
          layoutDependency,
          layoutId: 'YFmbfKAkc',
          ref: ref !== null && ref !== void 0 ? ref : ref1,
          style: { background: 'linear-gradient(180deg, rgb(0, 0, 0) 0%, rgb(4, 17, 41) 35.8558448585304%, rgb(0, 0, 0) 100%)', ...style, },
          ...addPropertyOverrides(
            { Ca3pCwa1m: { 'data-framer-name': 'Phone', }, FPp4EquH4: { 'data-framer-name': 'Tablet', }, },
            baseVariant,
            gestureVariant,
          ),
          children: [
            /* @__PURE__ */ _jsx2(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-l01x53-container',
                layoutDependency,
                layoutId: 'bC4zEDBPB-container',
                children: /* @__PURE__ */ _jsx2(Time, {
                  color: 'rgb(153, 153, 153)',
                  font: {},
                  height: '100%',
                  id: 'bC4zEDBPB',
                  layoutId: 'bC4zEDBPB',
                  monthFormat: 'long',
                  outputType: 'time',
                  showMinutes: true,
                  showMonth: true,
                  showSeconds: true,
                  showWeekday: true,
                  showYear: true,
                  tabularFont: true,
                  timeFormat: '24h',
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion.h1, {
                  style: {
                    '--font-selector': 'R0Y7SW50ZXItNzAw',
                    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-size': '50px',
                    '--framer-font-weight': '700',
                    '--framer-letter-spacing': '-2.6px',
                    '--framer-text-alignment': 'center',
                    '--framer-text-color': 'var(--extracted-gdpscs, rgb(227, 225, 225))',
                  },
                  children: 'Know Your Critics',
                },),
              },),
              className: 'framer-eyx347',
              fonts: ['GF;Inter-700',],
              layoutDependency,
              layoutId: 'SAtgw0Oqk',
              style: {
                '--extracted-gdpscs': 'rgb(227, 225, 225)',
                '--framer-link-text-color': 'rgb(0, 153, 255)',
                '--framer-link-text-decoration': 'underline',
                '--framer-paragraph-spacing': '0px',
              },
              verticalAlignment: 'top',
              withExternalLayout: true,
            },),
            /* @__PURE__ */ _jsx2(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx2(React.Fragment, {
                children: /* @__PURE__ */ _jsx2(motion.h2, {
                  style: {
                    '--font-selector': 'R0Y7SW50ZXItNTAw',
                    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-size': '24px',
                    '--framer-font-weight': '500',
                    '--framer-letter-spacing': '-0.5px',
                    '--framer-line-height': '1.5em',
                    '--framer-text-alignment': 'center',
                    '--framer-text-color': 'var(--extracted-1of0zx5, rgb(136, 136, 136))',
                  },
                  children: 'Be two steps ahead\u2014predict how game journalists will rate future anticipated games',
                },),
              },),
              className: 'framer-b5rsry',
              fonts: ['GF;Inter-500',],
              layoutDependency,
              layoutId: 'UAZWF53F_',
              style: { '--extracted-1of0zx5': 'rgb(136, 136, 136)', '--framer-paragraph-spacing': '0px', },
              verticalAlignment: 'top',
              withExternalLayout: true,
              ...addPropertyOverrides(
                {
                  Ca3pCwa1m: {
                    children: /* @__PURE__ */ _jsx2(React.Fragment, {
                      children: /* @__PURE__ */ _jsx2(motion.h2, {
                        style: {
                          '--font-selector': 'R0Y7SW50ZXItNTAw',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '20px',
                          '--framer-font-weight': '500',
                          '--framer-letter-spacing': '-0.5px',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color': 'var(--extracted-1of0zx5, rgb(136, 136, 136))',
                        },
                        children: 'Be two steps ahead\u2014predict how game journalists will rate future anticipated games',
                      },),
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
            /* @__PURE__ */ _jsx2(motion.div, {
              className: 'framer-z5iyz9',
              layoutDependency,
              layoutId: 'hzaMY6kMk',
              children: /* @__PURE__ */ _jsx2(motion.div, {
                className: 'framer-1pgfsv7',
                'data-framer-name': 'Button',
                layoutDependency,
                layoutId: 'KqTtxu0iC',
                style: {
                  backgroundColor: 'rgb(34, 34, 34)',
                  borderBottomLeftRadius: 8,
                  borderBottomRightRadius: 8,
                  borderTopLeftRadius: 8,
                  borderTopRightRadius: 8,
                  boxShadow:
                    '0px 0.7065919983928324px 0.7065919983928324px -0.625px rgba(0, 0, 0, 0.14764), 0px 1.8065619053231785px 1.8065619053231785px -1.25px rgba(0, 0, 0, 0.14398), 0px 3.6217592146567767px 3.6217592146567767px -1.875px rgba(0, 0, 0, 0.13793), 0px 6.8655999097303715px 6.8655999097303715px -2.5px rgba(0, 0, 0, 0.12711), 0px 13.646761411524492px 13.646761411524492px -3.125px rgba(0, 0, 0, 0.10451), 0px 30px 30px -3.75px rgba(0, 0, 0, 0.05)',
                },
                children: /* @__PURE__ */ _jsx2(RichText, {
                  __fromCanvasComponent: true,
                  children: /* @__PURE__ */ _jsx2(React.Fragment, {
                    children: /* @__PURE__ */ _jsx2(motion.p, {
                      style: {
                        '--font-selector': 'R0Y7SW50ZXItNzAw',
                        '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                        '--framer-font-size': '14px',
                        '--framer-font-weight': '700',
                        '--framer-text-alignment': 'center',
                        '--framer-text-color': 'var(--extracted-r6o4lv, rgb(255, 255, 255))',
                      },
                      children: 'Get Started',
                    },),
                  },),
                  className: 'framer-1xmhrq0',
                  fonts: ['GF;Inter-700',],
                  layoutDependency,
                  layoutId: 'UGDNAQL7J',
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
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-X2kpq.framer-1i9vt0l, .framer-X2kpq .framer-1i9vt0l { display: block; }',
  '.framer-X2kpq.framer-9afcqs { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: 600px; justify-content: center; overflow: hidden; padding: 40px; position: relative; width: 1200px; }',
  '.framer-X2kpq .framer-l01x53-container { flex: none; height: auto; left: 32px; position: absolute; top: 34px; width: auto; z-index: 1; }',
  '.framer-X2kpq .framer-eyx347 { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }',
  '.framer-X2kpq .framer-b5rsry { flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre-wrap; width: 390px; word-break: break-word; word-wrap: break-word; }',
  '.framer-X2kpq .framer-z5iyz9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }',
  '.framer-X2kpq .framer-1pgfsv7 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: visible; padding: 15px; position: relative; width: min-content; }',
  '.framer-X2kpq .framer-1xmhrq0 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-X2kpq.framer-9afcqs, .framer-X2kpq .framer-z5iyz9, .framer-X2kpq .framer-1pgfsv7 { gap: 0px; } .framer-X2kpq.framer-9afcqs > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-X2kpq.framer-9afcqs > :first-child { margin-top: 0px; } .framer-X2kpq.framer-9afcqs > :last-child { margin-bottom: 0px; } .framer-X2kpq .framer-z5iyz9 > * { margin: 0px; margin-left: calc(15px / 2); margin-right: calc(15px / 2); } .framer-X2kpq .framer-z5iyz9 > :first-child, .framer-X2kpq .framer-1pgfsv7 > :first-child { margin-left: 0px; } .framer-X2kpq .framer-z5iyz9 > :last-child, .framer-X2kpq .framer-1pgfsv7 > :last-child { margin-right: 0px; } .framer-X2kpq .framer-1pgfsv7 > * { margin: 0px; margin-left: calc(10px / 2); margin-right: calc(10px / 2); } }',
  '.framer-X2kpq.framer-v-muo7b.framer-9afcqs { padding: 60px; width: 390px; }',
  '.framer-X2kpq.framer-v-muo7b .framer-l01x53-container { left: 310px; top: 30px; }',
  '.framer-X2kpq.framer-v-1n0dnja.framer-9afcqs { width: 810px; }',
];
var FramerV5lESJQt3 = withCSS(Component, css, 'framer-X2kpq',);
var stdin_default = FramerV5lESJQt3;
FramerV5lESJQt3.displayName = 'hero';
FramerV5lESJQt3.defaultProps = { height: 600, width: 1200, };
addPropertyControls2(FramerV5lESJQt3, {
  variant: {
    options: ['YFmbfKAkc', 'Ca3pCwa1m', 'FPp4EquH4',],
    optionTitles: ['Desktop', 'Phone', 'Tablet',],
    title: 'Variant',
    type: ControlType2.Enum,
  },
},);
addFonts(FramerV5lESJQt3, [{
  explicitInter: true,
  fonts: [{
    family: 'Inter',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuFuYMZ1rib2Bg-4.woff2',
    weight: '700',
  }, {
    family: 'Inter',
    source: 'google',
    style: 'normal',
    url: 'https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuI6fMZ1rib2Bg-4.woff2',
    weight: '500',
  },],
}, ...TimeDateFonts,], { supportsExplicitInterCodegen: true, },);

// virtual:hero
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var hero_default = stdin_default;
export { hero_default as default, };
