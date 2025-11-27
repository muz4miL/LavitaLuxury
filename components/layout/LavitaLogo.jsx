export default function LavitaLogo({ className = '', width = 80, height = 100 }) {
    return (
        <svg
            width={width}
            height={height}
            viewBox="0 0 200 250"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Lavita Malam Jabba"
        >
            {/* Outer Frame - Top */}
            <line
                x1="80"
                y1="20"
                x2="80"
                y2="60"
                stroke="#C89B7B"
                strokeWidth="4"
                strokeLinecap="square"
            />
            <line
                x1="80"
                y1="60"
                x2="160"
                y2="60"
                stroke="#C89B7B"
                strokeWidth="4"
                strokeLinecap="square"
            />

            {/* Outer Frame - Right */}
            <line
                x1="160"
                y1="60"
                x2="160"
                y2="190"
                stroke="#C89B7B"
                strokeWidth="4"
                strokeLinecap="square"
            />

            {/* Outer Frame - Bottom */}
            <line
                x1="160"
                y1="190"
                x2="120"
                y2="190"
                stroke="#C89B7B"
                strokeWidth="4"
                strokeLinecap="square"
            />
            <line
                x1="120"
                y1="190"
                x2="120"
                y2="230"
                stroke="#C89B7B"
                strokeWidth="4"
                strokeLinecap="square"
            />

            {/* Inner Rectangle Frame */}
            <rect
                x="90"
                y="70"
                width="60"
                height="110"
                stroke="#C89B7B"
                strokeWidth="3"
                fill="none"
            />

            {/* Stylized Pine Tree - Triangle Base */}
            <path
                d="M 120 85 L 135 120 L 105 120 Z"
                fill="#C89B7B"
            />

            {/* Pine Tree - Middle Section */}
            <path
                d="M 120 110 L 132 140 L 108 140 Z"
                fill="#C89B7B"
            />

            {/* Pine Tree - Bottom Section */}
            <path
                d="M 120 130 L 130 160 L 110 160 Z"
                fill="#C89B7B"
            />

            {/* Tree Trunk */}
            <rect
                x="116"
                y="160"
                width="8"
                height="12"
                fill="#C89B7B"
            />

            {/* Tree Internal Lines (Geometric Detail) */}
            <line
                x1="120"
                y1="95"
                x2="120"
                y2="160"
                stroke="#0F2522"
                strokeWidth="1.5"
                opacity="0.6"
            />
            <line
                x1="115"
                y1="115"
                x2="125"
                y2="115"
                stroke="#0F2522"
                strokeWidth="1"
                opacity="0.4"
            />
            <line
                x1="112"
                y1="135"
                x2="128"
                y2="135"
                stroke="#0F2522"
                strokeWidth="1"
                opacity="0.4"
            />

            {/* Text - LA VITA */}
            <text
                x="100"
                y="210"
                fontFamily="Playfair Display, serif"
                fontSize="16"
                fontWeight="600"
                fill="#C89B7B"
                textAnchor="middle"
                letterSpacing="2"
            >
                LAVITA
            </text>

            {/* Text - Malam Jabba (Optional - can be toggled) */}
            <text
                x="100"
                y="225"
                fontFamily="Manrope, sans-serif"
                fontSize="8"
                fontWeight="400"
                fill="#C89B7B"
                textAnchor="middle"
                letterSpacing="1.5"
                opacity="0.7"
            >
                MALAM JABBA
            </text>
        </svg>
    );
}
