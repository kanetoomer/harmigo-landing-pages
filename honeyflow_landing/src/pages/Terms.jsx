import React from 'react';

export default function Terms() {
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Terms & Conditions</h1>
      <p className="text-sm text-gray-600 mb-6">
        Effective Date: <span className="font-semibold">August 16, 2025</span>
      </p>
      
      <div className="space-y-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            Honeyflow ("Service") is a cloud-based communication platform owned and operated by Harmigo, Inc., 
            a Delaware C Corporation ("Company", "we", "us", "our"). By creating an account, accessing, or using 
            Honeyflow, you ("Customer", "Client", "you") agree to these Terms & Conditions ("Terms"). 
            If you do not agree, do not use the Service.
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Eligibility & Authority</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>You must be at least 18 years old and legally able to contract.</li>
              <li>If using Honeyflow on behalf of an organization, you represent you have authority to bind that entity.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. Scope of Service</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Honeyflow provides software-as-a-service (SaaS) communication tools for home service contractors and their customers. Features may include messaging, notifications, scheduling, file sharing, integrations, and analytics.</li>
              <li>We may modify, enhance, or discontinue features without liability, provided core functionality remains reasonably available.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. Account Registration & Security</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>You are responsible for all activity under your account.</li>
              <li>You must provide accurate and up-to-date information.</li>
              <li>You agree not to share login credentials and to implement reasonable safeguards against unauthorized access.</li>
              <li>We reserve the right to suspend or terminate accounts for suspicious or abusive activity.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Subscription, Fees & Payment</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Honeyflow is offered on a subscription basis. Plans, pricing, and billing cycles are stated at sign-up.</li>
              <li>Fees are due in advance and non-refundable except as required by law.</li>
              <li>Subscriptions auto-renew unless canceled before renewal.</li>
              <li>We may adjust fees with 30 days' notice. Continued use after notice constitutes acceptance.</li>
              <li>Failure to pay may result in suspension or termination.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Permitted Use & Restrictions</h2>
            <p className="text-gray-700 mb-4">You agree not to:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Use the Service for unlawful, fraudulent, or harmful purposes.</li>
              <li>Send spam, abusive, or unsolicited communications.</li>
              <li>Circumvent security, copy, reverse-engineer, or decompile the Service.</li>
              <li>Resell or sublicense Honeyflow without prior written consent.</li>
              <li>Use Honeyflow in violation of applicable laws (telecommunications, privacy, data protection, export restrictions).</li>
            </ul>
            <p className="text-gray-700 mt-4">We reserve the right to audit usage and suspend accounts violating this section.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Customer Data & Privacy</h2>
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Ownership:</strong>
                <span className="text-gray-700"> You retain ownership of all data you input into Honeyflow ("Customer Data").</span>
              </div>
              <div>
                <strong className="text-gray-900">License:</strong>
                <span className="text-gray-700"> You grant Harmigo, Inc. a limited license to host, process, and transmit Customer Data solely for providing the Service.</span>
              </div>
              <div>
                <strong className="text-gray-900">Responsibilities:</strong>
                <span className="text-gray-700"> You are responsible for (a) obtaining necessary consents from your customers, and (b) ensuring your data complies with applicable law (e.g., TCPA, GDPR, CCPA).</span>
              </div>
              <div>
                <strong className="text-gray-900">Security:</strong>
                <span className="text-gray-700"> We employ commercially reasonable safeguards but cannot guarantee absolute security.</span>
              </div>
              <div>
                <strong className="text-gray-900">Data Loss:</strong>
                <span className="text-gray-700"> You are responsible for backing up your Customer Data. We are not liable for accidental deletion, corruption, or failure of third-party systems.</span>
              </div>
              <p className="text-gray-700">See our Privacy Policy [Insert Link] for details.</p>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Third-Party Services & Integrations</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Honeyflow may integrate with third-party services (SMS carriers, email providers, CRMs, etc.).</li>
              <li>We do not control third-party providers and disclaim liability for their actions.</li>
              <li>Your use of third-party services is subject to their own terms.</li>
              <li>We may suspend integrations if a third-party provider causes instability, security issues, or noncompliance.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Availability & Service Levels</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Honeyflow strives for high availability but does not guarantee uninterrupted service.</li>
              <li>Scheduled maintenance may cause downtime; reasonable notice will be given where possible.</li>
              <li>We are not liable for downtime caused by force majeure, third-party failures, or customer misuse.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Intellectual Property</h2>
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Our IP:</strong>
                <span className="text-gray-700"> Honeyflow software, designs, trademarks, and documentation are owned exclusively by Harmigo, Inc.</span>
              </div>
              <div>
                <strong className="text-gray-900">Your IP:</strong>
                <span className="text-gray-700"> Customer Data remains your property.</span>
              </div>
              <div>
                <strong className="text-gray-900">No Transfer:</strong>
                <span className="text-gray-700"> These Terms do not transfer ownership of any intellectual property rights.</span>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Confidentiality</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Each party agrees to protect the other's confidential information with reasonable safeguards.</li>
              <li>Confidential information excludes publicly available data or information independently developed without use of the other party's materials.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Export Compliance & Restricted Use</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>You may not use Honeyflow in jurisdictions subject to U.S. trade restrictions or for prohibited activities.</li>
              <li>You must comply with all applicable export and data transfer regulations.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">12. Disclaimer of Warranties</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Honeyflow is provided "AS IS" and "AS AVAILABLE."</li>
              <li>We disclaim all warranties, express or implied, including merchantability, fitness for purpose, or non-infringement.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">13. Limitation of Liability</h2>
            <p className="text-gray-700 mb-4">To the maximum extent permitted by law:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Harmigo, Inc. is not liable for lost profits, lost data, or indirect, incidental, or consequential damages.</li>
              <li>Our total liability is limited to the greater of:
                <ul className="list-disc ml-6 mt-2 space-y-1">
                  <li>(a) amounts paid by you in the 12 months preceding the claim, or</li>
                  <li>(b) $500 USD.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">14. Indemnification</h2>
            <p className="text-gray-700 mb-4">You agree to indemnify, defend, and hold harmless Harmigo, Inc. and its officers, employees, and affiliates from any claims, damages, or expenses arising from:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Your use of the Service,</li>
              <li>Your violation of these Terms, or</li>
              <li>Your infringement of third-party rights.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">15. Termination & Suspension</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>You may cancel at any time; termination does not relieve you of unpaid fees.</li>
              <li>We may suspend or terminate your account if you breach these Terms, misuse the Service, or fail to pay fees.</li>
              <li>Upon termination, access to Customer Data may be disabled after 30 days, unless retention is legally required.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">16. Modifications to Terms</h2>
            <p className="text-gray-700">We may update these Terms with 30 days' notice. Your continued use after notice constitutes acceptance.</p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">17. Governing Law & Dispute Resolution</h2>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Governed by the laws of Delaware, USA.</li>
              <li>Any disputes will be resolved exclusively in state or federal courts located in Delaware.</li>
              <li>The parties waive the right to class actions and agree to individual dispute resolution.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">18. Miscellaneous</h2>
            <div className="space-y-3">
              <div>
                <strong className="text-gray-900">Entire Agreement:</strong>
                <span className="text-gray-700"> These Terms are the complete agreement between you and Harmigo, Inc.</span>
              </div>
              <div>
                <strong className="text-gray-900">Assignment:</strong>
                <span className="text-gray-700"> You may not assign rights without our consent. We may assign as part of a merger, acquisition, or corporate restructuring.</span>
              </div>
              <div>
                <strong className="text-gray-900">Severability:</strong>
                <span className="text-gray-700"> If any provision is invalid, the rest remain enforceable.</span>
              </div>
              <div>
                <strong className="text-gray-900">Force Majeure:</strong>
                <span className="text-gray-700"> We are not liable for delays beyond our reasonable control (natural disasters, strikes, internet outages, etc.).</span>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">19. Contact Us</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about these Terms & Conditions, please contact:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900">Harmigo, Inc.</p>
              <p className="text-gray-700">
                Email: <a href="mailto:info@harmigo.com" className="text-blue-600 hover:text-blue-800 underline">info@harmigo.com</a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
