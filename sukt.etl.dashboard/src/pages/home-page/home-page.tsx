import { Button } from 'antd';
import { Guid } from 'guid-typescript';
import { useRef, useState } from 'react';



const HomePage = () => {

  const ws = useRef<WebSocket | null>(null);
  const [message, setMessage] = useState('');
  const conncetionWebSocket = () => {
    ws.current = new WebSocket('ws://localhost:8002/im');

    ws.current.onmessage = e => {
      setMessage(e.data)
    }
    ws.current.onopen = e => {
      console.log(e);
      
      console.log("链接成功了")
    }
    ws.current.onclose=e=>{
      console.log(e)
      console.log("链接关闭了")
    }
    return () => {
      ws.current?.close();
    };
  }
  /**
     * 发送消息
     */
  const websocketsend = () => {
    // console.log(ws.current?.);

    var msg = {
      id: Guid.create().toString(),
      TargetAction: "im.login",
      body: { 
        uid: "asdasdasdasdasdadsada" 
      }
    };
    console.log(ws.current);
    ws.current?.send(JSON.stringify(msg))
  }
  return (
    <div>主頁

      <Button ghost={true} onClick={() => conncetionWebSocket()} type="primary" >连接Websocket</Button>
      <Button ghost={true} onClick={() => websocketsend()} type="primary" >发送消息</Button>
      <div>
        {message}
      </div>
    </div>
  )

}
export default HomePage;