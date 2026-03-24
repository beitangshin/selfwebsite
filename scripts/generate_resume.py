from pathlib import Path

from docx import Document
from docx.enum.text import WD_ALIGN_PARAGRAPH
from docx.shared import Inches, Pt
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer


ROOT = Path(__file__).resolve().parents[1]
DOCX_PATH = ROOT / "CV_LianqiaoXiao2026.docx"
PDF_PATH = ROOT / "CV_LianqiaoXiao2026.pdf"

NAME = "David Lianqiao Xiao"
TITLE = "Senior C++ Engineer | Autonomous Systems | Applied AI"
CONTACT = [
    "Sweden",
    "xialiaqia@gmail.com",
    "+46 (0)73-6807904",
    "LinkedIn: david-lianqiao-xiao-737878138",
    "Portfolio: selfwebsite-ten.vercel.app",
]

SUMMARY = (
    "Systems-oriented software engineer with 10+ years of engineering experience and 4+ years in autonomous vehicle "
    "R&D at Scania and Traton. Strong in C++, Python, embedded and autonomous systems, V2X-related development, "
    "simulation, HIL and on-vehicle validation. Brings practical AI experience through Databricks-based vehicle-log "
    "analysis and a published master's thesis on trajectory prediction using Kalman filtering, LSTM sequence models, "
    "and attention-enabled encoder-decoder architecture. Not positioned as a frontend-first specialist, but able to "
    "deliver useful mobile apps, web tools, and AI-assisted engineering solutions when product needs require it."
)

CORE_STRENGTHS = [
    "Autonomous systems engineering: mission handling, situational awareness, V2X workflows, sensor-adjacent development.",
    "Validation depth across unit testing, simulation, HIL, vehicle integration, and on-site field testing.",
    "Applied AI for engineering systems: Databricks workflows, feature extraction from vehicle logs, sequence modeling.",
    "Strong understanding of attention mechanisms and the architectural ideas behind modern transformer and LLM systems.",
    "Able to ship beyond core stack boundaries, including Android app and portfolio website delivery.",
]

EXPERIENCE = [
    {
        "heading": "Traton R&D | Senior C++ Engineer | Nov 2025 - Present",
        "bullets": [
            "Develop autonomous vehicle communication modules and support sensor-facing workflows across lidar, radar, and camera contexts.",
            "Built and maintained HIL-oriented testing systems for validating new features in V2X-related vehicle stacks.",
            "Automated tooling and vehicle tests to improve the reliability and speed of feature validation cycles.",
        ],
    },
    {
        "heading": "Scania R&D | Development Engineer (T2) | Sep 2021 - Nov 2025",
        "bullets": [
            "Developed autonomous truck functionality for mining use cases, covering mission handling, degradation management, and situational awareness.",
            "Worked test-first across unit level, simulator environments, embedded systems, and on-vehicle validation.",
            "Contributed to Databricks-based AI and big-data workflows for extracting and verifying features from vehicle logs.",
            "Participated in on-site customer validation in an Australian mining environment.",
        ],
    },
    {
        "heading": "Scania R&D | Master Thesis Student | Feb 2021 - Jul 2021",
        "bullets": [
            "Completed a published master's thesis on vehicle trajectory prediction using Kalman filtering, LSTM sequence models, and lane-aware attention.",
            "Used the HighD dataset and compared non-lane-based modeling with a two-layer encoder-decoder architecture using attention mechanisms.",
            "Built strong practical grounding in sequence modeling, contextual weighting, and interpretable prediction for safety-relevant systems.",
        ],
    },
    {
        "heading": "Bingshan Guardian Automation / China Haisum | Electrical and Automation Engineer | Sep 2013 - May 2018",
        "bullets": [
            "Worked across automation, refrigeration control systems, PLC programming, electrical design, and industrial project delivery.",
            "Built cross-domain engineering depth connecting hardware, controls, and software implementation.",
        ],
    },
]

SELECTED_WORK = [
    "Published Master's Thesis: Prediction of Vehicle Trajectories based on Kalman Filter and LSTM Algorithms (Uppsala University, 2025). Thesis includes lane-aware attention-based encoder-decoder modeling. Publication: diva2:2003802.",
    "FridgeSystem Android App: Kotlin / Jetpack Compose app for fridge inventory management, stock movements, and statistics. Repository: github.com/beitangshin/FridgeSystem",
]

SKILLS = [
    "Languages: C, C++, Python, Go, SQL",
    "AI and Data: Databricks, vehicle-log analysis, feature extraction, LSTM, attention mechanisms, sequence modeling, transformer / LLM concepts",
    "Autonomous Systems: V2X, mission handling, situational awareness, sensors, motion planning, embedded systems",
    "Platform and Validation: Docker, CI/CD, unit testing, simulation, HIL testing, on-site validation",
    "App and Web Delivery: Kotlin, Jetpack Compose, TypeScript / Next.js working proficiency for product delivery",
]

EDUCATION = [
    "Uppsala University | Master's Programme in Embedded Systems | Master's thesis published in 2025",
]


