export type Variants = {
    xxs: string;
    xs:  string;
    sm:  string;
    md:  string;
    lg:  string;
    xl:  string;
    xxl: string;
}

export const base: string = 'bg-red-500 rounded-sm text-center relative font-semibold whitespace-nowrap align-middle outline-none inline-flex items-center justify-center select-none'

export const variants: Variants = {
    xxs: 'text-xs p-1',
    xs:  'text-xs py-1.5 px-3',
    sm:  'text-sm py-1.5 px-3.5',
    md:  'text-md py-2 px-4',
    lg:  'text-lg py-2.5 px-5',
    xl:  'text-xl py-3 px-6',
    xxl: 'text-xxl py-4 px-8'
}
