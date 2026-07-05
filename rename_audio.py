import os
import re

slokas_file = r'C:\Users\saich\Downloads\slokas 1\slokas.js'
audio_dir = r'C:\Users\saich\Downloads\slokas 1\audio'

with open(slokas_file, 'r', encoding='utf-8') as f:
    content = f.read()

blocks = content.split('id: "')
new_content = blocks[0]

for block in blocks[1:]:
    title_match = re.search(r'title:\s*"([^"]+)"', block)
    audio_match = re.search(r'audio:\s*"([^"]+)"', block)
    
    if title_match and audio_match:
        title = title_match.group(1)
        audio_path = audio_match.group(1)
        
        filename = os.path.basename(audio_path)
        num_match = re.match(r'(\d+)-', filename)
        if num_match:
            num = num_match.group(1)
            safe_title = title.replace(':', '').replace('/', '').replace('\\', '').replace('?', '').replace('*', '').replace('"', '').replace('<', '').replace('>', '').replace('|', '')
            new_filename = f"{num} - {safe_title}.mp3"
            new_audio_path = f"audio/{new_filename}"
            
            old_full_path = os.path.join(audio_dir, filename)
            new_full_path = os.path.join(audio_dir, new_filename)
            
            if os.path.exists(old_full_path):
                try:
                    os.rename(old_full_path, new_full_path)
                except Exception as e:
                    pass
            
            block = block.replace(f'audio: "{audio_path}"', f'audio: "{new_audio_path}"')
            
    new_content += 'id: "' + block

with open(slokas_file, 'w', encoding='utf-8') as f:
    f.write(new_content)
