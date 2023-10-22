import { SVGProps } from 'react'

const Logo = (svgProps: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 346.02 218.28"
      width="53.87"
      height="43.61"
      {...svgProps}
    >
      <defs></defs>
      <g id="Calque_2" data-name="Calque 2">
        <g id="Pictogramme">
          <g id="Picto_Noir_Bleu" data-name="Picto Noir Bleu">
            <path
              fill="#1a56db"
              d="M289.35,218.28,198.48,109.14,289.35,0H346L255.16,109.14,346,218.28Zm-232.68,0,90.86-109.14L56.67,0H0L90.86,109.14,0,218.28Z"
            />
            <rect x="147.53" y="32.6" width="50.95" height="153.08" />
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Logo
