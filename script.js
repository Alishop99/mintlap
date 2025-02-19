document.addEventListener("DOMContentLoaded", async () => {
    const nftGallery = document.getElementById("nft-gallery");
    const walletAddress = "3LhsVuVw5SAgJMu2v8ZCZPnSkYTLfaekbibyHto98GWD"; 
    const apiUrl = `https://api.solscan.io/account/tokens?address=${walletAddress}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        data.data.forEach(token => {
            if (token.metadata) {
                const nftCard = document.createElement("div");
                nftCard.className = "nft-card";
                nftCard.innerHTML = `
                    <img src="${token.metadata.data.uri.replace(".json", ".png")}" alt="${token.metadata.data.name}">
                    <h2>${token.metadata.data.name}</h2>
                `;
                nftGallery.appendChild(nftCard);
            }
        });
    } catch (error) {
        console.error("Error fetching NFTs:", error);
    }
});
