/* ==========================================================================
   Lynch Laboratory — Shared Data Store, Publications Filter & Member CV Portal
   ========================================================================== */

const STORAGE_KEY_MEMBERS = 'lynch_lab_members_v3';
const STORAGE_KEY_AUTH = 'lynch_lab_logged_in_member_v1';
const STORAGE_KEY_PAGE_EDITS = 'lynch_lab_page_edits_v1';
const STORAGE_KEY_EDIT_MODE = 'lynch_lab_inline_edit_mode_v1';

// Official Lab Member Credentials (typed username & password)
const MEMBER_CREDENTIALS = {
  'kara': { memberId: 'kara-lynch', username: 'Kara', password: 'K4r4' },
  'emilio': { memberId: 'emilio-mejia', username: 'Emilio', password: '3milio' },
  'lauren': { memberId: 'lauren-bishop', username: 'Lauren', password: 'Laur3n' },
  'hannah': { memberId: 'hannah-lusk', username: 'Hannah', password: 'H4nn4h' },
  'gillian': { memberId: 'gillian-rexroad', username: 'Gillian', password: 'G1ll1an' },
  'judah': { memberId: 'judah-iwawaki', username: 'Judah', password: 'Jud4h' },
  'michael': { memberId: 'michael-metrick', username: 'Michael', password: 'M1chael' },
  'priscilla': { memberId: 'priscilla-yeung', username: 'Priscilla', password: 'Pr1sc1lla' }
};

function authenticateMember(typedUsername, typedPassword) {
  if (!typedUsername || !typedPassword) return null;
  const key = typedUsername.trim().toLowerCase();
  const record = MEMBER_CREDENTIALS[key];
  if (record && record.password === typedPassword) {
    return record.memberId;
  }
  return null;
}

