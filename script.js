/* =========================================================
   NEURIX'26 — COMPLETE FRONTEND JAVASCRIPT
   Department + Year Integrated
   ========================================================= */

"use strict";


/* =========================================================
   01. CONFIGURATION
   ========================================================= */

const MAX_EVENTS = 5;

const REGISTRATION_FEE = 150;

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbyRHhfmDVA_4v-7mQgLH5c7UoM2TErPTTMuO81bfwzSUDOvA7eGxfAneynJtF5-NibV/exec";


/* =========================================================
   02. EVENT DATA
   ========================================================= */

const EVENTS = {

    technical: [

        {
            id: "prompt-clash",
            name: "Prompt Clash",

            description:
                "A cutting-edge AI challenge that tests prompt engineering, creative AI generation and AI-powered web development across three progressively challenging rounds using ChatGPT, Google Gemini and Lovable.",

            category: "Technical",
            mode: "Individual",
            duration: "45–60 Minutes",
            icon: "🤖",

            objective:
                "Prompt Clash challenges participants to communicate effectively with AI models, generate creative content and build functional web applications through intelligent prompting. The event tests prompt engineering, creativity, precision, visual communication, technical thinking and practical AI application skills.",

            procedure: [
                "Participants register before the event and report to the designated AIML Lab.",
                "Coordinators explain the event structure, rules, time limits and evaluation process.",
                "All registered participants compete in Round 1 – Speed Prompt Challenge using ChatGPT.",
                "Top-performing participants based on score and speed advance to Round 2.",
                "Qualified participants compete in Round 2 – AI Image Generation using Google Gemini.",
                "The top 6–10 participants based on the Round 2 judging panel score advance to the final round.",
                "Finalists participate in Round 3 – AI-Powered Web Page Creation using Lovable.",
                "Finalists create and iterate a promotional landing page based on the given product image and brief.",
                "The judging panel evaluates the final webpages and determines the winners."
            ],

            rounds: [
                {
                    name: "Round 1 – Speed Prompt Challenge",
                    platform: "ChatGPT",
                    description:
                        "Participants are given 10 prompt-based tasks to complete within 5 minutes. Each task requires a specific output such as JSON structures, word-limited responses, haikus or code snippets. Speed, correctness and exact format adherence are tested.",
                    time: "5 Minutes",
                    scoring:
                        "1 mark for each correct task, with a speed bonus. Incorrect output format receives 0 marks."
                },
                {
                    name: "Round 2 – AI Image Generation",
                    platform: "Google Gemini",
                    description:
                        "Participants receive a common topic without reference images and must craft effective prompts in Google Gemini to generate a high-quality and relevant image. Creative prompting and visual communication are evaluated.",
                    time: "15–20 Minutes",
                    judging: [
                        "Relevance to the given topic",
                        "Visual creativity",
                        "Quality of image generation",
                        "How closely the output matches the brief"
                    ]
                },
                {
                    name: "Round 3 – AI-Powered Web Page Creation",
                    platform: "Lovable",
                    description:
                        "Top finalists receive a reference product image and a brief. They must create and iterate a promotional landing page using Lovable. The final webpage should be visually appealing, functional, responsive and aligned with the given product identity.",
                    time: "15–20 Minutes",
                    requirements: [
                        "Hero section",
                        "Product features",
                        "Call-to-action buttons",
                        "Responsive design",
                        "Visually appealing layout",
                        "Functional webpage",
                        "Alignment with the given product brief"
                    ]
                }
            ],

            advancement: [
                {
                    round: "Round 1",
                    participants: "All Registered Participants",
                    filter: "Score + Speed",
                    advance: "Top 40–50%"
                },
                {
                    round: "Round 2",
                    participants: "Round 1 Qualifiers",
                    filter: "Judge Panel Score",
                    advance: "Top 6–10 Participants"
                },
                {
                    round: "Round 3",
                    participants: "Round 2 Qualifiers",
                    filter: "Judge Panel Evaluation",
                    advance: "Final Winners"
                }
            ],

            rules: [
                "Participation is individual only.",
                "Participants must register before the event.",
                "Late registrations may not be accepted.",
                "The event is open to students from CSE (AI & ML) and CSBS departments.",
                "Participants may use provided lab systems or personal laptops as permitted by the organizers.",
                "Round 1 has a strict 5-minute time limit with no extensions.",
                "Round 1 outputs must match the required format exactly.",
                "Incorrect output format will receive 0 marks for that task.",
                "No copy-pasting from external sources is permitted in Round 1.",
                "All prompts must be original attempts by the participant.",
                "Internet access is allowed for ChatGPT access only during Round 1.",
                "All Round 2 participants will receive the same topic for fair comparison.",
                "Round 2 must be completed within the specified 15–20 minute time limit.",
                "Generated images must be original outputs created using Gemini.",
                "Pre-existing images cannot be submitted as Round 2 outputs.",
                "Round 3 must be completed within the specified 15–20 minute time limit.",
                "All finalists must follow the given product image and brief.",
                "The Round 3 webpage must be functional and responsive.",
                "Participants must follow academic integrity standards.",
                "Plagiarism or unfair practices will result in disqualification.",
                "Disrespectful behavior towards organizers or participants will not be tolerated.",
                "Organizers reserve the right to disqualify participants for rule violations.",
                "The judges/coordinators' decision will be final."
            ],

            judging: [
                {
                    criterion: "Prompt Engineering",
                    description:
                        "Effectiveness, precision and creativity of prompts used to communicate with AI models."
                },
                {
                    criterion: "Accuracy & Format",
                    description:
                        "Correctness of generated outputs and adherence to the exact requirements."
                },
                {
                    criterion: "Visual Creativity",
                    description:
                        "Creativity, visual quality and relevance of AI-generated images."
                },
                {
                    criterion: "Web Design",
                    description:
                        "Visual appeal, layout, structure, usability and overall design quality."
                },
                {
                    criterion: "Functionality",
                    description:
                        "Working features, interactions and practical usability of the generated webpage."
                },
                {
                    criterion: "Responsiveness",
                    description:
                        "How effectively the webpage adapts across different screen sizes and devices."
                },
                {
                    criterion: "Brief Alignment",
                    description:
                        "How accurately the final output follows the given product image and requirements."
                },
                {
                    criterion: "Overall Impact",
                    description:
                        "Effectiveness of the final AI-powered solution and overall presentation quality."
                }
            ],

            highlights: [
                "⚡ Speed Prompt Challenge",
                "🤖 ChatGPT Prompt Battle",
                "🎨 AI Image Generation",
                "✨ Google Gemini Challenge",
                "💻 AI Web Development",
                "🚀 Lovable Web Builder Finale",
                "🧠 Prompt Engineering",
                "🏆 AI Innovation Challenge"
            ],

            requirements: [
                "Minimum 20 computers/laptops",
                "Keyboard and mouse",
                "Projector / large display",
                "UPS / power backup",
                "Latest Chrome, Firefox or Edge browser",
                "ChatGPT access",
                "Google Gemini access",
                "Lovable platform access",
                "Stable high-speed internet",
                "Minimum 10 Mbps recommended connectivity",
                "Dedicated AIML Lab",
                "Wi-Fi routers",
                "Microphone and speakers",
                "Digital timer display"
            ],

            labSetup: [
                "Dedicated AIML Lab with proper seating and ventilation.",
                "Projector or large display for the Round 3 finale.",
                "Multiple high-bandwidth Wi-Fi routers to reduce network congestion.",
                "Audio system for announcements and Round 3 commentary.",
                "Digital timer visible to all participants.",
                "Minimum 20 systems, scalable according to participant count."
            ],

            prizes: [
                "🥇 1st Prize – ₹600",
                "🥈 2nd Prize – ₹400",
                "📜 All Participants – Certificate of Participation"
            ],

            coordinators: [
                {
                    name: "Raheesa",
                    year: "2nd Year – CSBS"
                },
                {
                    name: "Nadhiya",
                    year: "3rd Year – CSBS"
                },
                {
                    name: "Praveen Kumar",
                    year: "3rd Year – AI & ML"
                }
            ],

            registration: [
                "Organized by: Department of Computer Science Engineering (AI & ML) & CSBS",
                "Symposium: NEURIX '26",
                "Venue: AIML Lab"
            ],

            winner:
                "Final winners are determined based on the Round 3 evaluation by the judging panel. The final evaluation considers prompt engineering strategy, visual design, functionality, responsiveness, alignment with the brief and overall effectiveness of the AI-powered webpage.",

            tagline:
                "Prompt Smart. Create Fast. Build with AI."
        },



        {
            id: "debug-arena",
            name: "Debug Arena",

            description:
                "A premier technical debugging competition that challenges participants to identify, trace and fix syntax, logical and runtime errors in programming code under strict time constraints.",

            category: "Technical",
            mode: "Individual",
            duration: "45 Minutes",
            icon: "🐛",

            objective:
                "Debug Arena is designed to evaluate programming proficiency, debugging mastery, logical thinking, analytical reasoning, problem-solving ability, speed and accuracy. Participants must inspect erroneous code, identify programming defects and provide accurate functional fixes under competitive time constraints.",

            procedure: [
                "Participants register and report to the designated venue before the event begins.",
                "Coordinators explain the competition rules, round structure and time limits.",
                "Participants compete individually in Round 1 – Python Debugging.",
                "Participants identify and fix the errors in the given Python code within the allotted time.",
                "The submitted answers are evaluated and scores are recorded.",
                "Qualified participants based on score and time advance to Round 2.",
                "Qualified participants compete in Round 2 – Java Debugging.",
                "Participants identify and fix the errors in the given Java code within the allotted time.",
                "Round 2 submissions are evaluated and final scores are calculated.",
                "In case of a tie, the participant who completes the debugging task in the shortest time will receive priority.",
                "The final results are prepared and the winners are announced."
            ],

            rounds: [
                {
                    name: "Round 1 – Python Debugging",
                    language: "Python",
                    description:
                        "Participants are given erroneous Python code and must identify, trace and correct the errors within the allotted time.",
                    time: "10 Minutes",
                    evaluation: [
                        "Correct identification of errors",
                        "Correct debugging approach",
                        "Functional code correction",
                        "Accuracy",
                        "Completion time"
                    ]
                },

                {
                    name: "Round 2 – Java Debugging",
                    language: "Java",
                    description:
                        "Qualified participants are given erroneous Java code and must identify and correct syntax, logical or runtime errors within the allotted time.",
                    time: "10 Minutes",
                    evaluation: [
                        "Correct identification of errors",
                        "Correct debugging approach",
                        "Functional code correction",
                        "Accuracy",
                        "Completion time"
                    ]
                }
            ],

            scoring: [
                "Each correctly identified and fixed error carries 2 marks.",
                "The exact completion time of each participant is officially recorded upon submission.",
                "In case of identical marks, the participant with the shortest completion time receives priority."
            ],

            judging: [
                {
                    criterion: "Error Identification",
                    description:
                        "Ability to accurately identify syntax, logical and runtime errors in the given code."
                },
                {
                    criterion: "Error Correction",
                    description:
                        "Ability to provide the correct functional fix for each identified error."
                },
                {
                    criterion: "Programming Knowledge",
                    description:
                        "Understanding of Python and Java programming concepts and syntax."
                },
                {
                    criterion: "Logical Thinking",
                    description:
                        "Ability to trace program execution and determine the cause of errors."
                },
                {
                    criterion: "Accuracy",
                    description:
                        "Correctness and reliability of the submitted debugging solutions."
                },
                {
                    criterion: "Speed",
                    description:
                        "Ability to complete debugging tasks accurately within the given time limit."
                }
            ],

            rules: [
                "Participation is strictly individual.",
                "Participants must complete each debugging task within the allocated time.",
                "Each participant must write the corrected code or answers clearly on the provided answer sheet.",
                "Participants are not allowed to communicate with or seek assistance from others during the competition.",
                "Mobile phones are strictly prohibited.",
                "Internet access is strictly prohibited.",
                "AI tools are strictly prohibited.",
                "External resources or assistance are not permitted.",
                "Any form of malpractice or academic dishonesty will result in immediate disqualification.",
                "Participants must follow all operational instructions provided by the event coordinators.",
                "Participants must maintain proper discipline throughout the competition.",
                "The judges' and event coordinators' decision will be final and binding."
            ],

            highlights: [
                "🐛 Python Debugging",
                "☕ Java Debugging",
                "🧠 Logical Thinking Challenge",
                "⚡ Speed Debugging",
                "💻 Programming Problem Solving",
                "🎯 Error Detection & Correction",
                "🏆 Two-Round Coding Challenge"
            ],

            requirements: [
                "Printed question papers",
                "Python debugging problem statements",
                "Java debugging problem statements",
                "Evaluation sheets",
                "A4 answer sheets",
                "Writing stationery",
                "Event coordinators",
                "Evaluators / judges",
                "Timer",
                "Certificates and prizes"
            ],

            schedule: [
                "Round 1 – Python Debugging: 10 Minutes",
                "Evaluation and Selection for Round 2: 5 Minutes",
                "Round 2 – Java Debugging: 10 Minutes",
                "Evaluation and Final Result Preparation: 20 Minutes",
                "Total Duration: 45 Minutes"
            ],

            advancement: [
                {
                    round: "Round 1 – Python Debugging",
                    method: "Score + Time",
                    result: "Qualified participants advance to Round 2"
                },
                {
                    round: "Round 2 – Java Debugging",
                    method: "Final Score + Time",
                    result: "Final Ranking"
                }
            ],

            winner:
                "Participants will be ranked based on their total debugging performance. Correctly identified and fixed errors earn marks, while completion time is officially recorded. In case of identical scores, the participant who completes the debugging task in the shortest time receives priority. The highest-ranked participant will be declared the winner.",

            prizes: [
                "🥇 Winner – Certificate of Merit + Cash Prize",
                "🥈 Runner-Up – Certificate of Merit + Cash Prize",
                "🎗️ All Participants – Certificate of Participation"
            ],

            coordinators: [
                {
                    name: "Anwar Hussain",
                    role: "Student Coordinator"
                },
                {
                    name: "Havasleen",
                    role: "Student Coordinator"
                },
                {
                    name: "Sandhiya",
                    role: "Student Coordinator"
                }
            ],

            eventDetails: [
                "Symposium: NEURIX '26",
                "Event: Debug Arena",
                "Category: Technical Coding & Debugging",
                "Participation: Individual",
                "Duration: 45 Minutes",
                "Round 1: Python Debugging",
                "Round 2: Java Debugging"
            ],

            tagline:
                "Find the Bug • Fix the Code • Beat the Clock!"
        },



        {
            id: "paper-presentation",
            name: "Paper Presentation",

            description:
                "Present With Confidence • Share Knowledge • Inspire Innovation — A technical presentation event that challenges students to research, organize and present innovative ideas with clarity and confidence.",

            category: "Technical",
            mode: "Individual / Team",
            duration: "5 Minutes",
            icon: "📄",

            objective:
                "The Paper Presentation event provides students with a platform to research, organize and present technical ideas in a professional environment. It encourages technical knowledge, innovation, analytical thinking, research ability and effective communication.",

            procedure: [
                "Participants register individually or as a team of maximum 2 members.",
                "Participants report to the venue at least 15 minutes before their allotted presentation time.",
                "Coordinators verify registration, attendance and presentation order.",
                "Participants submit their PPT/PDF files as instructed by the coordinators.",
                "Round 1 participants present an open technical topic within the 5-minute total time limit, including Q&A.",
                "Qualified participants proceed to Round 2 and select one topic from the fixed-topic list.",
                "Final-round participants present their selected topic within the 5-minute total time limit.",
                "Judges evaluate the presentation and Q&A based on the judging criteria.",
                "Scores are verified and consolidated before the winners are announced."
            ],

            rounds: [
                {
                    name: "Round 1 – Open Topic",
                    description:
                        "Participants may choose a suitable technical topic related to technology, innovation, research or emerging technological developments. The topic should be technical, innovative and relevant to current technology."
                },
                {
                    name: "Round 2 – Selected Fixed Topics",
                    description:
                        "Qualified participants select and present one topic from the six fixed technical topics provided by the organizers."
                }
            ],

            fixedTopics: [
                "AI Agents and Tool-Use Architecture",
                "Zero-Trust Architecture in Enterprise Networks",
                "6G Network Architecture & Use Cases",
                "Solid-State Batteries for EVs",
                "Differential Privacy in Real-World Data Collection",
                "Deepfake Detection Techniques"
            ],

            rules: [
                "Participants can participate individually or as a team of maximum 2 members.",
                "The paper/presentation must be technical, innovative and relevant to current technology.",
                "The paper/presentation must be the participants' own work.",
                "Plagiarized content may lead to disqualification.",
                "Participants must submit their PPT before the event as instructed by the coordinators.",
                "Each team will be given a maximum of 5 minutes for presentation and Q&A combined.",
                "The 5-minute limit includes the complete Q&A session.",
                "No additional time will be provided beyond the fixed duration.",
                "The event may consist of preliminary and final rounds depending on the number of participants.",
                "Participants must maintain proper decorum and silence while other teams are presenting.",
                "Participants must report at least 15 minutes before their allotted presentation time.",
                "Misconduct, plagiarism, repeated time-limit violations or rule violations may result in disqualification.",
                "Participants must follow all instructions given by the event coordinators.",
                "The judges/coordinators' decision will be final."
            ],

            judging: [
                {
                    criterion: "Content & Research Depth",
                    description:
                        "Relevance, organization, research depth and overall quality of the technical content."
                },
                {
                    criterion: "Technical Understanding",
                    description:
                        "Conceptual clarity and the ability to explain the selected topic accurately."
                },
                {
                    criterion: "Originality & Innovation",
                    description:
                        "Novelty of ideas, creativity and practical relevance of the proposed concepts."
                },
                {
                    criterion: "Presentation Skills",
                    description:
                        "Communication, confidence, presentation structure, slide quality and audience engagement."
                },
                {
                    criterion: "Question & Answer",
                    description:
                        "Accuracy, clarity and confidence while answering judges' questions within the 5-minute total limit."
                },
                {
                    criterion: "Time Management",
                    description:
                        "Ability to effectively manage presentation and Q&A within the fixed 5-minute total duration."
                }
            ],

            highlights: [
                "📄 Technical Paper Presentation",
                "💡 Open Topic Round",
                "🎯 Fixed Topic Final Round",
                "🧠 Technical Q&A Challenge",
                "🚀 Innovation & Research",
                "⏱️ 5-Minute Presentation Challenge",
                "🏆 Cash Prize & Certificate"
            ],

            requirements: [
                "Presentation laptop",
                "Projector / display",
                "Required presentation connectivity",
                "PPT/PDF presentation files",
                "Backup copies of presentation files",
                "Registration and attendance records",
                "Judge evaluation sheets",
                "Stationery",
                "Certificates and prizes",
                "Refreshment and lunch arrangements"
            ],

            coordinators: [
                {
                    name: "Thameem Afsal Khan",
                    responsibility:
                        "Overall event flow, schedule control, judge/faculty coordination, announcements and issue resolution."
                },
                {
                    name: "Khansul Marifa",
                    responsibility:
                        "PPT/file collection, laptop-projector setup, technical checks and presentation support."
                }
            ],

            registration: [
                "Participation Fee: Rs. 150/- only",
                "Date: 12 September 2026 (Saturday)",
                "Venue: Mechanical Block, AMS",
                "Time: Forenoon",
                "Participation: Individual or team of maximum 2 members",
                "Refreshment & Lunch included",
                "Certificate and cash-prize opportunities included"
            ],

            winner:
                "Participants/teams will be evaluated based on content and research depth, technical understanding, originality and innovation, presentation skills, Q&A performance and time management. Scores will be consolidated and verified before the winners are announced. The judges' decision will be final.",

            awards: [
                "🥇 1st Prize – Cash Prize + Certificate",
                "🥈 2nd Prize – Cash Prize + Certificate",
                "🥉 3rd Prize – Certificate"
            ],

            contact: [
                "+91 7338994834",
                "+91 9659904993"
            ],

            instagram: "neurix__26",

            tagline:
                "Present With Confidence • Share Knowledge • Inspire Innovation"
        },



        {
            id: "canva-clash",
            name: "Canva Clash",

            description:
                "Imagine • Innovate • Create the Future — A creative poster design challenge where participants use Canva to visually communicate innovative ideas about the future of Artificial Intelligence.",

            category: "Non-Technical",
            mode: "Individual",
            duration: "30 Minutes",
            icon: "🎨",

            objective:
                "Canva Clash is a creative poster design challenge that invites participants to visually communicate their vision for the future of Artificial Intelligence. Participants can explore areas such as healthcare, robotics, education, sustainability, smart cities and space exploration. The event tests creativity, originality, theme relevance, visual design, innovation and clarity of communication.",

            procedure: [
                "Participants register before the event begins.",
                "The theme and detailed instructions are announced on the spot by the coordinators.",
                "Participants create their poster individually using Canva Free Version.",
                "Participants must complete and submit their poster within the 30-minute time limit.",
                "Submitted posters are evaluated by the judging panel based on the given judging criteria.",
                "The winners are selected based on the final scores given by the judges."
            ],

            rules: [
                "Participants must register before the event.",
                "The specific theme will be announced on the spot on the day of the event.",
                "The poster must relate directly to the announced theme.",
                "Participation is strictly individual.",
                "The poster must be created within the 30-minute time limit.",
                "Only Canva Free Version may be used.",
                "Canva Premium/Pro elements and paid resources are not allowed.",
                "Free Canva features and free templates are allowed.",
                "Participants may research and draw inspiration from any source.",
                "The final poster must be an original creation by the participant.",
                "Copying an existing poster or another participant's work is strictly prohibited.",
                "Submitting unmodified copied content will result in disqualification.",
                "Organizers and judges may verify the originality of submissions.",
                "No extra time will be provided after the official 30-minute duration.",
                "The organizers/judges' decision will be final."
            ],

            judging: [
                {
                    criterion: "Creativity & Originality",
                    description:
                        "Originality of the concept, creative thinking and uniqueness of the poster."
                },
                {
                    criterion: "Relevance to Theme",
                    description:
                        "How effectively the poster communicates and represents the announced theme."
                },
                {
                    criterion: "Visual Design & Presentation",
                    description:
                        "Layout, typography, visual balance, colour usage, graphics and overall presentation."
                },
                {
                    criterion: "Innovation & Concept",
                    description:
                        "Innovative thinking, futuristic ideas and creative interpretation of Artificial Intelligence."
                },
                {
                    criterion: "Clarity of Message",
                    description:
                        "How clearly and effectively the poster communicates its intended message."
                }
            ],

            scoring: [
                "Creativity & Originality – 5 Marks",
                "Relevance to Theme – 4 Marks",
                "Visual Design & Presentation – 4 Marks",
                "Innovation & Concept – 4 Marks",
                "Clarity of Message – 3 Marks",
                "Total – 20 Marks"
            ],

            highlights: [
                "🎨 Creative Poster Design",
                "🤖 Future of Artificial Intelligence",
                "💡 On-the-Spot Theme",
                "⚡ 30-Minute Design Challenge",
                "✨ Canva Free Version",
                "🚀 Innovation & Creativity",
                "🏆 Poster Design Competition"
            ],

            requirements: [
                "Computer or laptop",
                "Canva Free Version",
                "Stable internet connection",
                "CSBS or AIML Lab",
                "Lab Smart Board",
                "Required login/access for Canva",
                "Judge evaluation sheets",
                "Certificates and prizes"
            ],

            format: [
                "Design Tool: Canva – Free Version Only",
                "Premium/Pro elements are prohibited.",
                "Free Canva features and templates are allowed.",
                "Poster should have a clear layout.",
                "Poster should have a strong connection with the announced theme.",
                "Creative and relevant visuals should be used.",
                "The final message should be easy to read and understand."
            ],

            winner:
                "Participants will be evaluated out of 20 marks based on creativity and originality, theme relevance, visual design and presentation, innovation and concept, and clarity of message. The participant with the highest final score will be declared the winner. The judges' decision will be final.",

            prizes: [
                "🥇 1st Prize – ₹500",
                "🥈 2nd Prize – ₹300",
                "🥉 3rd Prize – ₹200",
                "💰 Total Prize Pool – ₹1,000"
            ],

            coordinators: [
                {
                    name: "Abdul Azeem K",
                    contact: "6384624289"
                },
                {
                    name: "P. Linga Raja",
                    contact: "7305076478"
                },
                {
                    name: "Jana Ranjana J",
                    contact: "7397114171"
                }
            ],

            eventDetails: [
                "Symposium: NEURIX '26",
                "Event Date: 12 September 2026",
                "Venue: Mechanical Block – 3rd Floor",
                "Participation: Individual",
                "Duration: 30 Minutes",
                "Platform: Canva – Free Version Only",
                "Department: AI & ML | CSBS"
            ],

            keyMessage:
                "AI is not replacing the future — it is helping us create it.",

            tagline:
                "Canva Clash — Where Ideas Become the Future. Imagine the Future. Design the Innovation."
        },

        {
            id: "web-craft",
            name: "Web Craft",

            description:
                "Create • Enhance • Code • Explain — An AI-assisted website creation challenge that tests participants' ability to understand requirements, use AI tools effectively, build and enhance websites, implement AI-generated code, test functionality and explain their work under strict time limits.",

            category: "Technical",
            mode: "Team",
            duration: "1 Hour",
            icon: "💻",

            objective:
                "WEB CRAFT is designed to test creativity and practical website-building skills under time constraints. Participants must effectively use approved AI tools through clear prompts, enhance existing websites with useful features, implement AI-generated HTML, CSS and JavaScript using VS Code, and demonstrate UI/UX, functionality, problem-solving and code understanding.",

            procedure: [
                "Teams register and report to the AIML Lab for attendance and briefing.",
                "Coordinators explain the competition structure, rules, approved AI tools and time limits.",
                "Teams participate in Round 1 – CREATE and build a website based on a problem statement provided during the event.",
                "Teams submit their Round 1 website for evaluation.",
                "Teams continue with the same website in Round 2 – ENHANCE and implement the specified new features.",
                "Teams submit the enhanced website for evaluation.",
                "Teams receive a completely different problem statement for Round 3 – NEW WEBSITE.",
                "Teams build the new website from scratch in VS Code using AI-generated HTML, CSS and JavaScript.",
                "Teams test, modify and fix their website within the allotted time.",
                "Teams submit the final VS Code project for code and functionality verification.",
                "Overall scores from all three rounds are combined according to the assigned weightage.",
                "The highest-scoring teams are declared the winners."
            ],

            rounds: [
                {
                    name: "Round 1 – CREATE",
                    description:
                        "Teams receive a problem statement and create a basic website addressing the given requirements using an approved AI website-generation tool.",
                    time: "15 Minutes",
                    evaluation: [
                        "Requirement completion",
                        "UI/UX",
                        "Visual appearance",
                        "Creativity",
                        "AI prompting and usage",
                        "Basic functionality",
                        "Overall presentation"
                    ],
                    weight: "25%"
                },

                {
                    name: "Round 2 – ENHANCE",
                    description:
                        "Teams continue working on their Round 1 website and add new features specified by the organizers. The design and concept should remain consistent while improving functionality.",
                    time: "10 Minutes",
                    evaluation: [
                        "Feature implementation",
                        "Functionality",
                        "Design consistency",
                        "Effective AI usage",
                        "Speed and accuracy",
                        "Overall improvement"
                    ],
                    weight: "25%"
                },

                {
                    name: "Round 3 – NEW WEBSITE",
                    description:
                        "Teams receive a completely different website problem statement and build a new website from scratch using VS Code. AI-generated HTML, CSS and JavaScript must be implemented, tested and modified as required.",
                    time: "25 Minutes",
                    evaluation: [
                        "Requirement completion",
                        "UI/UX",
                        "Functionality",
                        "Creativity",
                        "AI usage",
                        "Code implementation",
                        "Problem-solving",
                        "Code understanding and explanation"
                    ],
                    weight: "50%"
                }
            ],

            rules: [
                "Participation is in teams of maximum 2 members.",
                "Participation is open with no fixed team or participant limit unless specified by the organizers.",
                "Participants must register before the event.",
                "All work must be produced during the allotted competition time.",
                "Pre-built websites, templates or previously prepared project files are not permitted unless explicitly allowed.",
                "Copying another team's work or deliberate plagiarism will result in disqualification.",
                "Teams must save and submit their work according to organizer instructions.",
                "The timer is strict and no additional time will normally be provided.",
                "Participants must follow the given problem statement and task requirements.",
                "AI assistance is permitted throughout the competition using approved AI tools.",
                "Organizers will specify the approved AI tool or tools before the event.",
                "Personal paid/Pro AI tools or unapproved AI tools are not permitted.",
                "Participants may use Google or other general web resources subject to organizer rules.",
                "Participants are responsible for implementing, testing and correcting AI-generated code.",
                "Round 3 must be implemented through VS Code.",
                "Simply generating a website using an AI website builder does not satisfy the Round 3 requirements.",
                "Offensive, illegal or inappropriate content is prohibited.",
                "Participants must follow all lab, network, device and organizer instructions.",
                "The judges' decision on scoring and final ranking will be final."
            ],

            judging: [
                {
                    criterion: "Requirements",
                    description:
                        "How completely and accurately the team satisfies the given problem statement and feature requirements."
                },
                {
                    criterion: "UI/UX",
                    description:
                        "Visual design, usability, layout, navigation and overall user experience."
                },
                {
                    criterion: "Functionality",
                    description:
                        "Whether the implemented features work correctly and provide practical functionality."
                },
                {
                    criterion: "Creativity",
                    description:
                        "Originality, creative thinking and quality of the website concept."
                },
                {
                    criterion: "AI Usage",
                    description:
                        "Effectiveness of prompting and responsible use of approved AI tools."
                },
                {
                    criterion: "Implementation",
                    description:
                        "Quality of HTML, CSS and JavaScript implementation, especially in Round 3."
                },
                {
                    criterion: "Problem Solving",
                    description:
                        "Ability to identify, debug and resolve issues within the available time."
                },
                {
                    criterion: "Code Understanding",
                    description:
                        "Ability to explain important parts of the implementation and demonstrate understanding of the generated code."
                },
                {
                    criterion: "Design Consistency",
                    description:
                        "Ability to maintain the existing design and user experience while adding new features in Round 2."
                }
            ],

            scoring: [
                "Round 1 – CREATE: 25%",
                "Round 2 – ENHANCE: 25%",
                "Round 3 – NEW WEBSITE: 50%",
                "Overall Score: 100%"
            ],

            highlights: [
                "💻 AI-Assisted Website Creation",
                "✨ CREATE Challenge",
                "🚀 ENHANCE Challenge",
                "⌨️ VS Code Implementation",
                "🤖 AI-Generated HTML/CSS/JS",
                "🧠 Prompt Engineering",
                "🐛 Problem Solving & Debugging",
                "🎯 Code Explanation",
                "🏆 3-Round Web Development Challenge"
            ],

            requirements: [
                "College lab systems",
                "VS Code installed and tested",
                "Modern web browser",
                "Stable internet connection",
                "Access to approved AI tools",
                "Keyboard and mouse",
                "Projector / display",
                "Digital or visible timer",
                "Power backup where available",
                "Score sheets or digital scoring system",
                "Certificates and prizes"
            ],

            labSetup: [
                "AIML Lab with properly configured systems.",
                "VS Code installed and tested on participating systems.",
                "Modern web browsers available.",
                "Stable internet connection for all teams.",
                "Approved AI tools accessible to all teams under the same rules.",
                "Projector/display for briefing and announcements.",
                "Digital timer visible to participants.",
                "Power backup where available."
            ],

            submission: [
                "Organizers will announce the exact submission method before each round.",
                "Teams must save their work in the assigned system or location.",
                "Teams must use the instructed team identifier.",
                "At time expiry, teams must stop working immediately unless an organizer announces otherwise.",
                "For Round 3, the submitted VS Code project must contain the implemented website files.",
                "The final submission will be the version available at the official submission time."
            ],

            advancement: [
                {
                    round: "Round 1 – CREATE",
                    method: "Overall Scoring",
                    result: "Continues to Round 2"
                },
                {
                    round: "Round 2 – ENHANCE",
                    method: "Overall Scoring",
                    result: "Continues to Round 3"
                },
                {
                    round: "Round 3 – NEW WEBSITE",
                    method: "Final Evaluation",
                    result: "Final Ranking"
                }
            ],

            winner:
                "The final ranking is based on the combined weighted score of all three rounds. Round 1 contributes 25%, Round 2 contributes 25% and Round 3 contributes 50%. The team with the highest overall score will receive the 1st Prize, while the second-highest scoring team will receive the 2nd Prize.",

            tieBreaker: [
                "Round 3 score will be considered first.",
                "If still tied, functionality and requirement-completion scores will be compared.",
                "If required, judges may use code explanation and problem-solving performance as the final tie-breaker."
            ],

            prizes: [
                "🥇 1st Prize – ₹600 + Certificate",
                "🥈 2nd Prize – ₹400 + Certificate"
            ],

            coordinators: [],

            eventDetails: [
                "Symposium: NEURIX '26",
                "Event Date: 12 September 2026",
                "Venue: AIML Lab",
                "Duration: 1 Hour",
                "Team Size: 2 Members per Team",
                "Participation: Open Participation",
                "Department: Computer Science & Business Systems and Artificial Intelligence & Machine Learning"
            ],

            tagline:
                "Create • Enhance • Code • Explain!"
        },

    ],


    nontechnical: [

        {
            id: "frames-of-ams",
            name: "Frames of AMS",

            description:
                "Capture Today • Inspire Tomorrow — A creative photography challenge that tests observation, composition, originality and storytelling through a single powerful frame.",

            category: "Non-Technical",
            mode: "Individual",
            duration: "3 Hours",
            icon: "📸",

            objective:
                "Frames of AMS provides students with a platform to express creativity, observe their surroundings closely and capture meaningful moments through photography. The event encourages participants to develop a unique visual perspective and communicate ideas through a powerful photograph.",

            procedure: [
                "Participants register before the event and report at the designated venue.",
                "Coordinators explain the event rules, themes and permitted photography areas.",
                "Participants explore the college campus and capture original photographs based on the given themes.",
                "Participants select their best photograph(s) according to the submission guidelines.",
                "Entries are submitted through the Google Form link shared on the event day.",
                "Submitted photographs are evaluated by the judging panel based on the judging criteria."
            ],

            themes: [
                {
                    name: "Nature & Wildlife",
                    description:
                        "Capture the beauty of nature, plants, animals and living surroundings in a creative way."
                },
                {
                    name: "Architecture & Urban Life",
                    description:
                        "Explore buildings, structures, streets, geometry, patterns, spaces and campus life."
                },
                {
                    name: "Culture & Heritage",
                    description:
                        "Capture traditions, festivals, heritage elements and the cultural essence around you."
                },
                {
                    name: "Creative / Open Theme",
                    description:
                        "Present an original visual idea or creative interpretation beyond the listed themes."
                }
            ],

            rules: [
                "Participants must register before the event.",
                "All photographs must be original and clicked by the participant.",
                "Photographs must be taken on the event date.",
                "Photographs must be captured within the permitted college campus areas.",
                "Participants must carry their own camera or mobile phone.",
                "Basic editing such as colour correction, exposure adjustment and cropping is allowed.",
                "Heavy photo manipulation is not permitted.",
                "AI-generated images are strictly not allowed.",
                "Stock images or photographs taken from external sources are not permitted.",
                "Submitted photographs must not contain any watermark or signature.",
                "Each participant can submit a maximum of 3 photographs.",
                "Photographs must be submitted in JPEG format.",
                "Any photograph violating the rules will be disqualified.",
                "The judges/coordinators' decision will be final.",
                "Organizers reserve the right to use submitted photographs for college promotional purposes."
            ],

            judging: [
                {
                    criterion: "Creativity",
                    description:
                        "Originality of the idea and creative interpretation of the subject."
                },
                {
                    criterion: "Composition",
                    description:
                        "Framing, balance, perspective and overall visual arrangement."
                },
                {
                    criterion: "Technical Quality",
                    description:
                        "Focus, exposure, clarity and overall image quality."
                },
                {
                    criterion: "Theme Relevance",
                    description:
                        "How effectively the photograph follows the selected theme."
                },
                {
                    criterion: "Overall Impact",
                    description:
                        "Emotional, visual or storytelling impact of the photograph."
                }
            ],

            submission: [
                "Participants can submit a maximum of 3 photographs.",
                "Photographs must be submitted in JPEG format.",
                "Entries must be submitted through the Google Form link shared on the event day.",
                "Submission deadline: Before 2:30 PM on the event day."
            ],

            highlights: [
                "📸 Creative Photography Challenge",
                "🌿 Nature & Wildlife",
                "🏛️ Architecture & Urban Life",
                "🎭 Culture & Heritage",
                "✨ Creative / Open Theme",
                "🏆 Expert Judging",
                "📱 Mobile & Camera Photography"
            ],

            requirements: [
                "Camera or mobile phone",
                "Google Form submission link",
                "Permitted college campus photography areas",
                "Event coordination team",
                "Judging panel",
                "Certificates and prizes"
            ],

            winner:
                "Participants will be evaluated based on creativity, composition, technical quality, theme relevance and overall impact. The participant with the highest overall evaluation will be declared the winner. The judges' decision will be final.",

            awards: [
                "🥇 1st Prize – Cash Prize + Certificate",
                "🥈 2nd Prize – Cash Prize + Certificate",
                "🥉 3rd Prize – Certificate"
            ],

            tagline:
                "Capture the moment. Create the story. Inspire through your lens!"
        },

        {
            id: "ultimate-xi",
            name: "ULTIMATE XI",
            description:
                "(E-Football) Build your ultimate squad, master your tactics and battle your way to victory.",
            category: "eSports",
            mode: "Individual",
            duration: "Tournament",
            icon: "⚽"
        },

        {
            id: "final-stand",
            name: "FINAL STAND",
            description:
                "(Free Fire) Survive the battlefield, outplay your opponents and become the last squad standing.",
            category: "eSports",
            mode: "Team",
            duration: "Tournament",
            icon: "🔥"
        },

        {
            id: "chase-the-clue",
            name: "Chase the Clue",
            description:
                "Follow the clues, solve the puzzles and race against time to discover the hidden treasure.",
            category: "Non-Technical",
            mode: "Team",
            duration: "30–60 Minutes",
            icon: "🗺️",
            objective: `
                Chase the Clue is an engaging, fast-paced event designed to test
                participants' logical reasoning, problem-solving abilities, speed,
                and teamwork. Through a progressive series of riddles, puzzles,
                and interactive clues, teams must demonstrate lateral thinking
                and tactical speed to navigate through challenges and achieve victory.
            `,

                procedure: [
                    ` Warm-Up Q&A Challenge
                   Before Round 1 officially commences, all registered teams will
                    undergo a preliminary puzzle-solving warm-up session. Teams will
                    be given a set of 7 riddle-based questions. Answers must be written
                    on the designated answer sheet. Points earned in this pre-round
                    directly add to the team's cumulative overall tally.`,

                    `Round 1: Core Puzzle Solving
                    Participating teams engage in a timed lateral-thinking and
                    puzzle-solving round. Teams must solve complex analytical puzzles
                    accurately within the allotted timeframe. Top-scoring teams based
                    on speed and accuracy will qualify for the final round.`,

                    `Round 2: Clue Navigation & Bottle Hunt
                    An active physical clue-hunting stage. Finalist teams receive
                    structured hints and clues leading them sequentially across
                    designated campus locations. The main goal is to decode all clues
                    in sequence to locate the target hidden bottle. The first team to
                    successfully recover the bottle wins.`
                ], 

                rules: [
                    "Teams may consist of 1 to 3 members maximum.",
                    "All rounds operate under strict time limits enforced by event coordinators.",
                    "Mobile phones or external reference materials are strictly prohibited during puzzle rounds unless explicitly permitted.",
                    "For Round 2, participants must strictly remain within designated campus event zones.",
                    "Misconduct, tampering with hidden clues, or violating campus rules will lead to immediate disqualification.",
                    "Decisions made by the event coordinators and faculty judges are final and binding."
                ]
        },



        {
            id: "bgm-blitz",
            name: "BGM Blitz",

            description:
                "Test your musical memory and identify iconic background music faster than everyone else.",

            category: "Non-Technical",
            mode: "Team",
            duration: "20–30 Minutes",
            icon: "🎵",

            objective:
                "BGM Blitz is an exciting musical quiz where participants listen to short background music clips and identify the song or movie they belong to. The event tests musical knowledge, memory, concentration, listening skills and quick response.",

            procedure: [
                "A short BGM clip is played.",
                "Participants carefully listen and identify the song or movie.",
                "Participants press the buzzer as soon as they know the answer.",
                "The first participant/team to press the buzzer gets the opportunity to answer.",
                "Correct answers earn points according to the round."
            ],

            rounds: [
                {
                    name: "Round 1 – Easy BGM",
                    description:
                        "Popular and familiar background music clips are played. Participants identify the song or movie."
                },
                {
                    name: "Round 2 – Toughest / Reverse BGM",
                    description:
                        "The final challenge features difficult, very short or reversed BGM clips. Fast thinking and sharp listening are required."
                }
            ],

            rules: [
                "Participants must register before the event.",
                "Mobile phones and external assistance are not permitted.",
                "Only the first participant/team to press the buzzer gets the first opportunity.",
                "Participants must wait for the coordinator/judge to allow them to answer.",
                "Correct answers earn points according to the round.",
                "If the first team gives a wrong answer, the chance may be passed to the next team.",
                "In case of a tie, an additional tie-breaker BGM will be played.",
                "Any unfair means may lead to disqualification.",
                "The judges/coordinators' decision will be final."
            ],

            scoring: [
                "Round 1 – Easy BGM: +10 for correct answer, 0 for wrong answer.",
                "Round 2 – Toughest / Reverse BGM: +20 for correct answer, -5 for wrong answer."
            ],

            highlights: [
                "🎵 Easy BGM Challenge",
                "🔄 Reverse BGM Challenge",
                "🧠 Toughest BGM Challenge",
                "⚡ Speed Buzzer",
                "🏆 Tie-Breaker BGM"
            ],

            requirements: [
                "Buzzer system",
                "Speakers and microphone",
                "Laptop",
                "Projector/screen",
                "Prepared BGM playlist",
                "Timer",
                "Score sheet",
                "Prizes and certificates"
            ],

            winner:
                "Participants/teams will be ranked according to their total score across the two rounds. The highest-scoring participant/team will be declared the winner. In case of a tie, a tie-breaker BGM will decide the result.",

            tagline:
                "Your ears hear it. Your brain remembers it. Your hand hits the buzzer!"
        },



        {
            id: "think-link",
            name: "Think & link",

            description:
                "A visual picture-connection challenge where teams analyze four sequential image clues, discover the hidden connection and identify the target movie name before time runs out.",

            category: "Non-Technical",
            mode: "Team",
            duration: "30 Minutes",
            icon: "🧩",

            objective:
                "Think & Connect is an exciting picture-based connection game designed to test participants' observation, logical thinking, visual interpretation, movie knowledge, teamwork and quick decision-making. Teams must connect four distinct visual clues to identify the movie represented by them.",

            procedure: [
                "Teams register before the event and report to the designated venue.",
                "Each team consists of exactly 2 members.",
                "The coordinators explain the rules and gameplay format before the competition begins.",
                "A set of 4 distinct visual images is displayed sequentially on the screen.",
                "Teams carefully observe each image and identify the hidden clues or common connection.",
                "The images are revealed one by one to help teams build the connection.",
                "Teams discuss the clues and try to identify the target movie name.",
                "The team that provides the fastest and correct movie name gains the advantage.",
                "Results are determined based on speed and accuracy."
            ],

            rounds: [
                {
                    name: "Round – Picture Connection",
                    description:
                        "Teams are shown four different visual images one by one. Each image contains a clue connected to the target movie. Teams must analyze the clues, find the common connection and guess the movie name before the time runs out.",
                    time: "As decided by the coordinators",
                    scoring:
                        "Teams are evaluated primarily on the accuracy and speed of identifying the correct movie."
                }
            ],

            rules: [
                "Participation is strictly in teams of 2 members.",
                "Participants must register before the event.",
                "Four visual clues will be displayed sequentially.",
                "Teams must identify the common connection between the given images.",
                "The target movie name must be identified based on the visual clues.",
                "Mobile phones are strictly prohibited during the gameplay.",
                "Smartwatches and other electronic assistance are not permitted.",
                "External help or assistance from outside the team is strictly prohibited.",
                "Teams must rely only on their observation, knowledge, logical thinking and teamwork.",
                "Speed and accuracy are important for determining the winners.",
                "Any unfair practice may lead to disqualification.",
                "The organizers' and judges' decision will be final."
            ],

            judging: [
                {
                    criterion: "Accuracy",
                    description:
                        "Ability to correctly identify the target movie from the given visual clues."
                },
                {
                    criterion: "Speed",
                    description:
                        "How quickly the team identifies and submits the correct movie name."
                },
                {
                    criterion: "Visual Interpretation",
                    description:
                        "Ability to understand and interpret the meaning of the displayed images."
                },
                {
                    criterion: "Logical Connection",
                    description:
                        "Ability to discover the common link between all four visual clues."
                },
                {
                    criterion: "Teamwork",
                    description:
                        "Effective communication and collaboration between the two team members."
                }
            ],

            highlights: [
                "🧩 Picture Connection Challenge",
                "🎬 Guess the Movie",
                "👀 Visual Clue Analysis",
                "🧠 Logical Thinking",
                "⚡ Speed & Accuracy",
                "🤝 Teamwork Challenge",
                "🏆 Movie Connection Battle"
            ],

            requirements: [
                "Projector / large display",
                "Laptop or presentation system",
                "Prepared visual clue images",
                "Speakers if required",
                "Timer",
                "Score sheet",
                "Event coordination team",
                "Certificates and prizes"
            ],

            gameplay: [
                "Four distinct images are prepared for each movie.",
                "Images are displayed one by one on the screen.",
                "Teams observe and discuss the clues.",
                "Teams identify the common connection between the images.",
                "Teams submit or announce their movie answer according to the coordinator's instructions.",
                "The fastest accurate team receives the highest advantage."
            ],

            winner:
                "Teams will be ranked based on their ability to identify the correct movie accurately and quickly. The team demonstrating the best combination of speed, accuracy, logical connection and teamwork will be declared the winner. In case of a tie, the coordinators may conduct an additional picture-connection challenge.",

            prizes: [
                "🥇 1st Prize – ₹600 + Merit Certificate",
                "🥈 2nd Prize – ₹400 + Merit Certificate",
                "🎗️ All Participants – Participation Certificate"
            ],

            coordinators: [
                {
                    name: "S. Mohamed Harris",
                    contact: "6383154884"
                },
                {
                    name: "G. Mohamed Sajith",
                    contact: "6380539683"
                },
                {
                    name: "S. Archana",
                    contact: "8778904722"
                }
            ],

            eventDetails: [
                "Event: Think & Connect",
                "Format: Visual Picture-Connection Challenge",
                "Participation: Team of 2 Members",
                "Challenge: Guess the Movie Name",
                "Gameplay: Four Sequential Visual Clues"
            ],

            tagline:
                "Think Fast • Connect the Clues • Guess the Movie!"
        },

        
        {
            id: "corporate-walk",
            name: "Corporate Walk",

            description:
                "A team-based professional walk challenge that tests confidence, stage presence, communication, teamwork, creativity, professional appearance and corporate presentation skills.",

            category: "Non-Technical",
            mode: "Team",
            duration: "5–10 Minutes per Team",
            icon: "💼",

            objective:
                "Corporate Walk is designed to provide students with a platform to showcase their confidence, professional personality, communication skills, teamwork, creativity and stage presence. Teams must present a corporate-themed walk while maintaining proper coordination, posture, professional appearance and overall stage presence.",

            procedure: [
                "Teams must contact the event coordinator and register before the event.",
                "Each team must consist of 6–8 members.",
                "Registered teams report to the auditorium before their allotted performance time.",
                "Coordinators explain the event rules, performance guidelines and safety instructions.",
                "Each team performs a corporate/professional-themed walk on the designated stage or walking area.",
                "Teams maintain proper posture, confidence, coordination and professional appearance throughout the performance.",
                "Teams may use suitable music, props, formations and creative elements subject to organizer approval.",
                "The judging panel evaluates each team based on the prescribed judging criteria.",
                "Scores are consolidated after all teams complete their performances.",
                "The highest-scoring team is declared the winner."
            ],

            performance: [
                {
                    name: "Corporate / Professional Walk",
                    description:
                        "Teams of 6–8 members showcase their professional personality through a coordinated corporate-themed walk.",
                    time: "5–10 Minutes per Team",
                    evaluation: [
                        "Confidence and stage presence",
                        "Professional appearance",
                        "Walking style and posture",
                        "Team coordination",
                        "Creativity",
                        "Communication skills",
                        "Theme presentation",
                        "Overall performance"
                    ]
                }
            ],

            rules: [
                "Each team must consist of 6–8 members.",
                "Teams must contact the coordinator before registration and complete registration as instructed.",
                "The team entry fee is ₹500.",
                "Food will not be provided as part of the event.",
                "Participants must register before the event.",
                "Participants must report to the venue before their allotted performance time.",
                "Teams must maintain discipline and proper decorum throughout the event.",
                "Participants must follow all instructions given by the event coordinators.",
                "The performance must follow a corporate or professional theme.",
                "Costumes and props must be appropriate for a college event.",
                "Offensive, inappropriate or disrespectful content is strictly prohibited.",
                "Props and other materials must be safe and approved by the organizers.",
                "Teams must maintain proper coordination throughout the performance.",
                "Music, if used, must be submitted to the event coordinators beforehand.",
                "Participants must not intentionally obstruct or disturb other teams.",
                "Any form of unfair practice may lead to disqualification.",
                "Organizers reserve the right to disqualify teams for violation of event rules.",
                "Participants are responsible for maintaining the cleanliness and safety of the venue.",
                "The judges' decision will be final and binding."
            ],

            judging: [
                {
                    criterion: "Confidence & Stage Presence",
                    description:
                        "Confidence, body language, stage control and ability to engage the audience."
                },
                {
                    criterion: "Professional Appearance",
                    description:
                        "Overall professional presentation, grooming, costume selection and corporate appearance."
                },
                {
                    criterion: "Walking Style & Posture",
                    description:
                        "Walking technique, posture, body balance and presentation style."
                },
                {
                    criterion: "Team Coordination",
                    description:
                        "Synchronization, formations, coordination and teamwork among all members."
                },
                {
                    criterion: "Creativity",
                    description:
                        "Originality of presentation, formations, props, music and creative elements."
                },
                {
                    criterion: "Communication Skills",
                    description:
                        "Effective non-verbal communication, expressions and professional presentation."
                },
                {
                    criterion: "Theme Presentation",
                    description:
                        "How effectively the team communicates and maintains the corporate/professional theme."
                },
                {
                    criterion: "Overall Performance",
                    description:
                        "Overall impact, stage execution and quality of the complete performance."
                }
            ],

            highlights: [
                "💼 Corporate-Themed Walk",
                "👔 Professional Presentation",
                "🔥 Stage Presence Challenge",
                "🤝 Team Coordination",
                "✨ Creative Formations",
                "🎵 Music & Performance",
                "🎯 Professional Personality",
                "🏆 Corporate Walk Challenge"
            ],

            requirements: [
                "Auditorium",
                "Stage / walking area",
                "Seating arrangement",
                "Large screen",
                "Laptop for music",
                "Speakers / sound system",
                "Power supply",
                "Timer / clock",
                "Waiting / preparation area",
                "Judge evaluation sheets",
                "Certificates and prizes"
            ],

            venueSetup: [
                "Auditorium with sufficient walking and performance space.",
                "Dedicated stage or walking area for team performances.",
                "Seating arrangement for judges, participants and audience.",
                "Large screen for event announcements if required.",
                "Laptop and sound system for approved performance music.",
                "Waiting and preparation area for participating teams.",
                "Timer or visible clock for performance time management.",
                "Adequate power supply and safe venue arrangements."
            ],

            prizes: [
                "🥇 1st Prize – ₹2000",
                "🥈 2nd Prize – ₹1000",
                "🎗️ All Eligible Participants – Certificate of Participation"
            ],

            coordinators: [
                {
                    name: "Abdul Razzaq",
                    contact: "9884557944"
                },
                {
                    name: "Mohammed Aafrin Salam",
                    contact: "6380808794"
                }
            ],

            eventDetails: [
                "Symposium: NEURIX '26",
                "Event: Corporate Walk",
                "Category: Non-Technical",
                "Participation: Team",
                "Team Size: 6–8 Members",
                "Venue: Auditorium",
                "Duration: 5–10 Minutes per Team",
                "Entry Fee: ₹500 per Team",
                "Food: Not Provided",
                "Department: Computer Science Engineering (AI & ML) and CS&BS"
            ],

            winner:
                "Teams will be evaluated by the judging panel based on confidence, professional appearance, walking style, posture, coordination, creativity, communication, theme presentation and overall performance. The team receiving the highest overall evaluation will be declared the winner, while the second-highest scoring team will receive the runner-up position.",

            tagline:
                "Walk Professional • Lead with Confidence • Own the Stage!"
        },

    ]

};


