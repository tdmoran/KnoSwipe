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
  svgType: 'larynx' | 'sinuses';
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
];
