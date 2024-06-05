import { clsx, ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

const customMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [
        'text-display1',
        'text-display2',
        'text-display3',
        'text-display4',
        'text-headline1',
        'text-headline2',
        'text-label1',
        'text-label2',
        'text-label3',
        'text-label4',
        'text-body1',
        'text-body2',
        'text-body3',
        'text-body4',
        'text-body5',
        'text-body6',
      ],
    },
  },
})

export function cx(...inputs: ClassValue[]) {
  return customMerge(clsx(inputs))
}
