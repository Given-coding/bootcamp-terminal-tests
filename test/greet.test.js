import assert from 'assert';
import greet from '../greet.js';

describe('The greet function', function(){

    it('should greet Andrew correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});

/*describe('Testing the Greet Function' , function(){
    it('should show you how to use MochaJS' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
       // assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
    it('the moment you enter Bob it should return Hello Bob' , function(){
        assert.equal(greet('Bob'), 'Hello, Bob');
       // assert.equal(2,2);

        assert.deepEqual([2,2],[2,2]);
    });
});*/