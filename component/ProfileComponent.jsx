"use client";
import React, { useState } from "react";
import {
  Calendar,
  MapPin,
  Award,
  Code,
  Briefcase,
  GraduationCap,
  Heart,
  Coffee,
  Camera,
  Music,
  Gamepad2,
  Book,
  Star,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Phone,
  Download,
  Play,
  Pause,
  ChevronRight,
  Target,
  Zap,
  Users,
  Trophy,
  MessageCircle,
  Globe,
  Sparkles,
  Rocket,
  Brain,
  Lightbulb,
  Code2,
} from "lucide-react";

export default function ProfileComponent() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isHovered, setIsHovered] = useState(false);

  const experience = [
    {
      company: "The Cam-bright Center Education",
      position: "English Teacher (Part-Time)",
      period: "2023 - 2025",
      location: "Phnom Penh, Cambodia",
      description:
        "Taught English to young children through interactive activities, games, and storytelling. Focused on improving basic vocabulary, pronunciation, and listening skills in a fun and engaging environment.",
      achievements: [
        "Created engaging visual aids and learning games to support young learners",
        "Helped children build confidence in speaking English",
        "Maintained a positive and supportive classroom atmosphere",
      ],
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "Royal University of Phnom Penh",
      period: "2021 - Present",
      gpa: "3.65",
      achievements: [
        
      ],
    },
    {
      degree: "High School Diploma",
      institution: "Hun Sen Chamkar Leu High School",
      period: "2020 - 2022",
      gpa: "3.80",
      achievements: [
        "Top 10 student in class",
        "Science major",
        "English Debate Team member",
      ],
    },
  ];
  
  

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      year: "2024",
      icon: "🏗️",
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      year: "2023",
      icon: "☁️",
    },
    {
      name: "React Advanced Certification",
      issuer: "Meta",
      year: "2023",
      icon: "⚛️",
    },
  
  ];

  const interests = [
    {
      name: "Photography",
      icon: Camera,
      color: "from-rose-400 to-pink-500",
      description: "Capturing life's beautiful moments",
    },
    {
      name: "Music Production",
      icon: Music,
      color: "from-violet-400 to-purple-500",
      description: "Creating beats and melodies",
    },
    {
      name: "Gaming",
      icon: Gamepad2,
      color: "from-green-400 to-emerald-500",
      description: "Strategy and adventure games",
    },
    {
      name: "Reading",
      icon: Book,
      color: "from-blue-400 to-indigo-500",
      description: "Tech blogs and sci-fi novels",
    },
    {
      name: "Coffee",
      icon: Coffee,
      color: "from-amber-400 to-orange-500",
      description: "Exploring brewing methods",
    },
    {
      name: "Coding",
      icon: Code2,
      color: "from-teal-400 to-cyan-500",
      description: "Discovering new technology",
    },
  ];

  const skills = [
    { name: "React/Next.js", level: 85, color: "from-blue-500 to-cyan-500" },
    { name: "UI/UX Design", level: 70, color: "from-purple-500 to-pink-500" },
    { name: "Spring boot", level: 85, color: "from-cyan-500 to-blue-500" },
    { name: "Java", level: 85, color: "from-cyan-500 to-blue-500" },
    { name: "Docker", level: 80, color: "from-cyan-500 to-blue-500" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Star },
    { id: "experience", label: "Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: GraduationCap },
    { id: "interests", label: "Interests", icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-full mx-auto flex flex-col lg:flex-row p-4">
        {/* Sidebar */}
        <div className="w-full lg:w-[30%] lg:h-screen lg:overflow-y-auto scrollbar-hide mb-4 lg:mb-0">
          <div className="bg-white/60 backdrop-blur-2xl rounded-3xl p-6  border border-white/30">
            {/* Profile Header */}
            <div className="text-center mb-6">
              <div
                className="relative inline-block mb-4"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br from-blue-100 via-purple-100 bob-100 to-pink-100 rounded-full overflow-hidden shadow-2xl border-4 border-white/60 relative mx-auto">
                  <img
                    src="https://i.pinimg.com/736x/62/08/c2/6208c2bf8e8714b92068ed1edf38c295.jpg"
                    alt="Gemini Ling"
                    className={`w-full h-full object-cover transition-transform duration-700 ${
                      isHovered ? "scale-110" : "scale-100"
                    }`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                {/* Online Indicator */}
                <div className="absolute -bottom-2 -right-2 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 bg-white rounded-full animate-pulse"></div>
                </div>

                {/* Sparkles */}
                <div className="absolute -top-2 -left-2 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-2 h-2 sm:w-3 sm:h-3 text-black" />
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                Leang Chhengleap
              </h1>
              <p className="text-slate-600 font-medium mb-2 text-base sm:text-lg">
                Full Stack Developer
              </p>
              <div className="flex items-center justify-center gap-2 text-slate-500 mb-4 sm:mb-6">
                <MapPin className="w-4 h-4" />
                <span className="text-xs sm:text-sm">Phnom Penh, Cambodia</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/40 rounded-xl border border-white/30 hover:bg-white/60 transition-colors">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
                <span className="text-xs sm:text-sm text-slate-600">
                  leangchhengleap073@email.com
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/40 rounded-xl border border-white/30 hover:bg-white/60 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-500" />
                <span className="text-xs sm:text-sm text-slate-600">
                  097-943-7184
                </span>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-white/40 rounded-xl border border-white/30 hover:bg-white/60 transition-colors">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-500" />
                <span className="text-xs sm:text-sm text-slate-600">
                  Available for opportunities
                </span>
              </div>
            </div>

            {/* Skills Preview */}
            <div className="mb-4 sm:mb-6 ">
              <h3 className="text-base sm:text-lg font-semibold text-slate-700 mb-3 sm:mb-4 flex items-center gap-2">
                <Code className="w-4 h-4 sm:w-5 sm:h-5" />
                Core Skills
              </h3>
              <div className="space-y-2 sm:space-y-3 h-[180px] sm:h-[200px] overflow-y-auto scrollbar-hide">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between items-center">
                      <span className="text-xs sm:text-sm font-medium text-slate-600">
                        {skill.name}
                      </span>
                      <span className="text-xs text-slate-500">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-slate-200/50 rounded-full h-1.5 sm:h-2">
                      <div
                        className={`h-1.5 sm:h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="w-full lg:flex-1 lg:ml-4">
          <div>
            {/* Tab Navigation */}
            <div className="border-b border-white/20">
              <div className="flex flex-col sm:flex-row gap-2 justify-between bg-violet-300/50 p-2 rounded-2xl">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center justify-center gap-2 py-2 sm:py-3 px-3 sm:px-4 rounded-xl font-medium transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-white text-blue-600 shadow-lg border border-blue-100"
                        : "text-slate-600 hover:text-blue-600 hover:bg-white/50"
                    }`}
                  >
                    <tab.icon className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="text-sm sm:text-base">{tab.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Tab Content */}
            <div className="p-4 sm:p-6 lg:p-8 overflow-y-auto scrollbar-hide max-h-[calc(100vh-200px)] sm:max-h-[700px]">
              {/* Overview Tab */}
              {activeTab === "overview" && (
                <div className="space-y-6 sm:space-y-8">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <Lightbulb className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                      </div>
                      About Me
                    </h2>
                    <div className="space-y-4 sm:space-y-6 text-slate-600 leading-relaxed">
                      <p className="text-base sm:text-lg">
                        I'm a motivated and enthusiastic web development student
                        with a strong foundation in full stack technologies. I
                        enjoy building creative and responsive websites, and I'm
                        always eager to learn new tools and frameworks.
                      </p>
                      <p className="text-sm sm:text-base">
                        I focus on writing clean, readable code and continuously
                        improving my skills through hands-on projects and
                        collaboration. My goal is to contribute to real-world
                        applications while growing as a developer and solving
                        meaningful problems through technology.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-2xl border border-blue-100">
                      <h3 className="font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                        <Target className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                        Core Values
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 text-slate-600">
                        {[
                          "Innovation & Creativity",
                          "Quality & Excellence",
                          "Continuous Learning",
                          "Team Collaboration",
                        ].map((value, index) => (
                          <li
                            key={index}
                            className="flex items-center gap-2 sm:gap-3"
                          >
                            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                            <span className="text-sm sm:text-base">
                              {value}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-4 sm:p-6 rounded-2xl border border-purple-100">
                      <h3 className="font-semibold text-slate-800 mb-3 sm:mb-4 flex items-center gap-2">
                        <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                        Languages
                      </h3>
                      <ul className="space-y-2 sm:space-y-3 text-slate-600">
                        {[
                          { lang: "Khmer", level: "Native" },
                          { lang: "English", level: "Fluent" },
                          { lang: "Thai", level: "Intermediate" },
                        ].map((item, index) => (
                          <li
                            key={index}
                            className="flex justify-between items-center"
                          >
                            <span className="text-sm sm:text-base">
                              {item.lang}
                            </span>
                            <span className="text-xs sm:text-sm text-purple-600 font-medium bg-purple-100 px-2 py-1 rounded-full">
                              {item.level}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}

              {/* Experience Tab */}
              {activeTab === "experience" && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                      <Briefcase className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    Professional Experience
                  </h2>
                  <div className="space-y-6 sm:space-y-8">
                    {experience.map((exp, index) => (
                      <div key={index} className="relative group">
                        <div className="bg-gradient-to-r from-white to-slate-50 p-4 sm:p-6 rounded-2xl border border-slate-200 hover:shadow-lg transition-all duration-300">
                          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                            <div
                              className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${exp.color} rounded-full flex items-center justify-center shadow-lg flex-shrink-0`}
                            >
                              <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h3 className="text-lg sm:text-xl font-semibold text-slate-800">
                                  {exp.position}
                                </h3>
                                <span className="text-xs sm:text-sm text-blue-600 font-medium bg-blue-50 px-2 sm:px-3 py-1 rounded-full">
                                  {exp.period}
                                </span>
                              </div>
                              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 text-slate-600 mb-3 sm:mb-4">
                                <span className="font-medium text-sm sm:text-base">
                                  {exp.company}
                                </span>
                                <span className="hidden sm:inline">•</span>
                                <span className="flex items-center gap-1 text-sm sm:text-base">
                                  <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                                  {exp.location}
                                </span>
                              </div>
                              <p className="text-sm sm:text-base text-slate-600 mb-3 sm:mb-4">
                                {exp.description}
                              </p>
                              <div className="space-y-2">
                                <h4 className="font-medium text-slate-800 text-sm sm:text-base">
                                  Key Achievements:
                                </h4>
                                <ul className="space-y-2">
                                  {exp.achievements.map(
                                    (achievement, achIndex) => (
                                      <li
                                        key={achIndex}
                                        className="flex items-center gap-2 text-slate-600 text-sm sm:text-base"
                                      >
                                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                        {achievement}
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Education Tab */}
              {activeTab === "education" && (
                <div className="space-y-8 sm:space-y-12">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                      </div>
                      Education
                    </h2>
                    <div className="space-y-4 sm:space-y-6">
                      {education.map((edu, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border border-blue-100"
                        >
                          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
                            </div>
                            <div className="flex-1">
                              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                                <h4 className="text-lg sm:text-xl font-semibold text-slate-800">
                                  {edu.degree}
                                </h4>
                                <span className="text-xs sm:text-sm text-blue-600 font-medium bg-blue-100 px-2 sm:px-3 py-1 rounded-full">
                                  {edu.period}
                                </span>
                              </div>
                              <p className="text-sm sm:text-lg text-slate-600 mb-2">
                                {edu.institution}
                              </p>
                              <p className="text-xs sm:text-sm text-slate-500 mb-3 sm:mb-4">
                                GPA: {edu.gpa}
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {edu.achievements.map(
                                  (achievement, achIndex) => (
                                    <span
                                      key={achIndex}
                                      className="bg-white/70 text-blue-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium border border-blue-200"
                                    >
                                      {achievement}
                                    </span>
                                  )
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                        <Award className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                      </div>
                      Certifications
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                      {certifications.map((cert, index) => (
                        <div
                          key={index}
                          className="bg-gradient-to-br from-white to-slate-50 rounded-2xl p-4 sm:p-6 border border-slate-200 hover:shadow-lg transition-all duration-300"
                        >
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center text-lg sm:text-xl">
                              {cert.icon}
                            </div>
                            <div className="flex-1">
                              <h4 className="font-semibold text-slate-800 mb-2 text-sm sm:text-base">
                                {cert.name}
                              </h4>
                              <p className="text-xs sm:text-sm text-slate-600 mb-1">
                                {cert.issuer}
                              </p>
                              <p className="text-xs text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded-full inline-block">
                                {cert.year}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Interests Tab */}
              {activeTab === "interests" && (
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-6 sm:mb-8 flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                    </div>
                    Interests & Hobbies
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                    {interests.map((interest, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-white to-slate-50 rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
                      >
                        <div
                          className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${interest.color} rounded-2xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                        >
                          <interest.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-slate-800 mb-2">
                          {interest.name}
                        </h3>
                        <p className="text-xs sm:text-sm text-slate-600">
                          {interest.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
