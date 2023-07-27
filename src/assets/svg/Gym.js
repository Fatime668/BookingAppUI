import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="evenodd"
    strokeLinejoin="round"
    strokeMiterlimit={2}
    clipRule="evenodd"
    viewBox="0 0 32 32"
    width={24}
    height={24}
    fill={"#23d2ed"}
    {...props}
  >
    <Path d="M30 16a.57.57 0 0 0-.569-.569H2.569a.57.57 0 0 0 0 1.138h26.862A.57.57 0 0 0 30 16Z" />
    <Path
      fill="#23d2ed"
      d="M27.385 12.015a.57.57 0 0 0-.569-.569h-.001a.57.57 0 0 0-.569.569v7.97a.57.57 0 0 0 .569.569h.001a.57.57 0 0 0 .569-.569v-7.97zm-19.482 0a.57.57 0 0 0-1.138 0v7.97a.569.569 0 1 0 1.138 0v-7.97z"
    />
    <Path
      fill="#23d2ed"
      d="M26.31 12.015a.57.57 0 0 0-.569-.569h-.001a.57.57 0 0 0-.569.569v7.97a.57.57 0 0 0 .569.569h.001a.57.57 0 0 0 .569-.569v-7.97zm-19.481 0a.57.57 0 0 0-.569-.569h-.001a.57.57 0 0 0-.569.569v7.97a.57.57 0 0 0 .569.569h.001a.57.57 0 0 0 .569-.569v-7.97z"
    />
    <Path
      fill="#23d2ed"
      d="M25.235 12.015a.569.569 0 1 0-1.138 0v7.97a.57.57 0 0 0 1.138 0v-7.97zm-19.481 0a.57.57 0 0 0-.569-.569h-.001a.57.57 0 0 0-.569.569v7.97a.57.57 0 0 0 .569.569h.001a.57.57 0 0 0 .569-.569v-7.97z"
    />
  </Svg>
)
export default SvgComponent
