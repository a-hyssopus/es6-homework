function fetchDragons() {
    return fetch('https://api.spacexdata.com/v3/dragons')
}

async function loadData() {
    let fetchResult, parsedResponse;
    try {
        fetchResult = await fetchDragons()
        if (!fetchResult.ok) {
            throw new Error(fetchResult.statusText)
        }
        parsedResponse = await fetchResult.json();
        console.log(parsedResponse);
    } catch (err) {
        console.error(err)
    }
}
