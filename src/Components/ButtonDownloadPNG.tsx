import {Panel , useReactFlow,getRectOfNodes, getTransformForBounds, Node} from 'reactflow'
import {toPng} from 'html-to-image'




export function ButtonDownloadPNG(nodes){

  console.log(nodes)

  function downloadImage(dataUrl:string){
    const a = document.createElement('a')
    a.setAttribute('download' , 'reactflow.png'),
    a.setAttribute('href', dataUrl)

    a.click()
  }

  const imageWidth  =window.innerWidth
  const imageHeight = window.innerHeight

  function DownloadButton(){

    const data = document.querySelector('.react-flow__viewport')

    toPng(data, {
      backgroundColor: '#fff',
      width: imageWidth,
      height: imageHeight,
      style: {
        width: imageWidth,
        height: imageHeight,
      },
    }).then(downloadImage)
  }
  

  return (
    <button className=" bg-red-100" onClick={DownloadButton}>
      Baixar
    </button>
  )
}