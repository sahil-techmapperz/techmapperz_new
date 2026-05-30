import xml.etree.ElementTree as ET
import os

xml_path = r'D:\Techmapperz_Nextjs\techmapperz_redegine\extract_docx\word\document.xml'

def extract_text(xml_path):
    if not os.path.exists(xml_path):
        return "File not found"
    
    tree = ET.parse(xml_path)
    root = tree.getroot()
    
    namespace = {'w': 'http://schemas.openxmlformats.org/wordprocessingml/2006/main'}
    
    text_lines = []
    for p in root.findall('.//w:p', namespace):
        line = []
        for t in p.findall('.//w:r/w:t', namespace):
            if t.text:
                line.append(t.text)
        if line:
            text_lines.append(''.join(line))
        else:
            text_lines.append('')
            
    return '\n'.join(text_lines)

if __name__ == "__main__":
    content = extract_text(xml_path)
    with open('whitespread_content.txt', 'w', encoding='utf-8') as f:
        f.write(content)
    print("Content extracted to whitespread_content.txt")
