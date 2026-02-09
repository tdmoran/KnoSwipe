export type Category = 'laryngology' | 'rhinology' | 'otology' | 'head-neck';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface AnimatedTextLine {
  text: string;
  highlight?: boolean;
}

export interface QuizOption {
  label: string;
  text: string;
}

export interface SurgicalStep {
  title: string;
  detail: string;
}

export interface AnatomyStructure {
  name: string;
  x: number;
  y: number;
  description?: string;
}

export interface AnimatedTextCardData {
  id: string;
  type: 'animated-text';
  category: Category;
  difficulty: Difficulty;
  title: string;
  subtitle?: string;
  lines: AnimatedTextLine[];
  footnote?: string;
}

export interface QuizCardData {
  id: string;
  type: 'quiz';
  category: Category;
  difficulty: Difficulty;
  stem: string;
  options: QuizOption[];
  correctIndex: number;
  explanation: string;
}

export interface FlashCardData {
  id: string;
  type: 'flashcard';
  category: Category;
  difficulty: Difficulty;
  front: string;
  back: string;
  bonus?: string;
}

export interface SurgicalStepsCardData {
  id: string;
  type: 'surgical-steps';
  category: Category;
  difficulty: Difficulty;
  title: string;
  steps: SurgicalStep[];
}

export interface FillBlankCardData {
  id: string;
  type: 'fill-blank';
  category: Category;
  difficulty: Difficulty;
  sentence: string;
  blankWord: string;
  options: string[];
}

export interface AnatomyCardData {
  id: string;
  type: 'anatomy';
  category: Category;
  difficulty: Difficulty;
  title: string;
  subtitle?: string;
  svgType: 'larynx' | 'sinuses' | 'neck-triangles' | 'neck-fascial';
  structures: AnatomyStructure[];
}

export type CardData =
  | AnimatedTextCardData
  | QuizCardData
  | FlashCardData
  | SurgicalStepsCardData
  | FillBlankCardData
  | AnatomyCardData;

export const categoryLabels: Record<Category, string> = {
  laryngology: 'Laryngology',
  rhinology: 'Rhinology',
  otology: 'Otology',
  'head-neck': 'Head & Neck',
};

export const categoryColors: Record<Category, string> = {
  laryngology: '#00e5a0',
  rhinology: '#4d8eff',
  otology: '#a78bfa',
  'head-neck': '#ff5c72',
};

export const difficultyColors: Record<Difficulty, string> = {
  easy: '#00e5a0',
  medium: '#ffb347',
  hard: '#ff5c72',
};

