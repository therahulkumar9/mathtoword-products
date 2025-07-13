"use client"

import React, { useState } from "react"
import {
  FileText,
  Languages,
  Scissors,
  FileStack,
  Edit3,
  FolderOpen,
  RefreshCcw,
} from "lucide-react"

interface Product {
  id: string
  title: string
  description: string
  link: string
  icon: React.ReactNode
  status: "live" | "coming-soon"
  gradient: string
}

const products: Product[] = [
  {
    id: "mathtoword",
    title: "MathToWord",
    description: "Transform Math PDFs & Notes into Word Docs Instantly.",
    link: "https://mathtoword.com",
    icon: <FileText className="w-7 h-7" />,
    status: "live",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "unicode-converter",
    title: "Unicode ⇄ Kruti Dev Converter",
    description:
      "The fastest and most accurate tool to convert Hindi text between Unicode (Mangal) and Kruti Dev fonts.",
    link: "https://converter.mathtoword.com/",
    icon: <RefreshCcw className="w-7 h-7" />,
    status: "live",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    id: "translator",
    title: "Hindi ⇄ English Translator",
    description:
      "The most accurate AI-powered tool to translate text between Hindi and English with multiple style options.",
    link: "https://translator.mathtoword.com/",
    icon: <Languages className="w-7 h-7" />,
    status: "live",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "pdf-splitter",
    title: "PDF Splitter",
    description:
      "Upload your PDF and split it into smaller files with multiple options. Choose from various splitting modes and download individually or as a ZIP file.",
    link: "https://splitpdf.mathtoword.com/",
    icon: <Scissors className="w-7 h-7" />,
    status: "live",
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: "word-merger",
    title: "Word File Merger",
    description:
      "Combine multiple Word documents into a single file effortlessly. Maintain formatting and merge DOCX files with ease.",
    link: "https://mergeword.mathtoword.com/",
    icon: <FileStack className="w-7 h-7" />,
    status: "live",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    id: "pdf-editor",
    title: "PDF Editor",
    description:
      "Edit PDF files online with our powerful editor. Add text, images, annotations, and make changes without downloading software.",
    link: "https://editpdf.mathtoword.com/",
    icon: <Edit3 className="w-7 h-7" />,
    status: "coming-soon",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    id: "docx-opener",
    title: "DOCX Opener",
    description:
      "Open and view DOCX files in your browser instantly. No software installation required - just upload and view your documents.",
    link: "https://viewdocx.mathtoword.com/",
    icon: <FolderOpen className="w-7 h-7" />,
    status: "coming-soon",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    id: "ai-converter",
    title: "File Converter",
    description:
      "Convert between multiple file formats. Support for documents, images, and more.",
    link: "https://convert.mathtoword.com/",
    icon: <RefreshCcw className="w-7 h-7" />,
    status: "coming-soon",
    gradient: "from-green-500 to-emerald-600",
  },
]

export default function ProductGrid() {
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null)

  const handleProductClick = (product: Product) => {
    if (product.status === "live") {
      window.open(product.link, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <div className="min-h-screen  bg-gray-950">
      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className={`relative group ${product.status === "live"
                  ? "cursor-pointer"
                  : "cursor-not-allowed"
                }`}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
              onClick={() => handleProductClick(product)}
            >
              <div
                className={`relative bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg border border-gray-200/50 transition-all duration-200 ease-out overflow-hidden ${product.status === "live"
                    ? "group-hover:shadow-2xl group-hover:scale-[1.02]"
                    : "opacity-60"
                  }`}
              >
                {/* Animated corner dots */}
                <div className="absolute inset-0 pointer-events-none">
                  {/* Top-left dot */}
                  <div
                    className={`absolute w-1.5 h-1.5 bg-black rounded-full transition-all duration-200 ${hoveredProduct === product.id
                        ? "top-4 left-4 opacity-100"
                        : "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0"
                      }`}
                  ></div>

                  {/* Top-right dot */}
                  <div
                    className={`absolute w-1.5 h-1.5 bg-black rounded-full transition-all duration-200 ${hoveredProduct === product.id
                        ? "top-4 right-4 opacity-100"
                        : "top-1/2 right-1/2 translate-x-1/2 -translate-y-1/2 opacity-0"
                      }`}
                  ></div>

                  {/* Bottom-left dot */}
                  <div
                    className={`absolute w-1.5 h-1.5 bg-black rounded-full transition-all duration-200 ${hoveredProduct === product.id
                        ? "bottom-4 left-4 opacity-100"
                        : "bottom-1/2 left-1/2 -translate-x-1/2 translate-y-1/2 opacity-0"
                      }`}
                  ></div>

                  {/* Bottom-right dot */}
                  <div
                    className={`absolute w-1.5 h-1.5 bg-black rounded-full transition-all duration-200 ${hoveredProduct === product.id
                        ? "bottom-4 right-4 opacity-100"
                        : "bottom-1/2 right-1/2 translate-x-1/2 translate-y-1/2 opacity-0"
                      }`}
                  ></div>
                </div>

                {/* Status indicator */}
                <div className="absolute top-4 right-4 z-10">
                  {product.status === "live" ? (
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  ) : (
                    <div className="px-3 py-1 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 text-xs font-semibold rounded-full border border-amber-200">
                      Coming...
                    </div>
                  )}
                </div>

                {/* Card content */}
                <div className="relative z-10 p-8 flex items-center justify-center min-h-[200px]">
                  {/* Icon - shown when NOT hovering */}
                  <div
                    className={`transition-all duration-200 ease-out ${hoveredProduct === product.id
                        ? "opacity-0 scale-95"
                        : "opacity-100 scale-100"
                      }`}
                  >
                    {/* Icon with gradient background */}
                    <div className="mb-6 flex justify-center">
                      <div
                        className={`relative w-16 h-16 rounded-2xl flex items-center justify-center ${product.status === "live"
                            ? "bg-gray-100"
                            : "bg-gray-100"
                          } shadow-sm`}
                      >
                        <div
                          className={`${product.status === "live"
                              ? "text-gray-700"
                              : "text-gray-400"
                            }`}
                        >
                          {product.icon}
                        </div>
                      </div>
                    </div>

                    {/* Title */}
                    <h3
                      className={`font-semibold text-lg text-center ${product.status === "live"
                          ? "text-gray-900"
                          : "text-gray-500"
                        }`}
                    >
                      {product.title}
                    </h3>
                  </div>

                  {/* Title + Description - shown when hovering */}
                  <div
                    className={`absolute inset-8 flex flex-col items-center justify-center transition-all duration-200 ease-out ${hoveredProduct === product.id
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-95"
                      }`}
                  >
                    <h3
                      className={`font-semibold text-lg text-center mb-4 ${product.status === "live"
                          ? "text-gray-900"
                          : "text-gray-500"
                        }`}
                    >
                      {product.title}
                    </h3>
                    <p className="text-gray-600 text-sm text-center leading-relaxed">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Subtle hover background */}
                {product.status === "live" && (
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-50 to-gray-100 opacity-0 group-hover:opacity-50 transition-opacity duration-200 pointer-events-none"></div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
