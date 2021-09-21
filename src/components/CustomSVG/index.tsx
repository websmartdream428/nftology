import React from 'react'
import { TabPane } from '../../styledComponents/layout/StyledSideBar'

type CustomSVGProps = { selected: string }

export const HomeSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'home' ||
        localStorage.getItem('currentRouter') === null
          ? { color: '#902fff', borderRight: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="33.333"
        height="33.333"
        viewBox="0 0 33.333 33.333"
      >
        <g id="Group_631" data-name="Group 631" transform="translate(0 250)">
          <g id="Group_629" data-name="Group 629" transform="translate(0 -250)">
            <path
              id="Path_691"
              data-name="Path 691"
              d="M0-250H33.333v33.333H0Z"
              transform="translate(0 250)"
              fill="none"
            />
          </g>
          <g
            id="Group_630"
            data-name="Group 630"
            transform="translate(5.556 -245.833)"
          >
            <path
              id="Path_692"
              data-name="Path 692"
              d="M56.778-212.278l8.333,6.25v12.5H48.445v-12.5l8.333-6.25m0-3.472-11.111,8.333v16.667H67.889v-16.667Zm3.832,22.222H52.946v-9.722H60.61Z"
              transform="translate(-45.667 215.75)"
              fill={
                localStorage.getItem('currentRouter') === 'home' ||
                localStorage.getItem('currentRouter') === null
                  ? '#902fff'
                  : '#a2a2c2'
              }
            />
          </g>
        </g>
      </svg>
      Home
    </TabPane>
  )
}
export const DiscoverSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'discover'
          ? { color: '#902fff', borderRight: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="22.866"
        viewBox="0 0 23 22.866"
      >
        <g
          id="Group_13"
          data-name="Group 13"
          transform="translate(-381.547 -257.97)"
        >
          <path
            id="Path_10"
            data-name="Path 10"
            d="M393.114,257.97a11.367,11.367,0,0,1,10.56,7.252c.215.578,1.039,1.5-.046,1.912a1.628,1.628,0,0,1-2.387-1.008,8.152,8.152,0,0,0-3.567-4.277c-.589-.36-1-.608-1.29.4a2.269,2.269,0,0,1-2.695,1.572c-1.253-.135-1.869.253-1.711,1.628s-.6,1.86-1.893,1.8c-.671-.031-1.467-.214-1.51.94-.039,1.044.543,1.17,1.34,1.135.777-.035,1,.45.926,1.093-.1.8.471,1.883-.411,2.35-1.016.538-1.58-.538-2.2-1.13-1.028-.978-2.007-2.007-3.021-3-.224-.219-.433-.664-.775-.508-.436.2-.369.72-.372,1.138a8.979,8.979,0,0,0,7.6,8.92c.565.1,1.259.013,1.445.854.309,1.4-.129,1.9-1.631,1.773-4.669-.386-9.235-4.867-9.832-9.651A11.493,11.493,0,0,1,393.114,257.97Z"
            fill={
              localStorage.getItem('currentRouter') === 'discover'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
          <path
            id="Path_11"
            data-name="Path 11"
            d="M417.637,295.053a4.886,4.886,0,0,1,3.016-4.719,5.182,5.182,0,0,1,7.166,6.123,2.076,2.076,0,0,0,.721,2.573,11.46,11.46,0,0,1,1.561,1.637,1.154,1.154,0,0,1-.14,1.662,1.091,1.091,0,0,1-1.548.04,17.626,17.626,0,0,1-1.847-1.752,1.8,1.8,0,0,0-2.207-.58A5.155,5.155,0,0,1,417.637,295.053Zm7.768-.041a2.384,2.384,0,0,0-2.582-2.526,2.606,2.606,0,0,0-2.688,2.652,2.843,2.843,0,0,0,2.673,2.617A2.606,2.606,0,0,0,425.405,295.012Z"
            transform="translate(-25.843 -22.787)"
            fill={
              localStorage.getItem('currentRouter') === 'discover'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
        </g>
      </svg>
      Discover
    </TabPane>
  )
}
export const ActivitySVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'activity'
          ? { color: '#902fff', borderRight: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="26.122"
        height="26"
        viewBox="0 0 26.122 26"
      >
        <g
          id="Group_628"
          data-name="Group 628"
          transform="translate(0.122 109.324)"
        >
          <rect
            id="Rectangle_66"
            data-name="Rectangle 66"
            width="26"
            height="26"
            transform="translate(0 -109.324)"
            fill="none"
          />
          <g
            id="Group_627"
            data-name="Group 627"
            transform="translate(1.083 -106.834)"
          >
            <path
              id="Path_690"
              data-name="Path 690"
              d="M19.684-89.319l-2.231-1.018,2.231-1.018L20.7-93.586l1.018,2.231,2.231,1.018L21.72-89.319,20.7-87.089Zm-10.893,4.4,1.018-2.23,2.231-1.018L9.808-89.189,8.791-91.42,7.772-89.189l-2.23,1.018,2.23,1.018Zm4.873-5.414,1.18-2.61,2.61-1.18-2.61-1.18-1.18-2.61-1.18,2.61-2.61,1.18,2.61,1.18ZM9.332-77.884l6.5-6.508,4.331,4.331,9.2-10.352L27.838-91.94,20.16-83.31l-4.331-4.331L7.708-79.509Z"
              transform="translate(-5.542 97.917)"
              fill={
                localStorage.getItem('currentRouter') === 'activity'
                  ? '#902fff'
                  : '#a2a2c2'
              }
              stroke={
                localStorage.getItem('currentRouter') === 'activity'
                  ? '#902fff'
                  : '#a2a2c2'
              }
              strokeWidth="1"
            />
          </g>
        </g>
      </svg>
      Activity
    </TabPane>
  )
}
export const TradingSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'trading'
          ? { color: '#902fff', borderRight: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.3"
        height="21.338"
        viewBox="0 0 23.3 21.338"
      >
        <g
          id="Group_12"
          data-name="Group 12"
          transform="translate(-385.634 -261.907)"
        >
          <path
            id="Path_9"
            data-name="Path 9"
            d="M397.175,283.24c-2.829,0-5.659.015-8.488-.005-2.111-.015-3.032-.845-3.039-2.771q-.028-7.847,0-15.694c.006-2,.928-2.84,3.141-2.847q8.488-.028,16.976,0c2.166.009,3.142.9,3.152,2.875q.037,7.847,0,15.694c-.01,1.9-.971,2.729-3.091,2.743C402.94,283.254,400.057,283.24,397.175,283.24Zm-1.051-10.628c0,1.413-.013,2.827.005,4.24.009.686.25,1.336,1.109,1.363.886.027,1.162-.672,1.171-1.317q.061-4.312-.005-8.626a1.112,1.112,0,0,0-1.3-1.189c-.82.068-.975.668-.982,1.288C396.113,269.784,396.123,271.2,396.124,272.612Zm-5.11,1.688c0,.925-.029,1.851.011,2.774a1.1,1.1,0,0,0,1.012,1.147,1.018,1.018,0,0,0,1.174-.966,28.361,28.361,0,0,0,.027-5.681,1.051,1.051,0,0,0-1.175-.98,1,1,0,0,0-1.04,1.078C390.983,272.547,391.011,273.424,391.014,274.3Zm10.2,1.777c.144.824-.255,2.14,1.21,2.095,1.344-.041,1.112-1.3,1.15-2.2a2.213,2.213,0,0,0-.229-1.277,1.1,1.1,0,0,0-1.169-.576.92.92,0,0,0-.845.762A9.824,9.824,0,0,0,401.211,276.077Z"
            fill={
              localStorage.getItem('currentRouter') === 'trading'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
        </g>
      </svg>
      Trading
    </TabPane>
  )
}
export const AboutSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'about'
          ? { color: '#902fff', borderRight: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="28"
        height="18"
        viewBox="0 0 28 18"
      >
        <g id="Group_15" data-name="Group 15" transform="translate(-57 -259)">
          <g
            id="Rectangle_5"
            data-name="Rectangle 5"
            transform="translate(57 259)"
            fill="#fff"
            stroke={
              localStorage.getItem('currentRouter') === 'about'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="28" height="4" rx="2" stroke="none" />
            <rect x="1" y="1" width="26" height="2" rx="1" fill="none" />
          </g>
          <g
            id="Rectangle_6"
            data-name="Rectangle 6"
            transform="translate(64 266)"
            fill="#fff"
            stroke={
              localStorage.getItem('currentRouter') === 'about'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="21" height="4" rx="2" stroke="none" />
            <rect x="1" y="1" width="19" height="2" rx="1" fill="none" />
          </g>
          <g
            id="Rectangle_7"
            data-name="Rectangle 7"
            transform="translate(64 273)"
            fill="#fff"
            stroke={
              localStorage.getItem('currentRouter') === 'about'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="21" height="4" rx="2" stroke="none" />
            <rect x="1" y="1" width="19" height="2" rx="1" fill="none" />
          </g>
        </g>
      </svg>
      About
    </TabPane>
  )
}
export const OverviewSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'overview'
          ? { color: '#902fff', borderLeft: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21"
        height="22"
        viewBox="0 0 21 22"
      >
        <g id="Group_11" data-name="Group 11" transform="translate(-1670 -284)">
          <g
            id="Rectangle_1"
            data-name="Rectangle 1"
            transform="translate(1670 284)"
            fill="none"
            stroke={
              localStorage.getItem('currentRouter') === 'overview'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="10" height="10" rx="2" stroke="none" />
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none" />
          </g>
          <g
            id="Rectangle_2"
            data-name="Rectangle 2"
            transform="translate(1681 284)"
            fill="none"
            stroke={
              localStorage.getItem('currentRouter') === 'overview'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="10" height="10" rx="2" stroke="none" />
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none" />
          </g>
          <g
            id="Rectangle_3"
            data-name="Rectangle 3"
            transform="translate(1681 296)"
            fill="none"
            stroke={
              localStorage.getItem('currentRouter') === 'overview'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="10" height="10" rx="2" stroke="none" />
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none" />
          </g>
          <g
            id="Rectangle_4"
            data-name="Rectangle 4"
            transform="translate(1670 296)"
            fill="none"
            stroke={
              localStorage.getItem('currentRouter') === 'overview'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          >
            <rect width="10" height="10" rx="2" stroke="none" />
            <rect x="1" y="1" width="8" height="8" rx="1" fill="none" />
          </g>
        </g>
      </svg>
      Overview
    </TabPane>
  )
}
export const CreationSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'creation'
          ? { color: '#902fff', borderLeft: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="24"
        viewBox="0 0 20 24"
      >
        <g id="fi-rr-book_1" data-name="fi-rr-book 1" transform="translate(-2)">
          <path
            id="Vector"
            d="M15,0H5A5.006,5.006,0,0,0,0,5V20a4,4,0,0,0,4,4H15a5.006,5.006,0,0,0,5-5V5a5.006,5.006,0,0,0-5-5Zm3,5V16H6V2h9a3,3,0,0,1,3,3ZM4,2.172V16a3.98,3.98,0,0,0-2,.537V5A3,3,0,0,1,4,2.172ZM15,22H4a2,2,0,0,1,0-4H18v1a3,3,0,0,1-3,3Z"
            transform="translate(2)"
            fill={
              localStorage.getItem('currentRouter') === 'creation'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
        </g>
      </svg>
      Creation
    </TabPane>
  )
}
export const CollectionSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'collection'
          ? { color: '#902fff', borderLeft: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.166"
        height="23.166"
        viewBox="0 0 23.166 23.166"
      >
        <g
          id="Group_14"
          data-name="Group 14"
          transform="translate(-381.992 -257.262)"
        >
          <path
            id="Path_12"
            data-name="Path 12"
            d="M406.848,258.267c2.077,0,4.153-.015,6.23,0,1.807.017,2.62.821,2.627,2.628q.025,6.23,0,12.46c-.007,1.807-.82,2.62-2.627,2.627q-6.23.025-12.46,0c-1.807-.007-2.62-.82-2.627-2.627q-.025-6.23,0-12.46c.007-1.807.82-2.611,2.627-2.628C402.7,258.252,404.772,258.267,406.848,258.267Zm-.135,15.509c1.754,0,3.508.006,5.262,0,.847,0,1.161-.381.61-1.109-.947-1.25-1.949-2.459-2.931-3.683-.437-.544-.843-.435-1.237.06-.689.867-1.407,1.713-2.068,2.6-.418.561-.674.549-1.13,0-1.791-2.17-1.811-2.153-3.543.163-.194.259-.394.512-.58.776-.566.805-.3,1.19.631,1.195C403.39,273.782,405.052,273.776,406.714,273.776Z"
            transform="translate(-11.559 0)"
            fill="#fefefe"
            stroke={
              localStorage.getItem('currentRouter') === 'collection'
                ? '#902fff'
                : '#a2a2c2'
            }
            strokeWidth="2"
          />
          <path
            id="Path_13"
            data-name="Path 13"
            d="M391.276,292.146c-2.211,0-4.423.014-6.634,0-1.813-.015-2.634-.814-2.641-2.607-.017-4.469,0-8.938-.009-13.407,0-.848.1-1.688,1.168-1.651.966.034,1.055.838,1.053,1.63q-.013,5.943,0,11.887c0,1.706.224,1.933,1.9,1.936q5.529.011,11.057,0c.276,0,.553.006.829,0,.843-.023,1.69.081,1.666,1.151-.022.967-.818,1.072-1.615,1.068C395.792,292.139,393.534,292.147,391.276,292.146Z"
            transform="translate(0 -11.724)"
            fill={
              localStorage.getItem('currentRouter') === 'collection'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
        </g>
      </svg>
      Collection
    </TabPane>
  )
}
export const SettingSVG = () => {
  return (
    <TabPane
      style={
        localStorage.getItem('currentRouter') === 'settings'
          ? { color: '#902fff', borderLeft: '3px solid #902fff' }
          : { color: '#a2a2c2' }
      }
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="21.593"
        height="24"
        viewBox="0 0 21.593 24"
      >
        <g
          id="fi-rr-settings_1"
          data-name="fi-rr-settings 1"
          transform="translate(-1.203)"
        >
          <path
            id="Vector"
            d="M4,0A4,4,0,1,0,6.828,1.172,4,4,0,0,0,4,0ZM4,6a2,2,0,1,1,1.414-.586A2,2,0,0,1,4,6Z"
            transform="translate(8 8)"
            fill={
              localStorage.getItem('currentRouter') === 'settings'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M20.091,13.9l-.444-.256a9.1,9.1,0,0,0,0-3.29l.444-.256a3,3,0,0,0-3-5.2l-.445.257A8.977,8.977,0,0,0,13.8,3.513V3a3,3,0,1,0-6,0v.513A8.977,8.977,0,0,0,4.949,5.159L4.5,4.9a3,3,0,0,0-3,5.2l.444.256a9.1,9.1,0,0,0,0,3.29L1.5,13.9a3,3,0,1,0,3,5.2l.445-.257A8.977,8.977,0,0,0,7.8,20.487V21a3,3,0,1,0,6,0v-.513a8.977,8.977,0,0,0,2.848-1.646l.447.258a3,3,0,0,0,3-5.2Zm-2.548-3.776a7.048,7.048,0,0,1,0,3.75,1,1,0,0,0,.464,1.133l1.084.626a1,1,0,1,1-1,1.733L17,16.738a1,1,0,0,0-1.215.165,6.984,6.984,0,0,1-3.243,1.875,1,1,0,0,0-.751.969V21a1,1,0,1,1-2,0V19.748a1,1,0,0,0-.751-.969A6.984,6.984,0,0,1,5.8,16.9a1,1,0,0,0-1.215-.165L3.5,17.362a1,1,0,1,1-1-1.732L3.588,15a1,1,0,0,0,.464-1.133,7.048,7.048,0,0,1,0-3.75,1,1,0,0,0-.465-1.129L2.5,8.366a1,1,0,1,1,1-1.733l1.086.628A1,1,0,0,0,5.8,7.1,6.984,6.984,0,0,1,9.046,5.225,1,1,0,0,0,9.8,4.252V3a1,1,0,0,1,2,0V4.252a1,1,0,0,0,.751.969A6.984,6.984,0,0,1,15.791,7.1a1,1,0,0,0,1.215.165l1.084-.627a1,1,0,1,1,1,1.732L18.006,9a1,1,0,0,0-.463,1.129Z"
            transform="translate(1.203 0)"
            fill={
              localStorage.getItem('currentRouter') === 'settings'
                ? '#902fff'
                : '#a2a2c2'
            }
          />
        </g>
      </svg>
      Settings
    </TabPane>
  )
}
export const ArrowSVG = ({ selected }: CustomSVGProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="8.391"
      viewBox="0 0 16 8.391"
    >
      <path
        id="Vector"
        d="M15.416,2.781,12.83.2a.667.667,0,0,0-.943,0h0a.667.667,0,0,0,0,.943l2.37,2.371H.667A.667.667,0,0,0,0,4.176H0a.667.667,0,0,0,.667.667H14.3l-2.411,2.41a.667.667,0,1,0,.943.943L15.417,5.61a2.005,2.005,0,0,0,0-2.829Z"
        fill={selected}
      />
    </svg>
  )
}

export const TextArrowSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="23"
      viewBox="0 0 33 38"
    >
      <path
        id="Polygon_5"
        data-name="Polygon 5"
        d="M12.067,12.041a8,8,0,0,1,13.866,0L31.1,21.008A8,8,0,0,1,24.163,33H13.837A8,8,0,0,1,6.9,21.008Z"
        transform="translate(33) rotate(90)"
        fill="#5b3b97"
      />
    </svg>
  )
}

export const BellSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31.379"
      height="34.367"
      viewBox="0 0 31.379 34.367"
    >
      <g
        id="Group_7"
        data-name="Group 7"
        transform="translate(-1809.5 -703.483)"
      >
        <g id="Group" transform="translate(1819.96 731.873)">
          <g id="Vector" fill="none">
            <path
              d="M5.23,5.977A5.236,5.236,0,0,1,0,.747a.747.747,0,1,1,1.494,0,3.736,3.736,0,1,0,7.471,0,.747.747,0,1,1,1.494,0A5.236,5.236,0,0,1,5.23,5.977Z"
              stroke="none"
            />
            <path
              d="M 5.229808330535889 5.976974964141846 C 2.345938444137573 5.976974964141846 -1.669464154474554e-06 3.631004810333252 -1.669464154474554e-06 0.7471248507499695 C -1.669464154474554e-06 0.3347148597240448 0.3347083330154419 4.859466571360826e-06 0.747118353843689 4.859466571360826e-06 C 1.159528374671936 4.859466571360826e-06 1.494228363037109 0.3347148597240448 1.494228363037109 0.7471248507499695 C 1.494228363037109 2.806184768676758 3.169268369674683 4.482724666595459 5.229808330535889 4.482724666595459 C 7.290348529815674 4.482724666595459 8.965388298034668 2.806184768676758 8.965388298034668 0.7471248507499695 C 8.965388298034668 0.3347148597240448 9.300098419189453 4.859466571360826e-06 9.712498664855957 4.859466571360826e-06 C 10.12490844726562 4.859466571360826e-06 10.45961856842041 0.3347148597240448 10.45961856842041 0.7471248507499695 C 10.45961856842041 3.631004810333252 8.113677978515625 5.976974964141846 5.229808330535889 5.976974964141846 Z"
              stroke="none"
              fill="#902fff"
            />
          </g>
        </g>
        <g id="Group-2" data-name="Group" transform="translate(1809.5 703.483)">
          <g id="Vector-2" data-name="Vector" fill="none">
            <path
              d="M28.39,26.9H2.988C1.753,26.9,0,25.891,0,24.655c0-.656,1.033-1.276,1.53-1.7a.767.767,0,0,1,.1-.072A10.421,10.421,0,0,0,5.23,15V10.46A10.472,10.472,0,0,1,15.689,0a2.077,2.077,0,0,1,.384.028.747.747,0,1,1-.29,1.466,9,9,0,0,0-9.06,8.965V15a11.914,11.914,0,0,1-4.206,9.086.69.69,0,0,1-.075.055A.747.747,0,0,0,2.988,25.4h25.4a.746.746,0,0,0,.542-1.26.816.816,0,0,1-.072-.054A11.914,11.914,0,0,1,24.655,15V13.4a.747.747,0,0,1,1.494,0V15a10.42,10.42,0,0,0,3.6,7.881.649.649,0,0,1,.1.069c.5.427,1.532,1.047,1.532,1.7C31.379,25.891,29.626,26.9,28.39,26.9Z"
              stroke="none"
            />
            <path
              d="M 28.39039611816406 26.89614105224609 L 2.988465547561646 26.89614105224609 C 1.752735495567322 26.89614105224609 5.468444669531891e-06 25.89054107666016 5.468444669531891e-06 24.65480995178223 C 5.468444669531891e-06 23.99884033203125 1.032515525817871 23.37872123718262 1.530095458030701 22.95137023925781 C 1.561475515365601 22.92448043823242 1.595835447311401 22.90056991577148 1.630205512046814 22.8796501159668 C 3.919365406036377 20.89232063293457 5.229805469512939 18.02639007568359 5.229805469512939 15.00207042694092 L 5.229805469512939 10.45961093902588 C 5.229805469512939 4.691880702972412 9.923185348510742 5.261230171527131e-07 15.68942546844482 5.261230171527131e-07 C 15.8089656829834 5.261230171527131e-07 15.95390510559082 0.004480526316910982 16.07344627380371 0.02839052677154541 C 16.4783763885498 0.107590526342392 16.74136543273926 0.50057053565979 16.66216468811035 0.9055005311965942 C 16.5844783782959 1.310439944267273 16.19000244140625 1.573422193527222 15.78356552124023 1.494230508804321 C 10.74501514434814 1.494230508804321 6.724035263061523 5.516700744628906 6.724035263061523 10.45961093902588 L 6.724035263061523 15.00207042694092 C 6.724035263061523 18.50304985046387 5.190955638885498 21.81426048278809 2.517775535583496 24.08847999572754 C 2.493875503540039 24.10791015625 2.46996545791626 24.1273307800293 2.443065404891968 24.14377021789551 C 2.314565420150757 24.28124046325684 2.241345405578613 24.46352958679199 2.241345405578613 24.6547908782959 C 2.241345405578613 25.06719970703125 2.577545404434204 25.40191078186035 2.988465547561646 25.40191078186035 L 28.39039611816406 25.40191078186035 C 28.80130577087402 25.40191078186035 29.13750457763672 25.06719970703125 29.13750457763672 24.6547908782959 C 29.13750457763672 24.46352958679199 29.06429481506348 24.27974128723145 28.93279457092285 24.14227104187012 C 28.90739631652832 24.12584114074707 28.88498497009277 24.10791015625 28.86107635498047 24.08847999572754 C 26.18789482116699 21.81426048278809 24.65481567382812 18.50304985046387 24.65481567382812 15.00207042694092 L 24.65481567382812 13.40324020385742 C 24.65481567382812 12.99084091186523 24.98952484130859 12.65613079071045 25.40192604064941 12.65613079071045 C 25.81433486938477 12.65613079071045 26.14904594421387 12.99084091186523 26.14904594421387 13.40324020385742 L 26.14904594421387 15.00207042694092 C 26.14904594421387 18.02938079833984 27.46097564697266 20.89531135559082 29.75163459777832 22.88264083862305 C 29.7860050201416 22.90355110168457 29.81887626647949 22.92597007751465 29.84726524353027 22.95137023925781 C 30.34634590148926 23.37872123718262 31.37885475158691 23.99884033203125 31.37885475158691 24.65480995178223 C 31.37885475158691 25.89054107666016 29.6261157989502 26.89614105224609 28.39039611816406 26.89614105224609 Z"
              stroke="none"
              fill="#902fff"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

export const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.015"
      height="18.015"
      viewBox="0 0 18.015 18.015"
    >
      <g
        id="fi-rr-search_1"
        data-name="fi-rr-search 1"
        transform="translate(0.024 0.024)"
      >
        <path
          id="Vector"
          d="M17.8,16.744l-4.477-4.477a7.512,7.512,0,1,0-1.061,1.061L16.744,17.8A.75.75,0,0,0,17.8,16.744Zm-10.28-3.22a6.007,6.007,0,1,1,4.241-1.759A6,6,0,0,1,7.524,13.524Z"
          transform="translate(-0.024 -0.024)"
          fill="#902fff"
        />
      </g>
    </svg>
  )
}
export const FilterUp = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9.514"
      height="8.834"
      viewBox="0 0 9.514 8.834"
    >
      <path
        id="Path_682"
        data-name="Path 682"
        d="M4.757,0,9.514,8.834H0Z"
        fill="#330b7e"
      />
    </svg>
  )
}
export const FilterDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9.514"
      height="8.834"
      viewBox="0 0 9.514 8.834"
    >
      <path
        id="Polygon_41"
        data-name="Polygon 41"
        d="M4.757,0,9.514,8.834H0Z"
        transform="translate(9.514 8.834) rotate(180)"
        fill="#330b7e"
      />
    </svg>
  )
}

