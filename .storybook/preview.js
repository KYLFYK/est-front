import '../styles/globals.css'
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  // nextRouter: {  // for storybook ?
  //   Provider: RouterContext.Provider,
  // },
}


const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
    />
  ),
});