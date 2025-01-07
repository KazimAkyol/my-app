


["1", "2", "3", "4"]


export const fetchQuizData = async (difficulty, amount) => {
    const url = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`
    const data = await ((await fetch(url)).json())
    return data.results
}