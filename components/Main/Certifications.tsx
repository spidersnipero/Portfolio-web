// pages/index.js
import CertificateCard from "../Required/CerticationBox";

const certificates = [
  {
    title: "The Complete Web Developer: Zero To Mastery",
    provider: "Udemy",
    description:
      "Certification earners demonstrate a robust grasp of web development, excelling in HTML, CSS, JavaScript, and contemporary frameworks. Equipped with hands-on experience in cutting-edge technologies, these certificate holders are well-prepared to address real-world web development challenges.",
    date: "Jul 2023",
  },
  {
    title: "Oracle Database Developer Certified Professional",
    provider: "Oracle",
    description:
      "Certification earners demonstrate advanced proficiency in PL/SQL for Oracle Database. Their skills encompass crafting efficient triggers, developing stored procedures, and managing complex data structures. This certification validates their ability to optimize SQL statements for enhanced performance and implement robust security measures. With this expertise, individuals showcase their capability to design and manage database applications effectively, positioning themselves as valuable assets in Oracle Database development.",
    date: "Nov 2023",
  },
];

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl flex justify-center">Certifications</h1>
      <div className="relative mt-10">
        {certificates.map((certificate, index) => (
          <CertificateCard key={index} certificate={certificate} />
        ))}
      </div>
    </div>
  );
}
