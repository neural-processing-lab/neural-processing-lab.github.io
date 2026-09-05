'use client';

import React from 'react';

interface Publication {
  title: string;
  authors: string[];
  venue: string;
  year: number;
  doi?: string;
  arxiv?: string;
  description?: string;
  abstract?: string;
  featured?: boolean;
}

// OVMI leads at the lab’s request; all other papers follow newest-first arXiv order.
const publications: Publication[] = [
  {
    title: "A Common Measure of Communication for Speech Brain-Computer Interfaces",
    authors: ["Dulhan Jayalath","Benjamin Ballyk","Oiwi Parker Jones"],
    venue: "arXiv preprint",
    year: 2026,
    arxiv: "2609.02887",
    description: "Open-Vocabulary Mutual Information (OVMI) compares speech BCIs on a shared communication scale, accounting for both vocabulary coverage and decoding accuracy.",
    abstract: "Speech brain-computer interfaces (speech BCIs) translate neural activity into language, offering a path towards restoring speech for people with paralysis and, more broadly, enabling new forms of natural human-computer interaction. Despite this promise, the field lacks a common measure of progress because systems use different datasets, recording methods, types of speech, and vocabularies, so their reported scores are rarely comparable. Underlying this measurement problem are two unresolved questions: (i) what distribution of words should a speech BCI enable a user to communicate, and (ii) how much information from this distribution can a system convey. We address both by deriving open-vocabulary mutual information (OVMI), an information-theoretic quantity that measures the information conveyed by a decoder relative to a reference distribution over the words a user may wish to communicate. This allows capabilities measured under different conditions, such as distinct vocabularies, to be evaluated on a common communication scale. We show that ordinarily reported accuracy, word error rate (WER), and other metrics computed only over the words a system supports can overstate how much of a user's intended speech the system can communicate. We then use OVMI to compare existing systems, expose trade-offs between how much of the user's language a system supports and how accurately it decodes those words, show that these comparisons depend on what the user is expected to communicate, and demonstrate that selecting a vocabulary to maximise OVMI yields up to 16.3% relative improvement in accuracy across three speech domains. OVMI therefore provides the speech BCI community with a principled way to compare heterogeneous systems, improve vocabulary design, and measure progress in the field.",
    featured: true
  },
  {
    title: "The 2026 PNPL Competition: Word Classification and Efficient Cross-Subject Generalisation in LibriBrain100",
    authors: ["Francesco Mantegna","Gereon Elvers","Dulhan Jayalath","Gilad Landau","Tasha Kim","Miran Özdogan","Luisa Kurth","Teyun Kwon","SungJun Cho","Benjamin Ballyk","Alex Fung","Anna Greer","Pratik Somaiya","Christian Herff","Yorguin Mantilla Ramos","Hamza Abdelhedi","Karim Jerbi","Greg Farquhar","Brendan Shillingford","Mark Woolrich","Oiwi Parker Jones"],
    venue: "arXiv preprint",
    year: 2026,
    arxiv: "2609.03231",
    description: "The 2026 PNPL Competition introduces word classification in LibriBrain100, with Deep and Broad tracks for within-subject performance and efficient cross-subject generalisation.",
    abstract: "The ambition of the 2025 PNPL competition (Landau et al., 2025) was to launch a multi-year curriculum for non-invasive speech decoding. Designed to progress from foundational tasks toward the linguistic complexity required for a practical brain-computer interface (BCI), it set the stage with speech detection and phoneme classification tasks. Winning submissions reached F1-macro scores of 95.6% and 73.6% on the respective tasks (Elvers et al., 2026), highly significant advances. This success was built on the LibriBrain dataset (Özdogan et al., 2025), the largest within-subject MEG dataset recorded at the time with ≈50 hours of data for one subject. However, while within-subject scale drives strong decoding performance, a practical BCI must generalise to new users from minutes of data, not hours. The 2026 PNPL competition responds to this challenge with LibriBrain100 (Mantegna et al., 2026), an extended LibriBrain dataset with 32 additional subjects (≈40 minutes each) plus even more within-subject data (≈80 hours). Advancing the curriculum of tasks to focus on word classification, two complementary tracks are presented in this competition: the Deep track targets within-subject word classification at scale, aiming at the best possible performance; the Broad track targets cross-subject generalisation, progressively reducing the amount of subject-specific fine-tuning data from ≈40 to ≈20 to ≈10 minutes, a duration that falls within a clinically feasible range and brings us a step closer to a non-invasive BCI capable of restoring communication to people living with profound paralysis.",
    featured: true
  },
  {
    title: "LibriBrain100: One Hundred Hours of Broad and Deep MEG Data for Neural Speech Decoding at Scale",
    authors: ["Francesco Mantegna","Dulhan Jayalath","Gereon Elvers","Tasha Kim","Benjamin Ballyk","Alex Fung","SungJun Cho","Teyun Kwon","Luisa Kurth","Miran Özdogan","Gilad Landau","Pratik Somaiya","Natalie Voets","Mark Woolrich","Oiwi Parker Jones"],
    venue: "arXiv preprint",
    year: 2026,
    arxiv: "2608.25204",
    description: "LibriBrain100 provides over 100 hours of MEG speech data, combining approximately 80 hours from one subject with recordings from 32 additional subjects.",
    abstract: "We introduce LibriBrain100, a large-scale MEG dataset for speech decoding designed from the ground up for reproducible, standardised evaluation. LibriBrain100 more than doubles the size of the original LibriBrain release, resulting in over 100 hours of high-quality MEG acquired while subjects listened to naturalistic continuous speech. With ≈80 hours from a single subject, LibriBrain100 sets a new record for deep, within-subject neural data (8× more than the next comparable dataset and roughly 80× more than other datasets). To demonstrate the payoff of this depth-first design, we evaluate on a word-classification benchmark—an increasingly well-established stepping stone towards the open challenge of noninvasive brain-to-text decoding. Using an existing decoding model, we achieve state-of-the-art performance—validating both the quality of the recordings and the value of within-subject data at scale. Because collecting 80 hours of data per user is impractical for real-world applications, we also collected ≈40 minutes of additional data from each of 32 subjects. Using the same word-classification benchmark, we demonstrate the value of broad multi-subject data: supervised finetuning of a pre-trained model can substantially compensate for limited per-subject data. We provide standard train, validation, and test splits, all reproducible through an open-sourced Python library that supports easy downloading, optional preprocessing, and data loading for common deep learning frameworks. In addition, the dataset and evaluation infrastructure are being released alongside an open machine-learning competition with a public leaderboard for standardised benchmarking. Ultimately, our hope is that LibriBrain100 will accelerate progress towards practical non-invasive brain-computer interfaces, capable of restoring communication to people living with severe paralysis.",
    featured: true
  },
  {
    title: "Physiological Noise Augmentation Improves Non-Invasive Brain-to-Speech",
    authors: ["Benjamin Ballyk","Teyun Kwon","Miran Özdogan","Oiwi Parker Jones"],
    venue: "arXiv preprint",
    year: 2026,
    arxiv: "2607.05165",
    description: "Physiological noise augmentation improves imagined-digit decoding by training models to tolerate ocular and cardiac artifacts in MEG recordings.",
    abstract: "Non-invasive brain-to-speech decoding aims to restore communication to patients suffering from neurodegenerative disease, without the risks of neurosurgery. Existing MEG- and EEG-based methods, while scalable, continue to suffer from high word error rates driven by relatively low signal-to-noise ratios compared to invasive recordings. We propose physiological noise augmentation (PNA), a data augmentation method that explicitly trains decoders to become invariant to task-agnostic artifacts (e.g. ocular and cardiac activity). PNA draws inspiration from automatic speech recognition systems, where environmental noise (e.g. dogs barking, city traffic) is added to clean speech to improve robustness. Analogously, we decompose brain recordings into clean data and noise artifacts using independent component analysis (ICA), before scaling and remixing to generate biophysically realistic, label-preserving training examples. We show that PNA approximates anisotropic regularization, penalizing decoder sensitivity along artifact-dominated directions. On MegNIST, a 12k-trial imagined-digit MEG dataset, PNA with 10-trial averaging improves EEGNet decoding accuracy by 4.7 percentage points (absolute) over training on real data alone. Our results suggest that artifact-aware augmentation and trial averaging are complementary tools for improving robustness in non-invasive speech BCIs.",
    featured: true
  },
  {
    title: "MEG-XL: Data-Efficient Brain-to-Text via Long-Context Pre-Training",
    authors: ["Dulhan Jayalath", "Oiwi Parker Jones"],
    venue: "ICML 2026",
    year: 2026,
    arxiv: "2602.02494",
    description: "MEG-XL is a model pre-trained with extremely long-context MEG samples, leveraging long-range dependencies in neural signals to significantly improve data-efficient brain-to-text decoding.",
    abstract: "Clinical brain-to-text interfaces are designed for paralysed patients who cannot provide extensive training recordings. Pre-training improves data-efficient generalisation by learning statistical priors across subjects, but these priors critically depend on context. While natural speech might unfold gradually over minutes, most methods pre-train with only a few seconds of context. Thus, we propose MEG-XL, a model pre-trained with 2.5 minutes of MEG context per sample, 5-300x longer than prior work, and equivalent to 191k tokens, capturing extended neural context. Fine-tuning on the task of word decoding from brain data, MEG-XL matches supervised performance with a fraction of the data (e.g. 1hr vs 50hrs) and outperforms brain foundation models. We find that models pre-trained with longer contexts learn representations that transfer better to word decoding. Our results indicate that long-context pre-training helps exploit extended neural context that other methods unnecessarily discard.",
    featured: true
  },
  {
    title: "Gated Uncertainty-Aware Runtime Dual Invariants for Neural Signal-Controlled Robotics",
    authors: ["Tasha Kim", "Oiwi Parker Jones"],
    venue: "NeurIPS 2025 Workshop on Embodied and Safe-Assured Robotic Systems",
    year: 2025,
    arxiv: "2511.20570",
    description: "GUARDIAN, a framework for real-time neuro-symbolic verification for neural signal-controlled robotics, achieving high safety rates even with low test accuracies and high confidence miscalibration.",
    abstract: "Safety-critical assistive systems that directly decode user intent from neural signals require rigorous guarantees of reliability and trust. We present GUARDIAN (Gated Uncertainty-Aware Runtime Dual Invariants), a framework for real-time neuro-symbolic verification for neural signal-controlled robotics. GUARDIAN enforces both logical safety and physiological trust by coupling confidence-calibrated brain signal decoding with symbolic goal grounding and dual-layer runtime monitoring. On the BNCI2014 motor imagery electroencephalogram (EEG) dataset with 9 subjects and 5,184 trials, the system performs at a high safety rate of 94-97% even with lightweight decoder architectures with low test accuracies (27-46%) and high ECE confidence miscalibration (0.22-0.41). We demonstrate 1.7x correct interventions in simulated noise testing versus at baseline. The monitor operates at 100Hz and sub-millisecond decision latency, making it practically viable for closed-loop neural signal-based systems. Across 21 ablation results, GUARDIAN exhibits a graduated response to signal degradation, and produces auditable traces from intent, plan to action, helping to link neural evidence to verifiable robot action.",
    featured: true
  },
  {
    title: "Elementary, My Dear Watson: Non-Invasive Neural Keyword Spotting in the LibriBrain Dataset",
    authors: ["Gereon Elvers", "Gilad Landau", "Oiwi Parker Jones"],
    venue: "NeurIPS 2025 Data on the Brain & Mind Workshop",
    year: 2025,
    arxiv: "2510.21038",
    description: "Introducing Keyword Spotting (KWS) as a practical intermediate task for advancing non-invasive brain-computer interfaces, with standardised benchmarks and a reference model on the LibriBrain dataset.",
    abstract: "Non-invasive brain-computer interfaces (BCIs) are beginning to benefit from large, public benchmarks. However, current benchmarks target relatively simple, foundational tasks like Speech Detection and Phoneme Classification, while application-ready results on tasks like Brain-to-Text remain elusive. We propose Keyword Spotting (KWS) as a practically applicable, privacy-aware intermediate task. Using the deep 52-hour, within-subject LibriBrain corpus, we provide standardized train/validation/test splits for reproducible benchmarking, and adopt an evaluation protocol tailored to extreme class imbalance. Concretely, we use area under the precision-recall curve (AUPRC) as a robust evaluation metric, complemented by false alarms per hour (FA/h) at fixed recall to capture user-facing trade-offs. To simplify deployment and further experimentation within the research community, we are releasing an updated version of the pnpl library with word-level dataloaders and Colab-ready tutorials. As an initial reference model, we present a compact 1-D Conv/ResNet baseline with focal loss and top-k pooling that is trainable on a single consumer-class GPU. The reference model achieves approximately 13x the permutation baseline AUPRC on held-out sessions, demonstrating the viability of the task. Exploratory analyses reveal: (i) predictable within-subject scaling - performance improves log-linearly with more training hours - and (ii) the existence of word-level factors (frequency and duration) that systematically modulate detectability.",
    featured: true
  },
  {
    title: "The 2025 PNPL competition: Speech detection and phoneme classification in the LibriBrain dataset",
    authors: ["Gilad Landau", "Miran Özdogan", "Gereon Elvers", "Francesco Mantegna", "Pratik Somaiya", "Dulhan Jayalath", "Luisa Kurth", "Teyun Kwon", "Brendan Shillingford", "Greg Farquhar", "Minqi Jiang", "Karim Jerbi", "Hamza Abdelhedi", "Yorguin Mantilla Ramos", "Caglar Gulcehre", "Mark Woolrich", "Natalie Voets", "Oiwi Parker Jones"],
    venue: "NeurIPS 2025 Competition Track",
    year: 2025,
    arxiv: "2506.10165",
    description: "Competition framework for advancing speech decoding from non-invasive brain data using the LibriBrain dataset. Cite this for the LibriBrain competition.",
    abstract: "The advance of speech decoding from non-invasive brain data holds the potential for profound societal impact. Among its most promising applications is the restoration of communication to paralysed individuals affected by speech deficits such as dysarthria, without the need for high-risk surgical interventions. This competition provides a standardized framework for evaluating speech detection and phoneme classification methods using the LibriBrain dataset, fostering collaborative progress in the field.",
    featured: true
  },
  {
    title: "LibriBrain: Over 50 Hours of Within-Subject MEG to Improve Speech Decoding Methods at Scale",
    authors: ["Miran Özdogan", "Gilad Landau", "Gereon Elvers", "Dulhan Jayalath", "Pratik Somaiya", "Francesco Mantegna", "Mark Woolrich", "Oiwi Parker Jones"],
    venue: "NeurIPS 2025 Datasets and Benchmarks Track",
    year: 2025,
    arxiv: "2506.02098",
    description: "The largest single-subject MEG dataset to date for speech decoding, with over 50 hours of recordings. Cite this for the LibriBrain dataset.",
    abstract: "LibriBrain represents the largest single-subject MEG dataset to date for speech decoding, with over 50 hours of recordings. The dataset aims to support advances in neural decoding by providing high-quality MEG recordings with detailed annotations. This comprehensive resource enables researchers to develop and test sophisticated speech decoding algorithms at unprecedented scale, potentially accelerating progress in brain-computer interface technologies.",
    featured: true
  },
  {
    title: "Unlocking Non-Invasive Brain-to-Text",
    authors: ["Dulhan Jayalath", "Gilad Landau", "Oiwi Parker Jones"],
    venue: "ICML 2025 Workshop on Generative AI and Biology",
    year: 2025,
    arxiv: "2505.13446",
    description: "Advances in non-invasive brain-to-text technology with LLM-based rescoring and predictive in-filling approaches.",
    abstract: "The paper discusses advances in non-invasive brain-to-text (B2T) technology, highlighting three key contributions: extending word-classification models with LLM-based rescoring, introducing a predictive in-filling approach for out-of-vocabulary words, and demonstrating scalability of non-invasive B2T models across datasets. These developments represent significant progress toward practical brain-computer interfaces for communication.",
    featured: true
  },
  {
    title: "The Brain's Bitter Lesson: Scaling Speech Decoding With Self-Supervised Learning",
    authors: ["Dulhan Jayalath", "Gilad Landau", "Brendan Shillingford", "Mark Woolrich", "Oiwi Parker Jones"],
    venue: "ICML 2025",
    year: 2025,
    arxiv: "2406.04328",
    description: "Breakthrough in scaling speech decoding models across both subjects and datasets using self-supervised learning techniques.",
    abstract: "The past few years have seen remarkable progress in the decoding of speech from brain activity, primarily driven by large single-subject datasets. However, due to individual variation in brain anatomy and physiology, these models typically do not generalize well across subjects. Here we show that self-supervised learning can be used to create speech decoding models that generalize across subjects and datasets. Using a combination of contrastive learning and masked language modeling on neural recordings from multiple subjects, we demonstrate significant improvements in cross-subject decoding performance. These advances unlock the potential for scaling speech decoding models beyond the current frontier.",
    featured: true
  }
];

