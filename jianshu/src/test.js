import React, {useState, useEffect, useRef, createRef,useMemo} from "react";

export default function FriendStatus(props) {
   /* const [count,setCount] = useState(0);
    useEffect(()=>{
        document.title = `you clicked ${count} times`
    })
    return(
        <div>
            <p>you clicked ${count} times</p>
            <button onClick={()=>setCount(count +1)}> Click me!</button>
        </div>
    )*/
    let  [count,setCount] = useState(0)
    let  [id,setID] = useState(0)
    const [obj,setObj] =useState({num:1})
    const ref0 = useRef()
    const ref1 = createRef()
    const currentCount = useRef(null);





    useEffect(()=>{
       setCount(3)

       let Timeout  = setTimeout(function () {
           console.log(count,'setTimeout')
       },1000)

        Promise.resolve().then(()=>{
            console.log(count,'promise')
        })

       /* return function cleanUp() {
          clearTimeout(Timeout)
        }*/
       console.log('didmount')

    },[count])

/*
    useEffect(()=>{
        console.log(count,'监听count')
        currentCount.current = count;
    },[])
*/







    // react更新state为异步更新，所以每当setTimeout的时候会为上一个state
    const log = () =>{
        setID(id+1)
        setTimeout(()=>{
            console.log(id)
        },1000)
    }

    const log1 = () =>{
        setID(id=>{
            let newId = id +1
            console.log(newId)
            return id+1
        })
    }



    // 方法失败！ react不允许state的值受其他的值影响，所以当state为对象的时候，采用浅克隆或者深克隆
    const clickMe = () =>{
        setObj(v=>{
            let newObj = v
            newObj.num = v.num + 1
            return newObj

        })
    }

    //成功！
    const clickMe1 = () =>{
        setObj(v=>{
            let newObj = Object.assign({},v)
            newObj.num = v.num + 1
            return newObj

        })
    }
    const clickMe2 = () =>{
        setObj(v=> v.num+1)
    }

    if(!ref0.current){
        console.log(ref0.current,'ref0.current')
        ref0.current = count
    }
    if(!ref1.current){  //每次state改变，都会重新执行createRef（）
        console.log(ref1.current,'ref1.current')
        ref1.current = count
    }


   return(
       <div>
           {count}times
           <button onClick={log}>点击</button>
           <button onClick={log1}>点击</button>
           <div>
               <button onClick={clickMe}>{obj.num}</button>
           </div>
           <div>
               <button onClick={clickMe1}>{obj.num}</button>
           </div>
           <div>
               <button onClick={clickMe2}>{obj.num}</button>
           </div>
           <button onClick={()=>{setCount(prevState => prevState + 1)}}>
                    +1
           </button>
           <ChildComponent  name={count}>{id}</ChildComponent>
           <div>
               ref0:{ref0.current}
           </div>
           <div>
               ref1:{ref1.current}
           </div>
       </div>
   )

}


function ChildComponent({name,children}){

    function changeXH(){
        console.log("小红改变了")
        return name +',小红来自湖北'

    }
    //const actionXH = changeXH(name) ;
    //防止子组件重复受其父组件更新的影响
    const actionXH = useMemo(()=>changeXH(name),[name]) ;

    return (
        <>
            <div>{actionXH}</div>
            <div>{children}</div>
        </>
    )

}

