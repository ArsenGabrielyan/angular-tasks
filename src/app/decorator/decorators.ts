function printSomething(target: any, value: any){
     Object.defineProperty(target,value,{
          set: (newVal:any)=>value=newVal,
          get: ()=>value
     })
}
export {printSomething}