export const Arrow2SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="22"
      viewBox="0 0 18 22"
    >
      <path
        id="Polygon_32"
        data-name="Polygon 32"
        d="M11,0,22,18H0Z"
        transform="translate(18) rotate(90)"
        fill="#330b7e"
      />
    </svg>
  )
}

export const LogoutSVG = () => {
  return (
    <svg
      id="fi-rr-sign-out_1"
      data-name="fi-rr-sign-out 1"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
    >
      <path
        id="Vector"
        d="M5.25,16.5H3.75A2.25,2.25,0,0,1,1.5,14.25V3.75A2.25,2.25,0,0,1,3.75,1.5h1.5a.75.75,0,0,0,0-1.5H3.75A3.755,3.755,0,0,0,0,3.75v10.5A3.754,3.754,0,0,0,3.75,18h1.5a.75.75,0,1,0,0-1.5Z"
        transform="translate(0 0)"
        fill="#a2a2c2"
      />
      <path
        id="Vector-2"
        data-name="Vector"
        d="M10.153,10.271l3.44-3.44a2.255,2.255,0,0,0,0-3.182L10.153.211a.75.75,0,0,0-1.06,1.06l3.219,3.22H.75a.75.75,0,0,0,0,1.5H12.313l-3.22,3.22a.75.75,0,1,0,1.06,1.061Z"
        transform="translate(3.75 3.759)"
        fill="#a2a2c2"
      />
    </svg>
  )
}
export const PencilSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="15.26"
      height="15.304"
      viewBox="0 0 15.26 15.304"
    >
      <g
        id="Group_558"
        data-name="Group 558"
        transform="translate(-384.975 -261.395)"
      >
        <path
          id="Path_675"
          data-name="Path 675"
          d="M384.983,287.136c0-1.01-.024-1.889.015-2.765a1.21,1.21,0,0,1,.318-.734c2.985-3.01,5.987-6,8.931-8.946l3.136,3.2c-.115.121-.365.4-.628.66-2.548,2.551-5.124,5.076-7.631,7.666a2.561,2.561,0,0,1-2.309.936A16.335,16.335,0,0,0,384.983,287.136Zm10.235-9.442-.821-.716c-2.535,2.525-5.034,5-7.507,7.506-.179.181-.169.549-.311,1.062.52-.165.912-.172,1.115-.371C390.181,282.734,392.641,280.266,395.218,277.694Z"
          transform="translate(0 -10.471)"
          fill="#a2a2c2"
        />
        <path
          id="Path_676"
          data-name="Path 676"
          d="M437,266.382l-3.372-3.4,2.252-1.583,2.672,2.621Z"
          transform="translate(-38.317)"
          fill="#a2a2c2"
        />
      </g>
    </svg>
  )
}

