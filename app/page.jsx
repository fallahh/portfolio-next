'use client';

import { useState } from 'react';
import {
  ArrowUpRight,
  Instagram,
  Linkedin,
  Mail,
  Menu,
  X,
  Cpu,
  Code2,
  FlaskConical,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Sun,
  Moon,
} from 'lucide-react';

const projects = [
   {
    n: '01',

    title: 'PLC Simulation — Trashrack Cleaner',

    fullTitle:
      'PLC-Based Simulation Using GX Works2 as a Simulator for an Automation System — Trashrack Cleaner',

    tag: 'PLC · HMI · AUTOMATION',

    text:
      'Simulation of an automated Trashrack Cleaner using PLC and HMI emulation with GX Works2 and GT Designer.',

    color: 'violet',

    date:
      '23 October 2024 — 23 November 2024',

    location:
      'PT. ReneconSys, Cimahi, West Java',

    image:
      '/HMI_Trashrack.jpeg',

    pdf:
      '/Ladder_PLC.pdf',

    tools: [
      'GX Works2',
      'GT Designer',
      'PLC FX3U',
      'HMI'
    ],

    statementEn:
      'This project focuses on simulating an automated Trashrack Cleaner system using PLC and HMI emulation. The system is designed to automatically remove debris from a trashrack before water flows toward a turbine, helping maintain a stable and unobstructed water flow.',

    statementId:
      'Proyek ini berfokus pada simulasi sistem Trashrack Cleaner otomatis menggunakan emulator PLC dan HMI. Sistem dirancang untuk membersihkan sampah pada trashrack sebelum air dialirkan menuju turbin, sehingga aliran air tetap lancar dan tidak terhambat.',

    systemEn:
      'The simulation uses a Mitsubishi FX3U PLC to control three operating modes: Manual, Auto, and Continuous. Water-level sensors are used in automatic operation, while motor movement and position feedback are simulated through control logic and a potentiometer-based position value.',

    systemId:
      'Simulasi menggunakan PLC Mitsubishi FX3U dengan tiga mode operasi, yaitu Manual, Auto, dan Continuous. Pada mode otomatis, sensor ketinggian air digunakan sebagai masukan, sedangkan pergerakan motor dan posisi penggaruk disimulasikan melalui logika kontrol dan nilai posisi berbasis potensiometer.',

    contributionEn:
      'Designed and simulated the PLC control logic and HMI interface to represent the operation of an automated Trashrack Cleaner system without physical PLC and HMI hardware.',

    contributionId:
      'Merancang dan mensimulasikan logika kontrol PLC serta antarmuka HMI untuk merepresentasikan sistem Trashrack Cleaner otomatis tanpa menggunakan perangkat PLC dan HMI fisik.'
  },
  {
    n: '02',

    title:
      'Synchronous Buck Converter for WPT EV Charging',

    fullTitle:
      'Design and Implementation of an Adaptive DC–DC Synchronous Buck Converter on the Receiver Side of a Wireless Power Transfer (WPT) System for Electric Vehicle Battery Charging',

    tag:
      'WPT · POWER ELECTRONICS · CONTROL',

    text:
      'Design and implementation of a synchronous buck converter for EV battery charging with CC–CV control under varying WPT receiver-side conditions.',

    color:
      'cyan',

    date:
      '21 March 2026 — 7 August 2026',

    location:
      'BRIN, Indonesia · Research Internship',

    image:
      '/DCDC_TA.jpeg',

    pdf:
      '/PPT_DCDC.pdf',

    tools: [
      'LTspice',
      'ESP32',
      'Synchronous Buck',
      'Cascade PI',
      'CC–CV'
    ],

    statementEn:
      'Designed and implemented a synchronous buck converter for LiFePO₄ battery charging under varying WPT receiver-side conditions.',

    statementId:
      'Merancang dan mengimplementasikan synchronous buck converter untuk pengisian baterai LiFePO₄ pada kondisi sisi receiver WPT yang bervariasi.',

    systemEn:
      'The system uses a cascade PI controller with Constant Current–Constant Voltage (CC–CV) charging. WPT misalignment is represented by DC-link variations of 150 V, 200 V, 300 V, and 400 V.',

    systemId:
      'Sistem menggunakan cascade PI controller dengan metode pengisian Constant Current–Constant Voltage (CC–CV). Misalignment WPT direpresentasikan melalui variasi DC-link 150 V, 200 V, 300 V, dan 400 V.',

    contributionEn:
      'Developed the converter model in LTspice and implemented the control system on ESP32 for hardware evaluation.',

    contributionId:
      'Mengembangkan model converter di LTspice dan mengimplementasikan sistem kontrol pada ESP32 untuk pengujian hardware.',

    keywords: [
      'Wireless Power Transfer',
      'Misalignment',
      'Receiver-side Power Conditioning',
      'Synchronous Buck Converter',
      'Cascade PI Controller',
      'Constant Current–Constant Voltage'
    ]
  },
  {
  n: '03',

  title:
    'Smart 30-Button Quiz Control System',

  fullTitle:
    'Smart 30-Button Quiz Control System Using ESP32, RS485, and PCF8575',

  tag:
    'ESP32 · RS485 · PCF8575',

  text:
    'A 30-button quiz control system using ESP32, RS485 communication, and PCF8575 modules for digital input expansion and button detection.',

  color:
    'cyan',

  date:
    '31 March 2026 — 12 April 2026',

  location:
    'Bandung, Indonesia',

  image:
    '/LCC_Cerdas.jpeg',

  pdf:
    '/Draft_Tombol.pdf',

  tools: [
    'ESP32',
    'RS485',
    'PCF8575',
    'Digital Input'
  ],

  statementEn:
    'Designed a smart 30-button quiz control system using ESP32 as the main controller, with RS485 communication and PCF8575 modules for expanded digital inputs.',

  statementId:
    'Merancang sistem kontrol cerdas cermat 30 tombol menggunakan ESP32 sebagai kontroler utama, dengan komunikasi RS485 dan modul PCF8575 untuk ekspansi input digital.',

  systemEn:
    'The system uses ESP32 to process button inputs from multiple PCF8575 modules. RS485 is used as the communication interface to support reliable data transmission between system modules.',

  systemId:
    'Sistem menggunakan ESP32 untuk memproses input tombol dari beberapa modul PCF8575. RS485 digunakan sebagai antarmuka komunikasi untuk mendukung pengiriman data antar-modul.',

  contributionEn:
    'Developed the control logic and communication structure for a multi-button quiz system using ESP32, RS485, and PCF8575.',

  contributionId:
    'Mengembangkan logika kontrol dan struktur komunikasi untuk sistem cerdas cermat multi-tombol menggunakan ESP32, RS485, dan PCF8575.',

  keywords: [
    'ESP32',
    'RS485',
    'PCF8575',
    'Smart Quiz',
    '30-Button Control System'
  ]
  },

  {
  n: '04',

  title:
    'AI-Based Plant Recommendation System',

  fullTitle:
    'AI-Based Plant Recommendation System Using NPK, pH, and Temperature Monitoring',

  tag:
    'AI · ESP32 · NPK · MODBUS',

  text:
    'An intelligent monitoring system that analyzes soil NPK, pH, and temperature data to recommend suitable plants based on measured growing conditions.',

  color:
    'lime',

  date:
    '18 September 2024 — 26 September 2024',

  location:
    'Bandung, Indonesia',

  image:
    '/NPK.jpg',

  pdf:
    '/Publikasi_Magot.pdf',

  tools: [
    'ESP32',
    'Modbus',
    'NPK 5-in-1',
    'AI',
    'Monitoring'
  ],

  statementEn:
    'Developed an intelligent plant recommendation system that uses soil and environmental data to identify plants suitable for the measured growing conditions.',

  statementId:
    'Mengembangkan sistem rekomendasi tanaman berbasis kecerdasan buatan yang menggunakan data tanah dan lingkungan untuk menentukan tanaman yang sesuai dengan kondisi yang terukur.',

  systemEn:
    'The system uses an ESP32 to collect NPK, pH, and temperature data from an NPK 5-in-1 sensor through Modbus communication. The collected parameters are used as inputs for plant recommendation and monitoring.',

  systemId:
    'Sistem menggunakan ESP32 untuk mengambil data NPK, pH, dan temperatur dari sensor NPK 5-in-1 melalui komunikasi Modbus. Parameter yang diperoleh digunakan sebagai input untuk rekomendasi dan monitoring tanaman.',

  contributionEn:
    'Developed the ESP32-based monitoring system, Modbus communication, sensor data acquisition, and plant recommendation workflow.',

  contributionId:
    'Mengembangkan sistem monitoring berbasis ESP32, komunikasi Modbus, akuisisi data sensor, serta alur rekomendasi tanaman.',

  keywords: [
    'Modbus Communication',
    'NPK 5-in-1',
    'ESP32',
    'Soil Monitoring',
    'Artificial Intelligence',
    'Plant Recommendation'
  ]
  },
  {
  n: '05',
  title: 'Smart Maggot Incubator',
  fullTitle:
    'Smart Maggot Cultivation Incubator with Temperature and Humidity Control',
  tag: 'ESP32 · INCUBATOR · DHT22 · MONITORING DISPLAY',
  text:   'An ESP32-based smart incubator for maggot cultivation with temperature and humidity monitoring. The project explores maggot cultivation and AI-based organic waste management as an adaptation strategy for sustainable food production aligned with SDG 12.',
  color: 'orange',
  date: '18 September 2024 — 26 September 2024',
  location: 'Bandung, Indonesia',
  image: '/Inkubator_foto.png',
  pdf: '/Publikasi_Magot.pdf',
  tools: ['ESP32', 'Incubator', 'DHT22', 'Monitoring Display']
},
{
  n: '06',
  title: 'IoT-Based Plant Seedling Incubator',

  fullTitle:
    'IoT-Based Plant Seedling Incubator with Environmental Monitoring and Temperature Control',

  tag: 'IOT · ESP32 · INCUBATOR · MONITORING',

  text:
    'An IoT-based plant seedling incubator that monitors growing-media moisture and controls temperature to support healthy seedling development, reduce growth-related risks, and contribute to sustainable food security.',

  color: 'green',

  date: '31 May 2024',

  location: 'Bandung, Indonesia',

  image: '/Inkibatortanaman.png',

  pdf: '/PPTintukbatortanaman.pdf',

  tools: [
    'ESP32',
    'IoT',
    'Incubator',
    'Temperature Control',
    'Moisture Monitoring',
    'Seedling Monitoring'
  ],

  statementEn:
    'Developed an IoT-based plant seedling incubator to support healthy and high-quality seedling development through environmental monitoring and temperature control.',

  statementId:
    'Mengembangkan sistem inkubator penyemaian tanaman berbasis IoT untuk mendukung pertumbuhan bibit yang sehat dan berkualitas melalui pemantauan lingkungan dan pengaturan suhu.',

  systemEn:
    'The system monitors growing-media moisture and environmental temperature to maintain suitable conditions during the seedling development process.',

  systemId:
    'Sistem memantau kelembapan media tanam dan suhu lingkungan untuk menjaga kondisi yang sesuai selama proses pengembangan bibit.',

  contributionEn:
    'Developed the IoT-based monitoring and control system for the plant seedling incubator, including environmental monitoring and temperature regulation.',

  contributionId:
    'Mengembangkan sistem monitoring dan kontrol berbasis IoT pada inkubator penyemaian tanaman, termasuk pemantauan kondisi lingkungan dan pengaturan suhu.',

  keywords: [
    'ESP32',
    'IoT',
    'Plant Incubator',
    'Temperature Control',
    'Moisture Monitoring',
    'Seedling Development'
  ]
},
{
  n: '07',

  title: 'IoT Workshop for STEM Education',

  fullTitle:
    'Interactive IoT Workshop for STEM Learning and Smart Home Development',

  tag: 'IOT · ESP8266 · NODE-RED · STEM',

  text:
    'An interactive IoT workshop for SMAN 24 Bandung students, covering ESP8266 programming, sensors and actuators, MQTT, Node-RED, and smart home system development through hands-on project-based learning.',

  color: 'cyan',

  date: '21 August 2025 — 18 September 2025',

  location: 'SMAN 24 Bandung, Indonesia',

  image: '/TBM2024.jpeg',

  pdf: '/SMA24workshop.pdf',

  tools: [
    'IoT',
    'ESP8266',
    'Arduino IDE',
    'Node-RED',
    'MQTT',
    'DHT22',
    'PIR Sensor',
    'Smart Home'
  ],

  statementEn:
    'Conducted a four-session IoT workshop covering basic IoT concepts, ESP8266 programming, sensor and actuator integration, MQTT communication, Node-RED dashboards, and a final smart home monitoring project.',

  statementId:
    'Melaksanakan workshop IoT selama empat pertemuan yang mencakup konsep dasar IoT, pemrograman ESP8266, integrasi sensor dan aktuator, komunikasi MQTT, dashboard Node-RED, serta proyek akhir monitoring smart home.',

  systemEn:
    'The workshop introduced students to ESP8266, Arduino IDE, sensors, actuators, MQTT, and Node-RED. Participants built a smart home prototype using DHT22 for temperature and humidity monitoring, PIR for motion detection, and buzzer and LED indicators.',

  systemId:
    'Workshop memperkenalkan ESP8266, Arduino IDE, sensor, aktuator, MQTT, dan Node-RED. Peserta membuat prototipe smart home menggunakan DHT22 untuk monitoring suhu dan kelembapan, PIR untuk deteksi gerakan, serta buzzer dan LED sebagai indikator.',

  contributionEn:
    'Supported hands-on STEM learning through IoT workshops, practical system development, and project-based activities focused on programming, hardware integration, data visualization, and smart home applications.',

  contributionId:
    'Mendukung pembelajaran STEM berbasis praktik melalui workshop IoT dan kegiatan project-based learning yang berfokus pada pemrograman, integrasi perangkat keras, visualisasi data, dan aplikasi smart home.',

  keywords: [
    'IoT',
    'ESP8266',
    'Arduino IDE',
    'Node-RED',
    'MQTT',
    'DHT22',
    'PIR Sensor',
    'Smart Home',
    'STEM Education',
    'Project-Based Learning'
  ]
},
{
  n: '08',
  title: 'Color-Based Sorting System Using 6-DOF Robotic Arm and Conveyor',
  fullTitle:
    'Color-Based Object Sorting System Using a 6-DOF Robotic Arm and Conveyor',
  tag: 'ROBOTICS · ESP32 · SERVO · COLOR SENSOR',
  text:
    'A color-based object sorting system integrating a 6-DOF robotic arm, conveyor, TCS34725 color sensor, and ESP32 for automated sorting and offline data management.',
  color: 'cyan',
  date: '28 November 2025',
  location: 'Bandung, Indonesia · ITENAS',
  image: '/armrobot.jpeg',
  pdf: '/Sortirbarangarm.pdf',
  tools: [
    'ESP32',
    '6-DOF Robotic Arm',
    'Conveyor',
    'TCS34725',
    'Servo Motor',
    'I2C',
    'Infrared Sensor',
    'LCD',
    'Excel'
  ],
  statementEn:
    'Developed and implemented a control system for a 6-DOF robotic arm integrated with a conveyor and color detection system for automated object sorting.',
  statementId:
    'Mengembangkan dan mengimplementasikan sistem kontrol lengan robot 6-DOF yang terintegrasi dengan conveyor dan sistem pendeteksi warna untuk penyortiran barang secara otomatis.',
  systemEn:
    'The system uses an ESP32 to control six servo motors through I2C, while a TCS34725 color sensor identifies object colors. Two infrared sensors are used to control conveyor movement, and an LCD provides hardware-side monitoring. Sorting data is also transferred to Excel through a wired ESP32-to-laptop connection for offline data management.',
  systemId:
    'Sistem menggunakan ESP32 untuk mengontrol enam servo melalui komunikasi I2C. Sensor warna TCS34725 digunakan untuk mengidentifikasi warna objek, sedangkan dua sensor inframerah digunakan untuk mengontrol pergerakan conveyor. LCD digunakan untuk monitoring pada perangkat, sementara data penyortiran dikirim ke Excel melalui koneksi kabel ESP32 ke laptop untuk manajemen data secara offline.',
  contributionEn:
    'Designed and implemented the robotic arm control, mechanical integration, sensor reading, conveyor control, and data integration for color-based object sorting and offline Excel monitoring.',
  contributionId:
    'Merancang dan mengimplementasikan kontrol lengan robot, integrasi mekanik, pembacaan sensor, kontrol conveyor, serta integrasi data untuk penyortiran barang berdasarkan warna dan monitoring Excel secara offline.',
  keywords: [
    '6-DOF Robotic Arm',
    'Color-Based Sorting',
    'ESP32',
    'TCS34725',
    'Conveyor System',
    'Servo Motor Control',
    'I2C Communication',
    'Infrared Sensor',
    'LCD Monitoring',
    'Excel Data Management'
  ]
},
{
  n: '09',
  title: 'IoT-Based Industrial Security System',
  fullTitle:
    'IoT-Based Industrial Security System Using ESP32, MQTT, and Multi-Sensor Integration',
  tag: 'IOT · ESP32 · MQTT · INDUSTRIAL SECURITY',
  text:
    'An IoT-based security system integrating multiple ESP32 nodes with RFID, gas, temperature, and humidity sensors using MQTT and Node-RED for centralized monitoring and communication.',
  color: 'cyan',
  date: '20 August 2025',
  location: 'Bandung, Indonesia · ITENAS',
  image: '/Project_slave.jpeg',
  pdf: '/Project_Espslave.pdf',
  tools: [
    'ESP32',
    'RFID',
    'MQ-4',
    'DHT22',
    'MQTT',
    'Node-RED',
    'Wireshark'
  ],
  statementEn:
    'Developed an ESP32-based RFID access authentication node and integrated it with an MQTT broker for IoT-based security monitoring.',
  statementId:
    'Mengembangkan node autentikasi akses berbasis ESP32 dan RFID serta mengintegrasikannya dengan MQTT broker untuk monitoring keamanan berbasis IoT.',
  systemEn:
    'The system consists of three ESP32-based sensor nodes for RFID access authentication, gas leakage detection using MQ-4, and temperature and humidity monitoring using DHT22. MQTT is used for data communication between devices through a Node-RED broker, while Wireshark is used to analyze network communication and system data security.',
  systemId:
    'Sistem terdiri dari tiga node berbasis ESP32 untuk autentikasi akses RFID, deteksi kebocoran gas menggunakan MQ-4, serta monitoring suhu dan kelembapan menggunakan DHT22. MQTT digunakan untuk komunikasi data antarperangkat melalui broker Node-RED, sedangkan Wireshark digunakan untuk menganalisis komunikasi jaringan dan keamanan data sistem.',
  contributionEn:
    'Programmed the ESP32 and RFID authentication system, integrated the ESP32 node directly with the MQTT broker, and contributed to the overall system design and project documentation.',
  contributionId:
    'Memprogram ESP32 dan sistem autentikasi RFID, mengintegrasikan node ESP32 secara langsung dengan MQTT broker, serta berkontribusi dalam penyusunan rancangan sistem dan dokumentasi proyek.',
  keywords: [
    'IoT Security',
    'ESP32',
    'RFID Authentication',
    'MQTT',
    'Node-RED',
    'MQ-4 Gas Sensor',
    'DHT22',
    'Industrial Security',
    'IoT Communication',
    'Wireshark'
  ]
},

{
  n: '10',
  title: 'SMART HOME SECURITY SYSTEM',
  fullTitle:
    'STORY — IoT-Based Smart Home Security and Monitoring System',
  tag: 'IOT · SMART HOME · EMBEDDED SYSTEM · TELEGRAM',
  text:
    'STORY is an IoT-based smart home security system designed to monitor and respond to potential household hazards, including unauthorized access, gas leakage, temperature changes, and fire. The system integrates real-time monitoring, remote control through Telegram, and warning indicators to support faster responses to security and safety events.',
  color: 'cyan',
  date: '1 May 2024',
  location: 'Bandung, Indonesia · ITENAS',
  image: '/smarthome.jpeg',
  pdf: '/smarthome.pdf',
  tools: [
    'ESP32',
    'IoT',
    'Smart Home',
    'Telegram',
    'Sensors',
    'Embedded System',
    'Eagle',
    'Fritzing',
    'SolidWorks'
  ],
  statementEn:
    'Developed STORY as an integrated IoT-based smart home security system for real-time monitoring, remote control, and rapid response to household security and safety events.',
  statementId:
    'Mengembangkan STORY sebagai sistem keamanan rumah pintar berbasis IoT yang terintegrasi untuk monitoring real-time, kendali jarak jauh, dan respons terhadap kondisi keamanan serta keselamatan rumah.',
  systemEn:
    'STORY integrates monitoring and control functions for door security, gas detection, temperature monitoring, and fire detection. The system provides real-time monitoring through the STORY application and Telegram, along with remote control and warning indicators when abnormal conditions are detected.',
  systemId:
    'STORY mengintegrasikan fungsi monitoring dan kontrol untuk keamanan pintu, deteksi gas, pemantauan suhu, dan deteksi kebakaran. Sistem menyediakan monitoring secara real-time melalui aplikasi STORY dan Telegram, serta kendali jarak jauh dan indikator peringatan ketika terjadi kondisi abnormal.',
  contributionEn:
    'Contributed to team coordination, system research and development, electronic system design using Eagle and Fritzing, 3D mechanical design using SolidWorks, system implementation, report preparation, and programming through STORYfinal.ino and sensorCheck.ino.',
  contributionId:
    'Berkontribusi dalam koordinasi tim, riset dan pengembangan sistem, perancangan sistem elektronika menggunakan Eagle dan Fritzing, perancangan desain 3D menggunakan SolidWorks, implementasi sistem, penyusunan laporan, serta pemrograman melalui STORYfinal.ino dan sensorCheck.ino.',
  keywords: [
    'Smart Home Security',
    'IoT',
    'ESP32',
    'Telegram Monitoring',
    'Remote Control',
    'Gas Detection',
    'Fire Detection',
    'Temperature Monitoring',
    'Electronic System Design',
    'SolidWorks',
    'Eagle',
    'Fritzing',
    'Embedded Programming'
  ]
},
];

