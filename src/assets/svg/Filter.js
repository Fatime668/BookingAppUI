import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    stroke="#707071"
    strokeWidth={1}
    fill="none"
    className="w-6 h-6"
    width={24}
    height={24}
    {...props}
  >
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
       strokeWidth={1}
      d="M4 10h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2H22.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2zm13-5a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm27 18h-7.09a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2h21.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zm-13 5a4 4 0 1 1 4-4 4 4 0 0 1-4 4zm13 10H22.91a6 6 0 0 0-11.82 0H4a1 1 0 0 0 0 2h7.09a6 6 0 0 0 11.82 0H44a1 1 0 0 0 0-2zm-27 5a4 4 0 1 1 4-4 4 4 0 0 1-4 4z"
      data-name="Layer 15"
    />
  </Svg>
)
export default SvgComponent
