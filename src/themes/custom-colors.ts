export const customColors = [
  {
    dark: '#5291e3',
    light: '#2065D1',
    name: 'blue',
  },
  {
    dark: '#e14c07',
    light: '#FB5205',
    name: 'orange',
  },
  {
    dark: '#32BBCA',
    light: '#008aa8',
    name: 'teal',
  },
  {
    dark: '#D5584C',
    light: '#BA1B1B',
    name: 'red',
  },
  {
    dark: '#B985F4',
    light: '#7635dc',
    name: 'purple',
  },
  {
    dark: '#3FBA78',
    light: '#118D57',
    name: 'green',
  },
]

export type nombreColorProps =
  | 'blue'
  | 'orange'
  | 'teal'
  | 'red'
  | 'purple'
  | 'green'
export const obtenerColorTheme = (name: nombreColorProps) => {
  const color = customColors.find((color) => color.name === name)
  return color
    ? { dark: color.dark, light: color.light }
    : { dark: '#5291e3', light: '#2065D1' }
}