const skills = [
  {
    name: 'Eagle',
    category: 'PCB Design',
    image: '/1_Eaaglecircuit.jpg',
  },
  {
    name: 'Proteus',
    category: 'Circuit Simulation',
    image: '/2_Proteuse.png',
  },
  {
    name: 'LTspice',
    category: 'Power Electronics',
    image: '/3_LTspice.jpg',
  },
  {
    name: 'GX Works2',
    category: 'PLC Programming',
    image: '/4_Gxworks.jpg',
  },
  {
    name: 'Arduino IDE',
    category: 'Embedded Development',
    image: '/5_Arduino.png',
  },
  {
    name: 'C / C++',
    category: 'Programming',
    image: '/6_CPlusplus.png',
  },
  {
    name: 'Microsoft Word',
    category: 'Documentation',
    image: '/7_word.jpg',
  },
  {
    name: 'Microsoft Excel',
    category: 'Data Analysis',
    image: '/8_Excel.jpg',
  },
  {
    name: 'Canva',
    category: 'Visual Design',
    image: '/9_Canva.png',
  },
  {
    name: 'yEd Graph Editor',
    category: 'System Diagram',
    image: '/10_yedgraph.png',
  },
  {
    name: 'VS Code',
    category: 'Development',
    image: '/11_Vscode.jpg',
  },
];

