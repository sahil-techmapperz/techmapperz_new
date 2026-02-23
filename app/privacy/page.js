import Link from 'next/link';
import Head from 'next/head';
import ScrollToTop from '../_Components/ScrollToTop';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://www.techmapperz.com"; // Fallback URL

export const metadata = {
  title: "Mapping Your Business for Growth | Privacy Policy | Techmapperz",
  description: "Techmapperz—mapping your business to success. Enhance growth, efficiency, and digital presence with our expert solutions tailored for your needs",
  alternates: {
    canonical: `${BASE_URL}/privacy`,
  },
};


const PrivacyPolicyPage = () => {


  return (
    <div className="bg-gray-900 text-white">
      <ScrollToTop />
      <div className="h-96 w-full flex flex-col justify-center items-center bg-cover bg-center" style={{ backgroundImage: "url('/Photos/banner_2.webp')" }}>
        <h1 className="font-semibold text-6xl max-sm:text-3xl text-center leading-none tracking-widest">Data Privacy Policy</h1>
        <p className="font-normal text-xl leading-relaxed tracking-widest">
          <Link href="/">Home</Link> / Data Privacy Policy
        </p>
      </div>

      <div className="p-8 md:p-20 w-full max-w-[1600px] mx-auto">
        <div className="mb-12">
          <h1 className="text-xl font-bold mb-4">Policy Statement:</h1>
          <p>
            The objective of this policy is to maintain and protect the rights and privacy of the Data. The policy applies to the Company, its business operation globally and all parties (employees, job candidates, customers, suppliers etc.) who provide any amount of information to us. Although Data Protection Laws vary by jurisdiction, all parties should be aware that laws exist to protect the privacy and security of personal Data and this may restrict the manner in which personal use and disclose such information. All personal should adhere and comply with this policy and additionally, specific privacy practices that may be adopted by Techmapperz.
          </p>
        </div>

        <div className="mb-12">
          <h1 className="text-xl font-bold mb-4">Definitions:</h1>
          <p>“Company” means Techmapperz LLP</p>
          <p>
            “Data Controller” means the person or entity who regulates the purpose and means by which personal Data is processed. This person or entity be normal person or legal entity such as corporation, public authority, agency or other body.
          </p>
          <p>
            “Personal Data” means any information that relates to a natural person, which, either directly or indirectly, in combination with other information available or likely to be available with a body corporate, is capable of identifying such person.
          </p>
          <p>
            Processing refers to any action performed on personal Data, such as collecting, recording, organizing, storing, transferring, modifying, using, disclosing, uploading or deleting.
          </p>
          <p>
            “Data Protection Laws” means the laws, rules & Regulation or Guideline in a country related to the protection of Data subject with regards to the collection, receipt, possession, processing, storing, handling of Personal Data.
          </p>
        </div>

        <div className="mb-12">
          <ol>
            <li className="mb-8">
              <h1 className="text-xl font-bold mb-4">Collection of Personal Data:</h1>
              <ul className="pl-8 list-disc">
                <li className="mb-2">a. The Company collects personal data as part of its business and Business operation.</li>
                <li className="mb-2">
                  b. The organization needs to collect Personal Data from Clients, prospective Clients and business partner mainly in order to manage the Company’s legal obligation, manage clients’ accounts, monitor compliance with company’s existing policies and procedure and for business operation management (i.e. order management, billing, client services, improving services etc.)
                </li>
                <li className="mb-2">
                  c. You can visit Techmapperz on the internet without providing any information about yourself. The website collects only the personal data which is volunteered by the site such as feedback, queries, sharing requirements etc. or personal information (like email address, contact number, Name etc.) of those who communicate with us via email or telephonic conversation. To give relevant content based on your preferences, we may need to ask your personal information like:
                  <ul className="pl-8 list-disc">
                    <li>Full Name</li>
                    <li>Email ID</li>
                    <li>Contact Number</li>
                    <li>Location</li>
                    <li>Digital Identification i.e. Internet protocol (IP) address, Browser Type, OS, device details etc.</li>
                  </ul>
                </li>
                <li className="mb-2">
                  d. Recruitment, engagement or training records including Resume’s, applications, application references, educational qualification, Personal information (like Name, Date of Birth, Address, Contact details, Email Id)
                </li>
                <li className="mb-2">e. Information captured as result of monitoring of Techmapperz assets, equipment or other instruments provided by Techmapperz.</li>
              </ul>
            </li>
            <li className="mb-8">
              <h1 className="text-xl font-bold mb-4">Use, Retention and Disposal of Personal Data</h1>
              <ul className="pl-8 list-disc">
                <li className="mb-2">
                  a. Personal data shall be retained for as long as necessary for business purposes identified in the SOW or contract agreements at the time of collection or subsequently authorized the data provider.
                </li>
                <li className="mb-2">
                  b. Techmapperz does not share your personal data with third parties without seeking your prior permission. We will seek your permission prior to using or sharing your personal information for any purpose.
                </li>
                <li className="mb-2">
                  c. Techmapperz may share your personal information within the organization for data processing, storage.
                </li>
                <li className="mb-2">
                  d. When the use of Personal data is no longer require for business purposes, a legal method shall be in place to ensure that the data is destroyed in a manner to prevent unauthorized access to that data.
                </li>
                <li className="mb-2">
                  e. Personal data shall be destroyed if their storage violates any of the data protection rules or if the information of the data is no longer required by Techmapperz. Additionally, Techmapperz has the right to use the personal information for legal and regulatory purpose and as per applicable data privacy laws.
                </li>
                <li className="mb-2">
                  f. Techmapperz shall conduct an internal audit on an annual basis to ensure that personal data collected is used, retained and disposed-off in compliance with the company’s data privacy policy.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <h1 className="text-xl font-bold mb-4">Access of Personal Data:</h1>
              <ul className="pl-8 list-disc">
                <li className="mb-2">
                  a. Techmapperz will not disclose personal data to any person outside Techmapperz except for the Agreed purpose, or with the relevant individuals’ consent or for a legal reason for doing so and where it is permitted by applicable law. In every case, the disclosed personal data will be strictly limited
                </li>
                <li className="mb-2">
                  b. Techmapperz is provided the personal information, requested by the user, after complete verification and within 30 days from the date of request.
                </li>
                <li className="mb-2">
                  c. The data security officer shall record and document each access request as it is received and the corresponding action taken.
                </li>
                <li className="mb-2">
                  d. Techmapperz shall provided the personal data in a plain simple format which is easily understandable.
                </li>
              </ul>
            </li>
            <li className="mb-8">
              <h1 className="text-xl font-bold mb-4">Data Information Breach:</h1>
              <p>
                In case of any data breach of personal information / websites’ database / third-party data, within 72 hours we will inform to all relevant authorities about the same.
              </p>
            </li>
            <li className="mb-8">
              <h1 className="text-xl font-bold mb-4">Data Security:</h1>
              <p>
                Techmapperz takes reasonable security measures to protect personal data against loss, misuse, unauthorized or accidental access, disclosure and destruction. Techmapperz has applied policies and maintains appropriate technical, physical and industrial measures and follows industry policy and practices. Techmapperz has adopted procedure and implementing policies prepared for securing and protecting personal Data from unauthorized access, improper use and alteration.
              </p>
            </li>
            <li className="mb-8">
              <h1 className="text-xl font-bold mb-4">Data maintains quality:</h1>
              <p>
                Techmapperz shall maintain data integrity and quality, as for personal data collection and use and ensure data is reliable, accurate and complete.
              </p>
              <ul className="pl-8 list-disc">
                <li className="mb-2">
                  For this reason, the data security officer shall have system and techniques in place to make sure that personal data collected is accurate and complete.
                </li>
                <li className="mb-2">
                  Techmapperz shall conduct an internal audit on an annual basis to ensure that personal data collected is used, retained and disposed-off in compliance with the company’s data privacy policy.
                </li>
              </ul>
            </li>
          </ol>
        </div>

        <div className="mb-12">
          <h1 className="text-xl font-bold mb-4">Modifying this privacy policy:</h1>
          <p>
            Techmapperz reserves the right to change, modify, update and amend this data policy from time to time. In case of any policy changes, we will inform you through Notice on the Resources page of our website.
          </p>
          <p>
            If you have any questions about this Data policy, you can contact{' '}
            <a href="#" className="text-blue-600 underline">
              compliance@techmapperz.com
            </a>
            . All rights reserved by Techmapperz.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
