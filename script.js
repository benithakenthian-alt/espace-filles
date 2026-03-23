// ======================
// MESSAGES PAR DÉFAUT
// ======================
let defaultMessages = [
    " Salut les filles !",
    " Vous êtes fortes et courageuses",
    " Quel est ton rêve aujourd’hui ?",
    " N’oublie jamais ta valeur"
];

// ======================
// NAVIGATION
// ======================
function showSection(id) {
    const sections = document.querySelectorAll("section");

    sections.forEach(section => {
        section.classList.remove("active");
    });

    const activeSection = document.getElementById(id);
    if (activeSection) {
        activeSection.classList.add("active");
    }
}


// ======================
// DISCUSSION (CHAT)
// ======================
function addMessage() {
    const input = document.getElementById("messageInput");
    const container = document.getElementById("messagesContainer");

    if (!input || !container) return;

    if (input.value.trim() !== "") {
        const msg = document.createElement("div");
        msg.className = "message";
        msg.textContent = input.value;

        container.appendChild(msg);

        input.value = "";
        container.scrollTop = container.scrollHeight;
    }
}


// ======================
// TÉMOIGNAGES (TEXTE + VIDÉO)
// ======================
function addStory() {
    const textInput = document.getElementById("storyInput");
    const videoInput = document.getElementById("videoInput");
    const container = document.getElementById("storiesContainer");

    if (!container) return;

    const text = textInput ? textInput.value.trim() : "";
    const video = videoInput ? videoInput.files[0] : null;

    if (text === "" && !video) return;

    const card = document.createElement("div");
    card.className = "card";

    if (text !== "") {
        const p = document.createElement("p");
        p.textContent = text;
        card.appendChild(p);
    }

    if (video) {
        const vid = document.createElement("video");
        vid.src = URL.createObjectURL(video);
        vid.controls = true;
        card.appendChild(vid);
    }

    container.appendChild(card);

    if (textInput) textInput.value = "";
    if (videoInput) videoInput.value = "";
}


// ======================
// TALENTS (IMAGE + LIKE)
// ======================
function addTalent() {
    const fileInput = document.getElementById("photoInput");
    const container = document.getElementById("talentsContainer");

    if (!fileInput || !container) return;

    const file = fileInput.files[0];
    if (!file) return;

    const card = document.createElement("div");
    card.className = "card";

    const img = document.createElement("img");
    img.src = URL.createObjectURL(file);

    let likes = 0;
    const likeBtn = document.createElement("button");
    likeBtn.textContent = "❤️ 0";

    likeBtn.onclick = () => {
        likes++;
        likeBtn.textContent = "❤️ " + likes;
    };

    const commentInput = document.createElement("input");
    commentInput.placeholder = "Écris un commentaire...";

    card.appendChild(img);
    card.appendChild(likeBtn);
    card.appendChild(commentInput);

    container.appendChild(card);

    fileInput.value = "";
}


// ======================
// LOGOUT
// ======================
function logout() {
    const confirmLogout = confirm("Voulez-vous vraiment vous déconnecter ?");
    if (confirmLogout) {
        window.location.href = "index.html";
    }
}


// ======================
// REMPLISSAGE AUTOMATIQUE
// ======================
window.onload = () => {

    // 💬 DISCUSSION
    const container = document.getElementById("messagesContainer");

    if (container) {
        let messages = JSON.parse(localStorage.getItem("messages"));

        if (!messages || messages.length === 0) {
            messages = defaultMessages;
        }

        messages.forEach(m => {
            const msg = document.createElement("div");
            msg.className = "message";
            msg.textContent = m;
            container.appendChild(msg);
        });
    }

    // ✨ TÉMOIGNAGES
    const storyContainer = document.getElementById("storiesContainer");

    let defaultStories = [
        "💪 J’ai appris à croire en moi malgré les difficultés.",
        "📚 Aujourd’hui je vais à l’école avec détermination.",
        "✨ Chaque fille mérite de réussir dans la vie."
    ];

    if (storyContainer) {
        defaultStories.forEach(s => {
            const card = document.createElement("div");
            card.className = "card";

            const p = document.createElement("p");
            p.textContent = s;

            card.appendChild(p);
            storyContainer.appendChild(card);
        });
    }

    // 🎨 TALENTS
    const talentsContainer = document.getElementById("talentsContainer");

    if (talentsContainer) {
        for (let i = 0; i < 2; i++) {
            const card = document.createElement("div");
            card.className = "card";

            const img = document.createElement("img");
            img.src = "https://via.placeholder.com/300";

            let likes = 0;
            const likeBtn = document.createElement("button");
            likeBtn.textContent = "❤️ 0";

            likeBtn.onclick = () => {
                likes++;
                likeBtn.textContent = "❤️ " + likes;
            };

            card.appendChild(img);
            card.appendChild(likeBtn);

            talentsContainer.appendChild(card);
        }
    }

};