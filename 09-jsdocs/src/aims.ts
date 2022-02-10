
/**
 * holds all of the aims formulas
 */
export class Aims{
    /**
     * @member {number} pi - holds the value 3.14
     */
    static pi = 3.24;


    /**
     * holds all formulas for volume and area of solids
     */
    static solids = {

        /**
         * calculates the volume of a right circular cone
         * @param {number} r the radius of the base of the cone
         * @param {number} h the height of the cone
         */
        coneVolume(r: number, h: number): number{
            return (Aims.pi * r **2 * h) / 3
        },

        /**
         * 
         * @param {number} b the area of the base of the pyramid
         * @param {number} h height of the pyramid
         * @returns {number} returns the volume of the pyramid
         */
        pyramidVolume(b: number, h: number):number {
            return b * h /3
        },

        /**
         * 
         * @param {number} r radius of the sphere
         * @returns {number} returns the volume of the sphere
         */
        sphereVolume(r: number):number {
            return r ** 3 * Aims.pi * 4/3
        },

        /**
         * 
         * @param {number} r radius of the cylinder 
         * @param {number} h height of the cylinder
         * @returns {number} returns the volume of the cylinder
         */
        cylinderVolume(r: number, h: number):number{
            return r ** 2 * Aims.pi * h
        },

        /**
         * 
         * @param {number} b the area of the base of the prism
         * @param {number} h the height of the prism
         * @returns {number} returns the volume of the prism
         */
        prismVolume(b: number, h: number):number {
            return b * h
        },

        /**
         * 
         * @param {number} r radius of the cone
         * @param {number} l slant height of the cone
         * @returns {number} returns the surface area of the cone 
         */
        coneSA(r: number, l: number): number{
            return r **2 * Aims.pi + (Aims.pi * r * l)
        },

        /**
         * 
         * @param {number} b the area of the base of the pyramid
         * @param {number} p the perimeter of the base of the pyramid
         * @param {number} l the slant height of the pyramid
         * @returns {number} returns the surface area of the pyramid
         */
        pyramidSA(b: number, p: number, l: number):number {
            return p * l /2 + b;
        },

        /**
         * 
         * @param {number} r radius of the sphere
         * @returns {number} returns the surface area of the sphere
         */
        sphereSA(r: number): number {
            return r ** 2 * Aims.pi * 4
        },

        /**
         * 
         * @param {number} r radius of the cylinder
         * @param {number} h height of the cylinder
         * @returns {number} returns the surface area of the cylinder
         */
        cylinderSA(r: number, h: number):number {
            return (2 * Aims.pi * r * h) + (r ** 2 * 2 * Aims.pi )
        },

        /**
         * 
         * @param {number} b the area of the base of the prism
         * @param {number} p the perimeter of the base of the prism
         * @param {number} h height of the prism
         * @returns 
         */
        prismSA(b: number, p: number, h:number ): number{
            return (2 * b) + ( p * h)
        }
    }
    
    /**
     * holds all formulas for area
     */
    static areaFormulas = {
        /**
         * 
         * @param {number}b base side of the triangle
         * @param {number} h height of the triangle
         * @returns {number} returns the area of the triangle
         */
        triangle(b: number, h: number): number{
            return b * h / 2;
        },

        /**
         * 
         * @param {number}l length of the rectangle
         * @param {number}w width of the rectangle
         * @returns {number} returns the area of the rectangle
         */
        rectangle(l:number, w: number):number{
            return l * w
        },

        /**
         * 
         * @param {number} h height of the trapezoid
         * @param {number} b1 first base value of the trapezoid
         * @param {number} b2 second base value of the trapezoid
         * @returns {number} returns the area of the trapezoid
         */
        trapezoid(h: number, b1: number, b2: number): number{
            return h * (b1 + b2) /2
        },

        /**
         * 
         * @param {number} b base of the parallelogram
         * @param {number} h height of the parallelogram
         * @returns {number} returns the area of the parallelogram
         */
        parallelogram(b: number, h: number): number{
            return b * h;
        },

        /**
         * 
         * @param {number} r radius of the circle
         * @returns {number} returns the area of the circle
         */
        circle(r: number):number {
            return r ** 2 * Aims.pi;
        }
    }

    /**
     * holds all linear equation forms
     */
    static linearEquations = {

        /**
         * 
         * @param {number} x1 the x coordinate of the first point
         * @param {number} y1 the y coordinate of the first point
         * @param {number} x2 the x coordinate of the second point 
         * @param {number} y2 the y coordinate of the second point
         * @returns {number} the slope between the two points
         */
        pointSlope(x1:number, y1:number, x2:number, y2:number): number {
            return (y1-y2) / (x1-x2);
        },

        /**
         * 
         * @param {number} m chosen slope
         * @param {number} x chosen x coordinate
         * @param {number} b chosen y intercept
         * @returns returns the y coordinate 
         */
        slopeIntercept(m: number, x:number, b: number):number {
            return m * x + b;
        },

        /**
         * 
         * @param {number} a a value
         * @param {number} b b value
         * @param {number} c c value
         * @returns {number} returns a, b, and c in standard form
         */
        standard(a: number, b: number, c: number): string{
            return `${a} + ${b} = ${c}`
        }
    }

    /**
     * holds quadratic formula
     */
    static quadraticFormula = {
        /**
         * 
         * @param {number} a a value
         * @param {number} b b value
         * @param {number} c c value
         * @returns {number} returns the value of x
         */
        quad(a: number, b: number, c: number): number[] {
            let plus = (-b + Math.sqrt(b ** 2 - (4 * a * c))) / ( 2 * a)
            let minus = (-b - Math.sqrt(b ** 2 - (4 * a * c))) / ( 2 * a)
            return [plus, minus]
        }
    }

    /**
     * holds pythagorean theorem
     */
    static pythag = {
        /**
         * 
         * @param {number} a length of one side of the triangle
         * @param {number} b length of the second side of the triangle
         * @returns {number} returns the length of the hypotenuse
         */
        theorem(a: number, b: number): number {
            return Math.sqrt((a ** 2) * (b **2))
        }
    }

    /**
     * holds coordinate geometry formulas
     */
    static coordinates = {
        /**
         * 
         * @param {number} x1 x value of the first point
         * @param {number} y1 y value of the first point
         * @param {number} x2 x value of the second point
         * @param {number} y2 y value of the second point
         * @returns {number} returns the distance between the two points
         */
        distance(x1: number, y1: number, x2: number, y2: number):number {
            return Math.sqrt(((x2-x1) ** 2) + ((y2-y1) ** 2))
        },

         /**
         * 
         * @param {number} x1 the x coordinate of the first point
         * @param {number} y1 the y coordinate of the first point
         * @param {number} x2 the x coordinate of the second point 
         * @param {number} y2 the y coordinate of the second point
         * @returns {number} the slope between the two points
         */
          slope(x1:number, y1:number, x2:number, y2:number): number {
            return (y1-y2) / (x1-x2);
        },
        
        /**
         * 
         * @param {number} x1 the x coordinate of the first point
         * @param {number} y1 the y coordinate of the first point
         * @param {number} x1 the x coordinate of the second point 
         * @param {number} y2 the y coordinate of the second point 
         * @returns 
         */
        midpoint(x1: number, y1: number, x2: number, y2: number):number[] {
            let x = (x2+x1) / 2
            let y = ((x2+x1) / 2)
            return [x, y]
        }
    }
    
}