// Default Lab Members Drafted from LinkedIn, ResearchGate, Stanford & UCSF Profiles
const DEFAULT_MEMBERS = [
  {
    id: 'kara-lynch',
    name: 'Kara L. Lynch, PhD, DABCC, FAACC',
    role: 'Principal Investigator & Professor of Laboratory Medicine',
    email: 'kara.lynch@ucsf.edu',
    initials: 'KL',
    photoUrl: '',
    training: 'PhD in Biochemistry, University of Wisconsin–Madison; Postdoctoral Fellowship in Clinical Chemistry & Toxicology, University of California, San Francisco (UCSF); Diplomate of the American Board of Clinical Chemistry (DABCC).',
    interests: 'High-resolution mass spectrometry (LC-HRMS / QTOF), untargeted clinical & forensic toxicology screening, novel psychoactive substances (NPS), public health drug supply surveillance, pediatric and maternal-fetal toxicology.',
    currentProjects: 'Ward 93 Drug Surveillance with DPH; Comprehensive Drug Testing in the ZSFG Clinical Lab via X500R; Investigating DART Mass Spectrometry; Investigating Kratom Alkaloids; THC/Nicotine Quantitation.',
    outsideInterests: 'Bay Area coastal trail running, mentoring emerging clinical chemists, science advocacy in harm reduction, and exploring San Francisco culinary markets.',
    links: {
      website: 'https://profiles.ucsf.edu/kara.lynch',
      scholar: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
      researchgate: 'https://www.researchgate.net/scientific-contributions/Kara-L-Lynch-38957822',
      linkedin: ''
    }
  },
  {
    id: 'lauren-bishop',
    name: 'Lauren Bishop, PhD',
    role: 'Postdoctoral Scholar',
    email: 'lauren.bishop@ucsf.edu',
    initials: 'LB',
    photoUrl: '',
    training: 'PhD in Chemistry & Chemical Biology, University of California, Davis (quantitative mass spectrometry, metabolomics & lipidomics); Postdoctoral Scholar in Clinical Chemistry & Analytical Toxicology, UCSF / ZSFG.',
    interests: 'Quantitative LC-MS/MS and LC-HRMS method development, matrix effect mitigation, ambient ionization mass spectrometry, and translational toxicology biomarker discovery.',
    currentProjects: 'Ward 93 Drug Surveillance with DPH; Investigating DART Mass Spectrometry; Investigating Kratom Alkaloids.',
    outsideInterests: 'Cycling across Marin Headlands, specialty coffee brewing, botanical photography, and pottery.',
    links: {
      website: '',
      scholar: '',
      researchgate: '',
      linkedin: 'https://www.linkedin.com/in/lbishop96/'
    }
  },
  {
    id: 'emilio-mejia',
    name: 'Emilio Mejia',
    role: 'Staff Research Associate III',
    email: 'emilio.mejia@ucsf.edu',
    initials: 'EM',
    photoUrl: '',
    training: 'B.S. in Chemical & Biological Sciences; Staff Research Associate III, UCSF Department of Laboratory Medicine & ZSFG Core Clinical Chemistry and Toxicology Laboratory.',
    interests: 'High-throughput clinical LC-HRMS/LC-MS/MS instrumentation, SCIEX X500R QTOF maintenance & library curation, sample preparation automation, and longitudinal public health toxicology workflows.',
    currentProjects: 'THC/Nicotine Quantitation.',
    outsideInterests: 'Bay Area live music, vintage audio gear restoration, hiking in the East Bay Regional Parks, and community volunteering.',
    links: {
      website: '',
      scholar: '',
      researchgate: '',
      linkedin: 'https://www.linkedin.com/in/emilio-mejia-8780b56b/'
    }
  },
  {
    id: 'gillian-rexroad',
    name: 'Gillian Rexroad, PhD',
    role: 'Clinical Chemistry Fellow',
    email: 'gillian.rexroad@ucsf.edu',
    initials: 'GR',
    photoUrl: '',
    training: 'PhD in Chemistry & Biochemistry (University of California, Santa Cruz / UC Davis); COMACC-Accredited Clinical Chemistry Postdoctoral Fellow, Department of Laboratory Medicine, UCSF.',
    interests: 'Clinical toxicology assay validation, synthetic opioid & benzodiazepine surveillance, endocrine & small-molecule mass spectrometry, and clinical laboratory quality management.',
    currentProjects: 'Comprehensive Drug Testing in the ZSFG Clinical Lab via X500R; Investigating DART Mass Spectrometry.',
    outsideInterests: 'Sea kayaking, sourdough baking, tidepooling along the Northern California coast, and sci-fi literature.',
    links: {
      website: '',
      scholar: '',
      researchgate: '',
      linkedin: 'https://www.linkedin.com/in/gillian-rexroad-2b43ab281/'
    }
  },
  {
    id: 'judah-iwawaki',
    name: 'Judah Iwawaki',
    role: "Master's Student",
    email: 'judah.iwawaki@ucsf.edu',
    initials: 'JI',
    photoUrl: '',
    training: 'B.S. in Chemistry, University of California, Merced (Undergraduate Researcher, Findlater Group & UC Center for Direct Conversion of Captured CO₂); M.S. Researcher, UCSF Lynch Toxicology Laboratory.',
    interests: 'Public health drug surveillance, synthetic opioid & adulterant tracking, analytical toxicology workflows, and green analytical sample preparation.',
    currentProjects: 'Ward 93 Drug Surveillance with DPH.',
    outsideInterests: 'Bouldering and rock climbing, amateur photography, cooking regional Japanese cuisine, and strategy board games.',
    links: {
      website: '',
      scholar: '',
      researchgate: '',
      linkedin: 'https://www.linkedin.com/in/judah-iwawaki/'
    }
  },
  {
    id: 'hannah-lusk',
    name: 'Hannah Lusk, PhD',
    role: 'Clinical Chemistry Fellow',
    email: 'hannah.lusk@ucsf.edu',
    initials: 'HL',
    photoUrl: '',
    training: 'B.S. in Chemistry, Kansas State University; PhD in Chemistry & Biochemistry, University of California, Santa Cruz (mass spectrometry-based metabolomics); COMACC Clinical Chemistry Fellow, UCSF.',
    interests: 'Untargeted metabolomics and exposomics, therapeutic drug monitoring (TDM), botanical alkaloid & Kratom isomer characterization, and high-resolution MS spectral deconvolution.',
    currentProjects: 'Investigating Kratom Alkaloids.',
    outsideInterests: 'Distance running in Golden Gate Park, watercolor illustration, national park backpacking, and trivia nights.',
    links: {
      website: '',
      scholar: '',
      researchgate: '',
      linkedin: 'https://www.linkedin.com/in/hannah-lusk-b9390a111/'
    }
  },
  {
    id: 'michael-metrick',
    name: 'Michael Metrick, MD, PhD',
    role: 'Clinical Chemistry Fellow & Laboratory Medicine Resident',
    email: 'michael.metrick@ucsf.edu',
    initials: 'MM',
    photoUrl: '',
    training: 'MD & PhD (Biophysics, protein misfolding & ultrasensitive biomarker diagnostics / RT-QuIC); Resident Physician in Laboratory Medicine (CP) and Clinical Chemistry Fellow, UCSF.',
    interests: 'Translational assay physics, high-resolution toxicology informatics, SCIEX X500R comprehensive drug screening, endogenous internal standards, and clinical decision support.',
    currentProjects: 'Comprehensive Drug Testing in the ZSFG Clinical Lab via X500R.',
    outsideInterests: 'Classical & jazz piano, minimalist web design, cycling up Hawk Hill, and woodworking.',
    links: {
      website: 'https://profiles.ucsf.edu/',
      scholar: '',
      researchgate: 'https://www.researchgate.net/profile/Michael-Metrick',
      linkedin: ''
    }
  },
  {
    id: 'priscilla-yeung',
    name: 'Priscilla Yeung, MD, PhD',
    role: 'Joint Clinical Chemistry Fellow (Stanford / UCSF)',
    email: 'priscilla.yeung@stanford.edu',
    initials: 'PY',
    photoUrl: '',
    training: 'MD & PhD; Residency in Clinical Pathology & Instructor / Joint Clinical Chemistry Fellow across Stanford University School of Medicine and UCSF Department of Laboratory Medicine.',
    interests: 'Top-down and targeted clinical mass spectrometry, ambient ionization (DART-MS), cross-institutional harmonization of comprehensive toxicology screening, and novel biomarker translation.',
    currentProjects: 'Comprehensive Drug Testing in the ZSFG Clinical Lab via X500R; Investigating DART Mass Spectrometry.',
    outsideInterests: 'Chamber music, Peninsula trail hiking, culinary fermentation, and art museum curation.',
    links: {
      website: 'https://med.stanford.edu/profiles/priscilla-yeung',
      scholar: '',
      researchgate: '',
      linkedin: ''
    }
  }
];

