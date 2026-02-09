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
];
