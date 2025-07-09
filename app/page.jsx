import Image from "next/image";
import {
  ArrowRight,
  Code,
  Palette,
  Zap,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
} from "lucide-react";

export default function Home() {
  const skills = [
    { name: "React", level: 85 },
    { name: "Next.js", level: 85 },
    { name: "Spring boot", level: 85 },
    { name: "Java", level: 80 },
    { name: "PHP/Laravel", level: 70 },
    { name: "UI/UX", level: 88 },
  ];

  const projects = [
    {
      title: "ZenTrio",
      description: "Manange task in one place",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      tags: ["React", "Sring boot", "PostgreSQL"],
      link: "https://kshrd.zentrio.pro/",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center gap-2 border rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-gray-800 font-medium text-sm">
                    Available for hire
                  </span>
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-tl from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent">
                    Creative
                  </span>

                  <br />
                  <span className="bg-gradient-to-tl from-violet-100 via-violet-900 to-violet-600 bg-clip-text text-transparent">
                    Web Developer
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  I craft exceptional digital experiences through innovative web
                  development, combining creativity with cutting-edge technology
                  to bring ideas to life.
                </p>
              </div>

              {/* Social Links */}
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Github, href: "https://github.com/Gemini210504", label: "GitHub" },
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Mail, href: "#", label: "Email" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="group w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300 border"
                  >
                    <social.icon className="w-5 h-5 text-gray-600 group-hover:text-violet-600 transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative">
              <div className="relative w-full max-w-md mx-auto">
                <div className="relative rounded-3xl p-8 shadow-2xl border">
                  <div className="w-full h-96 rounded-2xl overflow-hidden">
                    <img
                      src="https://i.pinimg.com/736x/62/08/c2/6208c2bf8e8714b92068ed1edf38c295.jpg"
                      alt="Gemini Ling"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-tl from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent mb-4">
              Technical Skills
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Proficient in modern web technologies and frameworks
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border"
              >
                <div className="flex justify-between items-center mb-3">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {skill.name}
                  </h3>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full bg-gray-700 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-tl from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent mb-4">
              What I Do
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Specialized services to bring your digital vision to life
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Web Development",
                description:
                  "Building responsive, scalable web applications using modern frameworks and best practices.",
              },
              {
                icon: Palette,
                title: "UI/UX Design",
                description:
                  "Creating intuitive user interfaces and engaging user experiences that convert.",
              },
              {
                icon: Zap,
                title: "Performance Optimization",
                description:
                  "Optimizing applications for speed, SEO, and exceptional user experience.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border"
              >
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg bg-gray-700">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-tl from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A showcase of my recent work and creative solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={250}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-violet-700 px-3 py-1 rounded-full text-sm font-medium border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="rounded-3xl p-12 border shadow-xl">
            <h2 className="text-4xl font-bold bg-gradient-to-tl from-violet-400 via-violet-500 to-violet-600 bg-clip-text text-transparent mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. I'm always excited to
              take on new challenges and bring innovative ideas to life.
            </p>
            <button className="group bg-gray-800 text-white px-8 py-4 rounded-full font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mx-auto">
              Get In Touch
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