// Curated Publications from Dr. Kara Lynch's Google Scholar Profile
const PUBLICATIONS_DATA = [
  {
    id: 'pub-2026-ward93',
    year: 2026,
    category: 'surveillance',
    categoryLabel: 'Drug Surveillance & Harm Reduction',
    title: 'Fentanyl, xylazine, and bromazolam: Urine toxicology trends in a San Francisco safety net opioid treatment patient cohort 2023–2025',
    authors: 'Halifax JC, Lim L, Ahern J, Steiger S, Shapiro BJ, Lynch KL',
    journal: 'Drug and Alcohol Dependence, Vol. 284, 113185',
    summary: 'Longitudinal LC-HRMS surveillance at ZSFG Ward 93 characterizing real-world prevalence shifts of synthetic opioids, alpha-2 adrenergic sedative adulterants (xylazine), and designer benzodiazepines (bromazolam) in San Francisco safety-net patients.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{halifax2026fentanyl,\n  title={Fentanyl, xylazine, and bromazolam: Urine toxicology trends in a San Francisco safety net opioid treatment patient cohort 2023--2025},\n  author={Halifax, JC and Lim, L and Ahern, J and Steiger, S and Shapiro, BJ and Lynch, Kara L},\n  journal={Drug and Alcohol Dependence},\n  volume={284},\n  pages={113185},\n  year={2026}\n}`
  },
  {
    id: 'pub-2026-swath-ida',
    year: 2026,
    category: 'hrms',
    categoryLabel: 'High-Resolution Mass Spectrometry',
    title: 'Comparison of Information-Dependent Acquisition and Sequential Window Acquisition of All Theoretical Mass Spectra for Untargeted Drug Testing on a Linear Ion Trap-Pulsing Quadrupole-Time of Flight Mass Spectrometer',
    authors: 'Mann MW, Lim L, Luo RY, Lynch KL',
    journal: 'Clinical Chemistry',
    summary: 'Head-to-head analytical evaluation of IDA versus SWATH-MS data-independent acquisition workflows on high-resolution QTOF instrumentation for broad-spectrum clinical drug screening.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{mann2026comparison,\n  title={Comparison of Information-Dependent Acquisition and Sequential Window Acquisition of All Theoretical Mass Spectra for Untargeted Drug Testing},\n  author={Mann, MW and Lim, L and Luo, RY and Lynch, Kara L},\n  journal={Clinical Chemistry},\n  year={2026}\n}`
  },
  {
    id: 'pub-2026-salicylate',
    year: 2026,
    category: 'clinical',
    categoryLabel: 'Clinical Toxicology',
    title: 'Commentary on Increased Salicylate Concentration in a Patient Reporting No Aspirin Use',
    authors: 'Lynch KL',
    journal: 'Clinical Chemistry, 72(3), 335–336',
    summary: 'Clinical laboratory investigation into occult salicylate exposures, analytical interferences, and toxicokinetic interpretation in emergency diagnostics.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{lynch2026commentary,\n  title={Commentary on Increased Salicylate Concentration in a Patient Reporting No Aspirin Use},\n  author={Lynch, Kara L},\n  journal={Clinical Chemistry},\n  volume={72},\n  number={3},\n  pages={335--336},\n  year={2026}\n}`
  },
  {
    id: 'pub-2024-strips',
    year: 2024,
    category: 'surveillance',
    categoryLabel: 'Drug Surveillance & Harm Reduction',
    title: 'Testing the test strips: laboratory performance of fentanyl test strips',
    authors: 'Halifax JC, Lim L, Ciccarone D, Lynch KL',
    journal: 'Harm Reduction Journal, 21, 14',
    summary: 'Rigorous analytical assessment of lateral flow fentanyl test strip sensitivity, cross-reactivity, and lot-to-lot performance against gold-standard LC-HRMS quantitation.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{halifax2024testing,\n  title={Testing the test strips: laboratory performance of fentanyl test strips},\n  author={Halifax, JC and Lim, L and Ciccarone, D and Lynch, Kara L},\n  journal={Harm Reduction Journal},\n  volume={21},\n  pages={14},\n  year={2024}\n}`
  },
  {
    id: 'pub-2024-thc-cbd',
    year: 2024,
    category: 'cannabinoids',
    categoryLabel: 'Cannabinoids & Natural Toxins',
    title: 'The effect of route of administration and vehicle on the pharmacokinetics of THC and CBD in adult, neonate, and breastfed Sprague-Dawley rats',
    authors: 'Soni I, Chinn GA, Halifax JC, Hellman J, Lynch KL, Sall JW',
    journal: 'Cannabis and Cannabinoid Research, 9(5)',
    summary: 'Quantitative LC-MS/MS profiling of delta-9-THC, CBD, and active metabolites across developmental stages and administration routes.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{soni2024effect,\n  title={The effect of route of administration and vehicle on the pharmacokinetics of THC and CBD in adult, neonate, and breastfed Sprague-Dawley rats},\n  author={Soni, I and Chinn, GA and Halifax, JC and Hellman, J and Lynch, Kara L and Sall, JW},\n  journal={Cannabis and Cannabinoid Research},\n  volume={9},\n  number={5},\n  year={2024}\n}`
  },
  {
    id: 'pub-2023-polysubstance',
    year: 2023,
    category: 'clinical',
    categoryLabel: 'Clinical Toxicology',
    title: 'Cocaine Use Is Associated With Increased LVMI in Unstably Housed Women With Polysubstance Use',
    authors: 'Ravi A, Vittinghoff E, Wu AHB, Suen LW, Coffin PO, Hsue P, Lynch KL',
    journal: 'Substance Abuse, 44(4), 323–329',
    summary: 'Integrates comprehensive toxicology biomarker confirmation with cardiovascular imaging to evaluate structural heart disease risk in unstably housed women.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{ravi2023cocaine,\n  title={Cocaine Use Is Associated With Increased LVMI in Unstably Housed Women With Polysubstance Use},\n  author={Ravi, A and Vittinghoff, E and Wu, AHB and Suen, LW and Coffin, PO and Hsue, P and Lynch, Kara L},\n  journal={Substance Abuse},\n  volume={44},\n  number={4},\n  pages={323--329},\n  year={2023}\n}`
  },
  {
    id: 'pub-2022-fentanyl-hrms',
    year: 2022,
    category: 'hrms',
    categoryLabel: 'High-Resolution Mass Spectrometry',
    title: 'Development and application of a High-Resolution mass spectrometry method for the detection of fentanyl analogs in urine and serum',
    authors: 'Zhang Y, Halifax JC, Tangsombatvisit C, Yun C, Pang S, Hooshfar S, Wu AHB, Lynch KL',
    journal: 'Journal of Mass Spectrometry and Advances in the Clinical Lab (JMSACL), 26, 1–6',
    summary: 'Establishes a sensitive LC-QTOF-MS method capable of simultaneously identifying dozens of illicit fentanyl analogs and synthetic opioid metabolites in clinical matrices.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{zhang2022development,\n  title={Development and application of a High-Resolution mass spectrometry method for the detection of fentanyl analogs in urine and serum},\n  author={Zhang, Y and Halifax, JC and Tangsombatvisit, C and Yun, C and Pang, S and Hooshfar, S and Wu, AHB and Lynch, Kara L},\n  journal={Journal of Mass Spectrometry and Advances in the Clinical Lab},\n  volume={26},\n  pages={1--6},\n  year={2022}\n}`
  },
  {
    id: 'pub-2022-natural-products',
    year: 2022,
    category: 'cannabinoids',
    categoryLabel: 'Cannabinoids & Natural Toxins',
    title: 'Establishment of a High-Resolution Liquid Chromatography-Mass Spectrometry Spectral Library for Screening Toxic Natural Products',
    authors: 'Luo YR, Goodnough R, Yun C, Wu AHB, Lynch KL',
    journal: 'Journal of Analytical Toxicology, 46(3), 303–321',
    summary: 'Constructs a comprehensive high-resolution MS/MS spectral library of botanical, fungal, and marine natural toxins to empower rapid clinical poisoning investigations.',
    url: 'https://scholar.google.com/citations?user=pWTTFpIAAAAJ&hl=en',
    bibtex: `@article{luo2022establishment,\n  title={Establishment of a High-Resolution Liquid Chromatography-Mass Spectrometry Spectral Library for Screening Toxic Natural Products},\n  author={Luo, YR and Goodnough, R and Yun, C and Wu, AHB and Lynch, Kara L},\n  journal={Journal of Analytical Toxicology},\n  volume={46},\n  number={3},\n  pages={303--321},\n  year={2022}\n}`
  }
];

