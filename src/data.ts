export interface Project {
  id: string;
  title: string;
  category: 'automotive' | 'corporate' | 'fandom' | 'events';
  categoryLabel: string;
  thumbnail: string;
  videoUrl: string;
  duration: string;
  client: string;
  description: string;
  tags: string[];
}

export interface Skill {
  name: string;
  percentage: number;
  level: string;
  icon: string; // Lucide icon name
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string; // Lucide icon name
  features: string[];
}

export interface Experience {
  period: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
}

export const PORTFOLIO_USER = {
  name: "Joshwa V",
  title: "Freelance Video Editor",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop", // Elegant professional shot
  tagline: "Transforming Raw Footage Into Cinematic Stories",
  bio: "I create engaging reels, YouTube videos, event highlights and branded content that capture attention and drive results. Creative and detail-oriented Video Editor with hands-on experience crafting engaging visual content for creators, businesses, and events.",
  experienceYears: "1+",
  projectsCompleted: "50+",
  happyClients: "20+",
  phone: "9353496681",
  email: "joshwav36@gmail.com",
  location: "Bangalore, India",
  instagram: "https://www.instagram.com/spyx.aep?igsh=MTV2d296ZzhuMzY4bg==",
  youtube: "https://youtube.com/@spyx_pov?si=t12RTAHH8B_Gsv_P",
  linkedin: "https://linkedin.com",
  behance: "https://behance.net",
  heroVideoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781459924/Porsche_911_Scenepack_Car_Clips_4K_Scenesbyzero_Scenesbyzero_1080P11_bttxlu.mp4"
};

