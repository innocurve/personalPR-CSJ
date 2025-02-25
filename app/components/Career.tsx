'use client'

import { useState, useMemo } from 'react'
import SophisticatedButton from './SophisticatedButton'
import { useLanguage } from '../hooks/useLanguage'
import { translate } from '../utils/translations'

type Certification = {
  name: string;
  organization: string;
}

type CertificationsByLanguage = {
  [key: string]: Certification[];
}

export default function Certifications() {
  const [isExpanded, setIsExpanded] = useState(false)
  const { language } = useLanguage()

  const certifications: CertificationsByLanguage = useMemo(() => ({
    ko: [
      {
        name: "생활스포츠지도사 야구",
        organization: "국가자격증: 문화체육관광부"
      },
      {
        name: "퍼스널체력육성지도사 1급",
        organization: "한국스포츠지도사연구협회"
      },
      {
        name: "체형관리지도사 1급",
        organization: "한국스포츠지도사연구협회"
      },
      {
        name: "AI활용전문가 1급",
        organization: "주무부처: 과학기술정보통신부"
      },
      {
        name: "인공지능(AI)전문가 1급",
        organization: "주무부처: 과학기술정보통신부"
      },
      {
        name: "챗GPT활용지도사 1급",
        organization: "주무부처: 과학기술정보통신부"
      }
    ],
    en: [
      {
        name: "Baseball Sports Instructor",
        organization: "National Certification: Ministry of Culture, Sports and Tourism"
      },
      {
        name: "Personal Fitness Training Instructor Level 1",
        organization: "Korea Sports Instructor Research Association"
      },
      {
        name: "Body Management Instructor Level 1",
        organization: "Korea Sports Instructor Research Association"
      },
      {
        name: "AI Utilization Expert Level 1",
        organization: "Ministry of Science and ICT"
      },
      {
        name: "Artificial Intelligence (AI) Expert Level 1",
        organization: "Ministry of Science and ICT"
      },
      {
        name: "ChatGPT Utilization Instructor Level 1",
        organization: "Ministry of Science and ICT"
      }
    ],
    ja: [
      {
        name: "生活スポーツ指導者 野球",
        organization: "国家資格：文化体育観光部"
      },
      {
        name: "パーソナルフィットネス育成指導者 1級",
        organization: "韓国スポーツ指導者研究協会"
      },
      {
        name: "体型管理指導者 1級",
        organization: "韓国スポーツ指導者研究協会"
      },
      {
        name: "AI活用専門家 1級",
        organization: "主務部処：科学技術情報通信部"
      },
      {
        name: "人工知能(AI)専門家 1級",
        organization: "主務部処：科学技術情報通信部"
      },
      {
        name: "ChatGPT活用指導者 1級",
        organization: "主務部処：科学技術情報通信部"
      }
    ],
    zh: [
      {
        name: "生活体育指导员 棒球",
        organization: "国家资格：文化体育观光部"
      },
      {
        name: "个人健身培训指导员 一级",
        organization: "韩国体育指导员研究协会"
      },
      {
        name: "体型管理指导员 一级",
        organization: "韩国体育指导员研究协会"
      },
      {
        name: "AI应用专家 一级",
        organization: "主管部门：科学技术信息通信部"
      },
      {
        name: "人工智能(AI)专家 一级",
        organization: "主管部门：科学技术信息通信部"
      },
      {
        name: "ChatGPT应用指导员 一级",
        organization: "主管部门：科学技术信息通信部"
      }
    ]
  }), [])

  const currentCertifications = useMemo(() => {
    return certifications[language] || certifications['ko']
  }, [language, certifications])

  const displayedCertifications = useMemo(() => {
    return isExpanded ? currentCertifications : currentCertifications.slice(0, 3)
  }, [isExpanded, currentCertifications])

  return (
    <section className="mb-4 px-4 md:px-6 lg:px-8" role="region" aria-label="자격">
      <h2 className="text-3xl font-bold text-center mb-8">
        <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 bg-clip-text text-transparent">
          {translate('sectionTitle', language)}
        </span>
      </h2>
      <div className="space-y-4">
        {displayedCertifications.map((cert, index) => (
          <div 
            key={index} 
            className={`pb-4 ${index !== displayedCertifications.length - 1 ? 'border-b border-gray-200' : ''}`}
            role="article"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-1">
              {cert.name}
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              {cert.organization}
            </p>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <SophisticatedButton 
          expanded={isExpanded} 
          onClick={() => setIsExpanded(!isExpanded)} 
          language={language}
          aria-expanded={isExpanded}
          aria-controls="certifications-list"
        />
      </div>
    </section>
  )
}