/* =========================================================
   03. EVENT PAIRS
   ========================================================= */

const EVENT_PAIRS = {

    /* Prompt Battle ↔ Chase the Clue */
    "prompt-clash": "chase-the-clue",
    "chase-the-clue": "prompt-clash",

    /* Debug Arena ↔ BGM Blitz */
    "debug-arena": "bgm-blitz",
    "bgm-blitz": "debug-arena",

    /* Paper Presentation ↔ Think & Connect */
    "paper-presentation": "think-link",
    "think-link": "paper-presentation",

    /* Canva Clash ↔ Web Craft */
    "canva-clash": "web-craft",
    "web-craft": "canva-clash",

    /* Ultimate XI ↔ Final Stand */
    "ultimate-xi": "final-stand",
    "final-stand": "ultimate-xi",

    /* Frames of AMS ↔ Corporate Walk */
    "frames-of-ams": "corporate-walk",
    "corporate-walk": "frames-of-ams"

};

/* =========================================================
   04. STATE
   ========================================================= */

let selectedEvents = [];


/* =========================================================
   05. GET ALL EVENTS
   ========================================================= */

function getAllEvents() {

    return [
        ...EVENTS.technical,
        ...EVENTS.nontechnical
    ];

}


/* =========================================================
   06. GET EVENT
   ========================================================= */

