const EyeIcon = ({ onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M10.6326 8.5C10.6326 9.76219 9.61268 10.7821 8.3505 10.7821C7.08831 10.7821 6.06836 9.76219 6.06836 8.5C6.06836 7.23781 7.08831 6.21786 8.3505 6.21786C9.61268 6.21786 10.6326 7.23781 10.6326 8.5Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M8.35042 13.7718C10.6007 13.7718 12.698 12.4459 14.1578 10.151C14.7315 9.25219 14.7315 7.74139 14.1578 6.84256C12.698 4.54767 10.6007 3.22174 8.35042 3.22174C6.10016 3.22174 4.00289 4.54767 2.54308 6.84256C1.96936 7.74139 1.96936 9.25219 2.54308 10.151C4.00289 12.4459 6.10016 13.7718 8.35042 13.7718Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

const HideEye = ({ onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
            <path d="M9.96329 6.88721L6.7377 10.1128C6.32335 9.69844 6.06836 9.13109 6.06836 8.5C6.06836 7.23781 7.08831 6.21786 8.3505 6.21786C8.98159 6.21786 9.54894 6.47285 9.96329 6.88721Z" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12.0605 4.52858C10.9449 3.68713 9.66998 3.22815 8.35042 3.22815C6.10016 3.22815 4.00289 4.55408 2.54308 6.84897C1.96936 7.7478 1.96936 9.2586 2.54308 10.1574C3.04668 10.9479 3.63315 11.63 4.27062 12.1782" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.06836 13.3001C6.79507 13.6061 7.56641 13.7718 8.3505 13.7718C10.6008 13.7718 12.698 12.4459 14.1578 10.151C14.7316 9.2522 14.7316 7.7414 14.1578 6.84257C13.9475 6.51108 13.718 6.19872 13.4821 5.90549" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M10.5877 8.94623C10.422 9.84506 9.68887 10.5781 8.79004 10.7439" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.73747 10.1128L1.97559 14.8747" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M14.7248 2.12531L9.96289 6.88719" stroke="#999999" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    )
}

const WinIcon = ({ onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="36" height="49" viewBox="0 0 36 49" fill="none">
            <path d="M11.0946 17.1482C9.94681 14.8606 8.70199 12.6 7.88288 10.1669C7.47063 8.94364 7.1473 7.67456 7.05839 6.38393C6.97756 5.20108 7.053 3.92392 7.65924 2.87849C8.18196 1.97316 9.04687 1.278 10.0923 1.10556C12.2371 0.752587 14.0127 2.51744 14.7968 4.34156C15.2845 5.47052 15.4892 6.70727 15.6132 7.92515C15.7425 9.17805 15.7775 10.439 15.8611 11.6973C15.9446 12.9556 16.0578 14.1304 16.3784 15.3052C16.7314 16.6093 17.3726 18.0212 18.8519 18.2798C20.3742 18.5439 21.708 17.3125 22.2981 16.0165C22.8154 14.8768 22.9636 13.5942 23.0687 12.3602C23.1657 11.2312 23.1899 10.0834 23.4082 8.96789C23.8123 6.89318 24.6045 4.82117 26.1134 3.33923C27.2477 2.22644 28.9694 1.73066 30.4514 2.4366C31.7797 3.06979 32.4695 4.48167 32.5692 5.89894C32.6851 7.52637 32.0653 9.12417 31.3352 10.5468C31.0388 11.1261 30.7127 11.692 30.3759 12.2497C29.1958 14.2166 27.9914 16.4207 27.9725 18.7783C27.9483 22.2191 31.284 23.7279 33.1108 26.1125C33.2617 26.3119 33.4045 26.5167 33.5311 26.7295C34.2882 27.9986 34.6762 29.4509 34.7301 30.9248C34.7732 32.1292 34.6008 33.3336 34.2909 34.4949C32.8791 39.7625 29.4248 43.9685 24.4428 46.2102C22.1849 47.226 19.7626 47.6059 17.2918 47.7945C11.3344 48.2472 5.21001 45.3534 2.49942 39.8864C1.9794 38.8356 1.5914 37.7174 1.36507 36.5669C0.968989 34.5541 1.06329 32.2369 2.55331 30.6715C3.25925 29.9305 4.24272 29.4617 5.2639 29.3431C6.82397 29.1626 8.20352 29.9898 9.26512 31.0649C9.97106 31.7816 10.5315 32.6088 11.0812 33.4467C12.2559 35.2358 13.4792 38.1027 11.6524 39.9322C10.1597 41.4249 7.85324 40.8941 6.26623 39.8972C5.32048 39.3017 4.48521 38.5096 3.75502 37.6662C3.02484 36.8228 2.43745 35.8906 2.13029 34.8317C1.67493 33.2662 1.95515 31.4151 3.1407 30.2996C3.93824 29.5506 5.08068 29.2003 6.16923 29.3162C7.64308 29.4725 8.72354 30.4667 9.69892 31.5067C10.8575 32.7435 12.9888 36.5211 13.2125 36.9306C13.5762 37.5961 14.5058 37.4722 15.1605 37.095C15.8153 36.7178 16.2491 36.0361 16.5077 35.3247C17.2245 33.3417 16.7368 31.1214 15.9608 29.1626C15.2063 27.2549 14.1744 25.4443 12.8164 23.9085C11.9703 22.952 10.9249 22.0655 9.6612 21.8742C8.75857 21.7368 7.80474 21.9847 7.07994 22.5424C6.35514 23.1001 5.87823 23.9624 5.78393 24.8704C5.67884 25.897 6.05067 26.9262 6.6192 27.7884C7.31436 28.842 8.23046 29.6934 9.06035 30.6257C9.6127 31.2481 10.0788 31.8974 10.5477 32.5764C11.5311 33.9964 12.361 35.5134 13.2475 36.9953C14.6838 38.9128 16.0357 40.4899 17.8091 42.6724C16.8428 41.4903 16.5212 39.4337 16.6505 37.9114C16.8634 35.4083 17.766 33.4871 19.5982 31.5687C21.6568 29.4159 25.3913 28.5698 27.4633 28.0606C26.5391 28.3139 24.1895 28.6237 23.0579 28.7207C21.0936 28.8878 18.8681 28.8231 17.0197 28.0714C15.6482 27.5136 14.266 26.3146 13.8888 24.8327C13.5304 23.4154 14.2309 21.9793 15.5 21.2976C16.2652 20.888 17.1544 20.8746 18.0004 20.9554C18.8465 21.0362 19.741 21.2383 20.6113 21.3838C21.972 21.6101 23.4351 21.6452 24.7554 21.1817" stroke="black" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square" />
            <path d="M9.22266 6.65746L12.9155 5.65031" stroke="black" stroke-width="2" stroke-miterlimit="10" />
        </svg>
    )
}

const ThreeDots = ({ onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="18" viewBox="0 0 24 18" fill="none">
            <path d="M1.26074 1.64287H22.0521" stroke="#27282B" stroke-width="2" stroke-linecap="square" />
            <path d="M1.26074 9.3004H22.0521" stroke="#27282B" stroke-width="2" stroke-linecap="square" />
            <path d="M1.26074 16.9579H22.0521" stroke="#27282B" stroke-width="2" stroke-linecap="square" />
        </svg>
    )
}

const CrossIcon = ({ onClick, className }) => {
    return (
        <svg onClick={onClick} className={className} xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
            <path d="M7.54004 7.73679L22.2417 22.4385" stroke="#333333" stroke-width="2" stroke-linecap="square" />
            <path d="M22.3398 7.63834L7.63814 22.34" stroke="#333333" stroke-width="2" stroke-linecap="square" />
            <path d="M7.54004 7.73679L22.2417 22.4385" stroke="#333333" stroke-width="2" stroke-linecap="square" />
        </svg>
    )
}

export {
    CrossIcon,
    EyeIcon,
    HideEye,
    WinIcon,
    ThreeDots,
}
