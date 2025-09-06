import React from 'react';

export default function PrivacyPolicy() {
  
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-2xl font-bold mb-6">Privacy Policy</h1>
      <p className="text-sm text-gray-600 mb-6">
        Effective Date: <span className="font-semibold">August 16, 2025</span>
      </p>
      
      <div className="space-y-6">
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed">
            HoneyFlow ("we," "our," or "us") is committed to protecting the privacy of our customers, partners, and website visitors. This Privacy Policy explains how we collect, use, and protect your information when you use our website, software, and related services ("Services").
          </p>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">1. Information We Collect</h2>
            <p className="text-gray-700 mb-4">We collect the following types of information:</p>
            
            <div className="ml-4 space-y-4">
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">a. Information You Provide</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li><strong>Account Information:</strong> Name, email address, phone number, company name, billing information.</li>
                  <li><strong>Customer Data:</strong> If you use HoneyFlow to communicate with your clients, we collect the information you choose to send, such as messages, job updates, and contact details.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">b. Information We Collect Automatically</h3>
                <ul className="list-disc ml-6 space-y-1 text-gray-700">
                  <li><strong>Usage Data:</strong> Pages visited, actions taken in the platform, login timestamps.</li>
                  <li><strong>Device Data:</strong> Browser type, IP address, operating system, and device identifiers.</li>
                  <li><strong>Cookies & Tracking:</strong> We use cookies and similar technologies to enhance user experience and analyze performance.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">c. Information from Third-Party Integrations</h3>
                <p className="text-gray-700">When you connect HoneyFlow to your CRM or other tools, we may collect relevant job and customer data as authorized by you.</p>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">We use collected information to:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Provide, maintain, and improve our Services.</li>
              <li>Automate and deliver communications to your customers.</li>
              <li>Sync with your CRM and project tracking systems.</li>
              <li>Process payments and send billing notices.</li>
              <li>Respond to support requests and inquiries.</li>
              <li>Send product updates, promotional content, and educational resources (you can opt-out anytime).</li>
              <li>Comply with legal requirements.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">3. How We Share Your Information</h2>
            <p className="text-gray-700 mb-4">We do not sell your information. We only share it in the following cases:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li><strong>Service Providers:</strong> Vendors who help us operate HoneyFlow (e.g., hosting, analytics, payment processing).</li>
              <li><strong>Legal Compliance:</strong> When required by law or to protect rights, safety, or security.</li>
              <li><strong>Business Transfers:</strong> If HoneyFlow is involved in a merger, acquisition, or sale of assets.</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">4. Data Retention</h2>
            <p className="text-gray-700">
              We retain personal and customer data for as long as needed to provide the Services or comply with legal obligations. You can request deletion of your data at any time (see Section 8).
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">5. Data Security</h2>
            <p className="text-gray-700">
              We implement industry-standard security measures, including encryption in transit (HTTPS) and at rest, access controls, and regular security audits. No system is 100% secure, but we work to protect your data at all times.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">6. Your Rights</h2>
            <p className="text-gray-700 mb-4">Depending on your location, you may have the right to:</p>
            <ul className="list-disc ml-6 space-y-1 text-gray-700">
              <li>Access and obtain a copy of your data.</li>
              <li>Correct inaccuracies in your data.</li>
              <li>Request deletion of your data.</li>
              <li>Restrict or object to certain processing activities.</li>
              <li>Request data portability.</li>
            </ul>
            <p className="text-gray-700 mt-4">
              To exercise these rights, contact us at <a href="mailto:info@harmigo.com" className="text-blue-600 hover:text-blue-800 underline">info@harmigo.com</a>.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">7. Cookies & Tracking</h2>
            <p className="text-gray-700">
              We use cookies to remember preferences, improve user experience, and measure site performance. You can disable cookies in your browser settings, but some features may not work correctly.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">8. Third-Party Links</h2>
            <p className="text-gray-700">
              Our Services may include links to third-party websites. We are not responsible for the privacy practices or content of those sites.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700">
              HoneyFlow is not intended for children under 16. We do not knowingly collect data from children.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">10. Changes to This Policy</h2>
            <p className="text-gray-700">
              We may update this Privacy Policy periodically. The "Effective Date" will reflect the most recent version. Material changes will be communicated via email or in-app notification.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-2">
              If you have any questions about this Privacy Policy or our data practices, please contact:
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
