import { CursorText } from "@phosphor-icons/react";

/* 
example usage

<Input
    label="email"
    type="email"
    name="email"
    placeholder=""
    must
    styles={{
        className: "mx-auto"
    }}
    register={(name) => register(name, { required: "This is required" })}
    strace
    errors={errors}
/>

*/


/**
 * Input Component
 * Renders an input field with optional label and icons.
 * @component
 * @param {object} props - Additional props to be spread onto the input element.
 * @param {string} [props.label] - The label for the input field.
 * @param {boolean} [props.required] - Specifies if the input field is required.
 * @param {object} [props.styles] - Custom styles for the input container.
 * @param {boolean|ReactNode} [props.leftIcon] - Determines whether to display a left icon.
 * @param {boolean|ReactNode} [props.rightIcon] - Determines whether to display a right icon.
 * @param {object} [props.leftIconProps] - Additional props for the left icon container.
 * @param {object} [props.rightIconProps] - Additional props for the right icon container.
 * @param {Function} [props.register] - A function to register the input field with React Hook Form or similar libraries.
 * @returns {JSX.Element} - The rendered Input component.
 */
export default function Input({
    styles = {},
    leftIcon = false,
    type = "text",
    name = "demo",
    rightIcon = false,
    leftIconProps = {},
    rightIconProps = {},
    label = "",
    strace = false,
    labelProps = {
        className: "",
        style: {}
    },
    must = false,
    register = () => ({}),
    placeholder = "",
    errors,
    ...props
}) {
    return (
        <div style={{
            marginRight: "auto",
            marginLeft: "auto",
            marginTop: "10px",
            marginBottom: "15px",
            position: "relative",
            ...!strace && { maxWidth: "max-content" }
        }}>
            {
                label && <p
                    {...labelProps}
                    style={{
                        fontWeight: "300",
                        fontSize: "14px"
                    }}
                >
                    {label}
                    {must && (
                        <span style={{ color: "red" }}>*</span>
                    )}
                </p>
            }
            <div style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1px solid #38BDF8",
                position: "relative",
                borderRadius: "5px",
                ...!strace && { maxWidth: "max-content" },
                ...styles?.style
            }}
                className={styles?.className}
            >
                {
                    leftIcon && <div {...leftIconProps} style={{ marginRight: "5px", marginLeft: "5px" }}>
                        {typeof leftIcon === "boolean" ? <CursorText color="white" size={32} /> : leftIcon}
                    </div>
                }
                <input autoComplete="off" {...register(name)} {...props} style={{ outline: "none", background: "transparent", width: "100%", paddingLeft: "5px", fontSize: "16px" }} type={type} placeholder={placeholder} />
                {
                    rightIcon && <div {...rightIconProps} style={{ marginLeft: "5px", marginRight: "5px" }}>
                        {typeof rightIcon === "boolean" ? <CursorText color="white" size={32} /> : rightIcon}
                    </div>
                }
            </div>
            {errors[name] && <p style={{ color: "red", fontSize: "10px", position: "absolute" }}>{errors[name].message}</p>}
        </div>
    )
}