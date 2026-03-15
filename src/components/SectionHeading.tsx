import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`text-center mb-14 md:mb-20 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}>
      <h2
        className="font-heading text-primary mb-4"
        style={{ fontWeight: 300, letterSpacing: '0.06em', fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
      >
        {title}
      </h2>
      {/* Animated gold underline */}
      <div className="flex justify-center">
        <span
          className={`block h-0.5 bg-gradient-to-r from-primary to-transparent origin-left transition-transform duration-700 delay-300 ${isVisible ? "scale-x-100" : "scale-x-0"}`}
          style={{ width: "60px" }}
        />
      </div>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"} ${light ? "text-gray-300" : "text-gray-400"}`} style={{ fontWeight: 300 }}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
