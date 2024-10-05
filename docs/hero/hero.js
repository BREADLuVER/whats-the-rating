// @ts-nocheck
/* eslint-disable */
'use client';

// https :https://framerusercontent.com/modules/dVfRKhGw53oyBBTWdfYW/qD3oRdDAL5geCTjNFS26/V5lESJQt3.js
import { jsx as _jsx3, jsxs as _jsxs, } from 'react/jsx-runtime';
import {
  addFonts,
  addPropertyControls as addPropertyControls3,
  ComponentViewportProvider,
  ControlType as ControlType6,
  cx,
  getFonts,
  RichText,
  useComponentViewport,
  useLocaleInfo,
  useVariantState,
  withCSS,
} from 'unframer';
import { LayoutGroup, motion, MotionConfigContext, } from 'unframer';
import * as React3 from 'react';

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

// https :https://framerusercontent.com/modules/o1PI5S8YtkA5bP5g4dFz/Xr8CO3Ul8Gb7lVfgMKTh/Embed.js
import { jsx as _jsx2, } from 'react/jsx-runtime';
import { useEffect as useEffect8, useRef as useRef3, useState as useState4, } from 'react';
import { addPropertyControls as addPropertyControls2, ControlType as ControlType5, } from 'unframer';

// https :https://framerusercontent.com/modules/VTUDdizacRHpwbkOamr7/AykinQJbgwl92LvMGZwu/constants.js
import { ControlType as ControlType2, } from 'unframer';
var containerStyles = {
  position: 'relative',
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};
var emptyStateStyle = {
  ...containerStyles,
  borderRadius: 6,
  background: 'rgba(136, 85, 255, 0.3)',
  color: '#85F',
  border: '1px dashed #85F',
  flexDirection: 'column',
};
var defaultEvents = {
  onClick: {
    type: ControlType2.EventHandler,
  },
  onMouseEnter: {
    type: ControlType2.EventHandler,
  },
  onMouseLeave: {
    type: ControlType2.EventHandler,
  },
};
var fontSizeOptions = {
  type: ControlType2.Number,
  title: 'Font Size',
  min: 2,
  max: 200,
  step: 1,
  displayStepper: true,
};
var fontControls = {
  font: {
    type: ControlType2.Boolean,
    title: 'Font',
    defaultValue: false,
    disabledTitle: 'Default',
    enabledTitle: 'Custom',
  },
  fontFamily: {
    type: ControlType2.String,
    title: 'Family',
    placeholder: 'Inter',
    hidden: ({ font, },) => !font,
  },
  fontWeight: {
    type: ControlType2.Enum,
    title: 'Weight',
    options: [
      100,
      200,
      300,
      400,
      500,
      600,
      700,
      800,
      900,
    ],
    optionTitles: [
      'Thin',
      'Extra-light',
      'Light',
      'Regular',
      'Medium',
      'Semi-bold',
      'Bold',
      'Extra-bold',
      'Black',
    ],
    hidden: ({ font, },) => !font,
  },
};

// https :https://framerusercontent.com/modules/D4TWeLfcxT6Tysr2BlYg/iZjmqdxVx1EOiM3k1FaW/useOnNavigationTargetChange.js
import { useIsInCurrentNavigationTarget, } from 'unframer';
import { useEffect as useEffect2, } from 'react';

// https :https://framerusercontent.com/modules/ExNgrA7EJTKUPpH6vIlN/eiOrSJ2Ab5M9jPCvVwUz/useConstant.js
import { useRef, } from 'react';

// https :https://framerusercontent.com/modules/D2Lz5CmnNVPZFFiZXalt/QaCzPbriZBfXWZIIycFI/colorFromToken.js
import { Color, } from 'unframer';

// https :https://framerusercontent.com/modules/3mKFSGQqKHV82uOV1eBc/5fbRLvOpxZC0JOXugvwm/isMotionValue.js
import { MotionValue, } from 'unframer';

// https :https://framerusercontent.com/modules/xDiQsqBGXzmMsv7AlEVy/uhunpMiNsbXxzjlXsg1y/useUniqueClassName.js
import * as React from 'react';

// https :https://framerusercontent.com/modules/ETACN5BJyFTSo0VVDJfu/NHRqowOiXkF9UwOzczF7/variantUtils.js
import { ControlType as ControlType3, } from 'unframer';

