let x = 0;
try
{
    throw("error");
}
catch(err)
{
    console.log("Inside the catch block");
}
finally
{
    console.log("Inside the finally block");
}