var car = {
  brand: "Nissan",
  getBrand: function(){
    console.log(this.brand);
  }
};

var getCarBrand = car.getBrand;
getCarBrand();   // output: undefined


//Quote: //https://laptrinhx.com/the-final-steps-to-mastering-javascript-s-this-keyword-1168676721/

// 5.a
/*
Even though getCarBrand appears to be a reference to car.getBrand(), in fact, it’s just another reference to getBrand() itself. 
We already know that the call-site is what matters in determining the context, and here, the call-site is getCarBrand(), which is a plain and simple function call.
*/


/* FIX

if we want to keep the reference to the original object, 
we need to explicitly bind the getBrand() function to the car object when we assign it to the getCarBrand variable. 
We can do this by using the bind() method.
*/

var getCarBrand = car.getBrand.bind(car);
getCarBrand();   // output: nissan


//opg. 5B
/*
Even though we use car.getBrand, we actually only get the function getBrand() which is attached to the button object.

Passing a parameter to a function is an implicit assignment, so what happens here is almost the same as in the previous example. The difference is that now car.getBrand is not explicitly assigned, but implicitly. And the result is pretty much the same—what we get is a plain function, bound to the button object.

In other words, when we execute a method on an object, which is different from the object upon which the method was originally defined, the this keyword no longer refers to the original object, rather to the object that invokes the method.

With reference to our example: we are executing car.getBrand on el (the button element), not the car object, upon which it was originally defined. Consequently, this no longer refers to car, rather to el.
*/

//el.addEventListener("click", car.getBrand.bind(car));