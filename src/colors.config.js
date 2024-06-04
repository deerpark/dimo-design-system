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
      50: 'hsla(var(--awds-color-gray-50))',
      100: 'hsla(var(--awds-color-gray-100))',
      200: 'hsla(var(--awds-color-gray-200))',
      300: 'hsla(var(--awds-color-gray-300))',
      400: 'hsla(var(--awds-color-gray-400))',
      500: 'hsla(var(--awds-color-gray-500))',
      600: 'hsla(var(--awds-color-gray-600))',
      700: 'hsla(var(--awds-color-gray-700))',
      800: 'hsla(var(--awds-color-gray-800))',
      900: 'hsla(var(--awds-color-gray-900))',
      950: 'hsla(var(--awds-color-gray-950))',
    },
    content: {
      primary: 'hsla(var(--awds-color-content-primary))',
      secondary: 'hsla(var(--awds-color-content-secondary))',
      tertiary: 'hsla(var(--awds-color-content-tertiary))',
      disabled: 'hsla(var(--awds-color-content-disabled))',
      basic: 'hsla(var(--awds-color-content-basic))',
      label: 'hsla(var(--awds-color-content-label))',
    },
    background: {
      primary: 'hsla(var(--awds-color-background-primary))',
      secondary: 'hsla(var(--awds-color-background-secondary))',
      tertiary: 'hsla(var(--awds-color-background-tertiary))',
      form: 'hsla(var(--awds-color-background-form))',
    },
    border: {
      primary: 'hsla(var(--awds-color-border-primary))',
      secondary: 'hsla(var(--awds-color-border-secondary))',
      tertiary: 'hsla(var(--awds-color-border-tertiary))',
    },
    brand: {
      primary: 'hsla(var(--awds-color-brand-primary))',
      'primary-hovered': 'hsla(var(--awds-color-brand-primary-hovered))',
      'primary-pressed': 'hsla(var(--awds-color-brand-primary-pressed))',
      'primary-soft': 'hsla(var(--awds-color-brand-primary-soft))',
      'primary-soft-hovered':
        'hsla(var(--awds-color-brand-primary-soft-hovered))',
      'primary-soft-pressed':
        'hsla(var(--awds-color-brand-primary-soft-pressed))',
      dimo: 'hsla(var(--awds-color-brand-dimo))',
      'dimo-hovered': 'hsla(var(--awds-color-brand-dimo-hovered))',
      'dimo-pressed': 'hsla(var(--awds-color-brand-dimo-pressed))',
      'dimo-soft': 'hsla(var(--awds-color-brand-dimo-soft))',
      'dimo-soft-hovered': 'hsla(var(--awds-color-brand-dimo-soft-hovered))',
      'dimo-soft-pressed': 'hsla(var(--awds-color-brand-dimo-soft-pressed))',
      coni: 'hsla(var(--awds-color-brand-coni))',
      'coni-hovered': 'hsla(var(--awds-color-brand-coni-hovered))',
      'coni-pressed': 'hsla(var(--awds-color-brand-coni-pressed))',
      'coni-soft': 'hsla(var(--awds-color-brand-coni-soft))',
      'coni-soft-hovered': 'hsla(var(--awds-color-brand-coni-soft-hovered))',
      'coni-soft-pressed': 'hsla(var(--awds-color-brand-coni-soft-pressed))',
      voci: 'hsla(var(--awds-color-brand-voci))',
      'voci-hovered': 'hsla(var(--awds-color-brand-voci-hovered))',
      'voci-pressed': 'hsla(var(--awds-color-brand-voci-pressed))',
      'voci-soft': 'hsla(var(--awds-color-brand-voci-soft))',
      'voci-soft-hovered': 'hsla(var(--awds-color-brand-voci-soft-hovered))',
      'voci-soft-pressed': 'hsla(var(--awds-color-brand-voci-soft-pressed))',
    },
    data: {
      red: 'hsla(var(--awds-color-data-red))',
      yellow: 'hsla(var(--awds-color-data-yellow))',
      green: 'hsla(var(--awds-color-data-green))',
      cyan: 'hsla(var(--awds-color-data-cyan))',
      purple: 'hsla(var(--awds-color-data-purple))',
      gold: 'hsla(var(--awds-color-data-gold))',
      pink: 'hsla(var(--awds-color-data-pink))',
      mint: 'hsla(var(--awds-color-data-mint))',
    },
    semantic: {
      information: 'hsla(var(--awds-color-semantic-information))',
      notice: 'hsla(var(--awds-color-semantic-notice))',
      positive: 'hsla(var(--awds-color-semantic-positive))',
      negative: 'hsla(var(--awds-color-semantic-negative))',
    },
    gsshop: {
      leafgreen: 'hsla(var(--awds-color-gsshop-leafgreen))',
      sunsetpink: 'hsla(var(--awds-color-gsshop-sunsetpink))',
      aquablue: 'hsla(var(--awds-color-gsshop-aquablue))',
      earthbrown: 'hsla(var(--awds-color-gsshop-earthbrown))',
    },
  }

  return colors
})
