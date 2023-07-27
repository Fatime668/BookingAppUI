import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="white"
    {...props}
  >
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12Zm10.207 4.207 7-7-1.414-1.414-6.293 6.293-3.293-3.293-1.414 1.414 4 4a1 1 0 0 0 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default SvgComponent
