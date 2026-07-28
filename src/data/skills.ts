import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Languages",
    description: "Production languages used across autonomous systems, tooling, and AI-related workflows.",
    items: ["C", "C++", "Python", "Go", "SQL"],
  },
  {
    title: "Autonomous Systems",
    description: "Engineering areas tied to vehicle intelligence, communication, integration, and operational reliability.",
    items: ["V2X", "Sensor Integration", "Mission Handling", "Situational Awareness", "Diagnostics", "Embedded Systems"],
  },
  {
    title: "Data + AI Tooling",
    description: "Practical telemetry analysis, local-first AI tooling, and data workflows used to understand complex systems.",
    items: [
      "Databricks",
      "Big Data Analysis",
      "Telemetry Analysis",
      "Local-first AI Workflows",
      "OCR and Translation Pipelines",
      "LLM Tool Integration",
      "Feature Extraction",
      "Vehicle Log Analysis",
    ],
  },
  {
    title: "Validation + Delivery",
    description: "Engineering practices and platform tools used to deliver stable system behavior.",
    items: ["Linux", "Git", "Docker", "CI/CD", "Unit Testing", "Simulation", "HIL Testing", "Vehicle Validation"],
  },
];