// Helper Functions for Member Storage
function getMembers() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY_MEMBERS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(DEFAULT_MEMBERS));
      return JSON.parse(JSON.stringify(DEFAULT_MEMBERS));
    }
    return JSON.parse(raw);
  } catch (e) {
    return DEFAULT_MEMBERS;
  }
}

function saveMembers(members) {
  localStorage.setItem(STORAGE_KEY_MEMBERS, JSON.stringify(members));
}

function getLoggedInMemberId() {
  return localStorage.getItem(STORAGE_KEY_AUTH) || null;
}

function setLoggedInMemberId(id) {
  if (id) {
    localStorage.setItem(STORAGE_KEY_AUTH, id);
    if (localStorage.getItem(STORAGE_KEY_EDIT_MODE) === null) {
      localStorage.setItem(STORAGE_KEY_EDIT_MODE, '1');
    }
  } else {
    localStorage.removeItem(STORAGE_KEY_AUTH);
  }
  updateAuthHeaderUI();
  refreshInlineEditableElements();
}

function isInlineEditModeEnabled() {
  if (!getLoggedInMemberId()) return false;
  return localStorage.getItem(STORAGE_KEY_EDIT_MODE) !== '0';
}

function toggleInlineEditMode() {
  const next = isInlineEditModeEnabled() ? '0' : '1';
  localStorage.setItem(STORAGE_KEY_EDIT_MODE, next);
  updateAuthHeaderUI();
  refreshInlineEditableElements();
}

