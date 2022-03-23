console.log()

a = 10
b = 20

function Myaddtionvalues(a,b){
    if(Number(a)>0){
        console.log(Number(a)+Number(b))
        console.log("the addition of ",a," and ",b," is ",(a+b))
    }
    else{
        console.warn("A cannot be less than 0")
    }
    
}

Myaddtionvalues(a,b)
Myaddtionvalues(45,28)
Myaddtionvalues(0,2)

c = 10
d = 90
Myaddtionvalues(c,d)

function Mysubtraction(c,d){
    if(Number(c)>0){
        console.log(Number(c)-Number(d))
        console.log("the subtraction of ",c," and ",d," is ",(c-d))
    }
    else{
        console.warn("c cannot be less than 0")
        alert('c cannot be less than')

    }
}
Mysubtraction(0,1)
Mysubtraction(10,11)


function Mydivision (a,b){
    if(b<=0){
        console.warn("B cannot be zero or less than 0")
        alert('b cannot be less than 0')
    }
    else
    console.log("The division of ",a,"and ",b,"is ", a/b)
}

Mydivision(5,3)
Mydivision(5,0)
Mydivision(9000,9)

user = ['sudam','akhil','kumar']
function verifyuser(username){
    a = user.toString()
    if(a.include(username)){
        console.log("you are verified user welcome ",username)
    }
    else{
        console.log("user not found register your account",username)
    }
}

login="akhil"
verifyuser(login)
