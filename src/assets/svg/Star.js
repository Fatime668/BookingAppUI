import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        stroke="#ffbb0f"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.557 6.891a.333.333 0 0 1 .187-.576l4.002-.474a.333.333 0 0 0 .264-.192l1.688-3.66a.333.333 0 0 1 .605 0l1.689 3.66a.333.333 0 0 0 .263.192l4.002.474a.333.333 0 0 1 .187.576l-2.959 2.737a.333.333 0 0 0-.1.31l.785 3.953a.334.334 0 0 1-.49.356l-3.517-1.97a.333.333 0 0 0-.325.001l-3.517 1.968a.334.334 0 0 1-.49-.355l.785-3.953a.333.333 0 0 0-.1-.31L1.556 6.89Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h16v16H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SvgComponent