function getEventById(id) {

    return getAllEvents().find(
        event => event.id === id
    );

}


/* =========================================================
   07. NORMALIZE EVENT NAME
   ========================================================= */

function normalizeEventName(name) {

    if (!name) {
        return "";
    }

    const cleanName =
        String(name)
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();

    const event =
        getAllEvents().find(item =>
            item.name
                .trim()
                .replace(/\s+/g, " ")
                .toLowerCase() === cleanName
        );

    return event
        ? event.name.trim()
        : String(name).trim();

}


/* =========================================================
   08. ESCAPE HTML
   ========================================================= */

function escapeHTML(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


/* =========================================================
   09. ESCAPE ATTRIBUTE
   ========================================================= */

function escapeAttribute(value) {

    return escapeHTML(value);

}


/* =========================================================
   10. DOM READY
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        console.log(
            "NEURIX'26 → Initializing..."
        );

        initializeLoader();

        initializeNavigation();

        generateEventCards();

        initializeSelection();

        initializeEventModal();

        initializeForm();

        initializeScroll();

        initializeParticles();

        initializeScrollAnimations(); // ← ADDED

        updateEventUI();

        console.log(
            "NEURIX'26 → Ready"
        );

    }
);


/* =========================================================
   11. LOADER
   ========================================================= */

function initializeLoader() {

    const loader =
        document.querySelector(".loader");

    if (!loader) {
        return;
    }

    function hideLoader() {

        loader.classList.add("hidden");

        document.body.classList.add(
            "page-loaded"
        );

    }

    window.addEventListener(
        "load",
        function () {

            setTimeout(
                hideLoader,
                500
            );

        },
        {
            once: true
        }
    );

    setTimeout(
        hideLoader,
        3000
    );

}


/* =========================================================
   12. NAVIGATION
   ========================================================= */

function initializeNavigation() {

    const toggle =
        document.querySelector(".nav-toggle");

    const menu =
        document.querySelector(".nav-menu");

    const navbar =
        document.querySelector(".navbar");


    if (toggle && menu) {

        toggle.addEventListener(
            "click",
            function () {

                toggle.classList.toggle(
                    "active"
                );

                menu.classList.toggle(
                    "active"
                );

            }
        );


        menu
            .querySelectorAll(".nav-link")
            .forEach(function (link) {

                link.addEventListener(
                    "click",
                    function () {

                        toggle.classList.remove(
                            "active"
                        );

                        menu.classList.remove(
                            "active"
                        );

                    }
                );

            });

    }


    window.addEventListener(
        "scroll",
        function () {

            if (!navbar) {
                return;
            }

            navbar.classList.toggle(
                "scrolled",
                window.scrollY > 40
            );

        },
        {
            passive: true
        }
    );

}


/* =========================================================
   13. GENERATE EVENT CARDS
   ========================================================= */

function generateEventCards() {

    const technicalContainer =
        document.querySelector(
            "#technicalEvents"
        );

    const nonTechnicalContainer =
        document.querySelector(
            "#nonTechnicalEvents"
        );


    if (technicalContainer) {

        technicalContainer.innerHTML =
            EVENTS.technical
                .map(createEventCard)
                .join("");

    }


    if (nonTechnicalContainer) {

        nonTechnicalContainer.innerHTML =
            EVENTS.nontechnical
                .map(createEventCard)
                .join("");

    }

}


/* =========================================================
   14. CREATE EVENT CARD
   ========================================================= */

function createEventCard(event) {

    return `

        <article
            class="event-card"
            data-event="${escapeAttribute(event.id)}"
        >

            <div class="event-card-glow"></div>

            <div class="event-card-top">

                <div class="event-icon">
                    ${event.icon}
                </div>

                <div class="event-status">

                    <span class="status-dot"></span>

                    Available

                </div>

            </div>


            <div class="event-card-content">

                <span class="event-category">
                    ${escapeHTML(event.category)}
                </span>

                <h3 class="event-title">
                    ${escapeHTML(event.name)}
                </h3>

                <p class="event-description">
                    ${escapeHTML(event.description)}
                </p>


                <div class="event-meta">

                    <span>
                        👤 ${escapeHTML(event.mode)}
                    </span>

                    <span>
                        ⏱ ${escapeHTML(event.duration)}
                    </span>

                </div>

            </div>


            <div class="event-card-bottom">

                <button
                    type="button"
                    class="event-view-btn"
                    data-view-event="${escapeAttribute(event.id)}"
                >
                    View Details
                </button>


                <button
                    type="button"
                    class="event-select-btn"
                    data-select-event="${escapeAttribute(event.id)}"
                >

                    <span class="select-text">
                        Select
                    </span>

                    <span class="selected-text">
                        ✓ Selected
                    </span>

                </button>

            </div>

        </article>

    `;

}


/* =========================================================
   15. INITIALIZE SELECTION
   ========================================================= */

function initializeSelection() {

    document.addEventListener(
        "click",
        function (event) {

            const selectButton =
                event.target.closest(
                    "[data-select-event]"
                );


            if (selectButton) {

                event.preventDefault();

                const id =
                    selectButton.dataset.selectEvent;

                toggleEventSelection(id);

                return;

            }


            const viewButton =
                event.target.closest(
                    "[data-view-event]"
                );


            if (viewButton) {

                event.preventDefault();

                openEventModal(
                    viewButton.dataset.viewEvent
                );

                return;

            }


            const removeButton =
                event.target.closest(
                    "[data-remove-event]"
                );


            if (removeButton) {

                event.preventDefault();

                const id =
                    removeButton.dataset.removeEvent;

                toggleEventSelection(id);

            }

        }
    );

}


/* =========================================================
   16. TOGGLE EVENT
   ========================================================= */

function toggleEventSelection(id) {

    const event =
        getEventById(id);

    if (!event) {
        return;
    }


    /* REMOVE */

    if (
        selectedEvents.includes(id)
    ) {

        selectedEvents =
            selectedEvents.filter(
                selectedId =>
                    selectedId !== id
            );

        updateEventUI();

        return;

    }


    /* MAXIMUM */

    if (
        selectedEvents.length >=
        MAX_EVENTS
    ) {

        showEventWarning(
            "You can select a maximum of 5 events."
        );

        return;

    }


    /* PAIR */

    const pair =
        EVENT_PAIRS[id];

    if (
        pair &&
        selectedEvents.includes(pair)
    ) {

        const pairEvent =
            getEventById(pair);

        showEventWarning(
            `${pairEvent.name} is already selected. These two events run at the same time.`
        );

        return;

    }


    selectedEvents.push(id);

    updateEventUI();

}


/* =========================================================
   17. UPDATE EVENT UI
   ========================================================= */

function updateEventUI() {

    document
        .querySelectorAll(".event-card")
        .forEach(function (card) {

            const id =
                card.dataset.event;

            const selected =
                selectedEvents.includes(id);

            const pair =
                EVENT_PAIRS[id];

            const pairSelected =
                pair &&
                selectedEvents.includes(pair);


            card.classList.toggle(
                "selected",
                selected
            );

            card.classList.toggle(
                "disabled",
                Boolean(
                    pairSelected &&
                    !selected
                )
            );


            const button =
                card.querySelector(
                    ".event-select-btn"
                );

            if (button) {

                button.classList.toggle(
                    "active",
                    selected
                );

            }

        });


    updateCounter();

    updateFormEventList();

    updatePaymentTotal();

}


/* =========================================================
   18. COUNTER
   ========================================================= */

function updateCounter() {

    const counter =
        document.querySelector(
            ".counter-value"
        );

    if (!counter) {
        return;
    }

    counter.textContent =
        `${selectedEvents.length} / ${MAX_EVENTS}`;

}


/* =========================================================
   19. FORM EVENT LIST
   ========================================================= */

function updateFormEventList() {

    const container =
        document.querySelector(
            ".form-event-list"
        );

    if (!container) {
        return;
    }


    if (
        selectedEvents.length === 0
    ) {

        container.innerHTML = `
            <div class="no-events">
                Select events above
            </div>
        `;

        return;

    }


    container.innerHTML =
        selectedEvents
            .map(function (id) {

                const event =
                    getEventById(id);

                if (!event) {
                    return "";
                }

                return `

                    <span class="form-event-tag">

                        ${escapeHTML(event.name)}

                        <button
                            type="button"
                            class="remove-tag"
                            data-remove-event="${escapeAttribute(id)}"
                        >
                            ×
                        </button>

                    </span>

                `;

            })
            .join("");

}


/* =========================================================
   20. PAYMENT TOTAL
   ========================================================= */

function updatePaymentTotal() {

    const totalElements =
        document.querySelectorAll(
            ".payment-total span:last-child"
        );

    totalElements.forEach(
        function (element) {

            element.textContent =
                `₹${REGISTRATION_FEE}`;

        }
    );

}


/* =========================================================
   21. EVENT WARNING
   ========================================================= */

function showEventWarning(message) {

    const warning =
        document.querySelector(
            ".event-warning"
        );


    if (!warning) {

        alert(message);

        return;

    }


    warning.textContent =
        `⚠ ${message}`;

    warning.classList.add(
        "visible"
    );


    clearTimeout(
        warning._timer
    );


    warning._timer =
        setTimeout(
            function () {

                warning.classList.remove(
                    "visible"
                );

            },
            3500
        );

}


/* =========================================================
   22. EVENT MODAL
   ========================================================= */

function initializeEventModal() {

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!modal) {
        return;
    }


    const closeButton =
        modal.querySelector(
            ".event-modal-close"
        );

    const backdrop =
        modal.querySelector(
            ".event-modal-backdrop"
        );


    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeEventModal
        );

    }


    if (backdrop) {

        backdrop.addEventListener(
            "click",
            closeEventModal
        );

    }


    document.addEventListener(
        "keydown",
        function (event) {

            if (
                event.key === "Escape"
            ) {

                closeEventModal();

            }

        }
    );

}


