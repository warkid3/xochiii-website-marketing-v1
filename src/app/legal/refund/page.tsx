export default function RefundPage() {
    return (
        <>
            <h1>Xochiii Refund & Dispute Policy</h1>
            <p className="text-muted-foreground text-sm">Last Updated: February 2026</p>

            <h2>1. General Policy</h2>
            <p>Xochiii facilitates secure transactions via Escrow. <strong>Funds are held in a neutral account until the deal is concluded.</strong> This policy outlines when and how funds can be returned.</p>

            <h2>2. Refund Eligibility</h2>
            <p>A Brand is eligible for a refund ONLY if:</p>
            <ol>
                <li><strong>Cancellation by Creator:</strong> The Creator cancels the deal before delivery.</li>
                <li><strong>Mutual Cancellation:</strong> Both parties agree to cancel the deal via the Chat interface.</li>
                <li><strong>Non-Delivery:</strong> The Creator fails to submit any work by the deadline (plus a reasonable grace period).</li>
                <li><strong>Dispute Resolution:</strong> A dispute is resolved in the Brand's favor by Xochiii Administration.</li>
            </ol>

            <p><strong>Refunds are NOT granting for:</strong></p>
            <ul>
                <li>"Change of mind" after work has begun.</li>
                <li>Taste/Preference differences (if the work meets the objective requirements of the brief).</li>
                <li>Failure to review within the 72-hour window (see Auto-Release).</li>
            </ul>

            <h2>3. The Dispute Process</h2>
            <h3>Stage 1: "Request Revision"</h3>
            <ul>
                <li>Before escalating, the Brand must use the "Request Revision" button on the submitted file.</li>
                <li>The Creator must be given a fair chance to fix issues based on specific feedback.</li>
            </ul>

            <h3>Stage 2: Raising a Dispute</h3>
            <ul>
                <li>If the Creator refuses to revise or is unresponsive, the Brand may click "Raise Dispute".</li>
                <li><strong>Effect:</strong> This <strong>pauses the 72-hour Auto-Release timer</strong> immediately.</li>
                <li>The Funds remain frozen in Escrow.</li>
            </ul>

            <h3>Stage 3: Admin Review</h3>
            <p>Xochiii Admins will review:</p>
            <ol>
                <li>The initial Brief/Deal Details.</li>
                <li>The Chat History.</li>
                <li>The Submitted Deliverables.</li>
                <li>The Revision Feedback.</li>
            </ol>

            <p><strong>Verdict:</strong></p>
            <ul>
                <li><strong>Full Refund:</strong> Funds returned to Brand. Creator gets nothing.</li>
                <li><strong>Partial Refund:</strong> Split based on work completed.</li>
                <li><strong>No Refund:</strong> Funds released to Creator (if work met the brief but Brand was unreasonable).</li>
            </ul>

            <h2>4. Auto-Release (The "No Ghosting" Rule)</h2>
            <ul>
                <li>If a Brand does not take action (Approve/Reject/Dispute) within <strong>72 hours</strong> of a submission, the funds are automatically released to the Creator.</li>
                <li><strong>Once funds are released, they CANNOT be reversed or refunded.</strong></li>
                <li>Notifications are sent at 24h, 6h, and 1h remaining to ensure the Brand is aware.</li>
            </ul>

            <h2>5. Contact for Disputes</h2>
            <p>To raise a manual dispute if the platform button is unavailable: <code>disputes@xochiii.com</code> (Include Deal ID).</p>
        </>
    );
}
