'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { withBasePath } from '@/lib/paths';

interface TeamMember {
  name: string;
  title: string;
  bio: string;
  email?: string;
  website?: string;
  twitter?: string;
  interests: string[];
  image?: string;
  sunglassesImage?: string;
  featured?: boolean;
}

const teamMembers: TeamMember[] = [
  {
    name: "Oiwi Parker Jones",
    title: "Principal Investigator",
    bio: "Oiwi leads the Parker Jones Neural Processing Lab (PNPL) at the University of Oxford. His aim is to build bridges between deep learning and the brain, for example by accelerating the development of Brain Computer Interfaces (BCIs), but also by developing deep learning methods for interpreting brain data and leveraging principles of systems neuroscience to inform machine learning. Oiwi completed a DPhil focused on Natural Language Processing (NLP) for low-resource languages. He further trained as a postdoc in Imaging Neuroscience at UCL and Oxford, and in Applied Artificial Intelligence at the ORI. He was previously a lecturer in Medicine at St Peter's College, Oxford, and is currently Hugh Price Fellow in Computer Science at Jesus College, Oxford.",
    email: "oiwi@robots.ox.ac.uk",
    website: "https://ori.ox.ac.uk/people/oiwi-parker-jones/",
    twitter: "@oiwi3000",
    interests: ["Neural Decoding", "Brain-Computer Interfaces", "Deep Learning", "Computational Neuroscience"],
    image: "/team/oiwi.png",
    sunglassesImage: "/team/oiwi-sunglasses.jpeg"
  },
  {
    name: "Francesco Mantegna",
    title: "Postdoctoral Research Fellow",
    bio: "Francesco joined PNPL as a Postdoc in 2024 after receiving his PhD in Cognitive Psychology and Neuroscience from NYU under the supervision of David Poeppel. His interests include Brain Computer Interfaces (BCIs), Neurotechnology, and Speech Neuroprosthetics.",
    interests: ["Brain Computer Interfaces", "Neurotechnology", "Speech Neuroprosthetics", "Cognitive Psychology"],
    image: "/team/francesco.png",
    sunglassesImage: "/team/francesco-sunglasses.jpeg"
  },
  {
    name: "Pratik Somaiya",
    title: "Software Engineer",
    bio: "Pratik joined the Oxford Robotics Institute (ORI) in May 2023 as a Robotics Software Engineer. Before that, he pursued an MSc by Research in Robotics at the Lincoln Centre for Autonomous Systems Research (L-CAS), University of Lincoln, UK. Prior to his Master's, he was a Research Assistant at L-CAS working in agri-robotics. Pratik also spent several years in the industry before joining L-CAS. During that time, he worked on developing robots for warehouse material handling and consumer robots such as vacuum cleaning robots.",
    website: "https://pratiksomaiya.in",
    twitter: "@I_m_PRS",
    interests: ["Robotics Software Engineering", "Agri-robotics", "Warehouse Automation", "Consumer Robotics"],
    image: "/team/pratik.jpg",
    sunglassesImage: "/team/pratik-sunglasses.jpeg"
  },
  {
    name: "Dulhan Jayalath",
    title: "DPhil/PhD Student",
    bio: "Dulhan is a DPhil student in the Autonomous Intelligent Machines and Systems (AIMS) CDT. At PNPL, his work focuses on leveraging deep learning to find efficient representations of brain signals for downstream tasks (e.g. phoneme recognition from heard speech brain data). Prior to joining PNPL, he worked on multi-agent RL and reasoning with graph neural networks at the University of Cambridge. Before this, he completed his BSc in Computer Science at the University of Southampton, where he researched computer vision systems for visual navigation. He has worked on large language models at Speechmatics and developing assembly-level machine learning kernels for new hardware at Arm.",
    website: "https://dulhanjayalath.com",
    twitter: "@dulhanjay",
    interests: ["Deep Learning", "Brain Signal Processing", "Multi-agent RL", "Computer Vision"],
    image: "/team/dulhan.png",
    sunglassesImage: "/team/dulhan-sunglasses.jpeg"
  },
  {
    name: "Gilad D. Landau",
    title: "DPhil/PhD Student",
    bio: "Gilad is a D.Phil student currently working on decoding semantic content from the brain with AI. He is motivated by the prospect of merging brains with AI to deepen our understanding of both. His academic background is in Philosophy of Cognitive Science, where he applied a multi-disciplinary approach to explore how brains process representations. Prior to joining PNPL he worked as an applied AI researcher, developing industry-first AI systems in several domains and modalities.",
    interests: ["Semantic Decoding", "Philosophy of Cognitive Science", "Applied AI", "Neural Representations"],
    image: "/team/gilad.png",
    sunglassesImage: "/team/gilad-sunglasses.jpeg"
  },
  {
    name: "Luisa Kurth",
    title: "DPhil/PhD Student",
    bio: "My motivation is to help improving people's lives through AI. Currently, I am mostly interested in the challenges of advancing machine learning for medical image analysis. The CDT in AIMS offers the perfect platform for this journey and I'm excited to connect with anyone sharing my interest. I hold a Bachelor's degree in Psychology from the University of Mannheim and a Master's degree from the University of Oxford's Internet Institute. During my time at Oxford, I participated in cutting-edge research on the societal and ethical aspects of AI. This experience fueled my fascination for machine learning, leading me to pursue a second Master's degree at the University of Tübingen, where I focused on the foundations of deep learning, large language models and explainable AI. Along the way, I've conducted brain research at the Max-Planck-Institute and worked as a policy researcher at the OECD. Outside of research, I enjoy reading, socializing with friends, and visiting art galleries.",
    interests: ["Medical Image Analysis", "Deep Learning", "Explainable AI", "AI Ethics"],
    image: "/team/luisa.jpg",
    sunglassesImage: "/team/luisa-sunglasses.jpeg"
  },
  {
    name: "Miran Özdogan",
    title: "DPhil/PhD Student",
    bio: "Miran's work in PNPL has recently focused on the role of sequence models, such as state space models (e.g. S4 and Mamba) for BCIs. He is also working to establish new benchmarks and standards for neural decoding, in order to quantify and accelerate progress in the field.",
    interests: ["State Space Models", "Brain Computer Interfaces", "Neural Decoding", "Benchmarking"],
    image: "/team/miran.png",
    sunglassesImage: "/team/miran-sunglasses.jpeg"
  },
  {
    name: "John Kwon",
    title: "DPhil/PhD Student",
    bio: "John is a DPhil student as part of the EPSRC Centre for Doctoral Training in Autonomous Intelligent Machines and Systems. He joined Michaelmas Term 2024.",
    interests: ["LLMs", "Scaling laws"],
    image: "/team/john.jpeg",
    sunglassesImage: "/team/john-sunglasses.jpeg"
  },
  {
    name: "SungJun Cho",
    title: "DPhil/PhD Student",
    bio: "SungJun is a Neuroscience DPhil student, co-supervised with Mark Woolrich at OHBA/OxCIN/Psychiatry. He joined Michaelmas Term 2024.",
    interests: ["Probabilistic dynamic models/DyNeMo/DyNeSte", "Foundation models", "Tokenisation"],
    image: "/team/sungjun.jpg",
    sunglassesImage: "/team/sungjun-sunglasses.jpeg"
  },
  {
    name: "Gereon Elvers",
    title: "Visiting Master's Student",
    bio: "Gereon is a Master's student from TU Munich. After initially joining PNPL remotely, he is currently visiting the lab in-person for six months. Besides working on the LibriBrain competition, he is working on the first practical applications of non-invasive speech decoding.",
    interests: ["Word Detection", "PNPL Competition"],
    image: "/team/gereon.jpeg",
    sunglassesImage: "/team/gereon-sunglasses.jpeg"
  },
  {
    name: "Mariya Hendriksen",
    title: "Visiting Research Fellow",
    bio: "Mariya is a Visiting Research Fellow co-supervised with Phil Torr, who joined in Michaelmas Term 2025. Her research focuses on multimodal learning, leveraging external audio, text, and images to improve neural decoding.",
    interests: ["Multimodal Learning", "Neural Decoding"],
    image: "/team/mariya.jpg",
    sunglassesImage: "/team/mariya-sunglasses.jpg"
  },
  {
    name: "Benjamin Ballyk",
    title: "DPhil/PhD Student",
    bio: "Benjamin is a DPhil student in the Autonomous Intelligent Machines and Systems (AIMS) CDT. He joined Michaelmas Term 2025.",
    interests: ["Flow Matching", "Applied Mathematics"],
    image: "/team/benjamin.jpeg",
    sunglassesImage: "/team/benjamin-sunglasses.jpg"
  },
  {
    name: "Tasha Kim",
    title: "DPhil/PhD Student",
    bio: "Tasha J. Kim is a DPhil student jointly supervised by Dr. Oiwi Parker Jones and Prof. Perla Maiolino. Her research explores the intersection of brain function and robotic reasoning, focusing on neuro-symbolic AI systems that interpret neural and behavioral signals to guide robot manipulation and decision-making. She aims to develop robots that serve as collaborative and augmentative partners to humans. Before joining PNPL, Tasha completed her M.S. from Stanford University and B.Sc. from Brown University, and worked for Google and the National Institute of Standards and Technology (NIST).",
    interests: ["Neuro-symbolic AI", "Robotic Reasoning", "Brain-Computer Interfaces"],
    image: "/team/tasha.jpeg",
    sunglassesImage: "/team/tasha-sunglasses.jpg"
  },
  {
    name: "Alex Fung",
    title: "DPhil/PhD Student",
    bio: "Alex Fung is a DPhil student in Neurosurgery, co-supervised with Alex Green. He started his DPhil in 2024 and joined PNPL in 2025. His research focuses on the clinical application of neural decoding for minimally conscious patients.",
    interests: ["Neural Decoding", "Minimally Conscious Patients"],
    image: "/team/alex.jpeg",
    sunglassesImage: "/team/alex-sunglasses.jpg"
  }
];

