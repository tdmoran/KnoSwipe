import type { CardData } from '../types';

export const meta = {
  slug: 'ucd-thyroid',
  name: 'UCD Thyroid & Salivary',
  description: 'Thyroid and salivary gland MCQs from the UCD 2026 lecture series',
  color: '#e04590',
};

export const cards: CardData[] = [

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 1: THYROID PHYSIOLOGY & BASICS
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-anatomy-vessels',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-03-img-2.jpg',
    imageCaption: 'Anterior view of the thyroid gland and its vascular supply',
    stem: 'This anatomical illustration shows the thyroid gland in situ. Which artery is NOT part of the thyroid arterial supply?',
    options: [
      { label: 'A', text: 'Internal carotid artery' },
      { label: 'B', text: 'Superior thyroid artery (from external carotid)' },
      { label: 'C', text: 'Inferior thyroid artery (from thyrocervical trunk)' },
      { label: 'D', text: 'Thyroidea ima artery (variable, from aortic arch)' },
    ],
    correctIndex: 0,
    explanation: 'The thyroid is supplied by the superior thyroid artery (first branch of the external carotid) and inferior thyroid artery (from the thyrocervical trunk of the subclavian). A variable thyroidea ima may arise from the brachiocephalic trunk or aortic arch. The internal carotid has no thyroid branches.',
  },

  {
    id: 'ucd-thy-physiology-t3t4',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'In thyroid hormone synthesis, T4 (thyroxine) is formed by the coupling of which molecules?',
    options: [
      { label: 'A', text: 'DIT + DIT (two diiodotyrosine molecules)' },
      { label: 'B', text: 'MIT + MIT (two monoiodotyrosine molecules)' },
      { label: 'C', text: 'MIT + DIT (monoiodotyrosine + diiodotyrosine)' },
      { label: 'D', text: 'Iodide + thyroglobulin directly' },
    ],
    correctIndex: 0,
    explanation: 'T4 is formed by coupling two DIT molecules (DIT + DIT = T4). T3 is formed by MIT + DIT. The process requires iodide trapping, oxidation to iodine, and binding to tyrosine residues on thyroglobulin.',
  },

  {
    id: 'ucd-thy-physiology-calcitonin',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Calcitonin is secreted by which thyroid cells and opposes the action of which hormone?',
    options: [
      { label: 'A', text: 'Parafollicular (C) cells; opposes parathyroid hormone' },
      { label: 'B', text: 'Follicular cells; opposes insulin' },
      { label: 'C', text: 'Parafollicular (C) cells; opposes cortisol' },
      { label: 'D', text: 'Oxyphil cells; opposes parathyroid hormone' },
    ],
    correctIndex: 0,
    explanation: 'Calcitonin is produced by the parafollicular C cells of the thyroid. It lowers serum calcium by inhibiting osteoclast activity, opposing the calcium-raising effect of parathyroid hormone (PTH). C cells are also the origin of medullary thyroid carcinoma.',
  },

  {
    id: 'ucd-thy-tsh-feedback',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'Thyroid stimulating hormone (TSH) is secreted by which structure and regulated by what mechanism?',
    options: [
      { label: 'A', text: 'Anterior pituitary; negative feedback by circulating T3/T4' },
      { label: 'B', text: 'Posterior pituitary; positive feedback by T3/T4' },
      { label: 'C', text: 'Hypothalamus; negative feedback by TSH levels' },
      { label: 'D', text: 'Thyroid gland; autoregulation by iodine levels' },
    ],
    correctIndex: 0,
    explanation: 'TSH is secreted by the anterior pituitary in response to TRH from the hypothalamus. Circulating T3 and T4 exert negative feedback on both the anterior pituitary (reducing TSH) and the hypothalamus (reducing TRH). This is the basis for thyroid function test interpretation.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 2: THYROID INVESTIGATIONS & IMAGING
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-retrosternal-ct',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-07-img-3.jpg',
    imageCaption: 'Coronal CT of the neck and thoracic inlet',
    stem: 'This coronal CT shows a large heterogeneous mass extending from the neck into the superior mediastinum. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Retrosternal goitre' },
      { label: 'B', text: 'Thymoma' },
      { label: 'C', text: 'Superior mediastinal lymphoma' },
      { label: 'D', text: 'Parathyroid adenoma' },
    ],
    correctIndex: 0,
    explanation: 'This CT shows a retrosternal goitre — a multinodular thyroid extending below the thoracic inlet. Key features include heterogeneous enhancement, tracheal deviation, and continuity with the cervical thyroid. Retrosternal goitres can cause compressive symptoms: dyspnoea (orthopnoea), dysphagia, venous congestion (Pemberton sign), and RLN palsy.',
  },

  {
    id: 'ucd-thy-pemberton-sign',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-08-img-4.jpg',
    imageCaption: 'Clinical photograph showing venous engorgement of the chest wall',
    stem: 'This patient has a large retrosternal goitre. The chest wall venous distension shown is elicited by a specific clinical test. What is this sign called?',
    options: [
      { label: 'A', text: "Pemberton's sign — arms raised above head causing facial congestion" },
      { label: 'B', text: "Trousseau's sign — carpal spasm with blood pressure cuff" },
      { label: 'C', text: "Chvostek's sign — facial twitch on tapping" },
      { label: 'D', text: "Horner's syndrome — miosis, ptosis, anhidrosis" },
    ],
    correctIndex: 0,
    explanation: "Pemberton's sign is elicited by asking the patient to raise both arms above the head for 1 minute. A retrosternal goitre acts as a 'cork' at the thoracic inlet, compressing the SVC/brachiocephalic veins, causing facial plethora, venous engorgement of the neck and chest wall, and sometimes stridor. It indicates significant retrosternal extension requiring surgery.",
  },

  {
    id: 'ucd-thy-surgery-indications',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'easy',
    imageUrl: '/images/thyroid/slide-10-img-5.jpg',
    imageCaption: 'Intraoperative photograph of a large thyroid gland being excised',
    stem: 'This large goitre is being surgically removed. Which of the following is NOT a standard indication for thyroid surgery?',
    options: [
      { label: 'A', text: 'Elevated TSH alone without structural abnormality' },
      { label: 'B', text: 'Suspicion of malignancy' },
      { label: 'C', text: 'Pressure symptoms (dyspnoea, dysphagia)' },
      { label: 'D', text: 'Uncontrolled hyperthyroidism' },
    ],
    correctIndex: 0,
    explanation: 'The four main indications for thyroid surgery are: (1) suspicion of malignancy, (2) pressure/compressive symptoms, (3) uncontrolled hyperthyroidism, and (4) cosmetic concerns. An elevated TSH alone (subclinical hypothyroidism) is managed medically with levothyroxine, not surgery.',
  },

  {
    id: 'ucd-thy-u-classification',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-17-img-7.png',
    imageCaption: 'BTA ultrasound U classification of thyroid nodules',
    stem: 'According to the BTA ultrasound U classification shown, which features characterise a U5 (malignant) thyroid nodule?',
    options: [
      { label: 'A', text: 'Solid, hypoechoic, lobulated/irregular outline, microcalcification' },
      { label: 'B', text: 'Pure cyst, anechoic with posterior enhancement' },
      { label: 'C', text: 'Homogeneous, hyperechoic, solid with halo' },
      { label: 'D', text: 'Spongiform appearance with multiple small cysts' },
    ],
    correctIndex: 0,
    explanation: 'BTA U5 (malignant) features include: solid hypoechoic nodule, lobulated or irregular outline, microcalcification (?papillary carcinoma), globular calcification (?medullary carcinoma), intra-nodular vascularity, shape taller-than-wide, and characteristic associated lymphadenopathy. U1 = normal, U2 = benign, U3 = indeterminate/equivocal, U4 = suspicious.',
  },

  {
    id: 'ucd-thy-tirads-table',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-18-img-9.png',
    imageCaption: 'TIRADS malignancy rates by classification',
    stem: 'This table shows malignancy rates by TIRADS classification in patients undergoing FNA for thyroid nodules. Which TIRADS category had the highest confirmed malignancy rate?',
    options: [
      { label: 'A', text: 'TR5 — approximately 8.2% confirmed malignancy' },
      { label: 'B', text: 'TR3 — approximately 7.7% confirmed malignancy' },
      { label: 'C', text: 'TR4 — approximately 22% confirmed malignancy' },
      { label: 'D', text: 'All categories had equal malignancy rates' },
    ],
    correctIndex: 2,
    explanation: 'From the data shown (FNA for thyroid nodules 2020-2023): TR3 had 14/95 (7.73%) malignancy, TR4 had 17/77 (22.08%) malignancy, and TR5 had 29/353 (8.22%) malignancy. TR4 had the highest proportion of confirmed malignancy. The higher absolute numbers in TR5 reflect more FNAs performed on suspicious nodules, but proportionally TR4 had a higher malignancy yield in this dataset.',
  },

  {
    id: 'ucd-thy-fna-procedure',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'easy',
    imageUrl: '/images/thyroid/slide-22-img-12.png',
    imageCaption: 'Clinical photograph of FNA being performed on a thyroid nodule',
    stem: 'This image shows fine needle aspiration cytology (FNAc) being performed on a thyroid nodule. What is the recommended gauge of needle for thyroid FNA?',
    options: [
      { label: 'A', text: '23-25 gauge fine needle' },
      { label: 'B', text: '14 gauge core biopsy needle' },
      { label: 'C', text: '18 gauge spinal needle' },
      { label: 'D', text: '11 gauge vacuum-assisted biopsy' },
    ],
    correctIndex: 0,
    explanation: 'Thyroid FNA uses a 23-25 gauge fine needle, ideally under ultrasound guidance. It is the gold standard initial investigation for thyroid nodules. FNA is safe, minimally invasive, and classified using the Thy/Bethesda system. USS guidance improves diagnostic yield and reduces non-diagnostic rates.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 3: THYROID CYTOLOGY — THY / BETHESDA
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-bethesda-malignancy',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-23-img-13.jpg',
    imageCaption: 'Malignancy risk by Thy cytology category',
    stem: 'This chart shows the risk of malignancy for each Thy cytology category. What is the approximate malignancy risk for Thy4 (suspicious of malignancy)?',
    options: [
      { label: 'A', text: '~79%' },
      { label: 'B', text: '~25%' },
      { label: 'C', text: '~5%' },
      { label: 'D', text: '~98%' },
    ],
    correctIndex: 0,
    explanation: 'Malignancy risk by Thy category: Thy1 (non-diagnostic) ~12%, Thy2 (benign) ~5%, Thy3a (atypical) ~25%, Thy3f (follicular neoplasm) ~31%, Thy4 (suspicious) ~79%, Thy5 (malignant) ~98%. Thy4 carries approximately 79% malignancy risk and warrants diagnostic surgery (lobectomy or total thyroidectomy).',
  },

  {
    id: 'ucd-thy-nodule-management',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A clinically discrete thyroid nodule is found incidentally. What percentage of solitary thyroid nodules prove to be malignant?',
    options: [
      { label: 'A', text: '5%' },
      { label: 'B', text: '25%' },
      { label: 'C', text: '50%' },
      { label: 'D', text: '1%' },
    ],
    correctIndex: 0,
    explanation: '5% of isolated thyroid swellings prove to be malignant. Of clinically discrete nodules, 70% are truly solitary and 30% are dominant nodules in a multinodular goitre. 30-40% are follicular adenomas, and the remainder are cysts, thyroiditis, or colloid degeneration. FNA is essential for triaging these nodules.',
  },

  {
    id: 'ucd-thy-pet-incidentaloma',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-39-img-17.jpg',
    imageCaption: 'PET-CT showing FDG-avid thyroid nodule',
    stem: 'This PET-CT shows an FDG-avid thyroid nodule found incidentally. What is the approximate malignancy rate for PET-incidental thyroid nodules?',
    options: [
      { label: 'A', text: '~30%' },
      { label: 'B', text: '~5%' },
      { label: 'C', text: '~1%' },
      { label: 'D', text: '~70%' },
    ],
    correctIndex: 0,
    explanation: 'PET-incidental thyroid nodules carry approximately 30% malignancy risk — significantly higher than nodules found by other means (~5%). Any FDG-avid thyroid nodule found incidentally on PET-CT requires urgent USS and FNA. This is increasingly common as PET-CT is more widely used in oncology staging.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 4: THYROID CANCER
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-papillary-histo',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-33-img-15.jpg',
    imageCaption: 'Histology slide of a thyroid carcinoma (H&E stain)',
    stem: 'This histological section shows papillary architecture with characteristic nuclear features. What nuclear feature is pathognomonic for papillary thyroid carcinoma?',
    options: [
      { label: 'A', text: '"Orphan Annie eye" nuclei — clear, ground-glass, overlapping' },
      { label: 'B', text: 'Psammoma bodies alone' },
      { label: 'C', text: 'Amyloid deposits with Congo red staining' },
      { label: 'D', text: 'Giant multinucleated cells' },
    ],
    correctIndex: 0,
    explanation: 'Papillary thyroid carcinoma is diagnosed by its nuclear features: "Orphan Annie eye" (optically clear, ground-glass) nuclei, nuclear grooves, and intranuclear pseudoinclusions. Psammoma bodies (concentric calcified lamellae) are also characteristic but not pathognomonic alone. Papillary carcinoma is the commonest thyroid malignancy (70-80%), has excellent prognosis, and spreads via lymphatics.',
  },

  {
    id: 'ucd-thy-papillary-spread',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Papillary thyroid carcinoma is the commonest thyroid malignancy. What is its primary route of spread?',
    options: [
      { label: 'A', text: 'Lymphatic spread to cervical lymph nodes' },
      { label: 'B', text: 'Haematogenous spread to lungs and bone' },
      { label: 'C', text: 'Perineural invasion along the recurrent laryngeal nerve' },
      { label: 'D', text: 'Direct invasion through the trachea' },
    ],
    correctIndex: 0,
    explanation: 'Papillary thyroid carcinoma spreads primarily via lymphatics to cervical lymph nodes. Multifocal disease within the thyroid is common. Despite lymph node metastases, prognosis is excellent (>95% 10-year survival for most patients). In contrast, follicular carcinoma spreads haematogenously to lung and bone.',
  },

  {
    id: 'ucd-thy-follicular-vascular',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-35-img-16.jpg',
    imageCaption: 'Histology showing capsular and vascular invasion in a thyroid tumour',
    stem: 'This histological section demonstrates tumour cells within a blood vessel (vascular invasion). This finding is critical for differentiating follicular carcinoma from follicular adenoma. What is the primary route of metastasis in follicular thyroid carcinoma?',
    options: [
      { label: 'A', text: 'Haematogenous spread to lung and bone' },
      { label: 'B', text: 'Lymphatic spread to cervical nodes' },
      { label: 'C', text: 'Direct extension to trachea' },
      { label: 'D', text: 'Peritoneal seeding' },
    ],
    correctIndex: 0,
    explanation: 'Follicular thyroid carcinoma is distinguished from follicular adenoma by capsular and/or vascular invasion on final histology — this cannot be determined on FNA (Thy3f requires diagnostic lobectomy). It metastasises haematogenously to lung and bone, unlike papillary carcinoma which spreads via lymphatics. FNA cannot distinguish follicular adenoma from carcinoma.',
  },

  {
    id: 'ucd-thy-medullary-calcitonin',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Medullary thyroid carcinoma arises from parafollicular C cells. Which tumour marker is characteristically elevated and what percentage are familial?',
    options: [
      { label: 'A', text: 'Calcitonin and CEA; 20-25% are familial (MEN 2)' },
      { label: 'B', text: 'Thyroglobulin; 50% are familial' },
      { label: 'C', text: 'AFP; 10% are familial' },
      { label: 'D', text: 'CA-125; all are sporadic' },
    ],
    correctIndex: 0,
    explanation: 'Medullary thyroid carcinoma produces calcitonin and CEA (tumour markers for follow-up). 20-25% are familial, associated with MEN 2A (medullary carcinoma + phaeochromocytoma + hyperparathyroidism) and MEN 2B (medullary carcinoma + phaeochromocytoma + mucosal neuromas + marfanoid habitus). RET proto-oncogene testing is essential. Histologically shows amyloid stroma.',
  },

  {
    id: 'ucd-thy-anaplastic',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Anaplastic thyroid carcinoma typically presents in elderly patients. What is the prognosis and recommended treatment?',
    options: [
      { label: 'A', text: 'Very poor prognosis (~6 months); palliative chemo-radiation, rarely operable' },
      { label: 'B', text: 'Excellent prognosis; total thyroidectomy and RAI' },
      { label: 'C', text: 'Good prognosis with lobectomy alone' },
      { label: 'D', text: 'Moderate prognosis with external beam radiation only' },
    ],
    correctIndex: 0,
    explanation: 'Anaplastic (undifferentiated) thyroid carcinoma is one of the most aggressive human cancers, with median survival of approximately 6 months. It occurs in elderly patients, often transforming from a longstanding differentiated carcinoma. It does not take up radioiodine. Treatment is usually palliative chemotherapy and/or radiation. Surgery may be considered for debulking or airway protection if technically feasible.',
  },

  {
    id: 'ucd-thy-lymphoma',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Primary thyroid lymphoma is rare. What pre-existing thyroid condition is the main risk factor, and what is the treatment?',
    options: [
      { label: 'A', text: "Hashimoto's thyroiditis; chemotherapy +/- radiation (not surgery)" },
      { label: 'B', text: "Graves' disease; total thyroidectomy" },
      { label: 'C', text: 'Multinodular goitre; radioiodine ablation' },
      { label: 'D', text: 'De Quervain thyroiditis; steroids' },
    ],
    correctIndex: 0,
    explanation: "Primary thyroid lymphoma (usually DLBCL or MALT) has a strong association with Hashimoto's thyroiditis — the chronic lymphocytic infiltration predisposes to lymphoid malignant transformation. It presents as a rapidly enlarging thyroid mass. Diagnosis requires core biopsy (FNA alone is insufficient). Treatment is chemotherapy (CHOP) +/- radiation, NOT surgery. 60x increased risk with Hashimoto's.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 5: THYROIDECTOMY & COMPLICATIONS
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-laryngotracheal-specimen',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-40-img-18.jpg',
    imageCaption: 'Surgical specimen: total thyroidectomy with central compartment dissection',
    stem: 'This specimen shows a thyroid with attached tracheal segment, indicating locally advanced disease. For locally invasive thyroid carcinoma involving the trachea, what procedure has been performed?',
    options: [
      { label: 'A', text: 'Total thyroidectomy with shave excision/window resection of trachea' },
      { label: 'B', text: 'Subtotal thyroidectomy only' },
      { label: 'C', text: 'Lobectomy with isthmusectomy' },
      { label: 'D', text: 'Tracheostomy alone' },
    ],
    correctIndex: 0,
    explanation: 'When differentiated thyroid carcinoma invades the trachea, an en-bloc resection is required. This may involve shave excision (for superficial invasion) or window/segmental tracheal resection for deeper invasion, as part of a total thyroidectomy. The specimen shows the thyroid gland with attached tracheal segment and central compartment lymph nodes.',
  },

  {
    id: 'ucd-thy-dunhill-procedure',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A near-total thyroidectomy leaving up to 2g of thyroid tissue is known by what name?',
    options: [
      { label: 'A', text: 'Dunhill procedure' },
      { label: 'B', text: 'Hartmann procedure' },
      { label: 'C', text: 'Sistrunk procedure' },
      { label: 'D', text: 'Whipple procedure' },
    ],
    correctIndex: 0,
    explanation: 'The Dunhill procedure is a near-total thyroidectomy leaving up to 2g of normal thyroid tissue (usually around the RLN/parathyroids on one side). Subtotal thyroidectomy leaves up to 8g. The Sistrunk procedure is for thyroglossal duct cysts. Options for multinodular goitre include total thyroidectomy, subtotal, near-total (Dunhill), or lobectomy with isthmusectomy.',
  },

  {
    id: 'ucd-thy-rln-injury',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Recurrent laryngeal nerve (RLN) injury is a feared complication of thyroid surgery. Unilateral RLN palsy typically presents with which symptom?',
    options: [
      { label: 'A', text: 'Hoarse, breathy voice with intact airway' },
      { label: 'B', text: 'Complete aphonia and stridor requiring tracheostomy' },
      { label: 'C', text: 'Dysphagia without voice change' },
      { label: 'D', text: 'High-pitched voice with normal volume' },
    ],
    correctIndex: 0,
    explanation: 'Unilateral RLN palsy causes a hoarse, breathy voice due to paralysis of one vocal cord (typically in the paramedian position). The airway is usually adequate. Bilateral RLN palsy is a surgical emergency causing stridor and potential airway obstruction requiring reintubation or tracheostomy. The external branch of the superior laryngeal nerve (EBSLN) is also at risk — its injury causes loss of high-pitched phonation.',
  },

  {
    id: 'ucd-thy-bilateral-rln',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Bilateral recurrent laryngeal nerve injury during thyroidectomy is a surgical emergency. What is the immediate concern and management?',
    options: [
      { label: 'A', text: 'Airway obstruction from bilateral vocal cord adduction; reintubation or tracheostomy' },
      { label: 'B', text: 'Voice loss only; speech therapy' },
      { label: 'C', text: 'Aspiration pneumonia; antibiotics' },
      { label: 'D', text: 'Thyroid storm; beta-blockers and Lugol iodine' },
    ],
    correctIndex: 0,
    explanation: 'Bilateral RLN injury causes both vocal cords to lie in the adducted (midline) position, resulting in acute airway obstruction with stridor. This is a life-threatening emergency requiring immediate reintubation or tracheostomy. Intraoperative nerve monitoring (IONM) is increasingly used to reduce this risk. The rate of permanent bilateral RLN palsy should be <1% in experienced hands.',
  },

  {
    id: 'ucd-thy-hypocalcaemia',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient develops perioral tingling, carpopedal spasm, and a positive Chvostek sign 24 hours after total thyroidectomy. What is the most likely cause?',
    options: [
      { label: 'A', text: 'Hypocalcaemia due to hypoparathyroidism' },
      { label: 'B', text: 'Recurrent laryngeal nerve palsy' },
      { label: 'C', text: 'Post-operative haematoma' },
      { label: 'D', text: 'Thyroid storm' },
    ],
    correctIndex: 0,
    explanation: 'Hypocalcaemia from hypoparathyroidism (inadvertent removal or devascularisation of parathyroid glands) is the most common complication after total thyroidectomy. Symptoms include perioral paraesthesia, tingling in fingers/toes, carpopedal spasm (Trousseau sign), and positive Chvostek sign (facial twitch on tapping). Treatment: IV calcium gluconate acutely, then oral calcium and calcitriol.',
  },

  {
    id: 'ucd-thy-post-op-haematoma',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A patient develops acute neck swelling and stridor 4 hours after thyroidectomy. What is the immediate management?',
    options: [
      { label: 'A', text: 'Open the wound at the bedside to evacuate haematoma, then return to theatre' },
      { label: 'B', text: 'IV dexamethasone and observe' },
      { label: 'C', text: 'Urgent CT neck' },
      { label: 'D', text: 'Nebulised adrenaline and wait' },
    ],
    correctIndex: 0,
    explanation: 'Post-thyroidectomy haematoma with airway compromise is a surgical emergency. The neck wound should be opened immediately at the bedside (removing clips/sutures) to decompress the haematoma before definitive haemostasis in theatre. Delay for imaging can be fatal. The haematoma causes venous and lymphatic congestion of the larynx, compounding the airway obstruction beyond simple mechanical compression.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 6: PARATHYROID
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-hyperparathyroidism',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Primary hyperparathyroidism is most commonly caused by which pathology?',
    options: [
      { label: 'A', text: 'Solitary parathyroid adenoma (85%)' },
      { label: 'B', text: 'Four-gland hyperplasia (85%)' },
      { label: 'C', text: 'Parathyroid carcinoma (85%)' },
      { label: 'D', text: 'Ectopic PTH secretion from lung cancer' },
    ],
    correctIndex: 0,
    explanation: 'Primary hyperparathyroidism: 85% solitary adenoma, 10-15% four-gland hyperplasia (associated with MEN 1 and MEN 2A), <1% parathyroid carcinoma. Clinical features remembered as "bones, stones, abdominal moans, and psychic groans" — osteoporosis, renal calculi, abdominal pain/constipation, and depression/confusion. Diagnosis: elevated calcium with inappropriate (non-suppressed) PTH.',
  },

  {
    id: 'ucd-thy-bones-stones',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'The classic clinical features of primary hyperparathyroidism are summarised by which mnemonic?',
    options: [
      { label: 'A', text: '"Bones, stones, abdominal moans, and psychic groans"' },
      { label: 'B', text: '"Lump, bump, dump, and pump"' },
      { label: 'C', text: '"Tall, thin, tremor, tachycardia"' },
      { label: 'D', text: '"Weight loss, weakness, wasting, warmth"' },
    ],
    correctIndex: 0,
    explanation: 'Bones = osteitis fibrosa cystica/osteoporosis, Stones = renal calculi (calcium phosphate/oxalate), Abdominal moans = constipation/pancreatitis/peptic ulcer, Psychic groans = depression/confusion/fatigue. Most cases today are detected incidentally on routine bloods (asymptomatic hypercalcaemia). Definitive treatment of primary hyperparathyroidism is parathyroidectomy.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 7: SALIVARY GLANDS — ANATOMY
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-salivary-anatomy',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'easy',
    imageUrl: '/images/thyroid/slide-45-img-21.jpg',
    imageCaption: 'Anatomy of the major salivary glands',
    stem: 'This diagram shows the three pairs of major salivary glands. What percentage of salivary gland tumours occur in the parotid gland?',
    options: [
      { label: 'A', text: '80%' },
      { label: 'B', text: '50%' },
      { label: 'C', text: '15%' },
      { label: 'D', text: '10%' },
    ],
    correctIndex: 0,
    explanation: '80% of salivary gland tumours occur in the parotid gland. Of parotid tumours, 80% are benign. Of the benign parotid tumours, 80% are pleomorphic adenomas (the "rule of 80s"). 15% of salivary tumours occur in the submandibular gland (50:50 benign:malignant), and 10% in sublingual/minor glands (60-70% malignant). The smaller the gland, the higher the malignancy rate.',
  },

  {
    id: 'ucd-thy-parotid-nerve',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-48-img-23.jpg',
    imageCaption: 'Netter illustration: facial nerve branches and parotid gland',
    stem: 'This Netter illustration shows the facial nerve (CN VII) traversing the parotid gland. The facial nerve divides the parotid into superficial and deep lobes. Which structure is used intraoperatively to locate the main trunk of the facial nerve?',
    options: [
      { label: 'A', text: 'Tragal pointer — nerve lies 1cm deep and inferior to the tragal cartilage' },
      { label: 'B', text: 'Angle of mandible — nerve runs along the periosteum' },
      { label: 'C', text: 'Stensen duct — nerve runs parallel and superior' },
      { label: 'D', text: 'External auditory canal — nerve exits through the canal' },
    ],
    correctIndex: 0,
    explanation: 'The tragal pointer is the key surgical landmark — the main trunk of the facial nerve lies approximately 1cm deep and inferior to the tip of the tragal cartilage. Other landmarks include the tympanomastoid suture and the posterior belly of digastric muscle. The nerve exits the stylomastoid foramen and enters the parotid, dividing into temporofacial and cervicofacial divisions (5 terminal branches: temporal, zygomatic, buccal, marginal mandibular, cervical).',
  },

  {
    id: 'ucd-thy-facial-nerve-branches',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-49-img-24.jpg',
    imageCaption: 'Facial nerve branches and parotid gland — sectioned view',
    stem: 'This sectioned view shows the five terminal branches of the facial nerve within the parotid. Which branch is most at risk during submandibular gland excision?',
    options: [
      { label: 'A', text: 'Marginal mandibular branch' },
      { label: 'B', text: 'Temporal branch' },
      { label: 'C', text: 'Buccal branch' },
      { label: 'D', text: 'Cervical branch' },
    ],
    correctIndex: 0,
    explanation: 'The marginal mandibular branch of the facial nerve runs along the lower border of the mandible (sometimes dipping below it) and is at risk during submandibular gland excision and neck dissection. Injury causes inability to depress the lower lip on the affected side (asymmetric smile). The five branches are remembered by "To Zanzibar By Motor Car" — Temporal, Zygomatic, Buccal, Marginal mandibular, Cervical.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 8: PAROTID GLAND PATHOLOGY
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-parotid-swelling',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'easy',
    imageUrl: '/images/thyroid/slide-46-img-22.jpg',
    imageCaption: 'Clinical photograph of a parotid swelling',
    stem: 'This elderly patient has a painless, slow-growing parotid swelling with intact facial nerve function. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Pleomorphic adenoma (benign mixed tumour)' },
      { label: 'B', text: 'Adenoid cystic carcinoma' },
      { label: 'C', text: 'Parotid abscess' },
      { label: 'D', text: 'Lymphoma of the parotid' },
    ],
    correctIndex: 0,
    explanation: 'Pleomorphic adenoma is the commonest parotid tumour (80% of benign parotid tumours). It presents as a painless, slow-growing, well-defined mass with intact facial nerve function. Signs suggesting malignancy include: pain, rapid growth, facial nerve palsy, skin fixation, cervical lymphadenopathy, and trismus. Treatment is superficial parotidectomy (not enucleation, due to risk of recurrence from pseudopod extensions).',
  },

  {
    id: 'ucd-thy-parotid-young',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-52-img-26.png',
    imageCaption: 'Clinical photograph of a parotid mass in a young patient',
    stem: 'This young patient presents with a smooth parotid swelling. FNAC shows pleomorphic adenoma. What is the treatment of choice?',
    options: [
      { label: 'A', text: 'Superficial parotidectomy with facial nerve preservation' },
      { label: 'B', text: 'Enucleation of the tumour only' },
      { label: 'C', text: 'Radical parotidectomy with facial nerve sacrifice' },
      { label: 'D', text: 'Radiotherapy alone' },
    ],
    correctIndex: 0,
    explanation: 'Superficial parotidectomy with facial nerve preservation is the treatment of choice for pleomorphic adenoma. Simple enucleation is contraindicated because the tumour has pseudopod extensions through its incomplete capsule — enucleation leads to high recurrence rates (~20-45%). Pleomorphic adenomas are radioresistant. Incisional biopsy is also contraindicated due to tumour seeding risk. Malignant transformation occurs in 3-5% over time (1% per year).',
  },

  {
    id: 'ucd-thy-carcinoma-ex-pleo',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A patient with a 15-year history of a parotid pleomorphic adenoma now presents with pain, rapid growth, and facial nerve palsy. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Carcinoma ex pleomorphic adenoma (malignant transformation)' },
      { label: 'B', text: 'Warthin tumour (papillary cystadenoma)' },
      { label: 'C', text: 'Acute parotitis' },
      { label: 'D', text: 'Basal cell adenoma' },
    ],
    correctIndex: 0,
    explanation: 'Carcinoma ex pleomorphic adenoma occurs in 3-5% of pleomorphic adenomas, typically after long duration (10-20 years, ~1% per year). Warning signs: pain in a previously painless mass, rapid growth, hardening of the tumour, facial nerve involvement, lymphadenopathy, and trismus. Treatment is radical parotidectomy +/- neck dissection and adjuvant radiotherapy.',
  },

  {
    id: 'ucd-thy-warthin-tumour',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: "Warthin's tumour (papillary cystadenoma lymphomatosum) has several distinguishing features. Which statement is TRUE?",
    options: [
      { label: 'A', text: 'Occurs only in the parotid, 10% bilateral, associated with smoking males, no malignant potential' },
      { label: 'B', text: 'Occurs in all salivary glands, never bilateral, affects young women' },
      { label: 'C', text: 'Has 50% malignant transformation rate' },
      { label: 'D', text: 'Most common in the submandibular gland' },
    ],
    correctIndex: 0,
    explanation: "Warthin's tumour is the second most common benign parotid tumour (5-15%). Key features: occurs ONLY in the parotid gland, typically in the lower pole, 10% bilateral, strong association with smoking, male predominance, and NO malignant potential. It is a papillary cystadenoma with lymphoid stroma. It shows uptake on technetium scan (\"hot\" on isotope scan).",
  },

  {
    id: 'ucd-thy-adenoid-cystic',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-68-img-28.jpg',
    imageCaption: 'Intraoral photograph showing a tumour involving the palate',
    stem: 'This intraoral image shows a salivary gland tumour. Adenoid cystic carcinoma is known for its characteristic behaviour. Which feature best describes this tumour?',
    options: [
      { label: 'A', text: 'Perineural invasion with pain; late lung metastases (10-year tumour); extent always greater than apparent' },
      { label: 'B', text: 'Rapid growth with early lymph node metastases; excellent prognosis' },
      { label: 'C', text: 'Benign behaviour with no recurrence after excision' },
      { label: 'D', text: 'Exclusively occurs in the parotid gland' },
    ],
    correctIndex: 0,
    explanation: 'Adenoid cystic carcinoma is characterised by: (1) perineural invasion (PNI) — causing pain and numbness, (2) indolent but relentless course — the "10-year tumour" with late pulmonary metastases appearing up to 10 years after treatment, (3) tumour extent always exceeds clinical and radiological appearance. It is more common in minor salivary glands > submandibular > parotid. Consists of myoepithelial and duct epithelial cells in cribriform, tubular, or solid patterns.',
  },

  {
    id: 'ucd-thy-mucoepidermoid',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'What is the most common malignant tumour of the salivary glands?',
    options: [
      { label: 'A', text: 'Mucoepidermoid carcinoma' },
      { label: 'B', text: 'Adenoid cystic carcinoma' },
      { label: 'C', text: 'Acinic cell carcinoma' },
      { label: 'D', text: 'Squamous cell carcinoma' },
    ],
    correctIndex: 0,
    explanation: 'Mucoepidermoid carcinoma is the most common malignant salivary gland tumour. It can be low, intermediate, or high grade. Low-grade tumours are slow-growing with good prognosis; high-grade tumours behave aggressively. They are hard, may become fixed, and can metastasise to lymph nodes. The malignant salivary tumour hierarchy is: mucoepidermoid > adenoid cystic > adenocarcinoma.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 9: PAROTID SURGERY & COMPLICATIONS
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-parotidectomy-types',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A radical parotidectomy includes sacrifice of the facial nerve. What is the indication for this procedure?',
    options: [
      { label: 'A', text: 'Invasive malignancy with facial nerve involvement' },
      { label: 'B', text: 'Recurrent pleomorphic adenoma' },
      { label: 'C', text: 'Warthin tumour' },
      { label: 'D', text: 'Chronic parotitis' },
    ],
    correctIndex: 0,
    explanation: 'Radical parotidectomy (with facial nerve sacrifice) is reserved for invasive malignancy directly involving the facial nerve. Superficial parotidectomy removes tissue superficial to the nerve (for most benign tumours). Total conservative parotidectomy preserves the nerve while removing both lobes (for benign deep lobe tumours). After radical parotidectomy, nerve reconstruction options include static sling or dynamic reanimation using the hypoglossal nerve.',
  },

  {
    id: 'ucd-thy-frey-syndrome',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: "Frey's syndrome is a recognised complication of parotid surgery. What causes it and how does it present?",
    options: [
      { label: 'A', text: 'Aberrant regeneration of parasympathetic auriculotemporal nerve fibres causing gustatory sweating' },
      { label: 'B', text: 'Facial nerve injury causing hemifacial spasm' },
      { label: 'C', text: 'Sialocele formation causing chronic swelling' },
      { label: 'D', text: 'Infection of the parotid bed causing fever and pain' },
    ],
    correctIndex: 0,
    explanation: "Frey's syndrome (gustatory sweating/auriculotemporal syndrome) occurs when severed parasympathetic secretomotor fibres from the auriculotemporal nerve aberrantly regenerate to innervate sweat glands in the overlying skin instead of the parotid gland. Patients experience sweating and flushing over the parotid region during meals. Diagnosed by Minor's starch-iodine test. Treatment: botulinum toxin injection or interposition flap (e.g., SCM or SMAS) during primary surgery.",
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 10: SUBMANDIBULAR GLAND
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-smg-anatomy',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: "The submandibular gland is divided into superficial and deep parts by which muscle?",
    options: [
      { label: 'A', text: 'Mylohyoid muscle' },
      { label: 'B', text: 'Digastric muscle' },
      { label: 'C', text: 'Geniohyoid muscle' },
      { label: 'D', text: 'Masseter muscle' },
    ],
    correctIndex: 0,
    explanation: 'The submandibular gland wraps around the posterior free edge of the mylohyoid muscle. The superficial part lies in the submandibular triangle (between the two bellies of digastric and the mandible). The deep part lies above and deep to mylohyoid in the floor of mouth. Wharton duct (~5cm) runs forward from the deep part to open on a papilla beside the frenulum of the tongue.',
  },

  {
    id: 'ucd-thy-wharton-duct',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-80-img-34.jpg',
    imageCaption: 'Floor of mouth showing Wharton duct papillae',
    stem: "This image shows the floor of the mouth with arrows pointing to structures beside the frenulum. What are these structures?",
    options: [
      { label: 'A', text: "Wharton's duct papillae (submandibular duct openings)" },
      { label: 'B', text: 'Sublingual gland duct openings' },
      { label: 'C', text: 'Minor salivary gland openings' },
      { label: 'D', text: "Stensen's duct papillae (parotid duct openings)" },
    ],
    correctIndex: 0,
    explanation: "Wharton's duct (submandibular duct) is approximately 5cm long and opens on papillae beside the frenulum of the tongue in the floor of the mouth. The duct runs forward from the deep part of the submandibular gland, passing between the mylohyoid and hyoglossus muscles. It is closely related to the lingual nerve, which loops under it (important during surgical stone retrieval). Stensen's duct (parotid) opens opposite the upper second molar.",
  },

  {
    id: 'ucd-thy-smg-calculus-xray',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-90-img-40.jpg',
    imageCaption: 'Floor of mouth radiograph showing a radio-opaque calculus',
    stem: 'This plain X-ray shows a radio-opaque stone in the floor of the mouth. What percentage of salivary stones occur in the submandibular gland?',
    options: [
      { label: 'A', text: '80-90%' },
      { label: 'B', text: '50%' },
      { label: 'C', text: '10%' },
      { label: 'D', text: '30%' },
    ],
    correctIndex: 0,
    explanation: "80-90% of salivary stones occur in the submandibular gland/Wharton's duct. This is because: (1) the duct is long and dependent (gravity-dependent drainage), (2) the saliva is more alkaline and calcium-rich (mucous secretion), (3) the duct courses upward against gravity. Stones cause obstructive sialadenitis with mealtime swelling and pain. 80% of submandibular stones are radio-opaque (vs. 80% of parotid stones are radiolucent).",
  },

  {
    id: 'ucd-thy-smg-stone-intraoral',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-91-img-41.jpg',
    imageCaption: 'Intraoral surgical retrieval of a submandibular duct stone',
    stem: 'This image shows a salivary stone being retrieved from the floor of the mouth. Which nerve is at greatest risk of injury during this intraoral approach to duct stone removal?',
    options: [
      { label: 'A', text: 'Lingual nerve' },
      { label: 'B', text: 'Hypoglossal nerve' },
      { label: 'C', text: 'Inferior alveolar nerve' },
      { label: 'D', text: 'Glossopharyngeal nerve' },
    ],
    correctIndex: 0,
    explanation: "The lingual nerve is intimately related to Wharton's duct — it loops under the duct in the floor of the mouth (described as the lingual nerve crossing the duct twice). During intraoral stone retrieval, the lingual nerve is at greatest risk. Injury causes numbness of the ipsilateral tongue (anterior two-thirds general sensation and taste via chorda tympani). The hypoglossal nerve is at risk during submandibular gland excision via the neck approach.",
  },

  {
    id: 'ucd-thy-sialendoscopy',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-56-img-27.jpg',
    imageCaption: 'Illustration of sialendoscopy being performed via Wharton duct',
    stem: 'This illustration shows a sialendoscope being inserted into a salivary duct. What is the primary indication for sialendoscopy?',
    options: [
      { label: 'A', text: 'Diagnostic and therapeutic management of salivary duct stones and strictures' },
      { label: 'B', text: 'Biopsy of parotid tumours' },
      { label: 'C', text: 'Treatment of salivary gland malignancy' },
      { label: 'D', text: 'Botulinum toxin injection for sialorrhoea' },
    ],
    correctIndex: 0,
    explanation: 'Sialendoscopy is a minimally invasive technique for diagnosing and treating obstructive salivary gland disease (stones, strictures, mucous plugs). A miniature endoscope is inserted into the duct, allowing direct visualisation, stone retrieval with baskets/lithotripsy, and dilatation of strictures. It can avoid gland excision in many cases, preserving gland function. It is not used for tumour management.',
  },

  {
    id: 'ucd-thy-smg-excision-nerves',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/thyroid/slide-83-img-36.jpg',
    imageCaption: 'Anatomy of the lingual nerve in relation to the submandibular gland',
    stem: 'This anatomical diagram shows the lingual nerve in relation to the floor of mouth and submandibular region. During submandibular gland excision, which THREE nerves must be preserved?',
    options: [
      { label: 'A', text: 'Marginal mandibular (CN VII), lingual (CN V3), and hypoglossal (CN XII)' },
      { label: 'B', text: 'Facial main trunk (CN VII), glossopharyngeal (CN IX), and vagus (CN X)' },
      { label: 'C', text: 'Inferior alveolar (CN V3), spinal accessory (CN XI), and phrenic (C3-5)' },
      { label: 'D', text: 'Auriculotemporal (CN V3), greater auricular (C2-3), and ansa cervicalis' },
    ],
    correctIndex: 0,
    explanation: 'The three nerves at risk during submandibular gland excision are: (1) Marginal mandibular branch of CN VII — runs along the lower mandible, injury causes lower lip droop; (2) Lingual nerve (CN V3) — intimately related to the deep part of the gland and Wharton duct, injury causes tongue numbness; (3) Hypoglossal nerve (CN XII) — runs deep to the gland on hyoglossus, injury causes ipsilateral tongue deviation. The mnemonic "SHIP" is used for complications: Scar, Haematoma, Infection, Paralysis of nerves.',
  },

  {
    id: 'ucd-thy-hypoglossal-anatomy',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/thyroid/slide-84-img-37.png',
    imageCaption: 'Anatomy of the hypoglossal nerve (CN XII) in the neck',
    stem: 'This diagram shows the hypoglossal nerve (CN XII) in the upper neck. What is the clinical consequence of unilateral hypoglossal nerve injury?',
    options: [
      { label: 'A', text: 'Tongue deviates towards the affected side on protrusion' },
      { label: 'B', text: 'Tongue deviates away from the affected side' },
      { label: 'C', text: 'Loss of taste on the anterior two-thirds of the tongue' },
      { label: 'D', text: 'Loss of sensation on the posterior third of the tongue' },
    ],
    correctIndex: 0,
    explanation: 'The hypoglossal nerve (CN XII) is the motor nerve to the tongue (all intrinsic muscles + most extrinsic muscles except palatoglossus). Unilateral injury causes the tongue to deviate TOWARDS the affected side on protrusion (the functioning genioglossus on the normal side pushes the tongue across). CN XII is at risk during submandibular gland excision, carotid endarterectomy, and neck dissection.',
  },

  // ═══════════════════════════════════════════════════════════════════
  // SECTION 11: SALIVARY GLAND — RULES & KEY FACTS
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'ucd-thy-rule-of-80s',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'The "Rule of 80s" applies to salivary gland tumours. Which statement correctly describes this rule?',
    options: [
      { label: 'A', text: '80% in parotid, 80% of parotid tumours are benign, 80% of benign parotid tumours are pleomorphic adenomas' },
      { label: 'B', text: '80% in submandibular, 80% are malignant, 80% metastasise' },
      { label: 'C', text: '80% are bilateral, 80% recur, 80% need radiation' },
      { label: 'D', text: '80% in minor glands, 80% need chemotherapy, 80% 5-year survival' },
    ],
    correctIndex: 0,
    explanation: 'The "Rule of 80s" is a key surgical teaching point: 80% of salivary tumours occur in the parotid, 80% of parotid tumours are benign, and 80% of benign parotid tumours are pleomorphic adenomas. An important corollary: the smaller the gland, the higher the malignancy rate — sublingual and minor salivary glands have 60-70% malignancy rates.',
  },

  {
    id: 'ucd-thy-smg-tumours',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: '15% of salivary tumours occur in the submandibular gland. What is the benign-to-malignant ratio for submandibular gland tumours?',
    options: [
      { label: 'A', text: '50% benign : 50% malignant' },
      { label: 'B', text: '80% benign : 20% malignant' },
      { label: 'C', text: '30% benign : 70% malignant' },
      { label: 'D', text: '90% benign : 10% malignant' },
    ],
    correctIndex: 0,
    explanation: 'Submandibular gland tumours are 50:50 benign:malignant — a much higher malignancy rate than the parotid (20% malignant). Pleomorphic adenoma is still the most common tumour. Enlargement of the submandibular gland is more commonly due to calculus (stone) disease than tumour. A hard submandibular mass must be differentiated from an enlarged submandibular lymph node.',
  },

  {
    id: 'ucd-thy-acinic-cell',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Acinic cell carcinoma of the salivary glands has specific characteristics. Which statement is correct?',
    options: [
      { label: 'A', text: 'Almost exclusively in the parotid; more common in women; rare, slow-growing, sometimes cystic' },
      { label: 'B', text: 'Most common in the submandibular gland; rapidly progressive; affects children' },
      { label: 'C', text: 'Only occurs in minor salivary glands; highly aggressive' },
      { label: 'D', text: 'Always bilateral; associated with smoking' },
    ],
    correctIndex: 0,
    explanation: 'Acinic cell carcinoma almost exclusively occurs in the parotid gland. It is composed of cells resembling serous acini. It is more common in women, rare, slow-growing, and tends to be soft and occasionally cystic. Despite being classified as malignant, it generally has a favourable prognosis. Treatment is surgical excision (parotidectomy with facial nerve preservation).',
  },

  {
    id: 'ucd-thy-stensen-duct',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'easy',
    imageUrl: '/images/thyroid/slide-51-img-25.jpg',
    imageCaption: 'Intraoral photograph showing a duct opening',
    stem: "This intraoral image shows the opening of Stensen's duct (parotid duct). Where does it open into the oral cavity?",
    options: [
      { label: 'A', text: 'Buccal mucosa opposite the upper second molar tooth' },
      { label: 'B', text: 'Floor of mouth beside the frenulum of the tongue' },
      { label: 'C', text: 'Hard palate near the incisive papilla' },
      { label: 'D', text: 'Soft palate beside the tonsil' },
    ],
    correctIndex: 0,
    explanation: "Stensen's duct (parotid duct) crosses the masseter, turns medially through the buccinator muscle, and opens on a papilla on the buccal mucosa opposite the upper second molar tooth. Wharton's duct (submandibular) opens beside the frenulum of the tongue in the floor of mouth. Identifying these landmarks is important for diagnosing ductal obstruction, sialadenitis, and performing sialendoscopy.",
  },
];
