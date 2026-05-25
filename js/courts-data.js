/* ============================================
   ECOURTS DATA — UP DISTRICTS & COURTS
   Mock data structure for Uttar Pradesh
   ============================================ */

const courtData = {
  states: [
    {
      code: 'UP',
      name: 'Uttar Pradesh',
      description: 'State with 76 district courts'
    }
  ],

  districts: {
    UP: [
      { code: 'LUCKNOW', name: 'Lucknow', region: 'Central' },
      { code: 'KANPUR', name: 'Kanpur Nagar', region: 'Central' },
      { code: 'AGRA', name: 'Agra', region: 'Western' },
      { code: 'NOIDA', name: 'Noida (Gautam Budh Nagar)', region: 'Northern' },
      { code: 'GHAZIABAD', name: 'Ghaziabad', region: 'Northern' },
      { code: 'MEERUT', name: 'Meerut', region: 'Northern' },
      { code: 'BAREILLY', name: 'Bareilly', region: 'Northern' },
      { code: 'PILIBHIT', name: 'Pilibhit', region: 'Northern' },
      { code: 'SHAHJAHANPUR', name: 'Shahjahanpur', region: 'Northern' },
      { code: 'RAMPURHAT', name: 'Rampur', region: 'Northern' },
      { code: 'VARANASI', name: 'Varanasi', region: 'Eastern' },
      { code: 'GORAKHPUR', name: 'Gorakhpur', region: 'Eastern' },
      { code: 'AZAMGARH', name: 'Azamgarh', region: 'Eastern' },
      { code: 'JAUNPUR', name: 'Jaunpur', region: 'Eastern' },
      { code: 'MIRZAPUR', name: 'Mirzapur', region: 'Eastern' },
      { code: 'BALLIA', name: 'Ballia', region: 'Eastern' },
      { code: 'ALLAHABAD', name: 'Prayagraj (Allahabad)', region: 'Southern' },
      { code: 'FATEHPUR', name: 'Fatehpur', region: 'Southern' },
      { code: 'RAEBARELI', name: 'Raebareli', region: 'Southern' },
      { code: 'JALAUN', name: 'Jalaun', region: 'Southern' },
      { code: 'BANDA', name: 'Banda', region: 'Southern' },
      { code: 'HAMIRPUR', name: 'Hamirpur', region: 'Southern' },
      { code: 'CHITRAKOOT', name: 'Chitrakoot', region: 'Southern' },
      { code: 'MAHOBA', name: 'Mahoba', region: 'Southern' },
      { code: 'AURAIYA', name: 'Auraiya', region: 'Central' },
      { code: 'KANPUR_DEHAT', name: 'Kanpur Dehat', region: 'Central' },
      { code: 'ETAWAH', name: 'Etawah', region: 'Central' },
      { code: 'FIROZABAD', name: 'Firozabad', region: 'Central' },
      { code: 'MAINPURI', name: 'Mainpuri', region: 'Central' },
      { code: 'MATHURA', name: 'Mathura', region: 'Western' },
      { code: 'HATHRAS', name: 'Hathras', region: 'Western' },
      { code: 'ALIGARH', name: 'Aligarh', region: 'Western' },
      { code: 'BULANDSHAHR', name: 'Bulandshahr', region: 'Western' },
      { code: 'BAGHPAT', name: 'Baghpat', region: 'Northern' },
      { code: 'SHAMLI', name: 'Shamli', region: 'Northern' },
      { code: 'MUZAFFARNAGAR', name: 'Muzaffarnagar', region: 'Northern' },
      { code: 'SAHARANPUR', name: 'Saharanpur', region: 'Northern' },
      { code: 'BIJNOR', name: 'Bijnor', region: 'Northern' },
      { code: 'MORADABAD', name: 'Moradabad', region: 'Northern' },
      { code: 'SAMBHAL', name: 'Sambhal', region: 'Northern' },
      { code: 'JYOTIBA_PHULE', name: 'Jyotiba Phule Nagar', region: 'Northern' },
      { code: 'AMROHA', name: 'Amroha', region: 'Northern' },
      { code: 'UDHAM_SINGH', name: 'Udham Singh Nagar', region: 'Northern' },
      { code: 'ALMORA', name: 'Almora', region: 'Northern' },
      { code: 'PITHORAGARH', name: 'Pithoragarh', region: 'Northern' },
      { code: 'BAGESHWAR', name: 'Bageshwar', region: 'Northern' },
      { code: 'PAURI', name: 'Pauri Garhwal', region: 'Northern' },
      { code: 'TEHRI', name: 'Tehri Garhwal', region: 'Northern' },
      { code: 'UTTARKASHI', name: 'Uttarkashi', region: 'Northern' },
      { code: 'CHAMOLI', name: 'Chamoli', region: 'Northern' },
      { code: 'RUDRAPRAYAG', name: 'Rudraprayag', region: 'Northern' },
      { code: 'HARIDWAR', name: 'Haridwar', region: 'Northern' },
      { code: 'DEHRADUN', name: 'Dehradun', region: 'Northern' },
      { code: 'NAINITAL', name: 'Nainital', region: 'Northern' },
      { code: 'USTINAINAR', name: 'Usnagar (Nagar)', region: 'Northern' },
      { code: 'UNNAO', name: 'Unnao', region: 'Central' },
      { code: 'RAE_BARELI', name: 'Raebareli', region: 'Southern' },
      { code: 'SULTANPUR', name: 'Sultanpur', region: 'Southern' },
      { code: 'AMETHI', name: 'Amethi', region: 'Southern' },
      { code: 'GONDA', name: 'Gonda', region: 'Eastern' },
      { code: 'MAHARAJGANJ', name: 'Maharajganj', region: 'Eastern' },
      { code: 'KUSHINAGAR', name: 'Kushinagar', region: 'Eastern' },
      { code: 'DEORIA', name: 'Deoria', region: 'Eastern' },
      { code: 'MAUNATHBHANJAN', name: 'Maunathbhanjan', region: 'Eastern' },
      { code: 'SIDDHARTHNAGAR', name: 'Siddharthnagar', region: 'Eastern' },
      { code: 'BASTI', name: 'Basti', region: 'Eastern' },
      { code: 'SANT_KABIR', name: 'Sant Kabir Nagar', region: 'Eastern' },
      { code: 'BAHRAICH', name: 'Bahraich', region: 'Eastern' },
      { code: 'SHRAVASTI', name: 'Shravasti', region: 'Eastern' },
      { code: 'BALRAMPUR', name: 'Balrampur', region: 'Eastern' },
      { code: 'SITAPUR', name: 'Sitapur', region: 'Central' },
      { code: 'HARDOI', name: 'Hardoi', region: 'Central' },
      { code: 'LUCKNOW_CITY', name: 'Lucknow City', region: 'Central' },
      { code: 'LUCKNOW_WEST', name: 'Lucknow West', region: 'Central' },
      { code: 'PRATAPGARH', name: 'Pratapgarh', region: 'Southern' },
      { code: 'KAUSHAMBI', name: 'Kaushambi', region: 'Southern' }
    ]
  },

  courts: {
    LUCKNOW: [
      {
        code: 'DCL_MAIN',
        name: 'District Court, Lucknow (Main Complex)',
        address: 'Court Street, Lucknow',
        phone: '+91-522-2208567',
        email: 'lucknow.courts@ecourts.gov.in',
        judges: 15,
        halls: 8
      },
      {
        code: 'ADC_LUCKNOW',
        name: 'Additional District Court, Lucknow',
        address: 'Gol Chakkar, Lucknow',
        phone: '+91-522-2265432',
        email: 'adc.lucknow@ecourts.gov.in',
        judges: 8,
        halls: 5
      },
      {
        code: 'CITY_SESSIONS',
        name: 'City Sessions Court, Lucknow',
        address: 'Aliganj, Lucknow',
        phone: '+91-522-2654321',
        email: 'sessions.lucknow@ecourts.gov.in',
        judges: 4,
        halls: 3
      }
    ],
    KANPUR: [
      {
        code: 'DCK_MAIN',
        name: 'District Court, Kanpur',
        address: 'Court Road, Kanpur',
        phone: '+91-512-2213456',
        email: 'kanpur.courts@ecourts.gov.in',
        judges: 12,
        halls: 6
      },
      {
        code: 'ADC_KANPUR',
        name: 'Additional District Court, Kanpur',
        address: 'Jajmau, Kanpur',
        phone: '+91-512-2345678',
        email: 'adc.kanpur@ecourts.gov.in',
        judges: 6,
        halls: 4
      }
    ],
    AGRA: [
      {
        code: 'DCA_MAIN',
        name: 'District Court, Agra',
        address: 'Court Road, Agra',
        phone: '+91-562-2410000',
        email: 'agra.courts@ecourts.gov.in',
        judges: 10,
        halls: 5
      }
    ],
    NOIDA: [
      {
        code: 'DCN_MAIN',
        name: 'District Court, Noida (Gautam Budh Nagar)',
        address: 'Sector 39, Noida',
        phone: '+91-120-4156000',
        email: 'noida.courts@ecourts.gov.in',
        judges: 14,
        halls: 7
      }
    ],
    GHAZIABAD: [
      {
        code: 'DCG_MAIN',
        name: 'District Court, Ghaziabad',
        address: 'Court Road, Ghaziabad',
        phone: '+91-120-3980000',
        email: 'ghaziabad.courts@ecourts.gov.in',
        judges: 11,
        halls: 6
      }
    ],
    MEERUT: [
      {
        code: 'DCM_MAIN',
        name: 'District Court, Meerut',
        address: 'Court Area, Meerut',
        phone: '+91-121-2760000',
        email: 'meerut.courts@ecourts.gov.in',
        judges: 9,
        halls: 5
      }
    ],
    BAREILLY: [
      {
        code: 'DCB_MAIN',
        name: 'District Court, Bareilly',
        address: 'Court Road, Bareilly',
        phone: '+91-581-2360000',
        email: 'bareilly.courts@ecourts.gov.in',
        judges: 8,
        halls: 4
      }
    ],
    VARANASI: [
      {
        code: 'DCV_MAIN',
        name: 'District Court, Varanasi',
        address: 'Court Road, Varanasi',
        phone: '+91-542-2410000',
        email: 'varanasi.courts@ecourts.gov.in',
        judges: 7,
        halls: 4
      }
    ],
    GORAKHPUR: [
      {
        code: 'DCGP_MAIN',
        name: 'District Court, Gorakhpur',
        address: 'Court Road, Gorakhpur',
        phone: '+91-551-2340000',
        email: 'gorakhpur.courts@ecourts.gov.in',
        judges: 6,
        halls: 3
      }
    ],
    ALLAHABAD: [
      {
        code: 'DCPH_MAIN',
        name: 'District Court, Prayagraj (Allahabad)',
        address: 'Court Road, Prayagraj',
        phone: '+91-532-2400000',
        email: 'prayagraj.courts@ecourts.gov.in',
        judges: 9,
        halls: 5
      }
    ]
  },

  // Mock case data for search results
  mockCases: [
    {
      id: 'CS-2024-001',
      filingNumber: '2024/1234',
      cnr: 'UP1234202400001',
      caseType: 'Civil Suit',
      status: 'Ongoing',
      parties: {
        plaintiff: 'Rajesh Kumar',
        defendant: 'Suresh Singh'
      },
      judge: 'Justice M. Sharma',
      advocate: 'Adv. Rishabh Raj',
      nextHearing: '2024-06-15',
      nextHearingNotes: 'Arguments',
      lastHearing: '2024-06-01',
      courtComplex: 'District Court, Lucknow',
      courtHall: 'No. 5',
      filedDate: '2024-01-10'
    },
    {
      id: 'CS-2024-002',
      filingNumber: '2024/1235',
      cnr: 'UP1234202400002',
      caseType: 'Criminal',
      status: 'Pending',
      parties: {
        plaintiff: 'State of UP',
        defendant: 'Arun Kumar'
      },
      judge: 'Justice P. Verma',
      advocate: 'Adv. Hanumant Lal Srivastava',
      nextHearing: '2024-06-22',
      nextHearingNotes: 'Final Arguments',
      lastHearing: '2024-06-08',
      courtComplex: 'City Sessions Court, Lucknow',
      courtHall: 'No. 2',
      filedDate: '2023-11-20'
    },
    {
      id: 'WP-2024-001',
      filingNumber: '2024/5678',
      cnr: 'UP5678202400001',
      caseType: 'Writ Petition',
      status: 'Hearing Today',
      parties: {
        plaintiff: 'Neha Singh',
        defendant: 'Govt. of UP'
      },
      judge: 'Justice A. Pandey',
      advocate: 'Adv. Radhika Singh',
      nextHearing: '2024-06-10',
      nextHearingNotes: 'Today - 10:30 AM',
      lastHearing: '2024-05-27',
      courtComplex: 'District Court, Lucknow',
      courtHall: 'No. 3',
      filedDate: '2024-04-15'
    },
    {
      id: 'OS-2024-001',
      filingNumber: '2024/9012',
      cnr: 'UP9012202400001',
      caseType: 'Original Suit',
      status: 'Evidence',
      parties: {
        plaintiff: 'Priya Properties Ltd.',
        defendant: 'Development Authority'
      },
      judge: 'Justice R. Shukla',
      advocate: 'Adv. Vedant Bhargav',
      nextHearing: '2024-06-25',
      nextHearingNotes: 'Cross-examination',
      lastHearing: '2024-06-03',
      courtComplex: 'District Court, Lucknow',
      courtHall: 'No. 7',
      filedDate: '2023-08-30'
    },
    {
      id: 'FAO-2024-001',
      filingNumber: '2024/3456',
      cnr: 'UP3456202400001',
      caseType: 'First Appeal',
      status: 'Reserved',
      parties: {
        plaintiff: 'Mohan Singh',
        defendant: 'Vikas Enterprises'
      },
      judge: 'Justice S. Mishra',
      advocate: 'Adv. Kanchan Srivastava',
      nextHearing: '2024-07-10',
      nextHearingNotes: 'Judgment Reserved',
      lastHearing: '2024-05-25',
      courtComplex: 'District Court, Kanpur',
      courtHall: 'No. 4',
      filedDate: '2023-12-12'
    }
  ],

  // Mock cause list data
  mockCauseList: [
    {
      caseNumber: 'CS-2024-001',
      parties: 'Rajesh Kumar vs Suresh Singh',
      judge: 'Justice M. Sharma',
      courtHall: '5',
      status: 'Arguments',
      time: '10:30 AM'
    },
    {
      caseNumber: 'CS-2024-003',
      parties: 'State Bank vs Loan Applicant',
      judge: 'Justice M. Sharma',
      courtHall: '5',
      status: 'Hearing',
      time: '11:45 AM'
    },
    {
      caseNumber: 'WP-2024-001',
      parties: 'Neha Singh vs State of UP',
      judge: 'Justice A. Pandey',
      courtHall: '3',
      status: 'Hearing',
      time: '02:00 PM'
    },
    {
      caseNumber: 'CrimMisc-2024-001',
      parties: 'State vs Arun Kumar',
      judge: 'Justice P. Verma',
      courtHall: '2',
      status: 'Bail Hearing',
      time: '03:15 PM'
    },
    {
      caseNumber: 'OS-2024-001',
      parties: 'Priya Properties vs Dev. Authority',
      judge: 'Justice R. Shukla',
      courtHall: '7',
      status: 'Evidence',
      time: '04:30 PM'
    }
  ],

  // Mock judgments data
  mockJudgments: [
    {
      id: 'J-2024-001',
      caseNumber: 'CS-2023-445',
      title: 'Property Dispute - Title Confirmation',
      judge: 'Justice M. Sharma',
      date: '2024-05-20',
      verdict: 'In Favor of Plaintiff',
      summary: 'Court confirmed title of plaintiff in property dispute'
    },
    {
      id: 'J-2024-002',
      caseNumber: 'WP-2023-112',
      title: 'Administrative Action Challenge',
      judge: 'Justice A. Pandey',
      date: '2024-05-18',
      verdict: 'Writ Allowed',
      summary: 'Government order set aside as violative of fundamental rights'
    },
    {
      id: 'J-2024-003',
      caseNumber: 'Crim-2023-678',
      title: 'Criminal Intimidation - IPC 506',
      judge: 'Justice P. Verma',
      date: '2024-05-15',
      verdict: 'Acquittal',
      summary: 'Accused acquitted due to insufficient evidence'
    }
  ],

  // Mock notices data
  mockNotices: [
    {
      id: 'N-2024-001',
      caseNumber: 'CS-2024-001',
      type: 'Summons',
      issuedDate: '2024-05-25',
      targetDate: '2024-06-10',
      description: 'Summons to defendant to appear before court'
    },
    {
      id: 'N-2024-002',
      caseNumber: 'WP-2024-001',
      type: 'Notice to Respondent',
      issuedDate: '2024-05-24',
      targetDate: '2024-06-08',
      description: 'Notice to show cause to Government of UP'
    },
    {
      id: 'N-2024-003',
      caseNumber: 'OS-2024-001',
      type: 'Notice to Jury',
      issuedDate: '2024-05-23',
      targetDate: '2024-06-15',
      description: 'Notice for jury summons - Evidence stage'
    }
  ]
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
  module.exports = courtData;
}
