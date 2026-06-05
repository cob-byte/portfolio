import { skillsData } from "@/assets/assets";
import Stats from "./Stats";

export default function About() {
  return (
    <section id="about" className="w-full px-6 sm:px-12 xl:px-16 pt-10 pb-16 sm:py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-text tracking-tight">
            About
          </h2>
        </div>

        {/* Bio — text-forward */}
        <div className="max-w-3xl space-y-6 text-base sm:text-lg leading-relaxed text-muted mb-16 sm:mb-24">
          <p>
            I&apos;m a <span className="text-text font-semibold">Software Engineer</span> with{" "}
            <span className="text-text font-semibold">2+ years of experience</span> specializing in
            Mobile and Web Development. A graduate of{" "}
            <span className="text-text font-semibold">Pamantasan ng Lungsod ng Maynila</span>,
            I turn ideas into tangible products through research, development, and implementation.
          </p>
          <p>
            My work spans <span className="text-text font-semibold">React Native</span>,{" "}
            <span className="text-text font-semibold">full-stack Web Development</span>, and{" "}
            <span className="text-text font-semibold">Computer Vision</span>. I&apos;ve shipped
            production apps across industries: field collection, QR ordering systems, healthcare
            portals, and ML-powered classifiers, always focused on clean, scalable code that holds
            up in the real world.
          </p>
          <p>
            Beyond coding, I&apos;m an ambivert who loves building meaningful connections and turning
            hobbies into outlets for creativity and growth.
          </p>
        </div>

        {/* Stats — animated count-up */}
        <Stats />

        {/* Skills */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-text mb-10 tracking-tight">
            Tools
          </h2>

          <div className="micro-cards skill-cards">
            {skillsData.map((skill, i) => (
              <div key={i} className="micro-card skill-card hover">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="rot"
                  width="30"
                  height="30"
                  style={{ width: 30, height: 30, objectFit: "contain" }}
                />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
