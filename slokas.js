/**
 * slokas.js — Sloka Data with Audio & Category Colors
 *
 * Each sloka:
 *   id       : unique ID
 *   title    : Telugu title
 *   titleEn  : English subtitle
 *   category : category group
 *   icon     : emoji
 *   color    : CSS gradient var for card accent
 *   pages    : image paths array
 *   audio    : TTS audio file path
 */

const SLOKAS = [

  // ══ శివ స్తోత్రాలు ════════════════════════════════
  {
    id: "ardhanarishwara",
    title: "అర్ధనారీశ్వర స్తోత్రమ్",
    titleEn: "Ardhanarishwara Stotram",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_01.jpg"],
    audio: "audio/01-ardhanarishwara.mp3"
  },
  {
    id: "lingashtakam",
    title: "లింగాష్టకమ్",
    titleEn: "Lingashtakam",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_19.jpg", "slokas/pages/page_16.jpg"],
    audio: "audio/02-lingashtakam.mp3"
  },
  {
    id: "shiva-mangalashtakam",
    title: "శివ మంగళాష్టకమ్",
    titleEn: "Shiva Mangalashtakam",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_16.jpg"],
    audio: "audio/03-shiva-mangalashtakam.mp3"
  },
  {
    id: "shiva-panchakshari",
    title: "శ్రీ శివపంచాక్షరీ స్తోత్రమ్",
    titleEn: "Shiva Panchakshari Stotram",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_22.jpg"],
    audio: "audio/04-shiva-panchakshari.mp3"
  },
  {
    id: "shivashtakam",
    title: "శివాష్టకమ్",
    titleEn: "Shivashtakam",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_22.jpg"],
    audio: "audio/05-shivashtakam.mp3"
  },
  {
    id: "maha-mrityunjaya",
    title: "మృత్యుంజయ మహామంత్రము",
    titleEn: "Maha Mrityunjaya Mantra",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_22.jpg"],
    audio: "audio/06-maha-mrityunjaya.mp3"
  },
  {
    id: "bilvashtakam",
    title: "బిల్వాష్టకమ్",
    titleEn: "Bilvashtakam",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_19.jpg"],
    audio: "audio/07-bilvashtakam.mp3"
  },
  {
    id: "dvadasha-jyotirlinga",
    title: "ద్వాదశ జ్యోతిర్లింగ స్తోత్రము",
    titleEn: "Dvadasha Jyotirlinga Stotram",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_21.jpg"],
    audio: "audio/08-dvadasha-jyotirlinga.mp3"
  },
  {
    id: "rudra-kavacham",
    title: "రుద్రకవచమ్",
    titleEn: "Rudra Kavacham",
    category: "శివ స్తోత్రాలు",
    icon: "🔱", color: "--grad-purple",
    pages: ["slokas/pages/page_05.jpg", "slokas/pages/page_06.jpg"],
    audio: "audio/09-rudra-kavacham.mp3"
  },

  // ══ విష్ణు / వేంకటేశ్వర స్తోత్రాలు ═════════════════
  {
    id: "govinda-namamulu",
    title: "శ్రీవేంకటేశ్వర గోవింద నామములు",
    titleEn: "Govinda Namamulu",
    category: "విష్ణు స్తోత్రాలు",
    icon: "🙏", color: "--grad-teal",
    pages: ["slokas/pages/page_04.jpg"],
    audio: "audio/10-govinda-namamulu.mp3"
  },
  {
    id: "venkateshwara-vajra-kavacham",
    title: "శ్రీ వేంకటేశ్వర వజ్రకవచ స్తోత్రమ్",
    titleEn: "Venkateswara Vajra Kavacha Stotram",
    category: "విష్ణు స్తోత్రాలు",
    icon: "🙏", color: "--grad-teal",
    pages: ["slokas/pages/page_06.jpg"],
    audio: "audio/11-venkateshwara-vajra-kavacham.mp3"
  },
  {
    id: "krishnashtakam",
    title: "శ్రీకృష్ణాష్టకమ్",
    titleEn: "Sri Krishnashtakam",
    category: "విష్ణు స్తోత్రాలు",
    icon: "🦚", color: "--grad-teal",
    pages: ["slokas/pages/page_10.jpg"],
    audio: "audio/12-krishnashtakam.mp3"
  },

  // ══ హనుమాన్ స్తోత్రాలు ══════════════════════════════
  {
    id: "hanuman-chalisa",
    title: "శ్రీ హనుమాన్ చాలీసా",
    titleEn: "Sri Hanuman Chalisa",
    category: "హనుమాన్ స్తోత్రాలు",
    icon: "🐒", color: "--grad-saffron",
    pages: ["slokas/pages/page_17.jpg", "slokas/pages/page_18.jpg"],
    audio: "audio/13-hanuman-chalisa.mp3"
  },

  // ══ సాయిబాబా స్తోత్రాలు ════════════════════════════
  {
    id: "sai-baba-chalisa",
    title: "శ్రీ సాయిబాబా చాలీసా",
    titleEn: "Sri Sai Baba Chalisa",
    category: "సాయి స్తోత్రాలు",
    icon: "🕯️", color: "--grad-gold",
    pages: ["slokas/pages/page_09.jpg", "slokas/pages/page_10.jpg"],
    audio: "audio/14-sai-baba-chalisa.mp3"
  },

  // ══ సుబ్రహ్మణ్య / దత్తాత్రేయ స్తోత్రాలు ══════════
  {
    id: "subramanya-karavalamba",
    title: "శ్రీ సుబ్రహ్మణ్య కరావలంబ స్తోత్రమ్",
    titleEn: "Subramanya Karavalamba Stotram",
    category: "సుబ్రహ్మణ్య స్తోత్రాలు",
    icon: "🦚", color: "--grad-green",
    pages: ["slokas/pages/page_11.jpg"],
    audio: "audio/15-subramanya-karavalamba.mp3"
  },
  {
    id: "dattastavamu",
    title: "శ్రీ దత్తస్తవము",
    titleEn: "Sri Dattastavamu",
    category: "సుబ్రహ్మణ్య స్తోత్రాలు",
    icon: "🙏", color: "--grad-green",
    pages: ["slokas/pages/page_11.jpg"],
    audio: "audio/16-dattastavamu.mp3"
  },

  // ══ సరస్వతి స్తోత్రాలు ══════════════════════════════
  {
    id: "saraswati-dvadasha-nama",
    title: "శ్రీ సరస్వతీ ద్వాదశనామ స్తోత్రమ్",
    titleEn: "Saraswati Dvadasha Nama Stotram",
    category: "సరస్వతి స్తోత్రాలు",
    icon: "🎶", color: "--grad-teal",
    pages: ["slokas/pages/page_12.jpg"],
    audio: "audio/17-saraswati-dvadasha-nama.mp3"
  },

  // ══ సూర్య / నవగ్రహ స్తోత్రాలు ══════════════════════
  {
    id: "aditya-hrudayam",
    title: "ఆదిత్య హృదయమ్",
    titleEn: "Aditya Hrudayam",
    category: "సూర్య స్తోత్రాలు",
    icon: "☀️", color: "--grad-gold",
    pages: ["slokas/pages/page_13.jpg"],
    audio: "audio/18-aditya-hrudayam.mp3"
  },
  {
    id: "suryashtakam",
    title: "శ్రీ సూర్యాష్టకము",
    titleEn: "Sri Suryashtakam",
    category: "సూర్య స్తోత్రాలు",
    icon: "☀️", color: "--grad-gold",
    pages: ["slokas/pages/page_13.jpg"],
    audio: "audio/19-suryashtakam.mp3"
  },
  {
    id: "shani-stotram",
    title: "దశరథ ప్రోక్త శనిస్తోత్రము",
    titleEn: "Dasaratha Prokta Shani Stotram",
    category: "నవగ్రహ స్తోత్రాలు",
    icon: "🪐", color: "--grad-purple",
    pages: ["slokas/pages/page_14.jpg"],
    audio: "audio/20-shani-stotram.mp3"
  },
  {
    id: "navagraha-stotram",
    title: "నవగ్రహస్తోత్రమ్",
    titleEn: "Navagraha Stotram",
    category: "నవగ్రహ స్తోత్రాలు",
    icon: "🪐", color: "--grad-purple",
    pages: ["slokas/pages/page_14.jpg", "slokas/pages/page_15.jpg"],
    audio: "audio/21-navagraha-stotram.mp3"
  },
  {
    id: "navagraha-gayatri",
    title: "నవగ్రహ గాయత్రి మంత్రములు",
    titleEn: "Navagraha Gayatri Mantras",
    category: "నవగ్రహ స్తోత్రాలు",
    icon: "🪐", color: "--grad-purple",
    pages: ["slokas/pages/page_25.jpg"],
    audio: "audio/22-navagraha-gayatri.mp3"
  },

  // ══ దేవి స్తోత్రాలు ══════════════════════════════════
  {
    id: "mangala-chandika",
    title: "శ్రీ మంగళ చండికా స్తోత్రం",
    titleEn: "Sri Mangala Chandika Stotram",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_02.jpg"],
    audio: "audio/23-mangala-chandika.mp3"
  },
  {
    id: "vasavi-kanyakashtakam",
    title: "వాసవీ కన్యకాష్టకము",
    titleEn: "Vasavi Kanyakashtakam",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_24.jpg"],
    audio: "audio/24-vasavi-kanyakashtakam.mp3"
  },
  {
    id: "navadurga-stutih",
    title: "నవదుర్గ స్తుతిః",
    titleEn: "Navadurga Stutih",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_24.jpg"],
    audio: "audio/25-navadurga-stutih.mp3"
  },
  {
    id: "durgashtakam",
    title: "శ్రీ దుర్గాష్టకమ్",
    titleEn: "Sri Durgashtakam",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_25.jpg"],
    audio: "audio/26-durgashtakam.mp3"
  },
  {
    id: "devi-stutih",
    title: "దేవీస్తుతి",
    titleEn: "Devi Stutih",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_26.jpg"],
    audio: "audio/27-devi-stutih.mp3"
  },
  {
    id: "durga-dvatrimshan-nama",
    title: "శ్రీ దుర్గా ద్వాత్రింశన్నామ మాలాః",
    titleEn: "Sri Durga Dvatrimshan Nama Mala",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_27.jpg"],
    audio: "audio/28-durga-dvatrimshan-nama.mp3"
  },
  {
    id: "ashtadasha-peethamula",
    title: "అష్టాదశ పీఠముల ప్రార్థన",
    titleEn: "Ashtadasha Peethamula Prarthana",
    category: "దేవి స్తోత్రాలు",
    icon: "🪷", color: "--grad-rose",
    pages: ["slokas/pages/page_23.jpg"],
    audio: "audio/29-ashtadasha-peethamula.mp3"
  },

  // ══ లక్ష్మి స్తోత్రాలు ════════════════════════════════
  {
    id: "mahalakshmi-ashtakam",
    title: "శ్రీ మహాలక్ష్మ్యష్టకమ్",
    titleEn: "Sri Mahalakshmi Ashtakam",
    category: "లక్ష్మి స్తోత్రాలు",
    icon: "🌸", color: "--grad-saffron",
    pages: ["slokas/pages/page_28.jpg"],
    audio: "audio/30-mahalakshmi-ashtakam.mp3"
  },
  {
    id: "ashtalakshmi-stotram",
    title: "అష్టలక్ష్మీ స్తోత్రమ్",
    titleEn: "Ashtalakshmi Stotram",
    category: "లక్ష్మి స్తోత్రాలు",
    icon: "🌸", color: "--grad-saffron",
    pages: ["slokas/pages/page_29.jpg"],
    audio: "audio/31-ashtalakshmi-stotram.mp3"
  },
  {
    id: "lakshmi-ashtottara",
    title: "శ్రీలక్ష్మీ అష్టోత్తర శతనామ స్తోత్రమ్",
    titleEn: "Sri Lakshmi Ashtottara Shatanama Stotram",
    category: "లక్ష్మి స్తోత్రాలు",
    icon: "🌸", color: "--grad-saffron",
    pages: ["slokas/pages/page_30.jpg"],
    audio: "audio/32-lakshmi-ashtottara.mp3"
  },

  // ══ ఇతర స్తోత్రాలు ════════════════════════════════════
  {
    id: "kartaviryarjuna",
    title: "కార్తవీర్యార్జున స్తోత్రమ్",
    titleEn: "Kartaviryarjuna Stotram",
    category: "ఇతర స్తోత్రాలు",
    icon: "⚔️", color: "--grad-green",
    pages: ["slokas/pages/page_02.jpg"],
    audio: "audio/33-kartaviryarjuna.mp3"
  },
  {
    id: "go-mahatmyam",
    title: "గోమహాత్మ్యము - గో ప్రార్థన",
    titleEn: "Go Mahatmyamu",
    category: "ఇతర స్తోత్రాలు",
    icon: "🐄", color: "--grad-green",
    pages: ["slokas/pages/page_03.jpg"],
    audio: "audio/34-go-mahatmyam.mp3"
  },
  {
    id: "mani-dweepa-varnam",
    title: "మణిద్వీప వర్ణన",
    titleEn: "Mani Dweepa Varnana",
    category: "ఇతర స్తోత్రాలు",
    icon: "💎", color: "--grad-teal",
    pages: ["slokas/pages/page_07.jpg", "slokas/pages/page_08.jpg"],
    audio: "audio/35-mani-dweepa-varnam.mp3"
  },
];
