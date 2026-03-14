import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export default function SectionHeading({ title, subtitle, light }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <div ref={ref} className={`text-center mb-12 md:mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}>
      <h2 className={`font-heading text-3xl md:text-4xl lg:text-5xl mb-4 ${light ? "text-primary" : "text-primary"}`}>
        {title}
      </h2>
      <div className="flex justify-center">
        <span className={`block h-0.5 bg-primary origin-left transition-transform duration-700 delay-300 ${isVisible ? "scale-x-100" : "scale-x-0"}`} style={{ width: "80px" }} />
      </div>
      {subtitle && (
        <p className={`mt-4 text-base md:text-lg max-w-2xl mx-auto ${light ? "text-gray-300" : "text-gray-400"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
