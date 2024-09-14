import {forwardRef} from "react";
import {cx} from "class-variance-authority";

export const Label = forwardRef<
	React.ElementRef<"label">,
	React.ComponentPropsWithoutRef<"label">
>((props, ref) => {
	return (
		<label
			ref={ref}
			className={cx("font-medium text-[#344054]", props.className)}
			{...props}
		/>
	);
});