/* =========================================================
   23. OPEN EVENT MODAL
   ========================================================= */

function openEventModal(id) {

    const event = getEventById(id);

    const modal = document.querySelector(".event-modal");

    if (!event || !modal) {
        return;
    }


    /* =========================================================
       BASIC EVENT DETAILS
    ========================================================= */

    const category =
        modal.querySelector("#modalCategory");

    const title =
        modal.querySelector("#modalTitle");

    const description =
        modal.querySelector("#modalDescription");


    /* =========================================================
       ONLY THESE 3 DETAILS WILL BE DISPLAYED
    ========================================================= */

    const objective =
        modal.querySelector("#modalObjective");

    const procedure =
        modal.querySelector("#modalProcedure");

    const rules =
        modal.querySelector("#modalRules");


    /* =========================================================
       HIDE / CLEAR ALL OTHER DETAILS
    ========================================================= */

    const rounds =
        modal.querySelector("#modalRounds");

    const scoring =
        modal.querySelector("#modalScoring");

    const highlights =
        modal.querySelector("#modalHighlights");

    const requirements =
        modal.querySelector("#modalRequirements");

    const winner =
        modal.querySelector("#modalWinner");

    const tagline =
        modal.querySelector("#modalTagline");


    if (rounds) {
        rounds.innerHTML = "";
        rounds.style.display = "none";
    }

    if (scoring) {
        scoring.innerHTML = "";
        scoring.style.display = "none";
    }

    if (highlights) {
        highlights.innerHTML = "";
        highlights.style.display = "none";
    }

    if (requirements) {
        requirements.innerHTML = "";
        requirements.style.display = "none";
    }

    if (winner) {
        winner.innerHTML = "";
        winner.style.display = "none";
    }

    if (tagline) {
        tagline.innerHTML = "";
        tagline.style.display = "none";
    }


    /* =========================================================
       CATEGORY
    ========================================================= */

    if (category) {
        category.textContent = event.category || "";
    }


    /* =========================================================
       TITLE
    ========================================================= */

    if (title) {
        title.textContent = event.name || "";
    }


    /* =========================================================
       DESCRIPTION
    ========================================================= */

    if (description) {
        description.textContent = event.description || "";
    }


    /* =========================================================
       EVENT OBJECTIVE
    ========================================================= */

    if (objective) {

        objective.style.display = "block";

        if (event.objective) {

            objective.innerHTML = `
                <h3>Event Objective</h3>

                <p>
                    ${escapeHTML(event.objective)}
                </p>
            `;

        } else {

            objective.innerHTML = "";
        }
    }


    /* =========================================================
       EVENT PROCEDURE
    ========================================================= */

    if (procedure) {

        procedure.style.display = "block";

        if (
            Array.isArray(event.procedure) &&
            event.procedure.length > 0
        ) {

            procedure.innerHTML = `
                <h3>Event Procedure</h3>

                <ol>
                    ${event.procedure
                        .map(function (item) {

                            return `
                                <li>
                                    ${escapeHTML(item)}
                                </li>
                            `;

                        })
                        .join("")}
                </ol>
            `;

        } else {

            procedure.innerHTML = "";
        }
    }


    /* =========================================================
       RULES & REGULATIONS
    ========================================================= */

    if (rules) {

        rules.style.display = "block";

        if (
            Array.isArray(event.rules) &&
            event.rules.length > 0
        ) {

            rules.innerHTML = `
                <h3>Rules & Regulations</h3>

                <ol>
                    ${event.rules
                        .map(function (rule) {

                            return `
                                <li>
                                    ${escapeHTML(rule)}
                                </li>
                            `;

                        })
                        .join("")}
                </ol>
            `;

        } else {

            rules.innerHTML = "";
        }
    }


    /* =========================================================
       EVENT IMAGE
    ========================================================= */

    const images =
        modal.querySelectorAll(
            ".modal-image-wrapper img"
        );

    images.forEach(function (image) {

        image.src =
            "https://placehold.co/900x550/111111/D4AF37?text=" +
            encodeURIComponent(event.name);

        image.alt =
            event.name || "Event Image";

    });


    /* =========================================================
       OPEN MODAL
    ========================================================= */

    modal.classList.add("active");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );

    document.body.classList.add(
        "modal-open"
    );
}