export const ListIco = () => {
  return (
    <svg
      id="Group_106"
      data-name="Group 106"
      xmlns="http://www.w3.org/2000/svg"
      width="6.982"
      height="27.146"
      viewBox="0 0 6.982 27.146"
    >
      <path
        id="Path_58"
        data-name="Path 58"
        d="M417.213,265.975a3.488,3.488,0,1,1-3.516,3.355A3.4,3.4,0,0,1,417.213,265.975Z"
        transform="translate(-413.694 -265.975)"
        fill="#111026"
      />
      <path
        id="Path_59"
        data-name="Path 59"
        d="M417.279,289.973a3.489,3.489,0,1,1-3.582,3.288A3.406,3.406,0,0,1,417.279,289.973Z"
        transform="translate(-413.692 -279.889)"
        fill="#111026"
      />
      <path
        id="Path_60"
        data-name="Path 60"
        d="M417.14,313.975a3.488,3.488,0,1,1-3.44,3.431A3.4,3.4,0,0,1,417.14,313.975Z"
        transform="translate(-413.696 -293.805)"
        fill="#111026"
      />
    </svg>
  )
}

export const ShareIco = () => {
  return (
    <svg
      id="Group_107"
      data-name="Group 107"
      xmlns="http://www.w3.org/2000/svg"
      width="24.502"
      height="27.146"
      viewBox="0 0 24.502 27.146"
    >
      <path
        id="Path_61"
        data-name="Path 61"
        d="M385.685,271.416a4.061,4.061,0,0,1,5.814-3.726,2.339,2.339,0,0,0,2.472-.164q3.239-1.963,6.546-3.816a2.344,2.344,0,0,0,1.382-2.081,4.036,4.036,0,0,1,5.01-3.67,4.209,4.209,0,0,1,3.119,5.3,4.064,4.064,0,0,1-5.506,2.641,2.741,2.741,0,0,0-2.93.254c-2.156,1.315-4.369,2.535-6.531,3.841-1.506.91-1.526,2.046-.038,2.941,2.453,1.475,4.954,2.87,7.414,4.334a1.7,1.7,0,0,0,1.718.044c2.559-1.059,4.9-.061,5.713,2.359a4.042,4.042,0,0,1-2.934,5.209c-2.359.615-4.589-.973-4.994-3.7a2.279,2.279,0,0,0-1.25-1.823c-2.289-1.312-4.579-2.623-6.834-3.99a2.2,2.2,0,0,0-2.322-.106A4.073,4.073,0,0,1,385.685,271.416Z"
        transform="translate(-385.685 -257.872)"
        fill="#111026"
      />
    </svg>
  )
}

