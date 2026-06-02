import fs from 'fs';
import path from 'path';

function walkDir(dir, callback) {
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
    });
}

const serviceDir = 'e:/Techmapperz_site/development/app/service';

walkDir(serviceDir, function(filePath) {
    if (filePath.endsWith('page.js') || filePath.endsWith('page.jsx')) {
        let content = fs.readFileSync(filePath, 'utf8');
        let originalContent = content;

        // Sub-service pages h1: className="text-4xl font-bold max-sm:text-2xl"
        // Also other variations
        content = content.replace(
            /className=["']([^"']*text-[2-6]xl[^"']*font-bold[^"']*)["']/g,
            (match, p1) => {
                if (p1.includes('lg:text-[45px]')) return match;
                if (!match.includes('leading-tight') && !match.includes('leading-[1') && !match.includes('max-sm:text-2xl')) {
                    // avoid replacing random h1s that aren't heroes if any, but since they asked for all hero h1s, let's just focus on typical hero classes
                }
                // If it's the hero h1, it usually is the first h1 or has text-4xl/5xl
                if (p1.includes('text-4xl') || p1.includes('text-5xl') || p1.includes('text-6xl')) {
                     return `className="text-4xl lg:text-[45px] max-sm:text-4xl font-bold text-white max-w-[900px] leading-[1.2]"`;
                }
                return match;
            }
        );

        // Sub-service pages p: className="text-xl text-center max-sm:text-[16px]  text-gray-400"
        // Let's just find the <p> tag that follows the <h1> or has breadcrumbs
        content = content.replace(
            /<p className=["']([^"']+)["']>([\s\S]*?)<\/p>/g,
            (match, p1, p2) => {
                if (p2.includes('<Link href="/') || p1.includes('text-gray-300 max-w-2xl capitalize') || p1.includes('text-xl text-center max-sm:text-[16px]')) {
                    // Ensure we don't overwrite text-center if it has it, or maybe we just replace the font size classes
                    let newClass = p1.replace(/text-xl|text-lg|max-sm:text-\[[^\]]+\]|max-sm:text-[a-z0-9]+/g, '').replace(/\s+/g, ' ').trim();
                    if (!newClass.includes('text-lg')) newClass += ' text-lg';
                    if (!newClass.includes('lg:text-[17px]')) newClass += ' lg:text-[17px]';
                    return `<p className="${newClass}">${p2}</p>`;
                }
                return match;
            }
        );

        if (content !== originalContent) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log(`Updated: ${filePath}`);
        }
    }
});
console.log('Done.');
