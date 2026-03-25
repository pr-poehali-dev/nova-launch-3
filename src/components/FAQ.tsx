import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "Сколько стоит ремонт квартиры?",
    answer:
      "Стоимость зависит от площади, вида работ и выбранных материалов. Мы выезжаем на замер бесплатно и составляем подробную смету — вы видите цену каждой позиции заранее, без скрытых доплат.",
  },
  {
    question: "Сколько времени займёт ремонт?",
    answer:
      "Косметический ремонт однушки — около 2–3 недель, капитальный — от 1,5 до 3 месяцев в зависимости от объёма работ. Сроки фиксируются в договоре. Если задерживаемся по нашей вине — компенсируем.",
  },
  {
    question: "Работаете ли вы с материалами заказчика?",
    answer:
      "Да, можем работать как с нашими материалами, так и с вашими. Если хотите — подберём всё сами: у нас есть проверенные поставщики с хорошими ценами.",
  },
  {
    question: "Даёте ли вы гарантию на работы?",
    answer:
      "Даём гарантию 2 года на все выполненные работы. Если в этот период что-то пойдёт не так по нашей вине — устраняем за свой счёт.",
  },
  {
    question: "Можно ли сделать ремонт, пока мы живём в квартире?",
    answer:
      "Зависит от объёма работ. Косметику можно делать поэтапно. При капитальном ремонте с демонтажем лучше временно выехать — мы предупредим заранее и обсудим удобный для вас вариант.",
  },
  {
    question: "Как начать?",
    answer:
      "Просто напишите или позвоните — договоримся на бесплатный выезд. Замерим, обсудим пожелания, составим смету. Никаких обязательств до подписания договора.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}