export const ReloadIco = () => {
  return (
    <svg
      id="Group_108"
      data-name="Group 108"
      xmlns="http://www.w3.org/2000/svg"
      width="24.502"
      height="30.038"
      viewBox="0 0 24.502 30.038"
    >
      <path
        id="Path_62"
        data-name="Path 62"
        d="M401.456,263.727v5.093l-6.839-6.883,6.762-6.781v5.23c6.894.561,13.1,5.383,12.231,13.989a12.252,12.252,0,0,1-24.421-1.336H392.1a9.606,9.606,0,0,0,4.342,7.6,8.873,8.873,0,0,0,6.423,1.371,9.2,9.2,0,0,0-1.411-18.285Z"
        transform="translate(-389.189 -255.156)"
        fill="#111026"
      />
    </svg>
  )
}

export const EyeSVG = () => {
  return (
    <svg
      id="Group_564"
      data-name="Group 564"
      xmlns="http://www.w3.org/2000/svg"
      width="19.65"
      height="13.733"
      viewBox="0 0 19.65 13.733"
    >
      <path
        id="Path_74"
        data-name="Path 74"
        d="M387.824,267.122c4.416.226,7.707,2.141,9.716,6.044a2.078,2.078,0,0,1,.032,1.651,10.761,10.761,0,0,1-19.333.012,2.08,2.08,0,0,1,.02-1.651A10.717,10.717,0,0,1,387.824,267.122Zm.065,2.325a4.577,4.577,0,1,0,4.589,4.563A4.588,4.588,0,0,0,387.889,269.447Z"
        transform="translate(-378.079 -267.122)"
        fill="#111026"
      />
      <path
        id="Path_75"
        data-name="Path 75"
        d="M414.512,288.108a2.738,2.738,0,1,1-2.71-2.793A2.765,2.765,0,0,1,414.512,288.108Z"
        transform="translate(-401.951 -281.151)"
        fill="#111026"
      />
    </svg>
  )
}