export const cards: CardData[] = [
  {
    id: 'rln-facts',
    type: 'animated-text',
    category: 'laryngology',
    difficulty: 'medium',
    title: 'Recurrent Laryngeal Nerve',
    subtitle: 'High-Yield Anatomy',
    lines: [
      { text: 'Branch of the vagus nerve (CN X)' },
      { text: 'Right RLN loops under the subclavian artery', highlight: true },
      { text: 'Left RLN loops under the aortic arch', highlight: true },
      { text: 'Courses in the tracheoesophageal groove' },
      { text: 'Innervates ALL intrinsic laryngeal muscles except cricothyroid', highlight: true },
      { text: 'Injury causes unilateral vocal cord paralysis and hoarseness' },
      { text: 'At risk during thyroid & parathyroid surgery' },
    ],
    footnote: 'Non-recurrent right RLN occurs in 0.5-1% of cases, associated with aberrant subclavian artery (arteria lusoria)',
  },

  {
    id: 'larynx-anatomy',
    type: 'anatomy',
    category: 'laryngology',
    difficulty: 'easy',
    title: 'Laryngeal Framework',
    subtitle: 'Tap structures to identify',
    svgType: 'larynx',
    structures: [
      { name: 'Epiglottis', x: 50, y: 10, description: 'Elastic cartilage that covers the airway during swallowing' },
      { name: 'Hyoid Bone', x: 50, y: 20, description: 'Only bone that does not articulate with another bone' },
      { name: 'Thyrohyoid Membrane', x: 50, y: 27, description: 'Connects hyoid bone to thyroid cartilage' },
      { name: 'Thyroid Cartilage', x: 50, y: 40, description: 'Largest laryngeal cartilage, forms the laryngeal prominence' },
      { name: 'Cricothyroid Membrane', x: 50, y: 57, description: 'Site for emergency cricothyrotomy' },
      { name: 'Cricoid Cartilage', x: 50, y: 67, description: 'Only complete cartilaginous ring, signet-ring shaped' },
      { name: 'Tracheal Rings', x: 50, y: 82, description: 'C-shaped cartilages with posterior membranous wall' },
    ],
  },

  {
    id: 'hoarseness-quiz',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'medium',
    stem: 'A 52-year-old male presents with progressive hoarseness for 6 weeks. He has a 30 pack-year smoking history. What is the MOST important next step in management?',
    options: [
      { label: 'A', text: 'Trial of voice rest and proton pump inhibitors' },
      { label: 'B', text: 'CT scan of the neck with IV contrast' },
      { label: 'C', text: 'Flexible laryngoscopy' },
      { label: 'D', text: 'Referral to speech-language pathology' },
    ],
    correctIndex: 2,
    explanation: 'Hoarseness lasting >3 weeks, especially with smoking history, mandates direct visualization of the larynx. Flexible laryngoscopy is first-line to rule out laryngeal malignancy. Imaging may follow but should not delay visualization.',
  },

  {
    id: 'cricothyroid-flash',
    type: 'flashcard',
    category: 'laryngology',
    difficulty: 'easy',
    front: 'What nerve innervates the cricothyroid muscle?',
    back: 'External branch of the Superior Laryngeal Nerve (EBSLN)',
    bonus: 'The cricothyroid is the ONLY intrinsic laryngeal muscle not innervated by the recurrent laryngeal nerve. It tenses the vocal cords by tilting the thyroid cartilage forward.',
  },

  {
    id: 'tracheostomy-steps',
    type: 'surgical-steps',
    category: 'laryngology',
    difficulty: 'hard',
    title: 'Open Tracheostomy',
    steps: [
      { title: 'Position', detail: 'Supine with neck extended using a shoulder roll. Mark landmarks: cricoid cartilage and sternal notch.' },
      { title: 'Incision', detail: 'Horizontal skin incision midway between cricoid cartilage and sternal notch.' },
      { title: 'Dissection', detail: 'Divide platysma, separate strap muscles along the midline raphe.' },
      { title: 'Thyroid Isthmus', detail: 'Identify the thyroid isthmus. Divide or retract superiorly to expose the trachea.' },
      { title: 'Tracheal Entry', detail: 'Enter trachea between rings 2-3 or 3-4. Avoid ring 1 to prevent subglottic stenosis.' },
      { title: 'Window / Flap', detail: 'Create an anterior tracheal window or an inferiorly-based Bjork flap.' },
      { title: 'Tube Placement', detail: 'Insert appropriately sized tracheostomy tube under direct vision. Confirm with end-tidal CO\u2082.' },
      { title: 'Secure', detail: 'Secure tube with sutures and tracheostomy ties. Obtain post-procedure chest X-ray.' },
    ],
  },

  {
    id: 'kiesselbach-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'medium',
    sentence: "The ___ plexus (Little's area) on the anterior nasal septum is the most common site of epistaxis.",
    blankWord: "Kiesselbach's",
    options: ["Kiesselbach's", "Woodruff's", "Hasner's", "Cottle's"],
  },

  {
    id: 'sinus-drainage-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'Which paranasal sinuses drain into the middle meatus via the ostiomeatal complex?',
    options: [
      { label: 'A', text: 'Posterior ethmoid and sphenoid sinuses' },
      { label: 'B', text: 'Maxillary, anterior ethmoid, and frontal sinuses' },
      { label: 'C', text: 'Frontal and sphenoid sinuses only' },
      { label: 'D', text: 'All paranasal sinuses' },
    ],
    correctIndex: 1,
    explanation: 'The maxillary, anterior ethmoid, and frontal sinuses drain into the middle meatus through the ostiomeatal complex. The posterior ethmoid cells drain into the superior meatus, and the sphenoid sinus drains into the sphenoethmoidal recess.',
  },

  {
    id: 'waldeyers-ring',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: "Waldeyer's Ring",
    subtitle: 'Lymphoid Tissue of the Pharynx',
    lines: [
      { text: 'Pharyngeal tonsil (adenoid) \u2014 nasopharynx', highlight: true },
      { text: 'Tubal tonsils \u2014 around Eustachian tube openings' },
      { text: 'Palatine tonsils \u2014 oropharynx (largest component)', highlight: true },
      { text: 'Lingual tonsil \u2014 base of tongue' },
      { text: 'Forms a protective ring of lymphoid tissue' },
      { text: 'Important in pediatric airway obstruction' },
      { text: 'Always biopsy asymmetric tonsillar enlargement to rule out lymphoma', highlight: true },
    ],
  },

  {
    id: 'epistaxis-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'easy',
    front: "Which four arteries contribute to Kiesselbach's plexus?",
    back: '1. Anterior ethmoidal artery\n2. Sphenopalatine artery\n3. Superior labial artery\n4. Greater palatine artery',
    bonus: 'The sphenopalatine artery (branch of maxillary a.) is the primary supply to the posterior nasal septum and the target of SPA ligation for intractable posterior epistaxis.',
  },

  {
    id: 'weber-quiz',
    type: 'quiz',
    category: 'otology',
    difficulty: 'hard',
    stem: 'A patient has a positive Rinne test (AC > BC) bilaterally and Weber test lateralizes to the left ear. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Left conductive hearing loss' },
      { label: 'B', text: 'Right sensorineural hearing loss' },
      { label: 'C', text: 'Left sensorineural hearing loss' },
      { label: 'D', text: 'Bilateral conductive hearing loss' },
    ],
    correctIndex: 1,
    explanation: 'Positive Rinne bilaterally (AC > BC) rules out significant conductive loss. Weber lateralizing to the LEFT means either left conductive loss OR right sensorineural loss. Since Rinne is normal, this is right sensorineural hearing loss \u2014 sound lateralizes AWAY from the affected ear in SNHL.',
  },

  {
    id: 'neck-levels',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Cervical Lymph Node Levels',
    steps: [
      { title: 'Level IA \u2014 Submental', detail: 'Between anterior bellies of digastric muscles. Drains: lower lip, floor of mouth, anterior tongue tip.' },
      { title: 'Level IB \u2014 Submandibular', detail: 'Around the submandibular gland. Drains: oral cavity, anterior nasal cavity, soft tissue of mid-face.' },
      { title: 'Level II \u2014 Upper Jugular', detail: 'Skull base to hyoid bone, around the internal jugular vein. Drains: oral cavity, oropharynx, nasopharynx, parotid.' },
      { title: 'Level III \u2014 Middle Jugular', detail: 'Hyoid to cricoid cartilage, around the IJV. Drains: oral cavity, oropharynx, hypopharynx, larynx.' },
      { title: 'Level IV \u2014 Lower Jugular', detail: 'Cricoid to clavicle, around the IJV. Drains: hypopharynx, larynx, thyroid, cervical esophagus.' },
      { title: 'Level V \u2014 Posterior Triangle', detail: 'Posterior to the SCM. Drains: nasopharynx, oropharynx, and cutaneous structures of the posterior scalp and neck.' },
      { title: 'Level VI \u2014 Central', detail: 'Hyoid to sternal notch, between carotid sheaths. Contains pretracheal, paratracheal, and prelaryngeal (Delphian) nodes.' },
    ],
  },

  {
    id: 'cn-xi-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The ___ nerve (CN XI) provides motor innervation to the trapezius and sternocleidomastoid muscles and is at risk during neck dissection.',
    blankWord: 'spinal accessory',
    options: ['spinal accessory', 'hypoglossal', 'glossopharyngeal', 'vagus'],
  },

  // ─── Pasha Ch 1: Rhinology ───────────────────────────────────────────

  {
    id: 'ethmoid-landmarks',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'medium',
    title: 'Ethmoid Sinus Landmarks',
    subtitle: 'Key Anatomic Variants & Structures',
    lines: [
      { text: 'Onodi cell — pneumatizes superolateral to sphenoid, risk to optic nerve & ICA', highlight: true },
      { text: 'Haller cell — infraorbital ethmoid cell, can obstruct maxillary sinus outflow' },
      { text: 'Agger nasi cell — most anterior ethmoid cell, anterior to middle turbinate attachment', highlight: true },
      { text: 'Ethmoid bulla — first cell posterior to the uncinate process (most constant landmark)' },
      { text: 'Lamina papyracea — paper-thin medial orbital wall formed by ethmoid bone' },
      { text: 'Fovea ethmoidalis — roof of the ethmoid sinuses (lateral cribriform plate)', highlight: true },
    ],
  },

  {
    id: 'sphenoid-relations',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'hard',
    title: 'Sphenoid Sinus: Critical Relations',
    subtitle: 'Surgical Danger Zones',
    lines: [
      { text: 'Internal carotid artery — lateral wall (25% dehiscent)', highlight: true },
      { text: 'Optic nerve — superolateral wall (5% dehiscent)', highlight: true },
      { text: 'Cavernous sinus — lateral (contains CN III, IV, V1, V2, VI)' },
      { text: 'Pituitary gland — sella turcica, superior wall' },
      { text: 'Clivus — posterior wall' },
      { text: 'Drains to the sphenoethmoidal recess (NOT the middle meatus)' },
    ],
    footnote: 'Dehiscent ICA or optic nerve must be identified on preoperative CT before any sphenoid surgery.',
  },

  {
    id: 'nasal-blood-supply',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'medium',
    title: 'Nasal Blood Supply',
    subtitle: 'Dual Arterial Supply from ECA & ICA',
    lines: [
      { text: 'External carotid → maxillary → sphenopalatine artery (main posterior supply)', highlight: true },
      { text: 'External carotid → facial → superior labial artery (anterior septum)' },
      { text: 'Internal carotid → ophthalmic → anterior ethmoidal artery (24/12/6 rule)', highlight: true },
      { text: 'Internal carotid → ophthalmic → posterior ethmoidal artery' },
      { text: 'Greater palatine artery (branch of maxillary) — floor of nose' },
      { text: "All converge at Kiesselbach's plexus (Little's area) on anterior septum" },
    ],
  },

  {
    id: 'epistaxis-management',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'hard',
    title: 'Epistaxis: Stepwise Management',
    subtitle: 'Systematic Algorithm',
    lines: [
      { text: '1. ABCs and hemodynamic assessment' },
      { text: '2. Direct pressure — bilateral alar compression × 10-15 min' },
      { text: '3. Topical vasoconstriction (oxymetazoline / phenylephrine pledgets)' },
      { text: '4. Identify bleeding source with anterior rhinoscopy & endoscopy' },
      { text: '5. Cauterization if visible anterior source (silver nitrate or electrocautery)', highlight: true },
      { text: '6. Anterior nasal packing if cautery fails (Merocel, Rapid Rhino)' },
      { text: '7. Posterior packing if anterior fails (Foley catheter or posterior balloons)', highlight: true },
      { text: '8. Surgical ligation (SPA) or angiographic embolization for refractory cases', highlight: true },
    ],
  },

  {
    id: 'chandler-classification',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'hard',
    title: 'Chandler Classification',
    subtitle: 'Orbital Complications of Sinusitis',
    lines: [
      { text: 'Stage I — Periorbital (preseptal) cellulitis' },
      { text: 'Stage II — Orbital cellulitis (post-septal)', highlight: true },
      { text: 'Stage III — Subperiosteal abscess', highlight: true },
      { text: 'Stage IV — Orbital abscess', highlight: true },
      { text: 'Stage V — Cavernous sinus thrombosis', highlight: true },
    ],
    footnote: 'Urgent surgical drainage if decreased vision, afferent pupillary defect, or failure of IV antibiotics after 24-48 hours.',
  },

  {
    id: 'nasal-septum-components',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'easy',
    title: 'Nasal Septum Components',
    subtitle: 'Osteocartilaginous Framework',
    lines: [
      { text: 'Quadrangular (septal) cartilage — anteriorly', highlight: true },
      { text: 'Perpendicular plate of ethmoid — superiorly' },
      { text: 'Vomer — posteroinferiorly' },
      { text: 'Nasal crest of maxilla & palatine bone — inferiorly' },
      { text: 'Anterior nasal spine — at piriform aperture' },
    ],
  },

  {
    id: 'jna-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'hard',
    stem: 'A 14-year-old male presents with recurrent unilateral epistaxis, nasal obstruction, and a smooth purplish mass in the nasal cavity. What is the MOST appropriate next step?',
    options: [
      { label: 'A', text: 'Incisional biopsy' },
      { label: 'B', text: 'CT/MRI with IV contrast' },
      { label: 'C', text: 'Anterior nasal packing' },
      { label: 'D', text: 'Intranasal corticosteroids' },
    ],
    correctIndex: 1,
    explanation: 'This presentation is classic for juvenile nasopharyngeal angiofibroma (JNA) — a vascular tumor exclusive to adolescent males. NEVER biopsy due to risk of massive hemorrhage. CT/CTA/MRI is essential for staging (Radkowski or Fisch classification) and surgical planning.',
  },

  {
    id: 'onodi-cell-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'Which ethmoid cell variant is most dangerous during FESS due to its proximity to the optic nerve?',
    options: [
      { label: 'A', text: 'Agger nasi cell' },
      { label: 'B', text: 'Haller cell' },
      { label: 'C', text: 'Onodi cell' },
      { label: 'D', text: 'Concha bullosa' },
    ],
    correctIndex: 2,
    explanation: 'Onodi (sphenoethmoidal) cells pneumatize superolateral to the sphenoid sinus and are in direct contact with the optic nerve and/or internal carotid artery. Failure to recognize them on preoperative CT can result in devastating complications during posterior ethmoidectomy.',
  },

  {
    id: 'mucormycosis-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'hard',
    stem: 'A 45-year-old diabetic with ketoacidosis presents with orbital swelling, facial pain, and black nasal eschar. Biopsy shows broad, non-septate, 90-degree branching hyphae. What is the diagnosis?',
    options: [
      { label: 'A', text: 'Allergic fungal rhinosinusitis' },
      { label: 'B', text: 'Acute invasive fungal sinusitis (mucormycosis)' },
      { label: 'C', text: 'Fungus ball (mycetoma)' },
      { label: 'D', text: 'Chronic invasive fungal sinusitis' },
    ],
    correctIndex: 1,
    explanation: 'Mucormycosis (Rhizopus, Mucor) causes acute invasive fungal sinusitis almost exclusively in immunocompromised patients (DKA, chemotherapy, transplant). Non-septate, broad, ribbon-like hyphae with 90-degree branching is pathognomonic. Aspergillus shows 45-degree septate branching. Treatment: urgent surgical debridement + IV amphotericin B. Mortality is 50-80%.',
  },

  {
    id: 'afs-criteria-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'hard',
    stem: 'What are the five Bent and Kuhn major criteria for diagnosing allergic fungal rhinosinusitis (AFS)?',
    options: [
      { label: 'A', text: 'Nasal polyposis, fungal hypersensitivity, characteristic CT findings, eosinophilic mucin, positive fungal staining' },
      { label: 'B', text: 'Bilateral disease, asthma, aspirin sensitivity, nasal polyposis, eosinophilia' },
      { label: 'C', text: 'Fever, facial pain, nasal obstruction, purulent drainage, positive cultures' },
      { label: 'D', text: 'Unilateral mass, bone erosion, cranial nerve deficit, positive biopsy, elevated ESR' },
    ],
    correctIndex: 0,
    explanation: 'AFS Bent & Kuhn major criteria: 1) Nasal polyposis, 2) Type I hypersensitivity to fungal antigen (skin test or serum IgE), 3) Characteristic CT findings (serpiginous high attenuation within opacified sinuses), 4) Eosinophilic mucin without tissue invasion, 5) Noninvasive fungal elements on histology or smear. Minor criteria include bone erosion, unilateral disease, Charcot-Leyden crystals, peripheral eosinophilia, and positive fungal culture.',
  },

  {
    id: 'inverted-papilloma-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'A patient presents with a unilateral nasal mass on the lateral nasal wall with epistaxis. CT shows calcification at the base. Biopsy reveals endophytic growth of epithelium. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Antrochoanal polyp' },
      { label: 'B', text: 'Inverted papilloma' },
      { label: 'C', text: 'Squamous cell carcinoma' },
      { label: 'D', text: 'Juvenile nasopharyngeal angiofibroma' },
    ],
    correctIndex: 1,
    explanation: 'Inverted papilloma is the second most common benign sinonasal tumor (after osteoma), arising from Schneiderian mucosa of the lateral nasal wall. Key features: unilateral mass, endophytic (inverting) epithelial growth pattern, associated with HPV 6/11. Carries a 5-15% risk of malignant transformation to SCC. Treatment: endoscopic medial maxillectomy with drill-out of bony pedicle attachment.',
  },

  {
    id: 'unilateral-rhinorrhea-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'easy',
    stem: 'A child presents with unilateral purulent rhinorrhea. What is the most common cause?',
    options: [
      { label: 'A', text: 'Choanal atresia' },
      { label: 'B', text: 'Nasal foreign body' },
      { label: 'C', text: 'Allergic rhinitis' },
      { label: 'D', text: 'Acute bacterial sinusitis' },
    ],
    correctIndex: 1,
    explanation: 'Unilateral purulent, foul-smelling rhinorrhea in a child is a nasal foreign body until proven otherwise. Common objects include beads, buttons, and button batteries (which require emergent removal due to liquefactive necrosis). Other causes of unilateral nasal discharge include choanal atresia, nasal polyps, and tumors, but foreign body is by far the most common in pediatric patients.',
  },

  {
    id: 'allergic-rhinitis-rx-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'easy',
    stem: 'What is the single most effective maintenance therapy for allergic rhinitis?',
    options: [
      { label: 'A', text: 'Oral antihistamines' },
      { label: 'B', text: 'Nasal decongestants' },
      { label: 'C', text: 'Intranasal corticosteroids' },
      { label: 'D', text: 'Leukotriene inhibitors' },
    ],
    correctIndex: 2,
    explanation: 'Intranasal corticosteroids (fluticasone, mometasone, budesonide) are the most effective single-agent maintenance therapy for allergic rhinitis. They reduce both early and late-phase inflammatory responses. Unlike nasal decongestants, they require 1-2 weeks of regular use for maximal benefit but have an excellent safety profile for long-term use.',
  },

  {
    id: 'rhinitis-medicamentosa-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'easy',
    stem: 'A patient develops rebound nasal congestion after prolonged use of oxymetazoline spray. What is this condition called?',
    options: [
      { label: 'A', text: 'Vasomotor rhinitis' },
      { label: 'B', text: 'Rhinitis medicamentosa' },
      { label: 'C', text: 'Atrophic rhinitis' },
      { label: 'D', text: 'Non-allergic rhinitis with eosinophilia syndrome (NARES)' },
    ],
    correctIndex: 1,
    explanation: 'Rhinitis medicamentosa is rebound nasal congestion from prolonged use (>3-5 days) of topical nasal decongestants (oxymetazoline, phenylephrine). Causes tachyphylaxis, down-regulation of alpha-adrenergic receptors, and increased parasympathetic tone leading to interstitial edema. Treatment: discontinue the offending decongestant, aggressive saline irrigations, intranasal corticosteroid spray, and consider a short oral steroid taper for weaning.',
  },

  {
    id: '24-12-6-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: "What is the '24/12/6 mm rule' in sinus surgery?",
    back: 'Distances from the anterior lacrimal crest along the medial orbital wall:\n\n• Anterior ethmoidal artery = 24 mm\n• Posterior ethmoidal artery = 12 mm posterior to AEA\n• Optic nerve = 6 mm posterior to PEA\n\nCritical landmark for avoiding injury during external ethmoidectomy or ethmoidal artery ligation.',
  },

  {
    id: 'keros-classification-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: 'What is the Keros classification?',
    back: 'Classifies the depth of the olfactory fossa (vertical distance between the fovea ethmoidalis and the cribriform plate):\n\n• Type 1: 1-3 mm (shallowest, safest)\n• Type 2: 4-7 mm (most common)\n• Type 3: 8-16 mm (deepest, highest risk of skull base violation during FESS)',
    bonus: 'Keros Type 3 has the highest risk of CSF leak during endoscopic sinus surgery. Always review preoperative CT coronal images to assess Keros type.',
  },

  {
    id: 'woodruff-plexus-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: "What is Woodruff's plexus?",
    back: "A venous plexus on the posterior lateral nasal wall, posterior to the inferior and middle turbinates. It is the most common source of POSTERIOR epistaxis.\n\nFed by branches of the sphenopalatine artery (external carotid → maxillary artery) and ascending pharyngeal artery. Posterior bleeds are harder to control and more common in elderly and hypertensive patients.",
  },

  {
    id: 'danger-triangle-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'easy',
    front: 'What is the Danger Triangle of the face?',
    back: 'Triangle bounded by the oral commissures inferiorly and the nasal bridge superiorly. Veins in this area (angular vein, ophthalmic veins) lack valves, allowing retrograde flow through the cavernous sinus.\n\nInfections in this area (e.g., nasal furuncle) can spread intracranially, potentially causing cavernous sinus thrombosis.',
  },

  {
    id: 'kartagener-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: "What is Kartagener's Syndrome?",
    back: "A clinical triad of:\n1) Chronic rhinosinusitis\n2) Bronchiectasis\n3) Situs inversus\n\nCaused by primary ciliary dyskinesia (PCD) — deficiency of outer dynein arms on cilia leading to impaired mucociliary clearance. Inherited autosomal recessive. Also associated with male infertility (immotile sperm) and recurrent otitis media.",
  },

  {
    id: 'aerd-triad-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: "What is Aspirin-Exacerbated Respiratory Disease (AERD / Samter's triad)?",
    back: "A triad of:\n1) Aspirin / NSAID sensitivity (COX-1 inhibition)\n2) Asthma\n3) Nasal polyposis\n\nPresent in 8-10% of patients with CRS with nasal polyposis. Pathophysiology involves overproduction of cysteinyl leukotrienes (LTC4/D4/E4) and underproduction of prostaglandin E2. Patients develop more severe, recurrent, and treatment-resistant CRS. Aspirin desensitization can be therapeutic.",
  },

  {
    id: 'internal-nasal-valve-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: 'What is the internal nasal valve?',
    back: 'The narrowest part of the nasal airway, accounting for ~50% of total airway resistance.\n\nBoundaries:\n• Superior — caudal edge of upper lateral cartilage\n• Medial — dorsal nasal septum\n• Lateral/inferior — anterior head of inferior turbinate\n\nNormal angle: 10-15° in Caucasians (wider in other ethnicities). Collapse assessed with Cottle maneuver (positive if lateral traction improves airflow). Treated with spreader grafts or butterfly grafts.',
  },

  {
    id: 'agger-nasi-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'easy',
    sentence: 'The ___ cell is the most anterior ethmoid air cell, found anterior and superior to the middle turbinate attachment.',
    blankWord: 'agger nasi',
    options: ['agger nasi', 'Haller', 'Onodi', 'ethmoid bulla'],
  },

  {
    id: 'ica-dehiscence-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'hard',
    sentence: 'The internal carotid artery is dehiscent in ___% of sphenoid sinuses, making it vulnerable during transsphenoidal surgery.',
    blankWord: '25',
    options: ['25', '5', '50', '10'],
  },

  {
    id: 'osteoma-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'medium',
    sentence: 'The ___ is the most common benign sinonasal tumor, often associated with Gardner syndrome.',
    blankWord: 'osteoma',
    options: ['osteoma', 'inverted papilloma', 'hemangioma', 'pleomorphic adenoma'],
  },

  {
    id: 'nasoseptal-flap-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'medium',
    sentence: 'The nasoseptal flap used in skull base reconstruction is supplied by the posterior septal branch of the ___ artery.',
    blankWord: 'sphenopalatine',
    options: ['sphenopalatine', 'anterior ethmoidal', 'greater palatine', 'superior labial'],
  },

  {
    id: 'hht-inheritance-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'medium',
    sentence: 'Hereditary hemorrhagic telangiectasia (HHT) is inherited in an ___ pattern.',
    blankWord: 'autosomal dominant',
    options: ['autosomal dominant', 'autosomal recessive', 'X-linked recessive', 'X-linked dominant'],
  },

  {
    id: 'allergic-rhinitis-type-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'easy',
    sentence: 'Allergic rhinitis is mediated by Type ___ hypersensitivity reaction.',
    blankWord: 'I',
    options: ['I', 'II', 'III', 'IV'],
  },

  {
    id: 'fess-steps',
    type: 'surgical-steps',
    category: 'rhinology',
    difficulty: 'hard',
    title: 'Functional Endoscopic Sinus Surgery (FESS)',
    steps: [
      { title: 'Preparation', detail: 'Inject local anesthetic with vasoconstrictor (1% lidocaine + 1:100k epinephrine). Place oxymetazoline-soaked pledgets. Reverse Trendelenburg positioning.' },
      { title: 'Medialization of Middle Turbinate', detail: 'Identify the middle turbinate, uncinate process, and middle meatus. Gently medialize the turbinate for access.' },
      { title: 'Uncinectomy', detail: 'Excise the uncinate process to expose the ethmoid infundibulum and natural maxillary sinus ostium.' },
      { title: 'Maxillary Antrostomy', detail: 'Enlarge the natural maxillary ostium posteriorly and inferiorly. Avoid injury to the nasolacrimal duct anteriorly.' },
      { title: 'Anterior Ethmoidectomy', detail: 'Systematically remove anterior ethmoid cells. Identify the ethmoid bulla and lamina papyracea.' },
      { title: 'Posterior Ethmoidectomy', detail: 'Identify the basal (ground) lamella of the middle turbinate. Enter and clear posterior ethmoid cells. Stay medial to lamina papyracea.' },
      { title: 'Sphenoidotomy', detail: 'Identify the sphenoid os medial to the superior turbinate. Widen the ostium. Beware of ICA and optic nerve.' },
      { title: 'Frontal Recess Exploration', detail: 'Identify the frontal sinus drainage pathway. Remove agger nasi cell and frontal recess cells. Consider Draf classification for extent of dissection.' },
    ],
  },

  {
    id: 'epistaxis-surgical-steps',
    type: 'surgical-steps',
    category: 'rhinology',
    difficulty: 'hard',
    title: 'Epistaxis: Stepwise Management',
    steps: [
      { title: 'ABCs', detail: 'Continuous bilateral alar pressure for 10-15 min. Patient sitting upright, chin down. Assess hemodynamics and establish IV access if significant bleeding.' },
      { title: 'Topical Vasoconstriction', detail: 'Apply oxymetazoline-soaked pledgets or cotton balls for 10 minutes. Alternative: 4% cocaine or phenylephrine-lidocaine mix.' },
      { title: 'Identify Source', detail: 'Anterior rhinoscopy with headlight and nasal speculum. Follow with 0° or 30° nasal endoscopy for posterior sources.' },
      { title: 'Cauterization', detail: 'Silver nitrate cautery or suction electrocautery for visible anterior bleeding points. Apply around the bleeding vessel, then directly. Avoid bilateral cautery on opposing septal surfaces.' },
      { title: 'Anterior Nasal Packing', detail: 'If cautery fails: Merocel sponge, Rapid Rhino balloon, or formal Vaseline gauze layered packing. Leave in place 2-5 days with antibiotic coverage.' },
      { title: 'Posterior Nasal Packing', detail: 'If anterior packing fails: 12-14 Fr Foley catheter inflated in nasopharynx, or dedicated posterior nasal balloons. Patient requires ICU monitoring.' },
      { title: 'Surgical Ligation', detail: 'Endoscopic sphenopalatine artery ligation for posterior bleeds. Anterior/posterior ethmoidal artery ligation via Lynch incision for superior bleeds.' },
      { title: 'Embolization', detail: 'Angiographic embolization of internal maxillary artery branches for surgically inaccessible or persistent hemorrhage. Risk: stroke if ICA territory involved.' },
    ],
  },

  {
    id: 'septoplasty-steps',
    type: 'surgical-steps',
    category: 'rhinology',
    difficulty: 'medium',
    title: 'Septoplasty',
    steps: [
      { title: 'Local Anesthesia', detail: 'Inject 1% lidocaine with 1:100,000 epinephrine in the submucoperichondrial plane bilaterally. Allow adequate vasoconstriction time.' },
      { title: 'Hemitransfixion Incision', detail: 'Make a hemitransfixion incision at the caudal edge of the septal cartilage (or use endoscopic approach). Incise through mucoperichondrium down to cartilage.' },
      { title: 'Elevate Mucoperichondrial Flap', detail: 'Elevate the flap off the septal cartilage using a Cottle elevator. Maintain the plane between mucoperichondrium and cartilage to avoid tears.' },
      { title: 'Remove Deviated Portions', detail: 'Identify and remove deviated cartilage and bony spurs (perpendicular plate, vomer, maxillary crest). Preserve a 1.5 cm dorsal and caudal L-strut for support.' },
      { title: 'Remodel & Reposition', detail: 'Score, morselze, or suture straightened cartilage for reinsertion if needed. Ensure midline alignment.' },
      { title: 'Close & Splint', detail: 'Close the hemitransfixion incision with absorbable sutures. Place septal splints or quilting mattress sutures to prevent hematoma formation.' },
    ],
  },

  // ─── Pasha Ch 1: Head & Neck / Immunology ────────────────────────────

  {
    id: 'hypersensitivity-types',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Hypersensitivity Reaction Types',
    subtitle: 'Gell and Coombs Classification',
    lines: [
      { text: 'Type I — Anaphylactic: IgE-mediated, mast cell degranulation (allergic rhinitis, anaphylaxis)', highlight: true },
      { text: 'Type II — Cytotoxic: IgG/IgM antibodies against cell surface antigens + complement (hemolytic anemia, Goodpasture)' },
      { text: 'Type III — Immune complex: IgG/IgM/IgA antigen-antibody complexes deposited in tissues (serum sickness, SLE, Wegener)' },
      { text: 'Type IV — Cell-mediated / Delayed: T-cell mediated, no antibodies (contact dermatitis, TB skin test, transplant rejection)', highlight: true },
      { text: 'Type V — Receptor interference / Stimulatory: autoantibodies stimulate or block receptors (Graves disease, myasthenia gravis)' },
    ],
  },

  {
    id: 'digeorge-syndrome',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'DiGeorge Syndrome (CATCH-22)',
    subtitle: 'Chromosome 22q11.2 Deletion',
    lines: [
      { text: 'C — Cardiac anomalies (tetralogy of Fallot, truncus arteriosus, VSD)', highlight: true },
      { text: 'A — Abnormal facies (micrognathia, low-set ears, short philtrum)' },
      { text: 'T — Thymic aplasia / hypoplasia → T-cell deficiency', highlight: true },
      { text: 'C — Cleft palate (submucous or overt) / velopharyngeal insufficiency' },
      { text: 'H — Hypocalcemia from absent or hypoplastic parathyroid glands', highlight: true },
      { text: '22 — Chromosome 22q11 microdeletion' },
    ],
    footnote: 'Caution: aberrant retropharyngeal (medialized) internal carotid artery — danger during adenoidectomy and pharyngeal surgery.',
  },

  {
    id: 'igm-primary-response-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Which immunoglobulin is the predominant antibody in the primary immune response?',
    options: [
      { label: 'A', text: 'IgG' },
      { label: 'B', text: 'IgA' },
      { label: 'C', text: 'IgM' },
      { label: 'D', text: 'IgE' },
    ],
    correctIndex: 2,
    explanation: 'IgM is the predominant antibody in the primary (initial) immune response. It is a pentamer and the most efficient complement activator. IgM is later replaced by IgG during the secondary response via class switching. IgG is the most abundant immunoglobulin overall, IgA predominates in mucosal secretions, and IgE mediates Type I hypersensitivity.',
  },

  {
    id: 'kartagener-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A child with recurrent sinusitis, bronchiectasis, and situs inversus most likely has which condition?',
    options: [
      { label: 'A', text: 'Cystic fibrosis' },
      { label: 'B', text: 'Kartagener syndrome' },
      { label: 'C', text: 'DiGeorge syndrome' },
      { label: 'D', text: 'Common variable immunodeficiency' },
    ],
    correctIndex: 1,
    explanation: 'Kartagener syndrome is a subset of primary ciliary dyskinesia (PCD) characterized by the triad of chronic rhinosinusitis, bronchiectasis, and situs inversus. Results from a deficiency in the outer dynein arm of cilia, causing impaired mucociliary clearance. Inherited autosomal recessive. Also associated with male infertility due to immotile sperm. Diagnosis: nasal NO measurement (low), electron microscopy of cilia, or genetic testing.',
  },

  {
    id: 'wiskott-aldrich-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is Wiskott-Aldrich syndrome?',
    back: "An X-linked recessive immunodeficiency caused by mutation in the WASP gene.\n\nClassic triad:\n1) Thrombocytopenia (with small platelets)\n2) Eczema\n3) Recurrent infections (especially encapsulated organisms)\n\nAssociated with IgM deficiency, poor response to polysaccharide antigens, elevated IgA/IgE, autoimmune disease, and increased risk of lymphoma. Treatment: bone marrow transplant.",
  },

  {
    id: 'csf-rhinorrhea-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: 'What lab test is most specific for CSF rhinorrhea?',
    back: 'Beta-2 transferrin — it is highly specific for CSF (not found in nasal secretions, blood, tears, or saliva).\n\nGlucose testing of nasal fluid is less specific (can be false positive with blood or nasal secretions). For localization: high-resolution CT, MRI cisternography, or intrathecal fluorescein injection with endoscopic visualization.',
  },

  {
    id: 'eosinophilia-blank',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'easy',
    sentence: 'The hallmark of an allergic response is ___, stimulated by Th2-produced IL-5.',
    blankWord: 'eosinophilia',
    options: ['eosinophilia', 'neutrophilia', 'lymphocytosis', 'basophilia'],
  },

  {
    id: 'allergic-rhinitis-concepts',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'medium',
    title: 'Allergic Rhinitis: Key Concepts',
    subtitle: 'Type I IgE-Mediated Hypersensitivity',
    lines: [
      { text: 'Type I (IgE-mediated) hypersensitivity reaction' },
      { text: 'Early phase: within 5 min — mast cell degranulation → histamine, leukotrienes', highlight: true },
      { text: 'Late phase: 4-6 hours — eosinophil recruitment via IL-5 (Th2)', highlight: true },
      { text: 'Best diagnostic test: skin prick testing (most sensitive) or serum-specific IgE' },
      { text: 'Best maintenance Rx: intranasal corticosteroids', highlight: true },
      { text: 'One-third of allergic rhinitis patients also have asthma (unified airway concept)' },
      { text: 'Immunotherapy (SCIT or SLIT) for refractory cases — only treatment that modifies disease course' },
    ],
  },

  {
    id: 'fess-complication-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'What is the most common complication of endoscopic sinus surgery (FESS)?',
    options: [
      { label: 'A', text: 'CSF leak' },
      { label: 'B', text: 'Orbital hematoma' },
      { label: 'C', text: 'Synechiae (adhesions)' },
      { label: 'D', text: 'Carotid artery injury' },
    ],
    correctIndex: 2,
    explanation: 'Synechiae (scarring/adhesions between the middle turbinate and the lateral nasal wall) is the most common complication of FESS. Prevention strategies include minimizing unnecessary mucosal trauma, treating concha bullosa, spacer placement, good postoperative nasal hygiene with saline irrigations, and scheduled endoscopic debridements in the office during the healing period.',
  },

  {
    id: 'retrobulbar-hematoma-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'hard',
    front: 'What is the emergency management of retrobulbar hematoma after sinus surgery?',
    back: 'Retrobulbar hematoma = hemorrhage in the orbit causing rapidly increased intraorbital pressure. Can cause permanent blindness within 60-90 minutes if untreated.\n\nEmergency management:\n1) Stop surgery and control hemorrhage immediately\n2) Urgent lateral canthotomy and inferior cantholysis (definitive decompression)\n3) Ophthalmology consult\n4) IV mannitol (1-2 g/kg) and high-dose IV steroids (dexamethasone)\n5) Orbital massage and ice packs\n6) Monitor intraocular pressure and visual acuity',
  },

  // ─── Pasha Ch 5-6: Head & Neck ───────────────────────────────────────

  // ── Anatomy Cards ──

  {
    id: 'neck-triangles-anatomy',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Neck Triangles',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Submandibular Triangle', x: 30, y: 28, description: 'Bounded by mandible superiorly, anterior & posterior bellies of digastric. Contains submandibular gland, facial artery/vein, CN XII.' },
      { name: 'Submental Triangle', x: 50, y: 30, description: 'Unpaired midline triangle between anterior bellies of digastric muscles and hyoid bone. Contains submental lymph nodes.' },
      { name: 'Carotid Triangle', x: 35, y: 48, description: 'Bounded by SCM, posterior digastric, superior omohyoid. Contains carotid bifurcation, CN X, XII, and superior laryngeal nerve.' },
      { name: 'Muscular Triangle', x: 45, y: 68, description: 'Bounded by SCM, superior omohyoid, midline. Contains strap muscles, thyroid gland, larynx, trachea, esophagus.' },
      { name: 'Occipital Triangle', x: 75, y: 48, description: 'Bounded by SCM anteriorly, trapezius posteriorly, inferior omohyoid inferiorly. Contains CN XI, cervical plexus, brachial plexus.' },
      { name: 'Supraclavicular Triangle', x: 78, y: 78, description: 'Bounded by inferior omohyoid, SCM, clavicle. Contains subclavian artery, transverse cervical vessels, supraclavicular lymph nodes.' },
      { name: 'SCM Muscle', x: 25, y: 55, description: 'Sternocleidomastoid divides the neck into anterior and posterior triangles. Innervated by CN XI (spinal accessory nerve).' },
    ],
  },

  {
    id: 'neck-fascial-anatomy',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Neck Fascial Planes',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Investing Layer', x: 50, y: 12, description: 'Outermost deep cervical fascia. Envelops SCM and trapezius. Splits to surround submandibular and parotid glands.' },
      { name: 'Visceral Fascia', x: 50, y: 30, description: 'Middle layer (pretracheal). Envelops thyroid, trachea, esophagus, pharyngeal constrictors, and recurrent laryngeal nerves.' },
      { name: 'Prevertebral Fascia', x: 50, y: 88, description: 'Deepest layer. Covers prevertebral muscles, vertebral column, phrenic nerve, and brachial plexus. Forms the floor of the posterior triangle.' },
      { name: 'Carotid Sheath', x: 28, y: 47, description: 'Contributions from all 3 fascial layers. Contains ICA/CCA, IJV, CN X (vagus), and deep cervical lymph nodes.' },
      { name: 'Trachea', x: 50, y: 42, description: 'C-shaped cartilaginous rings with posterior membranous wall. Lies anterior in the visceral compartment.' },
      { name: 'Esophagus', x: 50, y: 56, description: 'Posterior to trachea within the visceral fascia. Receives recurrent laryngeal nerve in the tracheoesophageal groove.' },
      { name: 'SCM', x: 18, y: 62, description: 'Enclosed by the investing layer of deep cervical fascia. Key surgical landmark for neck dissection and triangle boundaries.' },
    ],
  },

  // ── Animated Text Cards ──

  {
    id: 'salivary-gland-tumors',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Salivary Gland Tumors Overview',
    subtitle: 'Size Inversely Proportional to Benignity',
    lines: [
      { text: 'Parotid: 80% benign (pleomorphic adenoma most common)', highlight: true },
      { text: 'Submandibular: ~50% malignant' },
      { text: 'Sublingual: ~90% malignant', highlight: true },
      { text: 'Minor salivary glands: 50-80% malignant', highlight: true },
      { text: 'Rule: the smaller the gland, the higher the malignancy rate' },
      { text: 'Pleomorphic adenoma = most common overall salivary tumor (mixed tumor)' },
      { text: 'Mucoepidermoid carcinoma = most common salivary malignancy' },
    ],
    footnote: 'Facial nerve paralysis with a parotid mass = malignancy until proven otherwise.',
  },

  {
    id: 'adenoid-cystic-carcinoma',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Adenoid Cystic Carcinoma',
    subtitle: 'Perineural Spread Hallmark',
    lines: [
      { text: 'Most common malignancy of submandibular and minor salivary glands', highlight: true },
      { text: 'Classic cribriform "Swiss cheese" histologic pattern', highlight: true },
      { text: 'Three patterns: cribriform (best prognosis), tubular, solid (worst prognosis)' },
      { text: 'Hallmark: perineural invasion and spread along nerve sheaths', highlight: true },
      { text: 'Indolent but relentless course with late distant metastases (lung most common)' },
      { text: 'Recurrence can occur 10-20+ years after initial treatment' },
      { text: 'Treatment: wide surgical excision + postoperative radiation' },
    ],
  },

  {
    id: 'cervical-fascial-planes',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Cervical Fascial Planes',
    subtitle: 'Three Layers of Deep Cervical Fascia',
    lines: [
      { text: 'Superficial cervical fascia: contains platysma, cutaneous nerves, fat' },
      { text: 'DEEP Layer 1 — Investing (superficial): envelops SCM, trapezius, parotid, submandibular glands', highlight: true },
      { text: 'DEEP Layer 2 — Visceral (middle/pretracheal): envelops thyroid, trachea, esophagus, pharynx', highlight: true },
      { text: 'DEEP Layer 3 — Prevertebral (deep): covers prevertebral muscles, vertebral column, brachial plexus', highlight: true },
      { text: 'Carotid sheath: contributions from all 3 deep fascial layers' },
      { text: 'Alar fascia: between visceral and prevertebral fascia — forms anterior wall of danger space' },
    ],
    footnote: 'The danger space (Space 4) lies between the alar and prevertebral fascia and extends from skull base to the posterior mediastinum/diaphragm.',
  },

  {
    id: 'neck-space-infections',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Neck Space Infections Overview',
    subtitle: 'Sources, Pathogens & Key Spaces',
    lines: [
      { text: 'Most common source: odontogenic (mandibular molars)', highlight: true },
      { text: 'Other sources: tonsillitis, pharyngitis, salivary gland infections, trauma' },
      { text: 'Pathogens: polymicrobial — Strep viridans, Staph, anaerobes (Bacteroides, Peptostreptococcus)' },
      { text: 'Ludwig angina: bilateral submandibular + sublingual + submental space infection', highlight: true },
      { text: 'Retropharyngeal space: skull base to T1-2 (true retropharyngeal) or posterior mediastinum (danger space)' },
      { text: 'Danger space: extends skull base to diaphragm — rapid mediastinal spread', highlight: true },
      { text: 'Parapharyngeal space: "highway" connecting all other neck spaces' },
    ],
    footnote: 'Airway management is the #1 priority in deep neck space infections.',
  },

  {
    id: 'kittens-mnemonic',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'KITTENS Mnemonic for Neck Mass DDx',
    subtitle: 'Systematic Differential Diagnosis',
    lines: [
      { text: 'K — Kongenital: branchial cleft cyst, thyroglossal duct cyst, dermoid, hemangioma, lymphatic malformation', highlight: true },
      { text: 'I — Infectious/Inflammatory/Iatrogenic: reactive lymphadenopathy, abscess, cat-scratch, TB (scrofula)' },
      { text: 'T — Toxins/Trauma: hematoma, sternocleidomastoid fibrosis (torticollis)' },
      { text: 'T — Thyroid/Endocrine: goiter, thyroid nodule/cancer, parathyroid adenoma' },
      { text: 'E — (Endocrine, combined above)' },
      { text: 'N — Neoplastic: lymphoma, SCC metastasis, salivary gland tumors', highlight: true },
      { text: 'S — Systemic: sarcoidosis, Wegener (GPA), Sjogren syndrome, Castleman disease', highlight: true },
    ],
  },

  {
    id: 'sarcoidosis-hn',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Sarcoidosis: H&N Manifestations',
    subtitle: 'Noncaseating Granulomas',
    lines: [
      { text: 'Noncaseating granulomas — hallmark histology', highlight: true },
      { text: 'Bilateral hilar lymphadenopathy (most common finding overall)' },
      { text: "Heerfordt's syndrome (uveoparotid fever): parotitis, uveitis, facial nerve palsy, fever", highlight: true },
      { text: 'Nasal involvement: crusting, septal perforation, "strawberry" inferior turbinate' },
      { text: 'Laryngeal involvement: supraglottic edema, pale nodules' },
      { text: 'Labs: elevated ACE, elevated calcium, elevated ESR' },
      { text: 'Treatment: systemic corticosteroids; methotrexate for refractory cases' },
    ],
  },

  {
    id: 'gpa-wegener-hn',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'GPA (Wegener\'s) in Head & Neck',
    subtitle: 'Necrotizing Granulomatous Vasculitis',
    lines: [
      { text: 'Granulomatosis with polyangiitis (GPA) — necrotizing granulomas + small vessel vasculitis', highlight: true },
      { text: 'Classic triad: upper airway, lungs, kidneys (glomerulonephritis)' },
      { text: 'Sinusitis is the most common H&N presentation (~90%)', highlight: true },
      { text: 'Saddle nose deformity from septal cartilage destruction', highlight: true },
      { text: 'Subglottic stenosis (16-23% of patients)' },
      { text: 'Serous otitis media from eustachian tube granulomas' },
      { text: 'Labs: cANCA (anti-PR3) positive in 90%+ of active generalized disease', highlight: true },
    ],
    footnote: 'Treatment: cyclophosphamide + corticosteroids for induction; rituximab is an effective alternative.',
  },

  {
    id: 'hn-cancer-risk-factors',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Head & Neck Cancer Risk Factors',
    subtitle: 'Major Etiologic Associations',
    lines: [
      { text: 'Tobacco + alcohol: synergistic risk (multiplicative, not additive)', highlight: true },
      { text: 'HPV (types 16, 18): oropharyngeal SCC — tonsil & base of tongue', highlight: true },
      { text: 'EBV: nasopharyngeal carcinoma (NPC)', highlight: true },
      { text: 'UV radiation: cutaneous malignancies of the head & neck' },
      { text: 'Wood dust exposure: sinonasal adenocarcinoma (ethmoid sinus)', highlight: true },
      { text: 'Nickel, leather dust: sinonasal SCC' },
      { text: 'Betel nut chewing: oral cavity SCC (South/Southeast Asia)' },
    ],
  },

  {
    id: 'tnm-staging-hn',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'TNM Staging System',
    subtitle: 'AJCC Staging for Head & Neck Cancer',
    lines: [
      { text: 'T = Tumor: T0 (no primary), T1-T4 (increasing size/local invasion)' },
      { text: 'N = Nodes: N0 (no nodes), N1-N3 (increasing nodal burden/size/bilaterality)', highlight: true },
      { text: 'M = Metastasis: M0 (none), M1 (distant metastasis present)' },
      { text: 'Stage I: T1 N0 M0 — best prognosis, single-modality treatment' },
      { text: 'Stage II: T2 N0 M0' },
      { text: 'Stage III: T3 N0, or T1-3 N1, M0' },
      { text: 'Stage IV: T4, or N2-3, or M1 — M1 is always Stage IV', highlight: true },
    ],
    footnote: 'HPV+ oropharyngeal cancer uses a separate, more favorable staging system (AJCC 8th edition).',
  },

  {
    id: 'facial-nerve-parotidectomy',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Facial Nerve Landmarks in Parotidectomy',
    subtitle: 'Identifying CN VII During Surgery',
    lines: [
      { text: 'Tragal pointer: nerve lies 1 cm deep and inferior to tragal cartilage pointer', highlight: true },
      { text: 'Tympanomastoid suture line: nerve exits ~6-8 mm deep at inferior end', highlight: true },
      { text: 'Posterior belly of digastric muscle: nerve crosses at its superior border' },
      { text: 'Stylomastoid foramen: bony exit point of CN VII from temporal bone' },
      { text: 'Retrograde dissection: trace a peripheral branch centrally when antegrade ID is difficult', highlight: true },
      { text: 'Nerve stimulator: essential adjunct for intraoperative identification' },
      { text: 'Pes anserinus: main trunk bifurcation into temporofacial and cervicofacial divisions' },
    ],
    footnote: 'The tragal pointer is generally considered the most reliable superficial landmark.',
  },

  // ── Quiz Cards ──

  {
    id: 'adenoid-cystic-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 55-year-old woman presents with a slowly enlarging submandibular mass and progressive numbness along the lower lip. Biopsy shows a cribriform "Swiss cheese" pattern. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Mucoepidermoid carcinoma' },
      { label: 'B', text: 'Adenoid cystic carcinoma' },
      { label: 'C', text: 'Pleomorphic adenoma' },
      { label: 'D', text: 'Acinic cell carcinoma' },
    ],
    correctIndex: 1,
    explanation: 'Adenoid cystic carcinoma has a classic cribriform ("Swiss cheese") histologic pattern and is notorious for perineural invasion causing numbness/paresthesias. It is the most common malignancy of the submandibular and minor salivary glands.',
  },

  {
    id: 'parotid-facial-paralysis-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 60-year-old man presents with a parotid mass and ipsilateral facial paralysis. What is the most important consideration?',
    options: [
      { label: 'A', text: 'This is likely a benign pleomorphic adenoma' },
      { label: 'B', text: 'Observation with repeat imaging in 3 months' },
      { label: 'C', text: 'Malignancy until proven otherwise' },
      { label: 'D', text: 'Fine needle aspiration is contraindicated' },
    ],
    correctIndex: 2,
    explanation: 'A parotid mass with associated facial nerve paralysis is malignancy until proven otherwise. Benign parotid tumors virtually never cause facial paralysis. FNA should be performed and is safe and indicated. Further workup includes CT/MRI and consideration for total parotidectomy with facial nerve sacrifice if intraoperatively involved.',
  },

  {
    id: 'frey-syndrome-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient complains of unilateral facial sweating and flushing during meals, 6 months after superficial parotidectomy. What is the diagnosis?',
    options: [
      { label: 'A', text: 'First bite syndrome' },
      { label: 'B', text: 'Frey syndrome (gustatory sweating)' },
      { label: 'C', text: 'Sialadenitis' },
      { label: 'D', text: 'Facial nerve neuroma' },
    ],
    correctIndex: 1,
    explanation: 'Frey syndrome results from aberrant regeneration of severed parasympathetic (auriculotemporal nerve) fibers into sympathetic pathways innervating sweat glands and cutaneous blood vessels. Occurs in up to 30-50% of parotidectomy patients. Diagnosed with the Minor starch-iodine test. Treatment includes botulinum toxin injection, topical antiperspirants, or interposition of tissue (AlloDerm, SCM flap) during surgery.',
  },

  {
    id: 'ludwigs-angina-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A 40-year-old presents with bilateral submandibular swelling, trismus, elevated tongue, and "wooden" floor of mouth after a dental extraction. What is the diagnosis?',
    options: [
      { label: 'A', text: 'Peritonsillar abscess' },
      { label: 'B', text: 'Ludwig\'s angina' },
      { label: 'C', text: 'Retropharyngeal abscess' },
      { label: 'D', text: 'Parapharyngeal abscess' },
    ],
    correctIndex: 1,
    explanation: 'Ludwig\'s angina is a bilateral infection of the submandibular, sublingual, and submental spaces, typically from odontogenic sources (mandibular 2nd/3rd molars whose roots extend below the mylohyoid line). Classic presentation: "wooden" or brawny floor of mouth, elevated tongue, drooling, and airway compromise. It is a cellulitis rather than a true abscess. Emergent airway management is the #1 priority.',
  },

  {
    id: 'ameloblastoma-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 35-year-old presents with a painless mandibular swelling. Panoramic radiograph shows a multilocular radiolucency with a "soap bubble" appearance in the posterior mandible. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Odontogenic keratocyst' },
      { label: 'B', text: 'Ameloblastoma' },
      { label: 'C', text: 'Dentigerous cyst' },
      { label: 'D', text: 'Central giant cell granuloma' },
    ],
    correctIndex: 1,
    explanation: 'Ameloblastoma is the most common clinically significant odontogenic epithelial tumor. It is locally aggressive with a "soap bubble" or "honeycomb" multilocular radiolucent appearance on imaging. 80% occur in the posterior mandible. Treatment is wide surgical excision with 1-2 cm bony margins due to high recurrence rate with curettage alone.',
  },

  {
    id: 'okc-gorlin-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A 20-year-old has multiple jaw cysts, basal cell carcinomas of the skin, and palmar pitting. What syndrome is this most consistent with?',
    options: [
      { label: 'A', text: 'Gardner syndrome' },
      { label: 'B', text: 'Gorlin syndrome (nevoid basal cell carcinoma syndrome)' },
      { label: 'C', text: 'Peutz-Jeghers syndrome' },
      { label: 'D', text: 'McCune-Albright syndrome' },
    ],
    correctIndex: 1,
    explanation: 'Gorlin syndrome (nevoid basal cell carcinoma syndrome) is an autosomal dominant condition caused by mutations in the PTCH1 (Patched) tumor suppressor gene. Classic features include multiple odontogenic keratocysts (OKCs), basal cell carcinomas (often at a young age), palmar/plantar pitting, calcified falx cerebri, skeletal anomalies, and medulloblastoma risk.',
  },

  {
    id: 'neck-mass-workup-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 55-year-old smoker presents with a 3 cm neck mass present for 6 weeks. What is the most appropriate initial diagnostic step?',
    options: [
      { label: 'A', text: 'Open excisional biopsy' },
      { label: 'B', text: 'CT-guided core needle biopsy' },
      { label: 'C', text: 'Fine needle aspiration (FNA)' },
      { label: 'D', text: 'PET/CT scan' },
    ],
    correctIndex: 2,
    explanation: 'FNA is the initial diagnostic procedure of choice for a suspicious neck mass >2 cm that has not resolved with a trial of antibiotics. Open biopsy should NEVER be the first step, as it can compromise future surgical planes, seed tumor cells, and delay definitive treatment. The classic workup sequence is: FNA first, then CT/MRI, then panendoscopy with directed biopsies if SCC is found or suspected.',
  },

  {
    id: 'unknown-primary-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A patient has a cystic neck mass with FNA showing metastatic SCC but no identifiable primary site on CT and MRI. What is the next best step?',
    options: [
      { label: 'A', text: 'Radical neck dissection' },
      { label: 'B', text: 'PET/CT followed by panendoscopy with bilateral tonsillectomy and directed biopsies' },
      { label: 'C', text: 'Observation and repeat imaging in 6 weeks' },
      { label: 'D', text: 'Empiric chemoradiation' },
    ],
    correctIndex: 1,
    explanation: 'For unknown primary head and neck SCC, PET/CT can identify the occult primary in ~25% of cases. If still unknown, panendoscopy (direct laryngoscopy, esophagoscopy, bronchoscopy) with bilateral palatine tonsillectomy and directed biopsies of high-risk sites (base of tongue, nasopharynx, piriform sinuses) is performed. HPV testing of the neck node is critical as HPV+ cystic nodes often originate from the base of tongue or palatine tonsils.',
  },

  {
    id: 'hpv-oropharyngeal-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which of the following is TRUE regarding HPV-positive oropharyngeal squamous cell carcinoma?',
    options: [
      { label: 'A', text: 'It has a worse prognosis than HPV-negative disease' },
      { label: 'B', text: 'p16 immunohistochemistry is used as a surrogate marker for HPV status' },
      { label: 'C', text: 'It most commonly affects the oral cavity' },
      { label: 'D', text: 'It is associated with EBV co-infection' },
    ],
    correctIndex: 1,
    explanation: 'HPV-positive oropharyngeal SCC (primarily HPV-16) has a significantly BETTER prognosis than HPV-negative disease (60-80% reduction in risk of death). p16 overexpression on immunohistochemistry is used as a surrogate marker. It classically affects the base of tongue and palatine tonsils. Patients tend to be younger, non-smokers, and present with cystic cervical lymphadenopathy. AJCC 8th edition has a separate, more favorable staging system for HPV+ OPC.',
  },

  {
    id: 'cisplatin-toxicity-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which of the following is NOT a well-known side effect of cisplatin chemotherapy?',
    options: [
      { label: 'A', text: 'Nephrotoxicity' },
      { label: 'B', text: 'Ototoxicity (high-frequency sensorineural hearing loss)' },
      { label: 'C', text: 'Hepatotoxicity' },
      { label: 'D', text: 'Peripheral neuropathy' },
    ],
    correctIndex: 2,
    explanation: 'Cisplatin is the most effective single chemotherapy agent for head and neck SCC. Its major toxicities include nephrotoxicity (dose-limiting, requires aggressive IV hydration), ototoxicity (irreversible high-frequency SNHL), peripheral neuropathy, severe nausea/vomiting, and myelosuppression. Hepatotoxicity is not a characteristic cisplatin toxicity (more associated with methotrexate).',
  },

  {
    id: 'retropharyngeal-abscess-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 3-year-old presents with fever, neck stiffness, drooling, muffled voice, and refusal to eat. Lateral neck X-ray shows prevertebral soft tissue widening >7 mm at C2. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Peritonsillar abscess' },
      { label: 'B', text: 'Epiglottitis' },
      { label: 'C', text: 'Retropharyngeal abscess' },
      { label: 'D', text: 'Ludwig\'s angina' },
    ],
    correctIndex: 2,
    explanation: 'Retropharyngeal abscess is most common in children <6 years (due to retropharyngeal lymph nodes that atrophy by age 5). Presents with "hot potato" voice, odynophagia, drooling, neck stiffness, and torticollis. Lateral neck X-ray shows prevertebral widening (>7 mm at C2, >14 mm at C6 in children). CT with contrast confirms and defines the abscess. Treatment: IV antibiotics + surgical I&D (transoral approach).',
  },

  {
    id: 'benign-salivary-tumor-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'What is the most common benign tumor of the parotid gland?',
    options: [
      { label: 'A', text: 'Warthin tumor' },
      { label: 'B', text: 'Oncocytoma' },
      { label: 'C', text: 'Pleomorphic adenoma' },
      { label: 'D', text: 'Basal cell adenoma' },
    ],
    correctIndex: 2,
    explanation: 'Pleomorphic adenoma (benign mixed tumor) is the most common salivary gland tumor overall and the most common benign parotid tumor (~80% of benign parotid tumors). Contains both epithelial and mesenchymal elements. Treatment is superficial parotidectomy with facial nerve preservation. Has a 2-5% risk of malignant transformation to carcinoma ex-pleomorphic adenoma, especially if left untreated for many years.',
  },

  {
    id: 'tb-lymphadenopathy-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient from an endemic region presents with chronic painless cervical lymphadenopathy with matted nodes and draining sinuses. Biopsy shows caseating granulomas with acid-fast bacilli. What is the diagnosis?',
    options: [
      { label: 'A', text: 'Sarcoidosis' },
      { label: 'B', text: 'Cat-scratch disease' },
      { label: 'C', text: 'Tuberculous cervical lymphadenitis (scrofula)' },
      { label: 'D', text: 'Lymphoma' },
    ],
    correctIndex: 2,
    explanation: 'Tuberculous cervical lymphadenitis (scrofula) presents with chronic, painless, matted cervical lymphadenopathy that may form draining sinuses or cold abscesses. Histology shows CASEATING granulomas (vs. NONcaseating in sarcoidosis) with acid-fast bacilli. Diagnosis confirmed by culture, PCR, or interferon-gamma release assay. Treatment is standard anti-TB therapy (RIPE: rifampin, isoniazid, pyrazinamide, ethambutol).',
  },

  // ── Flashcards ──

  {
    id: 'frey-syndrome-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is Frey syndrome and how is it treated?',
    back: 'Gustatory sweating — aberrant regeneration of parasympathetic fibers (auriculotemporal nerve) into sympathetic sweat gland pathways after parotidectomy.\n\nSymptoms: ipsilateral facial sweating and flushing during eating.\n\nDiagnosis: Minor starch-iodine test.\n\nTreatment:\n1) Botulinum toxin injection (most effective, lasts 6-12 months)\n2) Topical antiperspirants (glycopyrrolate, aluminum chloride)\n3) Interposition grafts during surgery (AlloDerm, thick skin flap, SCM flap)',
  },

  {
    id: 'ludwigs-angina-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is Ludwig\'s angina?',
    back: 'A rapidly progressive, bilateral cellulitis of the submandibular, sublingual, and submental spaces.\n\nEtiology: odontogenic (mandibular 2nd/3rd molars — roots below the mylohyoid line).\n\nPresentation: "wooden" or brawny floor of mouth, tongue elevation/protrusion, drooling, trismus, stridor.\n\nKey points:\n- Cellulitis, NOT a true abscess (no fluid collection initially)\n- Airway emergency — #1 priority is securing the airway\n- May require awake tracheotomy or fiberoptic intubation\n- Treatment: IV antibiotics (ampicillin-sulbactam or clindamycin) + surgical I&D if abscess forms + dental source control',
    bonus: 'Named after Wilhelm Friedrich von Ludwig (1836). Mortality was >50% before antibiotics; now ~8% with modern treatment.',
  },

  {
    id: 'pleomorphic-adenoma-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What is pleomorphic adenoma?',
    back: 'The most common salivary gland tumor overall ("benign mixed tumor").\n\n- ~80% of benign parotid tumors\n- Contains both epithelial and mesenchymal (myxoid, chondroid) elements\n- Presents as a painless, slow-growing, mobile mass\n- Treatment: superficial parotidectomy (NOT enucleation, due to incomplete capsule and satellite nodules)\n- 2-5% risk of malignant transformation → carcinoma ex-pleomorphic adenoma\n- Recurrence rate: ~1% with proper excision, up to 20-45% with enucleation alone',
  },

  {
    id: 'parapharyngeal-space-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What are the two compartments of the parapharyngeal space?',
    back: 'Divided by the styloid process and its attached muscles (tensor-vascular-styloid fascia):\n\n1) PRESTYLOID (anterior):\n- Fat, minor salivary gland tissue, internal maxillary artery\n- Deep lobe of parotid gland\n- Masses displace parapharyngeal fat medially\n\n2) POSTSTYLOID (posterior):\n- Internal carotid artery, internal jugular vein\n- CN IX, X, XI, XII\n- Sympathetic chain, deep cervical lymph nodes\n- Paragangliomas (glomus vagale) and schwannomas common here\n\nThe parapharyngeal space is the "highway" connecting all deep neck spaces.',
  },

  {
    id: 'danger-space-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is the "danger space" of the neck?',
    back: 'Space 4 — located between the alar fascia (anteriorly) and the prevertebral fascia (posteriorly).\n\n- Extends from the skull base to the posterior mediastinum at the level of the diaphragm\n- Contains loose areolar tissue allowing rapid spread of infection\n- Infections can spread from neck to mediastinum within hours\n- Clinical significance: retropharyngeal abscess can rupture into the danger space, causing life-threatening descending necrotizing mediastinitis\n- Requires aggressive IV antibiotics and emergent surgical drainage if infected',
  },

  {
    id: 'ameloblastoma-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is an ameloblastoma?',
    back: 'The most common clinically significant odontogenic epithelial tumor.\n\n- 80% occur in the posterior mandible (molar/ramus region)\n- Multilocular "soap bubble" or "honeycomb" radiolucency on imaging\n- Locally aggressive, benign tumor with high recurrence if inadequately treated\n- Histologic variants: conventional (multicystic), unicystic, peripheral, desmoplastic\n- Treatment: wide surgical resection with 1-2 cm bony margins\n- Curettage alone has 55-90% recurrence rate\n- Unicystic variant in young patients may be treated more conservatively',
  },

  {
    id: 'okc-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is an odontogenic keratocyst (OKC)?',
    back: 'A developmental odontogenic cyst (formerly keratocystic odontogenic tumor) lined by parakeratinized stratified squamous epithelium.\n\n- Tends to grow along the medullary cavity without causing bony expansion\n- High recurrence rate (10-60%) due to satellite cysts, fragile lining, and high mitotic activity\n- Treatment: curettage + peripheral ostectomy or Carnoy solution; resection for recurrent cases\n- Association with Gorlin syndrome (nevoid basal cell carcinoma syndrome): multiple OKCs + BCCs + palmar pitting + calcified falx cerebri\n- PTCH1 gene mutation (Hedgehog pathway)',
  },

  {
    id: 'fibrous-dysplasia-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is fibrous dysplasia of the craniofacial skeleton?',
    back: 'A benign fibro-osseous condition where normal bone is replaced by immature woven bone and fibrous tissue.\n\nTypes:\n- Monostotic (70-85%): single bone involved\n- Polyostotic (15-30%): multiple bones\n- McCune-Albright syndrome: polyostotic FD + cafe-au-lait spots (coast of Maine) + precocious puberty\n\nImaging: "ground glass" appearance on CT\nKey feature: does NOT cross midline or suture lines\nActivating mutation: GNAS1 gene (Gs-alpha protein)\nTreatment: observation if asymptomatic; surgical recontouring for functional or cosmetic deformity\nRisk: <1% malignant transformation (higher with radiation exposure)',
  },

  {
    id: 'giant-cell-arteritis-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is giant cell (temporal) arteritis?',
    back: 'The most common systemic vasculitis in adults >50 years.\n\n- Affects medium/large arteries, especially temporal artery\n- Symptoms: new-onset headache, scalp tenderness, jaw claudication, visual disturbances\n- Feared complication: anterior ischemic optic neuropathy → permanent blindness\n- Labs: markedly elevated ESR (>50 mm/hr) and CRP\n- Gold standard diagnosis: temporal artery biopsy (skip lesions possible, so biopsy >2 cm)\n- CRITICAL: start high-dose corticosteroids IMMEDIATELY if suspected — do NOT wait for biopsy results\n- Associated with polymyalgia rheumatica (40-60% overlap)',
  },

  {
    id: 'hutchinsons-triad-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is Hutchinson\'s triad?',
    back: 'Classic triad of congenital syphilis (late manifestations, appearing after age 5):\n\n1) Hutchinson\'s teeth: notched, widely-spaced, peg-shaped central incisors (barrel-shaped)\n2) Interstitial keratitis: corneal inflammation causing photophobia and tearing\n3) Sensorineural hearing loss (CN VIII): 8th nerve deafness\n\nCaused by transplacental transmission of Treponema pallidum.\nOther findings: saddle nose, frontal bossing, short maxilla, palatal perforation, saber shins, Clutton joints.\nTreatment: IV penicillin G (drug of choice for all stages of syphilis).',
  },

  // ── Fill-in-the-Blank Cards ──

  {
    id: 'adenoid-cystic-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The ___ is the most common submandibular and minor salivary gland malignancy, known for perineural spread.',
    blankWord: 'adenoid cystic carcinoma',
    options: ['adenoid cystic carcinoma', 'mucoepidermoid carcinoma', 'acinic cell carcinoma', 'pleomorphic adenoma'],
  },

  {
    id: 'danger-space-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The ___ space extends from skull base to the diaphragm and allows rapid spread of neck infections.',
    blankWord: 'danger',
    options: ['danger', 'retropharyngeal', 'prevertebral', 'parapharyngeal'],
  },

  {
    id: 'stylomastoid-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The facial nerve exits the skull through the ___ foramen.',
    blankWord: 'stylomastoid',
    options: ['stylomastoid', 'foramen ovale', 'jugular', 'foramen rotundum'],
  },

  {
    id: 'sarcoidosis-granuloma-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'Sarcoidosis is characterized histologically by ___ granulomas.',
    blankWord: 'noncaseating',
    options: ['noncaseating', 'caseating', 'suppurative', 'necrotizing'],
  },

  {
    id: 'gpa-autoantibody-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Granulomatosis with polyangiitis (Wegener\'s) is associated with ___ autoantibodies.',
    blankWord: 'cANCA',
    options: ['cANCA', 'pANCA', 'ANA', 'anti-dsDNA'],
  },

  {
    id: 'odontoma-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The most common odontogenic tumor overall is the ___.',
    blankWord: 'odontoma',
    options: ['odontoma', 'ameloblastoma', 'odontogenic keratocyst', 'cementoma'],
  },

  {
    id: 'cisplatin-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: '___ is the best single chemotherapy agent against head and neck squamous cell carcinoma.',
    blankWord: 'Cisplatin',
    options: ['Cisplatin', '5-Fluorouracil', 'Methotrexate', 'Cetuximab'],
  },

  // ── Surgical Steps Cards ──

  {
    id: 'parotidectomy-steps',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Superficial Parotidectomy',
    steps: [
      { title: 'Positioning', detail: 'Supine with head turned to contralateral side. Place facial nerve monitor electrodes. Prep and drape to allow visualization of facial movement.' },
      { title: 'Incision', detail: 'Modified Blair incision: preauricular, extending below the lobule, then posteriorly into a natural neck crease. Raise a thick skin flap anteriorly over the parotid.' },
      { title: 'Flap Elevation', detail: 'Elevate the skin-platysma flap anteriorly. Identify and preserve the greater auricular nerve if possible (sensation to ear lobule).' },
      { title: 'Identify Facial Nerve', detail: 'Use the tragal pointer (nerve is 1 cm deep and inferior). Confirm with tympanomastoid suture line and posterior belly of digastric. Use nerve stimulator.' },
      { title: 'Dissect Along Nerve', detail: 'Perform antegrade dissection along the main trunk to the pes anserinus. Follow temporofacial and cervicofacial divisions and their branches peripherally.' },
      { title: 'Remove Superficial Lobe', detail: 'Elevate the superficial lobe off the facial nerve branches using a combination of blunt and sharp dissection. Maintain hemostasis.' },
      { title: 'Closure', detail: 'Achieve hemostasis. Consider AlloDerm or SCM flap to prevent Frey syndrome and contour deformity. Place a suction drain. Close in layers.' },
    ],
  },

  {
    id: 'neck-dissection-types-steps',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Neck Dissection Types',
    steps: [
      { title: 'Radical Neck Dissection (RND)', detail: 'Removes levels I-V lymph nodes, SCM, internal jugular vein (IJV), and spinal accessory nerve (CN XI). Historic gold standard, now rarely performed.' },
      { title: 'Modified Radical Neck Dissection (MRND)', detail: 'Removes levels I-V lymph nodes with preservation of one or more non-lymphatic structures: Type I preserves CN XI; Type II preserves CN XI + IJV; Type III preserves CN XI + IJV + SCM.' },
      { title: 'Selective Neck Dissection (SND)', detail: 'Removes only specific at-risk nodal levels based on primary tumor site. Preserves CN XI, IJV, and SCM. Most common type performed today.' },
      { title: 'Supraomohyoid (Levels I-III)', detail: 'For oral cavity primaries. Removes levels I, II, and III. Most common selective neck dissection.' },
      { title: 'Lateral (Levels II-IV)', detail: 'For oropharyngeal, hypopharyngeal, and laryngeal primaries. Removes levels II, III, and IV.' },
      { title: 'Posterolateral (Levels II-V)', detail: 'For cutaneous malignancies of the posterior scalp and neck. Removes levels II-V plus suboccipital and postauricular nodes.' },
      { title: 'Central (Level VI)', detail: 'For thyroid cancer and subglottic/tracheal primaries. Removes pretracheal, paratracheal, and prelaryngeal (Delphian) nodes.' },
    ],
  },

  {
    id: 'ludwigs-angina-management-steps',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Ludwig\'s Angina Management',
    steps: [
      { title: 'Airway Assessment', detail: 'Immediate airway evaluation is the #1 priority. Assess for stridor, inability to handle secretions, tongue protrusion, and trismus. Have emergency airway equipment ready.' },
      { title: 'Secure Airway', detail: 'Awake fiberoptic nasal intubation is preferred. If impossible, awake tracheostomy under local anesthesia. Blind oral intubation is contraindicated due to distorted anatomy.' },
      { title: 'IV Antibiotics', detail: 'Broad-spectrum: ampicillin-sulbactam (Unasyn) or clindamycin + ceftriaxone. Must cover Strep, Staph, and oral anaerobes. Blood cultures before antibiotics if possible.' },
      { title: 'CT with Contrast', detail: 'Once airway is secured, obtain CT neck with IV contrast to evaluate extent of infection and identify drainable fluid collections.' },
      { title: 'Incision & Drainage', detail: 'If abscess present: submental and bilateral submandibular incisions. Bluntly explore submandibular, sublingual, and submental spaces. Place through-and-through drains.' },
      { title: 'Dental Source Control', detail: 'Extract the offending tooth once acute infection is controlled. Failure to eliminate the dental source leads to recurrence.' },
      { title: 'Postoperative Care', detail: 'Continue IV antibiotics, keep drains until output minimal, serial examinations for airway patency, nutritional support, and close monitoring in ICU setting.' },
    ],
  },

  // ── HEAD & NECK SET 2: Pharynx, Oral Cavity, Thyroid & Vascular ──

  // === QUIZ CARDS (12) ===

  {
    id: 'hn2-waldeyer-ring-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Which of the following structures is NOT a component of Waldeyer\'s tonsillar ring?',
    options: [
      { label: 'A', text: 'Pharyngeal tonsil (adenoid)' },
      { label: 'B', text: 'Palatine tonsils' },
      { label: 'C', text: 'Lingual tonsil' },
      { label: 'D', text: 'Thyroid lingual tissue' },
    ],
    correctIndex: 3,
    explanation: 'Waldeyer\'s ring consists of the pharyngeal tonsil (adenoid) superiorly, the bilateral tubal tonsils, the bilateral palatine tonsils, and the lingual tonsil at the tongue base. Thyroid tissue is not part of this lymphoid ring.',
  },

  {
    id: 'hn2-hpv-oropharynx-subsite-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'HPV-positive oropharyngeal squamous cell carcinoma most commonly arises in which subsite?',
    options: [
      { label: 'A', text: 'Soft palate' },
      { label: 'B', text: 'Posterior pharyngeal wall' },
      { label: 'C', text: 'Palatine tonsil and tongue base' },
      { label: 'D', text: 'Lateral pharyngeal wall' },
    ],
    correctIndex: 2,
    explanation: 'HPV-related oropharyngeal cancer has a strong predilection for the palatine tonsils and the base of tongue, likely due to the reticulated crypt epithelium in these lymphoid-rich subsites, which facilitates HPV entry.',
  },

  {
    id: 'hn2-tongue-motor-innervation-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Which cranial nerve provides motor innervation to all intrinsic and most extrinsic muscles of the tongue?',
    options: [
      { label: 'A', text: 'Glossopharyngeal nerve (CN IX)' },
      { label: 'B', text: 'Hypoglossal nerve (CN XII)' },
      { label: 'C', text: 'Facial nerve (CN VII)' },
      { label: 'D', text: 'Trigeminal nerve (CN V)' },
    ],
    correctIndex: 1,
    explanation: 'The hypoglossal nerve (CN XII) innervates all intrinsic tongue muscles and all extrinsic tongue muscles except the palatoglossus, which is supplied by the vagus nerve (CN X) via the pharyngeal plexus.',
  },

  {
    id: 'hn2-oral-cavity-cancer-subsite-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'What is the most common subsite for squamous cell carcinoma of the oral cavity?',
    options: [
      { label: 'A', text: 'Hard palate' },
      { label: 'B', text: 'Lateral tongue and floor of mouth' },
      { label: 'C', text: 'Buccal mucosa' },
      { label: 'D', text: 'Retromolar trigone' },
    ],
    correctIndex: 1,
    explanation: 'The lateral tongue and floor of mouth account for the majority of oral cavity squamous cell carcinomas. The lateral tongue is the single most common subsite, with the floor of mouth being the second most common.',
  },

  {
    id: 'hn2-thyroid-blood-supply-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'The inferior thyroid artery is a branch of which vessel?',
    options: [
      { label: 'A', text: 'External carotid artery' },
      { label: 'B', text: 'Internal carotid artery' },
      { label: 'C', text: 'Thyrocervical trunk' },
      { label: 'D', text: 'Costocervical trunk' },
    ],
    correctIndex: 2,
    explanation: 'The inferior thyroid artery arises from the thyrocervical trunk, which is a branch of the subclavian artery. The superior thyroid artery, by contrast, is the first branch of the external carotid artery.',
  },

  {
    id: 'hn2-rln-thyroid-surgery-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'During thyroidectomy, the recurrent laryngeal nerve is most consistently found in which location?',
    options: [
      { label: 'A', text: 'Anterior to the inferior thyroid artery' },
      { label: 'B', text: 'Within the tracheoesophageal groove' },
      { label: 'C', text: 'Superficial to the Berry ligament' },
      { label: 'D', text: 'Lateral to the carotid sheath' },
    ],
    correctIndex: 1,
    explanation: 'The RLN is most reliably identified in the tracheoesophageal groove. While its relationship to the inferior thyroid artery is variable (it may pass anterior, posterior, or between branches), the tracheoesophageal groove remains the most consistent anatomic landmark.',
  },

  {
    id: 'hn2-parathyroid-embryology-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'The inferior parathyroid glands arise from which pharyngeal pouch?',
    options: [
      { label: 'A', text: 'Second pharyngeal pouch' },
      { label: 'B', text: 'Third pharyngeal pouch' },
      { label: 'C', text: 'Fourth pharyngeal pouch' },
      { label: 'D', text: 'Fifth pharyngeal pouch' },
    ],
    correctIndex: 1,
    explanation: 'The inferior parathyroids derive from the third pharyngeal pouch (along with the thymus) and migrate further caudally, which is why their position is more variable. The superior parathyroids come from the fourth pharyngeal pouch and have a shorter migration, making their position more consistent.',
  },

  {
    id: 'hn2-carotid-bifurcation-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'At what vertebral level does the common carotid artery typically bifurcate into the internal and external carotid arteries?',
    options: [
      { label: 'A', text: 'C2' },
      { label: 'B', text: 'C4 (upper border of thyroid cartilage)' },
      { label: 'C', text: 'C6' },
      { label: 'D', text: 'T1' },
    ],
    correctIndex: 1,
    explanation: 'The common carotid artery typically bifurcates at the level of C3-C4, which corresponds to the upper border of the thyroid cartilage. This is also the level of the hyoid bone. The carotid body and carotid sinus are located at this bifurcation.',
  },

  {
    id: 'hn2-eca-first-branch-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'What is the first branch of the external carotid artery?',
    options: [
      { label: 'A', text: 'Lingual artery' },
      { label: 'B', text: 'Facial artery' },
      { label: 'C', text: 'Superior thyroid artery' },
      { label: 'D', text: 'Ascending pharyngeal artery' },
    ],
    correctIndex: 2,
    explanation: 'The superior thyroid artery is the first anterior branch of the external carotid artery. A classic mnemonic for the ECA branches is "Some Anatomists Like Freaking Out Poor Medical Students" — Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal.',
  },

  {
    id: 'hn2-ijv-access-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'During central venous access, the internal jugular vein is found in which position relative to the common carotid artery within the carotid sheath?',
    options: [
      { label: 'A', text: 'Medial' },
      { label: 'B', text: 'Anterolateral' },
      { label: 'C', text: 'Posterior' },
      { label: 'D', text: 'Deep (inferior)' },
    ],
    correctIndex: 1,
    explanation: 'Within the carotid sheath, the internal jugular vein lies anterolateral (lateral and slightly anterior) to the common carotid artery. The vagus nerve lies in the posterior groove between the two vessels. This anatomic relationship is essential for safe central line placement.',
  },

  {
    id: 'hn2-vertebral-artery-segments-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'The vertebral artery enters the transverse foramen of which cervical vertebra?',
    options: [
      { label: 'A', text: 'C7' },
      { label: 'B', text: 'C6' },
      { label: 'C', text: 'C4' },
      { label: 'D', text: 'C1' },
    ],
    correctIndex: 1,
    explanation: 'The vertebral artery (V1 segment) typically enters the transverse foramen of C6 and then ascends through the transverse foramina of C6 to C1 (V2 segment). It then loops posteriorly around C1 (V3 segment) before piercing the dura to enter the cranium (V4 segment).',
  },

  {
    id: 'hn2-hpv-staging-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'In the AJCC 8th edition staging system, p16-positive oropharyngeal carcinoma differs from p16-negative staging in which key way?',
    options: [
      { label: 'A', text: 'T staging is based on depth of invasion rather than size' },
      { label: 'B', text: 'N staging uses ipsilateral vs. bilateral/contralateral node involvement rather than size criteria' },
      { label: 'C', text: 'There is no stage IV for non-metastatic p16-positive disease' },
      { label: 'D', text: 'Both B and C are correct' },
    ],
    correctIndex: 3,
    explanation: 'The AJCC 8th edition created a separate staging system for p16-positive oropharyngeal cancer reflecting its better prognosis. N staging is simplified (N1 = ipsilateral nodes, N2 = contralateral/bilateral), and non-metastatic disease maxes out at stage III — there is no stage IV without distant metastases.',
  },

  // === FLASHCARDS (8) ===

  {
    id: 'hn2-waldeyer-ring-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What structures form Waldeyer\'s tonsillar ring?',
    back: 'A ring of lymphoid tissue in the pharynx consisting of: (1) Pharyngeal tonsil (adenoid) — nasopharynx roof, (2) Tubal tonsils — around Eustachian tube openings, (3) Palatine tonsils — between anterior and posterior pillars, (4) Lingual tonsil — tongue base.',
    bonus: 'The adenoid is most prominent in childhood and typically involutes by puberty. Persistent adenoid hypertrophy in adults should raise suspicion for lymphoma.',
  },

  {
    id: 'hn2-floor-of-mouth-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What key structures are found in the floor of the mouth?',
    back: 'The floor of mouth contains: the sublingual glands, submandibular (Wharton\'s) duct openings at the sublingual caruncle, the lingual nerve (CN V3), the hypoglossal nerve (CN XII), and the lingual artery. The mylohyoid muscle forms the muscular floor.',
    bonus: 'The lingual nerve passes superficial to the submandibular duct, then loops under and medial to it — "the lingual nerve took a curve around the Wharton\'s duct."',
  },

  {
    id: 'hn2-thyroid-ima-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is the thyroid ima artery and why is it clinically important?',
    back: 'The thyroid ima (arteria thyroidea ima) is an inconstant artery present in about 3-10% of individuals that arises from the brachiocephalic trunk or aortic arch and supplies the thyroid isthmus. It is at risk of injury during tracheostomy or midline thyroid surgery if not recognized.',
    bonus: 'It was first described by Neubauer in 1772 and is sometimes called Neubauer\'s artery.',
  },

  {
    id: 'hn2-thyroid-surgery-complications-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the major complications of total thyroidectomy?',
    back: 'Major complications include: (1) Recurrent laryngeal nerve injury — hoarseness, aspiration; (2) Superior laryngeal nerve (external branch) injury — loss of high pitch; (3) Hypoparathyroidism — temporary (up to 30%) or permanent (1-2%); (4) Postoperative hemorrhage/hematoma — potential airway emergency; (5) Wound infection; (6) Seroma.',
    bonus: 'Bilateral RLN injury causes bilateral vocal cord paralysis in the paramedian position, resulting in acute airway obstruction — this is a surgical emergency requiring reintubation or tracheostomy.',
  },

  {
    id: 'hn2-parathyroid-blood-supply-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is the primary blood supply to the parathyroid glands?',
    back: 'Both superior and inferior parathyroid glands receive their blood supply predominantly from the inferior thyroid artery (a branch of the thyrocervical trunk). The superior parathyroids may occasionally receive supply from an anastomosis between the superior and inferior thyroid arteries.',
    bonus: 'During thyroidectomy, preserving an intact blood supply to the parathyroids is critical. If a gland is devascularized, it should be confirmed with biopsy, minced, and autotransplanted into the sternocleidomastoid or forearm muscle.',
  },

  {
    id: 'hn2-carotid-body-tumor-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is a carotid body tumor and what is its classic presentation?',
    back: 'A carotid body tumor (chemodectoma) is a paraganglioma arising from chemoreceptor cells at the carotid bifurcation. It presents as a painless, slowly enlarging lateral neck mass that is mobile side-to-side but not vertically (Fontaine sign). On angiography it causes splaying of the internal and external carotid arteries (lyre sign).',
    bonus: 'About 10% are bilateral. Familial cases (associated with SDH gene mutations) have higher rates of bilaterality (up to 30-40%).',
  },

  {
    id: 'hn2-oral-cavity-lymphatic-drainage-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is the lymphatic drainage pattern of oral cavity cancers?',
    back: 'Oral cavity cancers primarily drain to levels I-III. The anterior tongue and floor of mouth may drain bilaterally. The lateral tongue typically drains to ipsilateral levels I-II first. The lip drains to submental (level IA) and submandibular (level IB) nodes. Skip metastases to level IV are uncommon but possible.',
    bonus: 'Depth of invasion (DOI) >4mm in oral tongue SCC significantly increases the risk of occult nodal metastasis and is an indication for elective neck dissection even in a cN0 neck.',
  },

  {
    id: 'hn2-eca-branches-mnemonic-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What is a mnemonic for the 8 branches of the external carotid artery?',
    back: '"Some Anatomists Like Freaking Out Poor Medical Students" — Superior thyroid, Ascending pharyngeal, Lingual, Facial, Occipital, Posterior auricular, Maxillary, Superficial temporal. The first four arise in the carotid triangle; the last two are terminal branches.',
    bonus: 'The ascending pharyngeal is the smallest branch and arises from the medial/posterior aspect of the ECA. The maxillary and superficial temporal are the terminal branches given off within the parotid gland.',
  },

  // === FILL-BLANK CARDS (8) ===

  {
    id: 'hn2-adenoid-location-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The pharyngeal tonsil (adenoid) is located on the roof and posterior wall of the ___.',
    blankWord: 'nasopharynx',
    options: ['nasopharynx', 'oropharynx', 'hypopharynx', 'laryngopharynx'],
  },

  {
    id: 'hn2-hpv-subtype-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The HPV subtype most commonly associated with oropharyngeal squamous cell carcinoma is HPV-___.',
    blankWord: '16',
    options: ['6', '11', '16', '18'],
  },

  {
    id: 'hn2-tongue-sensation-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'General sensation (pain, temperature, touch) to the anterior two-thirds of the tongue is carried by the ___ nerve, a branch of CN V3.',
    blankWord: 'lingual',
    options: ['lingual', 'chorda tympani', 'glossopharyngeal', 'hypoglossal'],
  },

  {
    id: 'hn2-thyroid-nerve-injury-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Injury to the external branch of the superior laryngeal nerve during thyroidectomy results in difficulty producing ___ sounds due to cricothyroid muscle paralysis.',
    blankWord: 'high-pitched',
    options: ['high-pitched', 'low-pitched', 'nasal', 'breathy'],
  },

  {
    id: 'hn2-inferior-parathyroid-pouch-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'hard',
    sentence: 'The inferior parathyroid glands develop from the ___ pharyngeal pouch, the same pouch that gives rise to the thymus.',
    blankWord: 'third',
    options: ['second', 'third', 'fourth', 'fifth'],
  },

  {
    id: 'hn2-carotid-sheath-contents-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The three main structures within the carotid sheath are the common carotid artery, the internal jugular vein, and the ___ nerve.',
    blankWord: 'vagus',
    options: ['vagus', 'hypoglossal', 'glossopharyngeal', 'phrenic'],
  },

  {
    id: 'hn2-vertebral-artery-origin-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The vertebral artery is typically the first branch of the ___ artery on each side.',
    blankWord: 'subclavian',
    options: ['subclavian', 'common carotid', 'external carotid', 'brachiocephalic'],
  },

  {
    id: 'hn2-oral-cavity-doi-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'hard',
    sentence: 'In the AJCC 8th edition, oral cavity T staging incorporates depth of invasion (DOI), where T2 includes tumors ≤2 cm with DOI >5 mm, or tumors >2 cm but ≤4 cm with DOI ≤___ mm.',
    blankWord: '10',
    options: ['5', '10', '15', '20'],
  },

  // === ANIMATED-TEXT CARDS (5) ===

  {
    id: 'hn2-waldeyer-ring-facts',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Waldeyer\'s Tonsillar Ring',
    subtitle: 'Pharyngeal Lymphoid Tissue',
    lines: [
      { text: 'Named after Heinrich Wilhelm Waldeyer (1884)' },
      { text: 'Ring of lymphoid tissue guarding the pharyngeal inlet', highlight: true },
      { text: 'Pharyngeal tonsil (adenoid) — nasopharynx roof' },
      { text: 'Tubal tonsils — around Eustachian tube orifices' },
      { text: 'Palatine tonsils — lateral oropharynx', highlight: true },
      { text: 'Lingual tonsil — posterior tongue base' },
      { text: 'Functions as first line of mucosal immune defense' },
    ],
    footnote: 'Lymphoma involving Waldeyer\'s ring has a unique association with concurrent GI tract lymphoma — always check the gut.',
  },

  {
    id: 'hn2-thyroid-anatomy-facts',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Thyroid Gland Anatomy',
    subtitle: 'Essential Surgical Landmarks',
    lines: [
      { text: 'Butterfly-shaped, straddles trachea at C5-T1 level' },
      { text: 'Superior thyroid artery — first branch of ECA', highlight: true },
      { text: 'Inferior thyroid artery — from thyrocervical trunk', highlight: true },
      { text: 'Thyroid ima artery present in ~3-10% (from brachiocephalic/aorta)' },
      { text: 'Three paired veins: superior, middle, and inferior thyroid' },
      { text: 'Berry ligament attaches thyroid to trachea — RLN is deep to this', highlight: true },
      { text: 'Isthmus overlies tracheal rings 2-4' },
      { text: 'Pyramidal lobe present in ~50% — remnant of thyroglossal duct' },
    ],
    footnote: 'The middle thyroid vein has no accompanying artery and drains directly into the IJV — it must be ligated early during thyroid mobilization.',
  },

  {
    id: 'hn2-eca-branches-facts',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'External Carotid Artery Branches',
    subtitle: 'SALFOP-MS Mnemonic',
    lines: [
      { text: 'Superior thyroid — first branch, supplies thyroid & larynx' },
      { text: 'Ascending pharyngeal — smallest, medial branch' },
      { text: 'Lingual — supplies tongue, at risk in tongue base surgery', highlight: true },
      { text: 'Facial — tortuous course over mandible, key in facial trauma' },
      { text: 'Occipital — posterior, runs with CN XII briefly', highlight: true },
      { text: 'Posterior auricular — supplies scalp & middle ear' },
      { text: 'Maxillary — terminal, enters pterygopalatine fossa', highlight: true },
      { text: 'Superficial temporal — terminal, palpable at temple' },
    ],
    footnote: 'The internal maxillary artery\'s sphenopalatine branch is the most common source of serious posterior epistaxis.',
  },

  {
    id: 'hn2-oropharynx-cancer-facts',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Oropharyngeal Cancer: HPV Era',
    subtitle: 'Key Paradigm Shifts',
    lines: [
      { text: 'HPV type 16 causes ~70-80% of oropharyngeal SCC in developed nations', highlight: true },
      { text: 'p16 immunohistochemistry is the clinical surrogate marker for HPV' },
      { text: 'HPV+ patients are typically younger, non-smokers, with better prognosis', highlight: true },
      { text: 'Often presents with a cystic neck node and small/occult primary' },
      { text: 'AJCC 8th edition created separate staging for p16+ disease' },
      { text: 'Treatment: surgery (TORS) or definitive chemoradiation' },
      { text: 'De-escalation trials are underway to reduce treatment toxicity', highlight: true },
    ],
    footnote: '5-year overall survival for HPV-positive oropharyngeal SCC exceeds 80%, compared to ~50% for HPV-negative disease.',
  },

  {
    id: 'hn2-carotid-triangle-facts',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Carotid Triangle & Great Vessels',
    subtitle: 'Vascular Anatomy of the Neck',
    lines: [
      { text: 'Carotid triangle borders: SCM, posterior digastric, superior belly of omohyoid' },
      { text: 'Common carotid bifurcation at C3-C4 (upper thyroid cartilage)', highlight: true },
      { text: 'ICA has NO branches in the neck — ECA gives off 8 branches' },
      { text: 'Internal jugular vein lies lateral to the carotid in the carotid sheath', highlight: true },
      { text: 'Vagus nerve lies posteriorly between the artery and vein' },
      { text: 'Vertebral artery enters transverse foramen of C6', highlight: true },
      { text: 'Vertebral arteries merge to form the basilar artery intracranially' },
    ],
    footnote: 'The carotid body at the bifurcation is a chemoreceptor (senses O2/CO2/pH). The carotid sinus is a baroreceptor (senses blood pressure) innervated by CN IX.',
  },



  // === Batch 1: Cranial Nerves & Skull Base (34 cards) ===
  {
    id: 'hn2-facial-nerve-course',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Facial Nerve (CN VII)',
    subtitle: 'Intratemporal Course',
    lines: [
      { text: 'Originates from the pontomedullary junction' },
      { text: 'Enters the internal auditory canal (IAC) with CN VIII', highlight: true },
      { text: 'Labyrinthine segment — narrowest portion, most vulnerable to edema', highlight: true },
      { text: 'Greater superficial petrosal nerve branches at the geniculate ganglion' },
      { text: 'Tympanic (horizontal) segment crosses the middle ear' },
      { text: 'Mastoid (vertical) segment gives off nerve to stapedius and chorda tympani', highlight: true },
      { text: 'Exits the skull at the stylomastoid foramen' },
    ],
    footnote: 'The labyrinthine segment is the most common site of entrapment in Bell\'s palsy due to its narrow bony canal',
  },
  
  {
    id: 'hn2-facial-nerve-branches',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Facial Nerve Extracranial Branches',
    subtitle: 'To Zanzibar By Motor Car',
    lines: [
      { text: 'Temporal branch — innervates frontalis and orbicularis oculi', highlight: true },
      { text: 'Zygomatic branch — innervates orbicularis oculi and nasalis' },
      { text: 'Buccal branch — innervates buccinator and orbicularis oris', highlight: true },
      { text: 'Marginal mandibular branch — innervates depressors of the lower lip', highlight: true },
      { text: 'Cervical branch — innervates platysma' },
      { text: 'Mnemonic: To Zanzibar By Motor Car' },
    ],
    footnote: 'The marginal mandibular branch is at greatest risk during submandibular gland excision; it runs superficial to the facial artery and vein',
  },
  
  {
    id: 'hn2-skull-base-foramina',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Key Skull Base Foramina',
    subtitle: 'Contents & Clinical Relevance',
    lines: [
      { text: 'Foramen rotundum: CN V2 (maxillary nerve)', highlight: true },
      { text: 'Foramen ovale: CN V3, accessory meningeal artery, lesser petrosal nerve', highlight: true },
      { text: 'Foramen spinosum: middle meningeal artery, meningeal branch of V3' },
      { text: 'Jugular foramen: CN IX, X, XI, internal jugular vein, inferior petrosal sinus', highlight: true },
      { text: 'Hypoglossal canal: CN XII' },
      { text: 'Foramen lacerum: greater petrosal nerve crosses over (nothing passes entirely through)', highlight: true },
      { text: 'Superior orbital fissure: CN III, IV, V1, VI, ophthalmic veins' },
    ],
    footnote: 'Common board trap: the foramen lacerum is covered by cartilage in life — the internal carotid artery passes over it, not through it',
  },
  
  {
    id: 'hn2-cavernous-sinus-contents',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Cavernous Sinus Anatomy',
    subtitle: 'Lateral Wall & Contents',
    lines: [
      { text: 'Internal carotid artery passes THROUGH the sinus', highlight: true },
      { text: 'CN VI (abducens) runs WITHIN the sinus, lateral to the ICA', highlight: true },
      { text: 'Lateral wall (superior to inferior): CN III, CN IV, CN V1, CN V2', highlight: true },
      { text: 'CN VI is most vulnerable in cavernous sinus pathology' },
      { text: 'Receives drainage from superior and inferior ophthalmic veins' },
      { text: 'Communicates with the pterygoid venous plexus (route of infection spread)' },
      { text: 'Cavernous sinus thrombosis: CN VI palsy is often the first sign' },
    ],
    footnote: 'Mnemonic for lateral wall: O TOM CAT — Oculomotor (III), Trochlear (IV), Ophthalmic (V1), Maxillary (V2), Carotid, Abducens (VI), T for through the sinus',
  },
  
  {
    id: 'hn2-jugular-foramen-syndrome',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Jugular Foramen Syndromes',
    subtitle: 'Named Skull Base Syndromes',
    lines: [
      { text: 'Vernet syndrome (jugular foramen): CN IX, X, XI', highlight: true },
      { text: 'Presents with dysphagia, hoarseness, and trapezius/SCM weakness' },
      { text: 'Collet-Sicard syndrome: CN IX, X, XI, XII', highlight: true },
      { text: 'Adds tongue deviation to Vernet syndrome findings' },
      { text: 'Villaret syndrome: CN IX, X, XI, XII plus sympathetic chain', highlight: true },
      { text: 'Adds Horner syndrome (ptosis, miosis, anhidrosis)' },
      { text: 'Causes: glomus jugulare, schwannoma, meningioma, metastasis' },
    ],
    footnote: 'Glomus jugulare (paraganglioma) is the most common primary tumor of the jugular foramen',
  },
  
  {
    id: 'hn2-bell-palsy-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A 35-year-old woman presents with acute-onset right-sided facial weakness involving both the forehead and lower face. She cannot close her right eye. Which of the following best characterizes this presentation?',
    options: [
      { label: 'A', text: 'Upper motor neuron lesion affecting CN VII' },
      { label: 'B', text: 'Lower motor neuron lesion affecting CN VII' },
      { label: 'C', text: 'Central stroke affecting the motor cortex' },
      { label: 'D', text: 'Lesion of the trigeminal nerve (CN V)' },
    ],
    correctIndex: 1,
    explanation: 'Involvement of BOTH the forehead and lower face indicates a lower motor neuron (LMN) lesion of CN VII. Upper motor neuron lesions spare the forehead because the upper face receives bilateral cortical innervation. This presentation is classic for Bell\'s palsy.',
  },
  
  {
    id: 'hn2-bell-palsy-treatment-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient is diagnosed with Bell\'s palsy within 72 hours of symptom onset. There are no contraindications to medical therapy. What is the most appropriate initial treatment?',
    options: [
      { label: 'A', text: 'Oral acyclovir alone' },
      { label: 'B', text: 'Oral corticosteroids alone' },
      { label: 'C', text: 'Surgical decompression of the facial nerve' },
      { label: 'D', text: 'Observation and eye protection only' },
    ],
    correctIndex: 1,
    explanation: 'High-dose oral corticosteroids (e.g., prednisone 60-80 mg daily for 1 week) initiated within 72 hours are the mainstay of treatment for Bell\'s palsy. Adding antivirals is controversial and has not been shown to provide significant additional benefit when used alone. Surgical decompression is reserved for severe, non-recovering cases.',
  },
  
  {
    id: 'hn2-trigeminal-divisions-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Which division of the trigeminal nerve exits the skull through the foramen ovale?',
    options: [
      { label: 'A', text: 'V1 — ophthalmic division' },
      { label: 'B', text: 'V2 — maxillary division' },
      { label: 'C', text: 'V3 — mandibular division' },
      { label: 'D', text: 'Motor root of the trigeminal nerve only' },
    ],
    correctIndex: 2,
    explanation: 'The mandibular division (V3) exits through the foramen ovale. V1 passes through the superior orbital fissure, and V2 passes through the foramen rotundum. The motor root of the trigeminal nerve actually travels with V3 through the foramen ovale.',
  },
  
  {
    id: 'hn2-rln-vs-sln-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A singer notices loss of high-pitched vocal range after thyroid surgery but has a normal-appearing vocal fold examination. Which nerve was most likely injured?',
    options: [
      { label: 'A', text: 'Recurrent laryngeal nerve' },
      { label: 'B', text: 'External branch of the superior laryngeal nerve' },
      { label: 'C', text: 'Internal branch of the superior laryngeal nerve' },
      { label: 'D', text: 'Hypoglossal nerve' },
    ],
    correctIndex: 1,
    explanation: 'The external branch of the superior laryngeal nerve (EBSLN) innervates the cricothyroid muscle, which tenses the vocal cords and controls pitch. Injury results in loss of high-pitched voice and vocal fatigue. The vocal folds may appear grossly normal on examination, making this a subtle but clinically significant injury.',
  },
  
  {
    id: 'hn2-vagus-nerve-branches-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which of the following is NOT a branch of the vagus nerve (CN X)?',
    options: [
      { label: 'A', text: 'Superior laryngeal nerve' },
      { label: 'B', text: 'Recurrent laryngeal nerve' },
      { label: 'C', text: 'Auricular branch (Arnold\'s nerve)' },
      { label: 'D', text: 'Chorda tympani' },
    ],
    correctIndex: 3,
    explanation: 'The chorda tympani is a branch of the facial nerve (CN VII), not the vagus. It carries taste sensation from the anterior two-thirds of the tongue and parasympathetic fibers to the submandibular and sublingual glands. The superior laryngeal nerve, recurrent laryngeal nerve, and Arnold\'s nerve (which can cause cough when stimulating the ear canal) are all branches of CN X.',
  },
  
  {
    id: 'hn2-hypoglossal-deviation-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A patient has a right hypoglossal nerve (CN XII) injury. When asked to protrude the tongue, which direction will it deviate?',
    options: [
      { label: 'A', text: 'To the left (away from the lesion)' },
      { label: 'B', text: 'To the right (toward the lesion)' },
      { label: 'C', text: 'It will remain midline but will be unable to move' },
      { label: 'D', text: 'It will deviate upward' },
    ],
    correctIndex: 1,
    explanation: 'With a unilateral CN XII injury, the tongue deviates TOWARD the side of the lesion on protrusion. This occurs because the intact genioglossus muscle on the contralateral side pushes the tongue past midline without opposition from the weakened ipsilateral side. Over time, ipsilateral tongue atrophy and fasciculations develop.',
  },
  
  {
    id: 'hn2-accessory-nerve-injury-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient undergoes excisional biopsy of a lymph node in the posterior triangle of the neck and subsequently develops shoulder droop and difficulty abducting the arm above 90 degrees. Which nerve was most likely injured?',
    options: [
      { label: 'A', text: 'Long thoracic nerve' },
      { label: 'B', text: 'Spinal accessory nerve (CN XI)' },
      { label: 'C', text: 'Dorsal scapular nerve' },
      { label: 'D', text: 'Suprascapular nerve' },
    ],
    correctIndex: 1,
    explanation: 'The spinal accessory nerve (CN XI) courses superficially through the posterior triangle of the neck and is vulnerable during lymph node biopsies in this region. Injury causes trapezius muscle paralysis, resulting in shoulder droop, inability to fully abduct the arm, and scapular winging (lateral winging, unlike the medial winging seen with long thoracic nerve injury).',
  },
  
  {
    id: 'hn2-cavernous-sinus-first-sign-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A patient develops acute proptosis, chemosis, and ophthalmoplegia following a dental infection. Imaging confirms cavernous sinus thrombosis. Which cranial nerve palsy is typically the FIRST to manifest?',
    options: [
      { label: 'A', text: 'CN III (oculomotor)' },
      { label: 'B', text: 'CN IV (trochlear)' },
      { label: 'C', text: 'CN V1 (ophthalmic)' },
      { label: 'D', text: 'CN VI (abducens)' },
    ],
    correctIndex: 3,
    explanation: 'CN VI (abducens) is typically the first cranial nerve affected in cavernous sinus pathology because it is the only nerve that runs freely WITHIN the sinus, making it most vulnerable to compression and inflammation. CN III, IV, V1, and V2 are embedded in the lateral wall and are relatively more protected.',
  },
  
  {
    id: 'hn2-glossopharyngeal-function-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient presents with loss of the gag reflex when the posterior pharyngeal wall is stimulated on the left side. The afferent limb of this reflex is carried by which cranial nerve?',
    options: [
      { label: 'A', text: 'Vagus nerve (CN X)' },
      { label: 'B', text: 'Glossopharyngeal nerve (CN IX)' },
      { label: 'C', text: 'Trigeminal nerve (CN V)' },
      { label: 'D', text: 'Facial nerve (CN VII)' },
    ],
    correctIndex: 1,
    explanation: 'The gag reflex has CN IX (glossopharyngeal) as its afferent limb providing sensation from the posterior pharynx, and CN X (vagus) as its efferent limb causing pharyngeal muscle contraction. CN IX also provides taste to the posterior one-third of the tongue and carries the carotid sinus baroreceptor and carotid body chemoreceptor afferents.',
  },
  
  {
    id: 'hn2-middle-cranial-fossa-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'During a middle cranial fossa approach for vestibular schwannoma removal, which landmark is used to identify the location of the internal auditory canal?',
    options: [
      { label: 'A', text: 'Foramen spinosum' },
      { label: 'B', text: 'Arcuate eminence' },
      { label: 'C', text: 'Greater superficial petrosal nerve and arcuate eminence' },
      { label: 'D', text: 'Tegmen tympani alone' },
    ],
    correctIndex: 2,
    explanation: 'The middle cranial fossa approach uses the greater superficial petrosal nerve (GSPN) and the arcuate eminence as key landmarks. The IAC lies at approximately 60 degrees from the GSPN and is bisected by a line drawn from the root of the zygoma through the arcuate eminence. The tegmen tympani and foramen spinosum serve as additional reference points but are not the primary guides to the IAC.',
  },
  
  {
    id: 'hn2-jugular-foramen-contents-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'The jugular foramen is divided into a smaller anteromedial portion (pars nervosa) and a larger posterolateral portion (pars vascularis). Which structure passes through the pars nervosa?',
    options: [
      { label: 'A', text: 'Internal jugular vein' },
      { label: 'B', text: 'CN IX (glossopharyngeal nerve)' },
      { label: 'C', text: 'CN X and CN XI' },
      { label: 'D', text: 'Inferior petrosal sinus only' },
    ],
    correctIndex: 1,
    explanation: 'The pars nervosa (anteromedial compartment) transmits CN IX and the inferior petrosal sinus. The pars vascularis (posterolateral compartment) transmits CN X, CN XI, and the internal jugular vein. This anatomic separation is clinically relevant in jugular foramen surgery, where selective tumor removal may preserve some cranial nerves.',
  },
  
  {
    id: 'hn2-facial-nerve-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is the narrowest segment of the facial nerve\'s intratemporal course, and why is it clinically significant?',
    back: 'The labyrinthine segment (approximately 3-4 mm long) is the narrowest portion. It extends from the fundus of the IAC to the geniculate ganglion.',
    bonus: 'Because it is the narrowest segment within a bony canal, the labyrinthine segment is most susceptible to ischemia and compression from edema. This is why Bell\'s palsy (inflammatory edema of the nerve) most commonly causes entrapment here.',
  },
  
  {
    id: 'hn2-house-brackmann-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is the House-Brackmann grading system and what does Grade III indicate?',
    back: 'The House-Brackmann scale grades facial nerve function from I (normal) to VI (total paralysis). Grade III represents moderate dysfunction with obvious but not disfiguring weakness, complete eye closure with effort, and slight mouth movement asymmetry.',
    bonus: 'Grade I = normal; Grade II = slight weakness on close inspection; Grade III = obvious weakness, complete eye closure with effort; Grade IV = obvious disfiguring weakness, incomplete eye closure; Grade V = barely perceptible motion; Grade VI = no movement.',
  },
  
  {
    id: 'hn2-trigeminal-sensory-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What are the three divisions of the trigeminal nerve and their respective skull exit foramina?',
    back: 'V1 (ophthalmic) exits through the superior orbital fissure. V2 (maxillary) exits through the foramen rotundum. V3 (mandibular) exits through the foramen ovale.',
    bonus: 'Only V3 carries motor fibers (muscles of mastication: masseter, temporalis, medial and lateral pterygoids, plus mylohyoid, anterior belly of digastric, tensor tympani, and tensor veli palatini).',
  },
  
  {
    id: 'hn2-glossopharyngeal-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the four major functions of the glossopharyngeal nerve (CN IX)?',
    back: 'CN IX provides: (1) general sensation to the posterior one-third of the tongue, pharynx, and middle ear; (2) taste from the posterior one-third of the tongue; (3) motor innervation to the stylopharyngeus muscle; (4) parasympathetic secretomotor fibers to the parotid gland via the otic ganglion.',
    bonus: 'CN IX also carries afferents from the carotid body (chemoreception) and carotid sinus (baroreception), making it critical for cardiovascular reflexes.',
  },
  
  {
    id: 'hn2-vagus-laryngeal-branches-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the key differences between the superior laryngeal nerve and recurrent laryngeal nerve?',
    back: 'The superior laryngeal nerve divides into an internal branch (sensory to the supraglottis) and an external branch (motor to the cricothyroid muscle). The recurrent laryngeal nerve provides motor innervation to ALL other intrinsic laryngeal muscles and sensory innervation to the subglottis.',
    bonus: 'The right RLN loops under the subclavian artery while the left RLN loops under the aortic arch, making the left RLN longer and more vulnerable in thoracic pathology.',
  },
  
  {
    id: 'hn2-cn-xi-course-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'Describe the course of the spinal accessory nerve (CN XI) through the posterior triangle of the neck.',
    back: 'CN XI exits the jugular foramen, crosses the posterior belly of the digastric, enters the deep surface of the SCM (which it innervates), emerges at Erb\'s point (posterior border of SCM at the junction of the upper and middle thirds), then crosses the posterior triangle superficially to innervate the trapezius.',
    bonus: 'CN XI runs superficially in the posterior triangle, typically just deep to the investing layer of deep cervical fascia, making it vulnerable during surgical procedures in this region. It is the most commonly iatrogenically injured nerve in the neck.',
  },
  
  {
    id: 'hn2-cn-xii-course-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'Describe the course of the hypoglossal nerve (CN XII) in the neck.',
    back: 'CN XII exits through the hypoglossal canal, descends between the internal carotid artery and internal jugular vein, loops anteriorly around the occipital artery, then passes superficial to the hyoglossus muscle to enter the tongue. It innervates all intrinsic and most extrinsic tongue muscles.',
    bonus: 'The only extrinsic tongue muscle NOT innervated by CN XII is the palatoglossus, which is supplied by the vagus nerve (CN X) via the pharyngeal plexus.',
  },
  
  {
    id: 'hn2-foramen-lacerum-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What passes through (or over) the foramen lacerum?',
    back: 'In life, the foramen lacerum is filled with fibrocartilage. Nothing passes completely through it from extracranial to intracranial. The internal carotid artery passes OVER it as it enters the cavernous sinus, and the greater petrosal nerve crosses over it to become the nerve of the pterygoid canal (Vidian nerve).',
    bonus: 'This is a common examination trap. The ICA exits the carotid canal and passes over the cartilage of the foramen lacerum but does not pass through the foramen itself in the traditional sense.',
  },
  
  {
    id: 'hn2-cavernous-sinus-thrombosis-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What are the clinical features and most common cause of cavernous sinus thrombosis?',
    back: 'Clinical features include proptosis, chemosis, ophthalmoplegia (CN III, IV, VI palsies), facial sensory loss (CN V1, V2), and fever. The most common cause is Staphylococcus aureus infection spreading from the nasal cavity, sinuses, or facial skin via the ophthalmic veins.',
    bonus: 'The \"danger triangle of the face\" (nose and upper lip area) drains via the angular and ophthalmic veins to the cavernous sinus. These veins lack valves, allowing retrograde spread of infection.',
  },
  
  {
    id: 'hn2-mcf-tegmen-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is the tegmen tympani and what is its clinical significance?',
    back: 'The tegmen tympani is a thin bony plate forming the roof of the middle ear and mastoid antrum. It separates the middle ear cavity from the middle cranial fossa (temporal lobe dura).',
    bonus: 'Dehiscence or erosion of the tegmen can allow CSF leakage (otorrhea or rhinorrhea via the eustachian tube), meningoencephalic herniation into the middle ear, or intracranial extension of middle ear infections leading to temporal lobe abscess or meningitis.',
  },
  
  {
    id: 'hn2-facial-nerve-foramen-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The facial nerve exits the skull through the ___ foramen.',
    blankWord: 'stylomastoid',
    options: ['stylomastoid', 'jugular', 'foramen ovale', 'foramen rotundum'],
  },
  
  {
    id: 'hn2-cn-vi-cavernous-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The ___ nerve is the only cranial nerve that runs freely within the cavernous sinus rather than in its lateral wall.',
    blankWord: 'abducens',
    options: ['oculomotor', 'trochlear', 'abducens', 'ophthalmic'],
  },
  
  {
    id: 'hn2-tongue-deviation-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'When the hypoglossal nerve is injured on one side, the tongue deviates toward the ___ side on protrusion.',
    blankWord: 'affected',
    options: ['affected', 'unaffected', 'dominant', 'contralateral'],
  },
  
  {
    id: 'hn2-vernet-syndrome-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'hard',
    sentence: 'Vernet syndrome involves paralysis of cranial nerves IX, X, and XI due to a lesion at the ___.',
    blankWord: 'jugular foramen',
    options: ['jugular foramen', 'foramen magnum', 'cavernous sinus', 'superior orbital fissure'],
  },
  
  {
    id: 'hn2-bell-palsy-segment-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The ___ segment of the facial nerve is the narrowest and most commonly affected site in Bell\'s palsy.',
    blankWord: 'labyrinthine',
    options: ['labyrinthine', 'tympanic', 'mastoid', 'cisternal'],
  },
  
  {
    id: 'hn2-v3-foramen-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The mandibular division of the trigeminal nerve (V3) exits the skull through the foramen ___.',
    blankWord: 'ovale',
    options: ['ovale', 'rotundum', 'spinosum', 'lacerum'],
  },
  
  {
    id: 'hn2-cn-ix-muscle-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The glossopharyngeal nerve provides motor innervation to only one muscle, the ___.',
    blankWord: 'stylopharyngeus',
    options: ['stylopharyngeus', 'stylohyoid', 'palatoglossus', 'palatopharyngeus'],
  },
  
  {
    id: 'hn2-facial-nerve-decompression-steps',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Transmastoid Facial Nerve Decompression',
    steps: [
      { title: 'Positioning & Incision', detail: 'Postauricular incision under general anesthesia with facial nerve monitoring electrodes in place. Identify the mastoid cortex.' },
      { title: 'Cortical Mastoidectomy', detail: 'Perform a complete canal wall up mastoidectomy. Identify the tegmen, sigmoid sinus, and lateral semicircular canal as key landmarks.' },
      { title: 'Identify Facial Nerve', detail: 'Locate the facial nerve in the mastoid (vertical) segment using the lateral semicircular canal and digastric ridge as guides. The nerve lies medial to the tympanic annulus.' },
      { title: 'Tympanic Segment Exposure', detail: 'Thin the bone overlying the tympanic (horizontal) segment of the facial nerve. The nerve lies just inferior to the lateral semicircular canal.' },
      { title: 'Decompression', detail: 'Remove the bony canal overlying the nerve using diamond burrs, exposing at least 180 degrees of the nerve circumference. Extend from the geniculate ganglion to the stylomastoid foramen.' },
      { title: 'Nerve Sheath Incision', detail: 'If indicated, make a longitudinal incision in the nerve sheath to decompress the endoneurium. Handle the nerve with extreme care, avoiding manipulation.' },
      { title: 'Closure', detail: 'Achieve hemostasis, close the periosteum and skin in layers. Continue facial nerve monitoring postoperatively and initiate rehabilitation.' },
    ],
  },

  // === Batch 3: Congenital, Lymphatics, Infections & Surgical (33 cards) ===
  {
    id: 'hn2-branchial-cleft-overview',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Branchial Cleft Anomalies',
    subtitle: 'Embryology & Clinical Pearls',
    lines: [
      { text: 'Arise from failure of branchial apparatus obliteration during weeks 4-7' },
      { text: '2nd branchial cleft anomalies are the MOST common (90-95%)', highlight: true },
      { text: '1st cleft: near EAC/parotid, risk to facial nerve (CN VII)', highlight: true },
      { text: '2nd cleft: anterior to SCM, courses between internal and external carotid' },
      { text: '3rd cleft: lower neck, tract pierces thyrohyoid membrane internally' },
      { text: '4th cleft: left-sided predominance, associated with recurrent thyroid abscesses', highlight: true },
      { text: 'Definitive treatment for all types is complete surgical excision' },
    ],
    footnote: 'Work classification divides 1st branchial cleft anomalies into Type I (ectodermal only) and Type II (ectoderm + mesoderm)',
  },
  {
    id: 'hn2-2nd-branchial-cleft-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 12-year-old girl presents with a recurrent, tender mass along the anterior border of the sternocleidomastoid muscle at the junction of its upper and middle thirds. She has had two prior infections requiring antibiotics. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Thyroglossal duct cyst' },
      { label: 'B', text: 'Cystic hygroma' },
      { label: 'C', text: 'Second branchial cleft cyst' },
      { label: 'D', text: 'Reactive lymphadenopathy' },
    ],
    correctIndex: 2,
    explanation: 'The classic location for a 2nd branchial cleft cyst is along the anterior border of the SCM, typically at the junction of the upper and middle thirds. Recurrent infections are common and distinguish this from simple lymphadenopathy. The tract courses between the internal and external carotid arteries to end at the tonsillar fossa.',
  },
  {
    id: 'hn2-1st-branchial-cleft-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'During excision of a first branchial cleft cyst, which cranial nerve is MOST at risk of injury?',
    options: [
      { label: 'A', text: 'Spinal accessory nerve (CN XI)' },
      { label: 'B', text: 'Facial nerve (CN VII)' },
      { label: 'C', text: 'Hypoglossal nerve (CN XII)' },
      { label: 'D', text: 'Glossopharyngeal nerve (CN IX)' },
    ],
    correctIndex: 1,
    explanation: 'First branchial cleft anomalies arise near the external auditory canal and parotid gland. The tract has an intimate relationship with the facial nerve, often coursing through or around it. A superficial parotidectomy with facial nerve identification is often required for safe and complete excision.',
  },
  {
    id: 'hn2-4th-branchial-cleft',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'Which branchial cleft anomaly has a left-sided predominance and classically presents with recurrent suppurative thyroiditis?',
    back: 'Fourth branchial cleft anomaly. The sinus tract descends into the mediastinum, loops under the aortic arch (left) or subclavian artery (right), and ascends to pierce the piriform sinus apex.',
    bonus: 'Treatment involves endoscopic cauterization of the piriform sinus tract opening or open excision with ipsilateral hemithyroidectomy if the thyroid gland has been damaged by recurrent infections.',
  },
  {
    id: 'hn2-thyroglossal-duct-embryo',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Thyroglossal Duct Cyst',
    subtitle: 'Embryology & Presentation',
    lines: [
      { text: 'Most common congenital midline neck mass in children', highlight: true },
      { text: 'Thyroid descends from foramen cecum at tongue base to its final pretracheal position' },
      { text: 'Thyroglossal duct normally obliterates by week 10 of gestation' },
      { text: 'Cyst can occur ANYWHERE along the descent path' },
      { text: '65% are infrahyoid, 20% suprahyoid, 15% at the level of the hyoid', highlight: true },
      { text: 'Classic sign: midline mass that elevates with swallowing and tongue protrusion', highlight: true },
      { text: '1% risk of carcinoma (most commonly papillary thyroid carcinoma)' },
    ],
    footnote: 'Always obtain a thyroid ultrasound before excision to confirm the presence of a normal thyroid gland in its usual location',
  },
  {
    id: 'hn2-sistrunk-procedure',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Sistrunk Procedure (Thyroglossal Duct Cyst Excision)',
    steps: [
      { title: 'Preoperative Evaluation', detail: 'Confirm normal thyroid gland in orthotopic position with ultrasound. Rule out ectopic thyroid tissue as the sole functioning thyroid. Fine needle aspiration if malignancy suspected.' },
      { title: 'Patient Positioning', detail: 'Supine with neck extended over a shoulder roll. General anesthesia with oral endotracheal intubation.' },
      { title: 'Incision & Exposure', detail: 'Transverse skin incision centered directly over the cyst. Raise subplatysmal flaps superiorly and inferiorly. Circumferentially dissect around the cyst.' },
      { title: 'Hyoid Bone Resection', detail: 'Identify and expose the central portion of the hyoid bone. Excise the central segment of the hyoid en bloc with the cyst and duct. This is the KEY step that distinguishes Sistrunk from simple excision.' },
      { title: 'Core of Tongue Base', detail: 'Continue dissecting the tract superiorly from the hyoid toward the foramen cecum. Remove a core of tissue from the tongue base to ensure complete duct removal.' },
      { title: 'Closure', detail: 'Meticulous hemostasis. Reapproximate strap muscles over the defect. Close platysma and skin. A small drain may be placed if a large dead space remains.' },
    ],
  },
  {
    id: 'hn2-sistrunk-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'What is the KEY surgical step that differentiates the Sistrunk procedure from simple excision of a thyroglossal duct cyst?',
    options: [
      { label: 'A', text: 'Excision of the central portion of the hyoid bone' },
      { label: 'B', text: 'Identification and preservation of the recurrent laryngeal nerve' },
      { label: 'C', text: 'Total thyroidectomy' },
      { label: 'D', text: 'Bilateral neck dissection' },
    ],
    correctIndex: 0,
    explanation: 'The Sistrunk procedure requires removal of the cyst, the entire thyroglossal duct tract, the central portion of the hyoid bone, and a core of tissue up to the foramen cecum. Excision of the hyoid body is essential because the duct intimately adheres to or passes through it. Simple cyst excision without hyoid resection results in recurrence rates of 50-65%, compared to less than 5% with the Sistrunk procedure.',
  },
  {
    id: 'hn2-cystic-hygroma',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What is a cystic hygroma and where is it most commonly found in the head and neck?',
    back: 'A cystic hygroma (lymphatic malformation) is a congenital malformation of the lymphatic system consisting of fluid-filled cystic spaces. In the head and neck, it is most commonly found in the posterior triangle of the neck (75% of cases).',
    bonus: 'Cystic hygromas are classified as macrocystic (>2 cm), microcystic (<2 cm), or mixed. Macrocystic lesions respond better to sclerotherapy (OK-432 or doxycycline), while microcystic lesions often require surgical excision.',
  },
  {
    id: 'hn2-congenital-masses-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A newborn is found to have a large, soft, transilluminant mass in the left posterior triangle of the neck. Prenatal ultrasound at 20 weeks had shown a cystic neck lesion. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Branchial cleft cyst' },
      { label: 'B', text: 'Infantile hemangioma' },
      { label: 'C', text: 'Cystic hygroma (lymphatic malformation)' },
      { label: 'D', text: 'Dermoid cyst' },
    ],
    correctIndex: 2,
    explanation: 'A transilluminant cystic mass in the posterior triangle of a newborn, especially one detected prenatally, is classic for a cystic hygroma (lymphatic malformation). These are often identified on prenatal ultrasound and can be associated with Turner syndrome and other chromosomal anomalies. Unlike hemangiomas, they are present at birth and do not undergo rapid proliferation.',
  },
  {
    id: 'hn2-hemangioma-vs-vascular',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'How do infantile hemangiomas differ from vascular malformations in the head and neck?',
    back: 'Infantile hemangiomas are benign vascular tumors that appear in the first weeks of life, undergo rapid proliferation until 6-12 months, and then slowly involute over years. Vascular malformations are structural anomalies present at birth that grow proportionally with the child and NEVER involute spontaneously.',
    bonus: 'Propranolol is the first-line treatment for problematic infantile hemangiomas. GLUT-1 immunostaining is positive in hemangiomas and negative in vascular malformations, which is a key histologic differentiator.',
  },
  {
    id: 'hn2-dermoid-cyst',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'A congenital dermoid cyst in the head and neck most commonly presents as a painless midline mass at the ___ in children.',
    blankWord: 'glabella',
    options: ['glabella', 'submentum', 'occiput', 'mastoid tip'],
  },
  {
    id: 'hn2-neck-levels',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Cervical Lymph Node Levels',
    subtitle: 'Memorial Sloan Kettering Classification',
    lines: [
      { text: 'Level IA: Submental triangle (between anterior bellies of digastric)' },
      { text: 'Level IB: Submandibular triangle (around submandibular gland)' },
      { text: 'Level II: Upper jugular (skull base to hyoid, subdivided at spinal accessory nerve)', highlight: true },
      { text: 'Level III: Middle jugular (hyoid to cricoid)' },
      { text: 'Level IV: Lower jugular (cricoid to clavicle)' },
      { text: 'Level V: Posterior triangle (behind SCM, subdivided at cricoid into VA/VB)', highlight: true },
      { text: 'Level VI: Central compartment (hyoid to sternal notch, between carotid sheaths)', highlight: true },
    ],
    footnote: 'Level VII (superior mediastinal) nodes are between the carotid arteries from the sternal notch to the innominate artery',
  },
  {
    id: 'hn2-level-ii-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'The lymph node levels of the neck are defined by specific anatomical landmarks. What structure separates Level II from Level III?',
    options: [
      { label: 'A', text: 'Cricoid cartilage' },
      { label: 'B', text: 'Hyoid bone' },
      { label: 'C', text: 'Omohyoid muscle' },
      { label: 'D', text: 'Clavicle' },
    ],
    correctIndex: 1,
    explanation: 'The hyoid bone (or the carotid bifurcation, used as a radiographic landmark) separates Level II (upper jugular) from Level III (middle jugular). The cricoid cartilage separates Level III from Level IV. The omohyoid muscle was previously used but has been largely replaced by the cricoid as the III/IV boundary.',
  },
  {
    id: 'hn2-sentinel-node-biopsy',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is the role of sentinel lymph node biopsy (SLNB) in head and neck squamous cell carcinoma?',
    back: 'SLNB is used for staging the clinically N0 (no palpable nodes) neck in early-stage (T1-T2) oral cavity squamous cell carcinoma. It can identify occult nodal metastases with a negative predictive value exceeding 95%, potentially sparing patients a full elective neck dissection.',
    bonus: 'The technique uses technetium-99m sulfur colloid injected peritumorally, with or without blue dye. Intraoperative gamma probe localizes the sentinel node. A negative SLNB may spare the morbidity of elective neck dissection in early oral SCC.',
  },
  {
    id: 'hn2-sentinel-node-fill',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Sentinel lymph node biopsy in head and neck cancer uses ___ sulfur colloid injected peritumorally to identify the first echelon draining node.',
    blankWord: 'technetium-99m',
    options: ['technetium-99m', 'iodine-131', 'fluorodeoxyglucose', 'indocyanine green'],
  },
  {
    id: 'hn2-parapharyngeal-space',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Deep Neck Space Infections',
    subtitle: 'Spaces & Danger Signs',
    lines: [
      { text: 'Parapharyngeal space: shaped like an inverted pyramid from skull base to hyoid' },
      { text: 'Retropharyngeal space: potential for mediastinal extension (danger space)', highlight: true },
      { text: 'Peritonsillar abscess: most common deep neck space infection in adults', highlight: true },
      { text: 'Submandibular space infection (Ludwig\'s angina): bilateral, can cause airway compromise' },
      { text: 'CT with IV contrast is the imaging study of choice for deep neck infections' },
      { text: 'Airway management is ALWAYS the first priority', highlight: true },
      { text: 'Most infections are polymicrobial: Strep, Staph, and oral anaerobes' },
    ],
    footnote: 'The danger space (space 4) lies between the alar and prevertebral fascia and extends from the skull base to the diaphragm, allowing rapid spread of infection to the posterior mediastinum',
  },
  {
    id: 'hn2-peritonsillar-abscess-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A 22-year-old presents with severe sore throat, muffled "hot potato" voice, trismus, and uvular deviation. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Retropharyngeal abscess' },
      { label: 'B', text: 'Peritonsillar abscess' },
      { label: 'C', text: 'Parapharyngeal space abscess' },
      { label: 'D', text: 'Epiglottitis' },
    ],
    correctIndex: 1,
    explanation: 'Peritonsillar abscess (quinsy) is the most common deep neck space infection in adults. The classic presentation includes severe unilateral sore throat, muffled voice, trismus (from pterygoid muscle irritation), uvular deviation away from the affected side, and a bulging soft palate. Treatment includes needle aspiration or incision and drainage along with antibiotics.',
  },
  {
    id: 'hn2-retropharyngeal-abscess',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Retropharyngeal abscess is more common in children under age 5 because the retropharyngeal lymph nodes (nodes of ___) atrophy by age 4-5 years.',
    blankWord: 'Rouviere',
    options: ['Rouviere', 'Virchow', 'Delphian', 'Cloquet'],
  },
  {
    id: 'hn2-necrotizing-fasciitis',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What are the hallmarks of cervical necrotizing fasciitis and how is it managed?',
    back: 'Cervical necrotizing fasciitis is a rapidly progressive, life-threatening infection of the cervical fascial planes. Hallmarks include pain disproportionate to examination findings, crepitus on palpation, skin discoloration or necrosis, systemic toxicity, and subcutaneous gas on CT imaging. Mortality ranges from 20-40%.',
    bonus: 'Treatment requires emergent and aggressive surgical debridement of all necrotic tissue, broad-spectrum IV antibiotics (covering gram-positives, gram-negatives, and anaerobes), ICU care, and often multiple return trips to the operating room for serial debridement until healthy tissue margins are confirmed.',
  },
  {
    id: 'hn2-necrotizing-fasciitis-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Which of the following is the MOST critical component in the management of cervical necrotizing fasciitis?',
    options: [
      { label: 'A', text: 'High-dose IV corticosteroids' },
      { label: 'B', text: 'Hyperbaric oxygen therapy' },
      { label: 'C', text: 'Emergent wide surgical debridement' },
      { label: 'D', text: 'CT-guided percutaneous drainage' },
    ],
    correctIndex: 2,
    explanation: 'Emergent wide surgical debridement is the cornerstone of treatment for necrotizing fasciitis. All necrotic and devitalized tissue must be excised aggressively. Antibiotics alone are insufficient because the infection spreads along fascial planes with thrombosis of nutrient vessels, rendering the tissue ischemic and inaccessible to systemic antibiotics. Serial debridements every 24-48 hours are often necessary.',
  },
  {
    id: 'hn2-tracheostomy-procedure',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Open Surgical Tracheostomy',
    steps: [
      { title: 'Positioning & Preparation', detail: 'Supine position with neck extended over a shoulder roll. General anesthesia with existing oral/nasal endotracheal tube in place. Prep and drape the neck from chin to sternal notch.' },
      { title: 'Incision', detail: 'Horizontal skin incision midway between the cricoid cartilage and sternal notch, approximately 2 fingerbreadths above the sternal notch. Carry through skin and subcutaneous tissue.' },
      { title: 'Strap Muscle Separation', detail: 'Separate the strap muscles in the midline raphe. Retract laterally. Divide or retract the thyroid isthmus if it overlies the trachea. Identify the pretracheal fascia.' },
      { title: 'Tracheal Entry', detail: 'Enter the trachea between the 2nd and 3rd or 3rd and 4th tracheal rings. Create a window, Bjork flap, or vertical incision based on surgeon preference. Have the anesthesiologist withdraw the ETT above the tracheotomy site.' },
      { title: 'Tube Placement & Confirmation', detail: 'Insert an appropriately sized tracheostomy tube under direct vision. Inflate the cuff. Confirm placement with end-tidal CO2 and bilateral breath sounds. Secure the tube with sutures and tracheostomy ties.' },
    ],
  },
  {
    id: 'hn2-tracheostomy-complications-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which of the following is the most common LATE complication of tracheostomy?',
    options: [
      { label: 'A', text: 'Tracheo-innominate artery fistula' },
      { label: 'B', text: 'Tracheal stenosis' },
      { label: 'C', text: 'Pneumothorax' },
      { label: 'D', text: 'Recurrent laryngeal nerve injury' },
    ],
    correctIndex: 1,
    explanation: 'Tracheal stenosis is the most common late complication of tracheostomy, occurring in up to 10-20% of patients. It typically develops at the stoma site or at the cuff level due to pressure necrosis and subsequent scarring. Tracheo-innominate fistula is a rare but catastrophic late complication. Pneumothorax and hemorrhage are early complications.',
  },
  {
    id: 'hn2-tracheostomy-fill',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'In a standard open tracheostomy, the trachea is typically entered between the ___ tracheal rings to minimize the risk of subglottic stenosis.',
    blankWord: '2nd and 3rd',
    options: ['2nd and 3rd', '1st and 2nd', '4th and 5th', 'cricoid and 1st'],
  },
  {
    id: 'hn2-neck-dissection-types',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Selective Neck Dissection Types',
    subtitle: 'Current Classification',
    lines: [
      { text: 'Radical ND: removes levels I-V, SCM, IJV, and spinal accessory nerve' },
      { text: 'Modified radical ND: removes levels I-V, preserves one or more non-lymphatic structures', highlight: true },
      { text: 'Selective ND: removes only the levels at highest risk for the primary site' },
      { text: 'Supraomohyoid (I-III): oral cavity primaries', highlight: true },
      { text: 'Lateral (II-IV): oropharynx, hypopharynx, larynx' },
      { text: 'Posterolateral (II-V): cutaneous malignancies of posterior scalp/neck', highlight: true },
      { text: 'Central compartment (VI): thyroid carcinoma' },
    ],
    footnote: 'The trend in modern head and neck surgery is toward selective dissections that reduce morbidity while maintaining oncologic efficacy',
  },
  {
    id: 'hn2-selective-nd-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient with a T2N0 squamous cell carcinoma of the oral tongue is planned for glossectomy with elective neck dissection. Which selective neck dissection is most appropriate?',
    options: [
      { label: 'A', text: 'Lateral neck dissection (levels II-IV)' },
      { label: 'B', text: 'Supraomohyoid neck dissection (levels I-III)' },
      { label: 'C', text: 'Central compartment dissection (level VI)' },
      { label: 'D', text: 'Posterolateral neck dissection (levels II-V)' },
    ],
    correctIndex: 1,
    explanation: 'For oral cavity cancers (including oral tongue), the supraomohyoid neck dissection removing levels I, II, and III is the standard selective dissection. These are the levels at highest risk for metastatic disease from the oral cavity. Some surgeons extend to include level IV for tongue primaries due to occasional skip metastases.',
  },
  {
    id: 'hn2-total-laryngectomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Total Laryngectomy - Key Surgical Principles',
    steps: [
      { title: 'Indications', detail: 'Advanced laryngeal cancer (T4a), salvage after failed chemoradiation, non-functional larynx with chronic aspiration, or subglottic/transglottic tumors not amenable to partial laryngectomy.' },
      { title: 'Neck Dissection', detail: 'Perform bilateral selective or modified radical neck dissection as indicated. Identify and preserve the superior laryngeal pedicle until the specimen is mobilized.' },
      { title: 'Pharyngotomy & Laryngeal Release', detail: 'Divide the suprahyoid musculature and enter the pharynx, typically through the vallecula. Maintain adequate mucosal margins (at least 1-2 cm) around the tumor. Release the larynx from posterior tracheal attachments.' },
      { title: 'Tracheal Transection', detail: 'Divide the trachea typically between the 2nd and 4th rings, ensuring negative inferior margins. Bevel the tracheal cut anteriorly to create the stoma. Deliver the specimen.' },
      { title: 'Pharyngeal Closure', detail: 'Close the neopharynx in a T-shaped or vertical fashion to create an adequate pharyngeal lumen for swallowing. Reinforce with local tissue if available. Ensure a watertight closure to minimize fistula risk.' },
      { title: 'Permanent Stoma Creation', detail: 'Mature the tracheal stoma by suturing the tracheal end to the skin of the lower neck. The stoma is the patient\'s permanent airway. Insert a laryngectomy tube initially.' },
    ],
  },
  {
    id: 'hn2-laryngectomy-rehab-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'After total laryngectomy, which method of alaryngeal speech is considered to produce the MOST natural-sounding voice?',
    options: [
      { label: 'A', text: 'Electrolarynx' },
      { label: 'B', text: 'Esophageal speech' },
      { label: 'C', text: 'Tracheoesophageal puncture (TEP) with voice prosthesis' },
      { label: 'D', text: 'Pneumatic speech aid' },
    ],
    correctIndex: 2,
    explanation: 'Tracheoesophageal puncture (TEP) with a one-way voice prosthesis is considered the gold standard for alaryngeal speech rehabilitation. It produces the most natural voice quality with the highest success rate (85-90%). The patient occludes the stoma, diverting pulmonary air through the prosthesis into the esophagus, vibrating the pharyngoesophageal segment to produce sound.',
  },
  {
    id: 'hn2-laryngectomy-fill',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'hard',
    sentence: 'After total laryngectomy, voice rehabilitation with a tracheoesophageal puncture works by diverting exhaled air through a one-way prosthesis to vibrate the ___ segment.',
    blankWord: 'pharyngoesophageal',
    options: ['pharyngoesophageal', 'cricothyroid', 'tracheoesophageal', 'velopharyngeal'],
  },
  {
    id: 'hn2-free-flap-reconstruction',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'Name the three most commonly used free flaps in head and neck reconstruction and their primary indications.',
    back: '1) Radial forearm free flap (RFFF): thin, pliable; ideal for oral cavity, oropharynx, and partial pharyngeal defects. 2) Fibula free flap: provides bone for mandibular reconstruction with a skin paddle. 3) Anterolateral thigh (ALT) flap: versatile, large skin paddle; used for extensive soft tissue defects, skull base, and pharyngoesophageal reconstruction.',
    bonus: 'The radial forearm flap is based on the radial artery and venae comitantes. The fibula flap is based on the peroneal artery. The ALT flap is based on the descending branch of the lateral circumflex femoral artery. Always perform an Allen test before harvesting a radial forearm flap.',
  },
  {
    id: 'hn2-radial-forearm-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Before harvesting a radial forearm free flap, which bedside test MUST be performed to ensure adequate hand perfusion?',
    options: [
      { label: 'A', text: 'Tinel test' },
      { label: 'B', text: 'Phalen test' },
      { label: 'C', text: 'Allen test' },
      { label: 'D', text: 'Adson test' },
    ],
    correctIndex: 2,
    explanation: 'The Allen test assesses the patency of the ulnar artery and the adequacy of the palmar arch collateral circulation. The patient makes a fist while the examiner compresses both radial and ulnar arteries. Upon releasing only the ulnar artery, the hand should reperfuse within 5-10 seconds, confirming that the radial artery can be safely sacrificed for flap harvest.',
  },
  {
    id: 'hn2-fibula-flap',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What makes the fibula free flap ideal for mandibular reconstruction, and what is its vascular pedicle?',
    back: 'The fibula free flap provides up to 25 cm of dense cortical bone that can be osteotomized to recreate the mandibular contour. It includes a reliable skin paddle for intraoral lining. The vascular pedicle is the peroneal artery and its venae comitantes. The bone stock accepts osseointegrated dental implants for dental rehabilitation.',
    bonus: 'Preoperative CT angiography of the lower extremity is recommended to verify three-vessel runoff to the foot. The flap leaves the distal 6 cm of fibula intact to preserve ankle stability.',
  },
  {
    id: 'hn2-free-flap-monitoring-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'In the first 72 hours after free flap surgery for head and neck reconstruction, what is the MOST important aspect of postoperative monitoring?',
    options: [
      { label: 'A', text: 'Hourly blood pressure monitoring' },
      { label: 'B', text: 'Frequent flap checks assessing color, capillary refill, temperature, and Doppler signal' },
      { label: 'C', text: 'Daily CT angiography of the neck' },
      { label: 'D', text: 'Continuous pulse oximetry on the flap' },
    ],
    correctIndex: 1,
    explanation: 'Frequent clinical flap checks are the gold standard for postoperative free flap monitoring. Every 1-2 hours for the first 72 hours, the flap is assessed for color (pink = good, pale = arterial problem, congested/dusky = venous problem), capillary refill, temperature, turgor, and Doppler signal. Early detection of vascular compromise allows for emergent re-exploration, with salvage rates highest when compromise is identified within 6 hours.',
  },
  {
    id: 'hn2-facial-nerve-segments',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Segments of the Facial Nerve (CN VII) Through Temporal Bone',
    steps: [
      { title: 'Intracranial Segment', detail: 'From the brainstem (pontomedullary junction) to the internal auditory canal (IAC). Travels with CN VIII (vestibulocochlear nerve) and the nervus intermedius through the cerebellopontine angle.' },
      { title: 'Meatal (Intracanalicular) Segment', detail: 'Within the internal auditory canal. The nerve lies in the anterosuperior quadrant of the IAC (Bill\'s bar is the vertical crest separating the facial nerve from the superior vestibular nerve). Length approximately 8-10 mm.' },
      { title: 'Labyrinthine Segment', detail: 'From the fundus of the IAC to the geniculate ganglion. This is the NARROWEST segment and the most susceptible to compression injury. The greater superficial petrosal nerve branches at the geniculate ganglion. Length approximately 3-4 mm.' },
      { title: 'Tympanic Segment', detail: 'From the geniculate ganglion, the nerve turns posteriorly (first genu) and courses along the medial wall of the middle ear, superior to the oval window and inferior to the lateral semicircular canal. Length approximately 11 mm.' },
      { title: 'Mastoid (Vertical) Segment', detail: 'From the second genu (where the nerve turns inferiorly) to the stylomastoid foramen. The nerve to the stapedius and the chorda tympani branch arise from this segment. Length approximately 13 mm.' },
      { title: 'Extratemporal Segment', detail: 'After exiting the stylomastoid foramen, the nerve enters the parotid gland and divides into upper (temporozygomatic) and lower (cervicofacial) divisions, ultimately branching into temporal, zygomatic, buccal, marginal mandibular, and cervical branches.' },
    ],
  },
  {
    id: 'hn2-facial-nerve-narrowest',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'Which segment of the intratemporal facial nerve is the narrowest and most vulnerable to compression?',
    back: 'The labyrinthine segment, measuring only 3-4 mm in length, running from the fundus of the internal auditory canal to the geniculate ganglion. This is the narrowest segment of the fallopian canal and is most susceptible to edema-related compression, which is why it is the proposed site of nerve injury in Bell\'s palsy.',
    bonus: 'The greater superficial petrosal nerve (parasympathetic fibers for lacrimation) branches from the geniculate ganglion at the end of the labyrinthine segment. Loss of tearing (dry eye) suggests a lesion at or proximal to the geniculate ganglion.',
  },
  {
    id: 'hn2-deep-neck-infection-drainage',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Transcervical Drainage of Parapharyngeal Abscess',
    steps: [
      { title: 'Airway Evaluation', detail: 'Assess for airway compromise. If there is trismus, stridor, or floor of mouth swelling, secure the airway first via awake fiberoptic intubation or tracheostomy if needed.' },
      { title: 'Imaging', detail: 'CT neck with IV contrast to delineate the abscess cavity, its relationship to the great vessels, and extension into adjacent spaces. Evaluate for mediastinal involvement.' },
      { title: 'Incision', detail: 'Make an incision along the anterior border of the sternocleidomastoid muscle at the level of the hyoid bone. Incise through skin, subcutaneous tissue, and platysma.' },
      { title: 'Dissection to Abscess', detail: 'Retract the SCM posteriorly and dissect medial to the submandibular gland. Carefully identify and preserve the marginal mandibular nerve, hypoglossal nerve, and great vessels. Enter the parapharyngeal space bluntly.' },
      { title: 'Drain & Irrigate', detail: 'Open the abscess cavity bluntly using a hemostat. Obtain cultures (aerobic and anaerobic). Copiously irrigate with saline. Break up all loculations. Place a Penrose or closed-suction drain.' },
      { title: 'Postoperative Care', detail: 'Continue broad-spectrum IV antibiotics (adjust based on culture results). Monitor drain output. Serial imaging if clinical improvement is not seen within 48 hours. Assess for the need for repeat drainage.' },
    ],
  },

];
