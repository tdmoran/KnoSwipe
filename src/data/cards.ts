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

// All previous cards moved to /MadeCards/cards.ts
// European Manual of ORL-HNS — Head & Neck (100 cards)
export const cards: CardData[] = [

  // ─── THYROID & PARATHYROID ──────────────────────────────────────────

  {
    id: 'eur-hn-thyroid-embryology',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Thyroid Embryology',
    subtitle: 'European Manual — Endocrine',
    lines: [
      { text: 'Thyroid descends from the foramen caecum at the base of the tongue', highlight: true },
      { text: 'Migrates caudally via the thyroglossal duct to its final pretracheal position' },
      { text: 'Thyroglossal duct normally obliterates by week 10 of gestation' },
      { text: 'Parafollicular C cells derive from the ultimobranchial body (4th pharyngeal pouch / neural crest)', highlight: true },
      { text: 'C cells secrete calcitonin — elevated in medullary thyroid carcinoma', highlight: true },
      { text: 'Lingual thyroid = failure to descend; may be the only functioning thyroid tissue' },
    ],
    footnote: 'Always perform thyroid scintigraphy before excising a midline neck mass in a child to confirm orthotopic thyroid is present.',
  },

  {
    id: 'eur-hn-thyroglossal-cyst-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A 6-year-old presents with a painless midline neck mass that elevates on tongue protrusion and swallowing. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Thyroglossal duct cyst' },
      { label: 'B', text: 'Branchial cleft cyst' },
      { label: 'C', text: 'Dermoid cyst' },
      { label: 'D', text: 'Cystic hygroma' },
    ],
    correctIndex: 0,
    explanation: 'Thyroglossal duct cysts are the most common congenital midline neck mass. They classically move with swallowing AND tongue protrusion (due to attachment to the hyoid/foramen caecum). Branchial cleft cysts are lateral. Dermoid cysts are midline but do not move with tongue protrusion. Cystic hygromas are typically lateral and posterior triangle.',
  },

  {
    id: 'eur-hn-sistrunk-procedure',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Sistrunk Procedure',
    steps: [
      { title: 'Indication', detail: 'Thyroglossal duct cyst — standard operation to prevent recurrence. Simple cyst excision alone has a 50% recurrence rate.' },
      { title: 'Incision', detail: 'Transverse skin incision over the cyst. Raise subplatysmal flaps superiorly and inferiorly.' },
      { title: 'Cyst Mobilisation', detail: 'Dissect the cyst circumferentially from surrounding tissue. Follow the thyroglossal tract superiorly toward the hyoid bone.' },
      { title: 'Hyoid Bone Resection', detail: 'Excise the central portion (body) of the hyoid bone en bloc with the cyst and tract. This is the key step that reduces recurrence to <5%.' },
      { title: 'Core of Tongue Base', detail: 'Continue dissection of the tract cephalad through the tongue base musculature as a core of tissue up to the foramen caecum.' },
      { title: 'Closure', detail: 'Close strap muscles and platysma in layers. Drain placement is optional. Observe for haematoma and airway compromise postoperatively.' },
    ],
  },

  {
    id: 'eur-hn-thyroid-nodule-workup',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Thyroid Nodule Workup',
    subtitle: 'European Manual — Stepwise Approach',
    lines: [
      { text: 'Step 1: TSH — if low, perform scintigraphy (hot nodule rarely malignant)', highlight: true },
      { text: 'Step 2: Ultrasound — assess size, composition, margins, echogenicity, calcifications' },
      { text: 'EU-TIRADS classification guides FNA indications based on risk stratification', highlight: true },
      { text: 'Step 3: FNA (fine needle aspiration) — Bethesda classification I–VI' },
      { text: 'Bethesda III/IV (indeterminate): molecular testing or diagnostic lobectomy' },
      { text: 'Suspicious features: solid hypoechoic, irregular margins, microcalcifications, taller-than-wide', highlight: true },
    ],
    footnote: 'EU-TIRADS 5 (high suspicion): FNA if ≥10 mm. EU-TIRADS 3 (low): FNA if ≥20 mm.',
  },

  {
    id: 'eur-hn-bethesda-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the six Bethesda categories for thyroid cytopathology and their malignancy risks?',
    back: 'I — Non-diagnostic / Unsatisfactory (1–4%)\nII — Benign (0–3%)\nIII — Atypia of Undetermined Significance / AUS (10–30%)\nIV — Follicular Neoplasm / Suspicious for FN (25–40%)\nV — Suspicious for Malignancy (50–75%)\nVI — Malignant (97–99%)',
    bonus: 'Bethesda III/IV are the "grey zone" — options include repeat FNA, molecular testing (e.g. ThyroSeq, Afirma), or diagnostic hemithyroidectomy.',
  },

  {
    id: 'eur-hn-papillary-thyroid',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Papillary Thyroid Carcinoma',
    subtitle: 'Most Common Thyroid Malignancy (80–85%)',
    lines: [
      { text: 'Most common thyroid cancer — excellent prognosis (>95% 10-year survival)', highlight: true },
      { text: 'Histology: papillary architecture, Orphan Annie eye nuclei, psammoma bodies, nuclear grooves', highlight: true },
      { text: 'Lymphatic spread predominates — cervical LN mets in 30–80% at presentation' },
      { text: 'Multifocal and bilateral in 30–80% of cases' },
      { text: 'Associated with RET/PTC rearrangements and BRAF V600E mutation', highlight: true },
      { text: 'BRAF V600E associated with more aggressive behaviour, extrathyroidal extension, and RAI refractoriness' },
      { text: 'Treatment: thyroidectomy ± central neck dissection ± RAI ablation' },
    ],
  },

  {
    id: 'eur-hn-follicular-vs-papillary-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which feature distinguishes follicular thyroid carcinoma from follicular adenoma?',
    options: [
      { label: 'A', text: 'Presence of colloid' },
      { label: 'B', text: 'Capsular and/or vascular invasion' },
      { label: 'C', text: 'Nuclear grooves' },
      { label: 'D', text: 'Psammoma bodies' },
    ],
    correctIndex: 1,
    explanation: 'Follicular carcinoma CANNOT be diagnosed on FNA — it requires histological demonstration of capsular and/or vascular invasion, which can only be assessed on excision specimens. This is why Bethesda IV ("follicular neoplasm") requires diagnostic lobectomy. Nuclear grooves and psammoma bodies are features of papillary carcinoma.',
  },

  {
    id: 'eur-hn-medullary-thyroid',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is the genetic basis, tumour marker, and key associations of medullary thyroid carcinoma (MTC)?',
    back: 'Origin: parafollicular C cells (neuroendocrine)\nMarker: calcitonin (highly sensitive) + CEA\nHistology: amyloid stroma (Congo red positive)\n\n25% hereditary via RET proto-oncogene mutations:\n• MEN 2A: MTC + phaeochromocytoma + hyperparathyroidism\n• MEN 2B: MTC + phaeo + mucosal neuromas + Marfanoid habitus\n• Familial MTC: MTC only',
    bonus: 'All MTC patients should undergo RET mutation testing. In MEN 2B, prophylactic thyroidectomy is recommended in the first year of life. Always exclude phaeochromocytoma (24h urinary catecholamines) before thyroid surgery.',
  },

  {
    id: 'eur-hn-anaplastic-thyroid-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A 72-year-old presents with a rapidly enlarging, rock-hard neck mass causing stridor and dysphagia. FNA shows undifferentiated cells. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Papillary thyroid carcinoma' },
      { label: 'B', text: 'Thyroid lymphoma' },
      { label: 'C', text: 'Anaplastic thyroid carcinoma' },
      { label: 'D', text: 'Medullary thyroid carcinoma' },
    ],
    correctIndex: 2,
    explanation: 'Anaplastic (undifferentiated) thyroid carcinoma is one of the most aggressive human malignancies. It presents in elderly patients with rapid growth, invasion of surrounding structures (stridor, dysphagia, vocal cord paralysis), and often arises from dedifferentiation of pre-existing well-differentiated thyroid cancer. Median survival is 3–6 months. Thyroid lymphoma can present similarly but typically arises in the setting of Hashimoto thyroiditis.',
  },

  {
    id: 'eur-hn-rln-injury-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'Unilateral recurrent laryngeal nerve injury during thyroidectomy causes ipsilateral vocal cord paralysis in the ___ position.',
    blankWord: 'paramedian',
    options: ['paramedian', 'lateral', 'midline', 'cadaveric'],
  },

  {
    id: 'eur-hn-hyperparathyroid',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Primary Hyperparathyroidism',
    subtitle: 'European Manual — Parathyroid',
    lines: [
      { text: 'Single adenoma in 85% of cases — the most common cause', highlight: true },
      { text: 'Hypercalcaemia + elevated (or inappropriately normal) PTH = diagnostic' },
      { text: 'Symptoms: "bones, stones, abdominal moans, psychic groans"' },
      { text: 'Localisation: sestamibi (Tc-99m MIBI) scan + ultrasound (concordance preferred)', highlight: true },
      { text: '4D-CT scan used when sestamibi/US are discordant or negative' },
      { text: 'Minimally invasive parathyroidectomy with intraoperative PTH monitoring — PTH should drop >50% at 10 min', highlight: true },
      { text: 'Four-gland hyperplasia (15%): subtotal parathyroidectomy (3.5 glands) or total with autotransplant' },
    ],
  },

  {
    id: 'eur-hn-parathyroid-localisation-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'In a patient with primary hyperparathyroidism, sestamibi scan shows a single focus of uptake inferior to the left thyroid lobe. Ultrasound confirms a hypoechoic nodule in the same location. What is the most appropriate surgical approach?',
    options: [
      { label: 'A', text: 'Bilateral neck exploration' },
      { label: 'B', text: 'Focused/minimally invasive parathyroidectomy with ioPTH monitoring' },
      { label: 'C', text: 'Left hemithyroidectomy with parathyroidectomy' },
      { label: 'D', text: 'Total thyroidectomy' },
    ],
    correctIndex: 1,
    explanation: 'When concordant localisation studies (sestamibi + ultrasound agree) identify a single adenoma, focused minimally invasive parathyroidectomy (MIP) with intraoperative PTH monitoring is the standard approach. A >50% drop in PTH from pre-excision baseline at 10 minutes confirms successful removal (Miami criterion). This avoids bilateral exploration and reduces complications.',
  },

  // ─── SALIVARY GLANDS ────────────────────────────────────────────────

  {
    id: 'eur-hn-salivary-anatomy-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'Name the three paired major salivary glands and the nerve that runs through or near each.',
    back: '1. Parotid gland — facial nerve (CN VII) runs through it, dividing the gland into superficial and deep lobes\n\n2. Submandibular gland — lingual nerve (CN V3) and hypoglossal nerve (CN XII) are intimately related; Wharton duct crosses lingual nerve twice\n\n3. Sublingual gland — lingual nerve lies medially; drains via ducts of Rivinus into the floor of mouth',
  },

  {
    id: 'eur-hn-parotid-tumour-rule',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The most common benign tumour of the parotid gland is ___, also known as mixed tumour.',
    blankWord: 'pleomorphic adenoma',
    options: ['pleomorphic adenoma', 'Warthin tumour', 'oncocytoma', 'basal cell adenoma'],
  },

  {
    id: 'eur-hn-warthin-tumour-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which salivary gland tumour is bilateral in 10–15% of cases, almost exclusively occurs in the parotid, and is strongly associated with smoking?',
    options: [
      { label: 'A', text: 'Pleomorphic adenoma' },
      { label: 'B', text: 'Warthin tumour (papillary cystadenoma lymphomatosum)' },
      { label: 'C', text: 'Mucoepidermoid carcinoma' },
      { label: 'D', text: 'Acinic cell carcinoma' },
    ],
    correctIndex: 1,
    explanation: 'Warthin tumour is the second most common benign parotid tumour. It is bilateral in 10–15%, multifocal in up to 20%, and is the only salivary tumour with a strong smoking association. It shows hot uptake on Tc-99m pertechnetate scan (unlike most parotid tumours). Histologically, it contains oncocytic epithelium with lymphoid stroma.',
  },

  {
    id: 'eur-hn-superficial-parotidectomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Superficial Parotidectomy',
    steps: [
      { title: 'Incision', detail: 'Modified Blair incision: preauricular, around the lobule, then into a cervical skin crease. Raise skin flap anteriorly over the parotid fascia.' },
      { title: 'Identify Facial Nerve Trunk', detail: 'Key landmarks: tragal pointer (1 cm deep and inferior), tympanomastoid suture (nerve exits at this level), posterior belly of digastric (nerve is superficial to it). Use nerve stimulator.' },
      { title: 'Anterograde Dissection', detail: 'Follow the main trunk to the pes anserinus (bifurcation into temporofacial and cervicofacial divisions). Dissect superficial lobe off the nerve branches.' },
      { title: 'Tumour Removal', detail: 'Remove the superficial lobe with the tumour en bloc. Avoid tumour spillage in pleomorphic adenoma (risk of multifocal recurrence).' },
      { title: 'Haemostasis & Closure', detail: 'Meticulous haemostasis. Consider placing a drain. Close in layers. Pressure dressing to prevent haematoma and sialocele.' },
      { title: 'Complications', detail: 'Facial nerve injury (transient 10–30%, permanent <5%), Frey syndrome (gustatory sweating — auriculotemporal nerve), sialocele, great auricular nerve numbness (ear lobule).' },
    ],
  },

  {
    id: 'eur-hn-frey-syndrome-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Frey syndrome (gustatory sweating) occurs after parotid surgery due to aberrant regeneration of parasympathetic fibres from the ___ nerve to sweat glands in the skin flap.',
    blankWord: 'auriculotemporal',
    options: ['auriculotemporal', 'great auricular', 'facial', 'glossopharyngeal'],
  },

  {
    id: 'eur-hn-sialolithiasis-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'Which salivary gland is most commonly affected by sialolithiasis, and why?',
    back: 'Submandibular gland (80–90% of salivary stones).\n\nReasons:\n1. Wharton duct is long and has an upward course against gravity\n2. Duct orifice is smaller than the duct diameter\n3. Secretions are more alkaline and mucin-rich (calcium phosphate precipitation)\n4. Higher calcium and phosphate concentration compared to parotid saliva',
    bonus: 'Stones <5 mm may pass spontaneously with massage, hydration, and sialogogues. Larger stones: sialendoscopy, transoral duct surgery, or gland excision.',
  },

  // ─── HEAD & NECK ONCOLOGY — GENERAL PRINCIPLES ──────────────────────

  {
    id: 'eur-hn-staging-tnm-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What are the key changes in the AJCC/UICC 8th edition TNM for head and neck cancer?',
    back: 'Major changes:\n\n1. HPV-associated oropharynx cancer: separate staging (p16+) — downstaged because of far better prognosis\n\n2. Oral cavity: depth of invasion (DOI) added to T classification\n• T1: DOI ≤5 mm\n• T2: DOI >5–10 mm\n• T3: DOI >10 mm\n\n3. Extranodal extension (ENE): clinically/radiologically evident ENE upstages nodes to N3b\n\n4. Unknown primary with HPV+/EBV+ nodes: separate classification',
  },

  {
    id: 'eur-hn-hpv-oropharynx',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'HPV-Positive Oropharyngeal Cancer',
    subtitle: 'European Manual — Rising Epidemic',
    lines: [
      { text: 'HPV-16 is responsible for >90% of HPV-positive oropharyngeal cancers', highlight: true },
      { text: 'Surrogate marker: p16 immunohistochemistry (≥70% nuclear and cytoplasmic staining)', highlight: true },
      { text: 'Typically: younger, non-smoking male, presenting with a cystic neck mass' },
      { text: 'Primary site: tonsil and tongue base most common' },
      { text: '60–80% better overall survival compared to HPV-negative disease', highlight: true },
      { text: 'De-escalation trials ongoing (reduce radiation dose, replace cisplatin)' },
      { text: 'TNM 8th edition: separate staging — N1 = ipsilateral nodes ≤6 cm' },
    ],
    footnote: 'Always perform p16 IHC on all oropharyngeal squamous cell carcinomas — it fundamentally changes staging and prognosis.',
  },

  {
    id: 'eur-hn-oral-cavity-cancer',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Oral Cavity Squamous Cell Carcinoma',
    subtitle: 'European Manual — Principles',
    lines: [
      { text: 'Tongue (anterior 2/3) is the most common subsite', highlight: true },
      { text: 'Risk factors: tobacco, alcohol, betel nut, chronic irritation, lichen planus' },
      { text: 'Depth of invasion (DOI) is the most important prognostic factor in TNM 8th edition', highlight: true },
      { text: 'DOI >4 mm: significantly increased risk of occult nodal metastasis' },
      { text: 'Primary treatment is surgical: wide excision with ≥1 cm mucosal margins' },
      { text: 'Elective neck dissection (I–III or I–IV) recommended for T2+ or DOI >4 mm', highlight: true },
      { text: 'Adjuvant RT ± chemo for adverse features: positive margins, ENE, pN2+, PNI, LVI' },
    ],
  },

  {
    id: 'eur-hn-doi-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'According to TNM 8th edition, a 3 cm oral tongue SCC with a depth of invasion of 12 mm is staged as:',
    options: [
      { label: 'A', text: 'T2' },
      { label: 'B', text: 'T3' },
      { label: 'C', text: 'T4a' },
      { label: 'D', text: 'T1' },
    ],
    correctIndex: 1,
    explanation: 'TNM 8th edition oral cavity T staging: T1 ≤2 cm AND DOI ≤5 mm; T2 ≤2 cm with DOI >5–10 mm OR >2–4 cm with DOI ≤10 mm; T3 >4 cm OR any tumour with DOI >10 mm; T4 invades adjacent structures. Here: 3 cm size = T2, but DOI 12 mm (>10 mm) upgrades to T3. DOI is the key change in the 8th edition and takes precedence.',
  },

  {
    id: 'eur-hn-neck-dissection-types',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Neck Dissection Classification',
    steps: [
      { title: 'Radical Neck Dissection (RND)', detail: 'Removal of lymph node levels I–V with sacrifice of the spinal accessory nerve (CN XI), internal jugular vein (IJV), and sternocleidomastoid (SCM). Historical gold standard, now rarely performed.' },
      { title: 'Modified Radical (MRND)', detail: 'Levels I–V with preservation of one or more non-lymphatic structures: Type I preserves CN XI; Type II preserves CN XI + IJV; Type III preserves CN XI + IJV + SCM (= functional neck dissection).' },
      { title: 'Selective Neck Dissection (SND)', detail: 'Removes specific levels based on primary site drainage pattern. Preserves CN XI, IJV, and SCM. Examples: supraomohyoid (I–III), lateral (II–IV), posterolateral (II–V), central (VI).' },
      { title: 'Extended Neck Dissection', detail: 'Removal of additional lymph node groups (retropharyngeal, paratracheal, mediastinal) or non-lymphatic structures (carotid artery, hypoglossal nerve, skin) beyond the standard RND.' },
      { title: 'Sentinel Lymph Node Biopsy', detail: 'Emerging for early (T1–T2 N0) oral cavity cancer. Identifies the first draining node with radiocolloid ± blue dye. May avoid elective neck dissection if negative. Recommended in European guidelines for centres with expertise.' },
    ],
  },

  {
    id: 'eur-hn-selective-nd-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'A supraomohyoid neck dissection removes lymph node levels ___ and is typically performed for oral cavity cancer.',
    blankWord: 'I–III',
    options: ['I–III', 'II–IV', 'I–V', 'II–V'],
  },

  // ─── NASOPHARYNGEAL CARCINOMA ───────────────────────────────────────

  {
    id: 'eur-hn-nasopharynx-ca',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Nasopharyngeal Carcinoma (NPC)',
    subtitle: 'European Manual — EBV-Associated',
    lines: [
      { text: 'Strong association with Epstein-Barr virus (EBV) — plasma EBV DNA used for monitoring', highlight: true },
      { text: 'WHO Type III (undifferentiated) is the most common form and most EBV-associated' },
      { text: 'Endemic in Southern China, Southeast Asia, and North Africa' },
      { text: 'Arises from the fossa of Rosenmüller (pharyngeal recess)', highlight: true },
      { text: 'Often presents late with a neck mass (70–80% have nodal disease at presentation)' },
      { text: 'Cranial nerve involvement: CN V and VI most common (cavernous sinus invasion)' },
      { text: 'Primary treatment is radiotherapy ± concurrent chemotherapy (NOT surgery)', highlight: true },
    ],
    footnote: 'EBV plasma DNA is a powerful biomarker for diagnosis, monitoring treatment response, and detecting recurrence.',
  },

  {
    id: 'eur-hn-npc-treatment-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'What is the primary treatment modality for nasopharyngeal carcinoma?',
    options: [
      { label: 'A', text: 'Surgery with adjuvant radiation' },
      { label: 'B', text: 'Concurrent chemoradiotherapy' },
      { label: 'C', text: 'Chemotherapy alone' },
      { label: 'D', text: 'Surgery alone' },
    ],
    correctIndex: 1,
    explanation: 'NPC is exquisitely radiosensitive and the nasopharynx is surgically inaccessible. Concurrent chemoradiotherapy (cisplatin-based) is the standard treatment for locoregionally advanced NPC (stage II–IVA). Early stage (T1N0) may be treated with radiotherapy alone. Surgery is reserved for residual/recurrent disease (nasopharyngectomy or neck dissection for persistent nodes).',
  },

  // ─── HYPOPHARYNGEAL CANCER ──────────────────────────────────────────

  {
    id: 'eur-hn-hypopharynx-ca',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Hypopharyngeal Carcinoma',
    subtitle: 'European Manual — Worst Prognosis in H&N',
    lines: [
      { text: 'Pyriform sinus is the most common subsite (~70%)', highlight: true },
      { text: 'Late presentation — often advanced stage at diagnosis (stage III/IV in >75%)' },
      { text: 'High rate of submucosal spread and skip lesions' },
      { text: 'Associated with second primary oesophageal cancer (10–15%) — always panendoscope', highlight: true },
      { text: 'Risk factors: heavy alcohol + tobacco (strongest synergy in H&N)' },
      { text: 'Worst prognosis of all mucosal H&N sites — 5-year OS ~30–35%', highlight: true },
      { text: 'Treatment: organ preservation (chemo-RT) for responders, or surgery (pharyngolaryngectomy) + reconstruction' },
    ],
  },

  {
    id: 'eur-hn-plummer-vinson-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Plummer-Vinson (Paterson-Kelly) syndrome is characterised by iron-deficiency anaemia, dysphagia, and oesophageal webs. It is a risk factor for carcinoma of which site?',
    options: [
      { label: 'A', text: 'Oropharynx' },
      { label: 'B', text: 'Post-cricoid region (hypopharynx)' },
      { label: 'C', text: 'Larynx' },
      { label: 'D', text: 'Oral cavity' },
    ],
    correctIndex: 1,
    explanation: 'Plummer-Vinson (Paterson-Kelly) syndrome consists of iron-deficiency anaemia, dysphagia (from oesophageal/post-cricoid webs), and glossitis. It is a pre-malignant condition specifically associated with post-cricoid squamous cell carcinoma. More common in women (Northern Europe/Scandinavia). Treatment includes iron supplementation and endoscopic web dilatation, with surveillance for malignancy.',
  },

  // ─── DEEP NECK SPACE INFECTIONS ─────────────────────────────────────

  {
    id: 'eur-hn-deep-neck-spaces',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Deep Neck Space Infections',
    subtitle: 'European Manual — Fascial Spaces',
    lines: [
      { text: 'Most common cause: odontogenic infection (dental abscess, 2nd/3rd molars)', highlight: true },
      { text: 'Peritonsillar abscess (quinsy) is the most common deep space abscess overall' },
      { text: 'Submandibular space: Ludwig angina — bilateral floor-of-mouth cellulitis, airway emergency', highlight: true },
      { text: 'Parapharyngeal space: central compartment — can be displaced medially (seen as oropharyngeal bulge)' },
      { text: 'Retropharyngeal space: danger space extends from skull base to posterior mediastinum', highlight: true },
      { text: 'Descending necrotising mediastinitis: life-threatening complication (mortality 20–40%)' },
      { text: 'CT with contrast is the imaging modality of choice — ring enhancement = abscess' },
    ],
    footnote: 'Airway management is the FIRST priority. Always secure the airway before any other intervention in deep neck infections.',
  },

  {
    id: 'eur-hn-ludwig-angina-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Ludwig angina involves bilateral infection of which neck spaces?',
    options: [
      { label: 'A', text: 'Parapharyngeal and retropharyngeal' },
      { label: 'B', text: 'Sublingual, submental, and submandibular' },
      { label: 'C', text: 'Pretracheal and prevertebral' },
      { label: 'D', text: 'Peritonsillar and masticator' },
    ],
    correctIndex: 1,
    explanation: 'Ludwig angina is a rapidly progressive, bilateral cellulitis (not typically an abscess) of the sublingual, submental, and submandibular spaces. It causes brawny induration of the floor of mouth, tongue elevation, drooling, and potential airway obstruction. Most commonly odontogenic in origin (2nd/3rd mandibular molars). Treatment: secure airway, IV antibiotics, surgical drainage if fluctuant. Mortality was >50% pre-antibiotics.',
  },

  {
    id: 'eur-hn-peritonsillar-abscess-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What are the classic clinical features and treatment of a peritonsillar abscess (quinsy)?',
    back: 'Clinical features:\n• Severe unilateral sore throat and odynophagia\n• Trismus (pterygoid muscle irritation)\n• "Hot potato" muffled voice\n• Uvular deviation AWAY from the affected side\n• Bulging soft palate with fluctuance\n\nTreatment:\n• Needle aspiration or incision & drainage\n• IV antibiotics (amoxicillin-clavulanate or clindamycin)\n• Consider interval tonsillectomy if recurrent',
  },

  {
    id: 'eur-hn-lemierre-syndrome',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: "What is Lemierre syndrome?",
    back: "Septic thrombophlebitis of the internal jugular vein following an oropharyngeal infection.\n\nCausative organism: Fusobacterium necrophorum (obligate anaerobe)\n\nClassic presentation:\n• Young patient with recent pharyngitis/peritonsillar abscess\n• High spiking fevers, rigors, neck pain/swelling\n• Septic pulmonary emboli (bilateral lung infiltrates)\n• IJV thrombosis on CT/US\n\nTreatment: prolonged IV antibiotics (beta-lactam + metronidazole), anticoagulation (controversial), IJV ligation if refractory",
    bonus: 'Known as the "forgotten disease" — re-emerging due to restrictive antibiotic prescribing for pharyngitis.',
  },

  // ─── CONGENITAL NECK MASSES ─────────────────────────────────────────

  {
    id: 'eur-hn-branchial-cleft-cyst',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Branchial Cleft Anomalies',
    subtitle: 'European Manual — Congenital',
    lines: [
      { text: '2nd branchial cleft anomaly is the most common (95%)', highlight: true },
      { text: '2nd cleft cyst: anterior border of SCM, at junction of upper and middle thirds' },
      { text: '2nd cleft fistula tract: from tonsillar fossa → between ICA and ECA → to anterior SCM', highlight: true },
      { text: '1st branchial cleft: periauricular/upper neck — Type I (duplication of EAC), Type II (angle of mandible to EAC)' },
      { text: '3rd/4th branchial: rare, left-sided predominance, may present as recurrent thyroiditis or pyriform sinus abscess', highlight: true },
      { text: 'Treatment: complete surgical excision of the cyst/tract to prevent recurrence and infection' },
    ],
    footnote: 'In adults >40 years, a cystic lateral neck mass should be considered metastatic SCC (often HPV+ oropharynx) until proven otherwise — NOT a branchial cleft cyst.',
  },

  {
    id: 'eur-hn-2nd-branchial-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A 2nd branchial cleft fistula tract passes between which two vascular structures?',
    options: [
      { label: 'A', text: 'Internal and external jugular veins' },
      { label: 'B', text: 'Internal and external carotid arteries' },
      { label: 'C', text: 'Common carotid artery and internal jugular vein' },
      { label: 'D', text: 'Vertebral and subclavian arteries' },
    ],
    correctIndex: 1,
    explanation: 'The 2nd branchial cleft fistula tract runs from the skin at the anterior border of SCM, through the platysma, between the ICA and ECA (internal and external carotid arteries), over CN XII and CN IX, to open into the tonsillar fossa. This embryological course mirrors the path of the 2nd pharyngeal arch.',
  },

  {
    id: 'eur-hn-cystic-hygroma-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What is a cystic hygroma (lymphatic malformation) and how does it present?',
    back: 'A congenital lymphatic malformation — most common lymphatic anomaly of the head and neck.\n\n• 90% present by age 2\n• Most common location: posterior triangle of the neck (75%)\n• Soft, compressible, transilluminant mass\n• Can enlarge dramatically with URTI\n• Macrocystic, microcystic, or mixed\n\nTreatment:\n• Macrocystic: sclerotherapy (OK-432/doxycycline/bleomycin) or surgery\n• Microcystic: surgical excision (poor response to sclerotherapy)\n• Associated with Turner syndrome and other chromosomal abnormalities',
  },

  // ─── ANATOMY ────────────────────────────────────────────────────────

  {
    id: 'eur-hn-neck-triangles-eur',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Neck Triangles',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Anterior Triangle', x: 38, y: 45, description: 'Bounded by midline, mandible, and SCM. Contains: submandibular, submental, carotid, and muscular triangles. Key contents: carotid vessels, CN VII, XII, thyroid, larynx.' },
      { name: 'Posterior Triangle', x: 75, y: 55, description: 'Bounded by SCM, trapezius, and clavicle. Contains: CN XI (spinal accessory), cervical plexus, brachial plexus trunks, subclavian artery, transverse cervical vessels.' },
      { name: 'Carotid Triangle', x: 35, y: 48, description: 'Within the anterior triangle. Bounded by SCM, posterior digastric, superior omohyoid. Contains carotid bifurcation at C3-C4 level, CN X, CN XII, superior laryngeal nerve.' },
      { name: 'Digastric Muscle', x: 42, y: 30, description: 'Anterior and posterior bellies connected by intermediate tendon through hyoid. Key landmark dividing submandibular from submental triangles.' },
      { name: 'Omohyoid Muscle', x: 55, y: 68, description: 'Inferior belly crosses the posterior triangle. Divides posterior triangle into occipital (above) and supraclavicular/subclavian (below) triangles.' },
    ],
  },

  {
    id: 'eur-hn-neck-fascial-eur',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Deep Cervical Fascia',
    subtitle: 'Tap layers to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Superficial (Investing) Layer', x: 50, y: 12, description: 'Surrounds the entire neck. Splits to enclose SCM, trapezius, parotid, and submandibular glands. Attaches to hyoid, mandible, mastoid, and spine of scapula.' },
      { name: 'Middle (Visceral) Layer', x: 50, y: 35, description: 'Pretracheal fascia: encloses thyroid, trachea, oesophagus, pharynx. Buccopharyngeal fascia is its posterior component. Contains the recurrent laryngeal nerves.' },
      { name: 'Deep (Prevertebral) Layer', x: 50, y: 85, description: 'Covers prevertebral muscles, scalenes, vertebral column. Alar fascia is an anterior subdivision creating the "danger space" between alar and prevertebral layers — extends to the diaphragm.' },
      { name: 'Carotid Sheath', x: 25, y: 50, description: 'Contributions from all 3 deep fascial layers. Contains CCA/ICA, IJV (lateral), CN X (posterior, between artery and vein), deep cervical lymph nodes, and ansa cervicalis (embedded in anterior wall).' },
      { name: 'Retropharyngeal Space', x: 50, y: 60, description: 'Between the buccopharyngeal fascia (anterior) and alar fascia (posterior). Extends from skull base to T1-T2. Infections here can spread to the mediastinum via the danger space.' },
    ],
  },

  // ─── LARYNGEAL CANCER ────────────────────────────────────────────────

  {
    id: 'eur-hn-laryngeal-ca-subsites',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Laryngeal Carcinoma — Subsites',
    subtitle: 'European Manual — Glottic vs Supraglottic',
    lines: [
      { text: 'Glottic (60–65%): most common subsite; presents early with hoarseness', highlight: true },
      { text: 'Glottic: sparse lymphatic drainage — nodal mets rare (<5% for T1/T2)', highlight: true },
      { text: 'Supraglottic (30–35%): rich lymphatic drainage — bilateral nodal mets common (25–50%)' },
      { text: 'Supraglottic: presents later — sore throat, odynophagia, referred otalgia, neck mass' },
      { text: 'Subglottic (<5%): rare, presents with stridor; drains to paratracheal nodes (level VI)' },
      { text: 'T1a glottic: involves one vocal cord; T1b: involves both cords' },
      { text: 'Organ preservation with RT is first-line for early glottic cancer (T1–T2)', highlight: true },
    ],
  },

  {
    id: 'eur-hn-early-glottic-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'What is the preferred treatment for T1N0 glottic squamous cell carcinoma?',
    options: [
      { label: 'A', text: 'Total laryngectomy' },
      { label: 'B', text: 'Radiotherapy alone' },
      { label: 'C', text: 'Concurrent chemoradiotherapy' },
      { label: 'D', text: 'Transoral robotic surgery' },
    ],
    correctIndex: 1,
    explanation: 'T1N0 glottic SCC has excellent cure rates (>90%) with either radiotherapy alone or transoral laser microsurgery (TLM). Radiotherapy is often preferred as it preserves voice quality. TLM is an equivalent alternative. Total laryngectomy is reserved for advanced or recurrent disease. Concurrent chemoRT is used for organ preservation in T3–T4a laryngeal cancers (VA Laryngeal Cancer Study, RTOG 91-11).',
  },

  {
    id: 'eur-hn-organ-preservation-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is the evidence for organ preservation in advanced laryngeal cancer?',
    back: 'VA Laryngeal Cancer Study (1991):\n• Induction cisplatin/5-FU + RT vs total laryngectomy + RT\n• Equal overall survival; 64% larynx preservation\n\nRTOG 91-11 (2003):\n• Concurrent cisplatin + RT was SUPERIOR to induction chemo + RT and RT alone for larynx preservation\n• Concurrent chemoRT is the standard for organ preservation\n\nIndications: T3–T4a (no cartilage invasion through to soft tissues) laryngeal/hypopharyngeal SCC\n\nContraindications: T4b disease, laryngeal cartilage destruction, airway compromise requiring tracheostomy',
    bonus: 'Salvage total laryngectomy is needed in 15–30% after chemoRT failure. Higher complication rate (pharyngocutaneous fistula) than primary surgery.',
  },

  {
    id: 'eur-hn-total-laryngectomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Total Laryngectomy — Key Steps',
    steps: [
      { title: 'Tracheostomy', detail: 'If not already present, perform tracheostomy first. This becomes the permanent stoma.' },
      { title: 'Neck Dissection', detail: 'Bilateral selective (II–IV) or modified radical neck dissection as indicated. Typically performed before laryngectomy.' },
      { title: 'Laryngeal Skeleton Release', detail: 'Divide infrahyoid strap muscles. Release the larynx from the hyoid superiorly. Enter the pharynx — either above the hyoid (suprahyoid pharyngotomy) or through the vallecula.' },
      { title: 'Pharyngeal Entry & Mucosal Cuts', detail: 'Divide the pharyngeal mucosa under direct vision, ensuring adequate margins. Separate the larynx from the pharynx/oesophagus posteriorly (party wall). Divide the trachea at an appropriate level.' },
      { title: 'Tracheoesophageal Puncture', detail: 'Primary TEP placement at time of laryngectomy. Create a puncture between the posterior tracheal wall and anterior oesophageal wall. Insert a voice prosthesis (e.g. Provox).' },
      { title: 'Pharyngeal Closure & Stoma', detail: 'Close the pharynx (neopharynx) in a T-shape or linear fashion. Maturate the permanent tracheostoma. Ensure watertight closure to prevent pharyngocutaneous fistula (most common complication).' },
    ],
  },

  {
    id: 'eur-hn-voice-rehab-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'After total laryngectomy, the gold standard for voice rehabilitation is a ___ with voice prosthesis.',
    blankWord: 'tracheoesophageal puncture',
    options: ['tracheoesophageal puncture', 'electrolarynx', 'oesophageal speech', 'laryngeal transplant'],
  },

  // ─── UNKNOWN PRIMARY ────────────────────────────────────────────────

  {
    id: 'eur-hn-unknown-primary',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Cancer of Unknown Primary (CUP)',
    subtitle: 'European Manual — Neck Mass Workup',
    lines: [
      { text: 'Definition: metastatic cervical SCC with no identifiable mucosal primary after workup', highlight: true },
      { text: 'Workup: flexible nasolaryngoscopy, CT/MRI neck, PET-CT (detects primary in 25–30%)', highlight: true },
      { text: 'EUA with directed biopsies: bilateral tonsillectomy + tongue base biopsy/mucosectomy' },
      { text: 'p16/HPV testing of the node: if positive, primary is almost certainly oropharyngeal (tonsil/BOT)' },
      { text: 'EBV testing: if positive, likely nasopharyngeal primary' },
      { text: 'PET-CT has the highest sensitivity for identifying occult primaries (~25–30%)', highlight: true },
      { text: 'Treatment: neck dissection + RT to bilateral neck ± likely mucosal sites' },
    ],
    footnote: 'NEVER perform an open/excisional biopsy of a neck mass as the first step — always FNA first. Open biopsy increases local recurrence and complicates definitive treatment.',
  },

  {
    id: 'eur-hn-neck-mass-fna-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A 55-year-old smoker presents with a 4 cm non-tender lateral neck mass. What is the most appropriate first investigation?',
    options: [
      { label: 'A', text: 'Excisional biopsy' },
      { label: 'B', text: 'Ultrasound-guided fine needle aspiration cytology' },
      { label: 'C', text: 'CT with contrast' },
      { label: 'D', text: 'PET-CT' },
    ],
    correctIndex: 1,
    explanation: 'In an adult with a suspicious lateral neck mass, ultrasound-guided FNA is the first-line investigation. It is quick, minimally invasive, and has high sensitivity/specificity for SCC and lymphoma. Open/excisional biopsy should be avoided initially as it can seed the surgical bed and compromise future neck dissection planes. Cross-sectional imaging (CT/MRI) and PET-CT are obtained after cytological diagnosis to stage the disease.',
  },

  // ─── RECONSTRUCTION ─────────────────────────────────────────────────

  {
    id: 'eur-hn-reconstructive-ladder',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Head & Neck Reconstruction Principles',
    subtitle: 'European Manual — Reconstructive Ladder',
    lines: [
      { text: 'Primary closure: small defects with adequate tissue laxity' },
      { text: 'Skin grafts (split or full thickness): superficial defects, e.g. scalp, oral cavity' },
      { text: 'Local flaps: nasolabial, submental, cervicofacial advancement/rotation', highlight: true },
      { text: 'Regional pedicled flaps: pectoralis major (workhorse), latissimus dorsi, deltopectoral' },
      { text: 'Free microvascular flaps: radial forearm (RFFF), anterolateral thigh (ALT), fibula', highlight: true },
      { text: 'Radial forearm: thin, pliable — ideal for oral cavity and oropharynx reconstruction' },
      { text: 'Fibula free flap: gold standard for mandibular reconstruction (up to 25 cm bone)', highlight: true },
    ],
  },

  {
    id: 'eur-hn-radial-forearm-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which free flap is most commonly used for soft tissue reconstruction of oral cavity defects after oncological resection?',
    options: [
      { label: 'A', text: 'Fibula free flap' },
      { label: 'B', text: 'Radial forearm free flap (RFFF)' },
      { label: 'C', text: 'Anterolateral thigh (ALT) flap' },
      { label: 'D', text: 'Scapula free flap' },
    ],
    correctIndex: 1,
    explanation: 'The radial forearm free flap (RFFF) is the workhorse for oral cavity soft tissue reconstruction. Advantages: thin and pliable (conforms to oral cavity contours), reliable vascular pedicle (radial artery and venae comitantes), long pedicle length, and can be harvested simultaneously with tumour resection. Requires pre-operative Allen test to confirm adequate ulnar artery perfusion to the hand.',
  },

  {
    id: 'eur-hn-fibula-flap-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The ___ free flap is the gold standard for segmental mandibular reconstruction, providing up to 25 cm of vascularised bone.',
    blankWord: 'fibula',
    options: ['fibula', 'scapula', 'iliac crest', 'radial forearm'],
  },

  {
    id: 'eur-hn-pectoralis-major-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the key features of the pectoralis major myocutaneous (PMMC) flap in head and neck surgery?',
    back: 'Type: regional pedicled flap\nBlood supply: pectoral branch of the thoracoacromial artery\n\nAdvantages:\n• Reliable, quick to harvest\n• Does not require microvascular expertise\n• Workhorse pedicled flap for salvage/emergency\n\nIndications:\n• Pharyngeal/oesophageal defects\n• Oral cavity (bulky defects)\n• Coverage of exposed great vessels\n• Salvage after free flap failure\n\nLimitations: bulky, limited reach above zygomatic arch, donor site morbidity (shoulder weakness, cosmesis)',
  },

  // ─── SKIN CANCER — HEAD & NECK ──────────────────────────────────────

  {
    id: 'eur-hn-cutaneous-scc',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Cutaneous SCC of the Head & Neck',
    subtitle: 'European Manual — High-Risk Features',
    lines: [
      { text: 'Second most common skin cancer; most occur on sun-exposed head/neck skin' },
      { text: 'High-risk features: >2 cm, >4 mm depth, perineural invasion, poor differentiation', highlight: true },
      { text: 'Immunosuppression (transplant recipients): 65–250x increased risk', highlight: true },
      { text: 'Desmoplastic subtype: high rate of perineural invasion and local recurrence' },
      { text: 'Parotid nodes: first echelon drainage for anterior scalp, temple, and ear skin' },
      { text: 'Treatment: wide excision (4–6 mm margins) or Mohs micrographic surgery', highlight: true },
      { text: 'High-risk: consider adjuvant RT and/or parotidectomy + neck dissection' },
    ],
  },

  {
    id: 'eur-hn-melanoma-staging-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'According to AJCC 8th edition, what is the most important prognostic factor for primary cutaneous melanoma?',
    options: [
      { label: 'A', text: 'Clark level of invasion' },
      { label: 'B', text: 'Breslow thickness' },
      { label: 'C', text: 'Tumour diameter' },
      { label: 'D', text: 'Histological subtype' },
    ],
    correctIndex: 1,
    explanation: 'Breslow thickness (measured in mm from the granular layer to the deepest tumour cell) is the single most important prognostic factor in primary melanoma and determines the T classification. Other prognostic factors include ulceration (upstages T) and mitotic rate. Clark level (anatomical depth of invasion) is no longer part of the AJCC staging. Sentinel lymph node biopsy is recommended for melanomas ≥0.8 mm thickness or with ulceration.',
  },

  {
    id: 'eur-hn-melanoma-margins-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the recommended excision margins for cutaneous melanoma by Breslow thickness?',
    back: 'European/NCCN guidelines:\n\n• In situ: 5 mm margin\n• ≤1.0 mm: 1 cm margin\n• 1.01–2.0 mm: 1–2 cm margin\n• >2.0 mm: 2 cm margin\n\nSentinel lymph node biopsy (SLNB):\n• Recommended for ≥0.8 mm or any thickness with ulceration\n• Provides staging information (most powerful predictor of recurrence)\n• Therapeutic benefit controversial but standard of care',
    bonus: 'On the head and neck, achieving 2 cm margins can be challenging. Mohs or modified Mohs (slow Mohs / staged excision) with margin control may be used for lentigo maligna on the face.',
  },

  // ─── NECK TRAUMA ────────────────────────────────────────────────────

  {
    id: 'eur-hn-neck-trauma-zones',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Penetrating Neck Trauma — Zones',
    subtitle: 'European Manual — Roon & Christensen Classification',
    lines: [
      { text: 'Zone I: clavicle/sternal notch to cricoid cartilage — subclavian vessels, thoracic duct, lung apex', highlight: true },
      { text: 'Zone II: cricoid to angle of mandible — carotid, jugular, pharynx, larynx, oesophagus', highlight: true },
      { text: 'Zone III: angle of mandible to skull base — distal ICA, vertebral artery, CN IX–XII', highlight: true },
      { text: 'Zone II: historically managed with mandatory exploration if platysma breached' },
      { text: 'Current approach: selective management with CTA for stable patients in all zones' },
      { text: 'Hard signs (active bleeding, expanding haematoma, air bubbling, shock): immediate surgical exploration' },
    ],
    footnote: 'CT angiography has replaced mandatory surgical exploration for stable Zone II injuries and allows non-operative management of many Zone I and III injuries.',
  },

  {
    id: 'eur-hn-zone-ii-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A patient with a stab wound to Zone II of the neck has an expanding haematoma and stridor. What is the immediate management?',
    options: [
      { label: 'A', text: 'CT angiography of the neck' },
      { label: 'B', text: 'Observation and serial examination' },
      { label: 'C', text: 'Immediate surgical exploration' },
      { label: 'D', text: 'Flexible nasolaryngoscopy' },
    ],
    correctIndex: 2,
    explanation: 'The presence of "hard signs" — expanding haematoma, active haemorrhage, airway compromise (stridor), air bubbling through the wound, haematemesis, or haemoptysis — mandates immediate surgical exploration regardless of the zone. CT angiography and selective management are only appropriate for stable patients without hard signs. The airway should be secured first (intubation or surgical airway).',
  },

  {
    id: 'eur-hn-laryngeal-fracture-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'How is blunt laryngeal trauma classified (Schaefer-Fuhrman)?',
    back: 'Group 1: Minor endolaryngeal haematoma/laceration, no fracture → observation, humidification, voice rest\n\nGroup 2: Oedema, haematoma, minor mucosal disruption without exposed cartilage, non-displaced fracture → direct laryngoscopy, may need tracheostomy\n\nGroup 3: Massive oedema, mucosal tears with exposed cartilage, displaced fractures, vocal cord immobility → tracheostomy + open exploration/repair\n\nGroup 4: Group 3 + severe disruption, 2+ fracture lines, anterior commissure disruption → tracheostomy + open repair with stent placement\n\nGroup 5: Complete laryngotracheal separation → emergency tracheostomy + open repair',
  },

  // ─── IMAGING & WORKUP ──────────────────────────────────────────────

  {
    id: 'eur-hn-pet-ct-indications',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'PET-CT in Head & Neck Cancer',
    subtitle: 'European Manual — Key Indications',
    lines: [
      { text: 'Staging: N2b+ nodal disease, advanced primary (T3–T4), unknown primary', highlight: true },
      { text: 'Detects distant metastases and synchronous second primaries (3–5%)' },
      { text: 'Unknown primary: identifies occult mucosal primary in 25–30% of cases', highlight: true },
      { text: 'Post-treatment surveillance: 12-week post-RT PET-CT to assess response' },
      { text: 'Negative predictive value of post-treatment PET-CT: >95% (avoids unnecessary neck dissection)', highlight: true },
      { text: 'False positives: inflammation, infection, post-RT changes, brown fat uptake' },
      { text: 'False negatives: small/necrotic nodes, mucinous tumours, tumours <8 mm' },
    ],
  },

  {
    id: 'eur-hn-post-rt-pet-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'After completing chemoradiotherapy for oropharyngeal SCC, when should a response-assessment PET-CT be performed?',
    options: [
      { label: 'A', text: '2 weeks post-treatment' },
      { label: 'B', text: '12 weeks post-treatment' },
      { label: 'C', text: '6 months post-treatment' },
      { label: 'D', text: '12 months post-treatment' },
    ],
    correctIndex: 1,
    explanation: 'Response-assessment PET-CT should be performed at 12 weeks (3 months) after completing chemoradiotherapy. Scanning too early (<10 weeks) leads to high false-positive rates due to post-radiation inflammation. The PET-CT at 12 weeks has an excellent negative predictive value (>95%) — a negative scan in the neck can spare patients a planned neck dissection (PET-Neck trial). A positive or equivocal scan warrants neck dissection or close surveillance with repeat imaging.',
  },

  // ─── RADIOTHERAPY PRINCIPLES ────────────────────────────────────────

  {
    id: 'eur-hn-radiotherapy-principles',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Radiotherapy in Head & Neck Cancer',
    subtitle: 'European Manual — Key Concepts',
    lines: [
      { text: 'IMRT (intensity-modulated RT) is the standard technique — reduces xerostomia by sparing parotids', highlight: true },
      { text: 'Radical RT dose: 66–70 Gy in 33–35 fractions over 6–7 weeks' },
      { text: 'Concurrent cisplatin (100 mg/m² q3 weeks × 3 cycles) improves locoregional control by 6–8%', highlight: true },
      { text: 'Cetuximab (anti-EGFR): alternative to cisplatin in unfit patients (Bonner trial)' },
      { text: 'Acute toxicities: mucositis, dermatitis, dysphagia, xerostomia, weight loss' },
      { text: 'Late toxicities: osteoradionecrosis, fibrosis, hypothyroidism, dysphagia, xerostomia', highlight: true },
      { text: 'Pre-RT dental assessment mandatory — extract teeth with poor prognosis in the radiation field' },
    ],
    footnote: 'Hyperbaric oxygen or pentoxifylline/vitamin E (PENTOCLO) may be used for osteoradionecrosis prevention and treatment.',
  },

  {
    id: 'eur-hn-osteoradionecrosis-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is osteoradionecrosis (ORN) and how is it managed?',
    back: 'Definition: non-healing, exposed, irradiated bone (typically mandible) that fails to heal over 3 months, without tumour recurrence.\n\nPathophysiology: radiation-induced hypoxia, hypovascularity, and hypocellularity of bone.\n\nRisk factors: RT dose >60 Gy, dental extractions post-RT, mandible > maxilla, poor oral hygiene\n\nManagement:\n• Conservative: oral hygiene, debridement, antibiotics, pentoxifylline + vitamin E (PENTOCLO protocol)\n• Hyperbaric oxygen (HBO): controversial, Marx protocol (20 dives pre-op, 10 post-op)\n• Surgery: sequestrectomy, segmental mandibulectomy + free flap reconstruction for advanced cases',
    bonus: 'Prevention: dental assessment BEFORE RT, extraction of at-risk teeth ≥14 days pre-RT, fluoride trays for remaining teeth, lifelong dental follow-up.',
  },

  // ─── IMMUNOTHERAPY ──────────────────────────────────────────────────

  {
    id: 'eur-hn-immunotherapy',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Immunotherapy in Head & Neck Cancer',
    subtitle: 'European Manual — Checkpoint Inhibitors',
    lines: [
      { text: 'Nivolumab and pembrolizumab: anti-PD-1 antibodies approved for recurrent/metastatic H&N SCC', highlight: true },
      { text: 'CheckMate 141 (nivolumab): improved OS vs standard chemo in platinum-refractory R/M HNSCC' },
      { text: 'KEYNOTE-048 (pembrolizumab): first-line for R/M HNSCC with CPS ≥1', highlight: true },
      { text: 'CPS (Combined Positive Score): PD-L1 expression in tumour + immune cells — predicts response' },
      { text: 'Pembrolizumab ± chemotherapy is now the preferred first-line for R/M HNSCC', highlight: true },
      { text: 'Response rate: ~15–20% for monotherapy, but durable responses in responders' },
      { text: 'Immune-related adverse events: thyroiditis, pneumonitis, hepatitis, colitis, dermatitis' },
    ],
  },

  {
    id: 'eur-hn-pembrolizumab-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Which biomarker determines eligibility for first-line pembrolizumab monotherapy in recurrent/metastatic head and neck squamous cell carcinoma (KEYNOTE-048)?',
    options: [
      { label: 'A', text: 'p16 positivity' },
      { label: 'B', text: 'PD-L1 Combined Positive Score (CPS) ≥1' },
      { label: 'C', text: 'EGFR overexpression' },
      { label: 'D', text: 'Tumour mutational burden (TMB)' },
    ],
    correctIndex: 1,
    explanation: 'KEYNOTE-048 established pembrolizumab as first-line treatment for R/M HNSCC. Pembrolizumab monotherapy showed OS benefit in patients with PD-L1 CPS ≥1. Pembrolizumab + chemotherapy showed OS benefit regardless of PD-L1 status. CPS is calculated as: (PD-L1+ tumour cells + lymphocytes + macrophages) / total viable tumour cells × 100. CPS ≥20 is associated with the greatest benefit from monotherapy.',
  },

  // ─── THYROID CANCER — ADDITIONAL ────────────────────────────────────

  {
    id: 'eur-hn-thyroid-surgery-complications',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Thyroid Surgery Complications',
    subtitle: 'European Manual — Key Risks',
    lines: [
      { text: 'Recurrent laryngeal nerve injury: unilateral = hoarseness; bilateral = stridor/airway compromise', highlight: true },
      { text: 'Transient RLN palsy: 5–7%; permanent: 1–2% (higher in reoperations, cancer, retrosternal goitre)' },
      { text: 'Superior laryngeal nerve (external branch) injury: loss of vocal pitch/projection — "easy fatigue" voice', highlight: true },
      { text: 'Hypoparathyroidism: transient 20–30% (total thyroidectomy); permanent 1–4%', highlight: true },
      { text: 'Post-op hypocalcaemia symptoms: perioral tingling, Chvostek sign, Trousseau sign, tetany' },
      { text: 'Haematoma: <2%, but life-threatening — open the wound at bedside if airway is compromised' },
      { text: 'Intraoperative nerve monitoring (IONM) recommended to identify and preserve the RLN' },
    ],
    footnote: 'Chvostek sign: tapping over the facial nerve causes ipsilateral facial muscle twitching. Trousseau sign: BP cuff inflation causes carpal spasm.',
  },

  {
    id: 'eur-hn-bilateral-rln-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient develops stridor and respiratory distress immediately after total thyroidectomy. Bilateral vocal cord paralysis is confirmed. What is the immediate management?',
    options: [
      { label: 'A', text: 'IV calcium gluconate' },
      { label: 'B', text: 'Reintubation or emergency tracheostomy' },
      { label: 'C', text: 'Open wound haematoma at bedside' },
      { label: 'D', text: 'IV dexamethasone and nebulised adrenaline' },
    ],
    correctIndex: 1,
    explanation: 'Bilateral RLN injury causes both vocal cords to assume a paramedian position, resulting in airway obstruction. The immediate priority is securing the airway — reintubation (may be difficult) or emergency tracheostomy/cricothyroidotomy. Post-operative haematoma should also be excluded (open wound at bedside if suspected). IV steroids and adrenaline may temporise mild oedema but are insufficient for bilateral cord paralysis. Subsequent management may include tracheostomy, cordotomy, or arytenoidectomy.',
  },

  {
    id: 'eur-hn-rai-ablation-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'Radioactive ___ (I-131) ablation is used after total thyroidectomy for intermediate- and high-risk differentiated thyroid cancer.',
    blankWord: 'iodine',
    options: ['iodine', 'technetium', 'fluorine', 'gallium'],
  },

  // ─── SALIVARY — ADDITIONAL ──────────────────────────────────────────

  {
    id: 'eur-hn-mucoepidermoid-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'What is the most common malignant tumour of the salivary glands overall?',
    options: [
      { label: 'A', text: 'Adenoid cystic carcinoma' },
      { label: 'B', text: 'Acinic cell carcinoma' },
      { label: 'C', text: 'Mucoepidermoid carcinoma' },
      { label: 'D', text: 'Salivary duct carcinoma' },
    ],
    correctIndex: 2,
    explanation: 'Mucoepidermoid carcinoma (MEC) is the most common salivary gland malignancy overall and the most common malignant parotid tumour. It is graded as low, intermediate, or high grade based on the proportion of mucous, epidermoid, and intermediate cells. Low-grade MEC has an excellent prognosis (>90% survival). High-grade MEC behaves aggressively with nodal/distant metastases. MEC is also the most common salivary malignancy in children and after radiation exposure.',
  },

  {
    id: 'eur-hn-facial-nerve-preservation',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'When should the facial nerve be sacrificed in parotid surgery?',
    back: 'Indications for facial nerve sacrifice:\n\n1. Pre-operative facial nerve palsy (tumour invasion)\n2. Intraoperative finding of nerve directly invaded by tumour\n3. High-grade malignancy inseparable from the nerve\n\nDo NOT sacrifice if:\n• Tumour is adjacent but can be dissected off the nerve\n• Low-grade malignancy with intact nerve function\n\nReconstruction options:\n• Primary neurorrhaphy (direct repair)\n• Cable nerve graft (great auricular or sural nerve)\n• Cross-facial nerve graft\n• Static procedures: gold weight lid loading, fascia lata sling',
  },

  // ─── ORAL CAVITY — ADDITIONAL ─────────────────────────────────────────

  {
    id: 'eur-hn-leukoplakia',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Oral Premalignant Lesions',
    subtitle: 'European Manual — Leukoplakia & Erythroplakia',
    lines: [
      { text: 'Leukoplakia: white patch that cannot be rubbed off or attributed to another cause', highlight: true },
      { text: 'Malignant transformation rate: 3–17% over 10 years' },
      { text: 'Erythroplakia: red velvety patch — carries the HIGHEST dysplasia/malignancy risk (>50%)', highlight: true },
      { text: 'Speckled leukoplakia (mixed red/white) also high risk' },
      { text: 'Oral lichen planus: premalignant potential debated (1–2% transformation)' },
      { text: 'Management: biopsy all suspicious lesions → excision if dysplasia present', highlight: true },
      { text: 'Risk factors: tobacco, alcohol, betel nut, HPV (debated in oral cavity)' },
    ],
  },

  {
    id: 'eur-hn-erythroplakia-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Which oral mucosal lesion has the highest risk of malignant transformation?',
    options: [
      { label: 'A', text: 'Homogeneous leukoplakia' },
      { label: 'B', text: 'Erythroplakia' },
      { label: 'C', text: 'Oral lichen planus' },
      { label: 'D', text: 'Aphthous ulcer' },
    ],
    correctIndex: 1,
    explanation: 'Erythroplakia (red velvety patch) has the highest rate of malignant transformation of all oral premalignant lesions — over 50% harbour severe dysplasia, carcinoma in situ, or invasive carcinoma at the time of biopsy. Homogeneous leukoplakia has a lower risk (3–5%). Oral lichen planus has a small but debated risk (1–2%). Aphthous ulcers are benign.',
  },

  {
    id: 'eur-hn-mandible-invasion-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'How is mandibular involvement assessed in oral cavity cancer and when is mandibulectomy required?',
    back: 'Assessment:\n• OPG (orthopantomogram): screening for gross invasion\n• CT with bone windows: cortical erosion\n• MRI: best for marrow invasion (T1-weighted signal loss)\n\nMarginal mandibulectomy:\n• Tumour abuts but does not invade the mandible\n• Removes the rim/superior border preserving mandibular continuity\n• Requires ≥1 cm of mandibular height remaining\n\nSegmental mandibulectomy:\n• Gross mandibular invasion or invasion through the inferior alveolar canal\n• Creates a continuity defect — requires reconstruction (fibula free flap)',
  },

  // ─── PARAGANGLIOMAS ─────────────────────────────────────────────────

  {
    id: 'eur-hn-paragangliomas',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Head & Neck Paragangliomas',
    subtitle: 'European Manual — Neuroendocrine Tumours',
    lines: [
      { text: 'Arise from paraganglion cells (neural crest origin) — extra-adrenal phaeochromocytomas' },
      { text: 'Carotid body tumour: most common H&N paraganglioma — painless mass at carotid bifurcation', highlight: true },
      { text: 'Lyre sign on angiography: splaying of the ICA and ECA by the tumour', highlight: true },
      { text: 'Glomus jugulare: jugular foramen — pulsatile tinnitus, hearing loss, CN palsies (IX–XII)' },
      { text: 'Glomus tympanicum: middle ear — pulsatile tinnitus, red mass behind TM' },
      { text: 'Glomus vagale: arises from vagal paraganglia — vagus nerve palsy' },
      { text: '10% rule (sporadic): 10% bilateral, 10% malignant, 10% familial → SDH gene testing recommended', highlight: true },
    ],
    footnote: 'SDH gene mutations (SDHB, SDHD): higher rates of bilaterality, malignancy, and extra-adrenal disease. Genetic testing is standard for all H&N paragangliomas.',
  },

  {
    id: 'eur-hn-carotid-body-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 45-year-old presents with a slowly enlarging, non-tender mass at the angle of the mandible that is mobile horizontally but not vertically. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Pleomorphic adenoma of the parotid' },
      { label: 'B', text: 'Branchial cleft cyst' },
      { label: 'C', text: 'Carotid body tumour' },
      { label: 'D', text: 'Reactive lymphadenopathy' },
    ],
    correctIndex: 2,
    explanation: 'The description is classic for a carotid body tumour (Fontaine sign): a mass at the carotid bifurcation that is mobile in the horizontal plane but restricted vertically due to its attachment to the carotid vessels. Confirmed by CTA/MRA showing a hypervascular mass splaying the ICA and ECA (lyre sign). Pre-operative catecholamine screening is recommended. Treatment is surgical excision with careful dissection off the carotid vessels.',
  },

  // ─── RANULA & FLOOR OF MOUTH ────────────────────────────────────────

  {
    id: 'eur-hn-ranula-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What is a ranula and how is it treated?',
    back: 'A ranula is a mucous retention cyst or pseudocyst of the sublingual gland in the floor of mouth.\n\nSimple (oral) ranula:\n• Blue, translucent swelling in the floor of mouth\n• Treatment: marsupialisation or excision with sublingual gland\n\nPlunging ranula:\n• Extends through the mylohyoid muscle into the submandibular space/neck\n• Presents as a neck mass (can mimic cystic hygroma)\n• Treatment: excision of the sublingual gland (source) — transoral approach preferred\n• Recurrence is high with drainage alone; sublingual gland excision is curative',
  },

  // ─── NECK DISSECTION — COMPLICATIONS ────────────────────────────────

  {
    id: 'eur-hn-nd-complications',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Neck Dissection Complications',
    subtitle: 'European Manual — Key Morbidities',
    lines: [
      { text: 'CN XI (spinal accessory nerve) injury: shoulder drop, pain, limited abduction — most disabling complication', highlight: true },
      { text: 'CN XII (hypoglossal) injury: ipsilateral tongue deviation, dysphagia, dysarthria' },
      { text: 'Marginal mandibular nerve (CN VII branch): lower lip weakness — ligate anterior facial vein to protect', highlight: true },
      { text: 'Chyle leak: left side > right; thoracic duct injury in level IV dissection' },
      { text: 'Internal jugular vein injury/ligation: facial oedema, raised ICP if bilateral' },
      { text: 'Phrenic nerve injury (rare): diaphragmatic paralysis — cervical roots C3-C5 in posterior triangle', highlight: true },
      { text: 'Carotid artery blowout: catastrophic; associated with prior RT, wound breakdown, tumour invasion' },
    ],
  },

  {
    id: 'eur-hn-chyle-leak-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'During a left-sided level IV neck dissection, milky fluid is noted in the wound. What is the most appropriate initial management?',
    options: [
      { label: 'A', text: 'Immediate return to theatre for thoracic duct ligation' },
      { label: 'B', text: 'Intraoperative identification and ligation of the thoracic duct' },
      { label: 'C', text: 'Place a pressure dressing and observe' },
      { label: 'D', text: 'Start octreotide infusion' },
    ],
    correctIndex: 1,
    explanation: 'If a chyle leak is identified intraoperatively, the thoracic duct should be ligated immediately at the site of injury (usually near the junction of the left IJV and subclavian vein). If the exact site is unclear, use a Valsalva manoeuvre to identify the leak point. Place clips/sutures and reinforce with tissue glue or a muscle/fat flap. Post-operative chyle leaks are initially managed conservatively (pressure dressing, drain, low-fat/MCT diet or TPN), with surgery reserved for high-output leaks (>500 mL/day) or failure to resolve.',
  },

  {
    id: 'eur-hn-marginal-mandibular-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'The ___ nerve (branch of CN VII) is protected during neck dissection by ligating the facial vein and retracting it superiorly with the submandibular gland.',
    blankWord: 'marginal mandibular',
    options: ['marginal mandibular', 'hypoglossal', 'great auricular', 'lingual'],
  },

  // ─── TNM & STAGING DETAILS ──────────────────────────────────────────

  {
    id: 'eur-hn-n-classification-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What is the N classification for non-HPV head and neck SCC (AJCC 8th edition)?',
    back: 'Clinical N staging:\n\nN0: No regional lymph node metastasis\nN1: Single ipsilateral node ≤3 cm, ENE(–)\nN2a: Single ipsilateral node >3–6 cm, ENE(–)\nN2b: Multiple ipsilateral nodes, none >6 cm, ENE(–)\nN2c: Bilateral or contralateral nodes, none >6 cm, ENE(–)\nN3a: Any node >6 cm, ENE(–)\nN3b: Any node with clinical extranodal extension ENE(+)',
    bonus: 'Key 8th edition change: extranodal extension (ENE) now upstages to N3b regardless of node size. ENE is the single most important adverse prognostic factor in nodal disease and mandates adjuvant chemoRT (not RT alone).',
  },

  {
    id: 'eur-hn-ene-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Pathological extranodal extension (ENE) in a neck dissection specimen mandates which adjuvant treatment?',
    options: [
      { label: 'A', text: 'Radiotherapy alone' },
      { label: 'B', text: 'Concurrent chemoradiotherapy (cisplatin + RT)' },
      { label: 'C', text: 'Chemotherapy alone' },
      { label: 'D', text: 'Observation' },
    ],
    correctIndex: 1,
    explanation: 'Two landmark trials (EORTC 22931 and RTOG 9501) established that concurrent cisplatin + RT (chemoRT) improves locoregional control and overall survival compared to RT alone in patients with high-risk pathological features after surgery. The two absolute indications for adjuvant chemoRT are: 1) positive surgical margins, and 2) extranodal extension (ENE). Other high-risk features (pN2+, PNI, LVI, pT3–4) are treated with adjuvant RT alone.',
  },

  // ─── MISCELLANEOUS H&N ──────────────────────────────────────────────

  {
    id: 'eur-hn-tracheostomy-types',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Tracheostomy — Surgical vs Percutaneous',
    subtitle: 'European Manual — Airway Management',
    lines: [
      { text: 'Surgical: open technique under direct vision — performed in theatre', highlight: true },
      { text: 'Incision between tracheal rings 2–3 or 3–4 (avoid ring 1 — subglottic stenosis risk)' },
      { text: 'Percutaneous dilatational (PDT): Seldinger technique with bronchoscopic guidance — performed at bedside in ICU', highlight: true },
      { text: 'PDT contraindications: paediatric, abnormal anatomy, landmark obesity, coagulopathy, emergency' },
      { text: 'Complications: haemorrhage, pneumothorax, subcutaneous emphysema, tube displacement' },
      { text: 'Late complications: tracheal stenosis (most common long-term), tracheo-innominate fistula (catastrophic)', highlight: true },
      { text: 'Tracheo-innominate fistula: massive haemorrhage — temporise with overinflation of cuff and finger compression' },
    ],
  },

  {
    id: 'eur-hn-tracheostomy-emergency-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient with a tracheostomy has massive arterial haemorrhage from the stoma on post-operative day 14. The most likely source is:',
    options: [
      { label: 'A', text: 'Inferior thyroid artery' },
      { label: 'B', text: 'Tracheo-innominate artery fistula' },
      { label: 'C', text: 'Common carotid artery' },
      { label: 'D', text: 'External jugular vein' },
    ],
    correctIndex: 1,
    explanation: 'Tracheo-innominate (brachiocephalic) artery fistula is a rare but catastrophic complication of tracheostomy, typically occurring 7–21 days post-operatively. Risk factors: low tracheostomy (below ring 4), high-pressure cuff, and pulsatile tracheostomy tube. Emergency management: hyperinflate the cuff to tamponade, place finger through the stoma to compress the artery against the sternum (Utley manoeuvre), and proceed to emergency sternotomy for vessel ligation.',
  },

  {
    id: 'eur-hn-osa-hnscc-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'What is the significance of a sentinel event ("herald bleed") in a post-operative head and neck patient?',
    back: 'A herald bleed is a small-volume arterial haemorrhage that precedes a major carotid blowout (carotid artery rupture).\n\nOccurs in 3–4% of H&N cancer patients, especially with:\n• Prior radiotherapy\n• Wound breakdown / flap necrosis\n• Salivary fistula / exposed vessel\n\nManagement of herald bleed:\n1. Apply direct pressure\n2. Resuscitate (IV fluids, crossmatch blood)\n3. Urgent CT angiography\n4. Endovascular stenting or embolisation\n5. Surgical ligation if endovascular fails\n\nMortality of frank carotid blowout: 40–60%',
  },

  {
    id: 'eur-hn-free-flap-monitoring',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Free Flap Monitoring',
    subtitle: 'European Manual — Post-operative Care',
    lines: [
      { text: 'Flap checks every 1–2 hours for the first 48–72 hours — most critical period', highlight: true },
      { text: 'Clinical assessment: colour, temperature, capillary refill, turgor, Doppler signal' },
      { text: 'Arterial insufficiency: pale, cool flap, no capillary refill, absent Doppler signal', highlight: true },
      { text: 'Venous congestion: blue/purple, swollen, brisk dark bleeding on pin-prick, rapid cap refill', highlight: true },
      { text: 'Venous thrombosis is more common than arterial — most frequent cause of flap failure' },
      { text: 'Implantable Doppler probe: most reliable objective monitor (Cook-Swartz)' },
      { text: 'Re-exploration within 1–2 hours of vascular compromise — salvage rate 50–70%' },
    ],
  },

  {
    id: 'eur-hn-venous-congestion-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Post-operatively, a radial forearm free flap appears dusky blue, swollen, and bleeds dark blood on pinprick. This indicates:',
    options: [
      { label: 'A', text: 'Arterial insufficiency' },
      { label: 'B', text: 'Venous congestion' },
      { label: 'C', text: 'Normal post-operative appearance' },
      { label: 'D', text: 'Haematoma' },
    ],
    correctIndex: 1,
    explanation: 'Venous congestion presents with a blue/purple, turgid flap with brisk dark (deoxygenated) bleeding on pinprick and rapid capillary refill. It is the most common vascular compromise and is caused by venous outflow obstruction (kinking, thrombosis, external compression). Urgent re-exploration is required — the flap can tolerate venous congestion for 1–2 hours before irreversible damage. Arterial insufficiency presents with a pale, cool flap with absent capillary refill.',
  },

  {
    id: 'eur-hn-submandibular-excision',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Submandibular Gland Excision',
    steps: [
      { title: 'Incision', detail: 'Transverse skin crease incision 2 cm below the mandible (to protect the marginal mandibular nerve). Divide platysma.' },
      { title: 'Protect Marginal Mandibular Nerve', detail: 'Identify and ligate the facial vein. Reflect the nerve superiorly with the upper flap — it runs superficial to the facial vein and deep to platysma. Hayes-Martin manoeuvre.' },
      { title: 'Mobilise Gland', detail: 'Incise the capsule along the inferior border. Identify and preserve the hypoglossal nerve (CN XII) deep to the posterior belly of digastric. Identify and ligate the facial artery (passes through or deep to the gland).' },
      { title: 'Divide the Duct', detail: 'Follow Wharton duct anteriorly. Identify the lingual nerve looping under the duct (the duct passes between the lingual nerve laterally and medially — "lingual nerve takes a loop"). Ligate and divide the duct.' },
      { title: 'Specimen Removal & Closure', detail: 'Deliver the gland. Ensure haemostasis. Place a suction drain. Close platysma and skin in layers.' },
    ],
  },

  {
    id: 'eur-hn-wharton-duct-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: "The ___ nerve loops around Wharton's duct twice — first passing lateral, then crossing deep to the duct to lie medially.",
    blankWord: 'lingual',
    options: ['lingual', 'hypoglossal', 'glossopharyngeal', 'inferior alveolar'],
  },

  {
    id: 'eur-hn-panendoscopy-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is a triple endoscopy (panendoscopy) and when is it indicated?',
    back: 'Triple endoscopy:\n1. Direct laryngoscopy + pharyngoscopy\n2. Oesophagoscopy (rigid or flexible)\n3. Bronchoscopy\n\nPerformed under general anaesthesia to:\n• Assess the primary tumour (extent, operability)\n• Obtain biopsies for histological diagnosis\n• Detect synchronous second primary tumours\n\nIndications:\n• All new head & neck mucosal SCC\n• Unknown primary with cervical metastasis\n• Hypopharyngeal cancers (10–15% synchronous oesophageal primaries)\n\nField cancerisation concept: the entire aerodigestive mucosa is at risk from shared carcinogen exposure (tobacco + alcohol)',
    bonus: 'Risk of synchronous second primary: 3–5%. Risk of metachronous second primary: 3–5% per year ("field cancerisation").',
  },

  {
    id: 'eur-hn-field-cancerisation-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The concept of ___ explains why patients with H&N SCC are at risk of synchronous and metachronous second primary tumours throughout the aerodigestive tract.',
    blankWord: 'field cancerisation',
    options: ['field cancerisation', 'tumour heterogeneity', 'clonal expansion', 'metastatic seeding'],
  },

  {
    id: 'eur-hn-dental-assessment-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Before radiotherapy to the head and neck, teeth with poor prognosis in the radiation field should be:',
    options: [
      { label: 'A', text: 'Extracted at least 14 days before starting RT' },
      { label: 'B', text: 'Left in place and treated with root canal therapy' },
      { label: 'C', text: 'Extracted during radiotherapy' },
      { label: 'D', text: 'Extracted 6 months after RT completion' },
    ],
    correctIndex: 0,
    explanation: 'Teeth with poor prognosis within the high-dose radiation field should be extracted at least 14 days (ideally 21 days) before starting RT to allow mucosal healing. Post-RT extractions carry a high risk of osteoradionecrosis (ORN) due to hypovascular, hypoxic, hypocellular bone. If post-RT extraction is unavoidable, use atraumatic technique, primary closure, and consider hyperbaric oxygen (Marx protocol). Lifetime fluoride trays are prescribed to prevent radiation caries.',
  },

  {
    id: 'eur-hn-lymphoma-hn',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'How does lymphoma present in the head and neck?',
    back: 'Head and neck lymphoma — key points:\n\n• Second most common H&N malignancy after SCC\n• Nodal: painless, firm, rubbery lymphadenopathy (often multiple/bilateral)\n• Extranodal: Waldeyer ring (tonsil, nasopharynx, tongue base) — most common extranodal H&N site\n\nRed flags for lymphoma vs SCC:\n• Young patient, bilateral nodes, Waldeyer ring mass, B symptoms\n• Asymmetric tonsillar enlargement in an adult → always biopsy\n\nDiagnosis: core/excisional biopsy (FNA insufficient for subtyping)\nTreatment: chemotherapy ± RT (NOT surgery)\n\nDiffuse large B-cell (DLBCL): most common aggressive NHL in H&N\nMarginal zone (MALT): associated with Sjögren syndrome in parotid',
  },

  {
    id: 'eur-hn-sjogren-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: "A patient with Sjögren syndrome develops progressive bilateral parotid enlargement. What malignancy should be excluded?",
    options: [
      { label: 'A', text: 'Mucoepidermoid carcinoma' },
      { label: 'B', text: 'MALT lymphoma (marginal zone)' },
      { label: 'C', text: 'Adenoid cystic carcinoma' },
      { label: 'D', text: 'Acinic cell carcinoma' },
    ],
    correctIndex: 1,
    explanation: "Sjögren syndrome carries a 44-fold increased risk of developing MALT (mucosa-associated lymphoid tissue) lymphoma, particularly in the parotid glands. MALT lymphoma (extranodal marginal zone B-cell lymphoma) is a low-grade NHL. Patients with Sjögren syndrome who develop rapid or asymmetric parotid enlargement should be investigated with imaging and biopsy. Overall risk of lymphoma in Sjögren syndrome is 5–10% over a patient's lifetime.",
  },

  {
    id: 'eur-hn-cn-exam-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'easy',
    front: 'Which cranial nerves should be systematically examined in every head and neck cancer patient?',
    back: 'Systematic cranial nerve examination:\n\nCN V (trigeminal): facial sensation, masseter/temporalis bulk, jaw deviation\nCN VII (facial): forehead, eye closure, smile, lip pucker — assess all 5 branches\nCN IX (glossopharyngeal): gag reflex, palate sensation\nCN X (vagus): vocal cord function (hoarseness), palatal elevation\nCN XI (spinal accessory): shoulder shrug (trapezius), head turn (SCM)\nCN XII (hypoglossal): tongue protrusion (deviates toward weak side), tongue bulk\n\nCN involvement implies skull base invasion, perineural spread (adenoid cystic), or nodal compression — upstages the tumour and affects treatment planning.',
  },

  {
    id: 'eur-hn-multidisciplinary-team',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Multidisciplinary Team (MDT)',
    subtitle: 'European Manual — Standard of Care',
    lines: [
      { text: 'All H&N cancer patients must be discussed at MDT before treatment — European guideline standard', highlight: true },
      { text: 'Core members: H&N surgeon, radiation oncologist, medical oncologist, radiologist, pathologist' },
      { text: 'Essential allied health: speech-language therapist, dietitian, clinical nurse specialist', highlight: true },
      { text: 'Additional: maxillofacial prosthodontist, psychologist, palliative care, dentist' },
      { text: 'MDT discussion improves staging accuracy, treatment selection, and survival outcomes' },
      { text: 'Every recurrence and post-treatment surveillance result should return to MDT', highlight: true },
    ],
  },

  // ─── FINAL 10 CARDS ────────────────────────────────────────────────

  {
    id: 'eur-hn-xerostomia-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'How can xerostomia be minimised during head and neck radiotherapy?',
    back: 'Prevention strategies:\n\n1. IMRT (intensity-modulated RT): spares contralateral parotid — mean dose <26 Gy preserves function\n2. Parotid gland transfer: surgical translocation of submandibular gland to submental space (outside radiation field) before RT\n3. Amifostine: free radical scavenger — limited use due to side effects (nausea, hypotension)\n\nTreatment of established xerostomia:\n• Saliva substitutes and frequent sips of water\n• Pilocarpine (muscarinic agonist): 5 mg TDS\n• Cevimeline: alternative cholinergic agonist\n• Acupuncture: some evidence for symptom improvement',
  },

  {
    id: 'eur-hn-4th-branchial-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A child presents with recurrent left-sided suppurative thyroiditis. What congenital anomaly should be suspected?',
    options: [
      { label: 'A', text: '2nd branchial cleft fistula' },
      { label: 'B', text: '3rd/4th branchial pouch sinus' },
      { label: 'C', text: 'Thyroglossal duct remnant' },
      { label: 'D', text: 'Zenker diverticulum' },
    ],
    correctIndex: 1,
    explanation: 'Recurrent left-sided suppurative thyroiditis in a child is the classic presentation of a 3rd or 4th branchial pouch sinus (pyriform sinus fistula). The tract runs from the pyriform sinus apex through the thyroid gland, explaining the recurrent thyroid infections. Left-sided predominance is due to the descent of the ultimobranchial body. Diagnosis: barium swallow or direct laryngoscopy showing the pyriform sinus opening. Treatment: endoscopic cauterisation of the sinus tract or open surgical excision with ipsilateral hemithyroidectomy.',
  },

  {
    id: 'eur-hn-carotid-space-anatomy',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Carotid Sheath Contents',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Common Carotid Artery', x: 35, y: 55, description: 'Medial within the carotid sheath. Bifurcates at C3-C4 level into ICA (posterolateral, no branches in neck) and ECA (anteromedial, 8 branches).' },
      { name: 'Internal Jugular Vein', x: 65, y: 50, description: 'Lateral within the carotid sheath. Largest vein in the neck. Joins the subclavian vein to form the brachiocephalic vein behind the sternoclavicular joint.' },
      { name: 'Vagus Nerve (CN X)', x: 50, y: 42, description: 'Posterior, in the groove between the artery and vein. Gives off the superior laryngeal nerve (at C2-C3) and recurrent laryngeal nerve. Left RLN loops under the aortic arch; right loops under the subclavian artery.' },
      { name: 'Ansa Cervicalis', x: 40, y: 30, description: 'Embedded in the anterior wall of the carotid sheath. Superior root from C1 (via CN XII), inferior root from C2-C3. Innervates the strap muscles (omohyoid, sternohyoid, sternothyroid).' },
      { name: 'Deep Cervical Lymph Nodes', x: 55, y: 65, description: 'Chain of nodes along the IJV within the carotid sheath. Levels II-IV. Jugulodigastric node (level II) is the largest and first to be involved in oropharyngeal cancer.' },
    ],
  },

  {
    id: 'eur-hn-occult-mets-blank',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Elective neck dissection is recommended for H&N SCC when the risk of occult nodal metastasis exceeds ___.',
    blankWord: '20%',
    options: ['20%', '5%', '10%', '50%'],
  },

  {
    id: 'eur-hn-dysphagia-assessment',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Swallowing Rehabilitation in H&N Cancer',
    subtitle: 'European Manual — Supportive Care',
    lines: [
      { text: 'Pre-treatment SLT assessment and baseline swallow function is essential', highlight: true },
      { text: 'Prophylactic swallowing exercises BEFORE and DURING RT reduce long-term dysphagia' },
      { text: 'FEES (fibreoptic endoscopic evaluation of swallowing): bedside assessment of aspiration risk', highlight: true },
      { text: 'Videofluoroscopy (modified barium swallow): gold standard dynamic swallow assessment' },
      { text: 'PEG/RIG feeding tube: placed prophylactically for advanced H&N cancer undergoing chemoRT' },
      { text: 'Late dysphagia from RT fibrosis: pharyngeal stricture, cricopharyngeal dysfunction', highlight: true },
      { text: 'Aspiration pneumonia is a leading cause of morbidity and mortality in H&N cancer patients' },
    ],
  },

  {
    id: 'eur-hn-referred-otalgia-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'A 60-year-old heavy smoker presents with persistent unilateral otalgia and a normal ear examination. What should be excluded?',
    options: [
      { label: 'A', text: 'Otitis media' },
      { label: 'B', text: 'Head and neck cancer (referred otalgia)' },
      { label: 'C', text: 'Ménière disease' },
      { label: 'D', text: 'Acoustic neuroma' },
    ],
    correctIndex: 1,
    explanation: 'Referred otalgia with a normal ear exam in a smoker/drinker >50 years old is head and neck cancer until proven otherwise. The ear receives sensory innervation from CN V3, CN VII, CN IX, CN X, and C2-C3 — all of which also supply the pharynx, larynx, and tongue base. Cancers of the oropharynx (base of tongue, tonsil), hypopharynx (pyriform sinus), and supraglottic larynx commonly present with referred otalgia via CN IX (Jacobson nerve) or CN X (Arnold nerve).',
  },

  {
    id: 'eur-hn-eutirads-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the EU-TIRADS categories and their FNA thresholds?',
    back: 'EU-TIRADS (European Thyroid Imaging Reporting and Data System):\n\n1 — Normal (no nodule): no FNA\n2 — Benign (pure cyst, spongiform): no FNA\n3 — Low risk (oval, smooth, isoechoic/hyperechoic): FNA if ≥20 mm\n4 — Intermediate risk (mildly hypoechoic, oval, smooth): FNA if ≥15 mm\n5 — High risk (at least 1 of: irregular shape, irregular margins, microcalcifications, markedly hypoechoic, taller-than-wide): FNA if ≥10 mm',
    bonus: 'EU-TIRADS was developed by the European Thyroid Association and is widely used in Europe. The American equivalent is ACR TI-RADS, which uses a points-based system.',
  },

  {
    id: 'eur-hn-differentiated-thyroid-followup',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Differentiated Thyroid Cancer Follow-up',
    subtitle: 'European Manual — Surveillance',
    lines: [
      { text: 'Thyroglobulin (Tg) is the tumour marker for papillary and follicular thyroid cancer', highlight: true },
      { text: 'Tg should be undetectable after total thyroidectomy + RAI if disease-free' },
      { text: 'Anti-Tg antibodies can interfere with Tg assay — measure simultaneously', highlight: true },
      { text: 'Rising Tg or positive anti-Tg antibodies: suspect recurrence' },
      { text: 'Neck ultrasound: primary imaging modality for surveillance (every 6–12 months initially)', highlight: true },
      { text: 'TSH suppression with levothyroxine: target depends on risk (low risk: 0.5–2 mU/L; high risk: <0.1 mU/L)' },
      { text: 'Whole-body RAI scan: for high-risk patients or rising Tg with negative neck US' },
    ],
  },

  {
    id: 'eur-hn-thyroglobulin-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Two years after total thyroidectomy and RAI for papillary thyroid cancer, a patient has a rising thyroglobulin level (from <0.1 to 5.2 ng/mL). Neck ultrasound is negative. What is the next step?',
    options: [
      { label: 'A', text: 'Repeat neck ultrasound in 6 months' },
      { label: 'B', text: 'Diagnostic whole-body RAI scan or PET-CT' },
      { label: 'C', text: 'Empirical RAI therapy' },
      { label: 'D', text: 'Reassurance' },
    ],
    correctIndex: 1,
    explanation: 'A rising thyroglobulin after thyroidectomy + RAI with a negative neck ultrasound suggests recurrent or metastatic disease (structural disease not yet visible on US). The next step is to localise the source: diagnostic whole-body I-131 scan (to detect RAI-avid disease) or FDG PET-CT (especially if Tg >10 ng/mL, as aggressive dedifferentiated disease may lose iodine avidity but become FDG-avid). This "flip-flop" phenomenon is important: RAI-negative, PET-positive disease carries a worse prognosis.',
  },

  {
    id: 'eur-hn-retropharyngeal-abscess-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 3-year-old presents with fever, neck stiffness, drooling, and refusal to eat. Lateral neck X-ray shows widening of the prevertebral soft tissues. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Peritonsillar abscess' },
      { label: 'B', text: 'Retropharyngeal abscess' },
      { label: 'C', text: 'Epiglottitis' },
      { label: 'D', text: 'Croup' },
    ],
    correctIndex: 1,
    explanation: 'Retropharyngeal abscess is most common in children <5 years (retropharyngeal lymph nodes involute by age 5). It presents with fever, neck stiffness/extension (child prefers to look at the ceiling), drooling, dysphagia, and muffled voice. Lateral neck X-ray shows prevertebral soft tissue widening (>7 mm at C2, >14 mm at C6 in children). CT with contrast confirms the diagnosis (ring-enhancing collection). Treatment: IV antibiotics ± surgical drainage (transoral for midline abscesses, external for lateral extension). Airway management is the first priority.',
  },

  // ─── 50 ANATOMY DIAGRAM CARDS ──────────────────────────────────────

  {
    id: 'eur-hn-anat-thyroid-gland',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Thyroid Gland Anatomy',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Right Lobe', x: 35, y: 40, description: 'Each lobe lies lateral to the trachea, from the oblique line of thyroid cartilage to the 5th–6th tracheal ring. Overlapped by strap muscles and SCM.' },
      { name: 'Left Lobe', x: 65, y: 40, description: 'Mirror of the right lobe. The recurrent laryngeal nerve runs in the tracheoesophageal groove just posterior to each lobe — at highest risk during dissection of the ligament of Berry.' },
      { name: 'Isthmus', x: 50, y: 45, description: 'Connects both lobes across the midline, overlying tracheal rings 2–4. Divided during thyroid lobectomy to mobilise the specimen. Pyramidal lobe (present in ~50%) ascends from the isthmus.' },
      { name: 'Superior Thyroid Artery', x: 30, y: 25, description: 'First branch of the external carotid artery. Descends to the upper pole. The external branch of the superior laryngeal nerve (EBSLN) runs close to its pedicle — ligate vessels close to the gland capsule to protect it.' },
      { name: 'Inferior Thyroid Artery', x: 70, y: 58, description: 'Branch of the thyrocervical trunk (subclavian artery). Ascends behind the carotid sheath to enter the gland posteriorly. The RLN crosses it — relationship is variable (anterior, posterior, or between branches).' },
      { name: 'Parathyroid Glands', x: 55, y: 60, description: 'Usually 4 glands (2 superior, 2 inferior). Superior: posterior to the upper 1/3 of thyroid lobe (derived from 4th pouch). Inferior: more variable position near lower pole (derived from 3rd pouch — descends further).' },
    ],
  },

  {
    id: 'eur-hn-anat-thyroid-blood-supply',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Thyroid Blood Supply',
    subtitle: 'Tap vessels to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Superior Thyroid Artery', x: 30, y: 20, description: 'From ECA. Descends with the EBSLN. Supplies the upper pole. Ligate close to the gland to avoid EBSLN injury — nerve at risk in 20% (runs with the artery in the "Joll triangle").' },
      { name: 'Inferior Thyroid Artery', x: 70, y: 55, description: 'From thyrocervical trunk. The RLN crosses this artery — may pass anterior, posterior, or between its branches. Do NOT clamp blindly — identify the RLN first before ligating.' },
      { name: 'Thyroid Ima Artery', x: 50, y: 75, description: 'Inconstant artery (3–10%). Arises directly from the aortic arch or brachiocephalic trunk. Ascends anterior to the trachea to the isthmus. Risk of unexpected bleeding during tracheostomy.' },
      { name: 'Superior Thyroid Vein', x: 28, y: 35, description: 'Drains the upper pole into the internal jugular vein (IJV). Runs with the superior thyroid artery.' },
      { name: 'Middle Thyroid Vein', x: 25, y: 50, description: 'Short vein draining directly into the IJV. Must be ligated early during thyroid mobilisation — it tethers the gland laterally and limits retraction.' },
      { name: 'Inferior Thyroid Veins', x: 50, y: 85, description: 'Drain the lower poles into the left brachiocephalic vein. May form a venous plexus anterior to the trachea — risk of troublesome bleeding during tracheostomy or thyroidectomy.' },
    ],
  },

  {
    id: 'eur-hn-anat-rln-course',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Recurrent Laryngeal Nerve Course',
    subtitle: 'Tap landmarks to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Left RLN', x: 60, y: 80, description: 'Loops under the aortic arch (ligamentum arteriosum), then ascends in the tracheoesophageal groove. Longer course than right — theoretically higher risk of injury. Enters the larynx posterior to the cricothyroid joint.' },
      { name: 'Right RLN', x: 35, y: 65, description: 'Loops under the right subclavian artery, then ascends obliquely toward the tracheoesophageal groove. Shorter and more oblique course — may take a more lateral path to the larynx.' },
      { name: 'Non-recurrent Laryngeal Nerve', x: 30, y: 40, description: 'Rare variant (0.5–1% right side, extremely rare left). Right NRLN occurs with an aberrant right subclavian artery (arteria lusoria). Nerve passes directly from the vagus to the larynx — at extreme risk during thyroidectomy.' },
      { name: 'Ligament of Berry', x: 50, y: 35, description: 'Dense connective tissue attaching the thyroid gland to the trachea. The RLN passes immediately deep to this ligament — the most dangerous point during thyroidectomy.' },
      { name: 'Tracheoesophageal Groove', x: 55, y: 55, description: 'The groove between the trachea and oesophagus where the RLN ascends on both sides. The nerve lies posterior to the inferior thyroid artery branches in most cases. Always identify the nerve before clamping vessels.' },
    ],
  },

  {
    id: 'eur-hn-anat-laryngeal-cartilages',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Laryngeal Cartilages',
    subtitle: 'Tap cartilages to identify',
    svgType: 'larynx',
    structures: [
      { name: 'Thyroid Cartilage', x: 50, y: 25, description: 'Largest laryngeal cartilage. Two laminae fuse anteriorly at the laryngeal prominence. Superior notch is a key landmark. The oblique line on the outer surface attaches strap muscles and inferior constrictor.' },
      { name: 'Cricoid Cartilage', x: 50, y: 55, description: 'Only complete ring in the airway (signet ring shape). At C6. Key landmark for cricoid pressure (Sellick) and cricothyroidotomy (which is ABOVE the cricoid, through the cricothyroid membrane).' },
      { name: 'Epiglottis', x: 50, y: 10, description: 'Leaf-shaped elastic cartilage. The pre-epiglottic space (fat-filled) lies anterior — invasion = T3 in supraglottic cancer staging.' },
      { name: 'Arytenoid Cartilages', x: 65, y: 45, description: 'Paired pyramids on the posterior cricoid. Vocal process (anterior) attaches the vocal ligament; muscular process (lateral) attaches PCA and LCA muscles. Key for vocal cord movement.' },
      { name: 'Cricothyroid Membrane', x: 50, y: 42, description: 'Connects cricoid and thyroid cartilages anteriorly. Site for emergency cricothyroidotomy — avascular midline, easily palpable. The cricothyroid artery runs along its upper margin.' },
    ],
  },

  {
    id: 'eur-hn-anat-intrinsic-larynx',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Intrinsic Laryngeal Muscles',
    subtitle: 'Tap muscles to learn function',
    svgType: 'larynx',
    structures: [
      { name: 'Posterior Cricoarytenoid (PCA)', x: 55, y: 50, description: 'ONLY abductor of the vocal cords. Bilateral PCA paralysis = both cords midline = airway emergency requiring tracheostomy.' },
      { name: 'Lateral Cricoarytenoid (LCA)', x: 35, y: 48, description: 'Adducts the vocal cords by rotating the arytenoid medially. Works with the interarytenoid to close the glottis for phonation.' },
      { name: 'Thyroarytenoid (Vocalis)', x: 40, y: 35, description: 'Forms the body of the vocal fold. Shortens and thickens the vocal cord, lowering pitch. Paralysis causes a thin, bowed cord (breathy voice).' },
      { name: 'Cricothyroid', x: 50, y: 65, description: 'Tensor — lengthens and thins the cords, raising pitch. ONLY intrinsic muscle innervated by the EBSLN (external branch of superior laryngeal nerve). All others: RLN.' },
      { name: 'Interarytenoid', x: 60, y: 40, description: 'Transverse and oblique arytenoid. Adducts arytenoids to close the posterior commissure. Only unpaired intrinsic muscle.' },
    ],
  },

  {
    id: 'eur-hn-anat-laryngeal-subsites',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Laryngeal Cancer Subsites',
    subtitle: 'Tap regions to learn staging',
    svgType: 'larynx',
    structures: [
      { name: 'Supraglottis', x: 50, y: 18, description: 'Epiglottis to the ventricle. Rich lymphatic drainage — bilateral nodal mets 25–50%. Presents late with sore throat, referred otalgia, neck mass.' },
      { name: 'Glottis', x: 50, y: 40, description: 'True vocal cords + commissures. Sparse lymphatics — nodal mets <5% for T1/T2. Presents early with hoarseness. Best prognosis.' },
      { name: 'Subglottis', x: 50, y: 60, description: '1 cm below the free cord edge to inferior cricoid border. Rare (<5%). Drains to level VI paratracheal nodes. Late presentation with stridor.' },
      { name: 'Pre-epiglottic Space', x: 35, y: 12, description: 'Fat space anterior to epiglottis. Invasion = T3. Best assessed on sagittal MRI (fat signal replacement).' },
      { name: 'Paraglottic Space', x: 30, y: 38, description: 'Fat space lateral to the ventricle. Invasion = T3. Route for transglottic tumour spread between subsites.' },
    ],
  },

  {
    id: 'eur-hn-anat-supraglottic-detail',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Supraglottic Larynx — Subsections',
    subtitle: 'Tap areas for cancer staging',
    svgType: 'larynx',
    structures: [
      { name: 'Suprahyoid Epiglottis', x: 50, y: 10, description: 'Tip and lingual surface above the hyoid. Cancers spread to the vallecula and base of tongue. T1: limited to one subsite with normal cord mobility.' },
      { name: 'Infrahyoid Epiglottis', x: 50, y: 25, description: 'Laryngeal surface below the hyoid. Cancers invade the pre-epiglottic space early (T3). Referred otalgia via internal SLN is common.' },
      { name: 'Aryepiglottic Folds', x: 70, y: 22, description: 'Lateral boundary of the laryngeal inlet. Cancers may cause dysphagia early. Marginal zone tumours can be classified as hypopharyngeal.' },
      { name: 'False Vocal Cords', x: 45, y: 35, description: 'Ventricular folds above the true cords. Cancer may extend to the paraglottic space.' },
      { name: 'Laryngeal Ventricle', x: 40, y: 42, description: 'Boundary between supraglottis and glottis. Tumours crossing this landmark = transglottic (T4a).' },
    ],
  },

  {
    id: 'eur-hn-anat-glottic-layers',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Vocal Cord Layers (Hirano)',
    subtitle: 'Tap layers for phonosurgical anatomy',
    svgType: 'larynx',
    structures: [
      { name: 'Epithelium', x: 50, y: 15, description: 'Stratified squamous epithelium. Only non-respiratory epithelium in the larynx. Susceptible to SCC from tobacco/alcohol.' },
      { name: 'Reinke Space (SLP)', x: 50, y: 30, description: 'Loose gelatinous layer critical for vibration. Oedema = Reinke oedema (polypoid corditis). Key plane in phonosurgery. SCC limited here is favourable for TLM.' },
      { name: 'Intermediate Lamina Propria', x: 50, y: 45, description: 'Elastic fibres. Forms the vocal ligament (with deep layer). The cover-body transition zone.' },
      { name: 'Deep Lamina Propria', x: 50, y: 58, description: 'Collagenous fibres. With the intermediate layer, forms the vocal ligament. Stiffer than superficial layers.' },
      { name: 'Vocalis Muscle (Body)', x: 50, y: 75, description: 'Thyroarytenoid (medial portion). Forms the body. Cover-body theory: the mucosa + SLP vibrate over the stable body during phonation.' },
    ],
  },

  {
    id: 'eur-hn-anat-neck-node-levels',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Cervical Lymph Node Levels',
    subtitle: 'Tap levels to learn drainage',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Level I (IA/IB)', x: 42, y: 25, description: 'IA: submental. IB: submandibular. Drains: lower lip, floor of mouth, anterior tongue, face, anterior nasal cavity.' },
      { name: 'Level II (IIA/IIB)', x: 30, y: 38, description: 'Upper jugular: skull base to hyoid. IIA anterior / IIB posterior to CN XI. First echelon for oral cavity, oropharynx, nasopharynx, supraglottis.' },
      { name: 'Level III', x: 30, y: 52, description: 'Middle jugular: hyoid to cricoid. Drains oral cavity, oropharynx, hypopharynx, larynx. Most commonly involved level across H&N sites.' },
      { name: 'Level IV', x: 30, y: 68, description: 'Lower jugular: cricoid to clavicle. Drains hypopharynx, subglottis, thyroid, cervical oesophagus. Left level IV = Virchow node.' },
      { name: 'Level V (VA/VB)', x: 75, y: 55, description: 'Posterior triangle. CN XI traverses this level. Drains nasopharynx, oropharynx, thyroid, posterior scalp.' },
      { name: 'Level VI', x: 50, y: 78, description: 'Central compartment: hyoid to sternum. Pretracheal, paratracheal, Delphian nodes. Drains thyroid, subglottic larynx, pyriform apex.' },
    ],
  },

  {
    id: 'eur-hn-anat-parotid-facial-nerve',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Parotid Gland & Facial Nerve',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Facial Nerve Trunk', x: 40, y: 25, description: 'Exits stylomastoid foramen. Landmarks: tragal pointer (1 cm deep/inferior), tympanomastoid suture, posterior digastric. Divides gland into superficial and deep lobes.' },
      { name: 'Temporofacial Division', x: 35, y: 18, description: 'Upper division → temporal, zygomatic, buccal branches. Temporal branch crosses zygomatic arch — damage = cannot raise the eyebrow.' },
      { name: 'Cervicofacial Division', x: 45, y: 38, description: 'Lower division → marginal mandibular and cervical branches. Marginal mandibular runs 1–2 cm below mandible deep to platysma.' },
      { name: 'Pes Anserinus', x: 42, y: 30, description: 'Bifurcation of the trunk into the two divisions within the parotid. ~1.5 cm from the stylomastoid foramen.' },
      { name: 'Stensen Duct', x: 55, y: 35, description: 'Parotid duct. Crosses masseter, pierces buccinator, opens opposite the 2nd upper molar.' },
      { name: 'Great Auricular Nerve', x: 55, y: 22, description: 'C2-C3. Crosses SCM at Erb point. Sensation to ear lobule. Almost always sacrificed in parotidectomy.' },
    ],
  },

  {
    id: 'eur-hn-anat-submandibular-triangle',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Submandibular Triangle',
    subtitle: 'Tap structures for surgical anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Submandibular Gland', x: 45, y: 35, description: 'Occupies most of the triangle. Wraps around mylohyoid posterior edge (superficial + deep parts). Wharton duct exits the deep part.' },
      { name: 'Facial Artery', x: 35, y: 40, description: 'ECA branch. Grooves or passes through the gland. Crosses mandible at the anterior masseter border. Ligated during gland excision.' },
      { name: 'Marginal Mandibular Nerve', x: 40, y: 20, description: 'CN VII branch. Deep to platysma, superficial to facial vein. Hayes-Martin manoeuvre: ligate facial vein, retract nerve superiorly.' },
      { name: 'Hypoglossal Nerve (CN XII)', x: 50, y: 55, description: 'Motor to all tongue muscles except palatoglossus. Runs deep to posterior digastric, loops forward on hyoglossus superficial to the lingual artery.' },
      { name: 'Lingual Nerve', x: 55, y: 45, description: 'V3 branch. Enters triangle deep to mylohyoid. Loops under Wharton duct. Carries taste (chorda tympani) from anterior 2/3 tongue.' },
    ],
  },

  {
    id: 'eur-hn-anat-carotid-triangle',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Carotid Triangle',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Carotid Bifurcation', x: 40, y: 40, description: 'CCA bifurcates at C3-C4. ICA: posterolateral, no branches in neck. ECA: anteromedial, 8 branches. Carotid sinus (baroreceptor) and body (chemoreceptor) at bifurcation.' },
      { name: 'Internal Jugular Vein', x: 55, y: 45, description: 'Lateral to the carotid artery in the carotid sheath. Receives facial, lingual, and thyroid veins. Preserved in MRND/SND; sacrificed in RND.' },
      { name: 'Vagus Nerve (CN X)', x: 48, y: 50, description: 'Posterior, between CCA/ICA and IJV. Gives the superior laryngeal nerve at C2-C3 and the recurrent laryngeal nerve distally.' },
      { name: 'Hypoglossal Nerve (CN XII)', x: 35, y: 30, description: 'Passes superficial to ICA and ECA. Its descendens hypoglossi branch joins C2-C3 to form the ansa cervicalis.' },
      { name: 'Superior Laryngeal Nerve', x: 42, y: 55, description: 'Branch of vagus. Internal branch: sensory to supraglottis (pierces thyrohyoid membrane). External branch: motor to cricothyroid (tensor of cords).' },
    ],
  },

  {
    id: 'eur-hn-anat-eca-branches',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'External Carotid Artery Branches',
    subtitle: 'Tap branches to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Superior Thyroid Artery', x: 30, y: 65, description: 'First anterior branch. Descends to thyroid upper pole with the EBSLN. Gives the superior laryngeal artery (with internal SLN through thyrohyoid membrane).' },
      { name: 'Lingual Artery', x: 35, y: 50, description: 'Second anterior branch. Passes deep to hyoglossus to supply the tongue. At risk during level I dissection.' },
      { name: 'Facial Artery', x: 35, y: 38, description: 'Third anterior branch. Passes through the submandibular gland, crosses mandible at masseter. Tonsillar branch supplies the palatine tonsil.' },
      { name: 'Maxillary Artery', x: 55, y: 20, description: 'Larger terminal branch. Through infratemporal fossa. Gives middle meningeal artery and sphenopalatine artery (key in posterior epistaxis).' },
      { name: 'Superficial Temporal Artery', x: 65, y: 18, description: 'Smaller terminal branch. Anterior to the tragus. Useful as a recipient vessel in microvascular surgery.' },
      { name: 'Ascending Pharyngeal Artery', x: 50, y: 55, description: 'Smallest branch. Ascends on the pharyngeal wall. Feeds paragangliomas — must embolise before surgery.' },
    ],
  },

  {
    id: 'eur-hn-anat-posterior-triangle',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Posterior Triangle of the Neck',
    subtitle: 'Tap structures to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Spinal Accessory Nerve (CN XI)', x: 50, y: 40, description: 'Crosses the posterior triangle superficially. From upper SCM to trapezius. Most commonly injured nerve in the posterior triangle.' },
      { name: 'Erb Point', x: 30, y: 35, description: 'Midpoint of posterior SCM border. Where the great auricular, lesser occipital, transverse cervical, and supraclavicular nerves emerge. Key landmark for the cervical plexus.' },
      { name: 'Brachial Plexus Trunks', x: 55, y: 60, description: 'C5-T1 roots emerge between the scalene muscles. Upper (C5-C6), middle (C7), lower (C8-T1) trunks. At risk in supraclavicular surgery.' },
      { name: 'Subclavian Artery', x: 50, y: 78, description: 'Through the scalene gap across the first rib. In the supraclavicular triangle inferior to the brachial plexus.' },
      { name: 'Phrenic Nerve', x: 35, y: 50, description: 'C3-C5 on anterior scalene. At risk during level V dissection. Injury = ipsilateral diaphragmatic paralysis.' },
    ],
  },

  {
    id: 'eur-hn-anat-muscular-triangle',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Muscular Triangle Contents',
    subtitle: 'Tap structures for anatomy',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Strap Muscles', x: 40, y: 25, description: 'Sternohyoid (superficial) and sternothyroid (deep) overlie the thyroid. All innervated by ansa cervicalis except thyrohyoid (C1 via CN XII).' },
      { name: 'Thyroid Gland', x: 50, y: 40, description: 'In the pretracheal fascia. Two lobes + isthmus over tracheal rings 2-4. Berry ligament to trachea — RLN danger zone.' },
      { name: 'Larynx', x: 50, y: 20, description: 'Thyroid cartilage, cricoid, epiglottis, arytenoids. Houses the vocal cords. Palpable landmarks: thyroid notch, cricothyroid membrane.' },
      { name: 'Trachea', x: 50, y: 55, description: 'Begins at inferior cricoid (C6). C-shaped rings with posterior membranous wall. Tracheostomy site: rings 2-3 or 3-4.' },
      { name: 'Oesophagus', x: 55, y: 65, description: 'Posterior to trachea. RLN ascends in the tracheoesophageal groove. Cricopharyngeus at C5-C6 — site of Zenker diverticulum (Killian dehiscence).' },
    ],
  },

  {
    id: 'eur-hn-anat-deep-spaces-axial',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Deep Neck Spaces — Axial View',
    subtitle: 'Tap spaces to learn infection routes',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Parapharyngeal Space', x: 30, y: 35, description: 'Inverted pyramid: skull base to hyoid. Prestyloid: fat, V3, internal maxillary artery. Poststyloid: carotid, IJV, CN IX-XII, sympathetic chain. Displaced by parotid/pharyngeal tumours.' },
      { name: 'Retropharyngeal Space', x: 50, y: 55, description: 'Between buccopharyngeal and alar fascia. Skull base to T1-T2. Contains nodes of Rouvière (suppurate in children <5 years).' },
      { name: 'Danger Space', x: 50, y: 75, description: 'Between alar and prevertebral fascia. Skull base to diaphragm. Route for descending necrotising mediastinitis — life-threatening.' },
      { name: 'Masticator Space', x: 25, y: 20, description: 'Contains mandibular ramus, pterygoid muscles, inferior alveolar nerve. Infections from 3rd molars. Causes trismus.' },
      { name: 'Peritonsillar Space', x: 40, y: 30, description: 'Between the tonsillar capsule and superior constrictor. Site of quinsy — the most common deep space abscess. ICA lies 2.5 cm posterolateral.' },
    ],
  },

  {
    id: 'eur-hn-anat-pharynx-divisions',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Pharynx — Three Divisions',
    subtitle: 'Tap regions to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Nasopharynx', x: 50, y: 15, description: 'Skull base to hard palate. Contains adenoid, Eustachian tube orifices, fossa of Rosenmüller (NPC origin site). Respiratory epithelium.' },
      { name: 'Oropharynx', x: 50, y: 38, description: 'Soft palate to hyoid/vallecula. Contains tonsils, tongue base, soft palate, posterior wall. Most common site for HPV-related SCC.' },
      { name: 'Hypopharynx', x: 50, y: 60, description: 'Hyoid to inferior cricoid. Subsites: pyriform sinus (70% of cancers), postcricoid, posterior wall. Worst mucosal H&N prognosis.' },
      { name: 'Pharyngeal Constrictors', x: 30, y: 40, description: 'Three overlapping muscles propelling the bolus. All via pharyngeal plexus (CN X). Cricopharyngeus = upper oesophageal sphincter.' },
      { name: 'Killian Dehiscence', x: 55, y: 72, description: 'Weak point between thyropharyngeus and cricopharyngeus fibres. Zenker diverticulum herniates here. Treat with cricopharyngeal myotomy.' },
    ],
  },

  {
    id: 'eur-hn-anat-oral-cavity-sites',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Oral Cavity Subsites',
    subtitle: 'Tap subsites for cancer anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Oral Tongue', x: 50, y: 20, description: 'Most common oral cavity SCC subsite. Lateral border = highest risk zone. DOI >4 mm → high occult nodal risk. Drains to levels I-III.' },
      { name: 'Floor of Mouth', x: 50, y: 35, description: 'Second most common site. Contains Wharton duct orifices. Cancers invade tongue and mandible early. Drains to level I-II.' },
      { name: 'Lower Alveolar Ridge', x: 35, y: 28, description: 'Mucosa over the mandible. Cancers directly invade bone early. Marginal vs segmental mandibulectomy depends on invasion depth.' },
      { name: 'Hard Palate', x: 50, y: 15, description: 'Minor salivary gland cancers more common than SCC here (adenoid cystic, mucoepidermoid). Defects need obturator or free flap.' },
      { name: 'Retromolar Trigone', x: 70, y: 30, description: 'Behind last molar over the ascending ramus. Frequently invades mandible, pterygoids, buccal space. Often advanced at presentation.' },
    ],
  },

  {
    id: 'eur-hn-anat-tongue-innervation',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Tongue Innervation',
    subtitle: 'Tap nerves to learn supply',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Lingual Nerve (V3)', x: 35, y: 25, description: 'General sensation: anterior 2/3 of tongue. Runs in floor of mouth — at risk during wisdom tooth extraction and submandibular gland surgery.' },
      { name: 'Chorda Tympani (CN VII)', x: 45, y: 20, description: 'Taste: anterior 2/3. Joins lingual nerve in infratemporal fossa. Also carries parasympathetic fibres to submandibular and sublingual glands.' },
      { name: 'Glossopharyngeal (CN IX)', x: 50, y: 45, description: 'General sensation + taste: posterior 1/3. Referred otalgia from tongue base tumours via Jacobson nerve to the middle ear.' },
      { name: 'Hypoglossal (CN XII)', x: 60, y: 35, description: 'Motor to ALL tongue muscles except palatoglossus (CN X). Unilateral injury: tongue deviates TOWARD affected side.' },
      { name: 'Internal Laryngeal Nerve (CN X)', x: 40, y: 55, description: 'Sensory to vallecula and epiglottis. Pierces thyrohyoid membrane. Afferent limb of supraglottic cough reflex.' },
    ],
  },

  {
    id: 'eur-hn-anat-waldeyer-ring',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: "Waldeyer's Lymphoid Ring",
    subtitle: 'Tap components to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Pharyngeal Tonsil (Adenoid)', x: 50, y: 12, description: 'Nasopharyngeal roof. Hypertrophies in childhood, involutes by puberty. Causes nasal obstruction, secretory otitis media.' },
      { name: 'Tubal Tonsils', x: 30, y: 20, description: 'Around the Eustachian tube openings. Enlargement contributes to Eustachian tube dysfunction.' },
      { name: 'Palatine Tonsils', x: 35, y: 40, description: 'Largest component. Between palatoglossus and palatopharyngeus pillars. Most common site for tonsillar SCC (often HPV+). Asymmetric enlargement in adults → exclude lymphoma.' },
      { name: 'Lingual Tonsil', x: 50, y: 55, description: 'Posterior 1/3 of tongue base. Often hypertrophies after tonsillectomy. Can cause intubation difficulty. Common site for HPV-related SCC.' },
      { name: 'Lateral Pharyngeal Bands', x: 65, y: 35, description: 'Lymphoid tissue along the posterior pharyngeal wall. Complete the circumferential immune surveillance ring.' },
    ],
  },

  {
    id: 'eur-hn-anat-nasopharynx-npc',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Nasopharynx — NPC Anatomy',
    subtitle: 'Tap landmarks for NPC staging',
    svgType: 'sinuses',
    structures: [
      { name: 'Fossa of Rosenmüller', x: 75, y: 35, description: 'Pharyngeal recess behind the Eustachian tube. Most common origin site for NPC. Always biopsy here when NPC suspected.' },
      { name: 'Torus Tubarius', x: 60, y: 30, description: 'Cartilaginous Eustachian tube prominence. NPC near here → unilateral serous otitis media in an adult (red flag).' },
      { name: 'Adenoid', x: 50, y: 15, description: 'Persistent or enlarging adenoid tissue in adults = suspect NPC or lymphoma. MRI with contrast for evaluation.' },
      { name: 'Skull Base / Foramen Lacerum', x: 55, y: 45, description: 'NPC invades here to reach the cavernous sinus → CN V (numbness) and CN VI (diplopia) palsies.' },
      { name: 'Parapharyngeal Space', x: 35, y: 40, description: 'Lateral extension of NPC = T2 staging. From here → carotid space, skull base, infratemporal fossa.' },
    ],
  },

  {
    id: 'eur-hn-anat-pyriform-sinus',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Pyriform Sinus Anatomy',
    subtitle: 'Tap for hypopharyngeal cancer anatomy',
    svgType: 'larynx',
    structures: [
      { name: 'Pyriform Sinus', x: 30, y: 30, description: 'Paired pear-shaped recesses lateral to the laryngeal inlet. Bounded medially by aryepiglottic fold, laterally by thyroid cartilage. Most common hypopharyngeal cancer site (70%).' },
      { name: 'Pyriform Apex', x: 25, y: 50, description: 'Inferior tip at the cricoid level. Cancers here invade cricoid, paraglottic space, and thyroid cartilage early. Worst prognosis within the hypopharynx.' },
      { name: 'Postcricoid Region', x: 50, y: 55, description: 'Posterior cricoid surface to inferior constrictor. Post-cricoid SCC associated with Plummer-Vinson syndrome.' },
      { name: 'Posterior Pharyngeal Wall', x: 60, y: 35, description: 'Flat posterior surface. Least common subsite. Fixation to prevertebral fascia → T4b (unresectable).' },
      { name: 'Internal Branch of SLN', x: 40, y: 20, description: 'Travels submucosally in the pyriform sinus after piercing thyrohyoid membrane. Provides sensation to supraglottis. Foreign bodies commonly lodge in the pyriform sinus.' },
    ],
  },

  {
    id: 'eur-hn-anat-neck-trauma-zones',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Neck Trauma Zones',
    subtitle: 'Tap zones for injury management',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Zone I', x: 50, y: 78, description: 'Clavicle/sternal notch to cricoid. At-risk structures: subclavian/innominate vessels, thoracic duct, lung apex, trachea, oesophagus. Difficult surgical access — may need sternotomy/thoracotomy. CTA essential.' },
      { name: 'Zone II', x: 50, y: 50, description: 'Cricoid to angle of mandible. Most commonly injured zone. Contains: CCA, ICA, ECA, IJV, pharynx, larynx, oesophagus, RLN. Best surgical access. Selective management with CTA now standard for stable patients.' },
      { name: 'Zone III', x: 50, y: 25, description: 'Angle of mandible to skull base. Contains: distal ICA, vertebral artery, CN IX-XII. Surgically challenging — endovascular management (embolisation/stenting) often preferred for vascular injuries.' },
      { name: 'Hard Signs', x: 30, y: 50, description: 'Active haemorrhage, expanding haematoma, airway compromise (stridor), air bubbling, haematemesis/haemoptysis, shock. ANY hard sign → immediate surgical exploration regardless of zone.' },
      { name: 'Soft Signs', x: 70, y: 50, description: 'Non-expanding haematoma, subcutaneous emphysema, dysphagia, hoarseness, haemoptysis (minor). Soft signs warrant further investigation (CTA, laryngoscopy, oesophagoscopy) but permit selective management.' },
    ],
  },

  {
    id: 'eur-hn-anat-tracheostomy-landmarks',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Tracheostomy — Surface Landmarks',
    subtitle: 'Tap landmarks to identify',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Thyroid Cartilage Notch', x: 50, y: 15, description: 'Palpable V-shaped notch at the superior border of the thyroid cartilage. Key surface landmark. Level of C4 vertebra. Identifies the midline of the larynx.' },
      { name: 'Cricothyroid Membrane', x: 50, y: 30, description: 'Between the thyroid and cricoid cartilages. Site for emergency cricothyroidotomy (NOT tracheostomy). Avascular in the midline. Can be palpated as a soft depression below the thyroid prominence.' },
      { name: 'Cricoid Cartilage', x: 50, y: 40, description: 'Only complete airway ring. Level of C6. The inferior border marks the junction of the larynx and trachea. Also the landmark between neck zones I and II in trauma.' },
      { name: 'Tracheal Rings 2-3', x: 50, y: 55, description: 'The standard tracheostomy entry site. Below the isthmus of the thyroid (or after isthmus division). Entering too high (ring 1) risks subglottic stenosis; too low risks tracheo-innominate fistula.' },
      { name: 'Thyroid Isthmus', x: 50, y: 48, description: 'Crosses the trachea at rings 2-4. Must be retracted superiorly or divided and ligated during surgical tracheostomy. Bleeding from the isthmus can be troublesome.' },
    ],
  },

  {
    id: 'eur-hn-anat-thoracic-duct',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Thoracic Duct — Cervical Course',
    subtitle: 'Tap landmarks for chyle leak anatomy',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Thoracic Duct Terminal', x: 35, y: 55, description: 'Drains into the junction of the left internal jugular and subclavian veins (left venous angle). The terminal segment arches 3-4 cm above the clavicle. Most common site of injury during left level IV neck dissection.' },
      { name: 'Left Venous Angle', x: 40, y: 70, description: 'Confluence of the left IJV and subclavian vein. The thoracic duct opens here, draining lymph from the entire body below the diaphragm + left head/neck/arm. Chyle leak = milky fluid in the wound.' },
      { name: 'Right Lymphatic Duct', x: 65, y: 55, description: 'Drains only the right head/neck, right arm, and right hemithorax into the right venous angle. Right-sided chyle leaks are rare but can occur from anomalous drainage.' },
      { name: 'Level IV Nodes', x: 30, y: 45, description: 'Lower jugular nodes from cricoid to clavicle. The thoracic duct is at highest risk during dissection of these nodes, especially at the junction with the subclavian vein. Use Valsalva to identify leak.' },
      { name: 'Transverse Cervical Artery', x: 55, y: 48, description: 'Crosses the posterior triangle. Landmark for the thoracic duct in the root of the neck. The duct typically passes posterior to the CCA and anterior to the vertebral artery and thyrocervical trunk.' },
    ],
  },

  {
    id: 'eur-hn-anat-cervical-plexus',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Cervical Plexus',
    subtitle: 'Tap branches to identify',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Lesser Occipital Nerve (C2)', x: 45, y: 15, description: 'Ascends along the posterior border of SCM. Supplies the skin behind the ear and the posterior scalp. Emerges at Erb point with the other sensory branches.' },
      { name: 'Great Auricular Nerve (C2-C3)', x: 40, y: 25, description: 'Largest sensory branch. Crosses SCM superficially at Erb point. Supplies the ear lobule, parotid skin, and angle of the mandible. Almost always sacrificed during parotidectomy.' },
      { name: 'Transverse Cervical Nerve (C2-C3)', x: 45, y: 38, description: 'Crosses SCM horizontally to supply the anterior neck skin. Used as a landmark for the accessory nerve, which crosses 1-2 cm above it in the posterior triangle.' },
      { name: 'Supraclavicular Nerves (C3-C4)', x: 55, y: 55, description: 'Fan out over the clavicle (medial, intermediate, lateral branches). Supply sensation to the lower neck, shoulder, and upper chest. Can be harvested as a sensory nerve graft.' },
      { name: 'Phrenic Nerve (C3-C5)', x: 30, y: 45, description: 'Motor to the diaphragm. Descends on the anterior scalene deep to the prevertebral fascia. Injury during level V dissection → ipsilateral diaphragm paralysis → dyspnoea, especially if bilateral.' },
    ],
  },

  {
    id: 'eur-hn-anat-hyoid-relationships',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Hyoid Bone Relationships',
    subtitle: 'Tap structures to identify',
    svgType: 'larynx',
    structures: [
      { name: 'Hyoid Body', x: 50, y: 30, description: 'U-shaped bone at C3 level. The only bone not articulating with another bone. Key landmark dividing the suprahyoid and infrahyoid neck. Fractured in strangulation — forensic significance.' },
      { name: 'Greater Horn', x: 70, y: 32, description: 'Projects posterolaterally. Palpable bilaterally. The lingual artery passes deep to the hyoglossus at this level. Landmark for the lingual artery ligation in tongue base haemorrhage.' },
      { name: 'Thyrohyoid Membrane', x: 50, y: 45, description: 'Connects the hyoid to the thyroid cartilage. Pierced by the internal branch of the SLN and the superior laryngeal artery. The pre-epiglottic space lies posterior to it.' },
      { name: 'Suprahyoid Muscles', x: 35, y: 20, description: 'Digastric, mylohyoid, geniohyoid, stylohyoid. Elevate the hyoid during swallowing. Key floor of mouth muscles. Mylohyoid forms the diaphragm of the mouth — divides oral and cervical compartments.' },
      { name: 'Infrahyoid (Strap) Muscles', x: 35, y: 55, description: 'Sternohyoid, omohyoid, sternothyroid, thyrohyoid. Depress the hyoid/larynx. Innervated by ansa cervicalis (C1-C3) except thyrohyoid (C1 via XII). Retracted/divided during thyroidectomy.' },
    ],
  },

  {
    id: 'eur-hn-anat-sinus-anatomy',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Paranasal Sinuses — Drainage',
    subtitle: 'Tap sinuses to learn drainage patterns',
    svgType: 'sinuses',
    structures: [
      { name: 'Maxillary Sinus', x: 35, y: 50, description: 'Largest paranasal sinus. Drains via the natural ostium into the middle meatus (hiatus semilunaris). Ostium is high on the medial wall — dependent drainage is poor. Most common sinus involved in sinusitis.' },
      { name: 'Frontal Sinus', x: 50, y: 15, description: 'Drains via the frontal recess into the middle meatus. The nasofrontal duct pathway is highly variable. Frontal sinusitis can cause serious complications: frontal osteomyelitis (Pott puffy tumour), epidural/subdural abscess.' },
      { name: 'Anterior Ethmoid Cells', x: 55, y: 35, description: 'Drain into the middle meatus via the ethmoid infundibulum. Supplied by the anterior ethmoidal artery (from ophthalmic artery). The lamina papyracea (paper-thin orbital wall) is medial — risk of orbital complications.' },
      { name: 'Posterior Ethmoid Cells', x: 60, y: 40, description: 'Drain into the superior meatus (or supreme meatus). Close to the optic nerve and skull base. The posterior ethmoidal artery marks the anterior skull base level — important landmark during FESS.' },
      { name: 'Sphenoid Sinus', x: 65, y: 45, description: 'Drains into the sphenoethmoidal recess. Intimately related to the ICA, optic nerve, and cavernous sinus. Sphenoid sinusitis can cause CN VI palsy or cavernous sinus thrombosis. Transphenoidal approach used for pituitary surgery.' },
    ],
  },

  {
    id: 'eur-hn-anat-lateral-nasal-wall',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Lateral Nasal Wall',
    subtitle: 'Tap structures for FESS anatomy',
    svgType: 'sinuses',
    structures: [
      { name: 'Inferior Turbinate', x: 40, y: 65, description: 'Largest turbinate — a separate bone. The inferior meatus lies below it. The nasolacrimal duct opens here (anterior inferior meatus). Turbinate reduction may be needed for nasal obstruction.' },
      { name: 'Middle Turbinate', x: 40, y: 42, description: 'Part of the ethmoid bone. The middle meatus lies below it — the key drainage area for the maxillary, anterior ethmoid, and frontal sinuses. A concha bullosa (pneumatised middle turbinate) can obstruct the OMC.' },
      { name: 'Uncinate Process', x: 50, y: 50, description: 'Thin bony projection of the ethmoid. Forms the medial wall of the ethmoid infundibulum. Removed during uncinectomy — the first step of FESS. Its attachment superiorly determines frontal sinus drainage.' },
      { name: 'Hiatus Semilunaris', x: 55, y: 48, description: 'Crescent-shaped gap between the uncinate process and the ethmoid bulla. Opens into the ethmoid infundibulum. The maxillary sinus natural ostium drains into the posterior end of this structure.' },
      { name: 'Sphenopalatine Foramen', x: 70, y: 55, description: 'Located posterior to the middle turbinate attachment. The sphenopalatine artery enters the nose here. Primary target for SPA ligation in intractable posterior epistaxis.' },
    ],
  },

  {
    id: 'eur-hn-anat-orbit-sinus-relation',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Orbit-Sinus Relationships',
    subtitle: 'Tap for orbital complications anatomy',
    svgType: 'sinuses',
    structures: [
      { name: 'Lamina Papyracea', x: 35, y: 35, description: 'Paper-thin medial orbital wall (ethmoid bone). Separates the ethmoid cells from the orbit. The most common route for orbital complications of sinusitis — subperiosteal abscess, orbital cellulitis. Also the boundary at risk during FESS.' },
      { name: 'Orbital Floor (Maxillary Roof)', x: 40, y: 55, description: 'Floor of the orbit = roof of the maxillary sinus. Contains the infraorbital nerve (V2). Blowout fractures occur here. Maxillary sinus cancer can invade the orbit through this wall — orbital exenteration may be needed.' },
      { name: 'Frontal Sinus (Roof of Orbit)', x: 45, y: 15, description: 'The floor of the frontal sinus forms part of the orbital roof. Frontal sinusitis can cause frontal osteomyelitis (Pott puffy tumour) or intracranial complications (epidural abscess, subdural empyema, meningitis).' },
      { name: 'Anterior Ethmoidal Artery', x: 55, y: 30, description: 'Passes from the orbit through the ethmoidal foramina to the anterior skull base. Key landmark during FESS — marks the level of the skull base anteriorly. If transected, can retract into the orbit causing orbital haematoma.' },
      { name: 'Optic Nerve', x: 65, y: 40, description: 'Passes through the optic canal. The posterior ethmoid cells and sphenoid sinus are closely related — Onodi cell (sphenoethmoidal cell) can directly abut the optic nerve. At risk during posterior ethmoidectomy and sphenoidotomy.' },
    ],
  },

  {
    id: 'eur-hn-anat-skull-base-foramina',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Skull Base Foramina — H&N Relevant',
    subtitle: 'Tap for cranial nerve exits',
    svgType: 'sinuses',
    structures: [
      { name: 'Foramen Ovale', x: 30, y: 40, description: 'Transmits V3 (mandibular nerve) and accessory meningeal artery. Perineural tumour spread (e.g. adenoid cystic carcinoma) along V3 reaches the middle cranial fossa via this foramen. MRI may show foraminal widening.' },
      { name: 'Foramen Rotundum', x: 35, y: 30, description: 'Transmits V2 (maxillary nerve) from the middle cranial fossa to the pterygopalatine fossa. Nasopharyngeal and sinonasal cancers can spread intracranially via this route. NPC frequently involves V2.' },
      { name: 'Jugular Foramen', x: 70, y: 50, description: 'Transmits CN IX, X, XI (pars nervosa) and the IJV (pars vascularis). Glomus jugulare paraganglioma arises here — pulsatile tinnitus, CN palsies. Jugular foramen syndrome: CN IX, X, XI palsies (Vernet syndrome).' },
      { name: 'Hypoglossal Canal', x: 65, y: 60, description: 'Transmits CN XII. Lies medial to the jugular foramen. Lesions here (metastases, meningioma, chordoma) cause ipsilateral tongue deviation and wasting.' },
      { name: 'Stylomastoid Foramen', x: 75, y: 45, description: 'Exit point of CN VII (facial nerve). Between the styloid and mastoid processes. Landmark in parotid surgery — the nerve exits here before entering the parotid gland. Skull base tumours can compress CN VII at this point.' },
    ],
  },

  {
    id: 'eur-hn-anat-infratemporal-fossa',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Infratemporal Fossa',
    subtitle: 'Tap structures for deep space anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Pterygoid Muscles', x: 40, y: 30, description: 'Lateral pterygoid: opens the jaw and protrudes the mandible. Medial pterygoid: closes the jaw. Both via V3. Trismus from infection or tumour invasion indicates masticator space involvement.' },
      { name: 'Maxillary Artery', x: 50, y: 25, description: 'Terminal branch of the ECA. Passes through the infratemporal fossa (superficial or deep to the lateral pterygoid). Gives middle meningeal artery, inferior alveolar artery, and terminates as the sphenopalatine artery.' },
      { name: 'Mandibular Nerve (V3)', x: 55, y: 20, description: 'Exits the skull via foramen ovale. Gives the inferior alveolar nerve (sensation to lower teeth/chin), lingual nerve (sensation to anterior 2/3 tongue), and motor branches to the muscles of mastication.' },
      { name: 'Pterygoid Venous Plexus', x: 45, y: 40, description: 'Dense venous network around the pterygoid muscles. Communicates with the cavernous sinus via emissary veins — route for infection spread from dental/facial infections to the intracranial cavity.' },
      { name: 'Chorda Tympani', x: 60, y: 35, description: 'Branch of CN VII. Exits the skull via the petrotympanic fissure and joins the lingual nerve in the infratemporal fossa. Carries taste (anterior 2/3 tongue) and parasympathetic fibres (submandibular/sublingual glands).' },
    ],
  },

  {
    id: 'eur-hn-anat-floor-of-mouth',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Floor of Mouth Anatomy',
    subtitle: 'Tap structures for surgical anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Mylohyoid Muscle', x: 50, y: 35, description: 'Diaphragm of the mouth — separates the oral cavity from the neck. Originates from the mylohyoid line of the mandible, inserts into the hyoid. Sublingual space is above, submandibular/submental spaces below.' },
      { name: 'Sublingual Gland', x: 40, y: 25, description: 'Lies beneath the floor of mouth mucosa, above mylohyoid. Drains via the ducts of Rivinus into the floor of mouth. Simple ranula: retention cyst. Plunging ranula: extends through mylohyoid into the neck.' },
      { name: "Wharton's Duct", x: 55, y: 20, description: 'Submandibular duct. Runs from the deep part of the submandibular gland, across the floor of mouth above mylohyoid, to open at the sublingual caruncle beside the frenulum. Most common site for sialolithiasis (long, uphill course).' },
      { name: 'Lingual Nerve', x: 60, y: 30, description: "Runs in the floor of mouth medial to the 3rd molar. Passes lateral to Wharton's duct, then loops under it to lie medial. At risk during floor of mouth surgery and wisdom tooth extraction." },
      { name: 'Lingual Artery', x: 45, y: 45, description: 'ECA branch. Enters the tongue deep to hyoglossus muscle. The ranine (deep lingual) artery runs near the ventral tongue surface. Ligation needed for tongue base haemorrhage — access via the hyoglossus.' },
    ],
  },

  {
    id: 'eur-hn-anat-mandible-surgical',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Mandible — Surgical Anatomy',
    subtitle: 'Tap landmarks for oncologic surgery',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Mandibular Body', x: 45, y: 55, description: 'The horizontal portion bearing the teeth. Contains the inferior alveolar nerve canal. Oral cavity cancers (floor of mouth, gingiva) invade here. Depth of bone invasion determines marginal vs segmental resection.' },
      { name: 'Angle of Mandible', x: 70, y: 50, description: 'Junction of the body and ramus. Landmark separating neck trauma zones II and III. The masseter and medial pterygoid insert here. Mandibular swing osteotomy (mandibulotomy) for access to the oropharynx is performed anteriorly (parasymphyseal).' },
      { name: 'Mental Foramen', x: 35, y: 50, description: 'Transmits the mental nerve (terminal branch of inferior alveolar nerve — V3). Provides sensation to the lower lip and chin. Below the 2nd premolar tooth. "Numb chin syndrome" from perineural invasion = red flag for malignancy.' },
      { name: 'Inferior Alveolar Nerve', x: 55, y: 60, description: 'Branch of V3. Enters the mandibular foramen on the inner ramus, travels through the mandibular canal. Tumour invasion of the canal mandates segmental mandibulectomy. Gives the mental nerve at the mental foramen.' },
      { name: 'Coronoid Process', x: 60, y: 30, description: 'Anterior superior projection of the ramus. Attachment of temporalis muscle. Can be resected (coronoidectomy) to improve mouth opening in patients with trismus from fibrosis or tumour.' },
    ],
  },

  {
    id: 'eur-hn-anat-carotid-body-region',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Carotid Body & Paraganglioma Sites',
    subtitle: 'Tap locations for paraganglioma anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Carotid Body', x: 40, y: 40, description: 'Chemoreceptor at the carotid bifurcation (adventitia of the CCA). Detects changes in O2, CO2, and pH. Carotid body tumour: painless mass with Fontaine sign (mobile horizontally, not vertically). Lyre sign on angiography.' },
      { name: 'Glomus Jugulare', x: 65, y: 18, description: 'Paraganglioma arising from the jugular bulb (adventitia of the jugular foramen). Presents with pulsatile tinnitus, conductive hearing loss, lower CN palsies (IX-XII). Red/blue mass behind the TM (rising sun sign).' },
      { name: 'Glomus Tympanicum', x: 70, y: 25, description: 'Arises from paraganglia along the Jacobson nerve (CN IX tympanic branch) on the cochlear promontory. Presents with pulsatile tinnitus, red mass on otoscopy. Smaller than glomus jugulare — does not erode the jugular bulb.' },
      { name: 'Glomus Vagale', x: 45, y: 30, description: 'Arises from paraganglia of the vagus nerve. Presents as a parapharyngeal mass displacing the carotid vessels anteromedially (vs carotid body tumour which splays the bifurcation). Vagal nerve palsy (hoarseness) is common.' },
      { name: 'Carotid Bifurcation', x: 42, y: 48, description: 'CCA divides at C3-C4 level. ICA (posterolateral) and ECA (anteromedial). Carotid body tumours are classified by Shamblin: I (small, easily dissected), II (partially encases vessels), III (encases ICA — may need vascular reconstruction).' },
    ],
  },

  {
    id: 'eur-hn-anat-facial-nerve-branches',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Facial Nerve — Extracranial Branches',
    subtitle: 'Tap branches to learn clinical testing',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Temporal Branch', x: 35, y: 12, description: 'Crosses the zygomatic arch to the frontalis. Tests: raise the eyebrows, wrinkle forehead. Injury = inability to raise the eyebrow. At risk in temporal/preauricular approaches. Runs in the superficial temporal fascia.' },
      { name: 'Zygomatic Branch', x: 30, y: 22, description: 'Crosses the zygomatic bone to orbicularis oculi. Tests: close the eyes tightly. Injury = lagophthalmos (incomplete eye closure) → corneal exposure. Gold weight lid loading is the treatment for paralytic lagophthalmos.' },
      { name: 'Buccal Branch', x: 25, y: 35, description: 'Crosses the buccinator to the muscles of the midface. Tests: puff out cheeks, smile. Usually has cross-innervation with the zygomatic branch — isolated injury may have limited impact.' },
      { name: 'Marginal Mandibular Branch', x: 30, y: 50, description: 'Runs along or below the mandible to the lower lip depressors. Tests: show the bottom teeth, grimace. Injury = inability to depress the lower lip → asymmetric smile. Most commonly injured branch in neck/parotid surgery.' },
      { name: 'Cervical Branch', x: 35, y: 60, description: 'Descends to the platysma muscle. Tests: tense the neck (grimace downward). Injury is generally well-tolerated with minimal cosmetic or functional deficit. Deep to platysma in the neck.' },
    ],
  },

  {
    id: 'eur-hn-anat-nasal-septum-supply',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Nasal Septum Blood Supply',
    subtitle: 'Tap arteries to identify',
    svgType: 'sinuses',
    structures: [
      { name: "Kiesselbach's Plexus (Little's Area)", x: 40, y: 45, description: 'Anterior septum — anastomosis of 4 arteries. Most common site of epistaxis (90% are anterior). Rich capillary network just under the mucosa. Treated with cautery or anterior nasal packing.' },
      { name: 'Anterior Ethmoidal Artery', x: 45, y: 25, description: 'From the ophthalmic artery (ICA territory). Supplies the anterior superior septum and lateral nasal wall. Enters the nose through the anterior ethmoidal foramen (at the skull base level).' },
      { name: 'Sphenopalatine Artery', x: 70, y: 40, description: 'Terminal branch of the maxillary artery (ECA territory). Main supply to the posterior septum and lateral nasal wall. Target for SPA ligation in intractable posterior epistaxis. Enters via the sphenopalatine foramen.' },
      { name: 'Superior Labial Artery', x: 30, y: 55, description: 'Branch of the facial artery. Supplies the anterior inferior septum and nasal vestibule. Contributes to Kiesselbach plexus. Accessed through the columella.' },
      { name: 'Greater Palatine Artery', x: 50, y: 60, description: 'Branch of the maxillary artery. Ascends through the incisive canal to supply the anterior inferior septum. Contributes to Kiesselbach plexus. The "forgotten" artery in epistaxis management.' },
    ],
  },

  {
    id: 'eur-hn-anat-congenital-neck-masses',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Congenital Neck Mass Locations',
    subtitle: 'Tap locations to learn differential',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Midline — Thyroglossal Duct Cyst', x: 50, y: 35, description: 'Most common congenital midline neck mass. Moves with swallowing AND tongue protrusion (attached to foramen caecum via the thyroglossal duct). 65% are infrahyoid. Treatment: Sistrunk procedure (cyst + central hyoid body + tract to foramen caecum).' },
      { name: 'Lateral — 2nd Branchial Cleft Cyst', x: 28, y: 45, description: 'Most common lateral congenital neck mass (95% of branchial anomalies). Anterior border of SCM at the junction of upper and middle thirds. Fistula tract passes between ICA and ECA to the tonsillar fossa.' },
      { name: 'Posterior Triangle — Cystic Hygroma', x: 72, y: 50, description: 'Lymphatic malformation. 75% in the posterior triangle. Soft, compressible, transilluminant. 90% present by age 2. Can enlarge with URTI. Associated with Turner syndrome.' },
      { name: 'Submental — Dermoid Cyst', x: 50, y: 25, description: 'Midline, does NOT move with tongue protrusion (distinguishes from thyroglossal duct cyst). Contains ectodermal elements (hair, sebaceous glands). Can be suprahyoid or submental. Treatment: excision.' },
      { name: 'Supraclavicular — 1st Rib Area', x: 55, y: 75, description: 'Supraclavicular masses in children: consider cystic hygroma (lymphatic malformation extending into mediastinum) or, rarely, cervical rib. In adults: suspect metastatic disease (Virchow node) or lymphoma.' },
    ],
  },

  {
    id: 'eur-hn-anat-branchial-arches',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Pharyngeal (Branchial) Arches',
    subtitle: 'Tap arches for embryology',
    svgType: 'neck-fascial',
    structures: [
      { name: '1st Arch (Meckel)', x: 40, y: 15, description: 'Nerve: V (trigeminal). Muscles: mastication (masseter, temporalis, pterygoids), mylohyoid, anterior digastric, tensor tympani, tensor veli palatini. Cartilage: Meckel cartilage → malleus, incus, mandible.' },
      { name: '2nd Arch (Reichert)', x: 40, y: 30, description: 'Nerve: VII (facial). Muscles: facial expression, stapedius, stylohyoid, posterior digastric, platysma. Cartilage: Reichert cartilage → stapes, styloid process, lesser horn of hyoid, upper body of hyoid.' },
      { name: '3rd Arch', x: 40, y: 48, description: 'Nerve: IX (glossopharyngeal). Muscle: stylopharyngeus (ONLY muscle from 3rd arch). Cartilage: greater horn and lower body of hyoid. Pouch: inferior parathyroid (3rd pouch → descends further than 4th pouch parathyroid).' },
      { name: '4th Arch', x: 40, y: 65, description: 'Nerve: X — superior laryngeal nerve branch. Muscles: cricothyroid, pharyngeal constrictors, levator veli palatini. Cartilage: thyroid cartilage. Pouch: superior parathyroid and ultimobranchial body (C cells of thyroid).' },
      { name: '6th Arch', x: 40, y: 82, description: 'Nerve: X — recurrent laryngeal nerve branch. Muscles: all intrinsic laryngeal muscles EXCEPT cricothyroid. Cartilage: cricoid, arytenoid, corniculate, cuneiform. Artery: pulmonary arteries, ductus arteriosus (left).' },
    ],
  },

  {
    id: 'eur-hn-anat-scalene-gap',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Scalene Region & Thoracic Outlet',
    subtitle: 'Tap for neurovascular anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Anterior Scalene Muscle', x: 40, y: 40, description: 'From transverse processes of C3-C6 to the first rib. Phrenic nerve descends on its anterior surface. Subclavian vein passes anterior to it. The interscalene gap (between anterior and middle scalene) contains the subclavian artery and brachial plexus.' },
      { name: 'Middle Scalene Muscle', x: 55, y: 45, description: 'Posterior wall of the interscalene gap. The brachial plexus roots and subclavian artery emerge between the anterior and middle scalene muscles. The dorsal scapular nerve pierces it. Long thoracic nerve passes anterior or through it.' },
      { name: 'Subclavian Artery', x: 48, y: 60, description: 'Passes through the interscalene gap over the first rib. Gives the vertebral artery, thyrocervical trunk, and internal thoracic artery. Zone I penetrating neck injuries can involve this vessel — may require thoracotomy for access.' },
      { name: 'Brachial Plexus', x: 52, y: 50, description: 'C5-T1 roots form trunks in the interscalene gap. Upper trunk (C5-C6) can be accessed in the posterior triangle for nerve grafting. Interscalene brachial plexus block is performed here for shoulder surgery.' },
      { name: 'Thoracic Duct / Subclavian Vein', x: 35, y: 65, description: 'Subclavian vein passes anterior to the anterior scalene (separated from the artery). Thoracic duct enters at the left venous angle (junction of IJV and subclavian vein). Chyle leak risk during left level IV dissection.' },
    ],
  },

  {
    id: 'eur-hn-anat-fibula-flap-anatomy',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Fibula Free Flap — Donor Anatomy',
    subtitle: 'Tap structures for flap harvest',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Fibula Bone', x: 50, y: 50, description: 'Up to 25 cm of vascularised bone can be harvested (preserve 6 cm proximally for knee stability and 6 cm distally for ankle). Osteotomies allow contouring to reconstruct the mandible (neomandible). Gold standard for mandibular reconstruction.' },
      { name: 'Peroneal Artery & Veins', x: 40, y: 45, description: 'Vascular pedicle from the posterior tibial-peroneal trunk. Runs in the deep posterior compartment between tibialis posterior and flexor hallucis longus. Pedicle length ~6-8 cm. Comitant veins for venous drainage.' },
      { name: 'Skin Paddle', x: 55, y: 55, description: 'Fasciocutaneous skin paddle based on septocutaneous perforators passing through the posterior intermuscular septum. Can be used for intraoral lining. Perforator mapping with Doppler pre-operatively is essential.' },
      { name: 'Peroneal Nerve', x: 45, y: 30, description: 'Common peroneal nerve wraps around the fibular neck — must be preserved during proximal dissection. Injury causes foot drop (unable to dorsiflex). Always identify and protect before osteotomy.' },
      { name: 'Pre-op Assessment', x: 55, y: 70, description: 'Allen test equivalent: CT angiography or Doppler to confirm a patent anterior tibial and posterior tibial artery (must ensure the foot is adequately perfused after peroneal artery harvest). Avoid in patients with peripheral vascular disease.' },
    ],
  },

  {
    id: 'eur-hn-anat-radial-forearm-flap',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Radial Forearm Free Flap — Donor Anatomy',
    subtitle: 'Tap structures for flap harvest',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Radial Artery', x: 45, y: 45, description: 'Vascular pedicle. Runs between brachioradialis and flexor carpi radialis in the forearm. Long pedicle (~15-20 cm) is a major advantage. Pre-operative Allen test is mandatory to confirm adequate perfusion via the ulnar artery.' },
      { name: 'Cephalic Vein', x: 55, y: 35, description: 'Superficial venous drainage. Runs on the radial (lateral) side of the forearm. Provides a large-calibre, superficial vein that is easy to anastomose in the neck.' },
      { name: 'Venae Comitantes', x: 40, y: 50, description: 'Deep paired veins running with the radial artery. Provide additional venous drainage. Both superficial (cephalic) and deep (comitant) veins can be used — dual venous drainage reduces congestion risk.' },
      { name: 'Skin Paddle', x: 50, y: 55, description: 'Thin, pliable fasciocutaneous tissue — ideal for oral cavity and oropharyngeal lining. Can be harvested with a segment of radius (osteocutaneous flap) for small bony defects. Donor site closed with split-thickness skin graft.' },
      { name: 'Lateral Antebrachial Cutaneous Nerve', x: 55, y: 40, description: 'Sensory nerve of the forearm. Can be anastomosed to the lingual nerve to create a sensate flap for oral reconstruction. Improves functional outcomes (sensation, swallowing) in tongue reconstruction.' },
    ],
  },

  {
    id: 'eur-hn-anat-neck-dissection-boundaries',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Comprehensive Neck Dissection — Boundaries',
    subtitle: 'Tap landmarks for surgical limits',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Superior Boundary', x: 50, y: 12, description: 'Lower border of the mandible, mastoid tip, and skull base. Level I dissection includes the submental and submandibular triangles. The marginal mandibular nerve defines the superior limit — protect by retracting superiorly.' },
      { name: 'Inferior Boundary', x: 50, y: 85, description: 'Clavicle. Level IV extends to the clavicle along the IJV. Level V (supraclavicular triangle) extends to the clavicle posterolaterally. The thoracic duct (left) and subclavian vessels are at risk here.' },
      { name: 'Anterior Boundary', x: 25, y: 50, description: 'Midline of the neck (median raphe of the strap muscles). Level IA (submental) is the only bilateral level — crosses the midline. Central compartment (level VI) lies between the carotid sheaths.' },
      { name: 'Posterior Boundary', x: 80, y: 50, description: 'Anterior border of the trapezius muscle. Level V (posterior triangle) extends to the trapezius. The spinal accessory nerve (CN XI) crosses this region and should be identified and preserved in selective dissections.' },
      { name: 'Deep Boundary', x: 50, y: 50, description: 'Prevertebral fascia and deep cervical muscles (scalenes, levator scapulae, splenius capitis). The floor of the dissection. The phrenic nerve lies deep to the prevertebral fascia on the anterior scalene — should not be encountered if the fascia is respected.' },
    ],
  },

  {
    id: 'eur-hn-anat-parapharyngeal-space',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Parapharyngeal Space — Compartments',
    subtitle: 'Tap compartments to learn tumour anatomy',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Prestyloid (Anterior) Compartment', x: 35, y: 35, description: 'Contains fat, minor salivary gland rests, internal maxillary artery, V3. Tumours: deep lobe parotid tumours (most common), minor salivary gland tumours. Parotid tumours displace the parapharyngeal fat medially.' },
      { name: 'Poststyloid (Posterior) Compartment', x: 65, y: 35, description: 'Contains ICA, IJV, CN IX-XII, sympathetic chain, lymph nodes. Tumours: paragangliomas (glomus vagale, carotid body), schwannomas (CN X, sympathetic chain), lymph node metastases.' },
      { name: 'Styloid Process', x: 50, y: 25, description: 'Bony landmark dividing the PPS into prestyloid and poststyloid compartments. Attached muscles: styloglossus, stylohyoid, stylopharyngeus. The stylomandibular ligament runs from styloid to mandible angle.' },
      { name: 'Internal Carotid Artery', x: 60, y: 50, description: 'Runs in the poststyloid compartment. Can be displaced by tumours — pre-operative CTA/MRA essential. In DiGeorge syndrome, an aberrant medialized ICA can lie in the retropharyngeal space — danger during adenoidectomy.' },
      { name: 'Deep Lobe Parotid', x: 30, y: 45, description: 'The parotid deep lobe extends medial to the mandible into the prestyloid PPS. "Dumbbell" tumours: part in the parotid, part in the PPS. Surgical approach: transparotid (identify CN VII first) ± mandibulotomy for large tumours.' },
    ],
  },

  {
    id: 'eur-hn-anat-jugular-foramen',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Jugular Foramen & Contents',
    subtitle: 'Tap structures for skull base anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'CN IX (Glossopharyngeal)', x: 35, y: 25, description: 'Passes through the pars nervosa (anteromedial). Motor to stylopharyngeus. Sensory/taste to the posterior 1/3 tongue. Carries parasympathetic fibres to the parotid (via otic ganglion). Jacobson nerve (tympanic branch) → middle ear → glomus tympanicum origin.' },
      { name: 'CN X (Vagus)', x: 50, y: 30, description: 'Passes through the pars nervosa. Longest cranial nerve — runs in the carotid sheath throughout the neck. Superior laryngeal nerve (C2-C3) and recurrent laryngeal nerve (thorax) are key branches. Motor to all pharyngeal/laryngeal muscles (except stylopharyngeus and tensor veli palatini).' },
      { name: 'CN XI (Spinal Accessory)', x: 60, y: 35, description: 'Passes through the pars nervosa (or between the two parts). Spinal root ascends from C1-C5, enters the skull via foramen magnum, then exits through the jugular foramen. Motor to SCM and trapezius. Most commonly injured nerve in neck dissection.' },
      { name: 'Internal Jugular Vein', x: 70, y: 40, description: 'Exits through the pars vascularis (posterolateral, larger compartment). Begins as the jugular bulb — the site of glomus jugulare paragangliomas. IJV injury at the skull base is extremely challenging to control.' },
      { name: 'Vernet Syndrome', x: 50, y: 50, description: 'Jugular foramen syndrome: combined CN IX, X, XI palsies. Causes: glomus jugulare, schwannoma, meningioma, metastasis, nasopharyngeal carcinoma extension. Presents with dysphagia, hoarseness, palatal weakness, and shoulder drop.' },
    ],
  },

  {
    id: 'eur-hn-anat-sympathetic-chain-neck',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Cervical Sympathetic Chain',
    subtitle: 'Tap ganglia for Horner syndrome anatomy',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Superior Cervical Ganglion', x: 40, y: 20, description: 'Largest ganglion. At C2-C3 level, behind the ICA. Postganglionic fibres travel with the ICA to supply the dilator pupillae, Müller muscle (upper eyelid), and facial sweat glands. Damage → Horner syndrome.' },
      { name: 'Middle Cervical Ganglion', x: 40, y: 45, description: 'At C6 level, near the inferior thyroid artery. Variable in size, may be absent. Connected to the stellate ganglion by the ansa subclavia (loops around the subclavian artery). At risk during thyroidectomy.' },
      { name: 'Stellate (Cervicothoracic) Ganglion', x: 40, y: 70, description: 'Fusion of the inferior cervical and first thoracic ganglia. At C7-T1 level, anterior to the neck of the first rib. Stellate ganglion block used for complex regional pain syndrome. Damage → Horner syndrome.' },
      { name: 'Horner Syndrome Triad', x: 65, y: 35, description: 'Miosis (constricted pupil), ptosis (drooping eyelid), and anhidrosis (absent sweating) on the affected side. Also enophthalmos (sunken eye). Caused by disruption of the sympathetic chain anywhere from hypothalamus to eye.' },
      { name: 'Sympathetic Chain Course', x: 55, y: 50, description: 'Lies in the prevertebral fascia, posterior to the carotid sheath. Runs from skull base to the thorax behind the great vessels. At risk during neck dissection (especially radical), thyroidectomy, anterior cervical spine surgery, and with apical lung tumours (Pancoast).' },
    ],
  },

  {
    id: 'eur-hn-anat-free-flap-recipient-vessels',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Recipient Vessels for H&N Free Flaps',
    subtitle: 'Tap vessels for microvascular anatomy',
    svgType: 'neck-triangles',
    structures: [
      { name: 'Facial Artery', x: 35, y: 30, description: 'Common recipient artery for oral cavity/oropharyngeal reconstructions. Accessible in level IB. Good calibre match for radial forearm artery. May be unavailable if ligated during prior neck dissection or submandibular gland excision.' },
      { name: 'Superior Thyroid Artery', x: 30, y: 55, description: 'Reliable recipient artery. Accessible in the carotid triangle. Good when facial artery is unavailable. Pedicle may need to be directed inferiorly. First branch of the ECA.' },
      { name: 'External Jugular Vein', x: 60, y: 40, description: 'Superficial vein crossing SCM. Good calibre for venous drainage of free flaps. Easily accessible. May be unavailable after prior neck dissection. End-to-end or end-to-side anastomosis.' },
      { name: 'Internal Jugular Vein', x: 50, y: 45, description: 'End-to-side anastomosis to the IJV when branch veins are unavailable. Provides robust venous outflow. Requires careful clamping technique. Usually the backup option when facial/thyroid veins are absent.' },
      { name: 'Transverse Cervical Artery', x: 65, y: 60, description: 'Branch of the thyrocervical trunk. Crosses the posterior triangle. Used as an alternative recipient when ECA branches are unavailable (prior surgery, radiation). Also useful for scapula and latissimus flaps.' },
    ],
  },

  {
    id: 'eur-hn-anat-laryngeal-framework',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Laryngeal Framework — Anterior View',
    subtitle: 'Tap structures for surface anatomy',
    svgType: 'larynx',
    structures: [
      { name: 'Hyoid Bone', x: 50, y: 10, description: 'U-shaped bone at C3 level. Not a cartilage but the superior anchor of the larynx. Connected to the thyroid cartilage by the thyrohyoid membrane. Fractured in strangulation — forensic marker of manual strangulation.' },
      { name: 'Thyrohyoid Membrane', x: 50, y: 20, description: 'Connects hyoid to thyroid cartilage. Pierced by the internal branch of the SLN and superior laryngeal artery. The pre-epiglottic space lies posterior. Suprahyoid pharyngotomy enters here during laryngectomy.' },
      { name: 'Thyroid Cartilage', x: 50, y: 35, description: 'Laryngeal prominence (Adam\'s apple) at C4-C5. Superior thyroid notch is palpable. The oblique line on the external surface provides attachment for sternothyroid, thyrohyoid, and inferior constrictor.' },
      { name: 'Cricothyroid Membrane', x: 50, y: 50, description: 'Emergency airway access site (cricothyroidotomy). Avascular in the midline. Palpated as a depression between the thyroid and cricoid cartilages. Quick, safe, and reliable emergency airway in "can\'t intubate, can\'t oxygenate" scenarios.' },
      { name: 'Cricoid Cartilage', x: 50, y: 60, description: 'Complete signet ring at C6. Landmark for multiple procedures: cricoid pressure (RSI), tracheostomy site (rings below), and boundary between zones I and II in neck trauma. Cricotracheal resection for subglottic stenosis is performed here.' },
      { name: 'Tracheal Rings', x: 50, y: 78, description: 'C-shaped cartilaginous rings (open posteriorly). Tracheostomy between rings 2-3 or 3-4. Ring 1 avoided (subglottic stenosis risk). Low tracheostomy (below ring 4) risks tracheo-innominate fistula.' },
    ],
  },

  {
    id: 'eur-hn-anat-ansa-cervicalis',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Ansa Cervicalis & Strap Muscles',
    subtitle: 'Tap for motor innervation anatomy',
    svgType: 'neck-fascial',
    structures: [
      { name: 'Superior Root (C1)', x: 40, y: 20, description: 'Fibres from C1 travel briefly with the hypoglossal nerve (CN XII) before branching off as the superior root of the ansa cervicalis. Descends on the carotid sheath. Directly supplies the superior belly of omohyoid and thyrohyoid (via CN XII).' },
      { name: 'Inferior Root (C2-C3)', x: 55, y: 50, description: 'Descends from the cervical plexus (C2-C3). Loops around the IJV to join the superior root, forming the ansa on the anterior carotid sheath. Supplies sternohyoid and sternothyroid.' },
      { name: 'Ansa Loop', x: 45, y: 40, description: 'The junction of superior and inferior roots on the anterior carotid sheath. Variable position (over CCA or IJV). Can be used as a nerve graft donor for RLN reinnervation (ansa-to-RLN anastomosis) to improve voice after RLN sacrifice.' },
      { name: 'Sternohyoid', x: 35, y: 55, description: 'Most superficial strap muscle. From sternum and clavicle to hyoid. Depresses the hyoid. Innervated by the ansa cervicalis. Often divided during thyroidectomy for access to the thyroid gland.' },
      { name: 'Sternothyroid', x: 50, y: 65, description: 'Deep to sternohyoid. From sternum to oblique line of thyroid cartilage. Depresses the larynx. Tumour invasion through this muscle can indicate extrathyroidal extension in thyroid cancer (T3b/T4a).' },
    ],
  },

  {
    id: 'eur-hn-anat-pterygopalatine-fossa',
    type: 'anatomy',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Pterygopalatine Fossa',
    subtitle: 'Tap structures for neurovascular hub',
    svgType: 'sinuses',
    structures: [
      { name: 'Maxillary Nerve (V2)', x: 40, y: 25, description: 'Enters via foramen rotundum from the middle cranial fossa. Gives off the infraorbital nerve, superior alveolar nerves, and zygomatic nerve. Perineural tumour spread from palate/maxillary sinus travels along V2 to the skull base.' },
      { name: 'Sphenopalatine Artery', x: 55, y: 40, description: 'Terminal branch of the maxillary artery. Exits the fossa through the sphenopalatine foramen into the nasal cavity. Principal blood supply to the posterior nasal septum and lateral wall. Primary target for ligation in posterior epistaxis.' },
      { name: 'Pterygopalatine Ganglion', x: 45, y: 35, description: 'Parasympathetic ganglion (CN VII via greater petrosal nerve → nerve of pterygoid canal). Postganglionic fibres supply the lacrimal gland, nasal mucosa, and palatal glands. Sympathetic fibres pass through from the deep petrosal nerve.' },
      { name: 'Greater Palatine Nerve', x: 50, y: 55, description: 'Descends through the greater palatine canal to exit at the greater palatine foramen. Supplies the hard palate mucosa and gingiva. Greater palatine artery travels with it — a useful donor vessel for nasal septal flap in skull base surgery.' },
      { name: 'Vidian (Pterygoid) Canal', x: 60, y: 30, description: 'Transmits the nerve of the pterygoid canal (Vidian nerve = greater petrosal + deep petrosal nerves). Runs from the foramen lacerum to the pterygopalatine fossa. Key landmark in endoscopic skull base surgery — identifies the petrous ICA superolaterally.' },
    ],
  },
];