function updateAuthHeaderUI() {
  const authContainer = document.getElementById('header-auth-status');
  if (!authContainer) return;
  const currentId = getLoggedInMemberId();
  const members = getMembers();
  const currentMember = members.find(m => m.id === currentId);
  const editActive = isInlineEditModeEnabled();

  if (currentMember) {
    authContainer.innerHTML = `
      <span class="pill pill-teal" style="font-size:12.5px;">
        Signed in: <strong>${escapeHtml(currentMember.name.split(',')[0])}</strong>
      </span>
      <button type="button" class="btn ${editActive ? 'btn-teal' : 'btn-outline'} btn-sm" onclick="toggleInlineEditMode()">
        ${editActive ? 'Editing Page Text: ON' : 'Edit Page Text'}
      </button>
      <a href="members.html?edit=1" class="btn btn-outline btn-sm">Profile / CV</a>
      <button type="button" class="btn btn-ghost btn-sm" onclick="handleLogout()">Sign Out</button>
    `;
  } else {
    authContainer.innerHTML = `
      <button type="button" class="btn btn-outline btn-sm" onclick="openUniversalLoginModal()">Member Login</button>
    `;
  }
  renderFloatingEditToolbar();
}

function handleLogout() {
  setLoggedInMemberId(null);
  if (typeof renderMembersPage === 'function') {
    renderMembersPage();
  }
  refreshInlineEditableElements();
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

// ==========================================================================
// Intelligent Resume / CV Parser (Supports PDF, DOCX, TXT, MD & Pasted Text)
// ==========================================================================

function parseResumeTextIntoFields(rawText) {
  const clean = rawText.replace(/\r\n/g, '\n').trim();
  const lines = clean.split('\n').map(l => l.trim()).filter(Boolean);

  const result = {
    training: '',
    interests: '',
    currentProjects: '',
    outsideInterests: '',
    website: '',
    scholar: '',
    researchgate: '',
    linkedin: ''
  };

  // Extract URLs first
  const urlRegex = /(https?:\/\/[^\s,;)"']+)/gi;
  const urls = clean.match(urlRegex) || [];
  urls.forEach(u => {
    const lower = u.toLowerCase();
    if (lower.includes('scholar.google')) {
      result.scholar = u;
    } else if (lower.includes('researchgate.net')) {
      result.researchgate = u;
    } else if (lower.includes('linkedin.com')) {
      result.linkedin = u;
    } else if (!result.website) {
      result.website = u;
    }
  });

  // Section header matcher
  const sectionPatterns = {
    training: /^(education|training|academic background|degrees|fellowship|residency|qualifications|past and present training)/i,
    interests: /^(research interests|interests|scientific interests|areas of interest|specialties|expertise|analytical focus)/i,
    currentProjects: /^(current projects|projects|research projects|active projects|ongoing work|toxicology projects)/i,
    outsideInterests: /^(interests outside of lab|outside of lab|personal interests|hobbies|extracurricular|beyond the lab|life outside lab)/i
  };

  let activeSection = null;
  const buckets = {
    training: [],
    interests: [],
    currentProjects: [],
    outsideInterests: []
  };

  for (const line of lines) {
    // Check inline "Key: Value" format first (e.g., "Training: PhD in Chemistry...")
    const colonIdx = line.indexOf(':');
    if (colonIdx > 0 && colonIdx < 36) {
      const keyPart = line.slice(0, colonIdx).trim();
      const valPart = line.slice(colonIdx + 1).trim();
      let matchedInline = false;
      for (const [secKey, regex] of Object.entries(sectionPatterns)) {
        if (regex.test(keyPart)) {
          activeSection = secKey;
          if (valPart) buckets[secKey].push(valPart);
          matchedInline = true;
          break;
        }
      }
      if (matchedInline) continue;
    }

    // Check standalone section header
    const cleanHeading = line.replace(/^[#*\-\d.\s]+|[#*:]+$/g, '').trim();
    let switched = false;
    if (cleanHeading.length < 48) {
      for (const [secKey, regex] of Object.entries(sectionPatterns)) {
        if (regex.test(cleanHeading)) {
          activeSection = secKey;
          switched = true;
          break;
        }
      }
    }
    if (switched) continue;

    // Otherwise, assign line to active section or heuristically classify
    if (activeSection) {
      buckets[activeSection].push(line.replace(/^[•\-*]\s*/, ''));
    } else {
      // Heuristic fallback when no header is matched yet
      if (/\b(Ph\.?D\.?|M\.?D\.?|B\.?S\.?|B\.?A\.?|M\.?S\.?|University|College|Fellow|Resident|Postdoc)\b/i.test(line)) {
        buckets.training.push(line.replace(/^[•\-*]\s*/, ''));
      } else if (/\b(X500R|DART|Ward 93|Kratom|THC|Nicotine|QTOF|surveillance)\b/i.test(line)) {
        buckets.currentProjects.push(line.replace(/^[•\-*]\s*/, ''));
      } else if (/\b(mass spectrometry|toxicology|chromatography|metabolomics|proteomics|biomarker|clinical chemistry)\b/i.test(line)) {
        buckets.interests.push(line.replace(/^[•\-*]\s*/, ''));
      } else if (/\b(hiking|running|climbing|music|piano|cooking|baking|cycling|photography|kayaking)\b/i.test(line)) {
        buckets.outsideInterests.push(line.replace(/^[•\-*]\s*/, ''));
      }
    }
  }

  result.training = buckets.training.slice(0, 6).join('; ');
  result.interests = buckets.interests.slice(0, 5).join('; ');
  result.currentProjects = buckets.currentProjects.slice(0, 5).join('; ');
  result.outsideInterests = buckets.outsideInterests.slice(0, 4).join('; ');

  return result;
}

// Extract text from uploaded file (.txt, .md, .pdf, .docx)
async function extractTextFromFile(file) {
  const name = file.name.toLowerCase();
  if (name.endsWith('.txt') || name.endsWith('.md') || name.endsWith('.csv') || name.endsWith('.json')) {
    return await file.text();
  }

  // If PDF and pdfjsLib is available, use it; otherwise extract readable ASCII strings from buffer
  const buffer = await file.arrayBuffer();
  if (name.endsWith('.pdf') && window.pdfjsLib) {
    try {
      const pdf = await window.pdfjsLib.getDocument({ data: buffer }).promise;
      let fullText = '';
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        const pageText = content.items.map(item => item.str).join(' ');
        fullText += pageText + '\n';
      }
      if (fullText.trim().length > 20) return fullText;
    } catch (err) {
      console.warn('PDF.js fallback to binary string scan:', err);
    }
  }

  // Fallback printable text decoder for PDF/DOCX/RTF
  const decoder = new TextDecoder('utf-8', { fatal: false });
  const raw = decoder.decode(buffer);
  const printableChunks = raw.match(/[A-Za-z0-9.,;:/\-()@&\s]{12,}/g) || [];
  return printableChunks.join('\n');
}

// ==========================================================================
// Universal Member Login Modal & Site-Wide Inline Text Editor
// ==========================================================================

const INLINE_TEXT_SELECTOR = [
  'main h1', 'main h2', 'main h3', 'main h4',
  'main p', 'main li',
  '.brand-title', '.brand-subtitle',
  '.eyebrow',
  '.pi-name', '.pi-role',
  '.metric-value', '.metric-label',
  '.pillar-num', '.pillar-title', '.pillar-desc',
  '.project-code', '.project-title', '.project-desc',
  '.spec-label', '.spec-val',
  '.pub-year', '.pub-journal', '.pub-title', '.pub-authors', '.pub-summary',
  '.member-name', '.member-role-badge', '.member-section-label', '.member-section-content',
  '.site-footer strong'
].join(', ');

function getCurrentPageKey() {
  const path = window.location.pathname;
  const filename = path.substring(path.lastIndexOf('/') + 1) || 'index.html';
  return filename.toLowerCase();
}

function getAllPageEdits() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY_PAGE_EDITS) || '{}');
  } catch (e) {
    return {};
  }
}

