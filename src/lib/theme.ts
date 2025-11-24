import { createSystem, defaultConfig } from '@chakra-ui/react'

export const system = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        primary: {
          DEFAULT: { value: '#F2D5B5' },
          light: { value: 'rgba(242, 213, 181, 0.3)' },
        },
        secondary: {
          DEFAULT: { value: '#A9D6E5' },
          light: { value: 'rgba(169, 214, 229, 0.3)' },
        },
        tertiary: {
          DEFAULT: { value: '#F7BFC2' },
          light: { value: 'rgba(247, 191, 194, 0.3)' },
        },
        text: {
          DEFAULT: { value: '#465569' },
          muted: { value: '#7E8896' },
        },
      },
    },
  },
})
