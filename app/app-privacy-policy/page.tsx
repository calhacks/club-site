import DefaultLayout from "../default-layout";

export default function PrivacyPolicy() {
  return (
    <DefaultLayout>
      <main>
        <section className="w-full flex flex-col items-center justify-center py-16 md:py-24">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm p-4 sm:p-6 rounded-xl flex-1">
            <h4 className="text-lg sm:text-xl font-bold text-primary mb-2">
              Privacy Policy
            </h4>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4">
              <span className="font-semibold">Effective Date:</span> 05/2026
            </p>

            <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-6">
              This Privacy Policy describes how HackBerkeley collects, uses, and
              protects information when you use our hackathon companion app.
            </p>

            <div className="space-y-6 text-sm sm:text-base text-gray-700 dark:text-gray-300">
              <section>
                <h5 className="font-bold text-primary mb-2">
                  1. Information We Collect
                </h5>
                <p className="mb-2">
                  We collect only the following personal information:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>Name</li>
                  <li>Email address</li>
                </ul>
                <p>
                  We do not collect sensitive personal information, payment
                  information, precise location data, contacts, photos, health
                  information, or advertising identifiers.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">
                  2. How We Use Your Information
                </h5>
                <p className="mb-2">
                  We use your name and email address only to support your
                  participation in the hackathon. Specifically, we may use this
                  information to:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>
                    Identify your role in the hackathon, such as hacker,
                    organizer, volunteer, judge, or mentor
                  </li>
                  <li>Provide app features appropriate to your role</li>
                  <li>
                    Support basic event functionality, such as workshop
                    check-ins
                  </li>
                  <li>
                    Help organizers manage attendance, participation, and event
                    logistics
                  </li>
                  <li>
                    Prevent duplicate accounts or unauthorized access to
                    role-specific features
                  </li>
                </ul>
                <p>
                  We do not use your information for advertising or marketing
                  purposes.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">
                  3. How We Share Your Information
                </h5>
                <p className="mb-2">
                  We do not sell your personal information.
                </p>
                <p className="mb-2">
                  We may share your name and email address only with:
                </p>
                <ul className="list-disc pl-5 space-y-1 mb-2">
                  <li>
                    Hackathon organizers or authorized event staff, when needed
                    to operate the event
                  </li>
                  <li>
                    Service providers that help us run the app, such as
                    authentication, hosting, database, or analytics
                    infrastructure, if applicable
                  </li>
                </ul>
                <p>
                  These service providers are only permitted to process your
                  information for the purposes described in this Privacy Policy.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">
                  4. Data Retention
                </h5>
                <p className="mb-2">
                  We keep your name and email address only for as long as
                  necessary to operate the hackathon and provide app
                  functionality.
                </p>
                <p>
                  After the event, we may delete, anonymize, or retain limited
                  records as needed for event administration, security, or legal
                  compliance.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">
                  5. Data Security
                </h5>
                <p className="mb-2">
                  We use reasonable technical and organizational safeguards to
                  protect your information from unauthorized access, loss,
                  misuse, or disclosure.
                </p>
                <p>
                  However, no method of transmission or storage is completely
                  secure, so we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">
                  6. Children’s Privacy
                </h5>
                <p>
                  The app is intended for hackathon participants and event
                  staff. We do not knowingly collect information from children
                  under the age of 13. If we learn that we have collected
                  information from a child under 13, we will delete it as soon
                  as reasonably possible.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">7. Your Choices</h5>
                <p className="mb-2">
                  You may request to access, correct, or delete your personal
                  information by contacting us at:
                </p>
                <a
                  href="mailto:team@hackberkeley.org"
                  className="font-semibold text-primary hover:underline"
                >
                  team@hackberkeley.org
                </a>
                <p className="mt-2">
                  Please note that deleting your information may limit your
                  ability to use certain app features, such as role-based access
                  or workshop check-ins.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">
                  8. Changes to This Privacy Policy
                </h5>
                <p>
                  We may update this Privacy Policy from time to time. If we
                  make material changes, we will update the effective date above
                  and may notify users through the app or other appropriate
                  means.
                </p>
              </section>

              <section>
                <h5 className="font-bold text-primary mb-2">9. Contact Us</h5>
                <p className="mb-2">
                  For questions about this Privacy Policy or how your
                  information is handled, contact us at:
                </p>
                <a
                  href="mailto:team@hackberkeley.org"
                  className="font-semibold text-primary hover:underline"
                >
                  team@hackberkeley.org
                </a>
              </section>
            </div>
          </div>
        </section>
      </main>
    </DefaultLayout>
  );
}
