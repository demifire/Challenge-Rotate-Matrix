const Direction = require("./Direction").Direction;

/*  MatrixRotator(matrix)
 *
 *  @param matrix                        a multidimensional array containing the matrix
 *
 *  @public property matrix              the matrix
 *
 *  @public method rotate(direction)     direction is either
 *                                       Direction.CW or Direction.CWW
 *        @returns the rotated matrix
 */
module.exports = class MatrixRotator {
  constructor( matrix ) {
    this.matrix = matrix;
  }

  //      |-- Must be Direction.CW
  //      v        or Direction.CCW
  rotate (direction) {
    var rotatedMatrix = [];
    var innerArr = [];
    console.log('YOYOYO', this.matrix);
    console.log('WAN', direction);

    // if (direction === 'ClockWise'){
    //         var thisMatrix = this.matrix;
    //         var newMatrix = [];
    //         var innerArr = [];
    //         for (var j=0; j<thisMatrix[0].length; j) {
    //           for (var i=thisMatrix.length-1; i>=0; i--) {
    //             innerArr.push(thisMatrix[i][0]);
    //             thisMatrix[i].shift();
    //           }
    //           newMatrix.push(innerArr);
    //           innerArr = [];
    //         }
    //         this.matrix = newMatrix;
    //         console.log(thisMatrix);

    // }
      //My method

      if (direction === 'ClockWise'){
        let thisMatrix = this.matrix;
        console.log('Solving Clockwise Problem');
        console.log(thisMatrix.length);
        while(thisMatrix[0].length>0){
          innerArr = [];
          for(let i=this.matrix.length-1;i>-1;i--){
            console.log('Inner Arr is ' + i, this.matrix[i]);
            let shifted = this.matrix[i].shift();
            console.log(shifted);
            innerArr.push(shifted);
          }
          rotatedMatrix.push(innerArr)
        }
        console.log(rotatedMatrix)
        this.matrix = rotatedMatrix
      } else if (direction === 'CounterClockWise'){
      console.log('Solving Counter Clockwise Problem');
      while(this.matrix[0].length>0){
        innerArr = [];
        for(let i=0;i<this.matrix.length;i++){
          console.log('Inner Arr is ' + i, this.matrix[i]);
          let popped = this.matrix[i].pop();
          console.log(popped);
          innerArr.push(popped);
        }
        rotatedMatrix.push(innerArr)
      }
      console.log(rotatedMatrix)
      this.matrix = rotatedMatrix
    }


  }
};