/* =========================================================
   24. CLOSE EVENT MODAL
   ========================================================= */

function closeEventModal() {

    const modal =
        document.querySelector(
            ".event-modal"
        );

    if (!modal) {
        return;
    }


    modal.classList.remove(
        "active"
    );

    modal.setAttribute(
        "aria-hidden",
        "true"
    );

    document.body.classList.remove(
        "modal-open"
    );

}


/* =========================================================
   25. FORM INITIALIZATION
   ========================================================= */

function initializeForm() {

    const form =
        document.querySelector(
            "#registrationForm"
        );

    if (!form) {
        return;
    }


    form.addEventListener(
        "submit",
        handleRegistrationSubmit
    );

}


/* =========================================================
   26. FORM SUBMISSION
   ========================================================= */

async function handleRegistrationSubmit(event) {

    event.preventDefault();


    const form =
        event.target;


    /* EVENTS */

    if (
        selectedEvents.length === 0
    ) {

        showFormMessage(
            "Please select at least one event.",
            "error"
        );

        document
            .querySelector("#events")
            ?.scrollIntoView({
                behavior: "smooth"
            });

        return;

    }


    /* URL */

    if (
        !GOOGLE_SCRIPT_URL ||
        GOOGLE_SCRIPT_URL.includes(
            "PASTE_YOUR"
        )
    ) {

        showFormMessage(
            "Google Apps Script URL is not configured.",
            "error"
        );

        return;

    }


    /* HTML VALIDATION */

    if (
        !form.checkValidity()
    ) {

        form.reportValidity();

        showFormMessage(
            "Please fill all required fields.",
            "error"
        );

        return;

    }


    const submitButton =
        form.querySelector(
            ".btn-submit"
        );


    if (submitButton) {

        submitButton.disabled =
            true;

        submitButton.classList.add(
            "loading"
        );

    }


    try {

        const formData =
            new FormData(form);


        /* =================================================
           NAME
           ================================================= */

        const name =
            String(
                formData.get("name") || ""
            ).trim();


        /* =================================================
           COLLEGE
           ================================================= */

        const college =
            String(
                formData.get("college") || ""
            ).trim();


        /* =================================================
           DEPARTMENT
           ================================================= */

        const department =
            String(
                formData.get("department") || ""
            ).trim();


        /* =================================================
           YEAR
           ================================================= */

        const year =
            String(
                formData.get("year") || ""
            ).trim();


        /* =================================================
           PHONE
           ================================================= */

        const phone =
            String(
                formData.get("phone") || ""
            ).trim();


        /* =================================================
           EMAIL
           ================================================= */

        const email =
            String(
                formData.get("email") || ""
            ).trim();


        /* =================================================
           FOOD
           ================================================= */

        const food =
            String(
                formData.get("food") || ""
            ).trim();


        /* =================================================
           PAYMENT FILE
           ================================================= */

        const file =
            formData.get(
                "paymentScreenshot"
            );


        if (
            !file ||
            !(file instanceof File) ||
            file.size === 0
        ) {

            throw new Error(
                "Please upload your payment screenshot."
            );

        }


        /* FILE SIZE */

        const MAX_FILE_SIZE =
            5 * 1024 * 1024;


        if (
            file.size >
            MAX_FILE_SIZE
        ) {

            throw new Error(
                "Payment screenshot must be less than 5 MB."
            );

        }


        /* FILE TYPE */

        const allowedTypes = [
            "image/jpeg",
            "image/jpg",
            "image/png",
            "image/webp"
        ];


        if (
            !allowedTypes.includes(
                file.type
            )
        ) {

            throw new Error(
                "Only JPG, PNG or WEBP images are allowed."
            );

        }


        /* BASE64 */

        const base64 =
            await fileToBase64(file);


        /* =================================================
           URL ENCODED DATA
           ================================================= */

        const params =
            new URLSearchParams();


        params.append(
            "name",
            name
        );


        params.append(
            "college",
            college
        );


        params.append(
            "department",
            department
        );


        params.append(
            "year",
            year
        );


        params.append(
            "phone",
            phone
        );


        params.append(
            "email",
            email
        );


        params.append(
            "food",
            food
        );


        /* =================================================
           EVENTS
           ================================================= */

        const selectedEventNames =
            selectedEvents
                .map(function (id) {

                    const eventData =
                        getEventById(id);

                    return eventData
                        ? normalizeEventName(
                            eventData.name
                        )
                        : "";

                })
                .filter(Boolean);


        params.append(
            "events",
            selectedEventNames.join(",")
        );


        /* =================================================
           PAYMENT
           ================================================= */

        params.append(
            "paymentScreenshotData",
            base64
        );


        params.append(
            "paymentScreenshotName",
            file.name
        );


        params.append(
            "paymentScreenshotType",
            file.type ||
            "image/jpeg"
        );


        console.log(
            "Submitting registration..."
        );

        console.log(
            "Name:",
            name
        );

        console.log(
            "College:",
            college
        );

        console.log(
            "Department:",
            department
        );

        console.log(
            "Year:",
            year
        );

        console.log(
            "Events:",
            selectedEventNames
        );


        /* =================================================
           SEND
           ================================================= */

        const response =
            await fetch(
                GOOGLE_SCRIPT_URL,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/x-www-form-urlencoded;charset=UTF-8"
                    },

                    body:
                        params.toString(),

                    redirect: "follow"
                }
            );


        const responseText =
            await response.text();


        console.log(
            "Apps Script response:",
            responseText
        );


        let result;


        try {

            result =
                JSON.parse(
                    responseText
                );

        } catch (error) {

            throw new Error(
                "Google Apps Script returned an invalid response."
            );

        }


        if (
            !result.success
        ) {

            throw new Error(
                result.message ||
                "Registration failed."
            );

        }


        /* =================================================
           SUCCESS
           ================================================= */

        showFormMessage(
            `Registration successful! Registration ID: ${result.registrationId}`,
            "success"
        );


        /* RESET */

        form.reset();

        selectedEvents = [];

        updateEventUI();


        console.log(
            "Registration completed.",
            result
        );


    } catch (error) {

        console.error(
            "REGISTRATION ERROR:",
            error
        );


        showFormMessage(
            error.message ||
            "Failed to submit registration.",
            "error"
        );


    } finally {

        if (submitButton) {

            submitButton.disabled =
                false;

            submitButton.classList.remove(
                "loading"
            );

        }

    }

}