export const SERVICES: Service[] = [
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Professional editing for YouTube, Reels and promotional content with snappy pacing and storytelling focus.",
    icon: "Video",
    features: [
      "Dynamic Pacing & Rhythm",
      "Retention-focused YouTube structures",
      "Sleek transition designs",
      "Seamless multi-cam switching"
    ]
  },
  {
    id: "color-correction",
    title: "Color Correction",
    description: "Enhancing raw logs and flat profiles into vivid, stylistic cinematic visuals matched with pristine grading.",
    icon: "Sparkles",
    features: [
      "Lut customization & matching",
      "Skin tone correction & protection",
      "Stylistic mood-setting environments",
      "Log/Hone normalization"
    ]
  },
  {
    id: "sound-design",
    title: "Sound Design",
    description: "Professional audio cleanup, spatial sound effects, beat synchronization, and premium background atmospheric mixing.",
    icon: "Volume2",
    features: [
      "Background noise elimination",
      "Immersive sound effects (SFX)",
      "Pumping beat-sync edits",
      "Vocal clarity & compression boost"
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Adobe Premiere Pro", percentage: 95, level: "Expert", icon: "Film" },
  { name: "Adobe After Effects", percentage: 85, level: "Advanced", icon: "Boxes" },
  { name: "CapCut", percentage: 90, level: "Expert", icon: "Scissors" },
  { name: "DaVinci Resolve", percentage: 90, level: "Expert", icon: "Sparkles" }
];

export const EXPERIENCES: Experience[] = [
  {
    period: "2025 - Present",
    role: "Freelance Video Editor",
    company: "Self-Employed",
    description: "Worked with global and local content creators, event management teams, agencies and brand businesses creating high-impact promotional videos, Instagram/TikTok reels, and long-form retention-optimized YouTube content.",
    highlights: [
      "Optimized click-through rate & video retention by 35% through custom animation overlays.",
      "Delivered over 50+ polished high-definition projects with 100% video pacing compliance.",
      "Established fully automated media proxies workflow for ultra-fast render outputs."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-virtus-sparco",
    title: "Virtus Sparco",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458740/Virtus_Sparco_Prob3_1_st7cnl_ow9bje.mp4",
    duration: "0:30",
    client: "Sparco / Virtus",
    description: "A cinematic automotive showcase crafted with dynamic transitions, precision cuts, speed ramping, and premium color grading. The edit emphasizes the vehicle's performance, design language, and visual presence through engaging storytelling and professional post-production techniques.",
    tags: ["Automotive", "Speed Ramp", "Color Grading", "Cinematic"]
  },
  {
    id: "proj-ford",
    title: "Ford Performance",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458743/Ford2_Prob3_wwlyhk_dflbjl.mp4",
    duration: "0:25",
    client: "Ford Nation",
    description: "A visually compelling automotive edit focused on showcasing power, performance, and design through cinematic pacing, smooth transitions, and refined color grading techniques.",
    tags: ["Ford", "Muscle Car", "Cinematic Cut", "Grading"]
  },
  {
    id: "proj-porsche",
    title: "Porsche Elegance",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458758/Porche_Prob3_imbvum_qfcc4f.mp4",
    duration: "0:28",
    client: "Porsche Enthusiasts",
    description: "A luxury automotive film highlighting elegance, engineering excellence, and driving performance through premium visual storytelling, cinematic motion, and polished post-production.",
    tags: ["Porsche 911", "Luxury", "Dynamic Motion", "Color Correction"]
  },
  {
    id: "proj-kawasaki",
    title: "Kawasaki Ninja Thrill",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458768/Ninja_Prob3_evo4zh_etm0il.mp4",
    duration: "0:20",
    client: "Rider Chronicles",
    description: "A high-energy motorcycle showcase featuring fast-paced editing, speed ramps, dynamic camera movements, and cinematic effects that capture the thrill of performance riding.",
    tags: ["Kawasaki Ninja", "Superbike", "Speed Ramp", "Phonk Sound"]
  },
  {
    id: "proj-buza",
    title: "BMW",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458754/Buza_1_uxsa3e_jzzsek.mp4",
    duration: "0:22",
    client: "BMW",
    description: "A cinematic showcase of high-performance BMW engineering, emphasizing aggressive design lines, mechanical precision, and superior road presence through dynamic speed ramped sequences.",
    tags: ["BMW", "Supercar", "Performance", "Modern Editing"]
  },
  {
    id: "proj-lamboo",
    title: "Lamboo Velocity",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458762/Lamboo_Prob3_sakcf7_qbfgjx.mp4",
    duration: "0:30",
    client: "Lambo Syndicate",
    description: "A modern promotional edit combining impactful visuals, cinematic pacing, and polished motion design to create an engaging and memorable brand presentation.",
    tags: ["Supercar", "Lamborghini", "Visual Impact", "Pacing"]
  },
  {
    id: "proj-client-edit",
    title: "Guruvara Sanje (Client Edit)",
    category: "automotive",
    categoryLabel: "Automotive",
    thumbnail: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781458758/Guruvara_Sanje_Lyrical_Video_Power_Puneeth_Rajkumar_Trisha_Krishnan_Thaman_S_Prob3_nwyiry_wibve5.mp4",
    duration: "0:35",
    client: "Power Tribute Group",
    description: "An evocative automotive client edit blending energetic beats, lyrical movement, and high-impact visual cuts that deliver a powerful tribute format.",
    tags: ["Client Edit", "Lyrical Flow", "Energetic Cuts", "Vivid Style"]
  },
  {
    id: "proj-go-colors",
    title: "Go Colors",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1500485035595-cbe6f645feb1?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461536/Color_Graded_Go_Colors_lkhegl_tgaj6f.mp4",
    duration: "0:30",
    client: "Go Colors",
    description: "A vibrant commercial edit featuring refined color grading, smooth transitions, and visually engaging storytelling designed to enhance brand appeal and audience engagement.",
    tags: ["Commercial", "Color Grading", "Transitions", "Brand Appeal"]
  },
  {
    id: "proj-tvs-corp",
    title: "TVS Corporate",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1449426468159-d96dbf18f16f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461527/Tvs_Final_dma5mw_zkn8ua.mp4",
    duration: "0:45",
    client: "TVS Motors",
    description: "A dynamic automotive showcase highlighting performance, design, and motion through cinematic pacing, polished visuals, and professional post-production techniques.",
    tags: ["TVS", "Automotive", "Showcase", "Pacing"]
  },
  {
    id: "proj-mission-speed",
    title: "Mission Speed",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461543/Mission_Speed8_hdfedv_wtp7m2.mp4",
    duration: "0:25",
    client: "Mission Speed",
    description: "An action-driven edit combining fast-paced cuts, cinematic effects, and impactful visual storytelling to create an immersive viewing experience.",
    tags: ["Action Edit", "Fast Cut", "Effects", "Storyteller"]
  },
  {
    id: "proj-ds1",
    title: "DS1",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461545/Ds1_axxmfu_lx3cxn.mp4",
    duration: "0:32",
    client: "DS1 Creative",
    description: "A modern cinematic edit crafted with seamless transitions, creative motion design, and polished color grading to deliver a compelling visual narrative.",
    tags: ["Cinematic", "Transitions", "Motion Design", "Narrative"]
  },
  {
    id: "proj-c0428",
    title: "C0428",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461560/C0428_hysclw_osfmbn.mp4",
    duration: "0:28",
    client: "Client Showcase",
    description: "A professionally edited showcase featuring cinematic visuals, smooth pacing, and refined post-production techniques designed to maximize viewer engagement.",
    tags: ["Engagement", "Showcase", "Pacing", "Professional"]
  },
  {
    id: "proj-final-ig",
    title: "Final IG",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461561/Final_Ig_yvhs8p_nbqrno.mp4",
    duration: "0:15",
    client: "Social Media",
    description: "A social media focused edit optimized for audience retention, combining modern motion graphics, engaging transitions, and platform-ready storytelling.",
    tags: ["Instagram", "Social Media", "Retention", "Short Form"]
  },
  {
    id: "proj-im-f",
    title: "IM F",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461565/Im_F_idy0gr_r7mlfg.mp4",
    duration: "0:30",
    client: "IM F Production",
    description: "A cinematic creative edit blending visual effects, dynamic pacing, and professional color grading to create a polished and engaging final production.",
    tags: ["Creative Edit", "Visual Effects", "Color Grading", "Polished"]
  },
  {
    id: "proj-saprx",
    title: "Saprx",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461566/Saprx_Final_Draft_tsn431_tvm9xz.mp4",
    duration: "0:40",
    client: "Saprx Promo",
    description: "A brand-focused promotional edit designed to communicate key messaging through clean visuals, modern transitions, and impactful storytelling.",
    tags: ["Brand Promo", "Transitions", "Storytelling", "Clean"]
  },
  {
    id: "proj-her",
    title: "Her",
    category: "corporate",
    categoryLabel: "Corporate",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781461567/Her_egovh4_ayi7go.mp4",
    duration: "0:35",
    client: "Her Narrative",
    description: "A cinematic storytelling edit emphasizing emotion, visual composition, and smooth narrative flow through carefully crafted editing and color enhancement.",
    tags: ["Emotion", "Visual Flow", "Narrative", "Enhancement"]
  },
  {
    id: "proj-found-you",
    title: "Found You",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462176/Found_You_lxkz9a_hohjrq.mp4",
    duration: "0:45",
    client: "Cinematic Storyteller",
    description: "A cinematic storytelling edit featuring smooth transitions, emotional pacing, and polished visual treatment designed to create a memorable viewing experience.",
    tags: ["Storytelling", "Cinematic", "Emotion", "Transitions"]
  },
  {
    id: "proj-suraj",
    title: "Suraj",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462172/Suraj_sqo2ch_jpcj2r.mp4",
    duration: "0:30",
    client: "Suraj Creative",
    description: "A creatively crafted edit focused on visual impact, seamless cuts, and engaging motion design to enhance storytelling and audience connection.",
    tags: ["Visual Impact", "Cuts", "Motion Design", "Pacing"]
  },
  {
    id: "proj-spidu-amv",
    title: "Spidu AMV",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462163/Spidu_Amv_tlymsp_s970tz.mp4",
    duration: "0:25",
    client: "AMV Anime Community",
    description: "An anime music video edit combining synchronized pacing, dynamic transitions, visual effects, and rhythm-driven storytelling for an immersive viewing experience.",
    tags: ["AMV", "Anime", "VFX", "Rhythm Sync"]
  },
  {
    id: "proj-kichcha",
    title: "Kichcha",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462163/Kichcha_ailgah_cgpdxe.mp4",
    duration: "0:35",
    client: "Kichcha Fans Tribute",
    description: "A cinematic tribute-style edit highlighting powerful screen presence through dramatic pacing, impactful visuals, and refined post-production techniques.",
    tags: ["Tribute", "Cinematic", "Dramatic", "Editing"]
  },
  {
    id: "proj-suraj-edit",
    title: "Suraj Edit",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1598899134739-24c46f58b8c0?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462158/Suraj_Edit_Prob3_c2igl5_bybhis.mp4",
    duration: "0:40",
    client: "Suraj Production",
    description: "A visually engaging edit featuring smooth storytelling, creative transitions, and professional color grading to deliver a polished final production.",
    tags: ["Storyteller", "Transitions", "Color Grading", "Vivid"]
  },
  {
    id: "proj-maname",
    title: "Maname",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462154/Maname_Prob3_uz92pg_iyudzz.mp4",
    duration: "0:30",
    client: "Maname Film Group",
    description: "A cinematic edit crafted with emotional storytelling, refined visuals, and carefully synchronized pacing to enhance audience engagement.",
    tags: ["Emotion", "Visuals", "Sync Pacing", "Engagement"]
  },
  {
    id: "proj-surya-200",
    title: "Surya 200",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462153/Surya_200_yzlmdy_zbqnmh.mp4",
    duration: "0:32",
    client: "Surya Tribute",
    description: "A high-energy showcase edit utilizing dynamic transitions, impactful visuals, and cinematic color grading to create a compelling visual narrative.",
    tags: ["High Energy", "Dynamic", "Color Grade", "Visual Narrative"]
  },
  {
    id: "proj-shaale",
    title: "Shaale",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462151/Shaale_jwapo1_mcbddp.mp4",
    duration: "0:28",
    client: "Shaale Collective",
    description: "A creative cinematic edit blending storytelling, visual rhythm, and polished post-production techniques to deliver an engaging viewing experience.",
    tags: ["Shaale", "Visual Rhythm", "Cinematic", "Storytelling"]
  },
  {
    id: "proj-mark",
    title: "Mark",
    category: "fandom",
    categoryLabel: "Fandom edit",
    thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462150/Mark_-_Official_Trailer_Kichcha_Sudeepa_zzyvgu_yr6r40.mp4",
    duration: "1:00",
    client: "Official Trailer / Kichcha Sudeepa",
    description: "An intense cinematic trailer edit featuring the movie Mark starring Kichcha Sudeepa. It utilizes epic sound design, atmospheric grading, and precise editorial tracking to produce massive anticipation.",
    tags: ["Trailer", "Kichcha Sudeepa", "Sound Design", "Teaser"]
  },
  {
    id: "proj-eiwa-birthday",
    title: "Eiwa Birthday",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462731/Eiwa_B-Day_dlqgbf_mjexxt.mp4",
    duration: "0:45",
    client: "Eiwa Celebrations",
    description: "A celebration-focused cinematic edit crafted with smooth transitions, emotional storytelling, and engaging visual effects to capture memorable moments in a creative and professional format.",
    tags: ["Birthday", "Celebration", "VFX", "Cinematic"]
  },
  {
    id: "proj-bannerughatta",
    title: "Bannerughatta",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1500627869374-13cd993b1115?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462727/Bannerughatta_Prob3_ngv9wz_uoxssu.mp4",
    duration: "0:30",
    client: "Nature Exploration",
    description: "A visually immersive edit showcasing location-based storytelling through cinematic visuals, refined pacing, and professional post-production techniques.",
    tags: ["Nature", "Travelogue", "Storytelling", "Immersive"]
  },
  {
    id: "proj-img-7203",
    title: "IMG 7203",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462716/Img_7203_1_z2tma3_hvlyia.mp4",
    duration: "0:25",
    client: "Street Event",
    description: "A cinematic creative project featuring polished transitions, engaging motion design, and carefully crafted visual storytelling to create a compelling viewing experience.",
    tags: ["Urban", "Motion Design", "Transitions", "Creative"]
  },
  {
    id: "proj-task-q",
    title: "Task Q",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1540317580384-e5d43616b9aa?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462715/Task_Q_aijlim_cjncpi.mp4",
    duration: "0:32",
    client: "Event Production",
    description: "A professionally edited showcase combining dynamic visuals, seamless pacing, and refined post-production techniques to deliver a clean and engaging final production.",
    tags: ["Showcase", "Pacing", "Professional", "Dynamic"]
  },
  {
    id: "proj-na-ninage",
    title: "Na Ninage",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462704/Na_Ninage_log2ik_gwmxan.mp4",
    duration: "0:40",
    client: "Musical Occasions",
    description: "A cinematic music-focused edit designed to enhance emotional storytelling through synchronized visuals, smooth transitions, and carefully balanced color grading.",
    tags: ["Music", "Emotion", "Sync Visuals", "Color Grading"]
  },
  {
    id: "proj-paid-campaign",
    title: "Paid Campaign",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462698/Paid_Prob3_xtddoy_oxrhe1.mp4",
    duration: "0:24",
    client: "Digital Campaign",
    description: "A performance-oriented promotional edit developed for digital marketing campaigns, featuring attention-grabbing visuals, modern motion graphics, and audience-focused storytelling.",
    tags: ["Promo", "Marketing", "Graphics", "Audience"]
  },
  {
    id: "proj-paid-edit-4",
    title: "Paid Edit 4",
    category: "events",
    categoryLabel: "Events",
    thumbnail: "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=800&auto=format&fit=crop",
    videoUrl: "https://res.cloudinary.com/dvz24jz0a/video/upload/q_auto/f_auto/v1781462700/Paid_Edit_4_cgr3rg_m6ldkh.mp4",
    duration: "0:20",
    client: "Campaign Drive",
    description: "A high-retention strategic digital campaign edit blending smooth transitions, color adjustments, and rhythmic beats optimized for social sharing.",
    tags: ["Retention", "Social Campaign", "Rhythmic", "Strategic"]
  }
];

export const FEATURED_SHOWREEL = {
  title: "Ultimate Filmmaking & Directing Showreel",
  videoUrl: "https://res.cloudinary.com/dt9egaeld/video/upload/v1780688934/WEDDING_VIDEO_EDIT_hmfv48.mp4",
  thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=1200&auto=format&fit=crop",
  description: "A comprehensive montage showing off the best transitions, dynamic pacing, custom sound scoring, and extreme detail matching in post-production work over the last year."
};
