function f(array,n)
{ if(array==null)
    return void 0;
if(n==null) return array[0];
if(n<0) return [];

return array.slice(-n);
};

document.writeln ("f([1,2,7,8],2)="+f([1,2,7,8],2)+"<br>");
document.writeln ("f([1,2,7,8],3)="+f([1,2,7,8],3)+"<br>");