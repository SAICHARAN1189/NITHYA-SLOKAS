"""
generate_audio.py
Generates Telugu TTS audio for every sloka title using Microsoft Edge TTS.
Voice: te-IN-ShrutiNeural (Telugu female, natural quality)
"""

import asyncio
import edge_tts
import os

# All slokas with their titles (matches slokas.js order)
SLOKAS = [
    # శివ స్తోత్రాలు
    (1,  "అర్ధనారీశ్వర స్తోత్రమ్",             "ardhanarishwara"),
    (2,  "లింగాష్టకమ్",                          "lingashtakam"),
    (3,  "శివ మంగళాష్టకమ్",                      "shiva-mangalashtakam"),
    (4,  "శ్రీ శివపంచాక్షరీ స్తోత్రమ్",           "shiva-panchakshari"),
    (5,  "శివాష్టకమ్",                            "shivashtakam"),
    (6,  "మృత్యుంజయ మహామంత్రము",                "maha-mrityunjaya"),
    (7,  "బిల్వాష్టకమ్",                          "bilvashtakam"),
    (8,  "ద్వాదశ జ్యోతిర్లింగ స్తోత్రము",          "dvadasha-jyotirlinga"),
    (9,  "రుద్రకవచమ్",                            "rudra-kavacham"),
    # విష్ణు స్తోత్రాలు
    (10, "శ్రీవేంకటేశ్వర గోవింద నామములు",         "govinda-namamulu"),
    (11, "శ్రీ వేంకటేశ్వర వజ్రకవచ స్తోత్రమ్",     "venkateshwara-vajra-kavacham"),
    (12, "శ్రీకృష్ణాష్టకమ్",                       "krishnashtakam"),
    # హనుమాన్ స్తోత్రాలు
    (13, "శ్రీ హనుమాన్ చాలీసా",                  "hanuman-chalisa"),
    # సాయి స్తోత్రాలు
    (14, "శ్రీ సాయిబాబా చాలీసా",                 "sai-baba-chalisa"),
    # సుబ్రహ్మణ్య స్తోత్రాలు
    (15, "శ్రీ సుబ్రహ్మణ్య కరావలంబ స్తోత్రమ్",    "subramanya-karavalamba"),
    (16, "శ్రీ దత్తస్తవము",                        "dattastavamu"),
    # సరస్వతి స్తోత్రాలు
    (17, "శ్రీ సరస్వతీ ద్వాదశనామ స్తోత్రమ్",      "saraswati-dvadasha-nama"),
    # సూర్య స్తోత్రాలు
    (18, "ఆదిత్య హృదయమ్",                        "aditya-hrudayam"),
    (19, "శ్రీ సూర్యాష్టకము",                      "suryashtakam"),
    # నవగ్రహ స్తోత్రాలు
    (20, "దశరథ ప్రోక్త శనిస్తోత్రము",              "shani-stotram"),
    (21, "నవగ్రహస్తోత్రమ్",                        "navagraha-stotram"),
    (22, "నవగ్రహ గాయత్రి మంత్రములు",              "navagraha-gayatri"),
    # దేవి స్తోత్రాలు
    (23, "శ్రీ మంగళ చండికా స్తోత్రం",              "mangala-chandika"),
    (24, "వాసవీ కన్యకాష్టకము",                    "vasavi-kanyakashtakam"),
    (25, "నవదుర్గ స్తుతిః",                         "navadurga-stutih"),
    (26, "శ్రీ దుర్గాష్టకమ్",                       "durgashtakam"),
    (27, "దేవీస్తుతి",                              "devi-stutih"),
    (28, "శ్రీ దుర్గా ద్వాత్రింశన్నామ మాలాః",       "durga-dvatrimshan-nama"),
    (29, "అష్టాదశ పీఠముల ప్రార్థన",                "ashtadasha-peethamula"),
    # లక్ష్మి స్తోత్రాలు
    (30, "శ్రీ మహాలక్ష్మ్యష్టకమ్",                 "mahalakshmi-ashtakam"),
    (31, "అష్టలక్ష్మీ స్తోత్రమ్",                   "ashtalakshmi-stotram"),
    (32, "శ్రీలక్ష్మీ అష్టోత్తర శతనామ స్తోత్రమ్",   "lakshmi-ashtottara"),
    # ఇతర స్తోత్రాలు
    (33, "కార్తవీర్యార్జున స్తోత్రమ్",               "kartaviryarjuna"),
    (34, "గోమహాత్మ్యము",                           "go-mahatmyam"),
    (35, "మణిద్వీప వర్ణన",                         "mani-dweepa-varnam"),
]

VOICE   = "te-IN-ShrutiNeural"   # Telugu female voice
OUT_DIR = "audio"
os.makedirs(OUT_DIR, exist_ok=True)

async def generate(num, title, slug):
    out = os.path.join(OUT_DIR, f"{num:02d}-{slug}.mp3")
    if os.path.exists(out):
        print(f"  [skip] #{num:02d} already exists")
        return

    # Speak: bell pause + title announcement
    text = f"ఓం. {title}."
    try:
        communicate = edge_tts.Communicate(text, VOICE, rate="-10%", pitch="+0Hz")
        await communicate.save(out)
        print(f"  [ok]   #{num:02d} {title} → {out}")
    except Exception as e:
        print(f"  [err]  #{num:02d} {title}: {e}")

async def main():
    print(f"Generating {len(SLOKAS)} audio files with voice: {VOICE}\n")
    for num, title, slug in SLOKAS:
        await generate(num, title, slug)
    print(f"\nDone! Audio files saved to ./{OUT_DIR}/")

asyncio.run(main())
