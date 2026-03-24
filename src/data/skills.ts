import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    title: "Core Languages",
    description: "Production languages used across autonomous systems, tooling, and AI-related workflows.",
    items: ["C", "C++", "Python", "Go", "SQL"],
  },
  {
    title: "Autonomous Systems",
    description: "Engineering areas tied to vehicle intelligence, communication, and operational reliability.",
    items: ["V2X", "Mission Handling", "Situational Awareness", "Sensors", "Motion Planning", "Embedded Systems"],
  },
  {
    title: "AI + Data",
    description: "Practical AI methods spanning research-grade sequence modeling, attention mechanisms, and data workflows used to analyze complex systems.",
    items: [
      "Databricks",
      "Big Data Analysis",
      "Attention Mechanisms",
      "Sequence Modeling",
      "LSTM",
      "Transformers / LLM Concepts",
      "Feature Extraction",
      "Vehicle Log Analysis",
    ],
  },
  {
    title: "Platform",
    description: "Delivery infrastructure and validation practices that support stable engineering work.",
    items: ["Docker", "CI/CD", "Unit Testing", "Simulation", "HIL Testing", "On-site Validation"],
  },
];
