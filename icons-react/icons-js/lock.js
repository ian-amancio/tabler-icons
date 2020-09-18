import * as React from "react";

const IconLock = (size = 24, color = "currentColor", stroke = 2, ...props) => <svg className="icon icon-tabler icon-tabler-lock" width={size} height={size} viewBox="0 0 24 24" strokeWidth={stroke} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}><rect x={5} y={11} width={14} height={10} rx={2} /><circle cx={12} cy={16} r={1} /><path d="M8 11v-4a4 4 0 0 1 8 0v4" /></svg>;

export default IconLock;