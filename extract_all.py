import xml.etree.ElementTree as ET
import os

def extract_text(xml_path):
    if not os.path.exists(xml_path):
        return f"File not found: {xml_path}"
    
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
    bases = ["extract_expoguru", "extract_welho", "extract_aaheli", "extract_manusher"]
    all_content = []
    for base in bases:
        xml_path = os.path.join("D:\\Techmapperz_Nextjs\\techmapperz_redegine", base, "word", "document.xml")
        all_content.append(f"--- {base} ---")
        all_content.append(extract_text(xml_path))
        all_content.append("\n\n")
    
    with open('all_case_studies.txt', 'w', encoding='utf-8') as f:
        f.write('\n'.join(all_content))
    print("All content extracted to all_case_studies.txt")
