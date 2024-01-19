import {Panel , useReactFlow,getRectOfNodes, getTransformForBounds, Node} from 'reactflow'
import {toPng} from 'html-to-image'

interface ButtonDownloadPNGProps{
  title:string
}


export function ButtonDownloadPNG({title}:ButtonDownloadPNGProps){


  function downloadImage(dataUrl:string){
    const a = document.createElement('a')
    a.setAttribute('download' , `${title}.png`),
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
    <button className=" bg-blue-400 px-3 py-2 rounded text-white font-sm " onClick={DownloadButton}>
      Baixar
    </button>
  )
}