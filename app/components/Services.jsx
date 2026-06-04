export default function Services() {
  const stats = [
    { value: "2+", label: "Years experience" },
    { value: "13", label: "Projects" },
    { value: "3",  label: "Industries" },
  ];

  const services = [
    {
      number: "01",
      title: "Mobile Development",
      description: "Cross-platform apps with React Native & Expo — from field collection tools to enterprise kiosk systems, shipped to production on iOS and Android.",
    },
    {
      number: "02",
      title: "Web Development",
      description: "Full-stack web platforms with React, Next.js, Django, and Supabase. Role-based access, real-time features, and clean deployment pipelines.",
    },
    {
      number: "03",
      title: "Python & ML",
      description: "Computer vision systems, OCR pipelines, and ML classifiers built with OpenCV, TensorFlow, and FastAPI — from research to production API.",
    },
  ];

  return (
    <section id="services" className="w-full px-6 sm:px-12 xl:px-16 py-16 sm:py-24 scroll-mt-20 border-t border-border">
      <div className="max-w-6xl mx-auto">

        {/* Stats strip */}
        <div className="grid grid-cols-3 gap-px bg-border mb-16 sm:mb-24 rounded-2xl overflow-hidden">
          {stats.map(({ value, label }) => (
            <div key={value}
              className="bg-bg flex flex-col items-center justify-center py-8 sm:py-10 px-3 sm:px-6 text-center">
              <span className="text-4xl sm:text-6xl font-bold text-accent leading-none mb-2">
                {value}
              </span>
              <span className="text-xs text-muted tracking-wider uppercase leading-relaxed">
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Section heading */}
        <div className="mb-12">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight">
            Services
          </h2>
        </div>

        {/* Service list */}
        <div className="flex flex-col divide-y divide-border">
          {services.map(({ number, title, description }) => (
            <div key={number}
              className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-10 py-8 hover:text-accent transition-colors duration-300">
              <span className="text-xs text-muted font-mono shrink-0">{number}</span>
              <h3 className="text-xl sm:text-2xl font-semibold text-text group-hover:text-accent transition-colors duration-300 w-56 shrink-0">
                {title}
              </h3>
              <p className="text-muted text-sm sm:text-base leading-relaxed">
                {description}
              </p>
              <a href="#contact"
                className="shrink-0 ml-auto text-muted group-hover:text-accent transition-colors duration-300 hidden sm:block">
                →
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
