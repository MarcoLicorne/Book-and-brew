// Data for vans and books
const vansData = {
    ivandry: {
        name: "Van Literary Ivandry",
        location: "Stationnement près du marché d'Ivandry",
        schedule: "Lundi-Vendredi: 7h-11h et 15h-18h",
        specialites: "Spécialités: Café arabica, croissants, romans contemporains"
    },
    antanimena: {
        name: "Van Bookish Antanimena", 
        location: "Avenue de l'Indépendance, près de la station Shell",
        schedule: "Lundi-Samedi: 6h30-12h et 14h-17h30",
        specialites: "Spécialités: Thé artisanal, muffins, littérature malgache"
    },
    antsakaviro: {
        name: "Van Reader's Corner",
        location: "Parking du centre commercial Antsakaviro",
        schedule: "Mardi-Samedi: 8h-12h et 16h-19h",
        specialites: "Spécialités: Chocolat chaud, cookies, BD et mangas"
    },
    analamahitsy: {
        name: "Van Coffee & Tales",
        location: "Rond-point Analamahitsy, côté église",
        schedule: "Lundi-Vendredi: 7h30-11h30 et 15h30-18h30",
        specialites: "Spécialités: Cappuccino, tartelettes, romans policiers"
    },
    ivato: {
        name: "Van Airport Books",
        location: "Parking aéroport d'Ivato, zone départ",
        schedule: "Tous les jours: 5h-10h et 14h-20h",
        specialites: "Spécialités: Espresso, sandwichs, guides de voyage"
    }
};