const certificates = [
  {
    n: '01',
    title: 'ICGTD — Presenter',
    file: '/Ser_0_Presenter_ICGTD.pdf',
    category: 'Conference',
  },
  {
    n: '02',
    title: 'Buana — Bronze Medal',
    file: '/Ser_1_Buanan_Bronze_medal.pdf',
    category: 'Competition',
  },
  {
    n: '03',
    title: 'Project Innovation — 2nd Place',
    file: '/Ser_2_Juara_2_Project_Inovation_SDGRC.pdf',
    category: 'Competition',
  },
  {
    n: '04',
    title: 'Samsung Solve for Tomorrow',
    file: '/Ser_3_Samsung_Solve_for_tomorrow.pdf',
    category: 'Competition',
  },
  {
    n: '05',
    title: 'Technology Innovation — 3rd Place',
    file: '/Ser_4_Salinan_Juara_3_Lomba_Teknologi_Tepat_Guna.pdf',
    category: 'Competition',
  },
  {
    n: '06',
    title: 'Mercu Buana Innovation — Silver Award',
    file: '/Ser_5_Salinan_Silver_Award_Mercu_buana_inovation.pdf',
    category: 'Competition',
  },
  {
    n: '07',
    title: 'Electrical Engineering Program Award',
    file: '/Ser_6_Penghargaan_Prodi_Teknik_Elektro.pdf',
    category: 'Academic',
  },
  {
    n: '08',
    title: 'MACBOT',
    file: '/Ser_7_MACBOT.pdf',
    category: 'Competition',
  },
  {
    n: '09',
    title: 'LKS National Electronics — Participant',
    file: '/Ser_8_Peserta_LKS_Nasional_Electronic.pdf',
    category: 'Competition',
  },
  {
    n: '10',
    title: 'LKS National Electronics — MOE',
    file: '/Ser_9_MOE_LKS_Nasional_Electronic.pdf',
    category: 'Competition',
  },
  {
    n: '11',
    title: 'KKSI — IoT Competition',
    file: '/Ser_10_Lomba_KKSI_IOT.pdf',
    category: 'Competition',
  },
  {
    n: '12',
    title: 'LKS Provincial Electronics — 1st Place',
    file: '/Ser_11_Juara_1_LKS_Provinsi_Electronic.pdf',
    category: 'Competition',
  },
  {
    n: '13',
    title: 'LKS Provincial — Participant',
    file: '/Ser_12_PESERTA_LKS_PROVINSI.pdf',
    category: 'Competition',
  },
  {
    n: '14',
    title: 'LKS City Electronics',
    file: '/Ser_13_LKS_KOTA_Electronic.pdf',
    category: 'Competition',
  },
];

