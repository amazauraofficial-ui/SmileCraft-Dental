import { Doctor, FAQItem, ServiceItem, Testimonial } from '../types';
import { ASSETS } from './assets';

export const CLINIC_INFO = {
  name: 'SmileCraft Dental',
  tagline: 'Confident Smiles. Exceptional Care.',
  phoneDisplay: '+1 (212) 555-0188',
  phoneCall: '+12125550188',
  email: 'hello@smilecraftdental.com',
  address: {
    street: '1250 Madison Avenue',
    suite: 'Suite 600 (Upper East Side)',
    city: 'New York',
    state: 'NY',
    zip: '10028',
    crossStreet: 'Between 89th & 90th Streets',
  },
  hours: [
    { days: 'Monday – Thursday', time: '8:00 AM – 6:00 PM' },
    { days: 'Friday', time: '8:00 AM – 4:00 PM' },
    { days: 'Saturday', time: '9:00 AM – 2:00 PM (Emergency & Scheduled)' },
    { days: 'Sunday', time: 'Closed (Emergency On-Call for Patients)' },
  ],
  transit: '4, 5, 6 trains at 86th St Station (3 blocks away) or Q train at 86th & 2nd Ave.',
  disclaimer:
    'Information provided on this website is for general educational and informational purposes only and does not constitute medical advice or a doctor-patient relationship. Individual results may vary based on clinical assessment.',
};