export default function Team() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [expandedBios, setExpandedBios] = useState<Set<number>>(new Set());
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleBio = (index: number) => {
    const newExpanded = new Set(expandedBios);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedBios(newExpanded);
  };

  const truncateBio = (bio: string, maxLength: number = 100) => {
    if (bio.length <= maxLength) return bio;
    return bio.substring(0, maxLength).trim() + '...';
  };

  

  useEffect(() => {
    const layoutMasonry = () => {
      if (containerRef.current && window.innerWidth > 768) {
        const items = Array.from(containerRef.current.children) as HTMLElement[];
        const gap = 48; // 3rem
        const containerWidth = containerRef.current.offsetWidth;
        const itemWidth = (containerWidth - gap) / 2;
        
        let leftHeight = 0;
        let rightHeight = 0;
        
        items.forEach((item) => {
          item.style.position = 'absolute';
          item.style.width = `${itemWidth}px`;
          
          if (leftHeight <= rightHeight) {
            item.style.left = '0px';
            item.style.top = `${leftHeight}px`;
            leftHeight += item.offsetHeight + gap;
          } else {
            item.style.left = `${itemWidth + gap}px`;
            item.style.top = `${rightHeight}px`;
            rightHeight += item.offsetHeight + gap;
          }
        });
        
        containerRef.current.style.height = `${Math.max(leftHeight, rightHeight)}px`;
      } else if (containerRef.current) {
        // Reset styles for mobile
        const items = Array.from(containerRef.current.children) as HTMLElement[];
        items.forEach((item) => {
          item.style.position = 'static';
          item.style.width = '100%';
          item.style.left = 'auto';
          item.style.top = 'auto';
        });
        containerRef.current.style.height = 'auto';
      }
    };

    // Initial layout
    setTimeout(layoutMasonry, 100);
    
    const resizeObserver = new ResizeObserver(layoutMasonry);
    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <section 
      id="team"
      style={{
        minHeight: '100vh',
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #ffffff 0%, #fafafa 100%)',
        borderTop: '1px solid #e5e5e5',
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ marginBottom: '5rem', textAlign: 'center' as const }}>
          <div style={{ marginBottom: '1rem' }}>
            <span style={{ 
              fontSize: '12px', 
              letterSpacing: '0.15em', 
              textTransform: 'uppercase',
              color: '#666',
              fontWeight: 500 
            }}>
              Who we are
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
            Meet the group
          </h2>
          <p style={{ 
            fontSize: '20px',
            color: '#555',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.6,
            fontWeight: 300
          }}>
            A multidisciplinary team of researchers, engineers, and students advancing the frontiers of neural processing and brain-computer interfaces.
          </p>
        </div>

        <div 
          ref={containerRef}
          style={{ 
            position: 'relative',
            width: '100%'
          }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="team-card"
              style={{
                background: '#ffffff',
                border: '1px solid #e5e5e5',
                borderRadius: '12px',
                padding: '0',
                height: 'fit-content',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                position: 'relative' as const,
                transition: 'all 0.3s ease',
                ...(member.featured && {
                  border: '2px solid #000',
                  boxShadow: '0 12px 48px rgba(0, 0, 0, 0.15)',
                })
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {member.featured && (
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  right: '1rem',
                  background: '#000',
                  color: '#fff',
                  fontSize: '10px',
                  padding: '0.25rem 0.5rem',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  zIndex: 2
                }}>
                  Lead
                </div>
              )}
              
              {/* Mobile Layout */}
              {isMobile ? (
                <div style={{ padding: '1.5rem' }}>
                  {/* Image Section - Square on Top */}
                  {member.image && (
                    <div style={{
                      width: '200px',
                      height: '200px',
                      background: '#f0f0f0',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '8px',
                      marginBottom: '1.5rem',
                      margin: '0 auto 1.5rem auto'
                    }}>
                      <Image
                        src={withBasePath(member.image)}
                        alt={member.name}
                        fill
                        style={{
                          objectFit: 'cover',
                          objectPosition: 'center',
                          transform: 'scale(1.2)',
                        }}
                      />
                    </div>
                  )}
                  
                  {/* Content Section - Below Image */}
                  <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h3 style={{ 
                        fontSize: '20px', 
                        margin: 0,
                        lineHeight: 1.2,
                        fontWeight: 300,
                        letterSpacing: '-0.01em',
                        marginBottom: '0.5rem'
                      }}>
                        {member.name}
                      </h3>
                      <p style={{ 
                        fontSize: '14px',
                        margin: 0, 
                        color: '#666',
                        letterSpacing: '0.01em',
                        textTransform: 'uppercase',
                        fontWeight: 500
                      }}>
                        {member.title}
                      </p>
                    </div>

                    <div style={{ marginBottom: '1.5rem' }}>
                      <p style={{ 
                        fontSize: '15px',
                        margin: 0, 
                        lineHeight: 1.6,
                        color: '#444',
                        fontWeight: 300
                      }}>
                        {expandedBios.has(index) ? member.bio : truncateBio(member.bio)}
                        {member.bio.length > 100 && (
                          <button
                            onClick={() => toggleBio(index)}
                            style={{
                              background: 'none',
                              border: 'none',
                              color: '#0066cc',
                              cursor: 'pointer',
                              fontSize: '15px',
                              padding: 0,
                              marginLeft: '0.5rem',
                              fontWeight: 500
                            }}
                          >
                            {expandedBios.has(index) ? 'Show less' : 'Read more'}
                          </button>
                        )}
                      </p>
                    </div>

                    <div style={{ 
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '1.5rem'
                    }}>
                      {member.interests.map((interest, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: '11px',
                            background: '#f8f8f8',
                            border: '1px solid #e5e5e5',
                            borderRadius: '6px',
                            padding: '0.3rem 0.6rem',
                            color: '#666',
                            letterSpacing: '0.01em'
                          }}
                        >
                          {interest}
                        </span>
                      ))}
                    </div>

                    <div style={{ 
                      display: 'flex',
                      gap: '0.75rem',
                      flexWrap: 'wrap'
                    }}>
                      {member.email && (
                        <a
                          href={`mailto:${member.email}`}
                          className="team-link"
                          style={{
                            fontSize: '11px',
                            color: '#000',
                            textDecoration: 'none',
                            border: '1px solid #000',
                            borderRadius: '6px',
                            padding: '0.4rem 0.8rem',
                            transition: 'all 0.2s ease',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                          }}
                        >
                          Email
                        </a>
                      )}
                      
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-link"
                          style={{
                            fontSize: '11px',
                            color: '#000',
                            textDecoration: 'none',
                            border: '1px solid #000',
                            borderRadius: '6px',
                            padding: '0.4rem 0.8rem',
                            transition: 'all 0.2s ease',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                          }}
                        >
                          Website
                        </a>
                      )}
                      
                      {member.twitter && (
                        <a
                          href={`https://twitter.com/${member.twitter.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="team-link"
                          style={{
                            fontSize: '11px',
                            color: '#000',
                            textDecoration: 'none',
                            border: '1px solid #000',
                            borderRadius: '6px',
                            padding: '0.4rem 0.8rem',
                            transition: 'all 0.2s ease',
                            letterSpacing: '0.02em',
                            textTransform: 'uppercase'
                          }}
                        >
                          Twitter
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                /* Desktop Layout */
                <div style={{ display: 'flex', gap: '2rem', padding: '2.5rem' }}>
                  {/* Image Section */}
                  {member.image && (
                    <div
                      style={{
                        width: '120px',
                        height: '120px',
                        background: '#f0f0f0',
                        position: 'relative',
                        overflow: 'hidden',
                        flexShrink: 0,
                        borderRadius: '8px'
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.transform = 'scale(1.05)'
                        ;(e.currentTarget as HTMLElement).style.filter = 'brightness(1.1)'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.transform = 'scale(1)'
                        ;(e.currentTarget as HTMLElement).style.filter = 'brightness(1)'
                      }}
                    >
                      <Image
                        src={withBasePath(member.image)}
                        alt={member.name}
                        fill
                        style={{
                          objectFit: 'cover',
                          transition: 'opacity 0.25s ease-in-out'
                        }}
                      />
                      {member.sunglassesImage && (
                        <Image
                          src={withBasePath(member.sunglassesImage)}
                          alt={`${member.name} wearing sunglasses`}
                          fill
                          style={{
                            objectFit: 'cover',
                            opacity: hoveredIndex === index ? 1 : 0,
                            transition: 'opacity 0.25s ease-in-out',
                            willChange: 'opacity'
                          }}
                        />
                      )}
                    </div>
                  )}
                  
                  {/* Content Section */}
                  <div style={{ flex: 1 }}>
                <div style={{ marginBottom: '1.5rem' }}>
                  <h3 style={{ 
                    fontSize: '22px', 
                    margin: 0,
                    lineHeight: 1.2,
                    fontWeight: 300,
                    letterSpacing: '-0.01em'
                  }}>
                    {member.name}
                  </h3>
                  <p style={{ 
                    fontSize: '14px', 
                    margin: '0.5rem 0 0 0',
                    color: '#666',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    {member.title}
                  </p>
                </div>
                
                <p style={{ 
                  fontSize: '15px', 
                  lineHeight: 1.6,
                  margin: '0 0 2rem 0',
                  color: '#555',
                  fontWeight: 300
                }}>
                  {member.bio}
                </p>
                
                <div style={{ marginBottom: '2rem' }}>
                  <h4 style={{ 
                    fontSize: '12px', 
                    margin: '0 0 1rem 0',
                    color: '#666',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    Research Interests
                  </h4>
                  <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    gap: '0.5rem'
                  }}>
                    {member.interests.map((interest, idx) => (
                      <span
                        key={idx}
                        style={{
                          fontSize: '12px',
                          background: '#f8f8f8',
                          border: '1px solid #e5e5e5',
                          borderRadius: '6px',
                          padding: '0.4rem 0.8rem',
                          color: '#666',
                          letterSpacing: '0.01em'
                        }}
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div style={{ 
                  display: 'flex', 
                  gap: '1rem',
                  flexWrap: 'wrap'
                }}>
                  {member.email && (
                    <a
                      href={`mailto:${member.email}`}
                      className="team-link"
                      style={{
                        fontSize: '12px',
                        color: '#000',
                        textDecoration: 'none',
                        border: '1px solid #000',
                        borderRadius: '6px',
                        padding: '0.5rem 1rem',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Email
                    </a>
                  )}
                  
                  {member.website && (
                    <a
                      href={member.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-link"
                      style={{
                        fontSize: '12px',
                        color: '#000',
                        textDecoration: 'none',
                        border: '1px solid #000',
                        borderRadius: '6px',
                        padding: '0.5rem 1rem',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Website
                    </a>
                  )}
                  
                  {member.twitter && (
                    <a
                      href={`https://twitter.com/${member.twitter.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="team-link"
                      style={{
                        fontSize: '12px',
                        color: '#000',
                        textDecoration: 'none',
                        border: '1px solid #000',
                        borderRadius: '6px',
                        padding: '0.5rem 1rem',
                        transition: 'all 0.2s ease',
                        letterSpacing: '0.02em',
                        textTransform: 'uppercase'
                      }}
                    >
                      Twitter
                    </a>
                  )}
                </div>
                </div>
              </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
