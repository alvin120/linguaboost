// Applique le thème clair/sombre choisi avant l'affichage (évite un flash).
try{var t=localStorage.getItem('lb-theme');if(t)document.documentElement.dataset.theme=t;}catch(e){}
