import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Star, Clock, MapPin, Calendar, Award, CheckCircle2, PhoneCall } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const doctors = [
  {
    name: "Dr. Priyanka Jaiswal",
    slug: "dr-priyanka-jaiswal",
    designation: "Obstetrics & Gynaecology",
    experience: "10 Years",
    patients: "12+",
    reviews: "150+",
    image: "/dr_priyanka_jaiswal.avif",
    about: "Dr. Priyanka Jaiswal is a highly experienced Obstetrician & Gynaecologist. She specializes in advanced infertility treatments and has helped numerous couples achieve their dream of parenthood.",
    education: ["MBBS", "MS - Obstetrics & Gynaecology", "Fellowship in Reproductive Medicine"],
    specialties: ["IVF", "IUI", "ICSI", "High-Risk Pregnancy"],
    availability: "Mon - Sun, 09:00 AM - 05:00 PM",
    rating: 4.9
  },
  {
    name: "Dr. Srishti Tanya",
    slug: "dr-srishti-tanya",
    designation: "Obstetrics & Gynaecology",
    experience: "8 Years",
    patients: "8+",
    reviews: "95+",
    image: "/dr._srishti_tanya.avif",
    about: "Dr. Srishti Tanya is known for her compassionate care and expertise in treating complex fertility issues. Her patient-first approach makes her one of the most sought-after fertility specialists.",
    education: ["MBBS", "DGO", "DNB - Obstetrics & Gynecology"],
    specialties: ["Female Infertility", "PCOS", "Endometriosis"],
    availability: "Mon - Sun, 09:00 AM - 05:00 PM",
    rating: 4.8
  },
  {
    name: "Dr. Akanksha Chaturvedi",
    slug: "dr-akanksha-chaturvedi",
    designation: "IVF & Infertility Medicine",
    experience: "12 Years",
    patients: "15+",
    reviews: "210+",
    image: "/dr_akanksha_chaturvedi.avif",
    about: "Dr. Akanksha Chaturvedi is a leading IVF specialist with over a decade of experience. She is dedicated to providing personalized treatment plans and has a high success rate in complex IVF cases.",
    education: ["MBBS", "MS - Obstetrics & Gynaecology", "DNB - Obstetrics & Gynaecology", "FNB - Reproductive Medicine"],
    specialties: ["IVF/ICSI", "Male Infertility", "IUI (Intrauterine Insemination)", "Recurrent IVF Failure"],
    availability: "Mon - Sun, 09:00 AM - 05:00 PM",
    rating: 5.0
  },
  {
    name: "Dr. Kiran Kaushik",
    slug: "dr-kiran-kaushik",
    designation: "Obstetrics & Gynaecology",
    experience: "25 Years",
    patients: "30+",
    reviews: "350+",
    image: "/dr_kiran_kaushik.avif",
    about: "With 25 years plus experience in Obs and Gyne She is effectively managing the department and hospital. Her experties are in High Risk Pregnancy, Antenatal & Postnatal Checkups, Delivery (Normal / Caesarian ), Advance Laparoscopic & Hysteroscopic Surgery / Investigation, along with all kinds of Gynecological procedures including Infertility.",
    education: ["MBBS", "MS - Obstetrics & Gynaecology"],
    specialties: ["High Risk Pregnancy", "Antenatal & Postnatal Checkups", "Advance Laparoscopic & Hysteroscopic Surgery", "Infertility"],
    availability: "Mon - Sun, 09:00 AM - 05:00 PM",
    rating: 4.9
  }
];

export default async function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const doctor = doctors.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar />
      <main className="flex-grow bg-[#f8fbff] pb-20">
      {/* Header Section */}
      <div className="bg-[#145390] text-white pt-28 pb-32 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[150%] bg-gradient-to-l from-white to-transparent transform rotate-12 blur-3xl" />
        </div>
        
        <div className="container mx-auto max-w-5xl relative z-10">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
            <div className="w-48 h-48 md:w-56 md:h-56 shrink-0 bg-white rounded-full p-2 shadow-2xl relative">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="w-full h-full object-cover object-top rounded-full" 
              />
              <div className="absolute bottom-2 right-2 bg-[#22c55e] w-8 h-8 rounded-full border-4 border-white flex items-center justify-center shadow-lg" title="Verified Specialist">
                 <CheckCircle2 className="w-4 h-4 text-white" />
              </div>
            </div>
            
            <div className="text-center md:text-left flex-1 mt-4 md:mt-6">
              <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-semibold mb-4 backdrop-blur-sm border border-white/20">
                {doctor.designation}
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{doctor.name}</h1>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 md:gap-8 text-white/90 font-medium">
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  <span>{doctor.rating} ({doctor.reviews} Reviews)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-[#ED2793]" />
                  <span>{doctor.experience} Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto max-w-5xl px-4 -mt-16 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column - Details */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#145390] mb-4">About Dr. {doctor.name.split(' ')[1]}</h2>
              <p className="text-gray-600 leading-relaxed text-lg">{doctor.about}</p>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#145390] mb-6">Education & Qualifications</h2>
              <ul className="space-y-4">
                {doctor.education.map((edu, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-700">
                    <div className="w-10 h-10 rounded-full bg-[#e8f1fb] flex items-center justify-center shrink-0">
                      <Award className="w-5 h-5 text-[#145390]" />
                    </div>
                    <span className="text-lg font-medium pt-1.5">{edu}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-8 shadow-xl shadow-blue-900/5 border border-gray-100">
              <h2 className="text-2xl font-bold text-[#145390] mb-6">Specialties</h2>
              <div className="flex flex-wrap gap-3">
                {doctor.specialties.map((spec, idx) => (
                  <span key={idx} className="px-5 py-2.5 bg-gradient-to-r from-[#f0f6ff] to-[#e8f1fb] text-[#145390] rounded-xl font-semibold border border-blue-100 shadow-sm">
                    {spec}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-6 shadow-xl shadow-blue-900/5 border border-gray-100 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Consultation Details</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-[#145390]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Availability</p>
                    <p className="font-semibold text-gray-900">{doctor.availability}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-[#145390]" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-medium mb-1">Clinic Location</p>
                    <p className="font-semibold text-gray-900">Popular Hospital, IVF Center<br/>Main Branch</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-6">
                <button className="w-full bg-[#145390] hover:bg-[#0f4070] text-white font-bold py-4 rounded-2xl transition-all duration-300 shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 flex items-center justify-center gap-2 mb-3">
                  <Calendar className="w-5 h-5" />
                  Book Appointment
                </button>
                <button className="w-full bg-white hover:bg-gray-50 text-[#145390] border-2 border-[#145390] font-bold py-4 rounded-2xl transition-all duration-300 flex items-center justify-center gap-2">
                  <PhoneCall className="w-5 h-5" />
                  Call Clinic
                </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </main>
      <Footer />
    </div>
  );
}