function savePageEdit(pageKey, elementKey, htmlValue) {
  const all = getAllPageEdits();
  if (!all[pageKey]) all[pageKey] = {};
  all[pageKey][elementKey] = htmlValue;
  localStorage.setItem(STORAGE_KEY_PAGE_EDITS, JSON.stringify(all));
}

function resetCurrentPageTextEdits() {
  const pageKey = getCurrentPageKey();
  const all = getAllPageEdits();
  if (all[pageKey]) {
    delete all[pageKey];
    localStorage.setItem(STORAGE_KEY_PAGE_EDITS, JSON.stringify(all));
  }
  window.location.reload();
}

function refreshInlineEditableElements() {
  const pageKey = getCurrentPageKey();
  const savedForPage = getAllPageEdits()[pageKey] || {};
  const canEdit = isInlineEditModeEnabled();

  if (canEdit) {
    document.body.classList.add('member-edit-mode');
  } else {
    document.body.classList.remove('member-edit-mode');
  }

  const elements = document.querySelectorAll(INLINE_TEXT_SELECTOR);
  elements.forEach((el, index) => {
    // Skip elements inside modals or filter bars
    if (el.closest('.modal-backdrop') || el.closest('#portal-banner')) return;

    // Assign stable key
    if (!el.dataset.inlineEditKey) {
      const cardParent = el.closest('[id]');
      const prefix = cardParent ? cardParent.id : 'el';
      el.dataset.inlineEditKey = `${prefix}-${el.tagName.toLowerCase()}-${index}`;
    }

    const key = el.dataset.inlineEditKey;

    // Apply saved page text if available (and not already applied while focused)
    if (savedForPage[key] !== undefined && document.activeElement !== el) {
      el.innerHTML = savedForPage[key];
    }

    if (canEdit) {
      el.setAttribute('contenteditable', 'true');
      el.setAttribute('spellcheck', 'true');
      if (!el.dataset.inlineListenerBound) {
        el.dataset.inlineListenerBound = '1';
        el.addEventListener('input', () => handleInlineElementChange(el));
        el.addEventListener('blur', () => handleInlineElementChange(el));
      }
    } else {
      el.removeAttribute('contenteditable');
    }
  });

  renderFloatingEditToolbar();
}

