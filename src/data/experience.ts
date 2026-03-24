import type { ExperienceItem } from "@/types/content";

export const experienceItems: ExperienceItem[] = [
  {
    company: "Traton R&D",
    role: "Senior C++ Engineer",
    period: "Nov 2025 - Present",
    summary:
      "Working on autonomous vehicle communication and sensor-related development with a focus on V2X modules, testing systems, and vehicle-facing tooling.",
    achievements: [
      "Develop V2X communication modules and support sensor-facing workflows across lidar, radar, and camera contexts.",
      "Built and maintained HIL-oriented testing systems for validating new features in autonomous vehicle stacks.",
      "Automated tooling and vehicle tests to improve the reliability and speed of V2X development cycles.",
    ],
    techStack: ["C++", "Python", "V2X", "HIL Testing", "Sensors", "Docker"],
  },
  {
    company: "Scania R&D",
    role: "Development Engineer (T2)",
    period: "Sep 2021 - Nov 2025",
    summary:
      "Developed autonomous truck functionality for mining use cases, covering mission handling, degradation management, situational awareness, and related systems.",
    achievements: [
      "Led new feature development in mission handling and situational awareness for autonomous vehicles.",
      "Worked test-first across unit level, simulation environments, embedded systems, and on-vehicle validation.",
      "Contributed to Databricks-based AI and big data workflows for extracting and verifying features from vehicle logs.",
    ],
    techStack: ["C++", "Python", "Databricks", "Simulation", "Embedded Testing", "Docker"],
  },
  {
    company: "Scania R&D",
    role: "Master Thesis Student",
    period: "Feb 2021 - Jul 2021",
    summary:
      "Completed a master's thesis on vehicle trajectory prediction using Kalman filtering, LSTM-based sequence models, and an attention-enabled lane-aware architecture.",
    achievements: [
      "Applied machine learning techniques to vehicle trajectory forecasting using the HighD dataset.",
      "Combined classical estimation methods with neural-network-based sequence modeling and attention mechanisms.",
      "Built a solid technical foundation for understanding modern transformer and large-model attention workflows in applied engineering contexts.",
    ],
    techStack: ["Python", "LSTM", "Attention", "Kalman Filter", "Encoder-Decoder", "Vehicle Prediction"],
  },
  {
    company: "Bingshan Guardian Automation / China Haisum",
    role: "Electrical & Automation Engineer",
    period: "Sep 2013 - May 2018",
    summary:
      "Earlier career experience in automation, refrigeration control systems, electrical design, and industrial project support.",
    achievements: [
      "Worked on fire alarm, instrument, and electrical design across industrial and building projects.",
      "Programmed PLC and controller-based solutions for refrigeration systems and automation devices.",
      "Built practical cross-domain experience connecting hardware, controls, and software implementation.",
    ],
    techStack: ["Automation", "PLC", "C/C++", "Electrical Design", "Industrial Systems"],
  },
];
