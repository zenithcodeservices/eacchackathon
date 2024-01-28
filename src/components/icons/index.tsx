type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  logo: (props: IconProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" {...props}>
      <rect width="256" height="256" fill="none" />
      <line
        x1="208"
        y1="128"
        x2="128"
        y2="208"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <line
        x1="192"
        y1="40"
        x2="40"
        y2="192"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </svg>
  ),
  openai: (props: IconProps) => (
    <svg {...props} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.282 9.821a5.985 5.985 0 0 0-.516-4.91 6.046 6.046 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a5.985 5.985 0 0 0-3.998 2.9 6.046 6.046 0 0 0 .743 7.097 5.98 5.98 0 0 0 .51 4.911 6.051 6.051 0 0 0 6.515 2.9A5.985 5.985 0 0 0 13.26 24a6.056 6.056 0 0 0 5.772-4.206 5.99 5.99 0 0 0 3.997-2.9 6.056 6.056 0 0 0-.747-7.073zM13.26 22.43a4.476 4.476 0 0 1-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 0 0 .392-.681v-6.737l2.02 1.168a.071.071 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494zM3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085 4.783 2.759a.771.771 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646zM2.34 7.896a4.485 4.485 0 0 1 2.366-1.973V11.6a.766.766 0 0 0 .388.676l5.815 3.355-2.02 1.168a.076.076 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 0 0-.785 0L9.409 9.23V6.897a.066.066 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.795.795 0 0 0-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/></svg>
  ),
  twitter: (props: IconProps) => (
    <svg
      {...props}
      height="23"
      viewBox="0 0 1200 1227"
      width="23"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z" />
    </svg>
  ),
  robot: (props: IconProps) => (
    <svg {...props} width="22" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M11.5 5V5.5H12H16C16.663 5.5 17.2989 5.76339 17.7678 6.23223C18.2366 6.70107 18.5 7.33696 18.5 8V17C18.5 17.663 18.2366 18.2989 17.7678 18.7678C17.2989 19.2366 16.663 19.5 16 19.5H6C5.33696 19.5 4.70107 19.2366 4.23223 18.7678C3.76339 18.2989 3.5 17.663 3.5 17V8C3.5 7.33696 3.76339 6.70107 4.23223 6.23223C4.70107 5.76339 5.33696 5.5 6 5.5H10H10.5V5V3.72V3.43132L10.25 3.28698C10.0233 3.1561 9.83478 2.96816 9.7032 2.74186C9.57189 2.516 9.50185 2.25978 9.5 1.99855C9.50038 1.60125 9.65838 1.2203 9.93934 0.93934C10.2206 0.658035 10.6022 0.5 11 0.5C11.3978 0.5 11.7794 0.658035 12.0607 0.93934C12.3416 1.2203 12.4996 1.60124 12.5 1.99854C12.4981 2.25977 12.4281 2.516 12.2968 2.74186C12.1652 2.96816 11.9767 3.1561 11.75 3.28698L11.5 3.43132V3.72V5ZM13.2051 7.12127L13.3604 6.5H12.72H9.28H8.63961L8.79493 7.12127L9.29493 9.12127L9.38961 9.5H9.78H12.22H12.6104L12.7051 9.12127L13.2051 7.12127ZM7.70611 6.88297L7.61391 6.5H7.22H6C5.60218 6.5 5.22064 6.65803 4.93934 6.93934C4.65804 7.22064 4.5 7.60217 4.5 8V17C4.5 17.3978 4.65804 17.7794 4.93934 18.0607C5.22064 18.342 5.60218 18.5 6 18.5H16C16.3978 18.5 16.7794 18.342 17.0607 18.0607C17.342 17.7794 17.5 17.3978 17.5 17V8C17.5 7.60218 17.342 7.22064 17.0607 6.93934C16.7794 6.65803 16.3978 6.5 16 6.5H14.78H14.3861L14.2939 6.88297L13.5146 10.1202C13.5145 10.1206 13.5144 10.1209 13.5143 10.1213C13.4868 10.2318 13.4223 10.3296 13.3317 10.3985C13.2407 10.4676 13.1288 10.5035 13.0146 10.5002L13.0073 10.5H13H9H8.99272L8.98544 10.5002C8.87122 10.5035 8.75931 10.4676 8.66834 10.3985C8.57766 10.3296 8.51324 10.2318 8.48571 10.1213C8.48562 10.1209 8.48553 10.1206 8.48544 10.1202L7.70611 6.88297ZM7.72221 13.5843C7.80444 13.5293 7.90111 13.5 8 13.5C8.13261 13.5 8.25978 13.5527 8.35355 13.6464C8.44732 13.7402 8.5 13.8674 8.5 14C8.5 14.0989 8.47068 14.1956 8.41574 14.2778C8.36079 14.36 8.28271 14.4241 8.19134 14.4619C8.09998 14.4998 7.99944 14.5097 7.90246 14.4904C7.80546 14.4711 7.71637 14.4235 7.64645 14.3536C7.57652 14.2836 7.5289 14.1945 7.50961 14.0975C7.49031 14.0006 7.50022 13.9 7.53806 13.8087C7.5759 13.7173 7.63999 13.6392 7.72221 13.5843ZM0.646446 12.6464C0.740215 12.5527 0.867392 12.5 1 12.5C1.13261 12.5 1.25979 12.5527 1.35355 12.6464C1.44732 12.7402 1.5 12.8674 1.5 13V15C1.5 15.1326 1.44732 15.2598 1.35355 15.3536C1.25979 15.4473 1.13261 15.5 1 15.5C0.867391 15.5 0.740214 15.4473 0.646446 15.3536C0.552679 15.2598 0.5 15.1326 0.5 15V13C0.5 12.8674 0.552678 12.7402 0.646446 12.6464ZM20.6464 12.6464C20.7402 12.5527 20.8674 12.5 21 12.5C21.1326 12.5 21.2598 12.5527 21.3536 12.6464C21.4473 12.7402 21.5 12.8674 21.5 13V15C21.5 15.1326 21.4473 15.2598 21.3536 15.3536C21.2598 15.4473 21.1326 15.5 21 15.5C20.8674 15.5 20.7402 15.4473 20.6464 15.3536C20.5527 15.2598 20.5 15.1326 20.5 15V13C20.5 12.8674 20.5527 12.7402 20.6464 12.6464ZM13.7222 13.5843C13.8044 13.5293 13.9011 13.5 14 13.5C14.1326 13.5 14.2598 13.5527 14.3536 13.6464C14.4473 13.7402 14.5 13.8674 14.5 14C14.5 14.0989 14.4707 14.1956 14.4157 14.2778C14.3608 14.36 14.2827 14.4241 14.1913 14.4619C14.1 14.4998 13.9994 14.5097 13.9025 14.4904C13.8055 14.4711 13.7164 14.4235 13.6464 14.3536C13.5765 14.2836 13.5289 14.1945 13.5096 14.0975C13.4903 14.0006 13.5002 13.9 13.5381 13.8087C13.5759 13.7173 13.64 13.6392 13.7222 13.5843Z"/>
    </svg>

  ),
  brokenWand2: (props: IconProps) => (
    <svg {...props} width="124" height="113" viewBox="0 0 124 113" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M110.334 63V78.3333" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M110.666 34V41.6667" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M118.667 70.668H102" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M114.833 37.832H106.5" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6.4951 79.2817L39 49C39 49 40.25 55.75 43.5 57.75C46.75 59.75 53.5 58.75 53.5 58.75L18.9951 90.7817C18.5292 91.2221 17.972 91.5723 17.3566 91.8113C16.7411 92.0504 16.0798 92.1736 15.4118 92.1736C14.7437 92.1736 14.0824 92.0504 13.467 91.8113C12.8515 91.5723 12.2944 91.2221 11.8284 90.7817L6.4951 85.875C6.02142 85.4437 5.64539 84.9302 5.38876 84.3644C5.13214 83.7985 5 83.1915 5 82.5783C5 81.9652 5.13214 81.3581 5.38876 80.7923C5.64539 80.2264 6.02142 79.713 6.4951 79.2817Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M104.766 50.0777L104.562 57.3219C104.552 57.9644 104.415 58.5879 104.158 59.1555C103.901 59.7231 103.53 60.2233 103.066 60.6265C102.602 61.0297 102.055 61.3278 101.458 61.5032C100.86 61.6785 100.223 61.7276 99.5857 61.6475L58.8646 56.5289C58.8646 56.5289 61.4001 50.6811 61.13 46.9409C60.8599 43.2006 58.4243 40.0178 58.4243 40.0178L100.064 44.6689C100.701 44.7368 101.328 44.9311 101.91 45.2404C102.491 45.5497 103.016 45.9679 103.453 46.4709C103.89 46.9739 104.231 47.5516 104.457 48.1707C104.682 48.7898 104.787 49.438 104.766 50.0777Z" stroke="black" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M74.2461 41.832L73.6283 58.2692" stroke="black" strokeWidth="4"/>
      <path d="M39 44L34.5 39.5" stroke="black" strokeWidth="4"/>
      <path d="M44.2743 40.2249L42.9512 34" stroke="black" strokeWidth="4"/>
      <path d="M51.8178 39.1749L53.3574 33" stroke="black" strokeWidth="4"/>
    </svg>

  ),
  GPU: (props: IconProps) => (
    <svg {...props} id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 104.91"><title>gpu</title><path d="M32.05,18.59H90.83a12.71,12.71,0,0,1,9,3.76h0a12.76,12.76,0,0,1,3.76,9V73.52a12.78,12.78,0,0,1-3.77,9l0,0a12.77,12.77,0,0,1-9,3.76H32.05a12.76,12.76,0,0,1-9-3.77h0a12.76,12.76,0,0,1-3.76-9V31.39a12.75,12.75,0,0,1,3.76-9l0,0a12.78,12.78,0,0,1,9-3.75Zm9.59,44a4.89,4.89,0,0,1-4.85-3,11.22,11.22,0,0,1-.9-3.21,28.31,28.31,0,0,1-.25-3.9A25.47,25.47,0,0,1,36,48.33a8.69,8.69,0,0,1,1.13-3.23A5.29,5.29,0,0,1,39.43,43a9.25,9.25,0,0,1,4-.73,26.58,26.58,0,0,1,2.73.12,18.75,18.75,0,0,1,2.14.35c.66.15,1.35.33,2.07.53v4.06c-.4-.07-.9-.14-1.51-.19s-1.29-.1-2-.14S45.25,47,44.4,47a4.48,4.48,0,0,0-2.31.47,2.44,2.44,0,0,0-1,1.68,18.48,18.48,0,0,0-.24,3.39,21.85,21.85,0,0,0,.13,2.7,4.77,4.77,0,0,0,.44,1.6,1.67,1.67,0,0,0,.8.78,2.68,2.68,0,0,0,1.15.22,13.49,13.49,0,0,0,1.78-.1c.52-.06.91-.12,1.18-.17V55H43.57V50.83c.4-.06.87-.1,1.41-.14s1.11-.07,1.7-.09,1.11,0,1.6,0H50l1.36,0V62.47H47.42l-.7-1.32a10,10,0,0,1-2,.94,8.73,8.73,0,0,1-3.06.51Zm12.66-.13v-20h8.77a10.13,10.13,0,0,1,2.09.23,4.65,4.65,0,0,1,2,.94,4.8,4.8,0,0,1,1.45,2.15,10.9,10.9,0,0,1,.55,3.83,11.79,11.79,0,0,1-.53,3.89,5.19,5.19,0,0,1-1.4,2.2,4.55,4.55,0,0,1-1.87,1,8,8,0,0,1-2,.25,9.74,9.74,0,0,1-1.06,0c-.37,0-.73-.08-1.08-.15s-.67-.12-1-.19l-.74-.14v6ZM59.52,52.3h3a1.17,1.17,0,0,0,.85-.29,1.7,1.7,0,0,0,.43-.87,7.31,7.31,0,0,0,.12-1.44,5.5,5.5,0,0,0-.15-1.4,1.84,1.84,0,0,0-.44-.85,1.13,1.13,0,0,0-.81-.28h-3V52.3ZM79.15,62.6A18.12,18.12,0,0,1,76,62.34a7.15,7.15,0,0,1-2.59-1,4.76,4.76,0,0,1-1.76-2,7.82,7.82,0,0,1-.64-3.42V42.49h5.22V55.85A1.86,1.86,0,0,0,76.61,57a2,2,0,0,0,1,.69,5.41,5.41,0,0,0,3.12,0,2.05,2.05,0,0,0,1-.69A1.92,1.92,0,0,0,82,55.85V42.49h5.22V55.88a8,8,0,0,1-.63,3.42,4.83,4.83,0,0,1-1.76,2,7.31,7.31,0,0,1-2.58,1,18.07,18.07,0,0,1-3.12.26Zm2.41,29.71h6.83a1.28,1.28,0,0,1,1.27,1.28v10a1.28,1.28,0,0,1-1.27,1.28H81.56a1.28,1.28,0,0,1-1.28-1.28v-10a1.28,1.28,0,0,1,1.28-1.28Zm-15.69,0H72.7A1.29,1.29,0,0,1,74,93.59v10a1.29,1.29,0,0,1-1.28,1.28H65.87a1.28,1.28,0,0,1-1.28-1.28v-10a1.28,1.28,0,0,1,1.28-1.28Zm-15.69,0H57a1.28,1.28,0,0,1,1.28,1.28v10A1.28,1.28,0,0,1,57,104.91H50.18a1.29,1.29,0,0,1-1.28-1.28v-10a1.29,1.29,0,0,1,1.28-1.28Zm-15.69,0h6.84a1.28,1.28,0,0,1,1.27,1.28v10a1.28,1.28,0,0,1-1.27,1.28H34.49a1.28,1.28,0,0,1-1.27-1.28v-10a1.28,1.28,0,0,1,1.27-1.28ZM81.56,0h6.83a1.27,1.27,0,0,1,1.27,1.28v10a1.27,1.27,0,0,1-1.27,1.28H81.56a1.28,1.28,0,0,1-1.28-1.28v-10A1.28,1.28,0,0,1,81.56,0ZM65.87,0H72.7A1.28,1.28,0,0,1,74,1.28v10a1.28,1.28,0,0,1-1.28,1.28H65.87a1.28,1.28,0,0,1-1.28-1.28v-10A1.28,1.28,0,0,1,65.87,0ZM50.18,0H57a1.28,1.28,0,0,1,1.28,1.28v10A1.28,1.28,0,0,1,57,12.59H50.18a1.28,1.28,0,0,1-1.28-1.28v-10A1.28,1.28,0,0,1,50.18,0ZM34.49,0h6.84A1.27,1.27,0,0,1,42.6,1.28v10a1.27,1.27,0,0,1-1.27,1.28H34.49a1.27,1.27,0,0,1-1.27-1.28v-10A1.27,1.27,0,0,1,34.49,0Zm75.8,56.36v6.83a1.28,1.28,0,0,0,1.28,1.28h10a1.28,1.28,0,0,0,1.28-1.28V56.36a1.28,1.28,0,0,0-1.28-1.28h-10a1.28,1.28,0,0,0-1.28,1.28Zm0-15.69v6.84a1.27,1.27,0,0,0,1.28,1.27h10a1.27,1.27,0,0,0,1.28-1.27V40.67a1.27,1.27,0,0,0-1.28-1.27h-10a1.27,1.27,0,0,0-1.28,1.27Zm0,31.38v6.83a1.28,1.28,0,0,0,1.28,1.28h10a1.28,1.28,0,0,0,1.28-1.28V72.05a1.28,1.28,0,0,0-1.28-1.28h-10a1.28,1.28,0,0,0-1.28,1.28Zm0-47.06v6.83a1.28,1.28,0,0,0,1.28,1.28h10a1.28,1.28,0,0,0,1.28-1.28V25a1.28,1.28,0,0,0-1.28-1.28h-10A1.28,1.28,0,0,0,110.29,25ZM12.59,56.36v6.83a1.28,1.28,0,0,1-1.28,1.28h-10A1.28,1.28,0,0,1,0,63.19V56.36a1.28,1.28,0,0,1,1.28-1.28h10a1.28,1.28,0,0,1,1.28,1.28Zm0-15.69v6.84a1.27,1.27,0,0,1-1.28,1.27h-10A1.27,1.27,0,0,1,0,47.51V40.67A1.27,1.27,0,0,1,1.28,39.4h10a1.27,1.27,0,0,1,1.28,1.27Zm0,31.38v6.83a1.28,1.28,0,0,1-1.28,1.28h-10A1.28,1.28,0,0,1,0,78.88V72.05a1.28,1.28,0,0,1,1.28-1.28h10a1.28,1.28,0,0,1,1.28,1.28Zm0-47.06v6.83a1.28,1.28,0,0,1-1.28,1.28h-10A1.28,1.28,0,0,1,0,31.82V25a1.28,1.28,0,0,1,1.28-1.28h10A1.28,1.28,0,0,1,12.59,25Zm78.24,0H32.05a6.34,6.34,0,0,0-4.5,1.86h0a6.34,6.34,0,0,0-1.86,4.5V73.52a6.38,6.38,0,0,0,6.37,6.37H90.83A6.34,6.34,0,0,0,95.32,78h0a6.3,6.3,0,0,0,1.87-4.49V31.39a6.38,6.38,0,0,0-1.87-4.5h0A6.32,6.32,0,0,0,90.83,25Z"/></svg>
  ),
  gitHub: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  radix: (props: IconProps) => (
    <svg viewBox="0 0 25 25" fill="none" {...props}>
      <path
        d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"
        fill="currentcolor"
      ></path>
      <path d="M12 0H4V8H12V0Z" fill="currentcolor"></path>
      <path
        d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"
        fill="currentcolor"
      ></path>
    </svg>
  ),
  aria: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z" />
    </svg>
  ),
  npm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z"
        fill="currentColor"
      />
    </svg>
  ),
  yarn: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12 0C5.375 0 0 5.375 0 12s5.375 12 12 12 12-5.375 12-12S18.625 0 12 0zm.768 4.105c.183 0 .363.053.525.157.125.083.287.185.755 1.154.31-.088.468-.042.551-.019.204.056.366.19.463.375.477.917.542 2.553.334 3.605-.241 1.232-.755 2.029-1.131 2.576.324.329.778.899 1.117 1.825.278.774.31 1.478.273 2.015a5.51 5.51 0 0 0 .602-.329c.593-.366 1.487-.917 2.553-.931.714-.009 1.269.445 1.353 1.103a1.23 1.23 0 0 1-.945 1.362c-.649.158-.95.278-1.821.843-1.232.797-2.539 1.242-3.012 1.39a1.686 1.686 0 0 1-.704.343c-.737.181-3.266.315-3.466.315h-.046c-.783 0-1.214-.241-1.45-.491-.658.329-1.51.19-2.122-.134a1.078 1.078 0 0 1-.58-1.153 1.243 1.243 0 0 1-.153-.195c-.162-.25-.528-.936-.454-1.946.056-.723.556-1.367.88-1.71a5.522 5.522 0 0 1 .408-2.256c.306-.727.885-1.348 1.32-1.737-.32-.537-.644-1.367-.329-2.21.227-.602.412-.936.82-1.08h-.005c.199-.074.389-.153.486-.259a3.418 3.418 0 0 1 2.298-1.103c.037-.093.079-.185.125-.283.31-.658.639-1.029 1.024-1.168a.94.94 0 0 1 .328-.06zm.006.7c-.507.016-1.001 1.519-1.001 1.519s-1.27-.204-2.266.871c-.199.218-.468.334-.746.44-.079.028-.176.023-.417.672-.371.991.625 2.094.625 2.094s-1.186.839-1.626 1.881c-.486 1.144-.338 2.261-.338 2.261s-.843.732-.899 1.487c-.051.663.139 1.2.343 1.515.227.343.51.176.51.176s-.561.653-.037.931c.477.25 1.283.394 1.71-.037.31-.31.371-1.001.486-1.283.028-.065.12.111.209.199.097.093.264.195.264.195s-.755.324-.445 1.066c.102.246.468.403 1.066.398.222-.005 2.664-.139 3.313-.296.375-.088.505-.283.505-.283s1.566-.431 2.998-1.357c.917-.598 1.293-.76 2.034-.936.612-.148.57-1.098-.241-1.084-.839.009-1.575.44-2.196.825-1.163.718-1.742.672-1.742.672l-.018-.032c-.079-.13.371-1.293-.134-2.678-.547-1.515-1.413-1.881-1.344-1.997.297-.5 1.038-1.297 1.334-2.78.176-.899.13-2.377-.269-3.151-.074-.144-.732.241-.732.241s-.616-1.371-.788-1.483a.271.271 0 0 0-.157-.046z"
        fill="currentColor"
      />
    </svg>
  ),
  pnpm: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M0 0v7.5h7.5V0zm8.25 0v7.5h7.498V0zm8.25 0v7.5H24V0zM8.25 8.25v7.5h7.498v-7.5zm8.25 0v7.5H24v-7.5zM0 16.5V24h7.5v-7.5zm8.25 0V24h7.498v-7.5zm8.25 0V24H24v-7.5z"
        fill="currentColor"
      />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"
        fill="currentColor"
      />
    </svg>
  ),
  tailwind: (props: IconProps) => (
    <svg viewBox="0 0 24 24" {...props}>
      <path
        d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"
        fill="currentColor"
      />
    </svg>
  ),
  google: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        fill="currentColor"
        d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
      />
    </svg>
  ),
  apple: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701"
        fill="currentColor"
      />
    </svg>
  ),
  paypal: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path
        d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.93 4.778-4.005 7.201-9.138 7.201h-2.19a.563.563 0 0 0-.556.479l-1.187 7.527h-.506l-.24 1.516a.56.56 0 0 0 .554.647h3.882c.46 0 .85-.334.922-.788.06-.26.76-4.852.816-5.09a.932.932 0 0 1 .923-.788h.58c3.76 0 6.705-1.528 7.565-5.946.36-1.847.174-3.388-.777-4.471z"
        fill="currentColor"
      />
    </svg>
  ),
  spinner: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  ),
  logs: (props: IconProps) => (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24.7398 5H7.46762V22.2722H10.608V19.1318V17.4831V8.1404H23.4366L29.4504 14.1543V17.4831V19.1318V22.2722H32.5908V12.851L24.7398 5ZM7.34375 34.8338V25.4146H9.46423V33.172H13.5124V34.8338H7.34375ZM18.6175 25.2484C20.0977 25.2484 21.2321 25.7182 22.021 26.6577C22.7787 27.5573 23.1576 28.7139 23.1576 30.1275C23.1576 31.6741 22.7101 32.9039 21.8149 33.8168C21.0438 34.6056 19.978 35 18.6175 35C17.1374 35 16.0029 34.5303 15.2141 33.5908C14.4563 32.6912 14.0775 31.5168 14.0775 30.0677C14.0775 28.5521 14.525 27.3379 15.4202 26.425C16.1957 25.6406 17.2615 25.2484 18.6175 25.2484ZM18.6109 26.9103C17.8442 26.9103 17.2526 27.2293 16.8361 27.8675C16.4594 28.4436 16.2711 29.1836 16.2711 30.0877C16.2711 31.1335 16.4948 31.9445 16.9424 32.5206C17.3634 33.0656 17.9218 33.3382 18.6175 33.3382C19.3798 33.3382 19.9736 33.0169 20.399 32.3743C20.7757 31.8071 20.964 31.0582 20.964 30.1275C20.964 29.1039 20.7402 28.304 20.2927 27.7279C19.8717 27.1828 19.3111 26.9103 18.6109 26.9103ZM32.6566 29.5625V34.3685C32.116 34.5502 31.7349 34.6699 31.5133 34.7275C30.8264 34.9092 30.0885 35 29.2997 35C27.7487 35 26.5677 34.61 25.7567 33.8301C24.8571 32.9704 24.4073 31.7716 24.4073 30.2339C24.4073 28.4657 24.9657 27.1318 26.0824 26.2322C26.8934 25.5764 27.988 25.2484 29.3662 25.2484C30.545 25.2484 31.6418 25.4634 32.6566 25.8932L31.9321 27.5484C31.4535 27.3091 31.0347 27.1418 30.6757 27.0465C30.3168 26.9512 29.9224 26.9036 29.4925 26.9036C28.4644 26.9036 27.7066 27.2382 27.2191 27.9073C26.807 28.4746 26.6009 29.2213 26.6009 30.1475C26.6009 31.2598 26.9111 32.0974 27.5316 32.6602C28.0279 33.1122 28.6439 33.3382 29.3795 33.3382C29.8094 33.3382 30.2171 33.2651 30.6026 33.1188V31.2243H28.9807V29.5625H32.6566Z"
        fill="#F8FAFC"
      />
    </svg>
  ),
};