// Sample books data - 100 books distributed across 5 vans
const livresData = [
    // Van Ivandry (20 books)
    { titre: "L'Étranger", auteur: "Albert Camus", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "1984", auteur: "George Orwell", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "L'Alchimiste", auteur: "Paulo Coelho", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Notre-Dame de Paris", auteur: "Victor Hugo", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Le Comte de Monte-Cristo", auteur: "Alexandre Dumas", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Madame Bovary", auteur: "Gustave Flaubert", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Les Misérables", auteur: "Victor Hugo", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Le Rouge et le Noir", auteur: "Stendhal", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Germinal", auteur: "Émile Zola", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "L'Assommoir", auteur: "Émile Zola", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Bel-Ami", auteur: "Guy de Maupassant", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Le Père Goriot", auteur: "Honoré de Balzac", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Candide", auteur: "Voltaire", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Les Fleurs du mal", auteur: "Charles Baudelaire", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "À la recherche du temps perdu", auteur: "Marcel Proust", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Zadig", auteur: "Voltaire", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Le Cid", auteur: "Pierre Corneille", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Phèdre", auteur: "Jean Racine", van: "Van Literary Ivandry", quartier: "Ivandry" },
    { titre: "Tartuffe", auteur: "Molière", van: "Van Literary Ivandry", quartier: "Ivandry" },

    // Van Antanimena (20 books)
    { titre: "Ny Fitiavana", auteur: "Dox", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Lohataona", auteur: "Jean-Joseph Rabearivelo", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Sariaka", auteur: "Ny Avana Ramanantoanina", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Tantara ny Andriana", auteur: "Andrianampoinimerina", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Malagasy Rahavavy", auteur: "Clarisse Ratsifandrihamanana", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Cent ans de solitude", auteur: "Gabriel García Márquez", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Love in the Time of Cholera", auteur: "Gabriel García Márquez", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "One Hundred Years of Solitude", auteur: "Gabriel García Márquez", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "The Kite Runner", auteur: "Khaled Hosseini", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "A Thousand Splendid Suns", auteur: "Khaled Hosseini", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Life of Pi", auteur: "Yann Martel", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "The Book Thief", auteur: "Markus Zusak", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "The Shadow of the Wind", auteur: "Carlos Ruiz Zafón", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "The Name of the Rose", auteur: "Umberto Eco", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Blindness", auteur: "José Saramago", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "The God of Small Things", auteur: "Arundhati Roy", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Midnight's Children", auteur: "Salman Rushdie", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "The White Tiger", auteur: "Aravind Adiga", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Sacred Games", auteur: "Vikram Chandra", van: "Van Bookish Antanimena", quartier: "Antanimena" },
    { titre: "Train to Pakistan", auteur: "Khushwant Singh", van: "Van Bookish Antanimena", quartier: "Antanimena" },

    // Van Antsakaviro (20 books)
    { titre: "One Piece Vol. 1", auteur: "Eiichiro Oda", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Naruto Vol. 1", auteur: "Masashi Kishimoto", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Dragon Ball Vol. 1", auteur: "Akira Toriyama", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Attack on Titan Vol. 1", auteur: "Hajime Isayama", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Death Note Vol. 1", auteur: "Tsugumi Ohba", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Astérix le Gaulois", auteur: "René Goscinny", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Tintin au Tibet", auteur: "Hergé", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Lucky Luke: Ma Dalton", auteur: "Morris", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Gaston Lagaffe", auteur: "André Franquin", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Spirou et Fantasio", auteur: "André Franquin", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Les Schtroumpfs", auteur: "Peyo", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Thorgal", auteur: "Jean Van Hamme", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "XIII", auteur: "Jean Van Hamme", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Largo Winch", auteur: "Jean Van Hamme", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Blake et Mortimer", auteur: "Edgar P. Jacobs", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Michel Vaillant", auteur: "Jean Graton", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Boule et Bill", auteur: "Jean Roba", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Cédric", auteur: "Laudec", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Les Tuniques Bleues", auteur: "Raoul Cauvin", van: "Van Reader's Corner", quartier: "Antsakaviro" },
    { titre: "Blacksad", auteur: "Juan Díaz Canales", van: "Van Reader's Corner", quartier: "Antsakaviro" },

    // Van Analamahitsy (20 books)
    { titre: "Le Crime de l'Orient-Express", auteur: "Agatha Christie", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Dix Petits Nègres", auteur: "Agatha Christie", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Le Meurtre de Roger Ackroyd", auteur: "Agatha Christie", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Mort sur le Nil", auteur: "Agatha Christie", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "ABC contre Poirot", auteur: "Agatha Christie", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Sherlock Holmes: Une étude en rouge", auteur: "Arthur Conan Doyle", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Le Chien des Baskerville", auteur: "Arthur Conan Doyle", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Le Signe des quatre", auteur: "Arthur Conan Doyle", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "La Vallée de la peur", auteur: "Arthur Conan Doyle", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Les Aventures de Sherlock Holmes", auteur: "Arthur Conan Doyle", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Le Mystère de la chambre jaune", auteur: "Gaston Leroux", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Le Parfum de la dame en noir", auteur: "Gaston Leroux", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Fantôme de l'Opéra", auteur: "Gaston Leroux", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Maigret et le clochard", auteur: "Georges Simenon", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "L'Inspecteur Maigret", auteur: "Georges Simenon", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "The Girl with the Dragon Tattoo", auteur: "Stieg Larsson", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "Gone Girl", auteur: "Gillian Flynn", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "The Silent Patient", auteur: "Alex Michaelides", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "The Thursday Murder Club", auteur: "Richard Osman", van: "Van Coffee & Tales", quartier: "Analamahitsy" },
    { titre: "In the Woods", auteur: "Tana French", van: "Van Coffee & Tales", quartier: "Analamahitsy" },

    // Van Ivato (20 books)
    { titre: "Lonely Planet Madagascar", auteur: "Lonely Planet", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Guide du Routard Madagascar", auteur: "Philippe Gloaguen", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Madagascar Travel Guide", auteur: "Frommer's", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Into the Wild", auteur: "Jon Krakauer", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Wild", auteur: "Cheryl Strayed", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Eat, Pray, Love", auteur: "Elizabeth Gilbert", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "A Walk in the Woods", auteur: "Bill Bryson", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "The Beach", auteur: "Alex Garland", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "On the Road", auteur: "Jack Kerouac", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Travels with Charley", auteur: "John Steinbeck", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "The Art of Travel", auteur: "Alain de Botton", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Pico Iyer: The Global Soul", auteur: "Pico Iyer", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Dark Star Safari", auteur: "Paul Theroux", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "The Geography of Bliss", auteur: "Eric Weiner", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Turn Right at Machu Picchu", auteur: "Mark Adams", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "The Lost City of Z", auteur: "David Grann", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "River of Doubt", auteur: "Candice Millard", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Endurance", auteur: "Alfred Lansing", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "Shadow of the Silk Road", auteur: "Colin Thubron", van: "Van Airport Books", quartier: "Ivato" },
    { titre: "The Snow Leopard", auteur: "Peter Matthiessen", van: "Van Airport Books", quartier: "Ivato" }
];

// Popular books for display
const livresPopulaires = [
    { titre: "Le Petit Prince", auteur: "Antoine de Saint-Exupéry", van: "Van Literary Ivandry" },
    { titre: "L'Alchimiste", auteur: "Paulo Coelho", van: "Van Literary Ivandry" },
    { titre: "Ny Fitiavana", auteur: "Dox", van: "Van Bookish Antanimena" },
    { titre: "One Piece Vol. 1", auteur: "Eiichiro Oda", van: "Van Reader's Corner" },
    { titre: "Le Crime de l'Orient-Express", auteur: "Agatha Christie", van: "Van Coffee & Tales" },
    { titre: "Lonely Planet Madagascar", auteur: "Lonely Planet", van: "Van Airport Books" },
    { titre: "Astérix le Gaulois", auteur: "René Goscinny", van: "Van Reader's Corner" },
    { titre: "Lohataona", auteur: "Jean-Joseph Rabearivelo", van: "Van Bookish Antanimena" }
];

// DOM elements
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const quartierSelect = document.getElementById('quartier-select');
const localiserBtn = document.getElementById('localiser-btn');
const vanResult = document.getElementById('van-result');
const livreSearch = document.getElementById('livre-search');
const rechercherBtn = document.getElementById('rechercher-btn');
const livreResults = document.getElementById('livre-results');
const livresPopulairesContainer = document.getElementById('livres-populaires');
const contactForm = document.getElementById('contact-form');

// Mobile navigation toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Quartier selection and van localization
localiserBtn.addEventListener('click', () => {
    const selectedQuartier = quartierSelect.value;
    if (selectedQuartier && vansData[selectedQuartier]) {
        showVanInfo(vansData[selectedQuartier]);
        vanResult.classList.remove('hidden');
        vanResult.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert('Veuillez sélectionner un quartier');
    }
});

function showVanInfo(vanInfo) {
    document.getElementById('van-name').textContent = vanInfo.name;
    document.getElementById('van-location').textContent = vanInfo.location;
    document.getElementById('van-schedule').textContent = vanInfo.schedule;
    document.getElementById('van-specialites').textContent = vanInfo.specialites;
    document.getElementById('van-contact').href = 'tel:+261345046884';
}

// Book search functionality
rechercherBtn.addEventListener('click', searchBooks);
livreSearch.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchBooks();
    }
});

function searchBooks() {
    const searchTerm = livreSearch.value.trim().toLowerCase();
    if (searchTerm) {
        const results = livresData.filter(livre => 
            livre.titre.toLowerCase().includes(searchTerm) || 
            livre.auteur.toLowerCase().includes(searchTerm)
        );
        
        displayBookResults(results);
        livreResults.classList.remove('hidden');
        livreResults.scrollIntoView({ behavior: 'smooth', block: 'center' });
    } else {
        alert('Veuillez entrer un titre de livre ou un nom d\'auteur');
    }
}

function displayBookResults(results) {
    livreResults.innerHTML = '';
    
    if (results.length === 0) {
        livreResults.innerHTML = '<p>Aucun livre trouvé. Essayez avec d\'autres mots-clés.</p>';
        return;
    }
    
    results.forEach(livre => {
        const livreItem = document.createElement('div');
        livreItem.className = 'livre-item';
        livreItem.innerHTML = `
            <h4>${livre.titre}</h4>
            <p><strong>Auteur:</strong> ${livre.auteur}</p>
            <p><strong>Disponible chez:</strong> ${livre.van}</p>
            <p><strong>Quartier:</strong> ${livre.quartier}</p>
        `;
        livreResults.appendChild(livreItem);
    });
}

// Display popular books
function displayPopularBooks() {
    livresPopulaires.forEach(livre => {
        const livreElement = document.createElement('div');
        livreElement.className = 'livre-populaire';
        livreElement.innerHTML = `
            <h4>${livre.titre}</h4>
            <p><strong>Auteur:</strong> ${livre.auteur}</p>
            <p><strong>Van:</strong> ${livre.van}</p>
        `;
        livresPopulairesContainer.appendChild(livreElement);
    });
}

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Simple form validation and submission simulation
    const formData = new FormData(contactForm);
    const name = contactForm.querySelector('input[type="text"]').value;
    const email = contactForm.querySelector('input[type="email"]').value;
    const message = contactForm.querySelector('textarea').value;
    
    if (name && email && message) {
        alert('Merci pour votre message! Nous vous répondrons dans les plus brefs délais.');
        contactForm.reset();
    } else {
        alert('Veuillez remplir tous les champs obligatoires.');
    }
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    displayPopularBooks();
    
    // Add some entrance animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    document.querySelectorAll('.section-title, .van-card, .livre-item, .livre-populaire').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Add floating effect to logo
const logo = document.querySelector('.logo');
if (logo) {
    logo.addEventListener('mouseenter', () => {
        logo.style.animation = 'none';
        logo.style.transform = 'scale(1.2) rotate(5deg)';
    });
    
    logo.addEventListener('mouseleave', () => {
        logo.style.transform = 'scale(1) rotate(0deg)';
    });
}

// Add parallax effect to hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.van-illustration');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.1}px)`;
    }
});

// Add dynamic greeting based on time
function updateGreeting() {
    const now = new Date();
    const hour = now.getHours();
    let greeting = 'Bonjour';
    
    if (hour >= 17) {
        greeting = 'Bonsoir';
    } else if (hour >= 12) {
        greeting = 'Bon après-midi';
    }
    
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = `${greeting}! Vos mini vans littéraires à Antananarivo`;
    }
}

// Update greeting on page load
updateGreeting();