/* =========================================================
   27. FILE → BASE64
   ========================================================= */

function fileToBase64(file) {

    return new Promise(
        function (resolve, reject) {

            const reader =
                new FileReader();


            reader.onload =
                function () {

                    const result =
                        String(
                            reader.result
                        );


                    const base64 =
                        result.includes(
                            "base64,"
                        )
                            ? result.split(
                                "base64,"
                            )[1]
                            : result;


                    resolve(
                        base64
                    );

                };


            reader.onerror =
                function () {

                    reject(
                        new Error(
                            "Unable to read payment screenshot."
                        )
                    );

                };


            reader.readAsDataURL(
                file
            );

        }
    );

}


/* =========================================================
   28. FORM MESSAGE
   ========================================================= */

function showFormMessage(
    message,
    type
) {

    const element =
        document.querySelector(
            ".form-message"
        );


    if (!element) {

        alert(message);

        return;

    }


    element.className =
        `form-message ${type}`;


    element.textContent =
        message;


    element.style.display =
        "block";


    element.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });

}


/* =========================================================
   29. SCROLL NAVIGATION
   ========================================================= */

function initializeScroll() {

    const sections =
        document.querySelectorAll(
            "section[id]"
        );

    const links =
        document.querySelectorAll(
            ".nav-link[href^='#']"
        );


    if (
        !sections.length ||
        !links.length
    ) {
        return;
    }


    const observer =
        new IntersectionObserver(
            function (entries) {

                entries.forEach(
                    function (entry) {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        links.forEach(
                            function (link) {

                                link.classList.toggle(
                                    "active",
                                    link.getAttribute(
                                        "href"
                                    ) ===
                                    `#${id}`
                                );

                            }
                        );

                    }
                );

            },
            {
                threshold: 0.25
            }
        );


    sections.forEach(
        function (section) {

            observer.observe(
                section
            );

        }
    );

}


