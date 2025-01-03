import React, { useState } from "react";
import { Nav, TabContent } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useEffect } from "react";


function Detail(props){
    let{id} = useParams();
    let [tap, setTap] = useState(0);
    return (
        <div className="container">
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTap(0) }} eventKey="link0">버튼0</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTap(1) }} eventKey="link0">버튼1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link onClick={()=>{ setTap(2) }} eventKey="link0">버튼2</Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent tap={tap}/>
            <div className="row">
                <div className="col-md-6">
                    <img src={"/img/shoes" + (Number(id)+1) + ".jpg"} width="100%" />
                </div>
                <div className="col-md-6">
                    <h4 className="pt-5">{props.shoes[id].title}</h4>
                    <p>{props.shoes[id].content}</p>
                    <p>{props.shoes[id].price}</p>
                    <button className="btn btn-danger">주문하기</button>
                </div>
            </div>
        </div>
    )


    function TabContent({tap}){
        let [fade, setFade] = useState('')
         useEffect( ()=>{
          setTimeout(()=>{ setFade('end')},10)
          return ()=>{
              setFade('')
          }
         } ,[tap])
        let [fade2, setFade2] = useState("")
         useEffect(()=>{
            setFade2('end')
            return ()=>{
                setFade2("")
            }
         },[])
         return (
            <div className={'container start ' + fade2}>
              { [<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][tap] }
            </div>
          )
        }
    }
export default Detail;