
const Button = ({
    children,
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'tex-white',
    className = '',
    ...props
}) => {
  return (
    <button type={type}
    className={`${className} px-4 py-2 rounded-lg ${bgColor} ${textColor}`}
    {...props}
    >{children}</button>
  )
}

export default Button
