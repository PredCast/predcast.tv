import { BUTTON_ICON_SIZE, buttonClass, type ButtonSize, type ButtonVariant } from '@/lib/ui/buttonClass';

import { Icon, type IconName } from './Icon';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  readonly variant?: ButtonVariant;
  readonly size?: ButtonSize;
  readonly icon?: IconName;
  /** Replaces the icon with a spinner and disables the button. */
  readonly busy?: boolean;
}

export function Button({
  variant = 'ghost',
  size = 'md',
  icon,
  busy = false,
  className = '',
  type = 'button',
  disabled,
  children,
  ...rest
}: Readonly<ButtonProps>) {
  const iconSize = BUTTON_ICON_SIZE[size];
  return (
    <button type={type} disabled={disabled || busy} className={buttonClass(variant, size, className)} {...rest}>
      {busy ? <Icon n="loader" s={iconSize} className="pc-spin" /> : icon && <Icon n={icon} s={iconSize} />}
      {children}
    </button>
  );
}
