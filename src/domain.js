export const domain = {
    "kind": "proof-wall",
    "title": "Social Proof Wall",
    "purpose": "A purpose-built proof wall interface for collect testimonials, review quotes, press snippets, and before-after proof into reusable web sections.",
    "inputTitle": "Product-specific inputs",
    "previewTitle": "Generated working outputs",
    "tableTitle": "Proof items",
    "metricLabels": [
        "Proof Quality",
        "Permission Safety",
        "Placement Readiness"
    ],
    "fields": [
        { "id": "proof-count", "label": "Proof count", "type": "number", "sample": 24, "placeholder": "Enter proof count" },
        { "id": "renewal-window", "label": "Renewal window", "type": "text", "sample": "Annual permission review", "placeholder": "Enter renewal window" },
        { "id": "embed-target", "label": "Embed target", "type": "text", "sample": "Homepage and service pages", "placeholder": "Enter embed target" },
        { "id": "moderation-owner", "label": "Moderation owner", "type": "text", "sample": "Client marketing lead", "placeholder": "Enter moderation owner" },
        {
            "id": "organization-client",
            "label": "Organization / client",
            "type": "text",
            "sample": "Oak & Olive Cafe",
            "placeholder": "Enter organization / client"
        },
        {
            "id": "primary-goal",
            "label": "Primary goal",
            "type": "text",
            "sample": "approved proof assets published",
            "placeholder": "Enter primary goal"
        },
        {
            "id": "owner-reviewer",
            "label": "Owner / reviewer",
            "type": "text",
            "sample": "Volta project lead",
            "placeholder": "Enter owner / reviewer"
        },
        {
            "id": "evidence-source",
            "label": "Evidence source",
            "type": "text",
            "sample": "Owner interview + public audit",
            "placeholder": "Enter evidence source"
        },
        {
            "id": "input-asset",
            "label": "Input asset",
            "type": "text",
            "sample": "Testimonials/reviews collected",
            "placeholder": "Enter input asset"
        },
        {
            "id": "output-format",
            "label": "Output format",
            "type": "text",
            "sample": "Embeddable HTML",
            "placeholder": "Enter output format"
        },
        {
            "id": "review-threshold",
            "label": "Review threshold",
            "type": "number",
            "sample": 85,
            "placeholder": "Enter review threshold"
        },
        {
            "id": "approved-channel",
            "label": "Approved channel",
            "type": "text",
            "sample": "Owner handoff packet",
            "placeholder": "Enter approved channel"
        }
    ],
    "rows": [
        "Testimonials/reviews collected",
        "Source links attached",
        "Permission status marked",
        "Allowed channels recorded",
        "Website placement planned",
        "Quote rotation generated",
        "HTML snippet generated",
        "Proof registry exported",
        "Permission state machine updated",
        "Source URL/evidence captured",
        "Embed sanitization reviewed",
        "Quote redaction history recorded",
        "Proof workspace provisioned",
        "Claim taxonomy assigned",
        "Moderation queue configured",
        "Permission renewal reminders scheduled",
        "Embed placement variants generated",
        "Proof performance tracking planned",
        "Revocation response workflow written",
        "Wall refresh cadence selected",
    ],
    "artifacts": [
        "Embeddable HTML",
        "Proof wall markdown",
        "Proof registry CSV",
        "Proof operations dashboard",
        "Permission renewal register",
        "Embed placement plan",
    ],
    "checks": [
        "Source and permission required",
        "No edited meaning",
        "Unverified proof blocked from export",
        "Revoked proof must be excluded from every export",
        "Edited quotes need meaning-preservation note",
        "Embed output must stay script-free and escaped",
    ],
    "sampleClient": "Oak & Olive Cafe",
    "modules": [
        { "name": "Proof operations dashboard", "description": "Tracks permission state, claim type, placement, source quality, usage window, and refresh needs." },
        { "name": "Moderation queue", "description": "Review workflow for new, edited, expired, disputed, revoked, and high-claim proof items." },
        { "name": "Placement optimizer", "description": "Maps proof to homepage, service pages, landing pages, email, pitch decks, and social channels." },
        { "name": "Revocation response workflow", "description": "Owner-safe process for removing proof, logging action, updating embeds, and regenerating exports." },
        { "name": "Proof performance tracker", "description": "Optional local-first notes for where proof was used, campaign context, observed lift, and next placement." },
        { "name": "Claim taxonomy manager", "description": "Categorizes proof as quality, speed, trust, access, impact, transformation, or community credibility." }
    ],
    "saas": {
        "customerSegments": [
            "Student marketing pods collecting ethical testimonials",
            "Small businesses managing reviews and testimonials",
            "Nonprofits documenting community impact proof",
            "Mentors auditing consent-safe proof libraries"
        ],
        "pricingTiers": [
            "Free: proof registry and markdown wall",
            "Proof Pro: embed generator, permissions, and renewal reminders",
            "Team: moderation queue, placement optimizer, and audit trail",
            "Agency: cross-client proof library and white-label embed packs"
        ],
        "onboardingChecklist": [
            "Create proof wall workspace",
            "Import source links and capture dates",
            "Assign moderation and owner approval roles",
            "Map allowed channels and usage windows",
            "Generate first sanitized embed placement"
        ],
        "successMetrics": [
            "100% published proof has source and permission state",
            "Revoked/expired proof excluded from embeds",
            "Every quote edit has redaction history",
            "Placement plan covers priority pages or campaigns"
        ],
        "dashboards": [
            "Proof quality and permission safety",
            "Moderation and renewal queue",
            "Embed placement readiness",
            "Claim taxonomy coverage"
        ],
        "dataModel": [
            "ProofWorkspace",
            "ProofItem",
            "PermissionState",
            "SourceEvidence",
            "RedactionEvent",
            "EmbedPlacement",
            "RevocationAction",
            "ClaimCategory"
        ],
        "permissions": [
            "Moderator: proof intake and redaction notes",
            "Owner: permission and final publishing approval",
            "Developer: embed export and placement status",
            "Viewer: client-safe proof wall preview"
        ],
        "compliance": [
            "Permission state required before publishing",
            "Meaning-changing edits blocked",
            "Source URL or capture note retained",
            "Revocation action updates every export"
        ],
        "lifecycle": [
            "Collect",
            "Verify",
            "Edit",
            "Approve",
            "Place",
            "Monitor",
            "Renew",
            "Remove"
        ],
        "retentionSignals": [
            "Permission renewal due",
            "High-value proof not placed",
            "Revoked proof removal completed",
            "New source evidence awaiting approval"
        ],
        "exportChannels": [
            "Embeddable HTML",
            "Proof wall markdown",
            "Proof registry CSV",
            "Permission renewal register",
            "Placement plan"
        ],
        "playbooks": [
            "Proof permission approval workflow",
            "Source evidence collection",
            "Quote redaction review",
            "Channel/license placement audit"
        ],
        "automations": [
            "Embed sanitization checklist",
            "Permission expiry warnings",
            "Quote edit-history export",
            "Channel license rule validation"
        ],
        "revenueModel": "Proof management SaaS with embed seats, permission renewals, and channel-specific export packs",
        "integrationTargets": [
            "Website embed snippets",
            "Google Reviews source links",
            "Notion testimonial boards",
            "CRM account proof records"
        ]
    }
};
//# sourceMappingURL=domain.js.map