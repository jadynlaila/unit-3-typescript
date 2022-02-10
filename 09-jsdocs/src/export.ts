/**
 * this finds the area of a rectangle
 * @param {number} length the bottom or top of the rectangle
 * @param {number} width the left of right side of the rectangle
 * @returns {number} the area of the rectangle
 */
 export const calcArea = (length: number, width: number): number => {
    return length * width;
}

/**
 * this is a test string 
 * @type {string[]}
 */
const testing:string[] = ["johnny"];
console.log(testing);

/**
 * do math related to areas
 */
export class Areas{

    /**
     * //members are any variable that is specific to a class
     * @member {number} pi - holds the value 3.14
     */
    static pi = 3.24;

    /**
     * if you are creating a circle, else leave blank
     * @param radius - radius of a circle
     */
    constructor(public radius?: number){

    }

    static circle = {
        /**
         * finds the area of a circle 
         * @param {number} radius radius of a circle
         * @returns {number} the area of a circle
         */
        area(radius: number = this.radius): number{
            return radius * Areas.pi **2;
        },
        /**
         * finds the circumference of a circle 
         * @param {number} radius radius of a circle
         * @returns {number} the circumference of a circle
         */
        circumference (radius: number = this.radius): number{
            return 2 * Areas.pi * radius;
        },
    }
    static triangle = {
        area(base: number, height: number){
            return (base * height) /2;
        }
    }
}