export default function Publications() {
  const [expandedAbstract, setExpandedAbstract] = React.useState<number | null>(null);

  return (
    <section 
      id="publications"
      style={{
        minHeight: '100vh',
        padding: 'clamp(4rem, 8vw, 6rem) clamp(1rem, 4vw, 2rem)',
        background: 'linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)',
        borderTop: '1px solid #e5e5e5',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: 'clamp(3rem, 8vw, 5rem)', textAlign: 'center' as const }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ 
              fontSize: '12px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              color: '#666',
              fontWeight: 500 
            }}>
              Our work
            </span>
          </div>
          <h2 style={{ 
            fontSize: 'clamp(36px, 5vw, 56px)', 
            margin: 0, 
            lineHeight: 1.1,
            fontWeight: 200,
            letterSpacing: '-0.03em',
            marginBottom: '1.5rem'
          }}>
            Recent Publications
          </h2>
          <p style={{ 
            fontSize: '20px',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            Take a look at some of our recent work in the field of neural signal processing and brain-computer interfaces.
          </p>
        </div>

        <div style={{ display: 'grid', gap: '3rem' }}>
          {publications.map((pub, index) => (
            <div
              key={index}
              className="publication-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e5e5e5',
                borderRadius: '2px',
                padding: 'clamp(1.5rem, 5vw, 3rem)',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.06)',
                position: 'relative' as const,
                ...(pub.featured && {
                  border: '1px solid #ddd',
                  boxShadow: '0 8px 40px rgba(0, 0, 0, 0.12)',
                })
              }}
            >
              {pub.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#000',
                  color: '#fff',
                  fontSize: '10px',
                  padding: '0.25rem 0.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase'
                }}>
                  Featured
                </div>
              )}
              
              <div style={{ 
                marginBottom: '1.5rem',
                marginTop: pub.featured ? '2.5rem' : '0'
              }}>
                <h3 style={{ 
                  fontSize: '24px', 
                  margin: 0,
                  lineHeight: 1.3,
                  fontWeight: 300,
                  letterSpacing: '-0.01em'
                }}>
                  {pub.title}
                </h3>
              </div>
              
              <div style={{ marginBottom: '1rem' }}>
                <span style={{ 
                  fontSize: '15px', 
                  color: '#666',
                  letterSpacing: '0.01em'
                }}>
                  {pub.authors.join(', ')}
                </span>
              </div>
              
              <div style={{ 
                marginBottom: '1.5rem',
                display: 'flex',
                alignItems: 'center',
                gap: 'clamp(0.75rem, 2vw, 1.5rem)',
                flexWrap: 'wrap'
              }}>
                <span style={{ 
                  fontSize: '15px', 
                  fontWeight: 500,
                  color: '#444'
                }}>
                  {pub.venue} ({pub.year})
                </span>
                
                {pub.doi && (
                  <a
                    href={`https://doi.org/${pub.doi}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                    style={{
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      color: '#000',
                      textDecoration: 'none',
                      border: '1px solid #000',
                      padding: 'clamp(0.3rem, 1vw, 0.4rem) clamp(0.6rem, 1.5vw, 0.8rem)',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}
                  >
                    DOI
                  </a>
                )}
                
                {pub.arxiv && (
                  <a
                    href={`https://arxiv.org/abs/${pub.arxiv}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="publication-link"
                    style={{
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      color: '#000',
                      textDecoration: 'none',
                      border: '1px solid #000',
                      padding: 'clamp(0.3rem, 1vw, 0.4rem) clamp(0.6rem, 1.5vw, 0.8rem)',
                      transition: 'all 0.2s ease',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase'
                    }}
                  >
                    arXiv
                  </a>
                )}
              </div>
              
              {pub.description && (
                <p style={{ 
                  fontSize: '16px', 
                  color: '#555',
                  margin: '0 0 1.5rem 0',
                  lineHeight: 1.6,
                  fontWeight: 300
                }}>
                  <span style={{ fontWeight: 600 }}>tl;dr:</span> {pub.description}
                </p>
              )}
              
              {pub.abstract && (
                <div>
                  <button
                    onClick={() => setExpandedAbstract(expandedAbstract === index ? null : index)}
                    style={{
                      background: 'none',
                      border: '1px solid #ccc',
                      padding: 'clamp(0.4rem, 1vw, 0.5rem) clamp(0.8rem, 2vw, 1rem)',
                      fontSize: 'clamp(10px, 2vw, 12px)',
                      color: '#666',
                      cursor: 'pointer',
                      letterSpacing: '0.02em',
                      textTransform: 'uppercase',
                      transition: 'all 0.2s ease',
                      marginBottom: '1rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#000';
                      e.currentTarget.style.color = '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#ccc';
                      e.currentTarget.style.color = '#666';
                    }}
                  >
                    {expandedAbstract === index ? 'Hide Abstract' : 'Show Abstract'}
                  </button>
                  
                  {expandedAbstract === index && (
                    <div style={{
                      background: '#f8f8f8',
                      padding: 'clamp(1rem, 3vw, 2rem)',
                      border: '1px solid #eee',
                      marginTop: '0.5rem'
                    }}>
                      <h4 style={{
                        fontSize: '14px',
                        fontWeight: 500,
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                        color: '#666',
                        margin: '0 0 1rem 0'
                      }}>
                        Abstract
                      </h4>
                      <p style={{
                        fontSize: '15px',
                        lineHeight: 1.7,
                        color: '#444',
                        margin: 0,
                        textAlign: 'justify' as const
                      }}>
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
