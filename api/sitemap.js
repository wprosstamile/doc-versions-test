import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');
  
  res.setHeader('Content-Type', 'application/xml');
  res.status(200).send(sitemapContent);
} 