;(function (global, factory) {
  if (typeof exports === 'object' && typeof module !== 'undefined') {
    // CommonJS 환경 (예: Node.js)
    module.exports = factory()
    // eslint-disable-next-line no-undef
  } else if (typeof define === 'function' && define.amd) {
    // AMD 환경 (예: RequireJS)
    // eslint-disable-next-line no-undef
    define(factory)
  } else if (typeof globalThis !== 'undefined') {
    // ESM 환경 (예: 최신 브라우저 또는 Node.js)
    // eslint-disable-next-line no-undef
    globalThis.myModule = factory()
  } else {
    // 전역 객체에 모듈을 할당 (예: 브라우저 <script> 태그를 사용하는 경우)
    global.myModule = factory()
  }
})(this, function () {
  // 컬러 정의
  const colors = {
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
      950: '#090E1E',
    },
    content: {
      primary: '#111827',
      secondary: '#4B5563',
      tertiary: '#9CA3AF',
      disabled: '#D1D5DB',
      basic: '#FFFFFF',
    },
    brand: {
      primary: '#0062FF',
      secondary: '#0FA4B1',
      leafGreen: '#BED730',
      sunsetPink: '#EE1F60',
    },
    background: {
      primary: '#FFFFFF',
      secondary: '#F9FAFB',
      tertiary: '#F5F6FA',
    },
    border: {
      primary: '#D1D5DB',
      secondary: '#E5E7EB',
      tertiary: '#F3F4F6',
      focus: '#0062FF',
    },
    data: {
      red: '#F26040',
      yellow: '#F1A200',
      green: '#36B37E',
      cyan: '#00B8D9',
      purple: '#6554C0',
    },
    semantic: {
      positive: '#17AB24',
      negitave: '#ED1414',
      notice: '#FD8F03',
      informative: '#007CFF',
    },
    inverse: {
      content: {
        primary: '#e5e5e5',
        secondary: '#9CA3AF',
        tertiary: '#6B7280',
        disabled: '#4B5563',
        basic: '#000000',
      },
      brand: {
        primary: '#4880EE',
        secondary: '#16ABB8',
        leafGreen: '#BED730',
        sunsetPink: '#EE1F60',
      },
      background: {
        primary: '#111827',
        secondary: '#090E1E',
        tertiary: '#1F2738',
      },
      border: {
        primary: '#4B5563',
        secondary: '#242D3C',
        tertiary: '#1F2738',
        focus: '#4880EE',
      },
    },
  }

  return colors
})
