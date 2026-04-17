type SectionCTAProps = {
  className?: string;
};

export default function SectionCTA({ className = "" }: SectionCTAProps) {
  return (
    <div className={`mt-10 flex justify-center ${className}`}>
      <a
        href="#contact"
        className="rounded-xl bg-armelix-secondary px-6 py-3 text-sm font-semibold text-armelix-text shadow-md transition-transform duration-200 hover:-translate-y-0.5"
      >
        Cantactanos ya
      </a>
    </div>
  );
}
