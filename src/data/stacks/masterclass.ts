import type { CardData } from '../types';

export const meta = {
  slug: 'masterclass',
  name: 'ENT Masterclass',
  description: 'High-yield ENT review from the Masterclass Yearbooks 2008–2016',
  color: '#4d8eff',
};

export const cards: CardData[] = [

  // ═══════════════════════════════════════════════════════════════════
  //  OTOLOGY  (~25 cards)
  // ═══════════════════════════════════════════════════════════════════

  // ─── QUIZ ──────────────────────────────────────────────────────────

  {
    id: 'mc-oto-cholesteatoma-quiz',
    type: 'quiz',
    category: 'otology',
    difficulty: 'medium',
    stem: 'A 35-year-old presents with foul-smelling otorrhoea, conductive hearing loss, and a retraction pocket with white debris in the posterosuperior pars tensa. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Acquired cholesteatoma' },
      { label: 'B', text: 'Chronic suppurative otitis media (mucosal type)' },
      { label: 'C', text: 'Keratosis obturans' },
      { label: 'D', text: 'External auditory canal cholesteatoma' },
    ],
    correctIndex: 0,
    explanation: 'A posterosuperior retraction pocket filled with white keratinous debris is the hallmark of acquired cholesteatoma. Keratosis obturans presents with bilateral canal plugs in younger patients, while EAC cholesteatoma erodes the floor of the canal. Mucosal CSOM lacks the white debris collection.',
  },

  {
    id: 'mc-oto-bppv-canal',
    type: 'quiz',
    category: 'otology',
    difficulty: 'easy',
    stem: 'Which semicircular canal is most commonly affected in benign paroxysmal positional vertigo (BPPV)?',
    options: [
      { label: 'A', text: 'Posterior semicircular canal' },
      { label: 'B', text: 'Horizontal (lateral) semicircular canal' },
      { label: 'C', text: 'Superior (anterior) semicircular canal' },
      { label: 'D', text: 'All canals equally' },
    ],
    correctIndex: 0,
    explanation: 'The posterior semicircular canal is affected in 80–90% of BPPV cases because it is the most gravity-dependent canal when supine. Otoconia from the degenerating utricular macula fall into the posterior canal. The Dix–Hallpike test is used to diagnose it, and the Epley manoeuvre is the treatment.',
  },

  {
    id: 'mc-oto-sudden-snhl',
    type: 'quiz',
    category: 'otology',
    difficulty: 'medium',
    stem: 'A patient presents with sudden onset unilateral sensorineural hearing loss of 40 dB over three consecutive frequencies within 72 hours. What is the first-line treatment?',
    options: [
      { label: 'A', text: 'High-dose oral corticosteroids (e.g. prednisolone 1 mg/kg)' },
      { label: 'B', text: 'Intratympanic gentamicin' },
      { label: 'C', text: 'Hyperbaric oxygen therapy' },
      { label: 'D', text: 'IV aciclovir' },
    ],
    correctIndex: 0,
    explanation: 'Sudden SNHL (≥30 dB over 3 frequencies within 72 hours) is treated with high-dose systemic corticosteroids as first-line. Intratympanic steroids are used as salvage or in patients who cannot tolerate systemic steroids. An MRI with gadolinium should be arranged to exclude vestibular schwannoma. Spontaneous recovery occurs in ~50% but treatment improves outcomes.',
  },

  {
    id: 'mc-oto-ototoxicity-drug',
    type: 'quiz',
    category: 'otology',
    difficulty: 'medium',
    stem: 'Which aminoglycoside is preferentially vestibulotoxic rather than cochleotoxic?',
    options: [
      { label: 'A', text: 'Gentamicin' },
      { label: 'B', text: 'Amikacin' },
      { label: 'C', text: 'Neomycin' },
      { label: 'D', text: 'Tobramycin' },
    ],
    correctIndex: 0,
    explanation: 'Gentamicin is preferentially vestibulotoxic, which is why it is used therapeutically for intratympanic chemical labyrinthectomy in Ménière\'s disease. Amikacin, neomycin, and kanamycin are preferentially cochleotoxic. Streptomycin is also vestibulotoxic. Tobramycin affects both systems relatively equally.',
  },

  {
    id: 'mc-oto-intracranial-complication',
    type: 'quiz',
    category: 'otology',
    difficulty: 'hard',
    stem: 'A child with CSOM develops severe headache, fever, and papilloedema. CT shows a collection adjacent to the sigmoid sinus with the "delta sign" on contrast-enhanced imaging. What is the most likely intracranial complication?',
    options: [
      { label: 'A', text: 'Lateral (sigmoid) sinus thrombosis' },
      { label: 'B', text: 'Otitic hydrocephalus' },
      { label: 'C', text: 'Subdural empyema' },
      { label: 'D', text: 'Brain abscess (temporal lobe)' },
    ],
    correctIndex: 0,
    explanation: 'The empty delta sign (triangular filling defect on contrast CT/MRV) is pathognomonic for dural venous sinus thrombosis. Sigmoid sinus thrombosis is the most common intracranial complication of CSOM after meningitis. Treatment includes IV antibiotics, mastoid surgery to remove disease, and anticoagulation. Otitic hydrocephalus may follow if the thrombosis extends to impair CSF drainage.',
  },

  {
    id: 'mc-oto-lvas-quiz',
    type: 'quiz',
    category: 'otology',
    difficulty: 'hard',
    stem: 'A child with fluctuating sensorineural hearing loss has a CT showing enlarged vestibular aqueducts (>1.5 mm at the midpoint). Which genetic condition is most commonly associated?',
    options: [
      { label: 'A', text: 'Pendred syndrome (SLC26A4 mutations)' },
      { label: 'B', text: 'Waardenburg syndrome (PAX3 mutations)' },
      { label: 'C', text: 'Usher syndrome type II' },
      { label: 'D', text: 'Branchio-oto-renal syndrome (EYA1 mutations)' },
    ],
    correctIndex: 0,
    explanation: 'Large vestibular aqueduct syndrome (LVAS) is most commonly associated with Pendred syndrome, caused by biallelic mutations in SLC26A4 (pendrin). Pendred syndrome also features goitre (usually euthyroid) appearing in adolescence. The hearing loss is typically progressive SNHL with possible conductive component. Patients should avoid contact sports and head trauma to reduce risk of further deterioration.',
  },

  {
    id: 'mc-oto-tinnitus-management',
    type: 'quiz',
    category: 'otology',
    difficulty: 'easy',
    stem: 'Pulsatile tinnitus that is synchronous with the heartbeat requires investigation to rule out which important vascular cause?',
    options: [
      { label: 'A', text: 'Glomus tumour (paraganglioma)' },
      { label: 'B', text: 'Acoustic neuroma' },
      { label: 'C', text: 'Menière\'s disease' },
      { label: 'D', text: 'Otosclerosis' },
    ],
    correctIndex: 0,
    explanation: 'Pulsatile tinnitus synchronous with the pulse suggests a vascular cause. Glomus tympanicum (on the promontory) and glomus jugulare (at the jugular bulb) are the most important to exclude. Other causes include arteriovenous malformations, carotid stenosis, and benign intracranial hypertension. A red/blue mass behind an intact tympanic membrane is the classic appearance. Biopsy is contraindicated due to haemorrhage risk.',
  },

  // ─── FLASHCARD ─────────────────────────────────────────────────────

  {
    id: 'mc-oto-rinne-weber-flash',
    type: 'flashcard',
    category: 'otology',
    difficulty: 'easy',
    front: 'What do the Rinne and Weber tests show in unilateral conductive hearing loss?',
    back: 'Rinne: NEGATIVE on the affected side (bone conduction > air conduction, BC > AC)\nWeber: LATERALISES to the affected ear\n\nThis is because the conductive loss removes ambient masking noise, making the affected cochlea appear "better" at detecting bone-conducted sound.',
    bonus: 'A false-negative Rinne (appears negative but is actually dead ear) occurs with severe unilateral SNHL — always check the audiogram.',
  },

  {
    id: 'mc-oto-mastoid-types-flash',
    type: 'flashcard',
    category: 'otology',
    difficulty: 'medium',
    front: 'What are the three types of mastoid pneumatisation and their clinical significance?',
    back: 'Well pneumatised (cellular): Large air cells — most common in normal development\nDiploic: Mixed air cells and marrow — intermediate\nSclerotic: Dense bone, minimal air cells — associated with chronic ear disease\n\nPoor pneumatisation correlates with chronic otitis media and may reflect childhood eustachian tube dysfunction.',
  },

  {
    id: 'mc-oto-facial-nerve-segments-flash',
    type: 'flashcard',
    category: 'otology',
    difficulty: 'hard',
    front: 'Name the intratemporal segments of the facial nerve in order, from the IAM to the stylomastoid foramen.',
    back: '1. Meatal (IAM) segment — runs with CN VIII in the internal auditory canal\n2. Labyrinthine segment — narrowest part, between IAM and geniculate ganglion (most susceptible to compression)\n3. Tympanic (horizontal) segment — runs along medial wall of middle ear above the oval window\n4. Mastoid (vertical/descending) segment — from second genu to stylomastoid foramen',
    bonus: 'The labyrinthine segment is only 3–4 mm long but is the narrowest part of the fallopian canal — this is why Bell\'s palsy (viral swelling) causes compression here first.',
  },

  {
    id: 'mc-oto-grommets-flash',
    type: 'flashcard',
    category: 'otology',
    difficulty: 'easy',
    front: 'What are the NICE indications for grommet (ventilation tube) insertion in children with otitis media with effusion (OME)?',
    back: 'Persistent bilateral OME for ≥3 months with hearing loss ≥25–30 dB HL\nOR significant impact on speech/language development, behaviour, or education\n\nActive observation for 3 months first (many resolve spontaneously)\nHearing aids are an alternative if surgery is not appropriate',
    bonus: 'Short-term Shah grommets extrude in 6–12 months. Long-term T-tubes stay 18+ months but have higher perforation rates (~5%).',
  },

  // ─── IMAGE-QUIZ ────────────────────────────────────────────────────

  {
    id: 'mc-oto-ct-temporal-bone-iq',
    type: 'image-quiz',
    category: 'otology',
    difficulty: 'hard',
    imageUrl: '/images/masterclass/ct-temporal-bone.jpg',
    imageCaption: 'Axial CT of the temporal bones',
    stem: 'This axial CT of the skull base shows the temporal bones. The arrow indicates opacification in the right middle ear cleft. In the context of chronic ear disease, what is the most important structure to assess for erosion?',
    options: [
      { label: 'A', text: 'Scutum (lateral attic wall) — erosion suggests cholesteatoma' },
      { label: 'B', text: 'Carotid canal — risk of haemorrhage' },
      { label: 'C', text: 'Cochlea — risk of labyrinthine fistula' },
      { label: 'D', text: 'Tegmen tympani — risk of CSF leak' },
    ],
    correctIndex: 0,
    explanation: 'Scutum erosion (blunting of the sharp lateral attic wall) is the most reliable CT sign distinguishing cholesteatoma from simple mucosal disease. While tegmen erosion, lateral semicircular canal fistula, and ossicular chain disruption are important complications to identify, scutum erosion is the key diagnostic indicator on imaging.',
  },

  {
    id: 'mc-oto-mri-iam-iq',
    type: 'image-quiz',
    category: 'otology',
    difficulty: 'medium',
    imageUrl: '/images/masterclass/mri-coronal-iam.jpg',
    imageCaption: 'Coronal MRI of the skull base',
    stem: 'This coronal MRI shows the internal auditory meatus region. The arrow points to a structure in the cerebellopontine angle. For a patient with asymmetric SNHL, what is the most important diagnosis to exclude with this imaging?',
    options: [
      { label: 'A', text: 'Vestibular schwannoma (acoustic neuroma)' },
      { label: 'B', text: 'Meningioma' },
      { label: 'C', text: 'Epidermoid cyst' },
      { label: 'D', text: 'Arachnoid cyst' },
    ],
    correctIndex: 0,
    explanation: 'Vestibular schwannoma (VS) accounts for ~80% of CPA tumours. Asymmetric SNHL (>15 dB difference at 2 or more frequencies) is the key indication for MRI. VS typically enhances brightly with gadolinium and may show an "ice cream cone" shape extending from the IAM into the CPA. Annual incidence is about 1 in 100,000.',
  },

  {
    id: 'mc-oto-mri-skull-base-iq',
    type: 'image-quiz',
    category: 'otology',
    difficulty: 'medium',
    imageUrl: '/images/masterclass/mri-axial-skull-base.jpg',
    imageCaption: 'Axial MRI of the skull base (T2-weighted)',
    stem: 'This axial T2-weighted MRI shows the posterior fossa at the level of the internal auditory canals. Bright signal in the IAM on T2 represents what?',
    options: [
      { label: 'A', text: 'CSF (normal finding) — used in CISS/FIESTA sequences to outline CN VII and VIII' },
      { label: 'B', text: 'Enhancing tumour (vestibular schwannoma)' },
      { label: 'C', text: 'Lipoma (fat signal on T2)' },
      { label: 'D', text: 'Cholesterol granuloma' },
    ],
    correctIndex: 0,
    explanation: 'On T2-weighted MRI, the bright signal in the IAM is CSF. High-resolution T2 sequences (CISS, FIESTA, DRIVE) exploit this CSF contrast to beautifully outline the individual nerve bundles — the facial nerve (anterosuperior), cochlear nerve (anteroinferior), superior and inferior vestibular nerves (posterior). Loss of this CSF signal or filling defects suggest a mass lesion.',
  },

  {
    id: 'mc-oto-ear-pinna-iq',
    type: 'image-quiz',
    category: 'otology',
    difficulty: 'easy',
    imageUrl: '/images/masterclass/external-ear-pinna.jpg',
    imageCaption: 'Clinical photograph of the pinna',
    stem: 'This shows the external ear. In a child presenting with a prominent ear (bat ear), at what angle does the concha–mastoid angle exceed the normal range, indicating surgical correction may be considered?',
    options: [
      { label: 'A', text: '>90° (normal is approximately 15–30°)' },
      { label: 'B', text: '>45°' },
      { label: 'C', text: '>60°' },
      { label: 'D', text: '>120°' },
    ],
    correctIndex: 0,
    explanation: 'The concha-mastoid (cephaloauricular) angle is normally 15–30°. In prominent ears it exceeds 90°. Pinnaplasty (otoplasty) is typically offered after age 5 when the ear is ~85% adult size. The Mustardé technique uses mattress sutures to recreate the antihelical fold, while the Furnas technique sets back the conchal bowl.',
  },

  // ─── ANIMATED TEXT ─────────────────────────────────────────────────

  {
    id: 'mc-oto-cholesteatoma-pathway',
    type: 'animated-text',
    category: 'otology',
    difficulty: 'medium',
    title: 'Cholesteatoma Management Pathway',
    subtitle: 'ENT Masterclass — Otology',
    lines: [
      { text: 'History: foul discharge, hearing loss, previous ear disease', highlight: false },
      { text: 'Examination: retraction pocket, white debris, granulation tissue', highlight: true },
      { text: 'Audiogram: conductive hearing loss (ossicular erosion)', highlight: false },
      { text: 'CT temporal bones: soft tissue in middle ear ± erosion of scutum, tegmen, LSCC', highlight: true },
      { text: 'MRI DWI (diffusion): distinguishes cholesteatoma from granulation (restricted diffusion = cholesteatoma)', highlight: true },
      { text: 'Surgery: mastoidectomy — canal wall up (CWU) vs canal wall down (CWD)', highlight: false },
      { text: 'CWU: preserves canal wall, better hearing, but higher recurrence (needs second look)', highlight: false },
      { text: 'CWD: removes posterior canal wall, creates mastoid cavity, lower recurrence, needs lifelong ear care', highlight: false },
    ],
    footnote: 'Second-look surgery or MRI DWI at 12 months is recommended after CWU mastoidectomy to detect residual disease.',
  },

  {
    id: 'mc-oto-hearing-aid-types',
    type: 'animated-text',
    category: 'otology',
    difficulty: 'easy',
    title: 'Types of Hearing Aids',
    subtitle: 'ENT Masterclass — Audiology',
    lines: [
      { text: 'Conventional air-conduction hearing aids: behind-the-ear (BTE), in-the-ear (ITE), receiver-in-canal (RIC)', highlight: false },
      { text: 'Bone-conduction devices: softband, headband, or bone-anchored (BAHA/Ponto)', highlight: true },
      { text: 'BAHA indications: conductive/mixed loss with poor ear canal, single-sided deafness, chronic ear disease', highlight: true },
      { text: 'BAHA percutaneous (abutment) vs transcutaneous (magnet): transcutaneous has lower skin complications but slightly less power', highlight: false },
      { text: 'Middle ear implants (e.g. Vibrant Soundbridge): for SNHL or mixed loss when conventional aids cannot be used', highlight: false },
      { text: 'Cochlear implant: for severe-profound bilateral SNHL when hearing aids provide insufficient benefit', highlight: true },
      { text: 'CI criteria (adults): ≤50% sentence recognition in best-aided ear with optimised hearing aids', highlight: false },
    ],
    footnote: 'The BAHA trial with a softband should precede surgical implantation to confirm benefit.',
  },

  // ─── SURGICAL STEPS ────────────────────────────────────────────────

  {
    id: 'mc-oto-cortical-mastoidectomy',
    type: 'surgical-steps',
    category: 'otology',
    difficulty: 'hard',
    title: 'Cortical Mastoidectomy',
    steps: [
      { title: 'Positioning & Incision', detail: 'Post-auricular incision 1 cm behind the post-auricular crease. Raise anteriorly-based periosteal flap. Identify MacEwen\'s triangle (suprameatal spine, temporal line, posterosuperior canal wall).' },
      { title: 'Initial Bone Removal', detail: 'Use a large cutting burr to remove cortical bone over the mastoid antrum. Identify the tegmen (dural plate) superiorly and the sigmoid sinus posteriorly.' },
      { title: 'Antrum Identification', detail: 'The antrum is found at the depth of MacEwen\'s triangle. Identify the lateral semicircular canal (dome) as a key landmark — it marks the level of the tympanic segment of the facial nerve below.' },
      { title: 'Saucerisation', detail: 'Thin the cortical bone edges to create a smooth saucer-shaped cavity. Identify the short process of the incus in the fossa incudis as confirmation of correct depth and orientation.' },
      { title: 'Facial Nerve Safety', detail: 'The facial nerve runs medial to the short process of incus, inferior to the lateral SCC, and deep to the digastric ridge. Never drill medial to the LSCC or below the digastric ridge without clear landmark identification.' },
      { title: 'Completion', detail: 'Ensure adequate drainage of the mastoid air cells. Insert drain if needed. Close periosteum and skin in layers. Apply mastoid pressure dressing.' },
    ],
  },

  {
    id: 'mc-oto-myringoplasty',
    type: 'surgical-steps',
    category: 'otology',
    difficulty: 'medium',
    title: 'Myringoplasty (Type I Tympanoplasty)',
    steps: [
      { title: 'Indication', detail: 'Repair of a tympanic membrane perforation in a dry, safe ear. Aim: improve hearing and prevent recurrent infections.' },
      { title: 'Graft Harvest', detail: 'Harvest temporalis fascia (most common) via a small incision above the ear. Alternatively, tragal perichondrium or cartilage graft can be used.' },
      { title: 'Approach', detail: 'Transcanal (endoscopic or microscopic) for small posterior perforations, or post-auricular approach for anterior or large perforations. Raise a tympanomeatal flap.' },
      { title: 'Perforation Preparation', detail: 'De-epithelialise the edges of the perforation to create a raw surface for graft adherence. Remove any squamous epithelium from the medial surface of the remnant drum.' },
      { title: 'Graft Placement', detail: 'Place the graft medial to the drum remnant (underlay technique) resting on the malleus handle. Support with gelfoam in the middle ear space.' },
      { title: 'Closure', detail: 'Replace the tympanomeatal flap. Pack the ear canal with gelfoam or BIPP. Success rates are 85–95% for closure of the perforation.' },
    ],
  },

  // ─── FILL BLANK ────────────────────────────────────────────────────

  {
    id: 'mc-oto-ossicle-chain',
    type: 'fill-blank',
    category: 'otology',
    difficulty: 'easy',
    sentence: 'The three ossicles of the middle ear are the malleus, incus, and ___, which transmit sound from the tympanic membrane to the oval window.',
    blankWord: 'stapes',
    options: ['stapes', 'cochlea', 'vestibule', 'mastoid'],
  },

  {
    id: 'mc-oto-otosclerosis-site',
    type: 'fill-blank',
    category: 'otology',
    difficulty: 'medium',
    sentence: 'Otosclerosis most commonly affects the ___ of the stapes footplate, causing fixation at the oval window and progressive conductive hearing loss.',
    blankWord: 'anterior crus',
    options: ['anterior crus', 'posterior crus', 'head', 'long process'],
  },

  {
    id: 'mc-oto-menieres-triad',
    type: 'fill-blank',
    category: 'otology',
    difficulty: 'easy',
    sentence: 'The classic triad of Ménière\'s disease is episodic vertigo, fluctuating sensorineural hearing loss, and ___.',
    blankWord: 'tinnitus',
    options: ['tinnitus', 'otalgia', 'otorrhoea', 'nystagmus'],
  },


  // ═══════════════════════════════════════════════════════════════════
  //  PAEDIATRIC ENT  (~25 cards, distributed across categories)
  // ═══════════════════════════════════════════════════════════════════

  // ─── QUIZ ──────────────────────────────────────────────────────────

  {
    id: 'mc-paed-branchial-second',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 5-year-old presents with a lateral neck swelling anterior to the sternocleidomastoid at the junction of its upper and middle thirds. It has recurrently become infected. What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Second branchial cleft cyst' },
      { label: 'B', text: 'First branchial cleft cyst' },
      { label: 'C', text: 'Cystic hygroma (lymphatic malformation)' },
      { label: 'D', text: 'Thyroglossal duct cyst' },
    ],
    correctIndex: 0,
    explanation: 'Second branchial cleft anomalies (90% of all branchial anomalies) present at the anterior border of SCM at the junction of the upper and middle thirds. The tract passes between the internal and external carotid arteries to open into the tonsillar fossa. First branchial cleft cysts present near the ear/angle of jaw. Cystic hygromas are typically in the posterior triangle and transilluminate.',
  },

  {
    id: 'mc-paed-croup-vs-epiglottitis',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'easy',
    stem: 'A 2-year-old presents with a barking cough, inspiratory stridor, and hoarse voice. There is no drooling and the child is active. A PA neck X-ray shows the "steeple sign". What is the most likely diagnosis?',
    options: [
      { label: 'A', text: 'Viral croup (laryngotracheobronchitis)' },
      { label: 'B', text: 'Acute epiglottitis' },
      { label: 'C', text: 'Bacterial tracheitis' },
      { label: 'D', text: 'Foreign body aspiration' },
    ],
    correctIndex: 0,
    explanation: 'The barking (seal-like) cough, hoarse voice, and steeple sign (subglottic narrowing on AP X-ray) are classic for viral croup caused by parainfluenza virus. Treatment is oral dexamethasone (0.15–0.6 mg/kg single dose) ± nebulised adrenaline for moderate-severe cases. Epiglottitis (now rare due to Hib vaccine) presents with drooling, tripod position, muffled voice, and the "thumb sign" on lateral X-ray.',
  },

  {
    id: 'mc-paed-osa-tonsils',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 4-year-old with loud snoring, witnessed apnoeas, and mouth breathing has grade 4 tonsils (kissing tonsils). What is the gold standard investigation for confirming obstructive sleep apnoea in children?',
    options: [
      { label: 'A', text: 'Overnight polysomnography (sleep study)' },
      { label: 'B', text: 'Pulse oximetry alone' },
      { label: 'C', text: 'Lateral cephalometric X-ray' },
      { label: 'D', text: 'Drug-induced sleep endoscopy (DISE)' },
    ],
    correctIndex: 0,
    explanation: 'Overnight polysomnography (PSG) is the gold standard for diagnosing paediatric OSA. An obstructive apnoea-hypopnoea index (OAHI) >1/hour is considered abnormal in children (compared to >5/hour in adults). Adenotonsillectomy is first-line treatment in children with adenotonsillar hypertrophy. Children with Down syndrome, obesity, and craniofacial abnormalities have higher OSA prevalence.',
  },

  {
    id: 'mc-paed-raom-criteria',
    type: 'quiz',
    category: 'otology',
    difficulty: 'medium',
    stem: 'What defines recurrent acute otitis media (RAOM) that may warrant grommet insertion?',
    options: [
      { label: 'A', text: '≥3 episodes in 6 months OR ≥4 episodes in 12 months' },
      { label: 'B', text: '≥2 episodes in 6 months' },
      { label: 'C', text: '≥5 episodes in 12 months' },
      { label: 'D', text: 'Any 2 episodes requiring IV antibiotics' },
    ],
    correctIndex: 0,
    explanation: 'RAOM is defined as ≥3 episodes of AOM in 6 months or ≥4 in 12 months with at least one recent episode. Grommets reduce the frequency of AOM episodes by ~50%. Conservative measures include pneumococcal vaccination (PCV13) and avoidance of passive smoke and dummy/pacifier use after 6 months.',
  },

  {
    id: 'mc-paed-choanal-atresia',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'hard',
    stem: 'A neonate presents with cyclical cyanosis that improves with crying. Inability to pass a suction catheter through the nose bilaterally is demonstrated. What is the diagnosis and its most common association?',
    options: [
      { label: 'A', text: 'Bilateral choanal atresia — CHARGE syndrome' },
      { label: 'B', text: 'Bilateral choanal atresia — Down syndrome' },
      { label: 'C', text: 'Piriform aperture stenosis — holoprosencephaly' },
      { label: 'D', text: 'Nasal dermoid — intracranial extension' },
    ],
    correctIndex: 0,
    explanation: 'Bilateral choanal atresia causes cyclical cyanosis (improved by crying as the infant mouth-breathes). It is most commonly associated with CHARGE syndrome (Coloboma, Heart defects, Atresia choanae, Retardation of growth, Genital anomalies, Ear anomalies). 90% of atresia plates are bony (10% membranous). CT confirms the diagnosis. Emergency management involves an oral airway (McGovern nipple) followed by transnasal repair.',
  },

  {
    id: 'mc-paed-subglottic-stenosis',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'hard',
    stem: 'A child who was intubated in NICU has biphasic stridor and recurrent failed extubation. Microlaryngoscopy shows a Cotton–Myer grade III subglottic stenosis. What does grade III represent?',
    options: [
      { label: 'A', text: '71–99% obstruction of the subglottic lumen' },
      { label: 'B', text: '51–70% obstruction' },
      { label: 'C', text: '0–50% obstruction' },
      { label: 'D', text: 'Complete obstruction (no detectable lumen)' },
    ],
    correctIndex: 0,
    explanation: 'The Cotton–Myer grading system for subglottic stenosis: Grade I: 0–50% obstruction, Grade II: 51–70%, Grade III: 71–99%, Grade IV: complete obstruction. Grade III and IV typically require open surgical reconstruction (laryngotracheal reconstruction with cartilage graft or cricotracheal resection) rather than endoscopic management alone.',
  },

  {
    id: 'mc-paed-foreign-body-airway',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'medium',
    stem: 'A 2-year-old presents with sudden-onset choking while eating peanuts, followed by persistent unilateral wheeze. Chest X-ray shows right-sided hyperinflation with mediastinal shift to the left on expiration. What is the next step?',
    options: [
      { label: 'A', text: 'Rigid bronchoscopy under general anaesthesia' },
      { label: 'B', text: 'Flexible bronchoscopy in clinic' },
      { label: 'C', text: 'CT chest with contrast' },
      { label: 'D', text: 'Back blows and abdominal thrusts' },
    ],
    correctIndex: 0,
    explanation: 'Rigid bronchoscopy under GA is the gold standard for both diagnosis and removal of inhaled foreign bodies in children. The right main bronchus is more commonly affected (wider, more vertical). Peanuts are the most common inhaled foreign body in children and cause a lipoid inflammatory reaction. Inspiratory/expiratory films or decubitus views help diagnose air trapping from a ball-valve mechanism.',
  },

  // ─── FLASHCARD ─────────────────────────────────────────────────────

  {
    id: 'mc-paed-stridor-types-flash',
    type: 'flashcard',
    category: 'laryngology',
    difficulty: 'easy',
    front: 'What are the three types of stridor and what level of obstruction does each suggest?',
    back: 'INSPIRATORY stridor: supraglottic or glottic obstruction (e.g. laryngomalacia, epiglottitis)\nEXPIRATORY stridor (wheeze): lower airway/intrathoracic obstruction (e.g. tracheobronchomalacia, foreign body)\nBIPHASIC stridor: fixed subglottic or tracheal lesion (e.g. subglottic stenosis, croup, haemangioma)',
    bonus: 'Laryngomalacia is the most common cause of stridor in neonates (60%), typically presenting at 2–4 weeks and resolving by 12–18 months.',
  },

  {
    id: 'mc-paed-laryngomalacia-flash',
    type: 'flashcard',
    category: 'laryngology',
    difficulty: 'medium',
    front: 'What are the indications for supraglottoplasty in laryngomalacia?',
    back: 'Severe laryngomalacia with:\n- Failure to thrive / poor weight gain\n- Feeding difficulties with aspiration\n- Obstructive sleep apnoea (desaturations, apnoeas)\n- Severe respiratory distress / pectus excavatum\n- Cyanotic episodes\n\n~10–20% of children with laryngomalacia require surgical intervention.',
    bonus: 'Supraglottoplasty involves trimming the redundant aryepiglottic folds and/or supra-arytenoid tissue using cold steel or CO2 laser. Success rate is ~90%.',
  },

  {
    id: 'mc-paed-hearing-screening-flash',
    type: 'flashcard',
    category: 'otology',
    difficulty: 'easy',
    front: 'What is the UK Newborn Hearing Screening Programme protocol?',
    back: 'Step 1: Automated otoacoustic emissions (AOAE) — screens cochlear (outer hair cell) function, done within 4–5 weeks of birth\nStep 2: If AOAE fails → Automated auditory brainstem response (AABR)\n\nTarget: Detect ≥40 dB HL permanent hearing loss\nRefer by 4 weeks, diagnosis by 3 months, intervention by 6 months',
    bonus: 'Risk factors warranting targeted screening even if NHSP passes: family history of SNHL, craniofacial anomaly, NICU >5 days, congenital infection (CMV, rubella), hyperbilirubinaemia requiring exchange transfusion.',
  },

  {
    id: 'mc-paed-craniosynostosis-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'Name the major craniosynostosis syndromes relevant to ENT and their key features.',
    back: 'Apert syndrome: bicoronal synostosis, midface hypoplasia, syndactyly (mitten hands), FGFR2 mutation\nCrouzon syndrome: bicoronal synostosis, midface hypoplasia, NO hand anomalies, FGFR2 mutation\nPfeiffer syndrome: bicoronal synostosis, broad thumbs/great toes, FGFR1/2 mutations\nTreacher Collins: mandibulofacial dysostosis — micrognathia, malar hypoplasia, conductive hearing loss, TCOF1 mutation\n\nAll may cause OSA, conductive hearing loss, and airway problems.',
  },

  {
    id: 'mc-paed-peritonsillar-abscess-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'How do you distinguish peritonsillar abscess (quinsy) from severe tonsillitis, and what is the management?',
    back: 'Signs favouring quinsy:\n- Trismus (limited mouth opening)\n- Unilateral peritonsillar swelling with uvular deviation\n- "Hot potato" muffled voice\n- Drooling\n\nManagement:\n1. Needle aspiration (diagnostic and therapeutic) or incision & drainage\n2. IV antibiotics (co-amoxiclav or clindamycin if penicillin-allergic)\n3. Consider interval tonsillectomy if recurrent (or quinsy tonsillectomy à chaud)',
  },

  // ─── ANIMATED TEXT ─────────────────────────────────────────────────

  {
    id: 'mc-paed-airway-assessment',
    type: 'animated-text',
    category: 'laryngology',
    difficulty: 'medium',
    title: 'Paediatric Airway Assessment Algorithm',
    subtitle: 'ENT Masterclass — Paediatric',
    lines: [
      { text: 'Step 1: Characterise the stridor — inspiratory, expiratory, or biphasic', highlight: true },
      { text: 'Step 2: Flexible nasendoscopy (FNE) awake — assess supraglottis and vocal cord movement' },
      { text: 'Step 3: If supraglottic cause found (laryngomalacia) → manage accordingly' },
      { text: 'Step 4: If subglottic/tracheal lesion suspected → microlaryngobronchoscopy (MLB) under GA', highlight: true },
      { text: 'Step 5: Grade any stenosis (Cotton–Myer) and assess for multiple levels of obstruction' },
      { text: 'Investigations: AP/lateral airway X-rays, CT airway if needed, pH/impedance study for reflux' },
      { text: 'MDT approach: ENT, paediatrics, anaesthetics, SLT, respiratory, gastroenterology', highlight: true },
    ],
    footnote: 'Always exclude synchronous airway lesions — up to 15–20% of children have a second pathology.',
  },

  {
    id: 'mc-paed-pharyngeal-arches',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Pharyngeal Arches — Key Derivatives',
    subtitle: 'ENT Masterclass — Embryology',
    lines: [
      { text: '1st Arch (Meckel\'s cartilage): mandible, malleus, incus, anterior 2/3 tongue, muscles of mastication (CN V3)', highlight: true },
      { text: '2nd Arch (Reichert\'s cartilage): stapes, styloid process, lesser cornu of hyoid, muscles of facial expression (CN VII)', highlight: true },
      { text: '3rd Arch: greater cornu of hyoid, stylopharyngeus muscle (CN IX)' },
      { text: '4th Arch: thyroid cartilage, cricothyroid muscle, pharyngeal constrictors (CN X — superior laryngeal nerve)' },
      { text: '6th Arch: cricoid, arytenoids, tracheal rings, intrinsic laryngeal muscles (CN X — recurrent laryngeal nerve)', highlight: true },
      { text: 'Pouches: 1st → middle ear/ET, 2nd → palatine tonsils, 3rd → inferior parathyroids + thymus, 4th → superior parathyroids + C-cells' },
    ],
    footnote: 'The 5th pharyngeal arch is rudimentary and does not contribute to adult structures.',
  },

  {
    id: 'mc-paed-ome-pathway',
    type: 'animated-text',
    category: 'otology',
    difficulty: 'easy',
    title: 'Otitis Media with Effusion — Management Pathway',
    subtitle: 'ENT Masterclass — Paediatric Otology',
    lines: [
      { text: 'OME ("glue ear") is the most common cause of childhood hearing loss', highlight: true },
      { text: 'Peak prevalence at age 2 — resolves spontaneously in most children by age 8' },
      { text: 'Diagnosis: flat (type B) tympanogram + conductive hearing loss on audiogram', highlight: true },
      { text: 'Active observation for 3 months before intervention (NICE guidance)' },
      { text: 'If persistent ≥3 months + hearing ≥25–30 dB HL → grommets (ventilation tubes)' },
      { text: 'Adjunctive adenoidectomy: consider if age ≥4 years, nasal obstruction, or repeat grommet insertion', highlight: true },
      { text: 'Hearing aids: alternative to surgery, particularly in cleft palate or recurrent grommet extrusion' },
    ],
    footnote: 'Children with Down syndrome and cleft palate have much higher rates of chronic OME — lower threshold for intervention.',
  },

  // ─── SURGICAL STEPS ────────────────────────────────────────────────

  {
    id: 'mc-paed-adenotonsillectomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Adenotonsillectomy',
    steps: [
      { title: 'Indications', detail: 'OSA with adenotonsillar hypertrophy (most common paediatric indication), recurrent tonsillitis (Paradise criteria: ≥7 episodes in 1 year, ≥5/year for 2 years, or ≥3/year for 3 years), peritonsillar abscess.' },
      { title: 'Positioning', detail: 'Supine with neck extended (Rose position). Boyle-Davis mouth gag with tongue depressor to expose oropharynx. Confirm palatal integrity (exclude submucous cleft — contraindication to adenoidectomy).' },
      { title: 'Adenoidectomy', detail: 'Suction diathermy or curette under mirror/endoscopic visualisation. Protect the Eustachian tube cushions laterally. Avoid injury to the torus tubarius.' },
      { title: 'Tonsillectomy', detail: 'Cold steel dissection in the peritonsillar plane (most common UK technique) or bipolar diathermy/coblation. Identify and preserve the superior constrictor muscle laterally.' },
      { title: 'Haemostasis', detail: 'Bipolar diathermy to bleeding points. Tonsillar fossa packs. Check adenoid bed. Target: dry surgical field before extubation.' },
      { title: 'Postoperative', detail: 'Primary haemorrhage risk (first 24h): ~0.5–2%. Secondary haemorrhage (days 5–10): ~3–5%. Regular analgesia, encourage oral intake, avoid NSAIDs in children (use paracetamol ± codeine).' },
    ],
  },

  // ─── FILL BLANK ────────────────────────────────────────────────────

  {
    id: 'mc-paed-laryngomalacia-cause',
    type: 'fill-blank',
    category: 'laryngology',
    difficulty: 'easy',
    sentence: '___ is the most common cause of stridor in neonates, accounting for approximately 60% of cases.',
    blankWord: 'Laryngomalacia',
    options: ['Laryngomalacia', 'Subglottic stenosis', 'Vocal cord palsy', 'Tracheomalacia'],
  },

  {
    id: 'mc-paed-tracheostomy-tube',
    type: 'fill-blank',
    category: 'laryngology',
    difficulty: 'medium',
    sentence: 'A paediatric tracheostomy tube does not have a ___, unlike most adult tracheostomy tubes, because the trachea is more compliant and an inflated balloon may cause pressure necrosis.',
    blankWord: 'cuff',
    options: ['cuff', 'fenestration', 'inner cannula', 'flange'],
  },

  {
    id: 'mc-paed-haemangioma-treatment',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'The first-line systemic treatment for problematic infantile haemangiomas (including subglottic) is oral ___.',
    blankWord: 'propranolol',
    options: ['propranolol', 'prednisolone', 'vincristine', 'sirolimus'],
  },


  // ═══════════════════════════════════════════════════════════════════
  //  HEAD & NECK  (~25 cards)
  // ═══════════════════════════════════════════════════════════════════

  // ─── QUIZ ──────────────────────────────────────────────────────────

  {
    id: 'mc-hn-hpv-oropharynx',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'Which HPV subtype is most commonly associated with oropharyngeal squamous cell carcinoma, and what is the relevant biomarker used for staging?',
    options: [
      { label: 'A', text: 'HPV-16; p16 immunohistochemistry (positive = surrogate marker)' },
      { label: 'B', text: 'HPV-18; p53 immunohistochemistry' },
      { label: 'C', text: 'HPV-6; Ki-67 proliferation index' },
      { label: 'D', text: 'HPV-11; EGFR overexpression' },
    ],
    correctIndex: 0,
    explanation: 'HPV-16 accounts for ~90% of HPV-positive oropharyngeal SCC. p16 overexpression by IHC is used as a surrogate marker for HPV association and defines a separate staging system (AJCC 8th edition). HPV-positive oropharyngeal SCC has significantly better prognosis (3-year OS ~80% vs ~55% for HPV-negative). De-escalation trials are investigating reduced-intensity treatment for this group.',
  },

  {
    id: 'mc-hn-melanoma-breslow',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A 55-year-old has a melanoma excised from the scalp with a Breslow thickness of 2.5 mm. What is the recommended excision margin and sentinel lymph node biopsy (SLNB) recommendation?',
    options: [
      { label: 'A', text: '2 cm margin; SLNB recommended' },
      { label: 'B', text: '1 cm margin; SLNB recommended' },
      { label: 'C', text: '2 cm margin; SLNB not indicated' },
      { label: 'D', text: '3 cm margin; SLNB recommended' },
    ],
    correctIndex: 0,
    explanation: 'Breslow thickness determines excision margins: <1 mm → 1 cm, 1–2 mm → 1–2 cm, >2 mm → 2 cm. SLNB is discussed for Breslow >0.8 mm (or >1 mm depending on guidelines). For 2.5 mm melanoma, a 2 cm margin and SLNB are recommended. The head and neck region has complex lymphatic drainage and higher SLNB false-negative rates due to multiple drainage basins.',
  },

  {
    id: 'mc-hn-facial-nerve-palsy',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A patient presents with complete unilateral facial weakness including the forehead. Using the House–Brackmann grading system, complete paralysis with no movement is classified as which grade?',
    options: [
      { label: 'A', text: 'Grade VI' },
      { label: 'B', text: 'Grade V' },
      { label: 'C', text: 'Grade IV' },
      { label: 'D', text: 'Grade III' },
    ],
    correctIndex: 0,
    explanation: 'House–Brackmann grading: Grade I = normal, Grade II = slight weakness (forehead movement present), Grade III = obvious but not disfiguring weakness, Grade IV = obvious disfiguring weakness, Grade V = barely perceptible movement, Grade VI = complete paralysis (no movement). This distinction is important because Grade VI implies the nerve may be transected or severely damaged.',
  },

  {
    id: 'mc-hn-salivary-pleomorphic',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'easy',
    stem: 'What is the most common benign tumour of the parotid gland?',
    options: [
      { label: 'A', text: 'Pleomorphic adenoma' },
      { label: 'B', text: 'Warthin\'s tumour (adenolymphoma)' },
      { label: 'C', text: 'Oncocytoma' },
      { label: 'D', text: 'Myoepithelioma' },
    ],
    correctIndex: 0,
    explanation: 'Pleomorphic adenoma (benign mixed tumour) accounts for ~80% of parotid tumours and ~60% of all salivary gland tumours. Treatment is superficial parotidectomy with facial nerve preservation. The "80% rule": 80% of salivary tumours occur in the parotid, 80% of parotid tumours are benign, 80% of benign parotid tumours are pleomorphic adenomas. Risk of malignant transformation (carcinoma ex pleomorphic adenoma) increases with time (~1.5% per decade).',
  },

  {
    id: 'mc-hn-neck-lump-adult',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A 60-year-old smoker presents with a firm, non-tender lateral neck mass that has been growing for 6 weeks. What is the most important initial investigation?',
    options: [
      { label: 'A', text: 'Ultrasound-guided fine needle aspiration cytology (FNAC)' },
      { label: 'B', text: 'CT neck with contrast' },
      { label: 'C', text: 'Open excision biopsy' },
      { label: 'D', text: 'PET-CT' },
    ],
    correctIndex: 0,
    explanation: 'In an adult >40 with a lateral neck mass, malignancy (often metastatic SCC from a mucosal primary) must be excluded. USS-guided FNAC is the first-line investigation — it is quick, minimally invasive, and has high sensitivity for SCC. Open biopsy of a neck node should be avoided until a primary mucosal site has been excluded, as it may compromise subsequent surgical management. The "2-week rule": any neck lump >2 weeks in an adult warrants investigation.',
  },

  {
    id: 'mc-hn-deep-neck-infection',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'A patient with a parapharyngeal abscess develops chest pain and bilateral pleural effusions. CT shows mediastinal gas tracking and fluid. What is this life-threatening complication called?',
    options: [
      { label: 'A', text: 'Descending necrotising mediastinitis' },
      { label: 'B', text: 'Ludwig\'s angina' },
      { label: 'C', text: 'Lemierre\'s syndrome' },
      { label: 'D', text: 'Pott\'s puffy tumour' },
    ],
    correctIndex: 0,
    explanation: 'Descending necrotising mediastinitis (DNM) occurs when deep neck space infection tracks inferiorly through fascial planes (prevertebral or retropharyngeal space → posterior mediastinum, or pretracheal space → anterior mediastinum). Mortality is 20–40% even with treatment. Management requires aggressive IV antibiotics, surgical drainage of the neck, and cardiothoracic involvement for mediastinal drainage (often via thoracotomy or VATS).',
  },

  {
    id: 'mc-hn-sarcoma-hn',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'hard',
    stem: 'Head and neck sarcomas account for approximately what percentage of all head and neck malignancies, and what is the primary treatment modality?',
    options: [
      { label: 'A', text: '~1%; surgery with wide negative margins' },
      { label: 'B', text: '~10%; primary chemoradiotherapy' },
      { label: 'C', text: '~5%; neoadjuvant chemotherapy followed by surgery' },
      { label: 'D', text: '~15%; targeted biological therapy' },
    ],
    correctIndex: 0,
    explanation: 'Head and neck sarcomas are rare (~1% of H&N malignancies). Surgery with wide excision margins is the primary treatment. Adjuvant radiotherapy is used for high-grade tumours, positive/close margins, and large tumours (>5 cm). The role of chemotherapy is limited and subtype-dependent. Rhabdomyosarcoma is the most common soft-tissue sarcoma in children; in adults, the most common types include fibrosarcoma, malignant fibrous histiocytoma, and synovial sarcoma.',
  },

  // ─── FLASHCARD ─────────────────────────────────────────────────────

  {
    id: 'mc-hn-neck-dissection-types-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What are the main types of neck dissection and their definitions?',
    back: 'Radical neck dissection (RND): Removes levels I–V, SCM, IJV, and spinal accessory nerve (CN XI)\nModified radical neck dissection (MRND): Removes levels I–V but preserves one or more of: SCM, IJV, CN XI\nSelective neck dissection (SND): Removes selected levels only:\n  - Supraomohyoid (I–III): oral cavity\n  - Lateral (II–IV): oropharynx, larynx, hypopharynx\n  - Central compartment (VI): thyroid\nExtended neck dissection: RND + additional structures (e.g. carotid, hypoglossal nerve)',
    bonus: 'The trend is toward selective dissection as evidence shows equivalent oncological outcomes with less morbidity for the N0 and limited N+ neck.',
  },

  {
    id: 'mc-hn-facial-reanimation-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'hard',
    front: 'What are the surgical options for facial reanimation after facial nerve paralysis?',
    back: 'Acute (<72h, nerve transected): Primary nerve repair (neurorrhaphy) or cable graft (great auricular or sural nerve)\nEarly (<12 months, no recovery): Hypoglossal-facial nerve transfer (XII–VII), masseteric nerve transfer (CN V3→VII), or cross-facial nerve graft\nLate (>18 months, muscle atrophy): Free muscle transfer — gracilis flap with cross-facial nerve graft or masseteric nerve\nStatic procedures: gold weight (upper lid), fascia lata sling, lower lid tightening',
    bonus: 'The masseteric nerve (CN V3) transfer to the facial nerve has gained popularity due to its reliability, proximity, and strong motor input — patients learn to smile by biting.',
  },

  {
    id: 'mc-hn-unknown-primary-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is the workup for a metastatic neck node with unknown primary (CUP)?',
    back: '1. FNAC/core biopsy of the node — SCC? Thyroid? Lymphoma? Test p16/HPV, EBV\n2. Clinical examination — full head and neck mucosal assessment with FNE\n3. Cross-sectional imaging: CT neck/chest, MRI if base of tongue/nasopharynx suspected\n4. PET-CT: identifies occult primary in ~25% of cases\n5. Panendoscopy + directed biopsies (nasopharynx, base of tongue, tonsil, pyriform fossa)\n6. Ipsilateral tonsillectomy — finds ~10–25% of occult primaries (especially HPV+ tonsillar SCC)',
    bonus: 'If p16 positive, the primary is most likely base of tongue or tonsil. If EBV positive (EBER), consider nasopharyngeal carcinoma.',
  },

  {
    id: 'mc-hn-ludwigs-angina-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What is Ludwig\'s angina and how is it managed?',
    back: 'Ludwig\'s angina is a bilateral infection of the submandibular, sublingual, and submental spaces.\n\nCauses: Usually odontogenic (2nd/3rd lower molar root infection)\nKey danger: Rapid floor-of-mouth swelling → tongue elevation → airway obstruction\n\nManagement:\n1. Secure airway FIRST (may need awake fibreoptic intubation or surgical airway)\n2. IV antibiotics (co-amoxiclav + metronidazole)\n3. Surgical drainage if fluctuant or not responding to antibiotics\n4. Dental review for source control',
  },

  // ─── IMAGE-QUIZ ────────────────────────────────────────────────────

  {
    id: 'mc-hn-mri-neck-mass-iq',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/masterclass/mri-neck-mass.jpg',
    imageCaption: 'Multi-planar MRI of a large neck mass',
    stem: 'This MRI shows a large mass in the parapharyngeal space displacing the oropharynx medially. What is the most important clinical distinction to make when assessing a parapharyngeal space mass?',
    options: [
      { label: 'A', text: 'Prestyloid vs poststyloid compartment — determines differential diagnosis' },
      { label: 'B', text: 'Cystic vs solid — determines malignancy risk' },
      { label: 'C', text: 'Enhancing vs non-enhancing — determines vascularity' },
      { label: 'D', text: 'Unilateral vs bilateral — determines systemic disease' },
    ],
    correctIndex: 0,
    explanation: 'The parapharyngeal space is divided by the tensor–vascular–styloid fascia into prestyloid (contains fat, salivary tissue → pleomorphic adenoma most common) and poststyloid (contains carotid, IJV, CN IX–XII, sympathetic chain → paraganglioma, schwannoma most common). Knowing the compartment dramatically narrows the differential. Prestyloid masses displace the carotid posterolaterally; poststyloid masses displace it anteromedially.',
  },

  {
    id: 'mc-hn-neck-clinical-iq',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/head-neck/neck-mass-clinical.jpeg',
    imageCaption: 'Clinical photograph of a lateral neck swelling',
    stem: 'This patient presents with a painless lateral neck mass. For an adult over 40 with a new lateral neck mass persisting over 2 weeks, what percentage are ultimately found to be malignant?',
    options: [
      { label: 'A', text: 'Approximately 80% (malignancy until proven otherwise)' },
      { label: 'B', text: 'Approximately 50%' },
      { label: 'C', text: 'Approximately 20%' },
      { label: 'D', text: 'Less than 5%' },
    ],
    correctIndex: 0,
    explanation: 'The "80% rule" for adult lateral neck masses: ~80% of non-thyroid lateral neck masses in adults are neoplastic, ~80% of those are malignant, and ~80% of those are metastatic (usually SCC from a mucosal primary). This is why urgent investigation with USS-guided FNAC is essential. In children, the proportion reverses — most lateral neck masses are inflammatory/reactive.',
  },

  {
    id: 'mc-hn-oral-tongue-iq',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/head-neck/oral-tongue-lesion.jpeg',
    imageCaption: 'Oral cavity lesion',
    stem: 'This image shows a lesion on the lateral tongue. What is the minimum depth of invasion (DOI) that upstages a T1 oral cavity SCC to T2 in the AJCC 8th edition staging system?',
    options: [
      { label: 'A', text: '>5 mm depth of invasion' },
      { label: 'B', text: '>10 mm depth of invasion' },
      { label: 'C', text: '>2 mm depth of invasion' },
      { label: 'D', text: '>20 mm depth of invasion' },
    ],
    correctIndex: 0,
    explanation: 'AJCC 8th edition introduced depth of invasion (DOI) into oral cavity T staging: T1 = ≤2 cm AND DOI ≤5 mm, T2 = ≤2 cm with DOI >5 mm OR >2–4 cm with DOI ≤10 mm, T3 = >4 cm OR DOI >10 mm. DOI is a stronger predictor of occult nodal metastasis than tumour size alone. DOI >4 mm is the threshold at which elective neck dissection is generally recommended.',
  },

  // ─── ANIMATED TEXT ─────────────────────────────────────────────────

  {
    id: 'mc-hn-neck-lump-pathway',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'easy',
    title: 'Adult Neck Lump — Assessment Pathway',
    subtitle: 'ENT Masterclass — Head & Neck',
    lines: [
      { text: 'Rule of 80s: 80% neoplastic, 80% of those malignant, 80% of those metastatic SCC', highlight: true },
      { text: 'History: duration, smoking, alcohol, weight loss, dysphagia, dysphonia, otalgia, nasal obstruction' },
      { text: 'Examination: full H&N mucosal exam, flexible nasendoscopy (FNE), cranial nerves' },
      { text: 'First-line investigation: USS + FNAC of the node (or core biopsy if lymphoma suspected)', highlight: true },
      { text: 'FNAC positive for SCC → CT neck/chest + PET-CT → panendoscopy ± tonsillectomy' },
      { text: 'p16 positive → likely oropharyngeal primary (tonsil or tongue base)', highlight: true },
      { text: 'MDT discussion → treatment plan: surgery ± adjuvant RT/CRT vs primary CRT' },
    ],
    footnote: 'Never perform open biopsy of a neck node before excluding a mucosal primary — it can compromise surgical planes.',
  },

  {
    id: 'mc-hn-free-flap-types',
    type: 'animated-text',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Common Free Flaps in Head & Neck Reconstruction',
    subtitle: 'ENT Masterclass — Reconstructive',
    lines: [
      { text: 'Radial forearm free flap (RFFF): thin, pliable fasciocutaneous flap — ideal for oral cavity, oropharynx', highlight: true },
      { text: 'Anterolateral thigh (ALT): versatile fasciocutaneous/musculocutaneous — oral cavity, pharynx, scalp' },
      { text: 'Fibula free flap: vascularised bone + skin paddle — mandible reconstruction (gold standard)', highlight: true },
      { text: 'Scapular/parascapular: large skin territory — extensive composite defects' },
      { text: 'Jejunal free flap: mucosal tube — circumferential pharyngeal/oesophageal defects', highlight: true },
      { text: 'Pectoralis major pedicled flap: workhorse regional flap — salvage or when free flap not possible' },
    ],
    footnote: 'The Allen test must be performed before harvesting a radial forearm flap to ensure ulnar artery adequacy.',
  },

  // ─── SURGICAL STEPS ────────────────────────────────────────────────

  {
    id: 'mc-hn-superficial-parotidectomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Superficial Parotidectomy',
    steps: [
      { title: 'Incision', detail: 'Modified Blair incision: preauricular, under the lobule, following the anterior border of SCM (or facelift incision for cosmesis). Raise a skin flap anteriorly over the gland.' },
      { title: 'Identify Facial Nerve Trunk', detail: 'Key landmarks: tragal pointer (1 cm deep and inferior to the pointer), tympanomastoid suture line, posterior belly of digastric (nerve is superficial to this). Use a nerve stimulator.' },
      { title: 'Antegrade Dissection', detail: 'Follow the main trunk to the pes anserinus (bifurcation into temporozygomatic and cervicofacial divisions). Dissect each branch anteriorly, lifting the superficial lobe off the nerve branches.' },
      { title: 'Tumour Removal', detail: 'Remove the superficial lobe with the tumour en bloc. Ensure a cuff of normal tissue around the tumour. Avoid rupturing the capsule (especially for pleomorphic adenoma — risk of recurrence).' },
      { title: 'Haemostasis & Closure', detail: 'Careful bipolar haemostasis. Consider placing a drain. Close platysma and skin. Apply firm pressure dressing.' },
      { title: 'Complications', detail: 'Facial nerve injury (temporary ~20%, permanent ~2%), Frey\'s syndrome (gustatory sweating — 30–60%), salivary fistula, great auricular nerve numbness (ear lobule), first bite syndrome.' },
    ],
  },

  {
    id: 'mc-hn-tracheostomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'medium',
    title: 'Surgical Tracheostomy',
    steps: [
      { title: 'Indication', detail: 'Prolonged ventilation, upper airway obstruction, airway protection (impaired swallow/aspiration), pulmonary toilet, or as part of H&N surgery.' },
      { title: 'Positioning & Incision', detail: 'Supine with neck extended (shoulder roll). Horizontal skin crease incision midway between cricoid and sternal notch. Dissect through subcutaneous fat and platysma to strap muscles.' },
      { title: 'Thyroid Isthmus', detail: 'Divide or retract the thyroid isthmus to expose the trachea. Ligate vessels if dividing. Identify the 2nd–4th tracheal rings.' },
      { title: 'Tracheal Entry', detail: 'Create a window or Björk flap (inferiorly based flap of anterior tracheal wall sutured to skin) at rings 2–3 or 3–4. Avoid ring 1 (subglottic stenosis risk). Ask anaesthetist to withdraw ET tube.' },
      { title: 'Tube Insertion', detail: 'Insert the tracheostomy tube with obturator under direct vision. Confirm ventilation with capnography and bilateral air entry. Secure the tube with sutures and ties.' },
      { title: 'Safety Measures', detail: 'Stay sutures (either side of the stoma) for emergency re-insertion in first week. Ensure spare tube and tracheal dilators at bedside. First tube change at 5–7 days (mature tract).' },
    ],
  },

  // ─── FILL BLANK ────────────────────────────────────────────────────

  {
    id: 'mc-hn-frey-syndrome',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'medium',
    sentence: 'Gustatory sweating after parotid surgery is called ___ syndrome, caused by aberrant regeneration of parasympathetic fibres to cutaneous sweat glands.',
    blankWord: 'Frey\'s',
    options: ['Frey\'s', 'Horner\'s', 'Lemierre\'s', 'Eagle\'s'],
  },

  {
    id: 'mc-hn-cn-xi-injury',
    type: 'fill-blank',
    category: 'head-neck',
    difficulty: 'easy',
    sentence: 'Injury to the spinal accessory nerve (CN XI) during neck dissection results in paralysis of the ___ muscle, causing shoulder drop and difficulty with arm abduction above 90°.',
    blankWord: 'trapezius',
    options: ['trapezius', 'sternocleidomastoid', 'deltoid', 'levator scapulae'],
  },


  // ═══════════════════════════════════════════════════════════════════
  //  RHINOLOGY / LARYNGOLOGY  (~25 cards)
  // ═══════════════════════════════════════════════════════════════════

  // ─── QUIZ ──────────────────────────────────────────────────────────

  {
    id: 'mc-rhin-sinusitis-timing',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'easy',
    stem: 'Rhinosinusitis is classified by duration. What defines chronic rhinosinusitis (CRS)?',
    options: [
      { label: 'A', text: 'Symptoms persisting for ≥12 weeks' },
      { label: 'B', text: 'Symptoms persisting for ≥8 weeks' },
      { label: 'C', text: '≥4 episodes per year, each lasting ≥7 days' },
      { label: 'D', text: 'Symptoms persisting for ≥6 weeks' },
    ],
    correctIndex: 0,
    explanation: 'CRS is defined as symptoms (nasal obstruction, discharge, facial pain/pressure, ± anosmia) persisting for ≥12 weeks without complete resolution. It is subdivided into CRS with nasal polyps (CRSwNP) and CRS without nasal polyps (CRSsNP). Acute rhinosinusitis = <12 weeks; recurrent acute = ≥4 episodes per year with symptom-free intervals.',
  },

  {
    id: 'mc-rhin-orbital-complication',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'hard',
    stem: 'A child with acute sinusitis develops proptosis, ophthalmoplegia, and reduced visual acuity. CT shows a rim-enhancing collection medial to the medial rectus. Using the Chandler classification, what stage is this?',
    options: [
      { label: 'A', text: 'Stage III — Subperiosteal abscess' },
      { label: 'B', text: 'Stage II — Orbital cellulitis' },
      { label: 'C', text: 'Stage IV — Orbital abscess' },
      { label: 'D', text: 'Stage V — Cavernous sinus thrombosis' },
    ],
    correctIndex: 0,
    explanation: 'Chandler classification of orbital complications of sinusitis: Stage I = preseptal cellulitis (eyelid only), Stage II = orbital cellulitis (diffuse orbital inflammation, no discrete collection), Stage III = subperiosteal abscess (collection between periorbita and lamina papyracea — most common in children from ethmoid sinusitis), Stage IV = orbital abscess (collection within orbital fat), Stage V = cavernous sinus thrombosis. Stages III–V typically require surgical drainage.',
  },

  {
    id: 'mc-rhin-nasal-reconstruction',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'For nasal tip reconstruction after Mohs surgery for a basal cell carcinoma, which local flap is most commonly used for defects >1.5 cm?',
    options: [
      { label: 'A', text: 'Bilobed (Zitelli) flap' },
      { label: 'B', text: 'Paramedian forehead flap' },
      { label: 'C', text: 'Nasolabial transposition flap' },
      { label: 'D', text: 'Advancement flap' },
    ],
    correctIndex: 0,
    explanation: 'The bilobed flap (Zitelli modification) is the workhorse for nasal tip defects 1–1.5 cm. For larger defects (>1.5–2 cm), the paramedian forehead flap (based on the supratrochlear artery) is the gold standard — it provides excellent colour and texture match but requires a 2-stage procedure. Nasolabial flaps are useful for alar defects. Full-thickness skin grafts are an option for dorsum/sidewall.',
  },

  {
    id: 'mc-rhin-allergic-rhinitis-treatment',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'easy',
    stem: 'What is the first-line pharmacological treatment for moderate-severe persistent allergic rhinitis?',
    options: [
      { label: 'A', text: 'Intranasal corticosteroid spray (e.g. mometasone, fluticasone)' },
      { label: 'B', text: 'Oral antihistamine (e.g. cetirizine, loratadine)' },
      { label: 'C', text: 'Intranasal antihistamine (e.g. azelastine)' },
      { label: 'D', text: 'Leukotriene receptor antagonist (montelukast)' },
    ],
    correctIndex: 0,
    explanation: 'Intranasal corticosteroids (INCS) are the most effective single agent for allergic rhinitis, addressing all symptoms including nasal obstruction (which antihistamines do not treat well). For moderate-severe disease, INCS is first-line. Oral antihistamines are first-line for mild intermittent disease. Combination INCS + intranasal antihistamine (e.g. Dymista) may be used for refractory cases. Allergen immunotherapy is reserved for severe, proven IgE-mediated disease.',
  },

  {
    id: 'mc-laryng-rrp-virus',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'medium',
    stem: 'Recurrent respiratory papillomatosis (RRP) in children is most commonly caused by which HPV subtypes?',
    options: [
      { label: 'A', text: 'HPV 6 and 11' },
      { label: 'B', text: 'HPV 16 and 18' },
      { label: 'C', text: 'HPV 31 and 33' },
      { label: 'D', text: 'HPV 1 and 2' },
    ],
    correctIndex: 0,
    explanation: 'Juvenile-onset RRP is caused by HPV 6 and 11 (low-risk subtypes), acquired during vaginal delivery from maternal genital warts. HPV 11 is associated with more aggressive disease. Treatment is repeated surgical debulking (microdebrider or CO2 laser) to maintain the airway. Adjuvant cidofovir or bevacizumab may be used for aggressive disease. The quadrivalent HPV vaccine covers types 6, 11, 16, and 18.',
  },

  {
    id: 'mc-laryng-cancer-glottic',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'medium',
    stem: 'What is the prognosis and recommended treatment for a T1a glottic squamous cell carcinoma (tumour limited to one vocal cord with normal mobility)?',
    options: [
      { label: 'A', text: 'Radiotherapy or transoral laser excision — 5-year local control rate ~90%' },
      { label: 'B', text: 'Total laryngectomy — 5-year survival ~95%' },
      { label: 'C', text: 'Chemoradiotherapy — 5-year local control rate ~80%' },
      { label: 'D', text: 'Open partial laryngectomy (vertical hemilaryngectomy)' },
    ],
    correctIndex: 0,
    explanation: 'Early glottic SCC (T1a) has excellent prognosis with either single-modality radiotherapy (~90% local control) or transoral laser microsurgery (TLM). Both have equivalent oncological outcomes; choice depends on patient factors and expertise. Neck dissection is not required for T1 glottic SCC because the true vocal cords have minimal lymphatic drainage — nodal metastasis rate is <2%.',
  },

  {
    id: 'mc-laryng-voice-assessment',
    type: 'quiz',
    category: 'laryngology',
    difficulty: 'easy',
    stem: 'The GRBAS scale is used to assess voice quality. What does the "R" stand for?',
    options: [
      { label: 'A', text: 'Roughness' },
      { label: 'B', text: 'Resonance' },
      { label: 'C', text: 'Range' },
      { label: 'D', text: 'Register' },
    ],
    correctIndex: 0,
    explanation: 'GRBAS: Grade (overall severity), Roughness (irregular vocal fold vibration — e.g. from mass lesions, oedema), Breathiness (air escape due to incomplete glottic closure), Asthenia (weakness/lack of power), Strain (hyperfunctional/pressed voice quality). Each parameter is scored 0–3 (0 = normal, 3 = severe). It is the most widely used perceptual voice assessment tool.',
  },

  {
    id: 'mc-rhin-csf-leak-test',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'A patient presents with clear, watery unilateral rhinorrhoea following endoscopic sinus surgery. What is the most sensitive test to confirm CSF rhinorrhoea?',
    options: [
      { label: 'A', text: 'Beta-2 transferrin assay' },
      { label: 'B', text: 'Glucose testing of the fluid' },
      { label: 'C', text: 'CT cisternography' },
      { label: 'D', text: 'MRI with intrathecal gadolinium' },
    ],
    correctIndex: 0,
    explanation: 'Beta-2 transferrin is a protein found almost exclusively in CSF (also in perilymph and vitreous humour) and is the gold standard biochemical test for CSF leak — sensitivity ~94%, specificity ~100%. Glucose testing is unreliable (false positives from nasal mucus glucose). CT cisternography with intrathecal contrast is used to localise the site of the leak. Beta-trace protein is an alternative with similar accuracy.',
  },

  // ─── FLASHCARD ─────────────────────────────────────────────────────

  {
    id: 'mc-rhin-samters-triad-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'medium',
    front: 'What is Samter\'s triad (aspirin-exacerbated respiratory disease)?',
    back: 'Samter\'s triad / AERD consists of:\n1. Nasal polyposis (typically bilateral, eosinophilic)\n2. Asthma (often difficult to control)\n3. Aspirin/NSAID sensitivity (causes bronchospasm and nasal symptoms)\n\nPathophysiology: Overproduction of cysteinyl leukotrienes (CysLT) with underproduction of prostaglandin E2 (PGE2)\nTreatment: Intranasal steroids, FESS for polyps, aspirin desensitisation, leukotriene inhibitors (montelukast), biologic therapy (dupilumab)',
    bonus: 'Dupilumab (anti-IL4/IL13) is now licensed for CRSwNP refractory to surgery and steroids — it reduces polyp size and improves smell.',
  },

  {
    id: 'mc-rhin-fess-landmarks-flash',
    type: 'flashcard',
    category: 'rhinology',
    difficulty: 'hard',
    front: 'What are the key surgical landmarks during FESS (functional endoscopic sinus surgery)?',
    back: 'Uncinate process: first structure removed (uncinectomy) to access the ethmoid infundibulum\nEthmoid bulla: first complete ethmoid cell, landmark for anterior ethmoidectomy\nBasal (ground) lamella of the middle turbinate: separates anterior and posterior ethmoid cells\nLamina papyracea: lateral boundary (orbit — thin bone, vulnerable to injury)\nSkull base (fovea ethmoidalis): superior limit — thinnest at the lateral lamella of the cribriform plate (Keros classification)\nSphenoid ostium: 1–1.5 cm above the choana, medial to the superior turbinate',
    bonus: 'Keros classification: Type I = 1–3 mm depth (low risk), Type II = 4–7 mm, Type III = 8–16 mm (highest risk of CSF leak during FESS).',
  },

  {
    id: 'mc-laryng-vocal-cord-palsy-flash',
    type: 'flashcard',
    category: 'laryngology',
    difficulty: 'medium',
    front: 'What are the common causes of unilateral vocal cord palsy?',
    back: 'Left RLN more commonly affected (longer course)\n\nSurgical: thyroidectomy (most common iatrogenic cause), anterior cervical spine surgery, carotid/thoracic surgery\nMalignant: lung apex (Pancoast), thyroid, oesophageal, mediastinal lymphadenopathy\nIdiopathic: ~20–30% (possibly viral neuritis)\nNeurological: skull base lesion, brainstem stroke, Arnold–Chiari malformation\n\nWorkup: CT from skull base to aortic arch (follow the course of the RLN)',
    bonus: 'The left RLN loops under the aortic arch, making it vulnerable to mediastinal pathology. The right RLN loops under the subclavian artery.',
  },

  {
    id: 'mc-laryng-reinke-oedema-flash',
    type: 'flashcard',
    category: 'laryngology',
    difficulty: 'easy',
    front: 'What is Reinke\'s oedema and how is it managed?',
    back: 'Reinke\'s oedema: diffuse polypoid oedema of the superficial lamina propria (Reinke\'s space) of the vocal cords\n\nCauses: Smoking (primary cause), voice abuse, hypothyroidism, GORD\nPresentation: Low-pitched, husky voice — often in middle-aged female smokers\n\nManagement:\n1. Smoking cessation (essential — without this, recurrence is inevitable)\n2. Treat reflux/hypothyroidism\n3. Speech therapy\n4. Surgery if conservative measures fail: microlaryngoscopy with incision and aspiration of the gelatinous material',
  },

  // ─── IMAGE-QUIZ ────────────────────────────────────────────────────

  {
    id: 'mc-rhin-ct-sinusitis-iq',
    type: 'image-quiz',
    category: 'rhinology',
    difficulty: 'medium',
    imageUrl: '/images/masterclass/ct-skull-base.jpg',
    imageCaption: 'Axial CT scan of the sinuses and skull base',
    stem: 'This CT shows the paranasal sinuses. When staging chronic rhinosinusitis severity on CT, which scoring system is most commonly used?',
    options: [
      { label: 'A', text: 'Lund–Mackay score (0–24, based on sinus opacification and OMC patency)' },
      { label: 'B', text: 'SNOT-22 score (patient-reported symptoms)' },
      { label: 'C', text: 'Chandler classification (orbital complications)' },
      { label: 'D', text: 'Keros classification (skull base depth)' },
    ],
    correctIndex: 0,
    explanation: 'The Lund–Mackay CT scoring system grades each of the paranasal sinuses (maxillary, anterior ethmoid, posterior ethmoid, sphenoid, frontal) as 0 (no opacification), 1 (partial), or 2 (complete) on each side, plus the ostiomeatal complex (0 or 2). Maximum score = 24. A score of 0–4 is considered within normal range. SNOT-22 is a patient-reported outcome measure, not a radiological score.',
  },

  {
    id: 'mc-rhin-endoscopic-sinus-iq',
    type: 'image-quiz',
    category: 'rhinology',
    difficulty: 'easy',
    imageUrl: '/images/masterclass/endoscopic-nasal-sinus.jpg',
    imageCaption: 'Endoscopic view of the nasal cavity',
    stem: 'This endoscopic image shows a view of the nasal cavity. During FESS, which structure must be removed first to access the ethmoid infundibulum and maxillary sinus ostium?',
    options: [
      { label: 'A', text: 'Uncinate process' },
      { label: 'B', text: 'Middle turbinate' },
      { label: 'C', text: 'Ethmoid bulla' },
      { label: 'D', text: 'Inferior turbinate' },
    ],
    correctIndex: 0,
    explanation: 'The uncinate process is a thin bony projection that forms the medial wall of the ethmoid infundibulum. Uncinectomy (removal of the uncinate process) is the first step in FESS, exposing the natural maxillary sinus ostium and allowing access to the anterior ethmoid cells. Messerklinger described this stepwise approach: uncinectomy → anterior ethmoidectomy → posterior ethmoidectomy → sphenoidotomy → frontal recess dissection.',
  },

  {
    id: 'mc-laryng-endoscopic-larynx-iq',
    type: 'image-quiz',
    category: 'laryngology',
    difficulty: 'medium',
    imageUrl: '/images/masterclass/endoscopic-larynx.jpg',
    imageCaption: 'Endoscopic view of the larynx',
    stem: 'This shows an endoscopic view of the laryngeal inlet. In a patient with hoarseness persisting for more than 3 weeks, what is the recommended initial investigation?',
    options: [
      { label: 'A', text: 'Flexible nasendoscopy (FNE) to visualise the larynx' },
      { label: 'B', text: 'CT neck with contrast' },
      { label: 'C', text: 'Direct laryngoscopy under GA' },
      { label: 'D', text: 'Videostroboscopy' },
    ],
    correctIndex: 0,
    explanation: 'Any patient with hoarseness persisting >3 weeks should have a flexible nasendoscopy (FNE) to visualise the vocal cords and exclude malignancy. This is a 2-week wait (urgent cancer) referral criterion. FNE is quick, performed in clinic, and allows assessment of vocal cord mobility, mucosal lesions, and supraglottic pathology. Videostroboscopy provides more detailed assessment of vocal cord vibration but is a second-line investigation.',
  },

  {
    id: 'mc-laryng-vocal-cord-iq',
    type: 'image-quiz',
    category: 'laryngology',
    difficulty: 'easy',
    imageUrl: '/images/head-neck/normal-vocal-cords.jpeg',
    imageCaption: 'Endoscopic view of the vocal cords',
    stem: 'This image shows the vocal cords. The five layers of the vocal cord (from superficial to deep) include the epithelium, superficial lamina propria (Reinke\'s space), intermediate lamina propria, deep lamina propria, and which deepest layer?',
    options: [
      { label: 'A', text: 'Vocalis muscle (thyroarytenoid muscle body)' },
      { label: 'B', text: 'Cricothyroid membrane' },
      { label: 'C', text: 'Conus elasticus' },
      { label: 'D', text: 'Perichondrium' },
    ],
    correctIndex: 0,
    explanation: 'The vocal cord has five layers (Hirano\'s body-cover model): epithelium (squamous), superficial lamina propria (Reinke\'s space — gelatinous, key for vibration), intermediate LP (elastic fibres), deep LP (collagen fibres), and vocalis muscle (body of the thyroarytenoid). The intermediate and deep LP together form the vocal ligament. Understanding this layered structure is essential for phonosurgery — operating superficially preserves the mucosal wave.',
  },

  // ─── ANIMATED TEXT ─────────────────────────────────────────────────

  {
    id: 'mc-rhin-epistaxis-management',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'easy',
    title: 'Epistaxis Management — Step-by-Step',
    subtitle: 'ENT Masterclass — Rhinology',
    lines: [
      { text: 'First aid: sit forward, pinch the soft part of the nose for 15–20 minutes continuously', highlight: false },
      { text: 'If still bleeding → anterior nasal pack (Rapid Rhino, Merocel, or ribbon gauze with BIPP)', highlight: true },
      { text: 'If anterior pack fails → posterior pack (Foley catheter or posterior balloon) + admit', highlight: true },
      { text: 'Resuscitate: IV access, bloods (FBC, coagulation, G&S), correct coagulopathy' },
      { text: 'Little\'s area (Kiesselbach\'s plexus) — anterior septum: most common site (90%)', highlight: true },
      { text: 'If packing fails → sphenopalatine artery ligation (endoscopic) or anterior ethmoidal artery ligation' },
      { text: 'Embolisation: reserved for posterior bleeding not controlled by surgery (interventional radiology)' },
    ],
    footnote: 'Always check for hereditary haemorrhagic telangiectasia (HHT/Osler–Weber–Rendu) in recurrent epistaxis with mucocutaneous telangiectases and family history.',
  },

  {
    id: 'mc-laryng-laryngeal-cancer-staging',
    type: 'animated-text',
    category: 'laryngology',
    difficulty: 'hard',
    title: 'Laryngeal Cancer — T Staging Overview',
    subtitle: 'ENT Masterclass — Laryngology',
    lines: [
      { text: 'Glottic: T1a = one cord, T1b = both cords, T2 = impaired mobility, T3 = fixed cord, T4 = through cartilage', highlight: true },
      { text: 'Supraglottic: T1 = one subsite, T2 = >1 subsite without fixation, T3 = cord fixation or pre-epiglottic space, T4 = through cartilage' },
      { text: 'Subglottic: rare (<5% of laryngeal cancer), staged by extension to adjacent structures' },
      { text: 'Key principle: cord mobility is the critical T-staging factor for glottic tumours', highlight: true },
      { text: 'Early (T1–2): radiotherapy or transoral laser microsurgery (equivalent outcomes)' },
      { text: 'Advanced (T3–4): total laryngectomy + adjuvant RT or organ preservation chemoradiotherapy', highlight: true },
      { text: 'N+ neck: concurrent neck dissection or chemoradiotherapy to include the neck' },
    ],
    footnote: 'The glottis has minimal lymphatic drainage — T1 glottic SCC has <2% rate of nodal metastasis, so elective neck treatment is not required.',
  },

  {
    id: 'mc-rhin-septal-perforation',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'medium',
    title: 'Nasal Septal Perforation — Causes & Management',
    subtitle: 'ENT Masterclass — Rhinology',
    lines: [
      { text: 'Iatrogenic: previous septoplasty/cautery (most common cause in UK)', highlight: true },
      { text: 'Trauma: nose picking, nasal piercing, septal haematoma (untreated)' },
      { text: 'Drugs: cocaine (vasospasm → necrosis), intranasal steroid misuse (rare), chromium/chrome salts' },
      { text: 'Inflammatory: granulomatosis with polyangiitis (GPA/Wegener\'s), sarcoidosis', highlight: true },
      { text: 'Infective: syphilis, tuberculosis, leishmaniasis' },
      { text: 'Management: treat the cause, silicone septal button (non-surgical), or surgical repair (local mucosal flaps ± interpositional graft)' },
      { text: 'Investigations for unexplained perforation: ANCA, ACE, syphilis serology, biopsy', highlight: true },
    ],
    footnote: 'Always biopsy the edge of an unexplained perforation to exclude vasculitis or malignancy.',
  },

  // ─── SURGICAL STEPS ────────────────────────────────────────────────

  {
    id: 'mc-rhin-septoplasty',
    type: 'surgical-steps',
    category: 'rhinology',
    difficulty: 'medium',
    title: 'Septoplasty',
    steps: [
      { title: 'Indication', detail: 'Nasal obstruction due to deviated nasal septum that has not responded to medical therapy (at least 3 months of nasal steroids). Also performed for access (e.g. FESS, CSF leak repair).' },
      { title: 'Anaesthesia & Preparation', detail: 'General anaesthesia. Topical vasoconstriction (Moffett\'s solution: cocaine + adrenaline + sodium bicarbonate) or xylometazoline. Infiltrate the subperichondrial plane with lidocaine + adrenaline.' },
      { title: 'Incision', detail: 'Hemitransfixion incision on the concave side (Killian incision) through mucoperichondrium down to cartilage. Some surgeons use an endoscopic approach.' },
      { title: 'Elevation of Flaps', detail: 'Raise mucoperichondrial/mucoperiosteal flaps on one or both sides in the subperichondrial plane. Identify the junction between cartilage and bone (maxillary crest, vomer, perpendicular plate of ethmoid).' },
      { title: 'Septum Correction', detail: 'Remove or reposition deviated cartilage and bone. Preserve an L-strut (≥10–15 mm dorsally and caudally) to maintain structural support. Score or morselise curved cartilage if repositioning.' },
      { title: 'Closure', detail: 'Reapproximate flaps. Quilting sutures (through-and-through) or silastic splints to prevent haematoma. Remove splints at 1–2 weeks. Key risk: septal haematoma → abscess → saddle nose deformity.' },
    ],
  },

  {
    id: 'mc-laryng-microlaryngoscopy',
    type: 'surgical-steps',
    category: 'laryngology',
    difficulty: 'medium',
    title: 'Microlaryngoscopy (Operative Laryngoscopy)',
    steps: [
      { title: 'Indication', detail: 'Diagnostic biopsy of laryngeal lesions, excision of benign lesions (polyps, nodules, cysts, papillomas), laser surgery for early glottic cancer (TLM), or injection laryngoplasty.' },
      { title: 'Anaesthesia', detail: 'General anaesthesia with a microlaryngoscopy (MLT) tube (small diameter, 5–6 mm) or jet ventilation. Discuss with anaesthetist — laser surgery requires a laser-safe tube or tubeless technique.' },
      { title: 'Laryngoscope Insertion', detail: 'Insert the operating laryngoscope (e.g. Lindholm, Dedo, or Steiner) and suspend it using a chest support/suspension arm. This provides a bimanual view of the larynx.' },
      { title: 'Visualisation', detail: 'Use the operating microscope (or Hopkins rod endoscope for endoscopic laryngeal surgery) for magnified view. Assess the vocal cords, ventricles, subglottis, and arytenoids.' },
      { title: 'Procedure', detail: 'Biopsy suspicious lesions. For benign lesions, use cold steel microinstruments to excise while preserving the vocal ligament. For TLM, use CO2 laser to excise the tumour with clear margins.' },
      { title: 'Postoperative', detail: 'Voice rest (24–48h for benign lesions, 1 week for cancer). Proton pump inhibitor for reflux protection. Speech therapy referral for vocal rehabilitation. Histology review at MDT.' },
    ],
  },

  // ─── FILL BLANK ────────────────────────────────────────────────────

  {
    id: 'mc-rhin-kiesselbach-plexus',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'easy',
    sentence: 'The most common site of epistaxis is ___ area on the anterior nasal septum, where branches of the anterior ethmoidal, sphenopalatine, greater palatine, and superior labial arteries anastomose.',
    blankWord: 'Little\'s',
    options: ['Little\'s', 'Woodruff\'s', 'Hasner\'s', 'Cottle\'s'],
  },

  {
    id: 'mc-laryng-cricoarytenoid',
    type: 'fill-blank',
    category: 'laryngology',
    difficulty: 'medium',
    sentence: 'The only muscle that abducts the vocal cords is the ___ muscle, innervated by the recurrent laryngeal nerve.',
    blankWord: 'posterior cricoarytenoid',
    options: ['posterior cricoarytenoid', 'lateral cricoarytenoid', 'cricothyroid', 'thyroarytenoid'],
  },

  {
    id: 'mc-rhin-anosmia-covid',
    type: 'fill-blank',
    category: 'rhinology',
    difficulty: 'easy',
    sentence: 'Anosmia (loss of smell) can be classified as conductive (nasal obstruction), sensorineural (olfactory nerve damage), or ___.',
    blankWord: 'central',
    options: ['central', 'peripheral', 'functional', 'mechanical'],
  },

  {
    id: 'mc-laryng-rln-branch',
    type: 'fill-blank',
    category: 'laryngology',
    difficulty: 'hard',
    sentence: 'The external branch of the ___ nerve innervates the cricothyroid muscle and is at risk during superior pole thyroid dissection.',
    blankWord: 'superior laryngeal',
    options: ['superior laryngeal', 'recurrent laryngeal', 'glossopharyngeal', 'hypoglossal'],
  },


  // ═══════════════════════════════════════════════════════════════════
  //  ADDITIONAL CROSS-SPECIALTY CARDS (to reach 100)
  // ═══════════════════════════════════════════════════════════════════

  {
    id: 'mc-oto-bells-palsy-management',
    type: 'animated-text',
    category: 'otology',
    difficulty: 'medium',
    title: 'Bell\'s Palsy Management',
    subtitle: 'ENT Masterclass — Facial Nerve',
    lines: [
      { text: 'Bell\'s palsy = idiopathic lower motor neuron facial nerve palsy (diagnosis of exclusion)', highlight: true },
      { text: 'Most common cause of unilateral facial paralysis (70% of all cases)' },
      { text: 'Likely viral aetiology — HSV-1 reactivation in the geniculate ganglion' },
      { text: 'Eye care is priority: Lacri-Lube, taping at night, moisture chamber glasses', highlight: true },
      { text: 'Oral prednisolone 1 mg/kg for 10 days, started within 72 hours of onset', highlight: true },
      { text: 'Antivirals (aciclovir/valaciclovir): no strong evidence of benefit (Cochrane), may add for severe/complete palsy' },
      { text: 'Prognosis: 85% achieve complete recovery within 3 months; incomplete palsy → >95% full recovery' },
    ],
    footnote: 'Red flags requiring investigation: bilateral palsy, recurrent palsy, slow onset (>3 weeks), no recovery by 4 months, additional cranial nerve involvement.',
  },

  {
    id: 'mc-hn-thyroid-nodule-quiz',
    type: 'quiz',
    category: 'head-neck',
    difficulty: 'medium',
    stem: 'A thyroid nodule is classified as U4 (suspicious) on ultrasound. According to the BTA/Thy classification, what FNAC result indicates "suspicious for papillary thyroid carcinoma"?',
    options: [
      { label: 'A', text: 'Thy4' },
      { label: 'B', text: 'Thy3a' },
      { label: 'C', text: 'Thy3f' },
      { label: 'D', text: 'Thy5' },
    ],
    correctIndex: 0,
    explanation: 'BTA Thy classification: Thy1 = non-diagnostic, Thy2 = benign, Thy3a = atypia/neoplasm possible, Thy3f = follicular neoplasm suspected, Thy4 = suspicious for malignancy (e.g. features suggestive of but not definitive for PTC), Thy5 = diagnostic of malignancy. Thy4 has ~60–75% malignancy rate and warrants diagnostic hemithyroidectomy. This parallels Bethesda V.',
  },

  {
    id: 'mc-oto-cochlear-implant-flash',
    type: 'flashcard',
    category: 'otology',
    difficulty: 'hard',
    front: 'What are the current NICE criteria for cochlear implantation in adults and children?',
    back: 'Adults: Severe to profound bilateral SNHL (≥80 dB HL at 2 and 4 kHz) AND <50% phoneme score on Arthur Boothroyd word test in best-aided condition\n\nChildren: As above criteria, or profound deafness with no benefit from hearing aids after 3-month trial\n\nBilateral implantation: Now recommended for children and considered for adults (improves sound localisation and hearing in noise)\n\nContraindications: absent cochlear nerve (CNVIII aplasia on MRI), cochlear ossification (relative — may still be possible)',
    bonus: 'Earlier implantation leads to better speech and language outcomes. The critical period for auditory development is <3.5 years. Congenitally deaf children should be implanted by 12 months ideally.',
  },

  {
    id: 'mc-rhin-nasal-polyps-quiz',
    type: 'quiz',
    category: 'rhinology',
    difficulty: 'medium',
    stem: 'A unilateral nasal polyp in an adult should raise suspicion for which important differential diagnosis?',
    options: [
      { label: 'A', text: 'Inverted papilloma (Schneiderian papilloma)' },
      { label: 'B', text: 'Antrochoanal polyp' },
      { label: 'C', text: 'Simple inflammatory polyp' },
      { label: 'D', text: 'Allergic fungal sinusitis' },
    ],
    correctIndex: 0,
    explanation: 'A unilateral nasal mass in an adult must be biopsied to exclude inverted papilloma (which has ~5–15% risk of associated SCC) or other neoplasia (SCC, melanoma, olfactory neuroblastoma, lymphoma). Antrochoanal polyps are also typically unilateral but are more common in children/young adults and arise from the maxillary sinus. Bilateral polyps are more likely inflammatory (CRSwNP).',
  },

  {
    id: 'mc-hn-laryngopharyngeal-reflux-flash',
    type: 'flashcard',
    category: 'laryngology',
    difficulty: 'easy',
    front: 'How does laryngopharyngeal reflux (LPR) differ from typical GORD?',
    back: 'LPR (supraesophageal/extraesophageal reflux):\n- Predominant symptoms: throat clearing, globus, hoarseness, cough, postnasal drip\n- Heartburn is ABSENT in >50% of patients\n- Upright (daytime) reflux predominates\n\nGORD:\n- Heartburn and regurgitation predominate\n- Supine (nocturnal) reflux\n\nLaryngoscopy findings in LPR: arytenoid oedema/erythema, posterior commissure hypertrophy, thick endolaryngeal mucus\n\nTreatment: lifestyle measures + twice-daily PPI for 3 months minimum',
    bonus: 'The Reflux Symptom Index (RSI) and Reflux Finding Score (RFS) are validated tools for assessing LPR severity.',
  },

  {
    id: 'mc-paed-airway-fb-larynx-iq',
    type: 'image-quiz',
    category: 'laryngology',
    difficulty: 'medium',
    imageUrl: '/images/masterclass/laryngoscopy-airway.jpg',
    imageCaption: 'Laryngoscopic views of the paediatric airway',
    stem: 'These laryngoscopic images show the paediatric airway. In a child with acute upper airway obstruction requiring emergency surgical airway access, what is the preferred approach?',
    options: [
      { label: 'A', text: 'Needle cricothyroidotomy (in children <12 years)' },
      { label: 'B', text: 'Surgical cricothyroidotomy (standard adult approach)' },
      { label: 'C', text: 'Emergency tracheostomy' },
      { label: 'D', text: 'Retrograde intubation' },
    ],
    correctIndex: 0,
    explanation: 'In children under 12, needle cricothyroidotomy is preferred over surgical cricothyroidotomy because the cricothyroid membrane is small and the cricoid cartilage (the only complete tracheal ring) is vulnerable to damage, risking subglottic stenosis. A large-bore (14G) cannula through the cricothyroid membrane with jet insufflation can provide temporary oxygenation while a definitive airway is established.',
  },

  {
    id: 'mc-hn-submandibular-gland-iq',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'medium',
    imageUrl: '/images/head-neck/submandibular-surgery.jpeg',
    imageCaption: 'Surgical photograph — submandibular region',
    stem: 'This image shows a surgical approach to the submandibular gland. Which nerve is most at risk of injury during submandibular gland excision and runs superficial to the gland within the investing layer of deep cervical fascia?',
    options: [
      { label: 'A', text: 'Marginal mandibular branch of the facial nerve (CN VII)' },
      { label: 'B', text: 'Lingual nerve' },
      { label: 'C', text: 'Hypoglossal nerve (CN XII)' },
      { label: 'D', text: 'Mylohyoid nerve' },
    ],
    correctIndex: 0,
    explanation: 'The marginal mandibular nerve runs within or deep to the investing layer of deep cervical fascia, superficial to the submandibular gland. It may loop below the mandible (in ~20% of cases, up to 1–2 cm below). The Hayes-Martin manoeuvre (ligating the facial vein and retracting superiorly) lifts the nerve out of the operative field. Injury causes inability to depress the lower lip (asymmetric smile).',
  },

  // ─── REMAINING CARDS TO REACH 100 ─────────────────────────────────

  {
    id: 'mc-rhin-endoscopic-meatus-iq',
    type: 'image-quiz',
    category: 'rhinology',
    difficulty: 'medium',
    imageUrl: '/images/masterclass/endoscopic-middle-meatus.jpg',
    imageCaption: 'Endoscopic view of the middle meatus',
    stem: 'This endoscopic view shows the middle meatus region. Which paranasal sinuses drain into the middle meatus via the hiatus semilunaris and ethmoid infundibulum?',
    options: [
      { label: 'A', text: 'Maxillary, frontal, and anterior ethmoid sinuses' },
      { label: 'B', text: 'Posterior ethmoid and sphenoid sinuses' },
      { label: 'C', text: 'Sphenoid sinus only' },
      { label: 'D', text: 'All paranasal sinuses drain here' },
    ],
    correctIndex: 0,
    explanation: 'The middle meatus is the key drainage pathway for the anterior sinuses: maxillary sinus (via the hiatus semilunaris), frontal sinus (via the frontal recess/nasofrontal duct), and anterior ethmoid cells (via the ethmoid infundibulum). The posterior ethmoids drain into the superior meatus, and the sphenoid sinus drains into the sphenoethmoidal recess. This is why the ostiomeatal complex (OMC) in the middle meatus is so critical in sinusitis.',
  },

  {
    id: 'mc-hn-oropharyngeal-mass-iq',
    type: 'image-quiz',
    category: 'head-neck',
    difficulty: 'hard',
    imageUrl: '/images/head-neck/oropharyngeal-mass.jpeg',
    imageCaption: 'Oropharyngeal mass',
    stem: 'This image shows a mass in the oropharynx. In the AJCC 8th edition, HPV-positive (p16+) oropharyngeal SCC has a separate staging system. What is the key difference in nodal staging compared to HPV-negative disease?',
    options: [
      { label: 'A', text: 'Clinical N staging is simplified: N1 = ipsilateral ≤6 cm, N2 = bilateral/contralateral ≤6 cm, N3 = >6 cm' },
      { label: 'B', text: 'All node-positive disease is staged as N1 regardless of size or laterality' },
      { label: 'C', text: 'There is no nodal staging — only T and M staging apply' },
      { label: 'D', text: 'N staging is identical to HPV-negative disease' },
    ],
    correctIndex: 0,
    explanation: 'AJCC 8th edition recognises the superior prognosis of HPV+ oropharyngeal SCC with a simplified N staging: N1 = ipsilateral node(s) ≤6 cm, N2 = contralateral or bilateral nodes ≤6 cm, N3 = any node >6 cm. This means that even extensive bilateral nodal disease (N2) in HPV+ patients still carries a relatively favourable prognosis. The overall stage grouping is also more favourable — even cN2 is Stage I.',
  },

  {
    id: 'mc-oto-vertigo-algorithm',
    type: 'animated-text',
    category: 'otology',
    difficulty: 'medium',
    title: 'Approach to Acute Vertigo',
    subtitle: 'ENT Masterclass — Neuro-otology',
    lines: [
      { text: 'Step 1: Is it true vertigo (rotational illusion) vs lightheadedness/presyncope?', highlight: true },
      { text: 'Step 2: Episodic or continuous? Duration of attacks?' },
      { text: 'Seconds: BPPV (positional, Dix–Hallpike positive)', highlight: true },
      { text: 'Minutes–hours: Ménière\'s disease (with hearing loss, tinnitus, aural fullness)' },
      { text: 'Days: vestibular neuritis (acute onset, no hearing loss, positive head impulse test)', highlight: true },
      { text: 'Step 3: HINTS exam (Head Impulse, Nystagmus, Test of Skew) to distinguish peripheral from central cause' },
      { text: 'Central red flags: vertical nystagmus, direction-changing nystagmus, negative head impulse test, skew deviation, new headache, cerebellar signs', highlight: true },
    ],
    footnote: 'HINTS exam performed by an experienced clinician is more sensitive than early MRI for detecting posterior circulation stroke presenting as acute vertigo.',
  },

  {
    id: 'mc-rhin-turbinate-surgery',
    type: 'animated-text',
    category: 'rhinology',
    difficulty: 'easy',
    title: 'Inferior Turbinate Reduction — Options',
    subtitle: 'ENT Masterclass — Rhinology',
    lines: [
      { text: 'Indication: chronic nasal obstruction due to inferior turbinate hypertrophy, refractory to medical therapy' },
      { text: 'Submucosal diathermy (SMD): needle cautery to shrink submucosal tissue — simple, minimal risk', highlight: true },
      { text: 'Turbinate outfracture: lateral displacement of the turbinate bone — quick, no tissue removal' },
      { text: 'Submucosal resection (turbinoplasty): removes bone and submucosal tissue, preserves mucosa — best long-term results', highlight: true },
      { text: 'Radiofrequency ablation (coblation): volumetric tissue reduction under local anaesthesia' },
      { text: 'Total turbinectomy: AVOID — causes atrophic rhinitis (empty nose syndrome)', highlight: true },
      { text: 'Key principle: preserve mucosa and turbinate function (humidification, laminar airflow)' },
    ],
    footnote: 'Empty nose syndrome is a debilitating condition of paradoxical nasal obstruction despite a widely patent nasal cavity — prevention is better than cure.',
  },

  {
    id: 'mc-oto-stapedotomy',
    type: 'surgical-steps',
    category: 'otology',
    difficulty: 'hard',
    title: 'Stapedotomy for Otosclerosis',
    steps: [
      { title: 'Indication', detail: 'Otosclerosis with conductive hearing loss ≥30 dB and air-bone gap ≥15–20 dB across speech frequencies. The contralateral ear should have serviceable hearing. Alternatively: hearing aid.' },
      { title: 'Approach', detail: 'Transcanal (endaural or permeatal) approach under local or general anaesthesia. Raise a tympanomeatal flap posteriorly. Remove the scutum (curette) to visualise the oval window niche.' },
      { title: 'Confirm Fixation', detail: 'Palpate the ossicular chain: confirm the incus and malleus are mobile, and the stapes is fixed. Identify the stapedius tendon, pyramidal process, and facial nerve (tympanic segment).' },
      { title: 'Divide Stapes Superstructure', detail: 'Divide the stapedius tendon. Fracture and remove the stapes superstructure (crura and head), leaving the fixed footplate in situ.' },
      { title: 'Fenestration', detail: 'Create a small fenestra (0.6–0.8 mm) in the stapes footplate using a microdrill, laser (CO2 or KTP), or manual perforator. Precise calibration is critical to avoid inner ear trauma.' },
      { title: 'Prosthesis Placement', detail: 'Insert a piston prosthesis (Teflon, titanium, or NiTi) through the fenestra and crimp it onto the long process of the incus. Check mobility. Replace the tympanomeatal flap. Pack the canal. Expected ABG closure to ≤10 dB in >90% of cases.' },
    ],
  },

  {
    id: 'mc-hn-total-laryngectomy',
    type: 'surgical-steps',
    category: 'head-neck',
    difficulty: 'hard',
    title: 'Total Laryngectomy',
    steps: [
      { title: 'Indication', detail: 'Advanced laryngeal/hypopharyngeal cancer (T4a or recurrence after chemoradiotherapy), non-functioning larynx with intractable aspiration.' },
      { title: 'Incision & Neck Dissection', detail: 'Apron flap or utility incision. Perform bilateral selective or modified radical neck dissection as indicated. Preserve the parathyroid glands where possible (at least one with its blood supply).' },
      { title: 'Laryngeal Mobilisation', detail: 'Divide the strap muscles and release the larynx. Divide the superior laryngeal pedicles bilaterally. Divide the trachea between rings 2–3 (below the tumour). Enter the pharynx above or below the hyoid.' },
      { title: 'Specimen Removal', detail: 'Remove the entire larynx (hyoid to trachea) en bloc with the pre-epiglottic space. Confirm clear margins on frozen section if available.' },
      { title: 'Pharyngeal Closure', detail: 'Close the pharyngeal defect (neopharynx) in a T or vertical fashion. If defect is too large, reconstruct with a pedicled pectoralis major flap or free flap (radial forearm, ALT, or jejunal).' },
      { title: 'Stoma & Rehabilitation', detail: 'Create a permanent end tracheostoma. Insert a nasogastric tube for feeding. Voice rehabilitation: tracheoesophageal puncture (TEP) with valve (primary or secondary), oesophageal speech, or electrolarynx.' },
    ],
  },

  {
    id: 'mc-paed-cleft-palate-ent-flash',
    type: 'flashcard',
    category: 'head-neck',
    difficulty: 'medium',
    front: 'What are the key ENT problems associated with cleft palate and how are they managed?',
    back: 'Otological:\n- Chronic OME (almost universal in cleft palate) — grommets at time of palate repair; hearing aids as alternative\n- Eustachian tube dysfunction due to abnormal tensor veli palatini insertion\n\nSpeech:\n- Velopharyngeal insufficiency (VPI) — hypernasal speech, nasal emission\n- Management: speech therapy ± pharyngoplasty or pharyngeal flap\n\nAirway:\n- Pierre Robin sequence (micrognathia, glossoptosis, cleft palate) → neonatal airway obstruction\n- May need nasopharyngeal airway, prone positioning, or mandibular distraction osteogenesis',
    bonus: 'Adenoidectomy should be avoided or performed cautiously in cleft palate patients — removal may worsen VPI.',
  },
];
