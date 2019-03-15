"use strict";

let string_arr= ['Hello', 'world' , 'Serhii', 'Yatsyn' ],
    me = "Serhii Yatsyn",
    name = 'Serhii'


test('String', () => {
    expect(string_arr.length).toEqual(4);  
    expect(string_arr[1]).toEqual('world');  
    expect(string_arr[3]).toEqual('Yatsyn'); 
    expect(String.fromCodePoint(97, 98, 99,100)).toEqual('abcd');  
    expect(string_arr[2] + " " + string_arr[3] ).toEqual('Serhii Yatsyn'); 
    expect(me.search('e') ).toEqual(1); 
    expect( me.indexOf(name) ).toEqual(0 ); 
    expect(me.slice(0,3)  ).toEqual('Ser'); 
    expect( string_arr[2].slice(0,6) ).toEqual(me.slice(0,6) ); 
    expect(me.replace('Serhii','surname:') ).toEqual('surname: Yatsyn'); 
    expect(me.split(" ") ).toEqual( [name ,'Yatsyn']); 
});


let num =319
test('Numbers', () => {
    expect(321).toEqual(321);
    expect(true).toEqual(true);
    expect((1111).toString()).toEqual( "1111"); //+
    expect(Math.pow(2, 11)).toEqual(2048 ); //+
    expect( 1024/2 ).toEqual(512 ); //+
    expect( 5 + "2" +"3").toEqual( "523" ); //+
    expect( "9" + 10 ).toEqual( "910"); //+
    expect(Number.isFinite(num)  ).toEqual(true ); //+
    expect(Number.isFinite (123)).toEqual(true ); //+
    expect(Number.isInteger(num/0.7)).toEqual( false); //+
});


test('test_arrays', () => {
	   string_arr.push('array'); 
	   expect(string_arr.length).toEqual(5);
	   string_arr.pop(); 
	   expect(string_arr.length).toEqual(4);
	   string_arr.shift();  
	   expect(string_arr[0]).toEqual("world"); 
	   string_arr.unshift('first');
	   expect(string_arr[0]).toEqual("first"); 
	   expect(string_arr.join()  ).toEqual('first,world,Serhii,Yatsyn'); 
	   expect(string_arr.join(' ')).toEqual('first world Serhii Yatsyn' );
});


let x = 2, y=6;
test('test_compare_operators', () => {
	 	expect( x < y  ).toEqual( true); 
    expect( x+y /x ).toEqual( 5 ); 
    expect( y*x /y*y > x  ).toEqual( true); 
    expect( x < y ).toEqual( true ); 
    expect( false < true  ).toEqual( true ); 
    expect( false < 1 ).toEqual( true ); 
    expect(1+2*3 ).toEqual(7);
    expect( (1+2)*3  ).toEqual(9); 
    expect( 12+10/5 ).toEqual(14); 
    expect( 8 != 7 ).toEqual(true ); 
   

});


test('test_equality_comparison_algorithm', () => {
    expect(0 != null).toEqual(true);
    expect(false+true).toEqual(1);
    expect(true+true).toEqual(2);
    expect(y /"2").toEqual(3);
    expect(123+'num'+321).toEqual('123num321');
    expect('true' == true).toEqual(false);
    expect('false' === false ).toEqual(false);
    expect(x == '2' ).toEqual(true);
    expect('Serhii' + ' ' + 'Yatsyn').toEqual('Serhii Yatsyn');
});