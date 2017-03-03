export class Init{
    load(){
        if(localStorage.getItem('markers')=== null|| localStorage.getItem('markers')=== undefined){

            console.log('No markers found. Creating....');

            var markers = [{
                name: 'Company One ',
                lat: 51.67841,
                lng: 6.809007,
                draggable: true
            }, {
                name: 'Company Two ',
                lat: 51.67841,
                lng: 7.809007,
                draggable: true
            }, {
                name: 'Company Thre ',
                lat: 51.67841,
                lng: 8.809007,
                draggable: true
            }];

            localStorage.setItem('markers', JSON.stringify(markers));

        }else{
            console.log('Loading markers...')
        }
    }
}