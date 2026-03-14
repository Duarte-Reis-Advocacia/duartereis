interface Props {
  variant?: "dark-to-light" | "light-to-dark" | "gold-accent";
}

export default function GradientDivider({ variant = "gold-accent" }: Props) {
  const classes: Record<string, string> = {
    "dark-to-light": "divider-dark-to-light",
    "light-to-dark": "divider-light-to-dark",
    "gold-accent": "divider-gold-accent",
  };
  return <div className={classes[variant]} aria-hidden="true" />;
}
