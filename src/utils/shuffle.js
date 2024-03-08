export default function ShuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1)); // Génère un index aléatoire entre 0 et i inclus
        [array[i], array[randomIndex]] = [array[randomIndex], array[i]]; // Échange les éléments à l'index i et à l'index aléatoire
    }
    return array;
}
