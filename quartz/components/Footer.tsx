import { QuartzComponentConstructor, QuartzComponentProps } from "./types"
import style from "./styles/footer.scss"
import { version } from "../../package.json"

interface Options {
  links: Record<string, string>
}

const imageFocusing = `document.querySelectorAll('img').forEach( 
  (image)=>{
      image.addEventListener('click', focusImage)
  }
)

function focusImage(){
  if (this.classList.contains('focusedImage')){
      document.exitFullscreen()
  }else{
      this.requestFullscreen()
  }
  this.classList.toggle('focusedImage')
}`

export default ((opts?: Options) => {
  function Footer({ displayClass }: QuartzComponentProps) {
    const year = new Date().getFullYear()
    const links = opts?.links ?? []
    return (
      <footer class={`${displayClass ?? ""}`}>
        <hr />
        <p>
          Created with <a href="https://quartz.jzhao.xyz/" target="_blank">Quartz v{version}</a>, © {year}
        </p>
        <ul>
          {Object.entries(links).map(([text, link]) => (
            <li>
              <a href={link}>{text}</a>
            </li>
          ))}
        </ul>
        <script>{imageFocusing}</script>
      </footer>
    )
  }

  Footer.css = style
  return Footer
}) satisfies QuartzComponentConstructor
