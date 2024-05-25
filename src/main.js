document.addEventListener('DOMContentLoaded', function() {
    const osData = [
        {
            name: "Windows",
            logo: "windows-logo.png",
            page: "./src/pages/windows.html",
            image: "windows-image.png",
            description: "Windows - Microsoft tomonidan ishlab chiqilgan mashhur operatsion tizim.",
            anchor: "windows"
        },
        {
            name: "macOS",
            logo: "macos-logo.png",
            page: "./src/pages/macos.html",
            image: "macos-image.png",
            description: "macOS - Apple Inc. tomonidan ishlab chiqilgan operatsion tizim.",
            anchor: "macos"
        },
        {
            name: "Linux",
            logo: "linux-logo.png",
            page: "./src/pages/linux.html",
            image: "linux-image.png",
            description: "Linux - ochiq kodli Unixga o'xshash operatsion tizimlar oilasi.",
            anchor: "linux"
        },
        {
            name: "iOS",
            logo: "ios-logo.png",
            page: "./src/pages/ios.html",
            image: "ios-image.png",
            description: "iOS - Apple Inc. tomonidan yaratilgan va ishlab chiqilgan mobil operatsion tizim.",
            anchor: "ios"
        },
        {
            name: "Android",
            logo: "android-logo.png",
            page: "./src/pages/android.html",
            image: "android-image.png",
            description: "Android - Google tomonidan ishlab chiqilgan mobil operatsion tizim.",
            anchor: "android"
        }
    ];

    const osCardsContainer = document.getElementById('os-cards');
    const listOs = document.getElementById('list-os');

    osData.forEach(os => {
        const card = document.createElement('div');
        card.className = 'col-lg-3 col-md-4 col-sm-6';
        card.id = os.anchor;
        card.innerHTML = `
            <a href="${os.page}" class="card">
                <img src="src/images/photos/os/${os.image}" class="card-img-top" alt="${os.name}">
                <div class="card-body">
                    <h5 class="card-title">${os.name}</h5>
                    <p class="card-text">${os.description}</p>
                </div>
            </a>
        `;
        osCardsContainer.appendChild(card);
    });

    listOs.innerHTML = osData.map(os => `<a href="${os.page}" class="card-title">${os.name}</a>`).join('');

    // Modal functionality
    const modal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');

    setTimeout(() => {
        modal.style.display = 'block';
    }, 10000);

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });
});