export const CurrentHistorySVG = () => {
  return (
    <svg
      id="Group_576"
      data-name="Group 576"
      xmlns="http://www.w3.org/2000/svg"
      width="18.175"
      height="29"
      viewBox="0 0 18.175 29"
    >
      <path
        id="Path_13"
        data-name="Path 13"
        d="M283.577,255.679c.025.437-.267.525-.483.655q-2.78,1.673-5.567,3.333c-.8.48-1.613.949-2.408,1.441a1.014,1.014,0,0,1-1.185.025q-4.084-2.463-8.195-4.882c-.628-.37-.218-.731-.018-1.057,1.706-2.774,3.431-5.537,5.146-8.306q1.6-2.59,3.194-5.188c.4-.657.473-.653.885.007q3.692,5.914,7.387,11.828C282.783,254.258,283.19,255.009,283.577,255.679Z"
        transform="translate(-265.404 -241.21)"
        fill="#a2a2c2"
      />
      <path
        id="Path_14"
        data-name="Path 14"
        d="M265.5,276.1a17.4,17.4,0,0,1,3.748,1.963q2.5,1.439,4.962,2.941a.724.724,0,0,0,.881-.066c2.431-1.643,5.083-2.917,7.543-4.51a1.433,1.433,0,0,1,.916-.388c.128.2-.018.307-.11.435q-3.986,5.525-7.964,11.054c-.9,1.262-.895,1.287-1.748.1q-4.005-5.557-7.991-11.128C265.644,276.374,265.575,276.233,265.5,276.1Z"
        transform="translate(-265.453 -259.495)"
        fill="#a2a2c2"
      />
    </svg>
  )
}

