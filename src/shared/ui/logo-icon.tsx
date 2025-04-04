import { SVGProps } from "react";

export function LogoIcon(props: SVGProps<SVGSVGElement>) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32" {...props}>{/* Icon from Material Icon Theme by Material Extensions - https://github.com/material-extensions/vscode-material-icon-theme/blob/main/LICENSE */}<path fill="#01579b" d="M12.001 4h7.102l-7.372 23.181a1.14 1.14 0 0 1-1.073.819H5.13A1.166 1.166 0 0 1 4 26.801a1.3 1.3 0 0 1 .06-.385l6.87-21.599A1.14 1.14 0 0 1 12.001 4"></path><path fill="#1976d2" d="M22.32 20H11.06a.537.537 0 0 0-.522.55a.57.57 0 0 0 .166.408l7.236 6.716a1.1 1.1 0 0 0 .775.325h6.376Z"></path><path fill="#29b6f6" d="M21.071 4.816A1.14 1.14 0 0 0 20.001 4h-7.915a1.14 1.14 0 0 1 1.072.815l6.868 21.599a1.22 1.22 0 0 1-.71 1.52a1.1 1.1 0 0 1-.362.064h7.915A1.166 1.166 0 0 0 28 26.8a1.3 1.3 0 0 0-.06-.385L21.072 4.817Z"></path></svg>
    )
}