import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    txtColor: string,
    bgColor: string,
    accentColor: string
  }
}
