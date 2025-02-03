/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Active l'export statique
    images: {
      unoptimized: true, // Désactive l'optimisation des images (Next.js Image ne fonctionne pas en statique)
    },
    trailingSlash: true, // Ajoute un '/' à la fin des URLs pour éviter les erreurs 404
  };

module.exports = nextConfig
