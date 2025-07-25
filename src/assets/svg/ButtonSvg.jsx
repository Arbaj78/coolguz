const ButtonSvg = (white) => (
  <>
    <svg
      className="absolute top-0 left-0 transition-all duration-300"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <defs>
        <linearGradient id="btn-left-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#F97316" />    {/* orange-500 */}
          <stop offset="100%" stopColor="#EA580C" />  {/* orange-600 */}
        </linearGradient>
      </defs>
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-left-orange)"}
        strokeWidth="2"
        d="M21,43.00005 L8.11111,43.00005 C4.18375,43.00005 1,39.58105 1,35.36365 L1,8.63637 C1,4.41892 4.18375,1 8.11111,1 L21,1"
        className="transition-all duration-300"
      />
    </svg>

    <svg
      className="absolute top-0 left-[1.3125rem] w-[calc(100%-2.625rem)] transition-all duration-300"
      height="44"
      viewBox="0 0 100 44"
      preserveAspectRatio="none"
      fill={white ? "white" : "none"}
    >
      <defs>
        <linearGradient id="btn-top-orange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#F97316" />    {/* orange-500 */}
          <stop offset="100%" stopColor="#EA580C" />  {/* orange-600 */}
        </linearGradient>
        <linearGradient id="btn-bottom-orange" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#EA580C" />    {/* orange-600 */}
          <stop offset="100%" stopColor="#C2410C" />  {/* orange-700 */}
        </linearGradient>
      </defs>
      {white ? (
        <polygon
          fill="white"
          fillRule="nonzero"
          points="100 0 100 44 0 44 0 0"
          className="transition-all duration-300"
        />
      ) : (
        <>
          <polygon
            fill="url(#btn-top-orange)"
            fillRule="nonzero"
            points="100 42 100 44 0 44 0 42"
            className="transition-all duration-300"
          />
          <polygon
            fill="url(#btn-bottom-orange)"
            fillRule="nonzero"
            points="100 0 100 2 0 2 0 0"
            className="transition-all duration-300"
          />
        </>
      )}
    </svg>

    <svg
      className="absolute top-0 right-0 transition-all duration-300"
      width="21"
      height="44"
      viewBox="0 0 21 44"
    >
      <defs>
        <linearGradient id="btn-right-orange" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#EA580C" />    {/* orange-600 */}
          <stop offset="100%" stopColor="#F97316" />  {/* orange-500 */}
        </linearGradient>
      </defs>
      <path
        fill={white ? "white" : "none"}
        stroke={white ? "white" : "url(#btn-right-orange)"}
        strokeWidth="2"
        d="M0,43.00005 L5.028,43.00005 L12.24,43.00005 C16.526,43.00005 20,39.58105 20,35.36365 L20,16.85855 C20,14.59295 18.978,12.44425 17.209,10.99335 L7.187,2.77111 C5.792,1.62675 4.034,1 2.217,1 L0,1"
        className="transition-all duration-300"
      />
    </svg>
  </>
);

export default ButtonSvg;