function handleInlineElementChange(el) {
  const pageKey = getCurrentPageKey();
  const key = el.dataset.inlineEditKey;
  if (!key) return;

  savePageEdit(pageKey, key, el.innerHTML);

  // If this element belongs to a member card on members.html, also sync with member storage
  const memberCard = el.closest('.member-card[id^="member-"]');
  if (memberCard) {
    const memberId = memberCard.id.replace(/^member-/, '');
    const members = getMembers();
    const mIdx = members.findIndex(m => m.id === memberId);
    if (mIdx !== -1) {
      const textVal = el.textContent.trim();
      if (el.classList.contains('member-name')) {
        members[mIdx].name = textVal;
      } else if (el.classList.contains('member-role-badge')) {
        members[mIdx].role = textVal;
      } else if (el.classList.contains('member-section-content')) {
        const sec = el.closest('.member-section');
        const label = sec?.querySelector('.member-section-label')?.textContent.toLowerCase() || '';
        if (label.includes('training')) members[mIdx].training = textVal;
        else if (label.includes('research')) members[mIdx].interests = textVal;
        else if (label.includes('project')) members[mIdx].currentProjects = textVal;
        else if (label.includes('outside')) members[mIdx].outsideInterests = textVal;
      }
      saveMembers(members);
    }
  }

  const statusLabel = document.getElementById('floating-edit-save-status');
  if (statusLabel) {
    statusLabel.textContent = 'Saved just now';
  }
}

