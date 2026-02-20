export default function PaymentsPage() {
    return (
        <>
            <h1>How Payments Work & Contact Info</h1>

            <h2>How Payments Work on Xochiii</h2>
            <p>We use a <strong>Secure Escrow System</strong> to protect both Creators and Brands.</p>

            <h3>Step 1: Funding (The Safety Lock)</h3>
            <ul>
                <li><strong>Who:</strong> The Brand.</li>
                <li><strong>Action:</strong> Before the Creator starts working, the Brand deposits 100% of the Deal Amount into Xochiii Escrow.</li>
                <li><strong>Why:</strong> This proves the Brand has the money and is serious. The Creator can start working with confidence, knowing the money is secure.</li>
            </ul>

            <h3>Step 2: Work & Delivery</h3>
            <ul>
                <li>The money sits safely in the "Middle Account" (Escrow).</li>
                <li>The Creator completes the work and uploads it to the Deal Chat ("The Vault").</li>
            </ul>

            <h3>Step 3: Review & Release</h3>
            <ul>
                <li><strong>Brand Action:</strong> The Brand reviews the work. They can "Request Changes" or "Approve".</li>
                <li><strong>Approval:</strong> Once the Brand clicks "Approve", the money moves <strong>instantly</strong> from Escrow to the Creator's Wallet (minus platform fees).</li>
                <li><strong>Auto-Release:</strong> If the Brand forgets to review, our system automatically releases the money after <strong>72 hours</strong> to ensure the Creator gets paid.</li>
            </ul>

            <h3>Step 4: Withdrawal</h3>
            <ul>
                <li><strong>Who:</strong> The Creator.</li>
                <li><strong>Action:</strong> The Creator withdraws funds from their Xochiii Wallet to their Bank Account.</li>
                <li><strong>Timing:</strong>
                    <ul>
                        <li><strong>Standard:</strong> 1-3 Business Days.</li>
                        <li><strong>Instant:</strong> Immediate (subject to small fee).</li>
                    </ul>
                </li>
            </ul>

            <hr />

            <h2>Contact Us</h2>
            <p>We are here to help!</p>

            <h3>Support</h3>
            <ul>
                <li><strong>General Inquiries:</strong> <code>hello@xochiii.com</code></li>
                <li><strong>Technical Support:</strong> <code>support@xochiii.com</code></li>
                <li><strong>Disputes:</strong> <code>disputes@xochiii.com</code></li>
            </ul>

            <h3>Corporate Office</h3>
            <address className="not-italic">
                <strong>Klover Interacve arts and game tech silution pvt ltd</strong><br />
                4th Floor, Phase II Building, NFDC Campus,<br />
                24, Pedder Rd, IT Colony, Cumballa Hill,<br />
                Mumbai, Maharashtra 400026
            </address>

            <h3>Grievance Officer</h3>
            <p>
                Name: Harsh Tambe<br />
                Email: <code>harshtambe@xochiii.com</code><br />
                Phone: +91-9987804837
            </p>
        </>
    );
}
