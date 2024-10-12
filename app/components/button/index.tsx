import { base, variants, Variants } from '@/app/components/button/styles'

interface ButtonProps {
    text: string;
    variant: string;
}

function Button({ variant, text }: ButtonProps) {

    return (
        <button
            type='button'
            className={base + ' ' + variants[variant as keyof Variants]}
        >
            { text }
        </button>
    )
}

export default Button