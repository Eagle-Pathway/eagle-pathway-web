# Agent Guidelines & Strict Rules for Eagle Pathway Web

## 1. Critical Workflow & Git Rules
- **Build Verification**: ALWAYS run `npm run build` locally after making code changes.
- **NO Auto-Pushing**: NEVER execute `git push` or push commits to GitHub without the user's explicit testing and confirmation.
- **User Confirmation First**: Prompt the user to test locally (e.g., at `localhost:3000`), and only run `git push origin main` when explicitly told to do so.

---

## 2. Navigation & Structure Rules
- **Navbar Sequence**: The primary navigation MUST strictly follow this exact order:
  $$\text{Home} \rightarrow \text{About} \rightarrow \text{Services} \rightarrow \text{Tutoring} \rightarrow \text{How it works} \rightarrow \text{Results} \rightarrow \text{Apply with Us} \rightarrow \text{Contact}$$
- **Do not alter this sequence** in `app/content/site.ts` or navigation components unless explicitly commanded by the user.

---

## 3. Booking Links & Form URL Rules
- **NEVER Reuse Unrelated Form Links**:
  - The "Scholarship Bootcamp" form (`https://forms.gle/eUrPE13Gt2GL4D3y9`) and "Apply with Us" form (`https://forms.gle/NL2oB6mHHUscnZo9A`) are for **Study Abroad & Scholarship Services ONLY**.
  - NEVER attach scholarship Google Form links to **Tutoring** buttons or other unrelated features.
  - If a dedicated form URL is not explicitly defined for a service/feature, ALWAYS use placeholder `href="#"` or direct phone/hotline links until the user provides the specific URL.

---

## 4. Tutoring Scope & Geographic Reach
- **In-Person Tutoring**: Addis Ababa sub-cities (Bole, Sarbet, CMC, Ayat, Kazanchis, Old Airport, Gerji, etc.).
- **Online Tutoring**: Ethiopian students **everywhere** — across Ethiopia and **abroad in ANY country worldwide** (USA, Canada, Europe, UK, Middle East, Australia, etc.).
- **NEVER restrict online tutoring** to "only within Ethiopia". Always highlight the global reach for diaspora/international students.

---

## 5. Contact Hotlines & Channels Separation
- **Tutoring Hotline**: `+251 985 705 712` / `+251 970 402 044`
- **Tutoring Telegram**: `@EagleTutorialsServices` (`https://t.me/EagleTutorialsServices`)
- **Main / Scholarship Telegram**: `@Tegegnpathway` (`https://t.me/Tegegnpathway`)
- **Main Phone / Email**: As configured in `app/content/site.ts`.

---

## 6. Code & SEO Standards
- **Framework**: Next.js (App Router, Turbopack).
- **Styling**: `app/globals.css`, CSS variables, Glassmorphism, Google Fonts (`Inter`, `Sora`).
- **SEO & Schema**: Maintain valid JSON-LD (`EducationalOrganization`, `LocalBusiness`, `FAQPage`) and accurate metadata alternates/canonicals on all static pages.
