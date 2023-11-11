import {Panel , useReactFlow,getRectOfNodes, getTransformForBounds, Node} from 'reactflow'
import {toPng} from 'html-to-image'




export function ButtonDownloadPNG(){


  function downloadImage(dataUrl:string){
    const a = document.createElement('a')
    a.setAttribute('download' , 'reactflow.png'),
    a.setAttribute('href', dataUrl)

    a.click()
  }

  const imageWidth  =window.innerWidth
  const imageHeight = window.innerHeight

  function DownloadButton(){

    const data = document.querySelector('.react-flow__viewport') as HTMLElement;

    toPng(data, {
      backgroundColor: '#fff',
      width: imageWidth,
      height: imageHeight,
     
    }).then(downloadImage)
  }
  

  return (
    <button className=" bg-red-100" onClick={DownloadButton}>
      Baixar
    </button>
  )
}