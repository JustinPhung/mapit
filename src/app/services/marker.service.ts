import {Injectable} from "@angular/core";
import {Init} from "../init.marker";

@Injectable()
export class MarkerService extends Init{
    constructor(){
        super();
        console.log('MarkerService Initialized...');
        this.load();
    }

    getMarkers(){
        var markers = JSON.parse(localStorage.getItem('markers'));
        return markers;
    }


    updateMarkers( markers ) {

        localStorage.setItem('markers', JSON.stringify(markers))

    }
}
