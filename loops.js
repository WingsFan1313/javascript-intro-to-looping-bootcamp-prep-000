function forLoop(myArray)
{
  for (i = 0; i < 25; i++)
  {
    if (i == 1)
    {
      myArray.push(`I am ${i} strange loop.`);
    }
    else
    {
      myArray.push(`I am ${i} strange loops.`);
    }
  }
  return myArray;
}

function whileLoop(myNumber)
{
  while (myNumber > 0)
  {
    console.log(myNumber);
    myNumber--;
  }
  return "done";
}

function doWhileLoop(myArray)
{
  function maybeTrue()
  {
    return myArray.length > 0;
  }

  do
  {
    myArray.pop();
  }
  while (maybeTrue());
  return myArray;
}