const trainings = [
  {
    n: '01',
    title: 'BNSP Competency Certification',
    subtitle: 'LSP-EI',
    category: 'Competency Certification',
    file: '/Train_2_BNSP_Kompetensi_LSP-EI.pdf',
  },
  {
    n: '02',
    title: 'Competency Assessment',
    subtitle: 'SMKN 4',
    category: 'Competency Assessment',
    file: '/Train_1_UJI_kompetensi_SMKN_4.pdf',
  },
];

const journey = [
  {
    year: '2025 — 2026',
    type: 'RESEARCH INTERNSHIP',
    title: 'Research Intern',
    organization: 'Pusat Teknologi Transportasi — BRIN',
    date: '1 November 2025 — 8 August 2026',
    description:
      'Research internship focused on engineering development, experimentation, and practical research in transportation technology.',
  },

  {
    year: '2022 — 2026',
    type: 'EDUCATION',
    title: 'Institut Teknologi Nasional Bandung',
    organization: 'Electrical Engineering',
    date: '22 November 2022 — 11 October 2026',
    description:
      'Bachelor’s degree in Electrical Engineering with a focus on electronics, embedded systems, control, and engineering applications.',
    meta: 'GPA 3.33 / 4.00',
  },

  {
    year: '2024',
    type: 'INTERNSHIP',
    title: 'PLC Programmer Intern',
    organization: 'PT. ReneconSys',
    date: '23 October 2024 — 23 November 2024',
    description:
      'Worked on PLC-based automation and industrial control system development through programming, simulation, and system implementation.',
  },

  {
    year: '2019 — 2022',
    type: 'EDUCATION',
    title: 'SMK Negeri 4 Bandung',
    organization: 'Audio Video Engineering',
    date: '2019 — 2022',
    description:
      'Vocational education focused on electronics, audio-video systems, practical engineering, and technical skills.',
  },

  {
    year: '2021',
    type: 'INTERNSHIP',
    title: 'Engineering Electrical Panel Intern',
    organization: 'PT. AEMCO Persada Nusantara',
    date: 'April 2021 — August 2021',
    description:
      'Gained practical experience in electrical panel engineering, system preparation, and industrial electrical work.',
  },
];