function renderFloatingEditToolbar() {
  let bar = document.getElementById('member-floating-edit-toolbar');
  const loggedInId = getLoggedInMemberId();

  if (!loggedInId) {
    if (bar) bar.remove();
    return;
  }

  if (!bar) {
    bar = document.createElement('div');
    bar.id = 'member-floating-edit-toolbar';
    bar.className = 'member-edit-toolbar';
    document.body.appendChild(bar);
  }

  const editActive = isInlineEditModeEnabled();
  bar.innerHTML = `
    <span class="member-edit-status-dot"></span>
    <div>
      <div style="font-weight:600; color:var(--text-primary); line-height:1.2;">
        ${editActive ? 'Inline Text Edit Mode: ON' : 'Inline Text Edit Mode: Paused'}
      </div>
      <div id="floating-edit-save-status" style="font-size:11.5px; color:var(--text-muted);">
        ${editActive ? 'Click any text on this page to edit directly' : 'Click Enable to edit text on this page'}
      </div>
    </div>
    <button type="button" class="btn btn-outline btn-sm" onclick="toggleInlineEditMode()">
      ${editActive ? 'Pause Editing' : 'Enable Editing'}
    </button>
    <button type="button" class="btn btn-ghost btn-sm" onclick="resetCurrentPageTextEdits()" title="Restore default text for this page">
      Reset Page
    </button>
  `;
}

function ensureUniversalLoginModal() {
  if (document.getElementById('login-modal')) return;

  const modalBackdrop = document.createElement('div');
  modalBackdrop.className = 'modal-backdrop';
  modalBackdrop.id = 'login-modal';
  modalBackdrop.setAttribute('role', 'dialog');
  modalBackdrop.setAttribute('aria-modal', 'true');
  modalBackdrop.innerHTML = `
    <div class="modal-panel" style="max-width: 500px;">
      <div class="modal-header">
        <div>
          <div class="eyebrow" style="margin-bottom:4px;"><span class="eyebrow-dot"></span> Lab Authentication</div>
          <h2 class="modal-title">Member Portal Sign In</h2>
        </div>
        <button type="button" class="close-btn" onclick="closeUniversalLoginModal()" aria-label="Close">&times;</button>
      </div>

      <form onsubmit="handleUniversalLoginSubmit(event)">
        <div id="universal-login-error" style="display:none; padding:10px 14px; border-radius:var(--radius-sm); font-size:13px; background:#FEF2F2; color:#991B1B; border:1px solid #FECACA; margin-bottom:16px;"></div>

        <div class="form-grid">
          <div class="form-group">
            <label class="form-label" for="universal-login-username">Username</label>
            <input type="text" id="universal-login-username" class="form-input" placeholder="e.g. Kara, Lauren, Emilio..." autocomplete="username" required />
          </div>
          <div class="form-group">
            <label class="form-label" for="universal-login-password">Password</label>
            <input type="password" id="universal-login-password" class="form-input" placeholder="Enter your password" autocomplete="current-password" required />
          </div>
        </div>

        <div style="display:flex; justify-content:flex-end; align-items:center; gap:10px; margin-top:12px;">
          <button type="button" class="btn btn-ghost" onclick="closeUniversalLoginModal()">Cancel</button>
          <button type="submit" class="btn btn-primary">Sign In to Edit Page &rarr;</button>
        </div>
      </form>
    </div>
  `;
  document.body.appendChild(modalBackdrop);
}

function openUniversalLoginModal() {
  if (typeof openLoginModal === 'function') {
    openLoginModal();
    return;
  }
  ensureUniversalLoginModal();
  const errEl = document.getElementById('universal-login-error');
  if (errEl) errEl.style.display = 'none';
  const uEl = document.getElementById('universal-login-username');
  const pEl = document.getElementById('universal-login-password');
  if (uEl) uEl.value = '';
  if (pEl) pEl.value = '';
  document.getElementById('login-modal').classList.add('open');
  setTimeout(() => uEl?.focus(), 50);
}

function closeUniversalLoginModal() {
  const modal = document.getElementById('login-modal');
  if (modal) modal.classList.remove('open');
}

function handleUniversalLoginSubmit(e) {
  e.preventDefault();
  const u = document.getElementById('universal-login-username').value;
  const p = document.getElementById('universal-login-password').value;
  const matchedId = authenticateMember(u, p);
  if (!matchedId) {
    const errEl = document.getElementById('universal-login-error');
    errEl.textContent = 'Invalid username or password. Please check your credentials and try again.';
    errEl.style.display = 'block';
    return;
  }
  localStorage.setItem(STORAGE_KEY_EDIT_MODE, '1');
  setLoggedInMemberId(matchedId);
  closeUniversalLoginModal();
}

document.addEventListener('DOMContentLoaded', () => {
  updateAuthHeaderUI();
  setTimeout(() => {
    refreshInlineEditableElements();
  }, 30);
});
