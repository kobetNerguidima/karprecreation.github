document.addEventListener('DOMContentLoaded', () => {
    // Logique pour le bouton "Ajouter au panier" sur la page produit unique (produit-detail.html si vous la créez)
    const addToCartProductDetailButton = document.querySelector('.product-detail .add-to-cart-btn');
    const quantityInput = document.getElementById('quantity');

    if (addToCartProductDetailButton) {
        addToCartProductDetailButton.addEventListener('click', () => {
            const productName = document.querySelector('.product-info h1').innerText;
            const productPrice = document.querySelector('.product-info .price').innerText;
            const quantity = quantityInput ? parseInt(quantityInput.value) : 1;

            if (quantity > 0) {
                console.log(`Ajouté au panier depuis la page détail: ${quantity}x ${productName} (Prix: ${productPrice})`);
                alert(`${quantity}x ${productName} a été ajouté à votre panier !`);
                // Dans un vrai site : envoyer cette information à un script PHP via fetch/AJAX
                // fetch('php/add_to_cart.php', {
                //     method: 'POST',
                //     headers: {
                //         'Content-Type': 'application/json'
                //     },
                //     body: JSON.stringify({ productId: 'votre_id_produit', quantity: quantity })
                // })
                // .then(response => response.json())
                // .then(data => {
                //     if (data.success) {
                //         alert(data.message);
                //         // Mettre à jour l'icône du panier, etc.
                //     } else {
                //         alert('Erreur: ' + data.message);
                //     }
                // })
                // .catch(error => console.error('Erreur:', error));
            } else {
                alert("Veuillez sélectionner une quantité valide.");
            }
        });
    }

    // Logique pour les boutons "Ajouter au panier" sur la page de liste de produits (produits.html)
    const addToCartButtons = document.querySelectorAll('.product-card .add-to-cart-btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const productCard = event.target.closest('.product-card');
            const productName = productCard.querySelector('h3').innerText;
            const productPrice = productCard.querySelector('.price').innerText;
            const productId = event.target.dataset.productId; // Récupère l'ID du produit

            console.log(`Ajouté au panier depuis la liste: Produit ID ${productId}, Nom: ${productName}, Prix: ${productPrice}`);
            alert(`${productName} a été ajouté à votre panier !`);
            // Ici aussi, enverriez à PHP
        });
    });

    // Logique pour le formulaire de contact (envoie un message console, pas un email réel)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Empêche l'envoi du formulaire par défaut
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Simule l'envoi. Dans un vrai site, vous enverriez ces données à un script PHP
            // qui gérerait l'envoi d'e-mail (par exemple, via PHPMailer).
            console.log(`Message de contact reçu:\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\nMessage: ${message}`);
            alert('Merci pour votre message, nous vous répondrons bientôt !');
            contactForm.reset(); // Réinitialise le formulaire après l'envoi simulé
            // fetch('php/send_contact_form.php', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json'
            //     },
            //     body: JSON.stringify({ name, email, subject, message })
            // })
            // .then(response => response.json())
            // .then(data => {
            //     if (data.success) {
            //         alert(data.message);
            //         contactForm.reset();
            //     } else {
            //         alert('Erreur lors de l\'envoi: ' + data.message);
            //     }
            // })
            // .catch(error => console.error('Erreur:', error));
        });
    }

    // Logique simplifiée pour le panier (purement côté client pour cet exemple)
    // Pour un vrai panier, cela serait géré par PHP (sessions/base de données)
    const removeCartItemButtons = document.querySelectorAll('.remove-item');
    if (removeCartItemButtons.length > 0) {
        removeCartItemButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                const itemToRemove = e.target.closest('.cart-item');
                if (confirm("Voulez-vous vraiment supprimer cet article de votre panier ?")) {
                    itemToRemove.remove();
                    console.log("Article supprimé du panier.");
                    // Mise à jour des totaux (très simplifié, devrait être dynamique)
                    updateCartTotals();
                }
            });
        });
    }

    const cartQuantityInputs = document.querySelectorAll('.cart-item .item-quantity input[type="number"]');
    if (cartQuantityInputs.length > 0) {
        cartQuantityInputs.forEach(input => {
            input.addEventListener('change', (e) => {
                const newQuantity = parseInt(e.target.value);
                const itemId = e.target.dataset.itemId;
                if (newQuantity < 1) {
                    e.target.value = 1; // Empêche les quantités négatives/nulles
                    alert("La quantité ne peut pas être inférieure à 1. Supprimez l'article pour le retirer.");
                }
                console.log(`Quantité de l'article ${itemId} modifiée à ${newQuantity}`);
                // Mettre à jour les totaux (très simplifié)
                updateCartTotals();
            });
        });
    }

    function updateCartTotals() {
        // Cette fonction devrait recalculer les totaux en JS pur ou via AJAX vers PHP
        // Pour cet exemple, on met juste un message générique
        console.log("Les totaux du panier ont été mis à jour (logique simplifiée).");
        // Exemple basique de mise à jour visuelle (non basé sur le calcul réel des items visibles)
        const subtotalElement = document.getElementById('subtotal');
        const grandTotalElement = document.getElementById('grandTotal');
        if (subtotalElement && grandTotalElement) {
            // Idéalement, calculez cela en fonction des items actuels dans le DOM ou via une API
            subtotalElement.innerText = 'Calculé... Dhs';
            grandTotalElement.innerText = 'Calculé... Dhs';
        }
    }

    const checkoutButton = document.getElementById('checkout-btn');
    if (checkoutButton) {
        checkoutButton.addEventListener('click', () => {
            alert("Vous avez cliqué sur 'Passer à la caisse' ! (La logique de paiement serait ici)");
            // Redirection vers une page de paiement/informations de livraison
            // window.location.href = 'checkout.html';
        });
    }
});