export const SERVICES: ServiceItem[] = [
  {
    id: 'dental-implants',
    slug: 'dental-implants',
    name: 'Dental Implants',
    headline: 'Permanent, Bio-Compatible Restorations for Lost Teeth',
    shortDesc: 'Modern implant solutions designed to restore natural chewing function, jawbone health, and aesthetic confidence.',
    fullDesc: 'Dental implants represent the gold standard in tooth replacement therapy. Using high-grade titanium posts that fuse with bone (osseointegration) topped with custom ceramic or zirconia crowns, implants look, feel, and function just like natural teeth.',
    route: 'dental-implants',
    category: 'Restorative',
    durationEstimate: '3–6 months for complete integration',
    iconName: 'ShieldCheck',
    keyBenefits: [
      'Preserves adjacent natural teeth without filing or reduction',
      'Stimulates jawbone density to prevent facial volume loss',
      'Provides firm, stable chewing power without slippage',
      'Crafted from biocompatible medical-grade titanium and porcelain',
    ],
    idealFor: [
      'Patients missing one, several, or all natural teeth',
      'Individuals experiencing unstable or loose removable dentures',
      'Patients with sufficient jawbone density seeking permanent tooth replacement',
    ],
    steps: [
      {
        title: '3D CBCT Digital Imaging & Consultation',
        desc: 'We map bone density, nerve pathways, and sinus positions using high-resolution low-radiation 3D imaging for computer-guided accuracy.',
      },
      {
        title: 'Gentle Guided Placement',
        desc: 'The implant post is positioned with surgical precision under local anesthesia or comfortable twilight sedation.',
      },
      {
        title: 'Osseointegration & Healing',
        desc: 'Over several weeks, natural bone integrates securely with the biocompatible post to establish an enduring foundation.',
      },
      {
        title: 'Custom Ceramic Crown Delivery',
        desc: 'A hand-shaded zirconia or porcelain crown is seated, meticulously color-matched to your surrounding natural smile.',
      },
    ],
  },
  {
    id: 'cosmetic-dentistry',
    slug: 'cosmetic-dentistry',
    name: 'Cosmetic Dentistry',
    headline: 'Bespoke Aesthetic Enhancements Tailored to Your Facial Harmony',
    shortDesc: 'Smile-enhancing treatments designed around your unique facial symmetry, shade preferences, and aesthetic goals.',
    fullDesc: 'Our cosmetic dentistry approach focuses on natural elegance. Rather than uniform, artificial-looking smiles, we consider lip dynamics, gum line balance, and tooth proportions to craft enhancements that complement your authentic appearance.',
    route: 'cosmetic-dentistry',
    category: 'Cosmetic',
    durationEstimate: '1–2 visits depending on treatment plan',
    iconName: 'Sparkles',
    keyBenefits: [
      'Individually handcrafted porcelain veneers and minimal-prep laminates',
      'In-office enamel-safe teeth whitening for radiant brightness',
      'Cosmetic bonding to correct chips, minor gaps, and worn edges',
      'Digital smile preview before any permanent alteration',
    ],
    idealFor: [
      'Chipped, cracked, or uneven tooth edges',
      'Persistent discoloration resistant to ordinary toothpaste',
      'Small aesthetic gaps or slight misalignments',
      'Patients seeking a refreshed, balanced, natural smile',
    ],
    steps: [
      {
        title: 'Aesthetic Assessment & Photography',
        desc: 'High-definition macro photography and digital scans help evaluate proportions, shade goals, and tooth shape.',
      },
      {
        title: 'Digital Smile Preview',
        desc: 'Experience a preview mock-up in 3D so you can visualize shape, length, and symmetry before beginning treatment.',
      },
      {
        title: 'Precision Preparation & Artistry',
        desc: 'Micro-conservative tooth preparation preserves maximum healthy enamel, followed by master ceramist fabrication.',
      },
      {
        title: 'Final Bonding & Polish',
        desc: 'Permanent bonding using durable dental resins followed by precision occlusion checks for optimal comfort.',
      },
    ],
  },
  {
    id: 'invisalign',
    slug: 'invisalign',
    name: 'Invisalign Clear Aligners',
    headline: 'Discreet Orthodontic Alignment for Busy Professionals & Adults',
    shortDesc: 'Clear orthodontic treatment designed to align teeth comfortably and discreetly without metal brackets.',
    fullDesc: 'Straighten your teeth with virtually invisible, removable custom aligners. Invisalign uses SmartTrack medical-grade polymer trays tailored via digital iTero 3D impressions, allowing you to enjoy your favorite foods and maintain effortless flossing.',
    route: 'invisalign',
    category: 'Orthodontics',
    durationEstimate: 'Typical cases 6–18 months',
    iconName: 'Layers',
    keyBenefits: [
      'Removable trays for normal dining, brushing, and flossing',
      'No metal brackets, wires, or emergency wire pokes',
      'Digital 3D simulation shows anticipated tooth movement trajectory',
      'Smooth edges custom-trimmed to your exact gumline',
    ],
    idealFor: [
      'Mild to moderate crowding or overlapping teeth',
      'Spacing issues and gaps between teeth',
      'Adults and teens seeking an unnoticeable orthodontic solution',
      'Relapse correction for previous braces patients',
    ],
    steps: [
      {
        title: 'Digital iTero 3D Scan',
        desc: 'No gooey impression trays. A comfortable 3-minute optical scan creates an accurate 3D model of your bite.',
      },
      {
        title: 'ClinCheck Treatment Plan',
        desc: 'Dr. Parker plans the gradual progression of each tooth with predictive precision software.',
      },
      {
        title: 'Custom Aligner Series',
        desc: 'You receive sets of aligners changed every 7–14 days, wearing them 20–22 hours daily.',
      },
      {
        title: 'Retainer & Smile Preservation',
        desc: 'Vivera retainers preserve your final aligned positioning comfortably over the long term.',
      },
    ],
  },
  {
    id: 'emergency-dentistry',
    slug: 'emergency-dentistry',
    name: 'Emergency Dentistry',
    headline: 'Prompt, Compassionate Dental Care When Unexpected Emergencies Arise',
    shortDesc: 'Same-day appointments and rapid pain relief for acute toothaches, broken restorations, and dental trauma.',
    fullDesc: 'Dental emergencies cause significant distress and require prompt clinical intervention. Whether you are coping with sudden intense pain, a knocked-out tooth, a fractured restoration, or facial swelling, our Madison Avenue team reserves emergency slots daily.',
    route: 'emergency-dentistry',
    category: 'Urgent',
    durationEstimate: 'Immediate same-day evaluation',
    iconName: 'AlertCircle',
    keyBenefits: [
      'Dedicated daily emergency slots reserved for rapid triage',
      'Rapid pain relief therapies and gentle diagnostic evaluation',
      'Tooth salvage techniques for knocked-out or fractured teeth',
      'Clear, honest treatment options presented before proceeding',
    ],
    idealFor: [
      'Severe, throbbing toothaches or swelling',
      'Dislodged or avulsed (knocked-out) teeth',
      'Broken crowns, bridges, or lost fillings',
      'Chipped or fractured teeth causing soft-tissue lacerations',
    ],
    steps: [
      {
        title: 'Immediate Triage Call',
        desc: 'Call our hotline at +1 (212) 555-0188. Our clinical team provides direct first-aid guidance over the phone.',
      },
      {
        title: 'Prompt In-Office Diagnosis',
        desc: 'Targeted digital x-rays pinpoint the underlying source of infection, fracture, or nerve involvement.',
      },
      {
        title: 'Immediate Pain Mitigation',
        desc: 'Local anesthesia and gentle interventions halt acute pain and stabilize the affected area.',
      },
      {
        title: 'Restorative Care Plan',
        desc: 'We outline the long-term solution (such as a crown, root canal therapy, or bonding) with transparent pricing.',
      },
    ],
  },
  {
    id: 'general-dentistry',
    slug: 'general-dentistry',
    name: 'General Dentistry',
    headline: 'Foundational Oral Health & Comprehensive Clinical Care',
    shortDesc: 'Routine examinations, tooth-colored restorations, and everyday oral wellness for the whole family.',
    fullDesc: 'Comprehensive general dentistry protects your teeth and gums across every stage of life. Our exams look beyond teeth to your airway, bite alignment, and oral cancer screenings, ensuring total systemic wellness.',
    category: 'Restorative',
    durationEstimate: '60 minutes per appointment',
    iconName: 'CheckCircle2',
    keyBenefits: [
      'Comprehensive periodontal and soft tissue health assessments',
      'Mercury-free, tooth-colored composite restorations',
      'Gentle ultrasonic cleanings that protect sensitive enamel',
      'Personalized preventative plans tailored to your saliva and diet profile',
    ],
    idealFor: [
      'Regular bi-annual dental wellness check-ups',
      'Replacing old or failing amalgam restorations',
      'Treating mild tooth sensitivity or early enamel demineralization',
    ],
  },
  {
    id: 'preventive-care',
    slug: 'preventive-care',
    name: 'Preventive Care & Hygiene',
    headline: 'Proactive Health Protocols to Safeguard Your Natural Smile',
    shortDesc: 'Gentle professional cleanings, remineralizing therapies, and night guards for long-term health.',
    fullDesc: 'Prevention is the heart of conservative dentistry. By catching micro-lesions, early gingival inflammation, and clenching habits before symptoms escalate, we help you keep your natural teeth healthy for a lifetime.',
    category: 'Preventive',
    durationEstimate: '45–60 minutes',
    iconName: 'HeartPulse',
    keyBenefits: [
      'Airflow stain removal and gentle ultrasonic tartar debridement',
      'Fluoride varnish and remineralization treatments',
      'Custom nocturnal bite splints for bruxism and TMJ relief',
      'Salivary pH and microbiome optimization guidance',
    ],
    idealFor: [
      'Patients prone to plaque buildup or sensitive gums',
      'Individuals who grind their teeth during sleep or high-stress periods',
      'Anyone wanting to maintain fresh breath and healthy gum margins',
    ],
  },
];