// https :https://framerusercontent.com/modules/eMBrwoqQK7h6mEeGQUH8/GuplvPJVjmxpk9zqOTcb/isBrowser.js
import { useMemo, } from 'react';

// https :https://framerusercontent.com/modules/v9AWX2URmiYsHf7GbctE/XxKAZ9KlhWqf5x1JMyyF/useOnChange.js
import { useEffect as useEffect4, } from 'react';

// https :https://framerusercontent.com/modules/kNDwabfjDEb3vUxkQlZS/fSIr3AOAYbGlfSPgXpYu/useAutoMotionValue.js
import { useCallback as useCallback2, useEffect as useEffect5, useRef as useRef2, } from 'react';
import { animate, motionValue, RenderTarget as RenderTarget2, } from 'unframer';

// https :https://framerusercontent.com/modules/cuQH4dmpDnV8YK1mSgQX/KqRXqunFjE6ufhpc7ZRu/useFontControls.js
import { fontStore, } from 'unframer';
import { useEffect as useEffect6, } from 'react';

// https :https://framerusercontent.com/modules/afBE9Yx1W6bY5q32qPxe/m3q7puE2tbo1S2C0s0CT/useRenderTarget.js
import { useMemo as useMemo2, } from 'react';
import { RenderTarget as RenderTarget3, } from 'unframer';
function useIsOnCanvas() {
  const onCanvas = useMemo2(
    () => RenderTarget3.current() === RenderTarget3.canvas,
    [],
  );
  return onCanvas;
}

// https :https://framerusercontent.com/modules/zGkoP8tPDCkoBzMdt5uq/0zFSjxIYliHxrQQnryFX/useControlledState.js
import * as React2 from 'react';

// https :https://framerusercontent.com/modules/5SM58HxZHxjjv7aLMOgQ/WXz9i6mVki0bBCrKdqB3/propUtils.js
import { useMemo as useMemo3, } from 'react';
import { ControlType as ControlType4, } from 'unframer';
var borderRadiusControl = {
  borderRadius: {
    title: 'Radius',
    type: ControlType4.FusedNumber,
    toggleKey: 'isMixedBorderRadius',
    toggleTitles: [
      'Radius',
      'Radius per corner',
    ],
    valueKeys: [
      'topLeftRadius',
      'topRightRadius',
      'bottomRightRadius',
      'bottomLeftRadius',
    ],
    valueLabels: [
      'TL',
      'TR',
      'BR',
      'BL',
    ],
    min: 0,
  },
};
var paddingControl = {
  padding: {
    type: ControlType4.FusedNumber,
    toggleKey: 'paddingPerSide',
    toggleTitles: [
      'Padding',
      'Padding per side',
    ],
    valueKeys: [
      'paddingTop',
      'paddingRight',
      'paddingBottom',
      'paddingLeft',
    ],
    valueLabels: [
      'T',
      'R',
      'B',
      'L',
    ],
    min: 0,
    title: 'Padding',
  },
};

