import React from "react";
import styled from "@emotion/styled";

import mediaqueries from "@styles/media";

const Logo = ({ fill = "#fff" }: { fill?: string }) => {
    return (
        <LogoContainer>
            <svg
                width="200"
                height="30"
                viewBox="0 0 400 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect width="375" height="30" fill="none" />
                <g clip-path="url(#clip0)">
                    <rect width="200" height="30" fill="none" />

                    <path
                        d="M23.548 31.624L25.744 31.3V17.764L23.62 17.116V14.308L29.596 13.516H29.704L30.712 14.272V15.136L30.604 18.124H30.712C30.88 17.572 31.264 16.936 31.864 16.216C32.464 15.472 33.22 14.836 34.132 14.308C35.068 13.756 36.076 13.48 37.156 13.48C37.78 13.48 38.26 13.564 38.596 13.732V19.996C38.212 19.708 37.792 19.48 37.336 19.312C36.904 19.144 36.34 19.06 35.644 19.06C34.78 19.06 34 19.18 33.304 19.42C32.608 19.636 32.056 19.888 31.648 20.176V31.3L35.608 31.66V34H23.548V31.624ZM45.2009 10.888C44.2649 10.888 43.5089 10.612 42.9329 10.06C42.3569 9.508 42.0689 8.8 42.0689 7.936C42.0689 6.928 42.3809 6.1 43.0049 5.452C43.6529 4.804 44.5169 4.48 45.5969 4.48C46.6769 4.48 47.5049 4.756 48.0809 5.308C48.6569 5.86 48.9449 6.568 48.9449 7.432C48.9449 8.464 48.6209 9.304 47.9729 9.952C47.3249 10.576 46.4129 10.888 45.2369 10.888H45.2009ZM43.0049 17.764L40.5929 17.08V14.38L47.7929 13.516H47.8649L48.9809 14.272V31.3L51.1409 31.624V34H40.7729V31.624L43.0049 31.3V17.764ZM53.2449 24.136C53.2449 22 53.6769 20.128 54.5409 18.52C55.4049 16.912 56.6169 15.676 58.1769 14.812C59.7369 13.924 61.5369 13.48 63.5769 13.48C64.5849 13.48 65.4489 13.552 66.1689 13.696C66.9129 13.816 67.6689 13.996 68.4369 14.236C69.1329 14.428 69.5649 14.536 69.7329 14.56L69.4809 21.076H65.8449L64.9089 16.936C64.8369 16.624 64.6329 16.408 64.2969 16.288C63.9849 16.144 63.6009 16.072 63.1449 16.072C62.0169 16.072 61.1289 16.624 60.4809 17.728C59.8569 18.832 59.5449 20.668 59.5449 23.236C59.5449 25.684 59.9409 27.568 60.7329 28.888C61.5489 30.184 62.6409 30.832 64.0089 30.832C65.7849 30.832 67.4169 30.376 68.9049 29.464L69.8769 31.588C69.3009 32.236 68.3529 32.872 67.0329 33.496C65.7129 34.096 64.2489 34.396 62.6409 34.396C59.4969 34.396 57.1449 33.472 55.5849 31.624C54.0249 29.752 53.2449 27.256 53.2449 24.136ZM74.1047 8.008L71.5487 7.54V5.344L78.7847 4.48H78.8927L79.9367 5.236L79.9727 13.048L79.6847 16.252C80.4287 15.556 81.4127 14.944 82.6367 14.416C83.8607 13.864 85.2047 13.588 86.6687 13.588C88.1807 13.588 89.3567 13.864 90.1967 14.416C91.0367 14.968 91.6247 15.808 91.9607 16.936C92.2967 18.064 92.4647 19.564 92.4647 21.436V31.3L94.6607 31.624V34H84.6527V31.624L86.5607 31.3V21.472C86.5607 19.792 86.3807 18.628 86.0207 17.98C85.6607 17.308 84.9287 16.972 83.8247 16.972C83.1527 16.972 82.4807 17.128 81.8087 17.44C81.1367 17.728 80.5727 18.088 80.1167 18.52V31.3L82.0967 31.624V34H72.2327V31.624L74.1047 31.3V8.008ZM96.3439 28.24C96.3439 26.128 97.4119 24.508 99.5479 23.38C101.708 22.252 104.54 21.676 108.044 21.652V20.932C108.044 20.068 107.948 19.384 107.756 18.88C107.564 18.376 107.216 18.004 106.712 17.764C106.208 17.5 105.464 17.368 104.48 17.368C103.304 17.368 102.248 17.512 101.312 17.8C100.4 18.064 99.4399 18.424 98.4319 18.88L97.2079 16.288C97.5919 15.976 98.2159 15.604 99.0799 15.172C99.9439 14.716 100.976 14.332 102.176 14.02C103.4 13.684 104.672 13.516 105.992 13.516C107.912 13.516 109.412 13.768 110.492 14.272C111.596 14.776 112.376 15.556 112.832 16.612C113.312 17.668 113.552 19.108 113.552 20.932V31.624H115.424V33.892C114.872 34.012 114.104 34.132 113.12 34.252C112.136 34.372 111.296 34.432 110.6 34.432C109.688 34.432 109.076 34.3 108.764 34.036C108.476 33.772 108.332 33.244 108.332 32.452V31.624C107.732 32.344 106.928 32.992 105.92 33.568C104.912 34.12 103.748 34.396 102.428 34.396C101.3 34.396 100.268 34.156 99.3319 33.676C98.4199 33.172 97.6879 32.464 97.1359 31.552C96.6079 30.616 96.3439 29.512 96.3439 28.24ZM105.236 31.084C105.668 31.084 106.148 30.964 106.676 30.724C107.204 30.46 107.66 30.148 108.044 29.788V24.064C106.172 24.064 104.78 24.4 103.868 25.072C102.98 25.744 102.536 26.608 102.536 27.664C102.536 28.744 102.776 29.584 103.256 30.184C103.736 30.784 104.396 31.084 105.236 31.084ZM117.415 31.624L119.611 31.3V17.764L117.487 17.116V14.308L123.463 13.516H123.571L124.579 14.272V15.136L124.471 18.124H124.579C124.747 17.572 125.131 16.936 125.731 16.216C126.331 15.472 127.087 14.836 127.999 14.308C128.935 13.756 129.943 13.48 131.023 13.48C131.647 13.48 132.127 13.564 132.463 13.732V19.996C132.079 19.708 131.659 19.48 131.203 19.312C130.771 19.144 130.207 19.06 129.511 19.06C128.647 19.06 127.867 19.18 127.171 19.42C126.475 19.636 125.923 19.888 125.515 20.176V31.3L129.475 31.66V34H117.415V31.624ZM142.128 34.396C139.824 34.396 137.952 33.568 136.512 31.912C135.072 30.256 134.352 27.772 134.352 24.46C134.352 22.468 134.76 20.644 135.576 18.988C136.416 17.308 137.64 15.976 139.248 14.992C140.88 13.984 142.848 13.48 145.152 13.48C145.848 13.48 146.568 13.564 147.312 13.732V8.008L143.856 7.504V5.2L151.812 4.48H151.992L153.072 5.344V31.588H154.944V33.892C153.096 34.252 151.56 34.432 150.336 34.432C149.496 34.432 148.884 34.288 148.5 34C148.14 33.736 147.96 33.208 147.96 32.416V31.516C147.384 32.356 146.556 33.052 145.476 33.604C144.396 34.132 143.28 34.396 142.128 34.396ZM144.288 31.156C144.96 31.156 145.548 31.024 146.052 30.76C146.58 30.472 147 30.136 147.312 29.752V16.72C147.144 16.504 146.832 16.324 146.376 16.18C145.944 16.036 145.476 15.964 144.972 15.964C143.628 15.964 142.56 16.612 141.768 17.908C140.976 19.18 140.58 21.268 140.58 24.172C140.58 26.548 140.916 28.312 141.588 29.464C142.26 30.592 143.16 31.156 144.288 31.156ZM185.156 23.272C185.156 25.336 184.736 27.22 183.896 28.924C183.056 30.604 181.856 31.936 180.296 32.92C178.76 33.904 176.996 34.396 175.004 34.396C174.332 34.396 173.624 34.336 172.88 34.216C172.136 34.12 171.524 33.988 171.044 33.82L171.116 36.88V40.768L175.112 41.128V42.712H165.464V41.128L168.236 40.768V16.396L165.428 15.784V14.164L170.036 13.588H170.108L170.756 14.164V16.36C171.524 15.568 172.46 14.896 173.564 14.344C174.668 13.768 175.904 13.48 177.272 13.48C178.664 13.48 179.96 13.828 181.16 14.524C182.36 15.22 183.32 16.3 184.04 17.764C184.784 19.228 185.156 21.064 185.156 23.272ZM176.084 15.676C175.052 15.676 174.092 15.892 173.204 16.324C172.316 16.756 171.62 17.236 171.116 17.764V31.48C171.308 31.792 171.788 32.08 172.556 32.344C173.348 32.584 174.212 32.704 175.148 32.704C177.212 32.704 178.868 31.948 180.116 30.436C181.388 28.9 182.024 26.644 182.024 23.668C182.024 21.004 181.46 19.012 180.332 17.692C179.228 16.348 177.812 15.676 176.084 15.676ZM188.649 28.744C188.649 26.416 189.801 24.736 192.104 23.704C194.409 22.648 197.277 22.084 200.709 22.012V20.896C200.709 19.672 200.577 18.712 200.313 18.016C200.073 17.296 199.641 16.78 199.017 16.468C198.393 16.132 197.517 15.964 196.389 15.964C195.165 15.964 194.049 16.156 193.041 16.54C192.057 16.9 191.097 17.344 190.161 17.872L189.369 16.288C189.633 16.048 190.185 15.712 191.025 15.28C191.865 14.848 192.825 14.464 193.905 14.128C194.985 13.792 196.029 13.624 197.037 13.624C198.669 13.624 199.953 13.852 200.889 14.308C201.849 14.764 202.533 15.496 202.941 16.504C203.373 17.512 203.589 18.868 203.589 20.572V32.452H205.82V33.784C204.501 34.144 203.385 34.324 202.473 34.324C201.897 34.324 201.501 34.228 201.285 34.036C201.069 33.868 200.961 33.46 200.961 32.812V31.48C200.097 32.248 199.149 32.932 198.117 33.532C197.109 34.108 195.957 34.396 194.661 34.396C192.933 34.396 191.493 33.916 190.341 32.956C189.213 31.996 188.649 30.592 188.649 28.744ZM195.741 32.272C196.413 32.272 197.217 32.056 198.153 31.624C199.089 31.192 199.941 30.676 200.709 30.076V23.704C197.805 23.728 195.597 24.16 194.085 25C192.597 25.84 191.853 26.968 191.853 28.384C191.853 29.752 192.201 30.748 192.897 31.372C193.593 31.972 194.541 32.272 195.741 32.272ZM211.424 31.156C211.688 31.564 212.24 31.924 213.08 32.236C213.92 32.548 214.82 32.704 215.78 32.704C218.708 32.704 220.172 31.624 220.172 29.464C220.172 28.48 219.764 27.688 218.948 27.088C218.132 26.464 216.74 25.78 214.772 25.036C212.828 24.34 211.412 23.512 210.524 22.552C209.636 21.592 209.192 20.308 209.192 18.7C209.192 17.668 209.504 16.768 210.128 16C210.776 15.232 211.628 14.644 212.684 14.236C213.764 13.804 214.928 13.588 216.176 13.588C217.4 13.588 218.42 13.696 219.236 13.912C220.076 14.128 220.904 14.392 221.72 14.704V18.988H219.956L219.308 16.36C219.14 16.048 218.708 15.784 218.012 15.568C217.34 15.352 216.596 15.244 215.78 15.244C214.628 15.244 213.692 15.508 212.972 16.036C212.252 16.54 211.892 17.224 211.892 18.088C211.892 18.856 212.072 19.492 212.432 19.996C212.792 20.5 213.236 20.908 213.764 21.22C214.292 21.508 215.024 21.844 215.96 22.228L216.644 22.516C218.012 23.044 219.116 23.548 219.956 24.028C220.796 24.484 221.492 25.096 222.044 25.864C222.596 26.608 222.872 27.544 222.872 28.672C222.872 30.448 222.188 31.852 220.82 32.884C219.476 33.892 217.676 34.396 215.42 34.396C214.388 34.396 213.212 34.228 211.892 33.892C210.572 33.556 209.588 33.22 208.94 32.884V28.348H210.884L211.424 31.156ZM232.559 34.396C231.287 34.396 230.327 34.108 229.679 33.532C229.031 32.932 228.707 31.876 228.707 30.364V16.144H225.971V14.74C227.171 14.476 227.867 14.284 228.059 14.164C228.419 13.972 228.683 13.6 228.851 13.048C228.995 12.688 229.187 12.04 229.427 11.104C229.667 10.168 229.847 9.436 229.967 8.908H231.623V14.02H237.995V16.144H231.623V27.808C231.623 29.2 231.671 30.184 231.767 30.76C231.863 31.312 232.055 31.672 232.343 31.84C232.631 32.008 233.135 32.092 233.855 32.092C234.551 32.092 235.331 31.996 236.195 31.804C237.059 31.612 237.707 31.408 238.139 31.192L238.607 32.56C238.055 32.992 237.143 33.412 235.871 33.82C234.599 34.204 233.495 34.396 232.559 34.396ZM249.704 34.396C246.92 34.396 244.772 33.448 243.26 31.552C241.772 29.632 241.028 27.088 241.028 23.92C241.028 21.88 241.424 20.068 242.216 18.484C243.008 16.9 244.1 15.676 245.492 14.812C246.908 13.924 248.492 13.48 250.244 13.48C252.38 13.48 254.036 14.092 255.212 15.316C256.412 16.54 257.06 18.304 257.156 20.608C257.156 22.096 257.084 23.152 256.94 23.776H244.124C244.124 26.296 244.688 28.36 245.816 29.968C246.968 31.552 248.576 32.344 250.64 32.344C251.648 32.344 252.68 32.164 253.736 31.804C254.792 31.444 255.608 31.012 256.184 30.508L256.76 31.84C256.064 32.56 255.044 33.172 253.7 33.676C252.38 34.156 251.048 34.396 249.704 34.396ZM253.916 22.084C253.988 21.58 254.024 21.052 254.024 20.5C254 18.916 253.616 17.656 252.872 16.72C252.152 15.784 251.036 15.316 249.524 15.316C246.236 15.316 244.448 17.572 244.16 22.084H253.916ZM262.665 16.396L259.893 15.784V14.164L264.465 13.588H264.573L265.257 14.164V15.748L265.221 16.648C266.109 15.88 267.285 15.172 268.749 14.524C270.213 13.876 271.569 13.552 272.817 13.552C274.353 13.552 275.529 13.852 276.345 14.452C277.185 15.028 277.761 15.928 278.073 17.152C278.409 18.352 278.577 19.972 278.577 22.012V32.2L281.277 32.452V34H273.249V32.452L275.661 32.2V21.976C275.661 20.464 275.553 19.276 275.337 18.412C275.145 17.548 274.749 16.9 274.149 16.468C273.573 16.012 272.721 15.784 271.593 15.784C270.633 15.784 269.589 16.024 268.461 16.504C267.357 16.984 266.397 17.548 265.581 18.196V32.164L268.209 32.452V34H260.253V32.452L262.665 32.164V16.396ZM292.665 34.396C289.881 34.396 287.733 33.448 286.221 31.552C284.733 29.632 283.989 27.088 283.989 23.92C283.989 21.88 284.385 20.068 285.177 18.484C285.969 16.9 287.061 15.676 288.453 14.812C289.869 13.924 291.453 13.48 293.205 13.48C295.341 13.48 296.997 14.092 298.173 15.316C299.373 16.54 300.021 18.304 300.117 20.608C300.117 22.096 300.045 23.152 299.901 23.776H287.085C287.085 26.296 287.649 28.36 288.777 29.968C289.929 31.552 291.537 32.344 293.601 32.344C294.609 32.344 295.641 32.164 296.697 31.804C297.753 31.444 298.569 31.012 299.145 30.508L299.721 31.84C299.025 32.56 298.005 33.172 296.661 33.676C295.341 34.156 294.009 34.396 292.665 34.396ZM296.877 22.084C296.949 21.58 296.985 21.052 296.985 20.5C296.961 18.916 296.577 17.656 295.833 16.72C295.113 15.784 293.997 15.316 292.485 15.316C289.197 15.316 287.409 17.572 287.121 22.084H296.877ZM306.31 31.156C306.574 31.564 307.126 31.924 307.966 32.236C308.806 32.548 309.706 32.704 310.666 32.704C313.594 32.704 315.058 31.624 315.058 29.464C315.058 28.48 314.65 27.688 313.834 27.088C313.018 26.464 311.626 25.78 309.658 25.036C307.714 24.34 306.298 23.512 305.41 22.552C304.522 21.592 304.078 20.308 304.078 18.7C304.078 17.668 304.39 16.768 305.014 16C305.662 15.232 306.514 14.644 307.57 14.236C308.65 13.804 309.814 13.588 311.062 13.588C312.286 13.588 313.306 13.696 314.122 13.912C314.962 14.128 315.79 14.392 316.606 14.704V18.988H314.842L314.194 16.36C314.026 16.048 313.594 15.784 312.898 15.568C312.226 15.352 311.482 15.244 310.666 15.244C309.514 15.244 308.578 15.508 307.858 16.036C307.138 16.54 306.778 17.224 306.778 18.088C306.778 18.856 306.958 19.492 307.318 19.996C307.678 20.5 308.122 20.908 308.65 21.22C309.178 21.508 309.91 21.844 310.846 22.228L311.53 22.516C312.898 23.044 314.002 23.548 314.842 24.028C315.682 24.484 316.378 25.096 316.93 25.864C317.482 26.608 317.758 27.544 317.758 28.672C317.758 30.448 317.074 31.852 315.706 32.884C314.362 33.892 312.562 34.396 310.306 34.396C309.274 34.396 308.098 34.228 306.778 33.892C305.458 33.556 304.474 33.22 303.826 32.884V28.348H305.77L306.31 31.156Z"
                        fill={fill}
                    />

                    <path
                        d="M4.644 12.616L18.468 21.184V24.28L4.788 32.812L3.168 30.58L15.876 22.732L3.168 14.92L4.644 12.616ZM23.3859 40.552V37.888H41.3859V40.552H23.3859Z"
                        fill={fill}
                    />
                </g>
            </svg>
        </LogoContainer>
    );
};

export default Logo;

const LogoContainer = styled.div`
    .Logo__Mobile {
        display: none;
    }
    ${mediaqueries.tablet`
    .Logo__Desktop {
      display: none;
    }

    .Logo__Mobile{
      display: block;
    }
  `}
`;
