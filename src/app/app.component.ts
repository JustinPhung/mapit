import {Component} from "@angular/core";
import {MarkerService} from "./services/marker.service";

@Component( {
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            } )
export class AppComponent {
    // Zoom level
    zoom: number = 9;
    // Start Position

    lat: number = 51.678418;
    lng: number = 7.809007;

    markerName: string;
    markerLat: string;
    markerLng: string;
    markerDraggable: string;

    //Markers
    markers: marker[];

    constructor(private markerService:MarkerService) {
        this.markers = this.markerService.getMarkers();
    }

    public clickedMarker( marker: marker, index: number ) {
        console.log( 'Clicked Marker ' + marker.name + ' at index: ' + index );
    }

    public mapClick( $event: any ) {
        var newMarker = {
            name: 'Untitled',
            lat: $event.coords.lat,
            lng: $event.coords.lng,
            draggable: false
        }

        this.markers.push( newMarker );
    }

    markerDragEnd( marker: any, $event: any ) {
        console.log( 'dragEnd', marker, $event );

        var updMarker = {
            name: marker.name,
            lat: parseFloat(  $event.coords.lat ),
            lng: parseFloat( $event.coords.lng  ),
            draggable: true
        };

        this.removeMarker(marker.name);

        this.markers.push(updMarker);
        this.markerService.updateMarkers(this.markers);

    }

    private removeMarker( name: string ) {

        this.markers.forEach((item, index)=>{
            if(item.name == name){
                this.markers.splice(index,1);
            }
        })

    }
    addMarker(){
     console.log('Adding Marker');

     if(this.markerDraggable === 'yes'){
         var isDraggable = true;
     }else{
         var isDraggable = false;
     }

     var newMarker = {
         name: this.markerName,
         lat: parseFloat(this.markerLat),
         lng: parseFloat(this.markerLng),
         draggable: isDraggable
     }

     this.markers.push(newMarker);
     this.markerService.updateMarkers(this.markers);
    }
}

//Marker Type
interface marker {

    name?: string;
    lat: number;
    lng: number;
    draggable: boolean;

}
