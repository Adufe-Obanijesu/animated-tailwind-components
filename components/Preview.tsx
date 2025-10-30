import {ReactNode} from "react";

export default function Preview({children}: {children: ReactNode}) {
    return (
        <div className="flex items-center justify-center p-4 border border-[#27272a] rounded-lg h-87.5">
            {children}
        </div>
    )
}