import { PrimaryButtonProps } from "@/hooks/types";

const PrimaryButton = ({ className, disabled, children, ...props }:PrimaryButtonProps) => {
    return (
        <button
            {...props}
            className={
                `bg-[#142989] text-[#FFFFFF] hover:text-[#fff] border border-[#142989] rounded ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

export default PrimaryButton;
