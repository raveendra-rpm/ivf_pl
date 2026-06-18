import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

const mainPages = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/our-story' },
  { name: 'Why Popular IVF?', href: '/why-popular-ivf' },
  { name: 'Why Us?', href: '/why-us' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Doctors', href: '/doctors' },
  { name: 'Facility & Lab', href: '/facility-lab' },
  { name: 'Gallery & Tour', href: '/gallery-tour' },
  { name: 'Success Rate', href: '/success-rate' },
  { name: 'Success Stories', href: '/success-stories' },
  { name: 'Trying for a Baby', href: '/trying-for-a-baby' },
  { name: 'Second Opinion', href: '/second-opinion' },
  { name: 'Book Appointment', href: '/book-appointment' },
  { name: 'Careers', href: '/careers' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact Us', href: '/contact' },
];

const services = [
  { name: 'Fertility Treatments', href: '/services/fertility-treatments' },
  { name: 'Male Infertility', href: '/services/male-infertility' },
  { name: 'Donor Services', href: '/services/donor-services' },
  { name: 'Fertility Preservation', href: '/services/fertility-preservation' },
  { name: 'Gynaecological Procedures', href: '/services/gynaecological-procedures' },
  { name: 'Diagnostics', href: '/services/diagnostics' },
];

const treatments = [
  { name: 'IVF', href: '/treatments/ivf' },
  { name: 'IUI', href: '/treatments/iui' },
  { name: 'ICSI', href: '/treatments/icsi' },
  { name: 'FET (Frozen Embryo Transfer)', href: '/treatments/fet' },
  { name: 'Advanced Laparoscopy', href: '/treatments/advanced-laparoscopy' },
  { name: 'Basic Advanced Hysteroscopy', href: '/treatments/basic-advanced-hysteroscopy' },
  { name: 'Blastocyst Culture', href: '/treatments/blastocyst-culture' },
  { name: 'Cancer Fertility Preservation', href: '/treatments/cancer-fertility-preservation' },
  { name: 'Donor Egg', href: '/treatments/donor-egg' },
  { name: 'Donor Sperm', href: '/treatments/donor-sperm' },
  { name: 'Egg Freezing', href: '/treatments/egg-freezing' },
  { name: 'Electroejaculation', href: '/treatments/electroejaculation' },
  { name: 'Embryo Freezing', href: '/treatments/embryo-freezing' },
  { name: 'Embryo Reduction', href: '/treatments/embryo-reduction' },
  { name: 'Genetic Panel', href: '/treatments/genetic-panel' },
  { name: 'Hormone Assay Ovarian Reserve', href: '/treatments/hormone-assay-ovarian-reserve' },
  { name: 'Infertility Assessment Panel', href: '/treatments/infertility-assessment-panel' },
  { name: 'Laser Assisted Hatching (LAH)', href: '/treatments/lah' },
  { name: 'Micro TESE', href: '/treatments/micro-tese' },
  { name: 'Ovarian Cortex Freezing', href: '/treatments/ovarian-cortex-freezing' },
  { name: 'Ovulation Induction', href: '/treatments/ovulation-induction' },
  { name: 'PESA', href: '/treatments/pesa' },
  { name: 'PGD Diagnosis', href: '/treatments/pgd-diagnosis' },
  { name: 'PGS Screening', href: '/treatments/pgs-screening' },
  { name: 'Sperm Freezing', href: '/treatments/sperm-freezing' },
  { name: 'TESA', href: '/treatments/tesa' },
  { name: 'Testicular Tissue Biopsy', href: '/treatments/testicular-tissue-biopsy' },
  { name: 'Testicular Tissue Freezing', href: '/treatments/testicular-tissue-freezing' },
  { name: 'Tubal Patency Tests', href: '/treatments/tubal-patency-tests' },
  { name: 'Ultrasound 3D Doppler', href: '/treatments/ultrasound-3d-doppler' },
  { name: 'Varicocele Repair', href: '/treatments/varicocele-repair' },
];

export const metadata = {
  title: 'Sitemap - Popular IVF',
  description: 'Navigate easily through Popular IVF website to find all fertility treatments, services, and resources.',
};

export default function SitemapPage() {
  return (
    <main className="min-h-screen bg-[#f8fbff] dark:bg-gray-900 py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-7xl">
        <div className="text-center mb-16 pt-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#145390] dark:text-blue-100 mb-6">Website Sitemap</h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
            Find what you're looking for easily. Here is a complete overview of all the pages on our website.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Main Pages */}
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
              <span className="w-8 h-1 bg-[#ED2793] rounded-full"></span>
              <h2 className="text-2xl font-extrabold text-[#145390] dark:text-blue-100">Main Pages</h2>
            </div>
            <ul className="space-y-4">
              {mainPages.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="group flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-[#ED2793] dark:hover:text-[#ED2793] transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-[#ED2793] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100 dark:border-gray-700">
              <span className="w-8 h-1 bg-[#ED2793] rounded-full"></span>
              <h2 className="text-2xl font-extrabold text-[#145390] dark:text-blue-100">Our Services</h2>
            </div>
            <ul className="space-y-4">
              {services.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="group flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-[#ED2793] dark:hover:text-[#ED2793] transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-[#ED2793] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Treatments */}
          <div className="bg-white dark:bg-gray-800 rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none border border-gray-100 dark:border-gray-700 flex flex-col h-[800px]">
            <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-100 dark:border-gray-700 shrink-0">
              <span className="w-8 h-1 bg-[#ED2793] rounded-full"></span>
              <h2 className="text-2xl font-extrabold text-[#145390] dark:text-blue-100">Treatments</h2>
            </div>
            <ul className="space-y-4 overflow-y-auto pr-4 pb-4">
              {treatments.map((link, idx) => (
                <li key={idx}>
                  <Link href={link.href} className="group flex items-center text-gray-600 dark:text-gray-400 font-medium hover:text-[#ED2793] dark:hover:text-[#ED2793] transition-colors">
                    <ChevronRight className="w-4 h-4 mr-2 text-[#ED2793] opacity-0 group-hover:opacity-100 transition-opacity -ml-6 group-hover:ml-0" />
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
