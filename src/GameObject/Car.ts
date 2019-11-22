import {canvas} from '../index';

export default class Car {
    private color: string;
    private width: string ;
    private height: string;

    constructor(color: string='#fffff', width: string='30px', height: string='40px'){
        this.color =color;
        this.width =width;
        this.height = height;
    }

    public showCar(){
        var ctx = canvas.getContext("2d");
        ctx.beginPath();
        ctx.arc(95, 50, 40, 0, 2 * Math.PI);
        ctx.stroke();
    }
   
}