import { ReactNode } from "react";

export function Layout({
    logo,
    nav,
    profile,
    actions
}: {
    logo?: ReactNode,
    nav?: ReactNode,
    profile?: ReactNode,
    actions?: ReactNode
}) {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:">
            <div className="container flex h-14 items-center">
                <div className="md:hidden mr-2">
                    {logo}
                    {nav}
                </div>

                <div className="mr-4 hidden md:flex">{logo}</div>
                <div className="items-center flex-1 flex">{nav}</div>
                <div className="flex flex-1 items-center justify-end space-x-3">
                    {actions}
                    {profile}
                </div>
            </div>
        </header>
    )
}