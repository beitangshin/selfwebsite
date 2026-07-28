import type { ExperienceItem } from "@/types/content";

export const experienceItems: ExperienceItem[] = [
  {
    company: "Traton R&D",
    role: "Senior C++ Engineer",
    period: "Nov 2025 - Present",
    summary:
      "Developing autonomous-vehicle communication and sensor-integration workflows, with a focus on V2X modules, validation systems, telemetry analysis, and vehicle-facing engineering tools.",
    achievements: [
      "Develop V2X communication modules and support sensor-facing workflows across radar, lidar, and camera contexts.",
      "Build and maintain HIL-oriented test systems for validating new functionality in autonomous vehicle stacks.",
      "Develop local analysis and playback tooling that supports debugging, validation, and root-cause analysis without exposing production data.",
      "Automate vehicle-test and engineering workflows to improve the reliability and speed of feature delivery.",
    ],
    techStack: ["C++", "Python", "V2X", "Sensor Integration", "HIL Testing", "Telemetry"],
  },
  {
    company: "Scania R&D",
    role: "Development Engineer (T2)",
    period: "Sep 2021 - Nov 2025",
    summary:
      "Developed autonomous mining-truck functionality spanning mission handling, degradation management, situational awareness, and the supporting validation workflow.",
    achievements: [
      "Led new feature development in mission handling and situational awareness for autonomous vehicles.",
      "Worked across unit tests, simulation, embedded integration, HIL, and on-vehicle validation.",
      "Supported customer-site joint testing in Australia for integrated autonomous-truck validation.",
      "Contributed to Databricks-based workflows for extracting and verifying engineering signals from vehicle logs.",
    ],
    techStack: ["C++", "Python", "Databricks", "Simulation", "HIL", "Vehicle Validation"],
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
