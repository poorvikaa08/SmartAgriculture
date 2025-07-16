
"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, Camera, CloudRain, Sprout, TrendingUp, Mic, Shield, Smartphone, Globe, Users, Award, Target } from "lucide-react"

export default function SmartFarmingLanding() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-10">
              <Link href="/" className="text-2xl font-bold text-[#22c55e]">
                SmartFarm AI
              </Link>
              <nav className="hidden lg:flex items-center space-x-8">
                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-[#444444] text-sm font-medium hover:text-[#22c55e] transition-colors">
                    <span>Features</span>
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>Disease Detection</DropdownMenuItem>
                    <DropdownMenuItem>Weather Forecasting</DropdownMenuItem>
                    <DropdownMenuItem>Crop Recommendations</DropdownMenuItem>
                    <DropdownMenuItem>Market Insights</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-[#444444] text-sm font-medium hover:text-[#22c55e] transition-colors">
                    <span>Solutions</span>
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>For Farmers</DropdownMenuItem>
                    <DropdownMenuItem>For Agricultural Officers</DropdownMenuItem>
                    <DropdownMenuItem>For Vendors</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                  <DropdownMenuTrigger className="flex items-center space-x-1 text-[#444444] text-sm font-medium hover:text-[#22c55e] transition-colors">
                    <span>Resources</span>
                    <ChevronDown className="h-3 w-3" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem>User Guide</DropdownMenuItem>
                    <DropdownMenuItem>Video Tutorials</DropdownMenuItem>
                    <DropdownMenuItem>FAQs</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>

                <Link
                  href="/about"
                  className="text-[#444444] text-sm font-medium hover:text-[#22c55e] transition-colors"
                >
                  About
                </Link>
              </nav>
            </div>

            <div className="flex items-center space-x-3">
              <Button
                variant="outline"
                className="border-[#444444] text-[#444444] text-xs font-semibold px-4 py-2 h-8 hover:bg-gray-50 bg-transparent"
              >
                CONTACT
              </Button>
              <Button className="bg-[#22c55e] text-white text-xs font-semibold px-4 py-2 h-8 hover:bg-[#22c55e]/90">
                GET STARTED
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-[#212529] leading-tight">
                AI-Powered Smart Farming for the Modern Farmer
              </h1>
              <p className="text-lg text-[#6c757d] leading-relaxed">
                Revolutionize your agriculture with cutting-edge AI technology. Detect crop diseases, get weather insights, receive personalized crop recommendations, and access market prices - all in one intelligent platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#22c55e] text-white font-semibold px-8 py-3 text-sm hover:bg-[#22c55e]/90">
                  Start Free Trial
                </Button>
                <Button variant="outline" className="border-[#22c55e] text-[#22c55e] font-semibold px-8 py-3 text-sm hover:bg-[#22c55e]/10">
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl flex items-center justify-center shadow-2xl">
                <div className="relative w-80 h-80">
                  {/* Smartphone mockup */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-blue-400 rounded-[2rem] shadow-xl">
                    <div className="absolute inset-2 bg-white rounded-[1.5rem] flex flex-col items-center justify-center space-y-4">
                      <div className="text-6xl">🌱</div>
                      <div className="text-sm font-semibold text-gray-700">SmartFarm AI</div>
                      <div className="flex space-x-2">
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center shadow-lg">
                    <CloudRain className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#212529] mb-4">Intelligent Agriculture at Your Fingertips</h2>
            <p className="text-[#6c757d] text-lg max-w-3xl mx-auto">
              Our AI-powered platform combines advanced machine learning with user-friendly interfaces to provide comprehensive agricultural support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#dcfce7] rounded-full flex items-center justify-center">
                  <Camera className="w-8 h-8 text-[#22c55e]" />
                </div>
                <h3 className="text-lg font-semibold text-[#212529] mb-3">Disease Detection</h3>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  AI-powered image analysis to detect crop diseases instantly with 90% accuracy
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#dbeafe] rounded-full flex items-center justify-center">
                  <CloudRain className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <h3 className="text-lg font-semibold text-[#212529] mb-3">Weather Forecasting</h3>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  Real-time weather alerts and forecasts to optimize farming operations
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#fef3c7] rounded-full flex items-center justify-center">
                  <Sprout className="w-8 h-8 text-[#f59e0b]" />
                </div>
                <h3 className="text-lg font-semibold text-[#212529] mb-3">Crop Recommendations</h3>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  Personalized crop suggestions based on soil, climate, and market conditions
                </p>
              </CardContent>
            </Card>

            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#f3e8ff] rounded-full flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-[#8b5cf6]" />
                </div>
                <h3 className="text-lg font-semibold text-[#212529] mb-3">Market Insights</h3>
                <p className="text-sm text-[#6c757d] leading-relaxed">
                  Live market prices and analytics to maximize your farming profits
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#212529] mb-4">Transforming Agriculture Globally</h2>
            <p className="text-[#6c757d] text-lg max-w-3xl mx-auto">
              Join thousands of farmers who are already using SmartFarm AI to increase productivity and profitability
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-[#22c55e] mb-2">10,000+</div>
              <div className="text-sm text-[#6c757d]">Active Farmers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#22c55e] mb-2">90%</div>
              <div className="text-sm text-[#6c757d]">Disease Detection Accuracy</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#22c55e] mb-2">500+</div>
              <div className="text-sm text-[#6c757d]">Supported Crops</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#22c55e] mb-2">15+</div>
              <div className="text-sm text-[#6c757d]">Regional Languages</div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#22c55e] text-white font-semibold px-8 py-3 text-sm hover:bg-[#22c55e]/90">
              JOIN THE REVOLUTION
            </Button>
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#212529] mb-4">
              Complete Agricultural Intelligence Platform
            </h2>
            <p className="text-[#6c757d] text-lg max-w-3xl mx-auto">
              Everything you need to make data-driven farming decisions, from field to market
            </p>
          </div>

          {/* AI-Powered Disease Detection */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#22c55e] rounded-full flex items-center justify-center">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#212529]">AI-Powered Disease Detection</h3>
              </div>
              <p className="text-[#6c757d] leading-relaxed">
                Simply capture an image of your crop and our advanced AI models will instantly identify diseases, pests, and nutrient deficiencies. Get detailed treatment recommendations and prevention strategies tailored to your specific conditions.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">90% accuracy in disease identification</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">Instant treatment recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#22c55e] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">Works offline for remote areas</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-green-50 to-blue-50 rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative w-64 h-64 bg-white rounded-lg shadow-xl p-6">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🍃</div>
                    <div className="text-sm font-semibold text-gray-700 mb-2">Disease Detected</div>
                    <div className="text-xs text-gray-500 mb-4">Leaf Spot Disease</div>
                    <div className="w-full bg-red-100 rounded-full h-2 mb-4">
                      <div className="bg-red-400 h-2 rounded-full w-3/4"></div>
                    </div>
                    <div className="text-xs text-left space-y-1">
                      <div>• Apply copper fungicide</div>
                      <div>• Improve air circulation</div>
                      <div>• Remove affected leaves</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Smart Weather & Crop Intelligence */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="lg:order-2 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#3b82f6] rounded-full flex items-center justify-center">
                  <CloudRain className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#212529]">Smart Weather & Crop Intelligence</h3>
              </div>
              <p className="text-[#6c757d] leading-relaxed">
                Get hyper-local weather forecasts, personalized crop recommendations based on your soil conditions, and real-time market prices to optimize your farming decisions and maximize profits.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">7-day weather forecasts with alerts</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">Soil-based crop recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#3b82f6] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">Live market price tracking</span>
                </li>
              </ul>
            </div>
            <div className="lg:order-1 relative">
              <div className="w-full h-80 bg-gradient-to-br from-blue-50 to-green-50 rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative w-64 h-64 bg-white rounded-lg shadow-xl p-6">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="text-2xl">🌤️</div>
                      <div className="text-right">
                        <div className="text-lg font-bold">28°C</div>
                        <div className="text-xs text-gray-500">Partly Cloudy</div>
                      </div>
                    </div>
                    <div className="border-t pt-4">
                      <div className="text-sm font-semibold mb-2">Recommended Crops</div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs">
                          <span>🌾 Rice</span>
                          <span className="text-green-600">Excellent</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>🌽 Corn</span>
                          <span className="text-yellow-600">Good</span>
                        </div>
                        <div className="flex items-center justify-between text-xs">
                          <span>🍅 Tomato</span>
                          <span className="text-green-600">Excellent</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Voice-Enabled Interface */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#8b5cf6] rounded-full flex items-center justify-center">
                  <Mic className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-[#212529]">Voice-Enabled Interface</h3>
              </div>
              <p className="text-[#6c757d] leading-relaxed">
                Break language barriers with our multilingual voice interface. Ask questions, get recommendations, and access all features using simple voice commands in your native language.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">15+ regional languages supported</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">Hands-free operation</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#8b5cf6] rounded-full"></div>
                  <span className="text-sm text-[#6c757d]">Perfect for low-literacy users</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="w-full h-80 bg-gradient-to-br from-purple-50 to-blue-50 rounded-lg flex items-center justify-center shadow-lg">
                <div className="relative w-64 h-64 bg-white rounded-lg shadow-xl p-6 flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-[#8b5cf6] rounded-full flex items-center justify-center mb-4 animate-pulse">
                    <Mic className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Listening...</div>
                    <div className="text-xs text-gray-500 mb-4">&quot;आज मौसम कैसा है?&quot;</div>
                    <div className="w-full bg-purple-100 rounded-full h-1">
                      <div className="bg-[#8b5cf6] h-1 rounded-full w-3/4 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button className="bg-[#22c55e] text-white font-semibold px-8 py-3 text-sm hover:bg-[#22c55e]/90">
              EXPLORE ALL FEATURES
            </Button>
          </div>
        </div>
      </section>

      {/* User Types Section */}
      <section className="py-20 bg-[#f8f9fa]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#212529] mb-4">Built for Everyone in Agriculture</h2>
            <p className="text-[#6c757d] text-lg max-w-3xl mx-auto">
              Whether you&apos;re a small-scale farmer or an agricultural professional, our platform adapts to your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#dcfce7] rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-[#22c55e]" />
                </div>
                <h3 className="text-xl font-semibold text-[#212529] mb-4 text-center">Farmers</h3>
                <ul className="space-y-3 text-sm text-[#6c757d]">
                  <li>• Disease detection and treatment</li>
                  <li>• Weather alerts and forecasts</li>
                  <li>• Crop recommendations</li>
                  <li>• Market price tracking</li>
                  <li>• Voice interface support</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#dbeafe] rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-[#3b82f6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#212529] mb-4 text-center">Agricultural Officers</h3>
                <ul className="space-y-3 text-sm text-[#6c757d]">
                  <li>• Farmer management dashboard</li>
                  <li>• Regional crop monitoring</li>
                  <li>• Disease outbreak tracking</li>
                  <li>• Advisory distribution</li>
                  <li>• Progress analytics</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-[#e9ecef] shadow-lg hover:shadow-xl transition-all">
              <CardContent className="p-8">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#f3e8ff] rounded-full flex items-center justify-center">
                  <Target className="w-8 h-8 text-[#8b5cf6]" />
                </div>
                <h3 className="text-xl font-semibold text-[#212529] mb-4 text-center">Agri-Vendors</h3>
                <ul className="space-y-3 text-sm text-[#6c757d]">
                  <li>• Integrated marketplace</li>
                  <li>• Demand forecasting</li>
                  <li>• Farmer network access</li>
                  <li>• Product recommendations</li>
                  <li>• Sales analytics</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#22c55e] to-[#16a34a]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Farming?
          </h2>
          <p className="text-lg text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of farmers who are already using SmartFarm AI to increase productivity, reduce costs, and maximize profits. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-white text-[#22c55e] font-semibold px-8 py-3 text-sm hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button variant="outline" className="border-white text-white font-semibold px-8 py-3 text-sm hover:bg-white/10">
              Schedule Demo
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#31405b] text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h4 className="font-bold text-sm mb-6 tracking-wider">COMPANY</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-6 tracking-wider">SOLUTIONS</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Agriculture
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Supply Chain
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Food & Beverage
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Retail
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-6 tracking-wider">RESOURCES</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    White Papers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Webinars
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sm mb-6 tracking-wider">OTHER RESOURCES</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                    Documentation
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-[#495057] pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <Link href="/" className="text-2xl font-bold text-[#1fc79d]">
                  Cropin
                </Link>
                <div className="text-sm text-[#adb5bd]">
                  © 2024 Cropin Technology Solutions Pvt Ltd. All rights reserved.
                </div>
              </div>
              <div className="flex space-x-4">
                <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
                <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </Link>
                <Link href="#" className="text-[#adb5bd] hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