export const PriceHistorySVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23.493"
      height="12.888"
      viewBox="0 0 23.493 12.888"
    >
      <path
        id="Path_69"
        data-name="Path 69"
        d="M392.648,292.751a2.1,2.1,0,0,1-2.2-1.877c-.245-1.644-1.612-2.344-2.666-3.284-.429-.383-1.005-.082-1.416.331-1.246,1.253-2.491,2.508-3.748,3.749a2.188,2.188,0,0,0-.544,1.305,2.2,2.2,0,0,1-4.373-.164,2.083,2.083,0,0,1,1.876-2.317,2.753,2.753,0,0,0,1.683-.925q1.255-1.275,2.533-2.528a4.055,4.055,0,0,0,1.44-2.421,1.91,1.91,0,0,1,2.145-1.582,1.932,1.932,0,0,1,2.07,1.689c.2,1.689,1.577,2.365,2.561,3.373a.986.986,0,0,0,1.436-.138c1.009-.99,2-2,3-3a1.887,1.887,0,0,0,.363-1.106,2.205,2.205,0,1,1,2.508,2.51c-1.476.313-4.149,3.039-4.507,4.574A2.168,2.168,0,0,1,392.648,292.751Z"
        transform="translate(-377.696 -281.971)"
        fill="#111026"
      />
    </svg>
  )
}

