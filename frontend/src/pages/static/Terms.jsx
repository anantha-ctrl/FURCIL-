import LegalPage from './LegalPage';

const intro = 'Welcome to FURCIL. These Terms & Conditions govern your access to and use of the FURCIL website, products and services. By using our website or placing an order, you agree to these Terms.';

const sections = [
  ['Company Information', "FURCIL is a registered business under GSTIN 33ETMPA3316Q1ZH having its principal place of business at 114/160 Kemphiya Lane, St. Mary's Hill, Ooty, Tamil Nadu, India."],
  ['Eligibility', 'Users must be 18+ or supervised by a guardian. Use products according to the age, species and dosage instructions. Consult a veterinarian for puppies, kittens, senior, pregnant, nursing or medically compromised pets.'],
  ['Products', 'Images are illustrative. Packaging may vary between batches. Availability is subject to stock. Product availability displayed on the website is subject to change without prior notice.'],
  ['Product Usage', 'Start with half the recommended serving for 3–5 days before transitioning to the full serving. Monitor your pet for any unusual reactions.'],
  ['Veterinary Disclaimer', 'Products support general pet wellness and are not intended to diagnose, treat, cure or prevent disease.'],
  ['Pricing', 'All prices are in INR and inclusive of applicable GST unless otherwise stated during checkout.'],
  ['Payments', 'Orders are processed after successful payment authorization.'],
  ['Order Acceptance', 'FURCIL may reject or cancel orders due to pricing errors, fraud, stock issues or operational limitations.'],
  ['Shipping', 'Governed by the FURCIL Shipping Policy.'],
  ['Returns', 'Governed by the FURCIL Returns, Replacements & Refund Policy.'],
  ['Promotions', 'Offers may not be combined unless stated. First-time offers are limited to one per customer and one per household. Misused promotions may be cancelled.'],
  ['Subscription', 'Subscription orders may be paused, modified or cancelled before the next billing cycle.'],
  ['Customer Responsibilities', 'Provide accurate information and follow product instructions.'],
  ['Intellectual Property', 'All website content, including logos, trademarks, product names, product descriptions, images, graphics and other brand assets, is the intellectual property of FURCIL unless otherwise stated and may not be copied, reproduced or used without prior written permission.'],
  ['Reviews', 'User-submitted content may be used by FURCIL for promotional purposes.'],
  ['Fraud Prevention', 'Fraudulent transactions may be cancelled or restricted.'],
  ['Privacy', 'Handled according to the FURCIL Privacy Policy.'],
  ['Force Majeure', 'FURCIL is not liable for delays caused by events beyond reasonable control.'],
  ['AI & Information Disclaimer', 'Website and social media content is educational and not veterinary advice. Information generated using artificial intelligence, blogs, FAQs, customer support, advertisements or social media should not replace professional veterinary consultation.'],
  ['Limitation of Liability', 'Liability is limited to refund or replacement where applicable and does not limit statutory consumer rights.'],
  ['Governing Law', 'Governed by Indian law with exclusive jurisdiction of the courts of Nilgiris District, Tamil Nadu.'],
  ['Severability', 'Invalid provisions do not affect the remaining Terms.'],
  ['Changes', 'FURCIL may update these Terms without prior notice.'],
  ['Contact', 'Email: furcilpets@gmail.com'],
];

export default function Terms() {
  return <LegalPage eyebrow="Legal" title="Terms & Conditions" intro={intro} sections={sections} />;
}