/* =========================================================
   30. PARTICLES
   ========================================================= */

function initializeParticles() {

    const canvas =
        document.querySelector(
            ".particle-canvas"
        );

    if (!canvas) {
        return;
    }


    const ctx =
        canvas.getContext(
            "2d"
        );

    if (!ctx) {
        return;
    }


    let width = 0;

    let height = 0;

    let particles = [];


    function resize() {

        const ratio =
            Math.min(
                window.devicePixelRatio || 1,
                2
            );


        width =
            window.innerWidth;

        height =
            window.innerHeight;


        canvas.width =
            width * ratio;

        canvas.height =
            height * ratio;


        canvas.style.width =
            `${width}px`;

        canvas.style.height =
            `${height}px`;


        ctx.setTransform(
            ratio,
            0,
            0,
            ratio,
            0,
            0
        );


        createParticles();

    }


    function createParticles() {

        const count =
            width < 600
                ? 20
                : 45;


        particles =
            Array.from(
                {
                    length: count
                },
                function () {

                    return {

                        x:
                            Math.random() *
                            width,

                        y:
                            Math.random() *
                            height,

                        size:
                            Math.random() *
                            1.5 +
                            0.5,

                        speed:
                            Math.random() *
                            0.25 +
                            0.05,

                        opacity:
                            Math.random() *
                            0.4 +
                            0.1

                    };

                }
            );

    }


    function animate() {

        ctx.clearRect(
            0,
            0,
            width,
            height
        );


        particles.forEach(
            function (particle) {

                particle.y -=
                    particle.speed;


                if (
                    particle.y < -10
                ) {

                    particle.y =
                        height + 10;

                }


                ctx.beginPath();


                ctx.arc(
                    particle.x,
                    particle.y,
                    particle.size,
                    0,
                    Math.PI * 2
                );


                ctx.fillStyle =
                    `rgba(212,175,55,${particle.opacity})`;


                ctx.fill();

            }
        );


        requestAnimationFrame(
            animate
        );

    }


    window.addEventListener(
        "resize",
        resize,
        {
            passive: true
        }
    );


    resize();

    animate();

}


/* =========================================================
   31. SCROLL REVEAL ANIMATIONS  ←  ADDED
   ========================================================= */

function initializeScrollAnimations() {

    const revealObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("nx-visible");
                }
            });
        },
        {
            threshold: 0.12,
            rootMargin: "0px 0px -40px 0px"
        }
    );

    const revealSelectors = [
        ".section-header",
        ".about-card",
        ".events-category",
        ".event-card",
        ".timeline-item",
        ".register-info",
        ".form-glass",
        ".events-counter",
        ".footer"
    ];

    revealSelectors.forEach(function (selector) {
        document.querySelectorAll(selector).forEach(function (el) {
            revealObserver.observe(el);
        });
    });

    const sectionObserver = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("nx-section-visible");
                }
            });
        },
        { threshold: 0.15 }
    );

    document.querySelectorAll("section:not(.hero)").forEach(function (section) {
        sectionObserver.observe(section);
    });

}