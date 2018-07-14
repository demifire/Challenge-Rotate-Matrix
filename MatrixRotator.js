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
    // console.log('YOYOYO', this.matrix);
    // console.log('DIS', direction);

    if (direction === 'ClockWise'){
            var thisMatrix = this.matrix;
            var newMatrix = [];
            var innerArr = [];
            for (var j=0; j<thisMatrix[0].length; j) {
              for (var i=thisMatrix.length-1; i>=0; i--) {
                innerArr.push(thisMatrix[i][0]);
                thisMatrix[i].shift();
              }
              newMatrix.push(innerArr);
              innerArr = [];
            }
            this.matrix = newMatrix;
            console.log(thisMatrix);


      //My method

      // if (direction === 'ClockWise'){
      //   console.log('FUKU');
      //   while(this.matrix[0].length>0){
      //     innerArr = [];
      //     for(var i=this.matrix[0].length-1;i>0;i--){
      //       console.log('DIS BE ARR ' + i, this.matrix[i]);
      //       var WAT = this.matrix[i].shift();
      //       console.log(WAT);
      //       innerArr.push(WAT);
      //     }
      //     rotatedMatrix.push(innerArr)
      //   }
      //   console.log(rotatedMatrix)
      //   this.matrix = rotatedMatrix
      // }

    }

    if (direction === 'CounterClockWise'){
      console.log('FUKU');
      while(this.matrix[0].length>0){
        innerArr = [];
        for(var i=0;i<this.matrix.length;i++){
          console.log('DIS BE ARR ' + i, this.matrix[i]);
          var WAT = this.matrix[i].pop();
          console.log(WAT);
          innerArr.push(WAT);
        }
        rotatedMatrix.push(innerArr)
      }
      console.log(rotatedMatrix)
      this.matrix = rotatedMatrix
    }


  }
};