const aboutPhotos = Array.from(
  { length: 5 },
  (_, i) => `/Esa_${i + 1}.jpeg`
);

export default function Home(){
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('');
  const [aboutPhoto, setAboutPhoto] = useState(0);
  const [darkMode, setDarkMode] = useState(true);
  const [projectIndex, setProjectIndex] = useState(0);
  function nextPhoto() {
  setAboutPhoto((current) =>
    (current + 1) % aboutPhotos.length
    );
  }

  function prevPhoto() {
  setAboutPhoto((current) =>
    (current - 1 + aboutPhotos.length) % aboutPhotos.length
    );
  }
  function nextProject() {
  setProjectIndex((current) =>
    (current + 1) % projects.length
  );
}

function prevProject() {
  setProjectIndex((current) =>
    (current - 1 + projects.length) % projects.length
  );
}


  async function submit(e) {
  e.preventDefault();

  setStatus('Sending...');

  const formElement = e.currentTarget;
  const form = new FormData(formElement);

  try {
    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Object.fromEntries(form)),
    });

    setStatus(
      res.ok
        ? 'Message received. I will get back to you.'
        : 'Something went wrong. Please try again.'
    );

    if (res.ok) {
      formElement.reset();
    }
  } catch (error) {
    console.error('Contact form error:', error);
    setStatus('Something went wrong. Please try again.');
  }
}
  return (
    <main className={darkMode ? 'theme-dark' : 'theme-light'}>

      <nav className="nav">

  {/* BRAND */}
  <a className="brand" href="#top">

    <span className="brand-logo">
      <img src="/E_Logo.png" alt="" />
    </span>

    <span className="brand-name">
      ESA<span>.</span>
    </span>

  </a>


  {/* NAVIGATION */}
  <div className={open ? 'links open' : 'links'}>

    {[
      'About',
      'Work',
      'Skills',
      'Awards & Certificates',
      'Trainings',
      'Journey',
      'Contact'
    ].map(item => {

      const id = item
        .toLowerCase()
        .replace(/ & /g, '-')
        .replace(/\s+/g, '-');

      return (
        <a
          key={item}
          href={`#${id}`}
          onClick={() => setOpen(false)}
          className="nav-link"
        >
          <span>{item}</span>

          {/* Sticker muncul saat hover */}
          <span className="nav-sticker">
            <img src="/Stiker.png" alt="" />
          </span>

        </a>
      );

    })}

  </div>


  {/* MOBILE MENU */}
  <button
    className="menu"
    onClick={() => setOpen(!open)}
    aria-label="Toggle menu"
  >
    {open ? <X /> : <Menu />}
  </button>

</nav>

<section className="hero" id="top">
  <div className="orb orb1" />
  <div className="orb orb2" />
  <div className="hero-grid" />

  {/* Profile Photo */}
  <div className="hero-profile">
    <div className="profile-glow" />

    <img
      src="/esa-profile.jpeg"
      alt="Esa Fallah Royani"
    />
  </div>

  {/* Hero Content */}
  <div className="hero-content">
    <div className="eyebrow">
      <span className="dot" />
      Electrical Engineer · Builder · Researcher
    </div>

    <h1>
      Esa Fallah
      <br />
      <span>Royani.</span>
    </h1>

    <div className="hero-role">
      Electrical Engineer
    </div>

    <p className="hero-university">
      Institut Teknologi Nasional Bandung
    </p>

    <p className="lead">
      I build systems that turn ideas into something real.
    </p>

    <div className="actions">
      <a className="btn primary" href="#work">
        Explore my work <ArrowUpRight size={17} />
      </a>

      <a className="btn ghost" href="#contact">
        Let’s talk
      </a>
    </div>
  </div>  
  <div className="scroll">
    SCROLL <span>↓</span>
  </div>
</section>

    <section className="marquee">
  <div className="marquee-track">
    <div className="marquee-content">
      <span>ELECTRICAL ENGINEERING</span>
      <b>✦</b>

      <span>POWER ELECTRONICS</span>
      <b>✦</b>

      <span>EMBEDDED SYSTEMS</span>
      <b>✦</b>

      <span>CONTROL SYSTEMS</span>
      <b>✦</b>

      <span>RESEARCH</span>
      <b>✦</b>

      <span>IoT</span>
      <b>✦</b>

      <span>PLC ENGINEERING</span>
      <b>✦</b>
    </div>

    {/* Duplicate untuk membuat loop tanpa putus */}
    <div className="marquee-content" aria-hidden="true">
      <span>ELECTRICAL ENGINEERING</span>
      <b>✦</b>

      <span>POWER ELECTRONICS</span>
      <b>✦</b>

      <span>EMBEDDED SYSTEMS</span>
      <b>✦</b>

      <span>CONTROL SYSTEMS</span>
      <b>✦</b>

      <span>RESEARCH</span>
      <b>✦</b>

      <span>IoT</span>
      <b>✦</b>

      <span>PLC ENGINEERING</span>
      <b>✦</b>
    </div>
  </div>
</section>

    <section className="section about" id="about">

  <div className="section-label">
    01 / ABOUT
  </div>

  <div className="about-content">

    {/* TEXT */}
    <div className="about-text">

      <h2>
        Engineer by discipline.
        <br />
        <span>Creator by curiosity.</span>
      </h2>

      <p>
        I’m Esa, an Electrical Engineering graduate interested in
        technology that connects hardware, software and real-world
        problems. This portfolio is designed to evolve with me —
        from academic research to professional projects and experiments.
      </p>

      <a className="textlink" href="#contact">
        Get to know me
        <ArrowUpRight size={16} />
      </a>

    </div>


    {/* PHOTO SLIDER */}
    <div className="about-gallery">

      <div className="about-photo-frame">

        <img
          key={aboutPhoto}
          src={aboutPhotos[aboutPhoto]}
          alt={`Esa Fallah Royani - photo ${aboutPhoto + 1}`}
          className="about-photo"
        />

        <div className="photo-glow" />

      </div>


      {/* CONTROLS */}
      <div className="about-gallery-controls">

        <button
          className="gallery-button"
          onClick={prevPhoto}
          aria-label="Previous photo"
        >
          <ChevronLeft size={18} />
        </button>

        <div className="gallery-counter">
          <span>
            {String(aboutPhoto + 1).padStart(2, '0')}
          </span>

          <div className="gallery-line" />

          <span>
            {String(aboutPhotos.length).padStart(2, '0')}
          </span>
        </div>

        <button
          className="gallery-button"
          onClick={nextPhoto}
          aria-label="Next photo"
        >
          <ChevronRight size={18} />
        </button>

      </div>

    </div>

  </div>

</section>

<section className="section work" id="work">

  <div className="section-head">
    <div>
      <div className="section-label">
        02 / SELECTED WORK
      </div>

      <h2>
        Things I’ve <span>built.</span>
      </h2>
    </div>

    <p>
      A selection of projects, experiments, and systems
      I have designed, simulated, and developed.
    </p>
  </div>


 <div className="projects-carousel">

  <button
    className="project-arrow project-arrow-left"
    onClick={prevProject}
    aria-label="Previous project"
  >
    <ChevronLeft size={20} />
  </button>

  <div className="projects-track">

    {[0, 1, 2].map((offset) => {
      const index = (projectIndex + offset) % projects.length;
      const project = projects[index];

      return (
        <article
          className={`project-card ${
            offset === 1 ? 'project-card-active' : ''
          }`}
          key={`${project.n}-${offset}`}
        >

          <div className="project-card-top">
            <span className="project-number">
              {project.n}
            </span>

            <span className="project-category">
              {project.tag}
            </span>

            <ArrowUpRight size={18} />
          </div>

          <div className="project-image-wrapper">
            <img
              src={project.image}
              alt={project.title}
              className="project-main-image"
            />
          </div>

          <div className="project-card-content">

            <div className="project-meta">
              <span>{project.date}</span>
              <span>{project.location}</span>
            </div>

            <h3>{project.title}</h3>

            <p className="project-description">
              {project.text}
            </p>

            <div className="project-tools">
              {project.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>

            <div className="project-card-footer">

              <span className="project-counter">
                {project.n}
                {' / '}
                {String(projects.length).padStart(2, '0')}
              </span>

              <a
                href={project.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="project-view"
              >
                View project
                <ArrowUpRight size={16} />
              </a>

            </div>

          </div>

        </article>
      );
    })}

  </div>

  <button
    className="project-arrow project-arrow-right"
    onClick={nextProject}
    aria-label="Next project"
  >
    <ChevronRight size={20} />
  </button>

</div>

</section>

<section className="section skills" id="skills">

  <div className="section-label">
    03 / EXPERTISE
  </div>

  {/* =====================================================
      SKILLS HERO
  ===================================================== */}

  <div className="skills-hero">

    {/* LEFT : TEXT */}
    <div className="skills-intro">

      <h2>
        Tools I use to
        <br />
        <span>make things work.</span>
      </h2>

      <p>
        From circuit design and simulation to embedded development,
        data analysis, and technical documentation — these are the
        tools I use to turn ideas into working systems.
      </p>

      <div className="skills-tools-heading">
        <span className="skills-note-dot" />
        <span>Tools I work with</span>
      </div>

    </div>


    {/* RIGHT : VIDEO */}
    <div className="skills-video">

      <video
        src="/Matanaga.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="skills-video-element"
      />

      <div className="skills-video-overlay" />

    </div>

  </div>


  {/* =====================================================
      TOOLS MARQUEE
  ===================================================== */}

  <div className="skills-marquee">

    <div className="skills-track">

      {/* FIRST SET */}
      <div className="skills-set">

        {skills.map((skill, i) => (
          <div
            className="skill-card"
            key={`first-${skill.name}`}
          >

            <span className="skill-number">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="skill-icon-wrap">
              <img
                src={skill.image}
                alt={`${skill.name} icon`}
                className="skill-icon"
              />
            </div>

            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
            </div>

            <div className="skill-arrow">
              ↗
            </div>

          </div>
        ))}

      </div>


      {/* SECOND SET */}
      <div
        className="skills-set"
        aria-hidden="true"
      >

        {skills.map((skill, i) => (
          <div
            className="skill-card"
            key={`second-${skill.name}`}
          >

            <span className="skill-number">
              {String(i + 1).padStart(2, '0')}
            </span>

            <div className="skill-icon-wrap">
              <img
                src={skill.image}
                alt=""
                className="skill-icon"
              />
            </div>

            <div className="skill-info">
              <h3>{skill.name}</h3>
              <span>{skill.category}</span>
            </div>

            <div className="skill-arrow">
              ↗
            </div>

          </div>
        ))}

      </div>

    </div>

  </div>

</section>

{/* =========================================================
    04 / AWARDS & CERTIFICATES
========================================================= */}

   <section className="section awards" id="awards-certificates">

  <div className="section-label">
    04 / AWARDS & CERTIFICATES
  </div>

  <div className="section-head">

    <div>
      <h2>
        Milestones worth
        <br />
        <span>remembering.</span>
      </h2>
    </div>

    <p>
      A collection of awards, certifications, and
      achievements from my academic journey,
      competitions, and professional development.
    </p>

  </div>


  <div className="awards-archive">

    <div className="awards-archive-header">
      <span>AWARDS ARCHIVE</span>

      <span>
        {String(certificates.length).padStart(2, '0')} RECORDS
      </span>
    </div>


    <div className="certificate-list">

      {certificates.map((certificate) => (
        <div
          className="certificate-row"
          key={certificate.n}
        >

          <div className="certificate-number">
            {certificate.n}
          </div>


          <div className="certificate-main">

            <h3>
              {certificate.title}
            </h3>

            <span>
              {certificate.category}
            </span>

          </div>


          <a
            href={certificate.file}
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-view"
          >
            View certificate
            <ArrowUpRight size={15} />
          </a>

        </div>
      ))}

    </div>

  </div>

</section>

    {/* =========================================================
    05 / TRAININGS
========================================================= */}

<section className="section trainings" id="trainings">

  <div className="section-label">
    05 / TRAININGS
  </div>

  <div className="trainings-head">

    <div>
      <h2>
        Always learning.
        <br />
        <span>Always evolving.</span>
      </h2>
    </div>

    <p>
      Workshops, technical training, competency programs,
      and learning experiences that have helped me develop
      practical engineering skills.
    </p>

  </div>


  <div className="training-archive">

    <div className="training-archive-header">
      <span>LEARNING ARCHIVE</span>

      <span>
        {String(trainings.length).padStart(2, '0')} RECORDS
      </span>
    </div>


    <div className="training-list">

      {trainings.map((training) => (
        <div
          className="training-row"
          key={training.n}
        >

          <div className="training-number">
            {training.n}
          </div>


          <div className="training-main">

            <h3>
              {training.title}
            </h3>

            <div className="training-meta">
              <span>{training.subtitle}</span>
              <span>{training.category}</span>
            </div>

          </div>


          <a
            href={training.file}
            target="_blank"
            rel="noopener noreferrer"
            className="training-view"
          >
            View certificate
            <ArrowUpRight size={15} />
          </a>

        </div>
      ))}

    </div>

  </div>

</section>

{/* =========================================================
    06 / JOURNEY
========================================================= */}

<section className="section journey" id="journey">

  <div className="section-label">
    06 / JOURNEY
  </div>

  <div className="journey-heading">

    <div>
      <h2>
        The path that
        <br />
        <span>shaped me.</span>
      </h2>
    </div>

    <p>
      A timeline of education, internships, research,
      and experiences that have shaped my journey
      as an electrical engineering student and builder.
    </p>

  </div>


  <div className="journey-timeline">

    {journey.map((item, index) => (
      <article
        className="journey-item"
        key={`${item.title}-${index}`}
      >

        <div className="journey-marker">

          <span className="journey-dot" />

          {index !== journey.length - 1 && (
            <span className="journey-line" />
          )}

        </div>


        <div className="journey-content">

          <div className="journey-top">

            <span className="journey-year">
              {item.year}
            </span>

            <span className="journey-type">
              {item.type}
            </span>

          </div>


          <h3>
            {item.title}
          </h3>


          <div className="journey-organization">
            {item.organization}
          </div>


          <div className="journey-date">
            {item.date}
          </div>


          <p>
            {item.description}
          </p>


          {item.meta && (
            <span className="journey-meta">
              {item.meta}
            </span>
          )}

        </div>

      </article>
    ))}

  </div>

</section>

    <section className="contact section" id="contact">

  <div className="contact-card">

    <div>

      <div className="section-label">
        07 / CONTACT
      </div>

      <h2>
        Have an idea?
        <br />
        <span>Let’s make it real.</span>
      </h2>

      <p>
        Send a message. The backend API is already wired into
        this starter, ready to connect to email or a database
        when you choose the production setup.
      </p>

      <div className="contact-socials">

        <a
          href="https://www.linkedin.com/in/esa-fallah-royani-2b32b0264"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          LinkedIn
          <Linkedin size={15} />
        </a>

        <a
          href="https://www.instagram.com/fallhh__"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          Instagram
          <Instagram size={15} />
        </a>

      </div>

    </div>


    <form onSubmit={submit}>

      <input
        name="name"
        placeholder="Your name"
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email address"
        required
      />

      <textarea
        name="message"
        placeholder="Tell me a little about your idea..."
        rows="5"
        required
      />

      <button
        className="btn primary"
        type="submit"
      >
        Send message
        <ArrowUpRight size={17} />
      </button>

      {status && (
        <small>{status}</small>
      )}

    </form>

  </div>

</section>



    <footer><div className="brand">ESA<span>.</span></div><p>Built with intention · 2026</p><div>Electrical Engineering × Technology</div></footer>
    </main>
  );  
}
