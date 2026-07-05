import os
import re

slokas_file = r'C:\Users\saich\Downloads\slokas 1\slokas.js'
audio_dir = r'C:\Users\saich\Downloads\slokas 1\audio'

# Map of number -> simple english filename
ENGLISH_NAMES = {
    '01': '01-ardhanarishwara',
    '02': '02-lingashtakam',
    '03': '03-shiva-mangalashtakam',
    '04': '04-shiva-panchakshari',
    '05': '05-shivashtakam',
    '06': '06-maha-mrityunjaya',
    '07': '07-bilvashtakam',
    '08': '08-dvadasha-jyotirlinga',
    '09': '09-rudra-kavacham',
    '10': '10-govinda-namamulu',
    '11': '11-venkateshwara-vajra-kavacham',
    '12': '12-krishnashtakam',
    '13': '13-hanuman-chalisa',
    '14': '14-sai-baba-chalisa',
    '15': '15-subramanya-karavalamba',
    '16': '16-dattastavamu',
    '17': '17-saraswati-dvadasha-nama',
    '18': '18-aditya-hrudayam',
    '19': '19-suryashtakam',
    '20': '20-shani-stotram',
    '21': '21-navagraha-stotram',
    '22': '22-navagraha-gayatri',
    '23': '23-mangala-chandika',
    '24': '24-vasavi-kanyakashtakam',
    '25': '25-navadurga-stutih',
    '26': '26-durgashtakam',
    '27': '27-devi-stutih',
    '28': '28-durga-dvatrimshan-nama',
    '29': '29-ashtadasha-peethamula',
    '30': '30-mahalakshmi-ashtakam',
    '31': '31-ashtalakshmi-stotram',
    '32': '32-lakshmi-ashtottara',
    '33': '33-kartaviryarjuna',
    '34': '34-go-mahatmyam',
    '35': '35-mani-dweepa-varnam',
}

# Rename all files in audio dir back to english names
for f in os.listdir(audio_dir):
    if not f.endswith('.mp3'):
        continue
    # Extract number prefix
    num_match = re.match(r'(\d+)', f)
    if num_match:
        num = num_match.group(1)
        if num in ENGLISH_NAMES:
            new_name = ENGLISH_NAMES[num] + '.mp3'
            old_path = os.path.join(audio_dir, f)
            new_path = os.path.join(audio_dir, new_name)
            if old_path != new_path and os.path.exists(old_path):
                try:
                    os.rename(old_path, new_path)
                except:
                    pass

# Update slokas.js - replace all audio paths
with open(slokas_file, 'r', encoding='utf-8') as fh:
    content = fh.read()

# Replace audio paths using regex
for num, eng_name in ENGLISH_NAMES.items():
    # Match any audio path with this number prefix
    pattern = r'audio:\s*"audio/[^"]*"'
    # We need to be more specific - match by the number
    old_pattern = rf'audio:\s*"audio/{num}[^"]*\.mp3"'
    new_value = f'audio: "audio/{eng_name}.mp3"'
    content = re.sub(old_pattern, new_value, content)

with open(slokas_file, 'w', encoding='utf-8') as fh:
    fh.write(content)