// https :https://framerusercontent.com/modules/o1PI5S8YtkA5bP5g4dFz/Xr8CO3Ul8Gb7lVfgMKTh/Embed.js
function Embed({ type, url, html, style = {}, },) {
  if (type === 'url' && url) {
    return /* @__PURE__ */ _jsx2(EmbedUrl, { url, style, },);
  }
  if (type === 'html' && html) {
    return /* @__PURE__ */ _jsx2(EmbedHtml, { html, style, },);
  }
  return /* @__PURE__ */ _jsx2(Instructions, { style, },);
}
addPropertyControls2(Embed, {
  type: {
    type: ControlType5.Enum,
    defaultValue: 'url',
    displaySegmentedControl: true,
    options: ['url', 'html',],
    optionTitles: ['URL', 'HTML',],
  },
  url: {
    title: 'URL',
    type: ControlType5.String,
    description: 'Some websites don\u2019t support embedding.',
    hidden(props,) {
      return props.type !== 'url';
    },
  },
  html: {
    title: 'HTML',
    type: ControlType5.String,
    displayTextArea: true,
    hidden(props,) {
      return props.type !== 'html';
    },
  },
},);
function Instructions({ style, },) {
  return /* @__PURE__ */ _jsx2('div', {
    style: { minHeight: getMinHeight(style,), ...emptyStateStyle, overflow: 'hidden', ...style, },
    children: /* @__PURE__ */ _jsx2('div', {
      style: centerTextStyle,
      children: 'To embed a website or widget, add it to the properties\xA0panel.',
    },),
  },);
}
function EmbedUrl({ url, style, },) {
  const hasAutoHeight = !style.height;
  if (!/[a-z]+:\/\//.test(url,)) {
    url = 'https://' + url;
  }
  const onCanvas = useIsOnCanvas();
  const [state, setState,] = useState4(onCanvas ? void 0 : false,);
  useEffect8(() => {
    if (!onCanvas) return;
    let isLastEffect = true;
    setState(void 0,);
    async function load() {
      const response = await fetch('https://api.framer.com/functions/check-iframe-url?url=' + encodeURIComponent(url,),);
      if (response.status == 200) {
        const { isBlocked, } = await response.json();
        if (isLastEffect) {
          setState(isBlocked,);
        }
      } else {
        const message = await response.text();
        console.error(message,);
        const error = new Error('This site can\u2019t be reached.',);
        setState(error,);
      }
    }
    load().catch((error,) => {
      console.error(error,);
      setState(error,);
    },);
    return () => {
      isLastEffect = false;
    };
  }, [url,],);
  if (onCanvas && hasAutoHeight) {
    return /* @__PURE__ */ _jsx2(ErrorMessage, { message: 'URL embeds do not support auto height.', style, },);
  }
  if (!url.startsWith('https://',)) {
    return /* @__PURE__ */ _jsx2(ErrorMessage, { message: 'Unsupported protocol.', style, },);
  }
  if (state === void 0) {
    return /* @__PURE__ */ _jsx2(LoadingIndicator, {},);
  }
  if (state instanceof Error) {
    return /* @__PURE__ */ _jsx2(ErrorMessage, { message: state.message, style, },);
  }
  if (state === true) {
    const message = `Can\u2019t embed ${url} due to its content security policy.`;
    return /* @__PURE__ */ _jsx2(ErrorMessage, { message, style, },);
  }
  return /* @__PURE__ */ _jsx2('iframe', {
    src: url,
    style: { ...iframeStyle, ...style, },
    loading: 'lazy',
    // @ts-ignore
    fetchPriority: onCanvas ? 'low' : 'auto',
    referrerPolicy: 'no-referrer',
    sandbox: getSandbox(onCanvas,),
  },);
}
var iframeStyle = { width: '100%', height: '100%', border: 'none', };
function getSandbox(onCanvas,) {
  const result = ['allow-same-origin', 'allow-scripts',];
  if (!onCanvas) {
    result.push(
      'allow-downloads',
      'allow-forms',
      'allow-modals',
      'allow-orientation-lock',
      'allow-pointer-lock',
      'allow-popups',
      'allow-popups-to-escape-sandbox',
      'allow-presentation',
      'allow-storage-access-by-user-activation',
      'allow-top-navigation-by-user-activation',
    );
  }
  return result.join(' ',);
}
function EmbedHtml({ html, ...props },) {
  const hasScript = html.includes('<\/script>',);
  if (hasScript) {
    const hasSplineViewer = html.includes('</spline-viewer>',);
    const hasComment = html.includes('<!-- framer-direct-embed -->',);
    if (hasSplineViewer || hasComment) {
      return /* @__PURE__ */ _jsx2(EmbedHtmlWithScripts, { html, ...props, },);
    }
    return /* @__PURE__ */ _jsx2(EmbedHtmlInsideIframe, { html, ...props, },);
  }
  return /* @__PURE__ */ _jsx2(EmbedHtmlWithoutScripts, { html, ...props, },);
}
function EmbedHtmlInsideIframe({ html, style, },) {
  const ref = useRef3();
  const [iframeHeight, setIframeHeight,] = useState4(0,);
  useEffect8(() => {
    var _ref_current;
    const iframeWindow = (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.contentWindow;
    function handleMessage(event,) {
      if (event.source !== iframeWindow) return;
      const data = event.data;
      if (typeof data !== 'object' || data === null) return;
      const height = data.embedHeight;
      if (typeof height !== 'number') return;
      setIframeHeight(height,);
    }
    window.addEventListener('message', handleMessage,);
    iframeWindow === null || iframeWindow === void 0 ? void 0 : iframeWindow.postMessage('getEmbedHeight', '*',);
    return () => {
      window.removeEventListener('message', handleMessage,);
    };
  }, [],);
  const srcDoc = `
<html>
    <head>
        <style>
            html, body {
                margin: 0;
                padding: 0;
            }

            body {
                display: flex;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
            }

            :root {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }

            * {
                box-sizing: border-box;
                -webkit-font-smoothing: inherit;
            }

            h1, h2, h3, h4, h5, h6, p, figure {
                margin: 0;
            }

            body, input, textarea, select, button {
                font-size: 12px;
                font-family: sans-serif;
            }
        </style>
    </head>
    <body>
        ${html}
        <script type="module">
            let height = 0

            function sendEmbedHeight() {
                window.parent.postMessage({
                    embedHeight: height
                }, "*")
            }

            const observer = new ResizeObserver((entries) => {
                if (entries.length !== 1) return
                const entry = entries[0]
                if (entry.target !== document.body) return

                height = entry.contentRect.height
                sendEmbedHeight()
            })

            observer.observe(document.body)

            window.addEventListener("message", (event) => {
                if (event.source !== window.parent) return
                if (event.data !== "getEmbedHeight") return
                sendEmbedHeight()
            })
        <\/script>
    <body>
</html>
`;
  const currentStyle = { ...iframeStyle, ...style, };
  const hasAutoHeight = !style.height;
  if (hasAutoHeight) {
    currentStyle.height = iframeHeight + 'px';
  }
  return /* @__PURE__ */ _jsx2('iframe', { ref, style: currentStyle, srcDoc, },);
}
function EmbedHtmlWithScripts({ html, style, },) {
  const ref = useRef3();
  useEffect8(() => {
    const div = ref.current;
    if (!div) return;
    div.innerHTML = html;
    executeScripts(div,);
    return () => {
      div.innerHTML = '';
    };
  }, [html,],);
  return /* @__PURE__ */ _jsx2('div', { ref, style: { ...htmlStyle, ...style, }, },);
}
function EmbedHtmlWithoutScripts({ html, style, },) {
  return /* @__PURE__ */ _jsx2('div', { style: { ...htmlStyle, ...style, }, dangerouslySetInnerHTML: { __html: html, }, },);
}
var htmlStyle = {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
};
function executeScripts(node,) {
  if (node instanceof Element && node.tagName === 'SCRIPT') {
    const script = document.createElement('script',);
    script.text = node.innerHTML;
    for (const { name, value, } of node.attributes) {
      script.setAttribute(name, value,);
    }
    node.parentElement.replaceChild(script, node,);
  } else {
    for (const child of node.childNodes) {
      executeScripts(child,);
    }
  }
}
function LoadingIndicator() {
  return /* @__PURE__ */ _jsx2('div', {
    className: 'framerInternalUI-componentPlaceholder',
    style: { ...containerStyles, overflow: 'hidden', },
    children: /* @__PURE__ */ _jsx2('div', { style: centerTextStyle, children: 'Loading\u2026', },),
  },);
}
function ErrorMessage({ message, style, },) {
  return /* @__PURE__ */ _jsx2('div', {
    className: 'framerInternalUI-errorPlaceholder',
    style: { minHeight: getMinHeight(style,), ...containerStyles, overflow: 'hidden', ...style, },
    children: /* @__PURE__ */ _jsx2('div', { style: centerTextStyle, children: message, },),
  },);
}
var centerTextStyle = { textAlign: 'center', minWidth: 140, };
function getMinHeight(style,) {
  const hasAutoHeight = !style.height;
  if (hasAutoHeight) return 200;
}

// https :https://framerusercontent.com/modules/dVfRKhGw53oyBBTWdfYW/qD3oRdDAL5geCTjNFS26/V5lESJQt3.js
var EmbedFonts = getFonts(Embed,);
var TimeDateFonts = getFonts(Time,);
var cycleOrder = ['YFmbfKAkc', 'Ca3pCwa1m', 'FPp4EquH4',];
var serializationHash = 'framer-y2el9';
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
  const config = React3.useContext(MotionConfigContext,);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React3.useMemo(() => ({ ...config, transition, }), [JSON.stringify(transition,),],);
  return /* @__PURE__ */ _jsx3(MotionConfigContext.Provider, { value: contextValue, children, },);
};
var Variants = motion(React3.Fragment,);
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
var Component = /* @__PURE__ */ React3.forwardRef(function (props, ref,) {
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
  const ref1 = React3.useRef(null,);
  const defaultLayoutId = React3.useId();
  const sharedStyleClassNames = [];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx3(LayoutGroup, {
    id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId,
    children: /* @__PURE__ */ _jsx3(Variants, {
      animate: variants,
      initial: false,
      children: /* @__PURE__ */ _jsx3(Transition, {
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
            /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion.div, {
                className: 'framer-pbn8s2-container',
                layoutDependency,
                layoutId: 'BqlsfaoeK-container',
                children: /* @__PURE__ */ _jsx3(Embed, {
                  height: '100%',
                  html:
                    '<script type="module" src="https://unpkg.com/@splinetool/viewer@1.9.26/build/spline-viewer.js"><\/script>\n<spline-viewer url="https://prod.spline.design/ZouFgBqL4sDgYnyI/scene.splinecode"></spline-viewer>',
                  id: 'BqlsfaoeK',
                  layoutId: 'BqlsfaoeK',
                  style: { height: '100%', width: '100%', },
                  type: 'html',
                  url: '',
                  width: '100%',
                },),
              },),
            },),
            /* @__PURE__ */ _jsx3(ComponentViewportProvider, {
              children: /* @__PURE__ */ _jsx3(motion.div, {
                className: 'framer-l01x53-container',
                layoutDependency,
                layoutId: 'bC4zEDBPB-container',
                children: /* @__PURE__ */ _jsx3(Time, {
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
            /* @__PURE__ */ _jsx3(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                children: /* @__PURE__ */ _jsx3(motion.h1, {
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
            /* @__PURE__ */ _jsx3(RichText, {
              __fromCanvasComponent: true,
              children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                children: /* @__PURE__ */ _jsxs(motion.h2, {
                  style: {
                    '--font-selector': 'R0Y7SW50ZXItNTAw',
                    '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                    '--framer-font-size': '18px',
                    '--framer-font-weight': '500',
                    '--framer-letter-spacing': '-0.5px',
                    '--framer-line-height': '1.5em',
                    '--framer-text-alignment': 'center',
                    '--framer-text-color': 'var(--extracted-1of0zx5, rgb(136, 136, 136))',
                  },
                  children: [
                    'Be two steps ahead \u2014 predict the ratings game journalists will give to upcoming titles. ',
                    /* @__PURE__ */ _jsx3(motion.br, {},),
                    'Currently only providing data from IGN and PCgamer',
                  ],
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
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsxs(motion.h2, {
                        style: {
                          '--font-selector': 'R0Y7SW50ZXItNTAw',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-size': '13px',
                          '--framer-font-weight': '500',
                          '--framer-letter-spacing': '0px',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color': 'var(--extracted-1of0zx5, rgb(136, 136, 136))',
                        },
                        children: [
                          /* @__PURE__ */ _jsx3(motion.span, {
                            style: { '--framer-font-size': '16px', },
                            children: 'Be two steps ahead \u2014 predict the ratings game journalists will give to upcoming titles. ',
                          },),
                          /* @__PURE__ */ _jsx3(motion.span, {
                            style: { '--framer-font-size': '16px', },
                            children: /* @__PURE__ */ _jsx3(motion.br, {},),
                          },),
                          /* @__PURE__ */ _jsx3(motion.span, {
                            style: { '--framer-font-size': '16px', },
                            children: 'Currently only providing data from IGN and PCgamer',
                          },),
                        ],
                      },),
                    },),
                  },
                  FPp4EquH4: {
                    children: /* @__PURE__ */ _jsx3(React3.Fragment, {
                      children: /* @__PURE__ */ _jsxs(motion.h2, {
                        style: {
                          '--font-selector': 'R0Y7SW50ZXItNTAw',
                          '--framer-font-family': '"Inter", "Inter Placeholder", sans-serif',
                          '--framer-font-weight': '500',
                          '--framer-letter-spacing': '-0.5px',
                          '--framer-line-height': '1.5em',
                          '--framer-text-alignment': 'center',
                          '--framer-text-color': 'var(--extracted-1of0zx5, rgb(136, 136, 136))',
                        },
                        children: [
                          'Be two steps ahead \u2014 predict the ratings game journalists will give to upcoming titles. ',
                          /* @__PURE__ */ _jsx3(motion.br, {},),
                          'Currently only providing data from IGN and PCgamer',
                        ],
                      },),
                    },),
                  },
                },
                baseVariant,
                gestureVariant,
              ),
            },),
          ],
        },),
      },),
    },),
  },);
},);
var css = [
  '@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }',
  '.framer-y2el9.framer-1i9vt0l, .framer-y2el9 .framer-1i9vt0l { display: block; }',
  '.framer-y2el9.framer-9afcqs { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 9px; height: 600px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 1200px; }',
  '.framer-y2el9 .framer-pbn8s2-container { bottom: -80px; flex: none; left: 0px; position: absolute; right: -1px; top: 0px; z-index: 0; }',
  '.framer-y2el9 .framer-l01x53-container { flex: none; height: auto; left: 32px; position: absolute; top: 34px; width: auto; z-index: 1; }',
  '.framer-y2el9 .framer-eyx347 { flex: none; height: auto; max-width: 100%; position: relative; white-space: pre-wrap; width: auto; word-break: break-word; word-wrap: break-word; }',
  '.framer-y2el9 .framer-b5rsry { flex: none; height: auto; max-width: 100%; overflow: visible; position: relative; white-space: pre-wrap; width: 390px; word-break: break-word; word-wrap: break-word; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-y2el9.framer-9afcqs { gap: 0px; } .framer-y2el9.framer-9afcqs > * { margin: 0px; margin-bottom: calc(9px / 2); margin-top: calc(9px / 2); } .framer-y2el9.framer-9afcqs > :first-child { margin-top: 0px; } .framer-y2el9.framer-9afcqs > :last-child { margin-bottom: 0px; } }',
  '.framer-y2el9.framer-v-muo7b.framer-9afcqs { gap: 14px; width: 390px; }',
  '.framer-y2el9.framer-v-muo7b .framer-l01x53-container { left: unset; right: 9px; top: 30px; }',
  '.framer-y2el9.framer-v-muo7b .framer-b5rsry { width: 262px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-y2el9.framer-v-muo7b.framer-9afcqs { gap: 0px; } .framer-y2el9.framer-v-muo7b.framer-9afcqs > * { margin: 0px; margin-bottom: calc(14px / 2); margin-top: calc(14px / 2); } .framer-y2el9.framer-v-muo7b.framer-9afcqs > :first-child { margin-top: 0px; } .framer-y2el9.framer-v-muo7b.framer-9afcqs > :last-child { margin-bottom: 0px; } }',
  '.framer-y2el9.framer-v-1n0dnja.framer-9afcqs { gap: 7px; width: 810px; }',
  '@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-y2el9.framer-v-1n0dnja.framer-9afcqs { gap: 0px; } .framer-y2el9.framer-v-1n0dnja.framer-9afcqs > * { margin: 0px; margin-bottom: calc(7px / 2); margin-top: calc(7px / 2); } .framer-y2el9.framer-v-1n0dnja.framer-9afcqs > :first-child { margin-top: 0px; } .framer-y2el9.framer-v-1n0dnja.framer-9afcqs > :last-child { margin-bottom: 0px; } }',
];
var FramerV5lESJQt3 = withCSS(Component, css, 'framer-y2el9',);
var stdin_default = FramerV5lESJQt3;
FramerV5lESJQt3.displayName = 'hero';
FramerV5lESJQt3.defaultProps = { height: 600, width: 1200, };
addPropertyControls3(FramerV5lESJQt3, {
  variant: {
    options: ['YFmbfKAkc', 'Ca3pCwa1m', 'FPp4EquH4',],
    optionTitles: ['Desktop', 'Phone', 'Tablet',],
    title: 'Variant',
    type: ControlType6.Enum,
  },
},);
addFonts(FramerV5lESJQt3, [
  {
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
  },
  ...EmbedFonts,
  ...TimeDateFonts,
], { supportsExplicitInterCodegen: true, },);

// virtual:hero
import { WithFramerBreakpoints, } from 'unframer';
import { jsx, } from 'react/jsx-runtime';
stdin_default.Responsive = (props,) => {
  return /* @__PURE__ */ jsx(WithFramerBreakpoints, { Component: stdin_default, ...props, },);
};
var hero_default = stdin_default;
export { hero_default as default, };
