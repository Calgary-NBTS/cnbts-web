import { ReactNode } from 'react';

interface Props {
    children?: ReactNode
}

function MenuButton({children}:Props) {
    return (
        <button className="my-1 px-2 py-px border-b-4 border-solid text-white border-fuchsia-300 hover:bg-sky-400 font-bold">{children}</button>
    )
}

export default MenuButton;