export const DOCTORS: Doctor[] = [
  {
    id: 'dr-sarah-mitchell',
    name: 'Dr. Sarah Mitchell',
    credentials: 'DDS, FAGD',
    role: 'Lead Dentist & Restorative Specialist',
    bio: 'Dedicated to minimally invasive dentistry, Dr. Mitchell blends clinical precision with a calming bedside approach.',
    fullBio:
      'Dr. Sarah Mitchell received her Doctor of Dental Surgery with honors from Columbia University College of Dental Medicine. She subsequently completed an advanced general practice residency at New York-Presbyterian Hospital. With over 14 years of private practice experience in Manhattan, Dr. Mitchell focuses on complex restorative cases, dental implant restorations, and patient comfort protocols designed for individuals with dental anxiety.',
    education: [
      'DDS — Columbia University College of Dental Medicine',
      'Residency — New York-Presbyterian / Weill Cornell Medical Center',
      'Fellowship — Academy of General Dentistry (FAGD)',
    ],
    specialties: ['Comprehensive Restorative Dentistry', 'Dental Implants', 'Minimally Invasive Diagnostics'],
    memberships: ['American Dental Association (ADA)', 'New York State Dental Association', 'Academy of General Dentistry'],
    image: ASSETS.doctors.sarah,
  },
  {
    id: 'dr-james-carter',
    name: 'Dr. James Carter',
    credentials: 'DDS, AACD Member',
    role: 'Cosmetic & Restorative Dentist',
    bio: 'Specializing in natural smile architecture, Dr. Carter crafts porcelain veneers and aesthetic restorations.',
    fullBio:
      'Dr. James Carter graduated from NYU College of Dentistry and completed post-graduate training in aesthetic and reconstructive dentistry. Known for his keen artistic eye and meticulous shade matching, Dr. Carter believes aesthetic dentistry should enhance a patient’s natural individuality rather than create a generic smile. He works closely with premier dental ceramic laboratories in New York.',
    education: [
      'DDS — New York University College of Dentistry',
      'Advanced Aesthetic Continuum — Rosenthal Institute for Aesthetic Dentistry',
      'B.S. in Biology — Cornell University',
    ],
    specialties: ['Custom Porcelain Veneers', 'Enamel Bonding', 'Smile Recontouring', 'Digital Smile Design'],
    memberships: ['American Academy of Cosmetic Dentistry (AACD)', 'American Dental Association', 'Greater New York Academy of Prosthodontics'],
    image: ASSETS.doctors.james,
  },
  {
    id: 'dr-emily-parker',
    name: 'Dr. Emily Parker',
    credentials: 'DMD, MS, Board Certified',
    role: 'Orthodontic Specialist & Clear Aligner Expert',
    bio: 'Focusing on adult and teen clear aligner therapy, Dr. Parker creates balanced, functional, and radiant smiles.',
    fullBio:
      'Dr. Emily Parker earned her Doctor of Dental Medicine from Harvard School of Dental Medicine, followed by a three-year Master of Science and Orthodontic certificate at Columbia University. As a Diamond-level Invisalign provider, Dr. Parker utilizes 3D optical scanning and biological force modeling to achieve predictable, efficient orthodontic outcomes while prioritizing patient convenience.',
    education: [
      'DMD — Harvard School of Dental Medicine',
      'MS & Certificate in Orthodontics — Columbia University',
      'Board Certified — American Board of Orthodontics',
    ],
    specialties: ['Invisalign Clear Aligners', 'Adult Orthodontics', 'Occlusal Optimization', 'Relapse Correction'],
    memberships: ['American Association of Orthodontists (AAO)', 'Northeastern Society of Orthodontists', 'American Dental Association'],
    image: ASSETS.doctors.emily,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    author: 'Marcus T.',
    initials: 'MT',
    treatment: 'Dental Implants',
    quote:
      'The attention to detail and calm demeanor of Dr. Mitchell made an intimidating procedure feel remarkably straightforward. The result looks and functions just like my natural tooth.',
    rating: 5,
    date: '2 months ago',
  },
  {
    id: '2',
    author: 'Elena R.',
    initials: 'ER',
    treatment: 'Cosmetic Veneers',
    quote:
      'I was hesitant about cosmetic work looking artificial. Dr. Carter listened carefully to what I wanted and created a subtle, natural smile that gave me my confidence back.',
    rating: 5,
    date: '3 months ago',
  },
  {
    id: '3',
    author: 'David K.',
    initials: 'DK',
    treatment: 'Invisalign Treatment',
    quote:
      'Clear communication, modern 3D scanning instead of messy impressions, and evening appointments that fit my work schedule. Couldn’t recommend SmileCraft more.',
    rating: 5,
    date: '1 month ago',
  },
  {
    id: '4',
    author: 'Sophia M.',
    initials: 'SM',
    treatment: 'Comprehensive Exam & Hygiene',
    quote:
      'The Madison Avenue office is serene and spotless. From the reception staff to the dental hygienist, everyone treats you with genuine care and respect.',
    rating: 5,
    date: '4 months ago',
  },
  {
    id: '5',
    author: 'Jonathan B.',
    initials: 'JB',
    treatment: 'Emergency Tooth Repair',
    quote:
      'Woke up with an excruciating fractured molar on a Tuesday morning. SmileCraft got me in by 10 AM, resolved the pain immediately, and explained every step with patience.',
    rating: 5,
    date: '2 weeks ago',
  },
  {
    id: '6',
    author: 'Allison W.',
    initials: 'AW',
    treatment: 'Restorative & Preventative Care',
    quote:
      'As someone with past dental anxiety, finding SmileCraft was a relief. The team is gentle, honest about what needs doing, and never pushes unnecessary procedures.',
    rating: 5,
    date: '5 months ago',
  },
];

