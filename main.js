    const stations = ["Museum", "St. James", "Circular Quay", "Wynyard", "Townhall", "Central", "Redfern", "Macdonaldtown", "Newtown"];

const travelFrom = ()=>{

//getting value from the hopOn form
    let hopOn  = document.getElementById('start-station').value;
    let hopOff = document.getElementById('end-station').value; 
//bringing arguments to the required format
    let hopOnCap = hopOn.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');
    let hopOffCap = hopOff.toLowerCase().split(' ').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join(' ');  
//checking if entered values exist in the list of stations (array) 
    if(stations.indexOf(hopOnCap) ==-1){
    return alert(`Station ${hopOnCap} doesn't exist. Please check that you enter the name correctly.`) 
    }
    else if (stations.indexOf(hopOffCap) ==-1){
    return alert(`Station ${hopOffCap} doesn't exist. Please check that you enter the name correctly.`) 
    }           
    else {
    console.log(`You start your journey at ${hopOnCap} and finish at ${hopOffCap}`);
        }    
//finding entered stations' indexes in the array 
    let start = stations.indexOf(hopOnCap);
    console.log(start);
    let finish = stations.indexOf(hopOffCap);
    console.log(finish);
//finding number of stations to travel
    let numOfStops = finish - start; 
//iteration through the stations array: start > finish => reverse iteration, else - forward iteration
    const stationsListArr = []; // creating an empty array to fill in with the search result stations
// Moving forward     
         if (start < finish){
            for (i= start; i<finish; i++){
            stationsListArr.push(stations[i]); //adding stations with index 'i' to the array
            console.log(stationsListArr);
            document.addEventListener('click', ()=>{
            document.getElementById('search-results').innerHTML = `You will need to travel the following ${numOfStops} stops: ${stationsListArr} `;})
            }}
//Moving backwards
    else if (start > finish) {
            for (i= start; i>finish; i--){  
            stationsListArr.push(stations[i]); 
            document.addEventListener('click', ()=>{
            document.getElementById('search-results').innerHTML = `You will need to travel the following ${numOfStops*-1} stops: ${stationsListArr} `;})
            }}
};


