export default function DisputePolicyPage() {
    return (
        <div className="prose prose-invert max-w-none prose-h1:text-white prose-h1:font-heading prose-h2:text-white prose-h2:font-heading prose-h3:text-white prose-strong:text-white prose-a:text-accent prose-p:text-white/70 prose-li:text-white/70 prose-table:border-collapse prose-table:w-full prose-td:border prose-td:border-white/10 prose-th:border prose-th:border-white/10 prose-td:p-4 prose-th:p-4 prose-th:text-white prose-th:bg-white/5 prose-th:text-left">

            {/* Cover */}
            <p><strong>XOCHIII</strong> — Escrow Services for Brands &amp; Creators</p>
            <h1>Dispute Management</h1>
            <p className="text-sm text-white/50">Standard Operating Procedure &nbsp;|&nbsp; Version 1.0 &nbsp;|&nbsp; Effective Date: January 2026</p>
            <p className="italic text-white/40 text-sm">Prepared by: Xochiii Operations Team</p>
            <hr />

            <h2>1. Purpose &amp; Scope</h2>
            <p>This Standard Operating Procedure (SOP) establishes the official process by which Xochiii acts as a neutral dispute intermediary between Brands and Creators during escrow-backed collaboration agreements. The goal is to ensure every dispute is resolved with consistency, fairness, and transparency — regardless of the parties involved or the deal size.</p>
            <p>This SOP applies to all disputes arising from:</p>
            <ul>
                <li>Deliverable quality or completeness disagreements</li>
                <li>Contract interpretation conflicts</li>
                <li>Missed deadlines or scope creep claims</li>
                <li>Payment release disputes tied to milestone completion</li>
                <li>Intellectual property and usage rights conflicts</li>
            </ul>
            <div className="not-prose my-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white mb-1">Core Principle</p>
                <p className="text-sm text-white/60">Xochiii is not an advocate for either party. Our role is to evaluate evidence objectively and apply the terms of the signed agreement. Every decision must be documented and defensible.</p>
            </div>

            <h2>2. Guiding Principles</h2>
            <p>All Xochiii dispute reviewers must operate under these non-negotiable principles:</p>
            <table>
                <thead><tr><th>Principle</th><th>What It Means</th></tr></thead>
                <tbody>
                    <tr><td>Neutrality</td><td>No favoritism toward Brands or Creators based on deal size, relationship history, or platform standing.</td></tr>
                    <tr><td>Evidence-First</td><td>Decisions are based solely on documented evidence. Verbal claims without proof hold no weight.</td></tr>
                    <tr><td>Contract Supremacy</td><td>The signed agreement is the ultimate reference. Disputes are resolved by what was agreed, not what was intended.</td></tr>
                    <tr><td>Timeliness</td><td>Disputes must be resolved within defined SLA windows. Delays disadvantage both parties.</td></tr>
                    <tr><td>Confidentiality</td><td>All dispute details are strictly confidential and not shared beyond the review team.</td></tr>
                    <tr><td>Consistency</td><td>The same framework is applied to every dispute, every time, without exception.</td></tr>
                </tbody>
            </table>

            <h2>3. Dispute Trigger &amp; Eligibility</h2>
            <h3>3.1 Who Can File</h3>
            <p>Either party (Brand or Creator) may file a dispute at any point during the active escrow period. A dispute cannot be filed after escrow funds have been mutually released and both parties have confirmed completion.</p>

            <h3>3.2 Valid Dispute Triggers</h3>
            <ul>
                <li>Creator submits work; Brand believes it does not meet agreed deliverables</li>
                <li>Creator believes Brand is withholding payment despite full delivery</li>
                <li>Either party claims the other has violated specific contract terms</li>
                <li>Brand requests a revision that Creator deems out of scope</li>
                <li>Deadline was missed and there is no mutual agreement on an extension</li>
            </ul>

            {/* Platform-only rule callout */}
            <div className="not-prose my-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
                <p className="mb-3 flex items-center gap-2 font-semibold text-amber-400">
                    <span>⚠️</span>
                    <span>Platform-Only Communication Rule — Strictly Enforced</span>
                </p>
                <p className="mb-4 text-sm text-white/60">All communication related to a collaboration must take place exclusively through Xochiii&apos;s official platform messaging and project tools. This includes:</p>
                <ul className="mb-4 space-y-1.5 text-sm text-white/70 list-none pl-0">
                    <li className="flex gap-2"><span className="text-amber-400">•</span><span>Deliverable submissions and feedback</span></li>
                    <li className="flex gap-2"><span className="text-amber-400">•</span><span>Revision requests and deadline discussions</span></li>
                    <li className="flex gap-2"><span className="text-amber-400">•</span><span>Scope changes and contract clarifications</span></li>
                </ul>
                <p className="text-sm text-white/60">Off-platform communication (Instagram DMs, WhatsApp, email, phone calls, etc.) is <strong className="text-white">not automatically excluded</strong> from a dispute review, but it carries <strong className="text-white">significantly reduced weight</strong> unless corroborated by an equivalent on-platform record. <strong className="text-amber-400">The party who keeps their communication on the platform will always hold the strongest evidential position.</strong> This rule applies equally to Brands and Creators.</p>
            </div>

            <h3>3.3 Invalid Dispute Triggers (Auto-Rejected)</h3>
            <ul>
                <li>Disputes filed after mutual escrow release</li>
                <li>Disputes based purely on preference changes not covered by the contract</li>
                <li>Disputes where the filer has not attempted direct on-platform communication first (see Section 4)</li>
                <li>Disputes where the only evidence submitted is off-platform AND the party refuses all three corroboration requests</li>
                <li>Duplicate filings on the same matter</li>
            </ul>
            <div className="not-prose my-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white mb-1">Important</p>
                <p className="text-sm text-white/60">Before a dispute can be formally opened, Xochiii requires proof that both parties have attempted direct resolution through the platform. At minimum, there must be a documented on-platform message exchange showing the attempt. Off-platform communication records will not satisfy this requirement.</p>
            </div>

            <h2>4. Pre-Dispute Protocol (Mandatory)</h2>
            <p>No dispute will be accepted without evidence of a good-faith resolution attempt. The Pre-Dispute Protocol is a mandatory first step designed to resolve simple misunderstandings quickly.</p>
            <h3>Step 1 — Direct On-Platform Communication Window</h3>
            <p>Upon identifying a conflict, the aggrieved party must message the other party directly through the Xochiii platform messaging system and clearly state the issue. This message must be sent through the platform — no other channel qualifies. The other party has 48 hours to respond with a resolution proposal, also through the platform. Any attempt to resolve the issue via outside channels does not satisfy this step.</p>
            <h3>Step 2 — Xochiii Soft Mediation (Optional but Recommended)</h3>
            <p>If direct communication stalls, either party may request a Soft Mediation session with a Xochiii representative. This is an informal, facilitated conversation — not a formal ruling. The mediator helps clarify misunderstandings but does not render a decision.</p>
            <h3>Step 3 — Formal Dispute Filing</h3>
            <p>If Step 1 and/or Step 2 do not produce resolution within 72 hours total, either party may escalate to a formal dispute. The filing party must submit a Dispute Intake Form with all required documentation.</p>

            <h2>5. Formal Dispute Intake Process</h2>
            <h3>5.1 Dispute Intake Form — Required Submissions</h3>
            <p>The filing party must submit the following. Incomplete submissions will be returned within 24 hours with a checklist of missing items.</p>
            <table>
                <thead><tr><th>Item</th><th>Required From</th><th>Format</th></tr></thead>
                <tbody>
                    <tr><td>Original Signed Contract / Brief</td><td>Both Parties</td><td>PDF or platform document link</td></tr>
                    <tr><td>Specific Clause(s) in Dispute</td><td>Filing Party</td><td>Written statement citing clause</td></tr>
                    <tr><td>Deliverables Submitted</td><td>Creator</td><td>File uploads, links, screenshots</td></tr>
                    <tr><td>Revision Requests &amp; Responses</td><td>Both Parties</td><td>Xochiii platform message export only</td></tr>
                    <tr><td>Pre-Dispute On-Platform Communication Proof</td><td>Filing Party</td><td>Xochiii platform message export only — off-platform records not accepted</td></tr>
                    <tr><td>Timeline of Events</td><td>Filing Party</td><td>Written chronology</td></tr>
                    <tr><td>Desired Resolution</td><td>Filing Party</td><td>Written statement</td></tr>
                </tbody>
            </table>
            <h3>5.2 Acknowledgement SLA</h3>
            <p>Xochiii will acknowledge all formal dispute filings within 4 business hours. The opposing party will be notified and given 48 hours to submit their response and evidence package.</p>

            <h2>6. The Xochiii Review Framework</h2>
            <p>Once both parties have submitted documentation, the assigned Dispute Reviewer applies the following structured framework. This ensures every case is evaluated using the same lens.</p>
            <h3>Step 1 — Contract Anchoring</h3>
            <p>The reviewer reads the original contract in full. Every subsequent evaluation point is anchored to specific, written contract terms. If a term is absent from the contract, it cannot be enforced in the dispute.</p>
            <h3>Step 2 — Evidence Classification &amp; Weighting</h3>
            <p>All submitted evidence is classified into weight tiers. On-platform evidence always carries the highest weight. Off-platform evidence (WhatsApp, DMs, email, SMS, phone records) is not automatically excluded, but it is never treated as full standalone proof. Instead, the submitting party is given up to three chances to provide a matching on-platform record that corroborates it:</p>
            <ul>
                <li><strong>Full Weight:</strong> Xochiii platform message logs, file submission timestamps, payment records, on-platform revision threads, milestone records</li>
                <li><strong>Reduced Weight:</strong> Off-platform evidence where the party has been asked once to provide on-platform corroboration but has not yet done so — treated as supporting context only</li>
                <li><strong>Minimum Weight:</strong> Off-platform evidence where two corroboration requests have been made with no response — may support a tie-break but cannot be the sole basis for any finding</li>
                <li><strong>Subjective Claims:</strong> Written statements from either party with no documentation of any kind — lowest weight in all cases</li>
            </ul>
            <div className="not-prose my-6 rounded-2xl border border-amber-500/30 bg-amber-500/5 p-6">
                <p className="mb-4 flex items-center gap-2 font-semibold text-amber-400">
                    <span>⚠️</span>
                    <span>Off-Platform Evidence — The 3-Strike Weight System</span>
                </p>
                <p className="mb-3 text-sm text-white/60">When off-platform evidence is submitted, the reviewer must follow this escalating process:</p>
                <ol className="mb-4 space-y-2 text-sm text-white/70 list-none pl-0">
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">1</span>
                        <span>Log the evidence and notify the submitting party, giving them <strong className="text-white">48 hours</strong> to provide a matching on-platform record.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">2</span>
                        <span>If no corroboration after the first request, send <strong className="text-white">one reminder</strong> with a further 48 hours.</span>
                    </li>
                    <li className="flex gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full bg-amber-500/20 text-amber-400 font-bold text-xs">3</span>
                        <span>If still no corroboration, the evidence is finalised at <strong className="text-white">Minimum Weight</strong> and review proceeds.</span>
                    </li>
                </ol>
                <p className="text-sm text-white/60">Off-platform evidence is never excluded outright, but without on-platform corroboration it cannot decide a case on its own. <strong className="text-amber-400">The strongest position always belongs to the party whose evidence lives on the Xochiii platform.</strong></p>
            </div>
            <h3>Step 3 — The 5-Point Evaluation</h3>
            <p>The reviewer scores each of the following points on a documented assessment sheet:</p>
            <table>
                <thead><tr><th>#</th><th>Evaluation Point</th><th>Reviewer Asks</th></tr></thead>
                <tbody>
                    <tr><td>1</td><td><strong>Deliverable Compliance</strong></td><td>Does the submitted work match the exact deliverables listed in the contract? Line by line.</td></tr>
                    <tr><td>2</td><td><strong>Timeline Adherence</strong></td><td>Were deadlines met? Was any delay pre-communicated and mutually agreed upon?</td></tr>
                    <tr><td>3</td><td><strong>Revision Conduct</strong></td><td>Were revision requests reasonable and within scope? Did the Creator respond appropriately? How many revision rounds were contracted?</td></tr>
                    <tr><td>4</td><td><strong>Good Faith Conduct</strong></td><td>Did both parties communicate honestly and attempt resolution before escalating? Any signs of bad faith?</td></tr>
                    <tr><td>5</td><td><strong>Scope Clarity</strong></td><td>Was the deliverable scope clearly defined in the contract? If ambiguous, who bears responsibility for the ambiguity?</td></tr>
                </tbody>
            </table>

            <h2>7. Possible Outcomes &amp; Resolutions</h2>
            <p>Based on the 5-Point Evaluation, the Dispute Reviewer will issue one of the following rulings. Partial rulings are possible when fault is shared.</p>
            <table>
                <thead><tr><th>Ruling</th><th>Escrow Action</th><th>Condition</th></tr></thead>
                <tbody>
                    <tr><td>Full Release to Creator</td><td>100% of escrowed funds released to Creator</td><td>Creator fully delivered per contract terms</td></tr>
                    <tr><td>Full Refund to Brand</td><td>100% of escrowed funds returned to Brand</td><td>Creator materially failed to deliver per contract</td></tr>
                    <tr><td>Partial Release (Split)</td><td>Funds split per completion percentage</td><td>Partial delivery confirmed; shared fault or scope ambiguity</td></tr>
                    <tr><td>Revision Order</td><td>Funds held; Creator must deliver specific revision</td><td>Work delivered but with documented, in-scope gaps</td></tr>
                    <tr><td>Contract Void</td><td>Full refund to Brand; Creator keeps any paid milestones</td><td>Fundamental breach of contract terms by either party</td></tr>
                </tbody>
            </table>
            <h3>7.1 Partial Split Calculation Method</h3>
            <p>When a split ruling is issued, the split percentage is calculated based on: (a) percentage of deliverables completed as documented, (b) degree of fault assigned per evaluation, and (c) any pre-paid milestones already released. All calculations are documented in the ruling report.</p>

            <h2>8. Dispute Timeline &amp; SLAs</h2>
            <table>
                <thead><tr><th>Milestone</th><th>SLA Window</th></tr></thead>
                <tbody>
                    <tr><td>Dispute acknowledgement after filing</td><td>4 business hours</td></tr>
                    <tr><td>Opposing party response window</td><td>48 hours</td></tr>
                    <tr><td>Standard dispute review &amp; ruling</td><td>5–7 business days</td></tr>
                    <tr><td>Complex/high-value dispute review</td><td>10–14 business days</td></tr>
                    <tr><td>Appeals decision</td><td>7 business days</td></tr>
                    <tr><td>Escrow fund execution after ruling</td><td>24–48 hours</td></tr>
                </tbody>
            </table>
            <div className="not-prose my-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white mb-1">Note on Delays</p>
                <p className="text-sm text-white/60">If either party fails to submit required documentation within their window, the dispute may be ruled in favor of the responsive party, or the missing party may forfeit their right to contest the evidence on record.</p>
            </div>

            <h2>9. Appeals Process</h2>
            <p>Either party may appeal a ruling within 5 business days of the decision being issued. Appeals are not rehearings — they are procedural reviews.</p>
            <h3>Valid Grounds for Appeal</h3>
            <ul>
                <li>New material evidence that was not previously available</li>
                <li>Documented procedural error in the review process</li>
                <li>Evidence that the reviewer relied on information outside the submitted documentation</li>
            </ul>
            <h3>Invalid Grounds for Appeal</h3>
            <ul>
                <li>Disagreement with the ruling based on the same evidence</li>
                <li>Change of desired resolution</li>
                <li>Claims of reviewer bias without documented evidence</li>
            </ul>
            <p>Appeals are reviewed by a Senior Reviewer not involved in the original case. The Senior Reviewer&apos;s decision is final and binding.</p>

            <h2>10. Reviewer Standards &amp; Conflict of Interest</h2>
            <p>All Dispute Reviewers at Xochiii must adhere to the following standards:</p>
            <ul>
                <li>A Reviewer must recuse themselves from any dispute where they have a prior relationship with either party</li>
                <li>Reviewers may not communicate directly with either party outside of the official documented process</li>
                <li>All review notes and scoring sheets must be retained for a minimum of 24 months</li>
                <li>Reviewers must complete Xochiii&apos;s Dispute Certification before handling cases</li>
                <li>Any attempted bribery, pressure, or manipulation by either party must be immediately escalated and documented — this constitutes automatic forfeiture of that party's claim</li>
            </ul>

            <h2>11. Documentation &amp; Record Keeping</h2>
            <p>Every dispute must generate and retain the following documents, stored in Xochiii&apos;s secure case management system:</p>
            <ol>
                <li>Dispute Intake Form (filed by claimant)</li>
                <li>Evidence Log (all submissions from both parties with timestamps)</li>
                <li>5-Point Evaluation Scoring Sheet (completed by Reviewer)</li>
                <li>Reviewer Decision Report with written rationale</li>
                <li>Ruling Notification sent to both parties</li>
                <li>Escrow Execution Record</li>
                <li>Appeals documentation (if applicable)</li>
            </ol>
            <p>All records are retained for a minimum of 3 years from the date of resolution. Parties may request a copy of their case file at any time.</p>

            <h2>12. Platform Consequences for Bad Faith</h2>
            <p>Xochiii reserves the right to take platform action against either party found to have acted in bad faith during a dispute. Documented bad faith behaviors include:</p>
            <ul>
                <li>Submitting fabricated or altered evidence</li>
                <li>Threatening or harassing the opposing party or Xochiii staff</li>
                <li>Filing frivolous disputes to intentionally delay payment</li>
                <li>Deliberately withholding evidence during the review period</li>
            </ul>
            <p>Platform consequences range from formal warnings to permanent suspension, based on severity and history.</p>

            <h2>13. Platform-Only Communication Policy</h2>
            <p>This section formalizes Xochiii&apos;s mandatory platform communication rule, which underpins the integrity of every dispute review.</p>
            <h3>13.1 The Rule</h3>
            <p>Every communication relevant to a collaboration — from brief acceptance to final delivery approval — must occur exclusively through Xochiii&apos;s built-in messaging and project management tools. This includes but is not limited to:</p>
            <ul>
                <li>Deliverable briefs and scope definitions</li>
                <li>Feedback on submitted work</li>
                <li>Revision requests (all rounds)</li>
                <li>Deadline change requests or extension agreements</li>
                <li>Scope additions or removals</li>
                <li>Approval or rejection of deliverables</li>
                <li>Payment release confirmations</li>
            </ul>
            <h3>13.2 How Off-Platform Evidence Is Treated</h3>
            <p>Off-platform evidence is not automatically excluded. However, it is subject to a structured weight reduction process. When a party submits off-platform evidence in a dispute, they will be given up to three opportunities to provide a matching on-platform record that corroborates it. The weight applied depends on whether corroboration is provided:</p>
            <ul>
                <li>With on-platform corroboration: the evidence is treated at full weight alongside the platform record</li>
                <li>After one unresponded request for corroboration: the evidence is held at reduced weight — supporting context only</li>
                <li>After two unresponded requests: the evidence is treated at minimum weight — it may influence a tied case but cannot be the sole basis for a ruling</li>
            </ul>
            <p>This system means that parties who communicate off-platform are not shut out, but they are at a structural disadvantage in any dispute. The safest position — always — is to keep everything on Xochiii.</p>
            <h3>13.3 Why This Rule Exists</h3>
            <p>Off-platform communication cannot be independently verified for authenticity, timing, or context. Screenshots can be altered, conversations can be selectively shared, and verbal agreements leave no record. On-platform communication is timestamped, tamper-evident, and accessible to both parties in full. The 3-strike system gives parties a fair chance to support their off-platform evidence while ensuring the platform record remains the most powerful form of proof.</p>
            <h3>13.4 Responsibility</h3>
            <p>Both Brands and Creators are responsible for keeping their collaboration communication on the platform. If a party conducts communication off-platform and a dispute arises, they carry the burden of corroborating that evidence. Xochiii will not penalise the on-platform party for the other&apos;s choice to go elsewhere.</p>
            <div className="not-prose my-4 rounded-xl border border-white/10 bg-white/5 p-5">
                <p className="font-semibold text-white mb-1">Practical Guidance for Both Parties</p>
                <p className="text-sm text-white/60">If someone you are working with on Xochiii asks you to move the conversation to WhatsApp, email, or any other channel — politely decline and redirect them to the platform. You can still receive off-platform messages, but if a dispute arises, only your on-platform record will carry full evidential weight. When in doubt: if you want it to count fully, send it on Xochiii.</p>
            </div>

            <h2>14. SOP Review &amp; Amendment Policy</h2>
            <p>This SOP will be reviewed quarterly by the Xochiii Operations Team. Amendments may be triggered by recurring dispute patterns, legal guidance, or platform policy updates. All parties are subject to the SOP version in effect at the time their dispute is filed. The current version is always published in the Xochiii Help Center.</p>
            <hr />
            <p className="text-sm text-white/40">This document is effective as of January 2026 and supersedes all prior dispute guidelines. — <strong className="text-white/60">Xochiii Operations Team</strong></p>
        </div>
    );
}