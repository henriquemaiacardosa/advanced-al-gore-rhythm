// Usa algoritmo de Manacher
function longestPalindrome(s: string): string {
    if (!s || s.length <= 1) {
        return s;
    }

    // 1. Transformação para normalizar palíndromos pares e ímpares
    // Exemplo: "aba" -> "#a#b#a#", "aa" -> "#a#a#"
    const T: string = "#" + s.split("").join("#") + "#";
    const n: number = T.length;
    
    // Array de raios (P[i] armazena o raio do palíndromo centrado em T[i])
    const P: number[] = new Array(n).fill(0);
    
    let center: number = 0;         // Centro do palíndromo que expande mais à direita
    let rightBoundary: number = 0;  // Borda direita desse palíndromo
    
    let maxLen: number = 0;         // Comprimento do maior palíndromo encontrado
    let maxCenter: number = 0;      // Índice do centro desse maior palíndromo

    for (let i = 0; i < n; i++) {
        // 2. Aproveitamento de Simetria (O "pulo do gato" do O(n))
        if (i < rightBoundary) {
            const mirror = 2 * center - i; // Índice espelhado de 'i' em relação a 'center'
            P[i] = Math.min(rightBoundary - i, P[mirror]);
        }

        // 3. Expansão Linear (Tenta expandir além do que a simetria garantiu)
        let a = i + (1 + P[i]);
        let b = i - (1 + P[i]);
        
        while (a < n && b >= 0 && T[a] === T[b]) {
            P[i]++;
            a++;
            b--;
        }

        // 4. Atualização da Borda Direita
        // Se o palíndromo em 'i' expandiu além da borda atual, ele vira o novo 'center'
        if (i + P[i] > rightBoundary) {
            center = i;
            rightBoundary = i + P[i];
        }

        // 5. Registro do recordista global
        if (P[i] > maxLen) {
            maxLen = P[i];
            maxCenter = i;
        }
    }

    // 6. Mapeamento de volta para a string original
    // O raio na string transformada é igual ao tamanho real na string original
    const start = Math.floor((maxCenter - maxLen) / 2);
    return s.substring(start, start + maxLen);
}
