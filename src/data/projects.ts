import type { ProjectItem } from "@/types/content";

export const projectItems: ProjectItem[] = [
  {
    id: "sensor-playback-visualizer",
    title: "Sensor Playback Visualizer",
    shortDescription:
      "A Godot 4 desktop application for local replay, 3D inspection, and debugging of recorded spatial-detection frames.",
    longDescription:
      "A portfolio-safe reconstruction of the engineering workflow behind sensor-data review: load an authorized local capture, replay it frame by frame, inspect spatial detections, and correlate frame health through a responsive desktop interface. The repository deliberately excludes captures, vendor SDKs, and company configuration.",
    role: "Designer and developer",
    techStack: ["Godot 4", "GDScript", "3D Visualization", "Local Data", "Replay Tooling", "Sensor Debugging"],
    category: "Engineering Tool",
    status: "Public GitHub project",
    repositoryUrl: "https://github.com/beitangshin/generic-sensor-visualizer",
    featured: true,
    highlights: [
      "Designed a local-first workflow for replay, frame stepping, range controls, detection selection, and inspection.",
      "Separated capture ingestion from the normalized frame contract and visualization layer.",
      "Published without captures, supplier information, device SDKs, or internal configuration.",
    ],
    year: "2026",
    heroImage: "/projects/sensor-playback-dashboard.png",
    overview:
      "The project turns spatial-detection data into an interactive debugging workflow. It is deliberately structured so approved input adapters can change while the UI and inspection flow remain stable.",
    featureBullets: [
      "Load approved local captures with progress and error feedback.",
      "Play, pause, step through frames, and navigate a timeline.",
      "Inspect detections in an interactive 3D point-cloud view with selectable layers and range controls.",
      "Use local live-input and recording controls in authorized test environments.",
    ],
    architectureBullets: [
      "Packet readers and decoders isolate format-specific ingestion.",
      "A normalized frame contract separates data adaptation from presentation.",
      "The replay pipeline feeds the Godot 3D view, timeline, health indicators, and frame inspector.",
    ],
  },
  {
    id: "tolk-agent",
    title: "Tolk Agent",
    shortDescription:
      "A local-first document-image translation tool with OCR, page ordering, DeepSeek translation, and structured exports.",
    longDescription:
      "Tolk Agent processes one or more local document photos, extracts text through configurable OCR backends, translates it into Simplified Chinese and English, and writes Markdown, JSON, and reader-friendly PDF outputs. Its batch workflow protects page order and continues past individual failures.",
    role: "Designer and developer",
    techStack: ["Python", "OCR", "PaddleOCR", "DeepSeek API", "PDF Export", "Pytest"],
    category: "AI Developer Tool",
    status: "Public GitHub project",
    repositoryUrl: "https://github.com/beitangshin/tolk_agent",
    featured: true,
    highlights: [
      "Designed pluggable local OCR, optional vision OCR, translation, and export layers.",
      "Built page-ordering and duplicate protection for continuing long translation bundles safely.",
      "Verified the public project with a 36-test suite while keeping input documents and API keys local.",
    ],
    year: "2026",
    overview:
      "This project applies AI where it is useful but keeps the workflow understandable: choose an OCR backend based on privacy needs, retain structured intermediate output, and produce readable translations locally.",
    featureBullets: [
      "Process individual images or batches with per-file error reporting.",
      "Use Tesseract, PaddleOCR, or an optional OpenAI-compatible vision backend.",
      "Continue a named project while preserving detected page order and avoiding duplicates.",
      "Export Markdown, JSON, and separate Chinese and English PDFs.",
    ],
    architectureBullets: [
      "Independent OCR, page-ordering, translation, and exporter modules.",
      "Configuration through environment variables and ignored local settings.",
      "Test coverage for core processing and page-order behavior.",
    ],
  },
  {
    id: "award-search-scheduler",
    title: "Award Search Scheduler",
    shortDescription:
      "A FastAPI and SQLite scheduling foundation for cache-first, provider-agnostic award-search workflows.",
    longDescription:
      "A small backend that models search requests, cached results, task deduplication, polling budgets, and month-level aggregation. It intentionally avoids scraping, hidden APIs, CAPTCHA handling, and fabricated availability data.",
    role: "Designer and developer",
    techStack: ["Python", "FastAPI", "SQLite", "Task Scheduling", "Caching", "Pytest"],
    category: "Backend System",
    status: "Public GitHub project",
    repositoryUrl: "https://github.com/beitangshin/AwardSearch",
    featured: false,
    highlights: [
      "Designed explicit cache freshness, task budgets, deduplication, and provider boundaries.",
      "Kept the provider contract independent from the API, queue, and month-view aggregation.",
      "Made the safety boundary explicit: authorized integrations only, never invented search results.",
    ],
    year: "2026",
    overview:
      "The project demonstrates backend design discipline more than a specific provider integration: fresh cached data is reused first, and missing results remain honestly missing.",
    featureBullets: [
      "Search and result models with a SQLite-backed TTL cache.",
      "Task states, deduplication, and budget-aware scheduling.",
      "FastAPI endpoints for month views, task enqueueing, and scheduled runs.",
      "Manual and file-backed provider adapters for controlled test data.",
    ],
    architectureBullets: [
      "FastAPI routes feed a query service and SQLite-backed cache/task queue.",
      "Scheduler calls provider adapters through a narrow contract.",
      "Month aggregation is independent from ingestion and provider implementation.",
    ],
  },
  {
    id: "trajectory-thesis",
    title: "Published Master's Thesis: Vehicle Trajectory Prediction with Attention",
    shortDescription:
      "A published Uppsala University master's thesis combining Kalman filtering, LSTM sequence modeling, and lane-aware attention for vehicle trajectory prediction.",
    longDescription:
      "This thesis develops a trajectory prediction framework for autonomous driving scenarios using HighD vehicle motion data. It combines Kalman filtering for noise reduction with two prediction models, including a lane-aware two-layer encoder-decoder architecture with attention mechanisms. The work is especially relevant to modern AI engineering because it demonstrates strong practical understanding of sequence modeling, contextual weighting, and interpretable prediction behavior in safety-relevant systems.",
    role: "Author and researcher",
    techStack: ["Python", "LSTM", "Attention Mechanisms", "Encoder-Decoder", "Kalman Filter", "HighD Dataset"],
    category: "Published Research Thesis",
    status: "Open-access publication",
    featured: true,
    projectUrl: "https://www.diva-portal.org/smash/record.jsf?pid=diva2:2003802",
    highlights: [
      "Published by Uppsala University as an advanced-level master's thesis in 2025.",
      "Designed a lane-aware encoder-decoder architecture with attention for structured highway prediction.",
      "Showed how classical estimation and neural sequence models can be combined for stronger long-term forecasting.",
    ],
    year: "2025",
    overview:
      "The thesis focuses on a practical autonomous-driving problem: predicting surrounding vehicle trajectories with enough robustness and interpretability to support downstream planning decisions. It starts with Kalman-filter-based preprocessing to reduce motion noise, then compares a non-lane-based model with a lane-aware architecture that uses attention to extract context from left, center, and right lane information.",
    featureBullets: [
      "Preprocessed HighD motion data with Kalman filtering to improve signal quality before learning.",
      "Built and evaluated both non-lane-based and lane-aware sequence prediction models.",
      "Used a two-layer encoder-decoder design with attention to capture lane-specific context.",
      "Demonstrated improved lane-change prediction and better long-horizon accuracy in structured highway scenarios.",
    ],
    architectureBullets: [
      "Kalman filtering for trajectory smoothing and measurement-noise reduction.",
      "LSTM-based sequence modeling for temporal vehicle behavior prediction.",
      "Lane-aware encoder-decoder design separating left, center, and right contextual streams.",
      "Attention mechanisms for weighing relevant context and improving interpretability.",
    ],
  },
  {
    id: "fridge-system",
    title: "FridgeSystem Android App",
    shortDescription:
      "A Kotlin Android app for managing fridge inventory, stock movements, and statistics across multiple fridges.",
    longDescription:
      "FridgeSystem is a Jetpack Compose application built with MVVM, Room, Coroutines/Flow, and Hilt. It supports multiple fridges, food inventory management, stock in and stock out flows, searchable item lists, and statistics views backed by local persistence.",
    role: "Designer and developer",
    techStack: ["Kotlin", "Jetpack Compose", "MVVM", "Room", "Coroutines", "Hilt"],
    category: "Android Application",
    status: "GitHub project",
    repositoryUrl: "https://github.com/beitangshin/FridgeSystem",
    featured: true,
    highlights: [
      "Built a multi-screen fridge inventory workflow with Compose Navigation.",
      "Used Room plus Flow for reactive local data updates and inventory history.",
      "Structured the app into data, domain, navigation, and UI layers, with optional user-configured LAN synchronization.",
    ],
    year: "2026",
    heroImage: "/projects/Pic1.png",
    overview:
      "This project focuses on practical home inventory management: create fridges, add foods, adjust stock in and out, inspect item details, and review statistics. The implementation emphasizes clean screen flow, explicit business rules, and a local-first architecture that keeps the app responsive.",
    featureBullets: [
      "Create, rename, delete, and switch between multiple fridges.",
      "Add, edit, search, and remove food items with quantity tracking.",
      "Record inventory transactions for stock in, stock out, and adjustments.",
      "Review fridge-level statistics and recent transaction activity.",
      "Optionally synchronize inventory snapshots with a user-configured local agent on the same network.",
    ],
    architectureBullets: [
      "Jetpack Compose UI with screen-based navigation in AppNavGraph.",
      "MVVM view models coordinating user actions and state collection.",
      "Room database, DAOs, and repository classes for persistence.",
      "Domain models and rules separated from storage and presentation code.",
    ],
    codeLinks: [
      {
        label: "Navigation graph",
        path: "app/src/main/java/com/fridgesystem/navigation/AppNavGraph.kt",
        url: "https://github.com/beitangshin/FridgeSystem/blob/main/app/src/main/java/com/fridgesystem/navigation/AppNavGraph.kt",
        description: "Shows the app's screen flow, route definitions, and how users move between fridge, food, and stats pages.",
      },
      {
        label: "Fridge list screen",
        path: "app/src/main/java/com/fridgesystem/ui/fridge_list/FridgeListScreen.kt",
        url: "https://github.com/beitangshin/FridgeSystem/blob/main/app/src/main/java/com/fridgesystem/ui/fridge_list/FridgeListScreen.kt",
        description: "The main landing screen for listing fridges and opening the selected fridge.",
      },
      {
        label: "Fridge detail screen",
        path: "app/src/main/java/com/fridgesystem/ui/fridge_detail/FridgeDetailScreen.kt",
        url: "https://github.com/beitangshin/FridgeSystem/blob/main/app/src/main/java/com/fridgesystem/ui/fridge_detail/FridgeDetailScreen.kt",
        description: "Inventory-focused detail page for searching foods and making quick stock changes.",
      },
      {
        label: "Stats screen",
        path: "app/src/main/java/com/fridgesystem/ui/stats/StatsScreen.kt",
        url: "https://github.com/beitangshin/FridgeSystem/blob/main/app/src/main/java/com/fridgesystem/ui/stats/StatsScreen.kt",
        description: "Presents fridge statistics, filters, and transaction summaries.",
      },
      {
        label: "Repository layer",
        path: "app/src/main/java/com/fridgesystem/data/repository/FridgeRepository.kt",
        url: "https://github.com/beitangshin/FridgeSystem/blob/main/app/src/main/java/com/fridgesystem/data/repository/FridgeRepository.kt",
        description: "Coordinates Room data access and app-facing inventory operations.",
      },
    ],
  },
  {
    id: "v2x-validation",
    title: "V2X Validation and Test Infrastructure",
    shortDescription:
      "Testing systems and automation workflows for validating autonomous vehicle V2X features across development and vehicle-facing scenarios.",
    longDescription:
      "This work covers the engineering systems around V2X module delivery: feature validation, tooling, HIL support, and automation that helps teams test new functionality with greater confidence and speed.",
    role: "Senior C++ engineer",
    techStack: ["C++", "Python", "V2X", "HIL", "Docker", "Automation"],
    category: "Autonomous Systems",
    status: "Production engineering work",
    featured: false,
    highlights: [
      "Built and maintained testing systems for new V2X functionality.",
      "Improved test automation supporting vehicle and lab validation.",
      "Worked close to communication modules and sensor-adjacent workflows.",
    ],
    year: "2026",
    overview:
      "This work focused on engineering systems around V2X delivery: validation flows, automation, and tooling that helps teams ship communication features safely and confidently.",
    featureBullets: [
      "Built validation workflows for new V2X features.",
      "Improved test automation around vehicle and lab environments.",
      "Supported communication modules and sensor-adjacent workflows.",
    ],
  },
  {
    id: "mission-handling",
    title: "Mission Handling and Situational Awareness",
    shortDescription:
      "Core autonomous driving development for mining trucks, spanning mission logic, degradation management, and situational awareness behavior.",
    longDescription:
      "A major part of the work at Scania involved autonomous truck features that must behave reliably in constrained, safety-sensitive environments. Delivery required tight feedback loops across implementation, simulation, embedded tests, and real-world validation.",
    role: "Development engineer",
    techStack: ["C++", "Autonomous Driving", "Simulation", "Embedded Systems", "Testing", "Agile"],
    category: "Autonomous Vehicle Software",
    status: "Field-tested",
    featured: false,
    highlights: [
      "Led feature development in mission handling and situational awareness.",
      "Tested from unit level to simulation and embedded vehicle environments.",
      "Participated in on-site customer validation in an Australian mining context.",
    ],
    year: "2025",
    overview:
      "The project combined implementation, simulator work, embedded testing, and field validation for mining-focused autonomous truck behavior.",
    featureBullets: [
      "Implemented mission handling logic and situational awareness features.",
      "Worked through simulation, embedded testing, and field validation.",
      "Supported behavior in constrained and safety-sensitive vehicle environments.",
    ],
  },
  {
    id: "vehicle-log-ai",
    title: "Vehicle Log Analysis on Databricks",
    shortDescription:
      "Applied AI and big data workflows for extracting, analyzing, and validating useful signals from autonomous vehicle logs.",
    longDescription:
      "This stream of work focused on using Databricks and data-heavy analysis methods to verify features, inspect behavior, and turn operational vehicle data into actionable engineering insight. It reflects the AI side of the profile in a practical, production-oriented way.",
    role: "Engineer",
    techStack: ["Python", "Databricks", "Big Data", "Feature Extraction", "AI Analysis"],
    category: "Applied AI",
    status: "Active",
    featured: false,
    highlights: [
      "Used big data computing to extract and verify features from vehicle logs.",
      "Connected AI-oriented analysis to practical development and test workflows.",
      "Added value through engineering insight rather than standalone research demos.",
    ],
    year: "2024",
    overview:
      "A practical AI and analytics stream for extracting usable engineering insight from large vehicle-log datasets in Databricks.",
    featureBullets: [
      "Extracted and validated features from vehicle logs.",
      "Connected analysis output back into engineering and test workflows.",
      "Used data-heavy methods to understand system behavior at scale.",
    ],
  },
];
