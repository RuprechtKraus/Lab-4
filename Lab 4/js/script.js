function varDump(someParam) 
{
  console.log("type: " + typeof (someParam) + ", value: ", someParam);
};

function pulloutArray(arr) 
{
  let array = [];

  if (Array.isArray(arr)) 
  {
    arr.forEach(function (item, i, arr) 
    {
      if (Array.isArray(item)) 
      {
        for (let j = 0; j < item.length; j++) 
        {
          if (Number.isInteger(item[j])) 
          {
            array.push(item[j]);
          }
        }
      }
      if (Number.isInteger(item)) 
      {
        array.push(item);
      }
    })
    return array;
  } 
  else 
  {
    return false;
  }
}

var odd = function (number) 
{
  return number % 2 === 1;
}

var even = function (number) 
{
  return number % 2 === 0;
}

var eliminateZero = function (number) 
{
  return (number !== 0);
}

var numberCount = 0;

var everySecond = function (number, i) 
{
  var count = ++i % 2;

  if(count === 0)
  {
    return number;
  }
  return false;
}

function filterArray(arr, filter) 
{
  var resultArray = [];

  for (i = 0; i < arr.length; i++) 
  {
    if (filter(arr[i], i)) 
    {
      resultArray.push(arr[i]);
    }
  }

  return resultArray;
}

function toOneDimensionalArray(Arr) 
{
  var buf_Arr = [];

  for (var j = 0; j <= Arr.length - 1; j++) 
  {
    Array.isArray(Arr[j]) ? buf_Arr = spliceArrays(buf_Arr, Arr[j]) : buf_Arr.push(Arr[j]);
  }

  return buf_Arr;
}

function spliceArrays(Arr1, Arr2) 
{
  var buf_result = [];
  
  for (var i = 0; i <= Arr1.length; i++) 
  {
    if (i != Arr1.length) 
    {
      Array.isArray(Arr1[i]) ?  buf_result = spliceArrays(buf_result, Arr1[i]) :  buf_result.push(Arr1[i]); 
    }
  }

  for (var i = 0; i <= Arr2.length; i++) 
  {
    if (i != Arr2.length) 
    {
      Array.isArray(Arr2[i]) ? buf_result = spliceArrays(buf_result, Arr2[i]) : buf_result.push(Arr2[i]); 
    }
  }

  return buf_result;
}

function isArrayEqual(Arr1, Arr2) 
{
  if (!Array.isArray(Arr1) || !Array.isArray(Arr2) || Arr1.length != Arr2.length) 
  {
    return false;
  }

  Arr1 = toOneDimensionalArray(Arr1);
  Arr2 = toOneDimensionalArray(Arr2);

  for (var i = 0; i < Arr1.length; i++) 
  {
    if ((Arr1[i] !== Arr2[i]) && (!isNaN(Arr1[i]) && !isNaN(Arr2[i]))) {
      return false;
    }
  }

  return true;
}

var arr = [0, 1, 2, 3, 4, 2, 5, 6];

function like() 
{
  this.countLike = 0;

  this.Like = function() 
  {
    this.countLike++;
  }
  
  this.Dislike = function() 
  {
    this.countLike--;
  }
}

var likes = new like();

function getUserProfileFromObj(obj)
{
	if (obj !== undefined)
	{
		for (var key in obj) 
		{	
			console.log(key + ": " + obj[key]);
		}
	}
	else
	{
		console.log(null);
	}
}

var Person =
{
	age: undefined,
	name: undefined,
	setName: function(name) {	this.name = name;	},
	setAge: function(age)	{	this.age = age; },
	print: function() 
	{
		console.log("age: " + this.age);
		console.log("name: " + this.name);
	},
}

var Student =
{
	course: 4,
	group: "П-41",
	nextCourse: function(currentCourse) { return currentCourse + 1; },
	print: function() 
	{
		console.log("age: " + this.age);
		console.log("name: " + this.name);
		console.log("course: " + this.course);
		console.log("group: " + this.group);
		console.log("next course: " + Student.nextCourse(this.course));
	},
}

Student.__proto__ = Person;

var Teacher =
{
	disciplines: "English, Programming, Eating",
	addDiscipline: function addDiscipline(newDiscipline) { this.disciplines += (", " + newDiscipline); },
	removeDiscipline: function removeDiscipline(rDiscipline) { this.disciplines = this.disciplines.replace(rDiscipline, "") },
	print: function()
	{
		console.log("age: " + this.age);
		console.log("name: " + this.name);
		console.log("disciplines: " + this.disciplines);
	},
}

Teacher.__proto__ = Person;