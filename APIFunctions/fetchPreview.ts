export async function fetchMonthPreview(userId: string){
    const response = await fetch(`http://192.168.0.102:8080/getMonthPreview?userId=${userId}`);
    const data = await response.json(); 
    console.log('data being received on fetchNextMonthPreview: ', data)
    return data;
}
export async function fetchSixMonthsPreview(userId: string){
    const response = await fetch(`http://192.168.0.102:8080/getSixMonthsPreview?userId=${userId}`);
    const data = await response.json(); 
    console.log('data being received on fetchSixMonthsPreview: ', data)
    return data;
}
export async function fetchYearPreview(userId: string){
    const response = await fetch(`http://192.168.0.102:8080/getYearPreview?userId=${userId}`);
    const data = await response.json(); 
    console.log('data being received on fetchYearMonthPreview: ', data)
    return data;
}