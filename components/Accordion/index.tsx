import plus from "../../assets/images/icon-plus.svg"
import minus from "../../assets/images/icon-minus.svg"
import { FAQData } from "@/app/page"
import Image from "next/image"
interface AccordionProps {
  data: FAQData
  onOpen: (id: number) => void
  onKeyDown: (e: { keyCode: number }, id: number) => void
  isOpen: boolean
}

function Accordion({
  onOpen,
  onKeyDown,
  isOpen,
  data: { title, paragraph, id },
}: AccordionProps) {
  return (
    <li>
      <article className='py-6'>
        <div
          tabIndex={id}
          role='button'
          aria-expanded={isOpen}
          className='cursor-pointer flex flex-row justify-between transition-colors'
          onClick={() => onOpen(id)}
          onKeyDown={(e) => onKeyDown(e, id)}
        >
          <div>
            <h2 className='text-left leading-tight transition-colors text-primary-darkPurple hover:text-secondary-pink text-lg drop-shadow-[0px 4px 4px rgba(0, 0, 0, 0.25)] font-semibold'>
              {title}
            </h2>
          </div>

          <div className='ml-6 min-w-[30px]'>
            {isOpen ? (
              <Image
                src={minus}
                height={30}
                width={30}
                alt='A button shape with a minus symbol inside it'
              />
            ) : (
              <Image
                src={plus}
                height={30}
                width={30}
                alt='A button shape with a plus symbol inside it'
              />
            )}
          </div>
        </div>
        {isOpen && (
          <div>
            <p className='pt-6 leading-6 text-base text-primary-palePurple'>
              {paragraph}
            </p>
          </div>
        )}
      </article>
    </li>
  )
}

export default Accordion
