function twoSum(nums: number[], target: number): number[] {
    // 1. Criação de um mapa para armazenar os índices dos números já vistos
    // e a diferença necessária para atingir o alvo (complemento)
    const map: {} = {}

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i];
        let complement = target - x;

        // 2. Verificação se o complemento já foi visto (está no mapa)
        if (map.hasOwnProperty(complement.toString())) {
            return [map[complement.toString()], i];
        }

        map[x.toString()] = i
    }
};
