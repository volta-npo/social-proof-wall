export const config = {
    "number": 30,
    "slug": "social-proof-wall",
    "title": "Social Proof Wall",
    "category": "Marketing & Content",
    "tagline": "Collect testimonials, review quotes, press snippets, and before-after proof into reusable web sections.",
    "persona": "Web and marketing students building trust for clients.",
    "gap": "Small businesses have scattered proof across Google, texts, Instagram, and word of mouth.",
    "niche": "Trust-building for under-known local businesses.",
    "metric": "approved proof assets published",
    "modules": [
        "Proof intake form",
        "Consent status tracker",
        "Website section patterns",
        "Quote rotation plan"
    ],
    "theme": {
        "accent": "#db2777",
        "accent2": "#f9a8d4",
        "emoji": "\ud83d\udce3",
        "metricLabel": "Content readiness",
        "workflow": [
            "Capture owner voice",
            "Generate channel-ready assets",
            "Review for local fit",
            "Export approved content"
        ],
        "privacy": "Do not publish quotes, photos, or testimonials without explicit owner/client approval."
    },
    "statuses": [
        "not-started",
        "blocked",
        "in-progress",
        "ready",
        "approved"
    ],
    "criteria": [
        {
            "id": "proof-intake-form",
            "label": "Proof intake form",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify proof intake form with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "consent-status-tracker",
            "label": "Consent status tracker",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify consent status tracker with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "website-section-patterns",
            "label": "Website section patterns",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify website section patterns with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "quote-rotation-plan",
            "label": "Quote rotation plan",
            "weight": 15,
            "defaultStatus": "not-started",
            "guidance": "Implement and verify quote rotation plan with evidence that a Volta student pod, mentor, and owner can understand."
        },
        {
            "id": "evidence-quality",
            "label": "Evidence quality",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Attach proof, source notes, screenshots, owner confirmation, or reviewer rationale."
        },
        {
            "id": "owner-handoff",
            "label": "Owner handoff",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Make the output understandable and maintainable by a nontechnical owner."
        },
        {
            "id": "mission-alignment",
            "label": "Mission alignment",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Show how this advances digital equity, student growth, or pro bono delivery."
        },
        {
            "id": "qa-safety",
            "label": "QA and safety",
            "weight": 10,
            "defaultStatus": "not-started",
            "guidance": "Resolve privacy, accessibility, accuracy, and operational risks before handoff."
        }
    ],
    "templates": {
        "actions": [
            "Run a real Volta scenario for Social Proof Wall and capture baseline evidence.",
            "Complete the proof intake form workflow with owner-safe notes.",
            "Resolve all blocked rubric items and add evidence for every ready item.",
            "Export the handoff packet and review it with a mentor before client use."
        ]
    },
    "sample": {
        "clientName": "Oak & Olive Cafe",
        "chapter": "Dallas",
        "studentLead": "Volta Student Lead",
        "notes": "Neighborhood marketing project with owner-approved content assets. Social Proof Wall sample.",
        "evidencePrefix": "Social Proof Wall",
        "evidence": [
            "Discovery call notes captured with owner confirmation.",
            "Public digital footprint reviewed and summarized.",
            "Mentor QA comments attached before handoff."
        ]
    }
};
//# sourceMappingURL=config.js.map