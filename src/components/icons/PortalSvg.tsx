type Props = {
  color?: string
  size?: string
  rotation?: number
}

const PortalSvg = ({ color, size, rotation }: Props) => {
  const rotationStyle = rotation ? `rotate(${rotation}deg)` : undefined
  const caraLondra = '#fff'

  return (
    <svg
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        transform: rotationStyle,
      }}
    >
      <defs>
        <style>
          {
            '.cls-1_message-sent-81{fill:url(#linear-gradient);}.cls-1_message-sent-81,.cls-2_message-sent-81,.cls-3_message-sent-81,.cls-4_message-sent-81,.cls-5_message-sent-81,.cls-6_message-sent-81,.cls-7_message-sent-81,.cls-8_message-sent-81,.cls-9_message-sent-81,.cls-10_message-sent-81,.cls-11_message-sent-81,.cls-12_message-sent-81,.cls-13_message-sent-81,.cls-14_message-sent-81,.cls-15_message-sent-81,.cls-16_message-sent-81,.cls-17_message-sent-81,.cls-18_message-sent-81,.cls-19_message-sent-81,.cls-20_message-sent-81,.cls-21_message-sent-81,.cls-22_message-sent-81,.cls-23_message-sent-81,.cls-24_message-sent-81,.cls-25_message-sent-81{stroke-width:0px;}.cls-2_message-sent-81{fill:url(#linear-gradient-11-message-sent-81);}.cls-3_message-sent-81{fill:url(#linear-gradient-12-message-sent-81);}.cls-4_message-sent-81{fill:url(#linear-gradient-13-message-sent-81);}.cls-5_message-sent-81{fill:url(#linear-gradient-10-message-sent-81);}.cls-6_message-sent-81{fill:url(#linear-gradient-17-message-sent-81);}.cls-7_message-sent-81{fill:url(#linear-gradient-16-message-sent-81);}.cls-8_message-sent-81{fill:url(#linear-gradient-19-message-sent-81);}.cls-9_message-sent-81{fill:url(#linear-gradient-15-message-sent-81);}.cls-10_message-sent-81{fill:url(#linear-gradient-23-message-sent-81);}.cls-11_message-sent-81{fill:url(#linear-gradient-21-message-sent-81);}.cls-12_message-sent-81{fill:url(#linear-gradient-18-message-sent-81);}.cls-13_message-sent-81{fill:url(#linear-gradient-14-message-sent-81);}.cls-14_message-sent-81{fill:url(#linear-gradient-22-message-sent-81);}.cls-15_message-sent-81{fill:url(#linear-gradient-20-message-sent-81);}.cls-16_message-sent-81{fill:url(#linear-gradient-4-message-sent-81);}.cls-17_message-sent-81{fill:url(#linear-gradient-2-message-sent-81);}.cls-18_message-sent-81{fill:url(#linear-gradient-3-message-sent-81);}.cls-19_message-sent-81{fill:url(#linear-gradient-8-message-sent-81);}.cls-20_message-sent-81{fill:url(#linear-gradient-9-message-sent-81);}.cls-21_message-sent-81{fill:url(#linear-gradient-7-message-sent-81);}.cls-22_message-sent-81{fill:url(#linear-gradient-5-message-sent-81);}.cls-23_message-sent-81{fill:url(#linear-gradient-6-message-sent-81);}.cls-24_message-sent-81{isolation:isolate;opacity:.24;}.cls-24_message-sent-81,.cls-25_message-sent-81{fill:#68e1fd;}'
          }
        </style>
        <linearGradient
          id="linear-gradient-message-sent-81"
          x1={-641.94}
          y1={1522.22}
          x2={-686.05}
          y2={1746.26}
          gradientTransform="translate(829.39 1798.53) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.95} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-2-message-sent-81"
          x1={-494.36}
          y1={1613.48}
          x2={-480.86}
          y2={1704.88}
          gradientTransform="translate(849 1803.66) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-3-message-sent-81"
          x1={-489.75}
          y1={1637.97}
          x2={-483.65}
          y2={1724.45}
          gradientTransform="translate(849 1803.66) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#231f20" stopOpacity={0} />
          <stop offset={1} stopColor="#231f20" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-4-message-sent-81"
          x1={-493.2}
          y1={1701.87}
          x2={-502.78}
          y2={1629.61}
          gradientTransform="translate(849 1803.66) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-5-message-sent-81"
          x1={-850.06}
          y1={1526.09}
          x2={-851.22}
          y2={1447.15}
          gradientTransform="translate(848.59 1749) rotate(7.66) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-6-message-sent-81"
          x1={561.75}
          y1={2852.33}
          x2={560.58}
          y2={2773.4}
          gradientTransform="translate(651.41 1538.62) rotate(-40.37) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-7-message-sent-81"
          x1={-1464.31}
          y1={925.78}
          x2={-1465.47}
          y2={846.85}
          gradientTransform="translate(932.9 1661.98) rotate(31.47) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-8-message-sent-81"
          x1={-295.64}
          y1={2907.47}
          x2={-296.8}
          y2={2828.53}
          gradientTransform="translate(837.31 1389.93) rotate(-16.55) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-9-message-sent-81"
          x1={-317.62}
          y1={1783.75}
          x2={-318.38}
          y2={1731.91}
          gradientTransform="translate(801.78 1844.38) rotate(-13.17) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-10-message-sent-81"
          x1={1115.62}
          y1={2118.16}
          x2={1114.86}
          y2={2066.32}
          gradientTransform="translate(542.62 1717.96) rotate(-61.19) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-11-message-sent-81"
          x1={-349.03}
          y1={1805.34}
          x2={-349.77}
          y2={1754.72}
          gradientTransform="translate(801.78 1844.38) rotate(-13.17) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-12-message-sent-81"
          x1={1110.77}
          y1={2133.06}
          x2={1110.03}
          y2={2082.44}
          gradientTransform="translate(542.62 1717.96) rotate(-61.19) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-13-message-sent-81"
          x1={-1358.11}
          y1={1000.98}
          x2={-1358.69}
          y2={961.97}
          gradientTransform="translate(912.92 1698.45) rotate(23.91) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-14-message-sent-81"
          x1={-159.28}
          y1={2126.13}
          x2={-159.86}
          y2={2087.13}
          gradientTransform="translate(782.37 1441.34) rotate(-24.11) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-15-message-sent-81"
          x1={-110.05}
          y1={1894.7}
          x2={-111.09}
          y2={1824.18}
          gradientTransform="translate(813.14 1868.49) rotate(-15.56) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-16-message-sent-81"
          x1={1332.45}
          y1={2390.37}
          x2={1331.41}
          y2={2319.85}
          gradientTransform="translate(548.92 1752.99) rotate(-63.58) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-17-message-sent-81"
          x1={-840.55}
          y1={1519.98}
          x2={-841.81}
          y2={1434.37}
          gradientTransform="translate(862 1713.46) rotate(11.53) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-18-message-sent-81"
          x1={562}
          y1={2967.21}
          x2={560.74}
          y2={2881.6}
          gradientTransform="translate(679.55 1490.1) rotate(-36.5) scale(1 -1)"
          xlinkHref="#linear-gradient-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-19-message-sent-81"
          x1={-535.19}
          y1={1676.92}
          x2={-536.93}
          y2={1597.7}
          gradientTransform="translate(849 1803.66) scale(1 -1)"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fff" stopOpacity={0} />
          <stop offset={0.39} stopColor="#fff" />
        </linearGradient>
        <linearGradient
          id="linear-gradient-20-message-sent-81"
          x1={-711.98}
          y1={1425.04}
          x2={-712.92}
          y2={1507.9}
          xlinkHref="#linear-gradient-3-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-21-message-sent-81"
          x1={-760.46}
          y1={1507.81}
          x2={-732.65}
          y2={1507.81}
          xlinkHref="#linear-gradient-3-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-22-message-sent-81"
          x1={-688.19}
          y1={1528.05}
          x2={-693.24}
          y2={1442.38}
          gradientTransform="translate(829.39 1798.53) scale(1 -1)"
          xlinkHref="#linear-gradient-3-message-sent-81"
        />
        <linearGradient
          id="linear-gradient-23-message-sent-81"
          x1={-760.3}
          y1={1493.15}
          x2={-759.67}
          y2={1482.44}
          xlinkHref="#linear-gradient-3-message-sent-81"
        />
      </defs>
      <g id="background_message-sent-81">
        <path
          className="cls-24_message-sent-81 targetColor"
          d="M490.94,349.41c-.24,2.61-.7,5.2-1.39,7.73-1.55,5.85-3.91,11.45-6.99,16.66-17.84,31.14-52.76,49.14-87.93,56.46-35.17,7.32-71.46,5.75-107.36,7.4-48.4,2.22-96.72,10.38-145.17,7.77-22.97-1.28-45.74-4.97-67.94-11-107.01,0-54.7-163.43-48.55-225.38,2.66-26.69,5.76-54.67,20.99-76.75,18.02-26.16,49.92-39.19,81.14-44.85,31.22-5.66,63.33-5.38,94.41-11.88,50.71-10.64,99.74-39.36,150.87-31.18,50.19,8.02,90.92,55.82,90.89,106.63,0,35.67-16.19,71.14-6.9,106.66,8.08,30.86,37.07,58.18,33.92,91.73Z"
          style={{
            fill: color,
          }}
        />
        <path
          className="cls-24_message-sent-81 targetColor"
          d="M489.59,357.14c-1.55,5.85-3.91,11.45-6.99,16.66-17.84,31.14-52.76,49.14-87.93,56.46-35.17,7.32-71.46,5.75-107.36,7.4-48.43,2.22-96.76,10.38-145.21,7.77-22.97-1.28-45.74-4.97-67.94-11-14.87-4.05-45.61-9.34-54.61-23.14-5.63-8.6-6.55-24.71-6.74-38.28,3.37.53,6.7,1.32,9.64,1.6,9.96.93,20.04,1.03,30.03,1.33,21.15.68,42.31,1.14,63.48,1.36,84.29.89,168.52-1.88,252.68-8.33,40.39-3.11,80.71-7.06,120.94-11.84Z"
          style={{
            fill: color,
          }}
        />
        <path
          className="cls-24_message-sent-81 targetColor"
          d="M103.33,381.97c-7.34,1.31-14.61,3.01-22.03,3.7-4.81.46-10.13.7-13.61,4.05-.83.71-1.38,1.7-1.55,2.78-.19,2.31,2.22,3.93,4.39,4.79,6.32,2.5,13.18,3.21,19.96,3.65,11.03.69,22.1.71,33.17.72h32.95c9.74,0,20.53-.4,27.5-7.18,1.47-1.27,2.47-3,2.83-4.91.39-3.09-1.96-6.01-4.8-7.3-4.91-2.24-12.27-1.78-17.59-2.37-7-.72-14.01-1.14-21.02-1.24-13.47-.16-26.93.95-40.2,3.32Z"
          style={{
            fill: color,
          }}
        />
      </g>
      <g id="sent_mesages_message-sent-81">
        <path
          className="cls-24_message-sent-81 targetColor"
          d="M162.41,140.31c-11.56,2.01-23.19,4.38-33.86,9.26-7.99,3.64-15.27,8.62-22.46,13.65-21.68,15.19-43.84,32.62-52.94,57.48-13.19,36.11,5.4,76.08,41.51,89.26,7.41,2.71,15.23,4.13,23.12,4.22-26.54-21.54-30.59-60.52-9.04-87.06,1.02-1.26,2.09-2.47,3.2-3.64,6.96-7.32,15.62-12.84,24.7-17.27,29.03-14.16,62.24-17.47,94.52-16.21,32.27,1.27,44.61-6.37,76.82-3.7-7.19-17.9,3.64-21.96-6.59-38.33-15.03-24.06-31.25-20.01-56.89-17.77-27.47,2.49-54.92,5.4-82.09,10.12Z"
          style={{
            fill: color,
          }}
        />
        <path
          className="cls-10_message-sent-81"
          d="M157.18,136.25c-11.56,2.01-23.19,4.38-33.86,9.26-7.98,3.64-15.27,8.62-22.45,13.65-21.68,15.2-43.84,32.63-52.93,57.49-13.19,36.11,5.4,76.08,41.51,89.26,7.41,2.7,15.22,4.13,23.11,4.22-26.52-21.55-30.55-60.53-9-87.05,1.01-1.24,2.07-2.45,3.17-3.61,6.95-7.32,15.61-12.84,24.69-17.27,29.03-14.16,62.25-17.47,94.53-16.21,32.27,1.27,51.02,4.76,83.2,7.4-7.19-17.9-2.78-33.09-12.96-49.45-15.03-24.06-31.24-20.01-56.88-17.77-27.51,2.45-54.95,5.36-82.12,10.08Z"
        />
        <polygon
          className="cls-25_message-sent-81 targetColor"
          points="429.6 151.78 309.15 193.44 290.73 153.7 429.6 151.78"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-17_message-sent-81"
          points="429.6 151.78 309.15 193.44 290.73 153.7 429.6 151.78"
        />
        <polygon
          className="cls-18_message-sent-81"
          points="296.87 167.45 401.78 160.48 429.6 151.78 290.73 153.7 296.87 167.45"
        />
        <polygon
          className="cls-25_message-sent-81 targetColor"
          points="266.41 109.71 437.34 153.05 288.65 135.3 266.41 109.71"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-25_message-sent-81 targetColor"
          points="188.97 160.55 288.65 135.3 437.34 153.05 188.97 160.55"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-16_message-sent-81"
          points="266.41 109.71 437.34 153.05 288.65 135.3 266.41 109.71"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={189.02}
          y={168.61}
          width={22.08}
          height={35.83}
          transform="translate(7.51 380.8) rotate(-88.25)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-22_message-sent-81"
          points="217.64 198.1 181.83 197.01 182.5 174.94 219.01 175.76 217.64 198.1"
        />
        <polygon
          className="cls-23_message-sent-81"
          points="182.5 174.94 199.91 193.72 218.44 176.36 182.5 174.94"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={122.02}
          y={144.08}
          width={22.08}
          height={35.83}
          transform="translate(-70.49 212.15) rotate(-64.44)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-21_message-sent-81"
          points="144.46 179.69 112.14 164.23 121.67 144.31 154.73 159.81 144.46 179.69"
        />
        <polygon
          className="cls-19_message-sent-81"
          points="121.67 144.31 130.01 168.52 153.96 160.12 121.67 144.31"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={83.33}
          y={213.75}
          width={23.53}
          height={14.5}
          transform="translate(-67.02 43.23) rotate(-19.08)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-20_message-sent-81"
          points="108.58 224.02 86.34 231.71 81.6 218 104.21 209.99 108.58 224.02"
        />
        <polygon
          className="cls-5_message-sent-81"
          points="81.6 218 96.67 225.46 103.99 210.49 81.6 218"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={47.89}
          y={199.08}
          width={22.98}
          height={14.16}
          transform="translate(-64.13 30.74) rotate(-19.08)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-2_message-sent-81"
          points="72.54 209.11 50.83 216.61 46.2 203.23 68.27 195.4 72.54 209.11"
        />
        <polygon
          className="cls-3_message-sent-81"
          points="46.2 203.23 60.92 210.52 68.06 195.89 46.2 203.23"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={58.37}
          y={252.78}
          width={10.91}
          height={17.71}
          transform="translate(-204.73 241.49) rotate(-72)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-4_message-sent-81"
          points="70.54 269.56 53.71 264.1 57.08 253.71 74.28 259.15 70.54 269.56"
        />
        <polygon
          className="cls-13_message-sent-81"
          points="57.08 253.71 62.74 265.03 73.93 259.36 57.08 253.71"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={197.41}
          y={118.22}
          width={32.02}
          height={19.73}
          transform="translate(-32.07 87) rotate(-21.47)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-9_message-sent-81"
          points="231.92 131.42 202.13 143.13 194.9 124.77 225.18 112.59 231.92 131.42"
        />
        <polygon
          className="cls-7_message-sent-81"
          points="194.9 124.77 215.82 134.06 224.92 113.29 194.9 124.77"
        />
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={315.39}
          y={104.13}
          width={23.95}
          height={38.85}
          transform="translate(172.35 437.25) rotate(-84.38)"
          style={{
            fill: color,
          }}
        />
        <polygon
          className="cls-6_message-sent-81"
          points="345.54 137.37 306.87 133.56 309.22 109.72 348.65 113.29 345.54 137.37"
        />
        <polygon
          className="cls-12_message-sent-81"
          points="309.22 109.72 326.68 131.32 348 113.9 309.22 109.72"
        />
        <polygon
          className="cls-8_message-sent-81"
          points="188.97 160.55 288.65 135.3 437.34 153.05 188.97 160.55"
        />
      </g>
      <g id="inbox_message-sent-81">
        <rect
          className="cls-25_message-sent-81 targetColor"
          x={130.4}
          y={311.07}
          width={12.6}
          height={77.71}
          style={{
            fill: color,
          }}
        />
        <rect
          className="cls-15_message-sent-81"
          x={130.4}
          y={311.07}
          width={12.6}
          height={77.71}
        />
        <path
          className="cls-25_message-sent-81 targetColor"
          d="M172.62,287.22v30.79h-86.33v-30.79c0-8.86,7.19-16.05,16.06-16.04,0,0,0,0,0,0h54.2c8.86,0,16.05,7.18,16.06,16.04Z"
          style={{
            fill: color,
          }}
        />
        <path
          className="cls-11_message-sent-81"
          d="M102.43,273.85h0c7.67,0,13.88,6.22,13.88,13.88v30.1h-27.77v-30.08c-.01-7.67,6.2-13.89,13.86-13.9,0,0,.01,0,.02,0Z"
        />
        <path
          className="cls-14_message-sent-81"
          d="M172.63,287.22v30.78h-53.19v-32.59c-1.59-8.52-7.59-12.43-12.51-14.24h49.64c8.87,0,16.06,7.17,16.07,16.04Z"
        />
        <path
          className="cls-25_message-sent-81 targetColor"
          d="M60.79,313.59h56.44c1.22,0,2.21.99,2.21,2.21h0c0,1.22-.99,2.21-2.21,2.21h-56.44c-1.22,0-2.21-.99-2.21-2.21h0c0-1.22.99-2.21,2.21-2.21Z"
          style={{
            fill: color,
          }}
        />
        <path
          className="cls-10_message-sent-81"
          d="M60.79,313.59h56.44c1.22,0,2.21.99,2.21,2.21h0c0,1.22-.99,2.21-2.21,2.21h-56.44c-1.22,0-2.21-.99-2.21-2.21h0c0-1.22.99-2.21,2.21-2.21Z"
        />

        <path
          d="M295.529 143.089V145.879C295.409 152.619 294.829 159.339 293.779 165.999C292.959 170.069 291.859 174.079 290.479 177.999C287.409 186.799 282.999 195.079 277.419 202.539L277.229 202.779C260.539 224.079 234.659 238.489 206.229 239.099H204.369C194.909 239.099 185.509 237.649 176.509 234.759C169.909 232.649 163.569 229.779 157.629 226.209C145.649 217.839 137.379 205.149 134.559 190.809C133.849 187.219 133.499 183.579 133.499 179.919C133.489 162.279 141.729 145.639 155.779 134.969C156.389 134.519 157.009 134.099 157.629 133.679C139.239 158.879 144.769 194.209 169.969 212.599C178.329 218.699 188.199 222.379 198.499 223.249H198.609C200.139 223.379 201.689 223.439 203.259 223.439H203.789C203.789 223.439 203.849 223.439 203.879 223.439H204.359C251.689 223.499 291.179 187.279 295.199 140.119C295.289 139.119 295.359 138.119 295.419 137.029C295.489 139.039 295.529 141.059 295.529 143.089Z"
          fill={caraLondra}
          fillOpacity={0.7}
          transform=" scale(0.1) translate(1280, 2850) rotate(-20, 0, 0) "
        />
        <path
          d="M260.289 233.389C228.289 261.379 181.199 263.539 146.759 238.609C144.359 236.979 142.089 235.159 139.969 233.169C128.519 222.509 122.019 207.559 122.039 191.909C122.039 190.449 122.089 188.999 122.199 187.569C122.309 186.139 122.489 184.499 122.729 182.999C123.109 180.629 123.639 178.299 124.329 175.999C125.119 173.289 126.119 170.649 127.329 168.099C127.389 167.979 127.439 167.859 127.489 167.749C128.789 165.019 130.299 162.399 132.019 159.909C138.279 150.199 146.329 141.769 155.739 135.059C156.349 134.609 156.969 134.189 157.589 133.769C159.339 132.579 161.139 131.459 162.969 130.389C163.059 130.329 163.159 130.279 163.259 130.239C163.839 129.889 164.419 129.569 165.009 129.239C171.529 125.669 178.479 122.929 185.679 121.079C186.109 122.849 186.619 124.619 187.219 126.369C192.669 142.189 204.889 154.759 220.539 160.669C207.119 154.099 196.859 142.469 192.029 128.329C191.099 125.609 190.369 122.809 189.859 119.979C182.859 86.7394 210.949 64.3294 211.239 64.1094C211.909 63.6194 212.849 63.7594 213.339 64.4294C213.809 65.0694 213.699 65.9594 213.089 66.4694C212.809 66.6894 186.089 88.0094 192.819 119.469C195.669 119.309 198.499 118.949 201.299 118.369H201.349C203.469 117.929 205.569 117.359 207.619 116.669C212.339 128.279 220.779 137.989 231.619 144.269C221.709 137.219 214.339 127.159 210.619 115.579H210.699C202.349 86.1494 216.549 68.6294 217.169 67.8694C217.699 67.2294 218.649 67.1394 219.279 67.6794C219.919 68.2094 220.009 69.1594 219.479 69.7894C219.299 70.0094 205.859 86.7894 213.479 114.369C214.829 113.739 216.169 113.069 217.479 112.369C228.599 106.099 237.289 96.2594 242.119 84.4394L242.329 83.9294C243.329 81.3994 244.139 78.7994 244.759 76.1494C244.759 76.1194 244.759 76.0994 244.759 76.0694C245.469 73.0894 245.919 70.0594 246.119 67.0094C246.169 66.2594 246.199 65.4894 246.219 64.7294M246.219 64.6794C246.029 59.2994 244.579 54.0294 241.969 49.3194C240.569 46.7794 238.859 44.4294 236.869 42.3194C223.239 29.8094 204.349 24.7594 186.289 28.7994C165.019 6.58944 133.989 -3.41057 103.749 2.19943C101.749 2.56943 99.6691 3.01943 97.6691 3.52943C91.6191 5.71943 85.7091 8.30943 79.9991 11.2794C79.7991 10.9894 79.5991 10.6994 79.3691 10.4194C72.1191 0.889435 58.5191 -0.970565 48.9791 6.27944C39.4391 13.5294 37.5891 27.1294 44.8391 36.6694C16.6091 64.1394 0.559063 101.789 0.289062 141.179V144.289C0.949063 225.829 67.5891 291.389 149.119 290.729C204.939 290.279 255.739 258.379 280.389 208.289C275.219 217.779 268.419 226.269 260.289 233.389L246.219 64.6794ZM217.289 48.8294C217.939 48.1294 218.699 47.5394 219.539 47.0794C217.599 51.5494 219.649 56.7494 224.119 58.6994C226.589 59.7694 229.409 59.6594 231.789 58.3894C231.409 59.2694 230.879 60.0794 230.229 60.7794C226.919 64.3494 221.329 64.5594 217.759 61.2494C214.189 57.9394 213.979 52.3494 217.289 48.7794V48.8294ZM140.339 29.7694C147.519 29.7694 153.339 35.5894 153.339 42.7694C153.339 49.9494 147.519 55.7694 140.339 55.7694C133.159 55.7694 127.339 49.9494 127.339 42.7694C127.339 35.5894 133.159 29.7694 140.339 29.7694ZM65.6091 13.9694C58.4291 13.9494 52.5991 19.7594 52.5791 26.9394C52.5791 29.2094 53.1591 31.4394 54.2891 33.4094C48.7491 28.8394 47.9591 20.6494 52.5291 15.1094C57.0991 9.56943 65.2891 8.77943 70.8291 13.3494C72.0391 14.3394 73.0491 15.5494 73.8291 16.8994C71.5091 14.9994 68.6091 13.9594 65.6091 13.9694Z"
          fill={caraLondra}
          fillOpacity={0.7}
          transform=" scale(0.1) translate(1280, 2850) rotate(-20, 0, 0)"
        />
      </g>
    </svg>
  )
}
