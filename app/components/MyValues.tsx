'use client'

import { useState } from 'react'
import { Language, translate } from '../utils/translations'
import SophisticatedButton from './SophisticatedButton'

interface MyValuesProps {
  language: Language
}

const MyValues: React.FC<MyValuesProps> = ({ language }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const content = {
    ko: [
      translate('valuesDescription', language),
      "인공지능(AI)은 청년들에게 새로운 기회를 제공하며, 미래를 변화시키고 있습니다. 하지만 이러한 기술이 모든 청년에게 공평하게 다가가고 있는지 고민해볼 필요가 있습니다.",
      "AI는 소수만이 누리는 특권이 아니라, 누구나 쉽게 배우고 활용할 수 있는 자원이 되어야 합니다. 기술의 장벽을 낮추고, 더 많은 청년이 AI를 통해 성장할 수 있어야 합니다.",
      "기술은 더 나은 미래를 향한 다리이며, 청년은 그 미래의 주인공입니다. 그리고 그 여정에서 스포츠는 도전과 협력의 가치를 키우는 중요한 역할을 합니다.",
      "감사합니다."
    ],
    en: [
      translate('valuesDescription', language),
      "Artificial Intelligence (AI) is providing new opportunities for young people and transforming the future. However, we need to consider whether this technology is reaching all young people equally.",
      "AI should not be a privilege enjoyed by only a few, but a resource that anyone can easily learn and utilize. We need to lower technological barriers so that more young people can grow through AI.",
      "Technology is a bridge to a better future, and young people are the protagonists of that future. And in this journey, sports plays a crucial role in fostering the values of challenge and cooperation.",
      "Thank you."
    ],
    ja: [
      translate('valuesDescription', language),
      "人工知能（AI）は若者に新しい機会を提供し、未来を変えています。しかし、この技術が全ての若者に公平に届いているかを考える必要があります。",
      "AIは一部の人だけが享受する特権ではなく、誰もが簡単に学び、活用できるリソースでなければなりません。技術の壁を低くし、より多くの若者がAIを通じて成長できるようにする必要があります。",
      "技術はより良い未来への架け橋であり、若者はその未来の主役です。そしてその過程で、スポーツは挑戦と協力の価値を育む重要な役割を果たします。",
      "ありがとうございます。"
    ],
    zh: [
      translate('valuesDescription', language),
      "人工智能（AI）正在为年轻人提供新的机会，并正在改变未来。但是，我们需要思考这项技术是否正在公平地惠及所有年轻人。",
      "AI不应该是少数人享有的特权，而应该成为人人都能轻松学习和运用的资源。我们需要降低技术门槛，让更多年轻人能够通过AI实现成长。",
      "技术是通往更美好未来的桥梁，年轻人是这个未来的主角。在这个过程中，体育在培养挑战和合作价值观方面发挥着重要作用。",
      "谢谢。"
    ]
  }

  const currentContent = content[language] ?? content['ko'] ?? [];

  return (
    <div className="flex flex-col gap-8">
      <div className="w-full">
        <div className="mb-6 relative px-10 py-6 flex flex-col items-center">
          <svg className="absolute top-0 left-0 w-12 h-12 text-gray-300 transform -translate-x-1/6 -translate-y-1/6" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <h2 className="text-2xl sm:text-3xl relative z-10 text-center mb-6">
            {translate('valuesDescription', language).split('\n').map((line: string, i: number) => (
              <span key={i} className="block text-2xl sm:text-4xl font-mono tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 whitespace-nowrap">
                {line}
              </span>
            ))}
          </h2>
          <svg className="absolute bottom-0 right-0 w-12 h-12 text-gray-300 transform translate-x-1/6 translate-y-1/6 rotate-180" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
        </div>
        <div className="space-y-4">
          {(isExpanded ? currentContent.slice(1) : currentContent.slice(1, 3)).map((paragraph, index) => (
            <p key={index} className="text-gray-600">{paragraph}</p>
          ))}
        </div>
        <div className="flex justify-center mt-6">
          <SophisticatedButton 
            expanded={isExpanded} 
            onClick={() => setIsExpanded(!isExpanded)} 
            language={language}
          />
        </div>
      </div>
    </div>
  )
}

export default MyValues