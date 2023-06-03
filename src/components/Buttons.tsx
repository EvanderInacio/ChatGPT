import IconTrash from "./icons/IconTrash"
import IconBoxArrowUpRight from "./icons/IconBoxArrowUpRight"
import IconGithub from "./icons/IconGithub"
import IconThemeLightDark from "./icons/IconThemeLightDark"

interface Props {
  label: string
  onClear: () => void
  themes: () => void
}

export default function Buttons({ label, onClear, themes }: Props) {
  return (
    <div>
      <div onClick={onClear} className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
        <div className="mr-3"><IconTrash width={16} height={16}/></div>
        <div className="flex-1 truncate">{label}</div>
      </div>

      <div onClick={themes} className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
        <div className="mr-3"><IconThemeLightDark width={16} height={16}/></div>
        <div className="flex-1 truncate">Tema</div>
      </div>

      <a href="https://help.openai.com/en/collections/3742473-chatgpt" target="_blank"  className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
        <div className="mr-3"><IconBoxArrowUpRight width={16} height={16}/></div>
        <div className="flex-1 truncate">Help & FAQ</div>
      </a>

      <a href="https://github.com/EvanderInacio/ChatGPT" target="_blank" className="flex items-center rounded-md p-3 text-sm cursor-pointer hover:bg-gray-500/20">
        <div className="mr-3"><IconGithub width={16} height={16}/></div>
        <div className="flex-1 truncate">Github</div>
      </a>

    </div>
  )
}