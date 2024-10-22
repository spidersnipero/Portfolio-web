import CertificateCard from "../Required/CerticationBox";

const certificates = [
  {
    title: "The Complete Web Developer: Zero To Mastery",
    provider: "Udemy",
    description:
      "The Complete Web Developer: Zero To Mastery certificate has been incredibly valuable in my journey. It equipped me with the essential skills to build modern, responsive websites and applications from scratch. This course gave me the confidence to tackle real-world projects and advance my web development career",
    date: "Jan 2024",
  },
  {
    title: "AWS Cloud Practitioner",
    provider: "AWS",
    description:
      "Earning the AWS Certified Cloud Practitioner certification has helped me gain a solid understanding of AWS cloud services and best practices. It boosts my credibility with foundational cloud knowledge, making me more effective in IT and cloud-related roles. This certification opens up new opportunities for career growth in the cloud industry.",
    date: "Jul 2024",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold text-center">
        Certifications
      </h1>
      <div className="grid grid-cols-1 gap-8 mt-8">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
