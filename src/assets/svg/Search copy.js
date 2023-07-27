import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    stroke="#707071"
    strokeWidth={1}
    fill="none"
    className="w-6 h-6"
    viewBox="0 0 24 24"
    width={24}
    height={24}
    {...props}
  >
    <Path
     strokeLinecap="round"
     strokeLinejoin="round"
      strokeWidth={1}
      d="m15 15 6 6m-11-4a7 7 0 1 1 0-14 7 7 0 0 1 0 14Z"
    />
  </Svg>
)
export default SvgComponent
