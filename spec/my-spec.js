
describe('repeatString', function() {
 it('should return a string repeated n times', function() {
  expect(Repeater.repeatString('cat', 3)).toEqual('catcatcat');
 });
});

describe('repeatFunction', function() {
 it('should call a function n times', function() {
  var str = 'oh';
  var write = function() { str += 'hi'; };
  Repeater.repeatFunction(write, 3);
  expect(str).toEqual('ohhihihi');
 });
});

describe('count', function(){
    it('should be undefined', function(){
        expect(typeof count).toBe('undefined');
    })
})
