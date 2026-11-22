// Chargé dans le <head> de accueil.html, avant le rendu (évite le flash de thème).
// Fichier séparé : la politique de sécurité du site (CSP « script-src 'self' ») bloque les scripts écrits dans la page.
document.documentElement.classList.add('js');
try { var t = localStorage.getItem('lb-theme'); if (t) document.documentElement.dataset.theme = t; } catch (e) {}