export const Details1SVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.099"
      height="27.099"
      viewBox="0 0 27.099 27.099"
    >
      <g
        id="Group_599"
        data-name="Group 599"
        transform="translate(9.572) rotate(45)"
      >
        <g id="Group_113" data-name="Group 113" transform="translate(0 0)">
          <path
            id="Path_76"
            data-name="Path 76"
            d="M24.759,1.55a.563.563,0,0,1,.028.172V11.907a.277.277,0,0,0-.05.073,1.893,1.893,0,0,1-2,1.555q-8.068,0-16.136-.005a1.293,1.293,0,0,1-.789-.326Q3.122,10.529.443,7.841a1.515,1.515,0,0,1,0-2.142Q3.1,3.041,5.755.379A1.287,1.287,0,0,1,6.669,0q6.745.009,13.49,0c.9,0,1.8-.01,2.707,0A1.861,1.861,0,0,1,24.636,1.2,3.184,3.184,0,0,1,24.759,1.55Z"
            transform="translate(0 0)"
            fill="#111026"
          />
        </g>
        <circle
          id="Ellipse_3"
          data-name="Ellipse 3"
          cx="1.485"
          cy="1.485"
          r="1.485"
          transform="translate(4.266 5.283)"
          fill="#fefefe"
        />
      </g>
    </svg>
  )
}

export const CurrentPriceSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27.933"
      height="22.658"
      viewBox="0 0 27.933 22.658"
    >
      <g
        id="Group_602"
        data-name="Group 602"
        transform="translate(27.933 22.658) rotate(180)"
      >
        <path
          id="Path_63"
          data-name="Path 63"
          d="M0,2.807V0H21.064V2.807Z"
          transform="translate(6.869 0.815)"
          fill="#111026"
        />
        <path
          id="Path_64"
          data-name="Path 64"
          d="M20.971,2.819H0V0H20.971Z"
          transform="translate(6.931 9.938)"
          fill="#111026"
        />
        <path
          id="Path_65"
          data-name="Path 65"
          d="M21.064,0V2.807H0V0Z"
          transform="translate(6.865 19.042)"
          fill="#111026"
        />
        <path
          id="Path_66"
          data-name="Path 66"
          d="M4.512,2.285c-.218,1.365-.96,2.247-2.377,2.174A2.075,2.075,0,0,1,.006,2.087,2.062,2.062,0,0,1,2.237,0C3.658.014,4.36.907,4.512,2.285Z"
          transform="translate(0)"
          fill="#111026"
        />
        <path
          id="Path_67"
          data-name="Path 67"
          d="M4.508,2.15c-.132,1.384-.829,2.3-2.246,2.312A2.072,2.072,0,0,1,0,2.22,2.061,2.061,0,0,1,2.1,0C3.521-.073,4.272.791,4.508,2.15Z"
          transform="translate(0.003 9.097)"
          fill="#111026"
        />
        <path
          id="Path_68"
          data-name="Path 68"
          d="M4.507,2.15c-.14,1.375-.835,2.294-2.246,2.309A2.076,2.076,0,0,1,0,2.217,2.06,2.06,0,0,1,2.1,0C3.517-.073,4.266.794,4.507,2.15Z"
          transform="translate(0.005 18.198)"
          fill="#111026"
        />
      </g>
    </svg>
  )
}

