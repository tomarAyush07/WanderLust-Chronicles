function openModal(destination) {
    document.getElementById("destinationModal").style.display = "block";
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");
    const knowMoreBtn = document.getElementById("knowMoreBtn");

    if (destination === 'himalaya') {
        modalTitle.innerText = "Himalaya";
        modalDescription.innerText = "The Himalayas are home to the world's highest peaks like Mount Everest. Explore serene lakes, thrilling trails, and local culture.";
        knowMoreBtn.onclick = function() { redirectToPackage('himalaya') };
     } else if (destination === 'Kerala') {
        modalTitle.innerText = "kerala";
        modalDescription.innerText = "Kerala offers tranquil backwaters, houseboat cruises, spice plantations, and a rich cultural heritage.";
        knowMoreBtn.onclick = function() { redirectToPackage('') };
     } else if (destination === 'Rajasthan') {
        modalTitle.innerText = "rajasthan";
        modalDescription.innerText =" Rajasthan boasts historic forts, palaces, and colorful markets. Experience vibrant culture and traditional cuisine.";
        knowMoreBtn.onclick = function() { redirectToPackage('rajasthan') };
     }
     else if (destination === 'andaman') {
        modalTitle.innerText = "Andaman Islands";
        modalDescription.innerText = "The Andaman Islands are a paradise for beach lovers and adventure seekers. Enjoy diving, snorkeling, and serene nature.";
        knowMoreBtn.onclick = function() { redirectToPackage('andaman') };
    } else if (destination === 'mysore') {
        modalTitle.innerText = "Mysore";
        modalDescription.innerText = "Mysore is known for its stunning Mysore Palace, serene Chamundi Hill, and vibrant markets. A cultural hub of South India.";
        knowMoreBtn.onclick = function() { redirectToPackage('mysore') };
    } else if (destination === 'leh') {
        modalTitle.innerText = "Leh Ladakh";
        modalDescription.innerText = "Leh Ladakh offers Pangong Lake, Nubra Valley, and unforgettable mountain adventures. Perfect for thrill-seekers and nature lovers.";
        knowMoreBtn.onclick = function() { redirectToPackage('leh') };
    } else if (destination === 'darjeeling') {
        modalTitle.innerText = "Darjeeling";
        modalDescription.innerText = "Darjeeling offers tranquil tea estates, the Darjeeling Himalayan Railway, and stunning sunrise views at Tiger Hill.";
        knowMoreBtn.onclick = function() { redirectToPackage('darjeeling') };
    } else if (destination === 'varanasi') {
        modalTitle.innerText = "Varanasi";
        modalDescription.innerText = "Varanasi is famous for the Ganga Aarti, sacred temples, and an unmatched spiritual experience by the Ganges River.";
        knowMoreBtn.onclick = function() { redirectToPackage('varanasi') };
    } else if (destination === 'mumbai') {
        modalTitle.innerText = "Mumbai";
        modalDescription.innerText = "Mumbai is the city that never sleeps. It offers iconic sites, vibrant culture, and great street food.";
        knowMoreBtn.onclick = function() { redirectToPackage('mumbai') };
    }
}
function closeModal() {
    document.getElementById("destinationModal").style.display = "none";
}
function redirectToPackage(destination) {
    window.location.href = `tourpackage.html#${destination}`;
}
