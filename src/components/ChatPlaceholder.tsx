import IconArrowRight from './icons/IconArrowRight'
import IconDanger from './icons/IconDanger'
import IconLightningCharge from './icons/IconLightningCharge'
import IconSun from './icons/IconSun'

export default function ChatPlaceholder() {
  return (
    <div className="m-5 ">
      <h3 className="text-4xl font-bold text-center my-8">ChatGPT</h3>

      <div className="flex flex-col md:flex-row gap-5 m-auto mb-8 md:max-w-4xl">
        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconSun width={24} height={24} className="mr-3" />
            Examples
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            "Explain quantum computing in simple terms" <IconArrowRight />
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            "Got any creative ideas for a 10 year old’s birthday?"{' '}
            <IconArrowRight />
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            "How do I make an HTTP request in Javascript?" <IconArrowRight />
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconLightningCharge width={24} height={24} className="mr-3" />
            Capabilities
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            Remembers what user said earlier in the conversation
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            Allows user to provide follow-up corrections
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            Trained to decline inappropriate requests
          </div>
        </div>

        <div>
          <div className="flex justify-center items-center text-lg mb-3">
            <IconDanger width={24} height={24} className="mr-3" />
            Limitations
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            May occasionally generate incorrect information
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            May occasionally produce harmful instructions or biased content
          </div>
          <div className="bg-white/5 rounded text-center text-sm text-white mb-3 items-center p-5 flex gap-2">
            Limited knowledge of world and events after 2021
          </div>
        </div>
      </div>
    </div>
  )
}
