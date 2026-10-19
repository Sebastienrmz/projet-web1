document.addEventListener('DOMContentLoaded', function () {

    // 1. Burger menu
    var burger = document.getElementById('burger-btn');
    var navMenu = document.getElementById('nav-menu');
    if (burger && navMenu) {
        burger.addEventListener('click', function () {
            var opened = navMenu.classList.toggle('ouverte');
            burger.setAttribute('aria-expanded', String(opened));
        });
        navMenu.querySelectorAll('a').forEach(function (l) {
            l.addEventListener('click', function () { navMenu.classList.remove('ouverte'); burger.setAttribute('aria-expanded', 'false'); });
        });   
    }

    // 2. Lien actif
    var page = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(function (l) {
        if (l.getAttribute('href') === page) l.classList.add('active');
    });

    // 3. Toast
    var toast = document.getElementById('toast');
    if (toast) {
        setTimeout(function () { toast.classList.add('visible'); }, 800);
        setTimeout(function () { toast.classList.remove('visible'); }, 5000);
    }

    // 4. Carrousel
    var inner = document.getElementById('carrousel-inner');
    if (inner) {
        var slides = inner.querySelectorAll('.carrousel-slide');
        var total = slides.length;
        var idx = 0;
        var contInd = document.getElementById('indicateurs');

        if (contInd) {
            for (var i = 0; i < total; i++) {
                var b = document.createElement('button');
                b.classList.add('indicateur');
                if (i === 0) b.classList.add('actif');
                b.type = 'button';
                b.setAttribute('aria-label', 'Actualité ' + (i + 1));
                contInd.appendChild(b);
            }
        }

        function goTo(n) {
            if (n < 0) n = total - 1;
            if (n >= total) n = 0;
            idx = n;
            inner.style.transform = 'translateX(-' + idx * 100 + '%)';
            document.querySelectorAll('.indicateur').forEach(function (d, i) {
                d.classList.toggle('actif', i === idx);
            });
        }

        var prev = document.getElementById('btn-prev');
        var next = document.getElementById('btn-next');
        if (prev) prev.addEventListener('click', function () { goTo(idx - 1); });
        if (next) next.addEventListener('click', function () { goTo(idx + 1); });
        document.querySelectorAll('.indicateur').forEach(function (d, i) {
            d.addEventListener('click', function () { goTo(i); });
        });
        setInterval(function () { goTo(idx + 1); }, 4000);
    }

    // 5. Filtre enseignants
    var filtres = document.querySelectorAll('.btn-filtre');
    var cartes = document.querySelectorAll('.carte-enseignant');
    if (filtres.length > 0) {
        filtres.forEach(function (btn) {
            btn.addEventListener('click', function () {
                filtres.forEach(function (b) { b.classList.remove('actif'); });
                this.classList.add('actif');
                var f = this.getAttribute('data-filtre');
                cartes.forEach(function (c) {
                    c.style.display = (f === 'tous' || c.getAttribute('data-specialite') === f) ? '' : 'none';
                });
            });
        });
    }

    document.querySelectorAll('.avatar-photo').forEach(function (photo) {
        function replacePhoto() {
            var name = photo.parentElement.querySelector('h3');
            var placeholder = document.createElement('div');
            placeholder.className = 'avatar';
            placeholder.setAttribute('aria-hidden', 'true');
            placeholder.textContent = name ? name.textContent.split(' ').map(function (part) {
                return part.charAt(0);
            }).slice(0, 2).join('') : '';
            photo.replaceWith(placeholder);
        }
        photo.addEventListener('error', replacePhoto, { once: true });
        if (photo.complete && !photo.naturalWidth) replacePhoto();
    });

    // 6. Voir plus / voir moins (projets)
    document.querySelectorAll('.btn-voir-plus').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var el = document.getElementById(this.getAttribute('data-cible'));
            if (el) {
                var open = el.classList.toggle('visible');
                this.textContent = open ? 'Voir moins' : 'Voir plus';
            }
        });
    });

    // 7. Validation formulaire contact
    var form = document.getElementById('formulaire-contact');
    var confirmationTimer;
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            var ok = true;
            var firstInvalid = null;
            var confirmation = document.getElementById('msg-confirmation');
            if (confirmation) confirmation.style.display = 'none';
            clearTimeout(confirmationTimer);
            form.querySelectorAll('[aria-invalid]').forEach(function (field) {
                field.removeAttribute('aria-invalid');
            });

            document.querySelectorAll('.msg-erreur').forEach(function (el) {
                el.style.display = 'none'; el.textContent = '';
            });

            function err(id, msg) {
                var el = document.getElementById(id);
                if (el) { el.textContent = msg; el.style.display = 'block'; }
                var field = document.getElementById(id.replace('erreur-', ''));
                if (field) {
                    field.setAttribute('aria-invalid', 'true');
                    field.setAttribute('aria-describedby', id);
                    if (!firstInvalid) firstInvalid = field;
                }
                ok = false;
            }

            var nom = document.getElementById('nom');
            if (nom && nom.value.trim() === '') err('erreur-nom', 'Veuillez entrer votre nom.');

            var prenom = document.getElementById('prenom');
            if (prenom && prenom.value.trim() === '') err('erreur-prenom', 'Veuillez entrer votre prénom.');

            var email = document.getElementById('email');
            if (email) {
                if (email.value.trim() === '') err('erreur-email', 'Veuillez entrer votre email.');
                else if (!email.validity.valid) err('erreur-email', "Veuillez entrer une adresse email valide.");
            }

            var msg = document.getElementById('message');
            if (msg && msg.value.trim() === '') err('erreur-message', 'Veuillez écrire votre message.');

            if (firstInvalid) firstInvalid.focus();

            if (ok) {
                var conf = document.getElementById('msg-confirmation');
                if (conf) {
                    conf.style.display = 'block';
                    form.reset();
                    confirmationTimer = setTimeout(function () { conf.style.display = 'none'; }, 5000);
                }
            }
        });
    }

});