def add_docx_section_title(doc: Document, title: str) -> None:
    p = doc.add_paragraph()
    r = p.add_run(title.upper())
    r.bold = True
    r.font.size = Pt(11)
    p.paragraph_format.space_before = Pt(10)
    p.paragraph_format.space_after = Pt(4)


def add_docx_bullets(doc: Document, items: list[str]) -> None:
    for item in items:
        p = doc.add_paragraph(style="List Bullet")
        p.add_run(item)
        p.paragraph_format.space_after = Pt(2)


def build_docx() -> None:
    doc = Document()
    for section in doc.sections:
        section.top_margin = Inches(0.55)
        section.bottom_margin = Inches(0.55)
        section.left_margin = Inches(0.65)
        section.right_margin = Inches(0.65)

    normal = doc.styles["Normal"]
    normal.font.name = "Calibri"
    normal.font.size = Pt(10.5)

    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(NAME)
    r.bold = True
    r.font.size = Pt(18)

    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    r = p.add_run(TITLE)
    r.italic = True
    r.font.size = Pt(11)

    p = doc.add_paragraph()
    p.alignment = WD_ALIGN_PARAGRAPH.CENTER
    p.add_run(" | ".join(CONTACT))

    add_docx_section_title(doc, "Profile")
    doc.add_paragraph(SUMMARY)

    add_docx_section_title(doc, "Core Strengths")
    add_docx_bullets(doc, CORE_STRENGTHS)

    add_docx_section_title(doc, "Experience")
    for entry in EXPERIENCE:
        p = doc.add_paragraph()
        r = p.add_run(entry["heading"])
        r.bold = True
        p.paragraph_format.space_before = Pt(6)
        p.paragraph_format.space_after = Pt(2)
        add_docx_bullets(doc, entry["bullets"])

    add_docx_section_title(doc, "Selected Work")
    add_docx_bullets(doc, SELECTED_WORK)

    add_docx_section_title(doc, "Skills")
    add_docx_bullets(doc, SKILLS)

    add_docx_section_title(doc, "Education")
    add_docx_bullets(doc, EDUCATION)

    doc.save(DOCX_PATH)


def build_pdf() -> None:
    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="ResumeName",
            parent=styles["Title"],
            fontName="Helvetica-Bold",
            fontSize=20,
            leading=24,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#111827"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="ResumeTitle",
            parent=styles["Normal"],
            fontName="Helvetica-Oblique",
            fontSize=11,
            leading=14,
            alignment=TA_CENTER,
            textColor=colors.HexColor("#374151"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="SectionTitle",
            parent=styles["Heading2"],
            fontName="Helvetica-Bold",
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#111827"),
            spaceBefore=10,
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodySmall",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=colors.HexColor("#1F2937"),
            spaceAfter=4,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BulletBody",
            parent=styles["BodyText"],
            fontName="Helvetica",
            fontSize=9.5,
            leading=13,
            textColor=colors.HexColor("#1F2937"),
            leftIndent=10,
            bulletIndent=0,
            spaceAfter=2,
        )
    )
    styles.add(
        ParagraphStyle(
            name="EntryHeading",
            parent=styles["BodyText"],
            fontName="Helvetica-Bold",
            fontSize=10.2,
            leading=14,
            textColor=colors.HexColor("#111827"),
            spaceBefore=4,
            spaceAfter=2,
        )
    )

    story = [
        Paragraph(NAME, styles["ResumeName"]),
        Paragraph(TITLE, styles["ResumeTitle"]),
        Paragraph(" | ".join(CONTACT), styles["BodySmall"]),
        Spacer(1, 4),
        Paragraph("PROFILE", styles["SectionTitle"]),
        Paragraph(SUMMARY, styles["BodySmall"]),
        Paragraph("CORE STRENGTHS", styles["SectionTitle"]),
    ]

    for item in CORE_STRENGTHS:
        story.append(Paragraph(item, styles["BulletBody"], bulletText="•"))

    story.append(Paragraph("EXPERIENCE", styles["SectionTitle"]))
    for entry in EXPERIENCE:
        story.append(Paragraph(entry["heading"], styles["EntryHeading"]))
        for item in entry["bullets"]:
            story.append(Paragraph(item, styles["BulletBody"], bulletText="•"))

    story.append(Paragraph("SELECTED WORK", styles["SectionTitle"]))
    for item in SELECTED_WORK:
        story.append(Paragraph(item, styles["BulletBody"], bulletText="•"))

    story.append(Paragraph("SKILLS", styles["SectionTitle"]))
    for item in SKILLS:
        story.append(Paragraph(item, styles["BulletBody"], bulletText="•"))

    story.append(Paragraph("EDUCATION", styles["SectionTitle"]))
    for item in EDUCATION:
        story.append(Paragraph(item, styles["BulletBody"], bulletText="•"))

    doc = SimpleDocTemplate(
        str(PDF_PATH),
        pagesize=A4,
        leftMargin=16 * mm,
        rightMargin=16 * mm,
        topMargin=14 * mm,
        bottomMargin=14 * mm,
    )
    doc.build(story)


if __name__ == "__main__":
    build_docx()
    build_pdf()
    print(f"Generated {DOCX_PATH.name} and {PDF_PATH.name}")
