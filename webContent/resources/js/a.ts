interface IInterface{
    name:string
}
function showDialog(a:IInterface):void{
    alert(a.name)
}
class ClassA{
    name:string
    hello():string{
        return this.name;    
    }
}