export async function fetchColorPairs(){
    const res = await fetch("./closest-colors.json")
    if (!res.ok) {
      throw new Error("Failed to fetch colors JSON")
    }
    const data = res.json()
    return data
}

export function getRandomPair(obj){
    const keys = Object.keys(obj)
    const randomKey = keys[Math.floor(Math.random()* keys.length)]
    const randomValue = obj[randomKey]
    const randomPair = [randomKey, randomValue].sort(()=>Math.random() - 0.5)
    return randomPair
}