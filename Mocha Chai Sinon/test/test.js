var chai = require('chai');  
var assert = chai.assert;    
var expect = chai.expect;    
var should = chai.should();  
var Add = require('../test/index')

describe('Addition Test', function(){
    it('should return 3 when one and two', function(){
        var numberOne = 1;
        var numberTwo = 2;

        var expectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.equal(expectedResult);
        expect(actualResult).to.equal(expectedResult);
        assert.equal(actualResult, expectedResult);
    });

    it('should not return 3 when passed one and four', function(){
        var numberOne = 1;
        var numberTwo = 4;

        var notexpectedResult = 3;

        var actualResult = Add(numberOne, numberTwo);

        actualResult.should.not.equal(notexpectedResult);
        expect(actualResult).to.not.equal(notexpectedResult);
        assert.notEqual(actualResult, notexpectedResult);
    });
});