export const FAQS: FAQItem[] = [
  {
    id: 'f1',
    category: 'general',
    question: 'How do I book an appointment?',
    answer:
      'You can request an appointment online through our booking page, call our front desk directly at +1 (212) 555-0188, or email hello@smilecraftdental.com. Our patient concierge will reach out promptly to confirm a time that suits your schedule.',
  },
  {
    id: 'f2',
    category: 'general',
    question: 'What should I bring to my first appointment?',
    answer:
      'Please bring a valid photo ID, your dental insurance card (if applicable), and a list of any current medications. If you have recent dental x-rays from another practice within the past 12 months, you can request them to be emailed to us ahead of your visit.',
  },
  {
    id: 'f3',
    category: 'general',
    question: 'Do you accept new patients?',
    answer:
      'Yes, we are actively welcoming new patients to our Madison Avenue practice. We offer comprehensive initial consultations that include digital imaging, periodontal screening, and a one-on-one discussion with your dentist.',
  },
  {
    id: 'f4',
    category: 'implants',
    question: 'What are dental implants and how do they work?',
    answer:
      'A dental implant is a biocompatible titanium post surgically positioned into the jawbone beneath your gums. Once in place, it fuses with the natural bone over several weeks, providing stable support for an artificial ceramic crown that replicates the strength and appearance of a natural tooth.',
  },
  {
    id: 'f5',
    category: 'implants',
    question: 'How long does the dental implant process take?',
    answer:
      'While every patient’s anatomy differs, a standard dental implant case typically takes between 3 to 6 months from initial placement to final crown delivery, allowing adequate time for optimal bone integration.',
  },
  {
    id: 'f6',
    category: 'cosmetic',
    question: 'What cosmetic treatments are available at SmileCraft Dental?',
    answer:
      'We offer custom handcrafted porcelain veneers, conservative composite bonding, in-office professional whitening, enamel recontouring, and complete aesthetic smile design tailored to facial proportions.',
  },
  {
    id: 'f7',
    category: 'cosmetic',
    question: 'Will porcelain veneers look natural or overly artificial?',
    answer:
      'We design veneers with natural translucency, subtle texture, and customized shade gradations that replicate real tooth enamel. We avoid uniform bright white blocks in favor of bespoke restorations that harmonize with your features.',
  },
  {
    id: 'f8',
    category: 'invisalign',
    question: 'How does Invisalign compare to traditional braces?',
    answer:
      'Invisalign uses smooth, clear plastic aligners that are virtually invisible and completely removable. You can take them out to eat, brush, and floss, without the dietary restrictions or bracket irritation associated with metal braces.',
  },
  {
    id: 'f9',
    category: 'emergency',
    question: 'What constitutes a dental emergency?',
    answer:
      'Common dental emergencies include sudden severe tooth pain, a chipped or fractured tooth with sharp edges, a tooth that has been knocked loose or completely out, facial swelling, or a broken restoration that prevents you from eating or speaking comfortably.',
  },
  {
    id: 'f10',
    category: 'emergency',
    question: 'What should I do if a tooth is knocked out?',
    answer:
      'Handle the tooth only by the crown (the white biting surface), never touching the root. If dirty, gently rinse with milk or saline without scrubbing. Try to gently place the tooth back into its socket if possible, or store it in a container of cold whole milk, and call our clinic immediately at +1 (212) 555-0188 for same-day emergency care.',
  },
  {
    id: 'f11',
    category: 'billing',
    question: 'What insurance plans do you accept?',
    answer:
      'We accept most major PPO dental insurance plans as an out-of-network provider with direct billing courtesy. Our insurance coordinator will verify your benefits in advance and submit claims on your behalf to maximize your direct reimbursement.',
  },
];
