import qr from './qrcode.bmp';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-content">
        <ul className="page">
          <li >
            {title(
              <ul className="nav">
                <li>
                  <h2>十三月文学<img className='qrcode' src={qr}/></h2 >
                  
                </li>
                <li>
                  <p className='secondTitle'><font color="red"></font>乔治和杨星晨<font color="red"></font> 一生一世的微信公众号</p>
                </li>

              </ul>
            )}
          </li>
          <div className="content">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            {ariticleCardLi("猫城·惊梦", "https://mp.weixin.qq.com/s/nHBpsJdgH2S8t8tOw1e_Xw")}
            {ariticleCardLi("千呼万唤，洋洋碎雪漫天来", "https://mp.weixin.qq.com/s/XJN1evf-wJ-avKLie03tRw")}
            {ariticleCardLi("你一定要看到花开", "https://mp.weixin.qq.com/s?t=pages/image_detail&scene=23&__biz=MzkyMDU5ODgxNQ==&mid=2247483966&idx=1&sn=c85e6b5aab1a7b1d0511ddbdbbde8789")}
            {ariticleCardLi("欸乃一声山水“白”", "https://mp.weixin.qq.com/s?t=pages/image_detail&scene=23&__biz=MzkyMDU5ODgxNQ==&mid=2247483938&idx=1&sn=b3474713e57305b60f85f4aad4ddaadf")}
            {ariticleCardLi("！？：", "https://mp.weixin.qq.com/s/RmDtPMuXCPVadDd-I0a0Hw")}
            {ariticleCardLi("敬我一次又一次的起死回生", "https://mp.weixin.qq.com/s/MRAqxIVSdDlXxmBs-2muDA")}
            {ariticleCardLi("吃火锅了吗您？", "https://mp.weixin.qq.com/s/AZFbFXuQMM7tPzOO809lMQ")}
            {ariticleCardLi("莫道桑榆晚，为霞尚满天", "https://mp.weixin.qq.com/s/s8YBsNPrqpK0LC7JcGJ5cA")}
            {ariticleCardLi("致我们永远的女神！", "https://mp.weixin.qq.com/s/eTHB3osu_4AJtOX6ssTUfQ")}
            {ariticleCardLi("受训", "https://mp.weixin.qq.com/s/PL09e4fFui2hhbE-83Y8Qg")}
            {ariticleCardLi("金锁", "https://mp.weixin.qq.com/s/B8el0OfYFsBs6pUfGcvwtA")}
            {ariticleCardLi("雨夜·漫游·狂想", "https://mp.weixin.qq.com/s/6sqdhrmclnXpY4qc7OKVQQ")}
            {ariticleCardLi("癸卯·十三月·启程", "https://mp.weixin.qq.com/s/6KfvhbH1ELGJWeJCSS2hUg")}
          </div>
        </ul>
      </header>
    </div>
  );
}
function text(t) {
  return Card(t);
}
function ariticleCardLi(title, link) {
  return <li>{articleCard(title, link)}<br></br></li>
}
function articleCard(title, link) {
  return (
    <a href={link} target="_blank" className=''>
      <div className='articleCard'>
        <h3>{title}</h3>
        <p className='array'><i className="arrow right"></i></p>
      </div>
    </a>
  )

}
function Card(widget) {
  return (
    <div className="card">
      {widget}
    </div>
  )

}
function title(widget) {
  return (
    <div className="titleBox">
      {widget}
    </div>
  )
}
function center(widget) {
  return (
    <div className="center">
      {widget}
    </div>)
}
function listview(widget) {
  return (
    <div className="listview">
      {widget}
    </div>)
}

export default App;
