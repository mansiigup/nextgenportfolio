

## Improve Skills & Tooling Section

### Changes

**1. Add horizontal sliding/carousel for skills under each tab**
- Replace the static 4-column grid with a horizontally scrollable carousel using `embla-carousel-react` (already installed)
- Skills will auto-scroll continuously and can be manually swiped/dragged
- Each skill renders as a pill/chip-style card that slides smoothly

**2. Expand skills per category with comprehensive PM skills**

**Product Strategy** (expanded):
- Product Vision & Roadmapping, User Research & Design Thinking, A/B Testing & Experimentation, 0→1 Product Development, Stakeholder Management, Go-to-Market Strategy, Competitive Analysis, Market Research, Prototyping & Wireframing, PRD & Feature Specs, Customer Journey Mapping, Pricing Strategy, OKR & KPI Setting, Persona Development, Value Proposition Design, Feature Prioritization, Product-Market Fit Analysis

**Execution & Delivery** (expanded):
- Cross-functional Team Leadership, Sprint Planning & Delivery, Release Management (200+ releases), Partnership Development, B2B Sales Enablement, Localization & Internationalization, Growth Campaigns, Agile/Scrum Leadership, Kanban & Lean, Vendor Management, QA & UAT Coordination, Risk Mitigation, Capacity Planning, Change Management, Incident Management

**Tech & AI/ML** — split into two tabs: **Technical** and **AI Tools**

**Technical:**
- Python & Django, RESTful APIs & Webhooks, Redis, Celery, PostgreSQL, AWS / GCP / Digital Ocean, OAuth & JWT Authentication, React & Node.js, Firebase & Supabase, Git & CI/CD

**AI Tools** (new dedicated tab):
- ChatGPT & GPT-4, Claude AI (Anthropic), Google Gemini, Perplexity AI, Microsoft Copilot, Cursor AI, Lovable AI, Midjourney, DALL-E, Runway ML, ElevenLabs, Whisper (Speech-to-Text), Stable Diffusion, Notion AI, Jasper AI, Synthesia, HeyGen, Descript, LangChain, Hugging Face

**Analytics & Tools** (expanded):
- Looker Studio & Mixpanel, SQL & Database Querying, CleverTap & New Relic, Jira, Linear, Trello, Figma & Balsamiq, Firebase & Google Analytics, Postman & API Testing, Branch & AppsFlyer, Amplitude, Hotjar & FullStory, Tableau, Miro & FigJam, Confluence & Notion

### Implementation
- **File**: `src/components/about/SkillsExperience.tsx`
- Use Embla carousel with `loop: true` and `dragFree: true` for the skills display area
- Add auto-scroll plugin effect via `useEffect` interval
- Add left/right arrow buttons for manual navigation
- 5 tabs total (Product Strategy, Execution & Delivery, Technical, AI Tools, Analytics & Tools)
- Each skill chip has the existing hover glow effect but arranged in a horizontal sliding row

