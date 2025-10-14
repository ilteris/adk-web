# Assistant Panel Feature Plan

## Goals
- Provide an in-builder assistant panel that suggests agent templates and guides configuration.
- Mirror the UX shown in the latest design reference (glow trigger, right-hand assistant pane, conversational prompts).
- Ensure assistant interactions produce concrete changes on the canvas and configuration panels.

## Task Checklist
- [ ] Define assistant panel module structure (component, service, state handling).
- [ ] Build assistant drawer UI shell with header, message list, and composer.
- [ ] Implement conversation log model (assistant/user/system message types).
- [ ] Wire the glow trigger to open the assistant panel and focus the composer.
- [ ] Seed sample agent templates/actions (e.g., Travel Concierge) in a service stub.
- [ ] Integrate template selection to create agents on the canvas and populate configuration forms.
- [ ] Handle tool/instruction mutations surfaced in assistant responses.
- [ ] Introduce loading + error states for backend-driven assistant flows.
- [ ] Instrument analytics for assistant usage (open, sample generated, actions executed).
- [ ] Add unit tests for assistant store/service and UI interactions.
- [ ] Refresh documentation/screenshots for the builder assistant experience.

## Open Questions
- Will assistant responses come from the existing backend or a new inference endpoint?
- Should conversation history persist between builder sessions?
- How should the assistant resolve conflicts when injecting nodes onto an active canvas selection?
