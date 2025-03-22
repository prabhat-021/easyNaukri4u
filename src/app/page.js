"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const sections = {
  result: {
    title: 'Result',
    links: [
      { name: 'AIBE 19th Exam Result 2025', url: 'https://www.allindiabarexamination.com/' },
      { name: 'India Post GDS 2025 First Merit List', url: 'https://indiapostgdsonline.gov.in/' },
      { name: 'IBPS PO 14th Score Card (Qualified for Interview)', url: 'https://www.ibps.in/' },
      { name: 'SSC Stenographer 2024 Marks, Final Answer Key', url: 'https://ssc.gov.in/' },
      { name: 'IBPS SO 14 Score Card Qualified for Interview', url: 'https://www.ibps.in/' },
      { name: 'Railway RRB Technician Grade III Result 2025', url: 'https://rrbald.gov.in/' },
      { name: 'GATE 2025 Results', url: 'https://gate2025.iitr.ac.in/' },
      { name: 'IIT JAM 2025 Result', url: 'https://jam2025.iitd.ac.in/' },
      { name: 'Bihar Nyay Mitra Merit List 2025', url: 'https://gp.bihar.gov.in/' },
      { name: 'IDBI Bank JAM 2024 Marks', url: '' },
      { name: 'ECGC PO 2024 Final Result', url: '' },
      { name: 'AFCAT 01/2025 Result', url: '' },
      { name: 'AIIMS Group B,C CRE Result 2025', url: '' },
      { name: 'UP Police Constable 2023 Final Result', url: '' },
      { name: 'SSC CGL 2024 Final Result', url: '' },
      { name: 'SSC MTS 2024 Final Result', url: '' },
      { name: 'MP Police Constable 2023 Final Result', url: '' },
      { name: 'Railway RRB Technician Grade I Result / Score Card 2025', url: '' },
      { name: 'CGPSC Pre 2024 Result', url: '' },
      { name: 'Bihar Police BPSSC ASI Steno Result 2025', url: '' },
      { name: 'Railway RPF Sub Inspector SI Female Additional Result 2025', url: '' },
      { name: 'UP Police Head Operator 2022 Result', url: '' },
      { name: 'RSSB Hostel Superintendent 2024 Final Result', url: '' },
      { name: 'UPPSC Staff Nurse 2023 Final Result', url: '' },
      { name: 'Railway RPF Sub Inspector SI Result with Marks 2025', url: '' },
      { name: 'RBI Officers Grade B 2024 Score Card', url: '' },
      { name: 'BPSC Block Horticulture Officer BHO Final Result 2025', url: '' },
      { name: 'RPSC APO 2024 Pre Result with Marks', url: '' },
    ],
  },
  admit: {
    title: 'Admit Card',
    links: [
      { name: 'UPSSSC Junior Assistant 2022 DV Admit Card', url: 'https://upsssc.gov.in/Default.aspx' },
      { name: 'BPSSC ASI Steno 2024 Eligibility Test Date', url: 'https://bpssc.bihar.gov.in/' },
      { name: 'NVS Non Teaching Various Post Exam Date 2025', url: 'https://navodaya.gov.in/nvs/en/Home1' },
      { name: 'NTA JEEMAIN Phase II Exam City Details 2025', url: 'https://jeemain.nta.nic.in/' },
      { name: 'RPSC EO / RO 2022 Admit Card', url: 'https://rpsc.rajasthan.gov.in/advertisements' },
      { name: 'UPPSC Agriculture Services Mains Admit Card 2025', url: 'https://uppsc.up.nic.in/' },
      { name: 'SSC Junior Hindi Translator JHT Paper II Exam City 2025', url: 'https://ssc.gov.in/' },
      { name: 'UPPSC RO / ARO 2023 Re Exam Date', url: 'https://uppsc.up.nic.in/' },
      { name: 'Allahabad High Court Driver Stage II Admit Card 2025', url: 'https://www.allahabadhighcourt.in/calendar/itemWiseList.jsp?group=7' },
      { name: 'NVS Class 6 Admit Card 2025 Winter Bound', url: 'https://navodaya.gov.in/nvs/en/Home1' },
      { name: 'SSC Stenographer 2024 Skill Test Exam Date', url: 'https://ssc.gov.in/' },
      { name: 'UPSSSC Technical Services Exam 2016 PET/PST Exam Admit Card', url: 'https://upsssc.gov.in/Default.aspx' },
      { name: 'Railway RRB ALP Stage II Admit Card 2025', url: 'https://indianrailways.gov.in/' },
      { name: 'NTA AISSEE 2025 Exam City Details', url: '' },
      { name: 'BPSC Lecturer Mining Engineering Admit Card 2025', url: '' },
      { name: 'Airforce Agniveer Intake 01/2026 Exam City Details', url: '' },
      { name: 'CCC Admit Card March 2025', url: '' },
      { name: 'RPF Constable Admit Card 2025', url: '' },
      { name: 'SSC JHT 2024 Paper II Exam Date', url: '' },
      { name: 'NTA JEEMAIN April 2025 Exam Schedule', url: '' },
      { name: 'NTA CUET PG 2025 Admit Card', url: '' },
      { name: 'UP Police Constable PET Admit Card 2025 Updated', url: '' },
      { name: 'MPKVVCL Various Post Admit Card 2025', url: '' },
      { name: 'Patna High Court Assistant Cashier 2024 Exam Date', url: '' },
      { name: 'Delhi DSSSB Various Post Exam Date 2025', url: '' },
      { name: 'MPESB Parvekshak Admit Card 2025', url: '' },
      { name: 'BSF HC Ministerial and ASI Steno Admit Card 2025', url: '' },
    ],
  },
  jobs: {
    title: 'Latest Jobs',
    links: [
      { name: 'Navy Agniveer SSR / MR INET 2025 Online Form', url: 'https://www.joinindiannavy.gov.in/' },
      { name: 'Rajasthan RSSB 4th Class Employee Online Form 2025', url: 'https://rssb.rajasthan.gov.in/' },
      { name: 'BHU Junior Clerk Online Form 2025', url: 'https://esb.mp.gov.in/e_default.html' },
      { name: 'IOCL Trade, Technical, Graduate Apprentices Online Form 2025', url: 'https://iocl.com/latest-job-opening' },
      { name: 'Rajasthan RSSB Librarian Grade III Online Form 2025', url: 'https://www.nclcil.in/' },
      { name: 'CSBC Bihar Police Constable Online Form 2025', url: 'http://csbc.bih.nic.in/Default.htm' },
      { name: 'Allahabad High Court Research Associates Online Form 2025', url: 'https://www.allahabadhighcourt.in/' },
      { name: 'NCL CIL ITI / Diploma / Graduate Apprentices Online Form 2025', url: '' },
      { name: 'Army Agniveer CEE Online Form 2025', url: '' },
      { name: 'MPESB Middle School, Primary School Teacher Online Form 2025', url: '' },
      { name: 'SSC Stenographer 2024 Vacancy Details', url: '' },
      { name: 'PNB Specialist Officer SO Online Form 2025', url: '' },
      { name: 'Rail Wheel Factory RWF Apprentices Online Form 2025', url: '' },
      { name: 'UPSC Assistant Professor Online Form 2025', url: '' },
      { name: 'UPPSC 2024 Mains Online Form', url: '' },
      { name: 'MPPSC Assistant Professor Online Form 2025', url: '' },
      { name: 'UPSC CPF Assistant Commandant CAPF Online Form 2025', url: '' },
      { name: 'CISF Constable Tradesman Online Form 2025', url: '' },
      { name: 'MPESB Group 4 Various Post Online Form 2025', url: '' },
      { name: 'India Post IPPB Circle Based Executive Online Form 2025', url: '' },
      { name: 'Rajasthan High Court Civil Judge Online Form 2025', url: '' },
      { name: 'MPESB Group 1 Sub Group 3 Online Form 2025', url: '' },
      { name: 'Bihar Police BPSSC Sub Inspector SI Prohibition Online Form 2025', url: '' },
      { name: 'Assam Rifles Rally Recruitment Online Form 2025', url: '' },
      { name: 'Rajasthan RSSB Patwari Online Form 2025', url: '' },
      { name: 'UPPSC Pre 2025 Online Form', url: '' },
    ],
  },
}


export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-[50vh] flex items-center justify-center relative overflow-hidden pt-20">
        <div className="absolute inset-0 bg-grid-black/[0.02] -z-10" />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl font-bold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-gray-600 to-gray-900">
              Welcome to EasyNaukri4u
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Get latest updates on Government Jobs, Results, Admit Cards, and more. Stay informed about upcoming opportunities across India.
            </p>
          </motion.div>
        </div>
      </section>



      {/* Grid Section */}
      <div className="container mx-auto mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8 px-4">
          {Object.values(sections).map((section, idx) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="border rounded-lg overflow-hidden bg-white shadow"
            >
              <h2 className="text-lg font-semibold text-white bg-[#0c0c37] px-3 py-2 text-center">
                {section.title}
              </h2>
              <ul className="p-3 space-y-2 text-sm max-h-[400px] overflow-y-auto">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.url}
                      className="text-blue-600 hover:underline block"
                    >
                      • {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
