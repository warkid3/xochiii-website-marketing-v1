export default function PrivacyPage() {
    return (
        <>
            <h1>Xochiii Privacy Policy</h1>
            <p className="text-muted-foreground text-sm">Last Updated: February 2026</p>

            <h2>1. Data We Collect</h2>
            <h3>1.1 Information You Provide</h3>
            <ul>
                <li><strong>Identity Data:</strong> Name, Email, Phone Number, Links.</li>
                <li><strong>KYC Data:</strong> PAN Card, Aadhaar (stored securely via encrypted third-party providers).</li>
                <li><strong>Payment Data:</strong> Bank Account details, UPI IDs.</li>
                <li><strong>Content:</strong> Messages, files, and deliverables uploaded to the Platform.</li>
            </ul>

            <h3>1.2 Automatically Collected Data</h3>
            <ul>
                <li>Device information, IP address, and browser type.</li>
                <li>Usage data (clicks, dwell time, feature usage).</li>
            </ul>

            <h2>2. How We Use Your Data</h2>
            <ul>
                <li><strong>Service Delivery:</strong> To facilitate deals, escrow, and chat.</li>
                <li><strong>Verification:</strong> To verify identity (KYC) and prevent fraud.</li>
                <li><strong>Communication:</strong> To send deal notifications, warnings (72h timer), and marketing emails.</li>
                <li><strong>Improvement:</strong> To analyze usage and improve Platform features.</li>
            </ul>

            <h2>3. Data Sharing</h2>
            <p>We do NOT sell your personal data. We share data only with:</p>
            <ul>
                <li><strong>Counterparties:</strong> Your shipping address (if applicable) is shared with the specific Brand only <em>after</em> Escrow is funded.</li>
                <li><strong>Service Providers:</strong> Payment Processors (Stripe/Razorpay/Wise), KYC vendors, Email services.</li>
                <li><strong>Legal Regulatory:</strong> When required by law (e.g., tax reporting, court orders).</li>
            </ul>

            <h2>4. Shadow Accounts</h2>
            <p>If you are a Brand accessing the platform via a "Magic Link":</p>
            <ul>
                <li>We create a temporary "Shadow Account" linked to your email.</li>
                <li>This account stores your chat history and deal data.</li>
                <li>You may claim this account and convert it to a full profile at any time.</li>
            </ul>

            <h2>5. Security</h2>
            <p>We use industry-standard encryption (SSL/TLS) for data in transit and at rest. Access to sensitive data (like KYC docs) is strictly restricted to authorized personnel.</p>

            <h2>6. Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
                <li>Access your data.</li>
                <li>Correct inaccurate data.</li>
                <li>Request deletion of your account (subject to retention required for legal/financial records).</li>
            </ul>

            <h2>7. Contact</h2>
            <p>For privacy concerns, contact: <code>privacy@xochiii.com</code></p>
        </>
    );
}