export const DescriptionSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18.18"
      height="13.701"
      viewBox="0 0 18.18 13.701"
    >
      <g id="Group_567" data-name="Group 567" transform="translate(0)">
        <path
          id="Path_70"
          data-name="Path 70"
          d="M401.219,271.366h9.774v-1.828h-9.774Zm9.76,5.95V275.48h-9.731v1.836Zm.012,4.094h-9.774v1.828h9.774Z"
          transform="translate(-393.359 -269.538)"
          fill="#111026"
        />
        <path
          id="Path_71"
          data-name="Path 71"
          d="M384.538,271.607v-2.069h18.18v2.069Z"
          transform="translate(-384.538 -269.518)"
          fill="#111026"
        />
        <path
          id="Path_72"
          data-name="Path 72"
          d="M416.856,295.677H401.392V293.6h15.464Z"
          transform="translate(-398.71 -287.778)"
          fill="#111026"
        />
        <path
          id="Path_73"
          data-name="Path 73"
          d="M416.749,317.611v2.069H401.217v-2.069Z"
          transform="translate(-398.569 -305.98)"
          fill="#111026"
        />
      </g>
    </svg>
  )
}

export const PropertiesSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25.202"
      height="19.144"
      viewBox="0 0 25.202 19.144"
    >
      <path
        id="Path_677"
        data-name="Path 677"
        d="M25.2,1.173v16.8a3.3,3.3,0,0,1-2.765,1.17q-7.19-.066-14.381,0a3.14,3.14,0,0,1-2.922-1.578C3.454,14.969,1.715,12.41,0,9.836V9.311C1.715,6.735,3.457,4.176,5.132,1.574A3.106,3.106,0,0,1,8.048,0c4.8.054,9.592.046,14.388,0A3.3,3.3,0,0,1,25.2,1.173ZM9.5,10.96A1.394,1.394,0,0,0,10.8,9.6,1.273,1.273,0,0,0,9.512,8.226,1.277,1.277,0,0,0,8.1,9.61C8.112,10.406,8.666,10.84,9.5,10.96Zm5.211,0c.786-.127,1.341-.56,1.34-1.36a1.278,1.278,0,0,0-1.423-1.37,1.273,1.273,0,0,0-1.276,1.39A1.38,1.38,0,0,0,14.71,10.955Zm6.623-1.395c-.127-.788-.565-1.34-1.364-1.337A1.278,1.278,0,0,0,18.6,9.653,1.273,1.273,0,0,0,20,10.925,1.378,1.378,0,0,0,21.333,9.561Z"
        transform="translate(25.202 19.144) rotate(180)"
        fill="#111026"
      />
    </svg>
  )
}

export const Details2SVG = () => {
  return (
    <svg
      id="Group_572"
      data-name="Group 572"
      xmlns="http://www.w3.org/2000/svg"
      width="17.083"
      height="18.029"
      viewBox="0 0 17.083 18.029"
    >
      <path
        id="Path_78"
        data-name="Path 78"
        d="M385.226,310.617v-7.08H392.3v7.08Z"
        transform="translate(-385.226 -293.109)"
        fill="#111026"
      />
      <path
        id="Path_79"
        data-name="Path 79"
        d="M429.068,309.414a4.052,4.052,0,1,1,4.07-3.976A4.075,4.075,0,0,1,429.068,309.414Z"
        transform="translate(-416.056 -291.385)"
        fill="#111026"
      />
      <path
        id="Path_80"
        data-name="Path 80"
        d="M399.176,265.356,404.1,257.3l4.921,8.052Z"
        transform="translate(-396.03 -257.304)"
        fill="#111026"
      />
    </svg>
  )
}

export const TradingHistorySVG = () => {
  return (
    <svg
      id="Group_582"
      data-name="Group 582"
      xmlns="http://www.w3.org/2000/svg"
      width="21.162"
      height="18.5"
      viewBox="0 0 21.162 18.5"
    >
      <path
        id="Path_81"
        data-name="Path 81"
        d="M384.2,276.96l1.443-1.237c3.537,2.518,6.944,2.609,9.711.233A7.19,7.19,0,0,0,389.2,263.45a7.1,7.1,0,0,0-5.691,6.958h3.586l-4.719,3.919-3.6-3.778h2.573a9.709,9.709,0,0,1,2.867-6.692,9.256,9.256,0,1,1,10.9,14.744A9.031,9.031,0,0,1,384.2,276.96Z"
        transform="translate(-378.776 -261.234)"
        fill="#111026"
      />
      <path
        id="Path_82"
        data-name="Path 82"
        d="M426.184,288l-.745,1.217c-1.347-.8-2.672-1.549-3.959-2.366a1.154,1.154,0,0,1-.413-.834c-.041-1.451-.019-2.9-.019-4.445h1.544c0,1.086.046,2.189-.016,3.287a1.411,1.411,0,0,0,.868,1.52C424.354,286.846,425.211,287.417,426.184,288Z"
        transform="translate(-410.182 -276.347)"
        fill="#111026"
      />
    </svg>
  )
}
