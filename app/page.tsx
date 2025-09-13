"use client"

import { useState } from "react"
import { ArrowLeft, Plus, Crown, ChevronDown, Bell, Edit3 } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function InvoiceDashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState("3 Months")
  const [chartView, setChartView] = useState<"income" | "growth" | "comparison">("comparison")
  const [invoicesExpanded, setInvoicesExpanded] = useState(true)

  const invoices = [
    { id: 1, client: "Client Name", amount: "₹1,25,000", date: "2024-06-15", status: "update" },
    { id: 2, client: "Client Name", amount: "₹1,25,000", date: "2024-06-15", status: "unpaid" },
    { id: 3, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "disputed" },
    { id: 4, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "paid" },
    { id: 5, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "paid" },
    { id: 6, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "partially-paid" },
    { id: 7, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "paid" },
    { id: 8, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "overdue" },
    { id: 9, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "awaited" },
    { id: 10, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "draft" },
    { id: 11, client: "Income Trend", amount: "₹1,25,000", date: "2024-06-15", status: "paid" },
  ]

  const chartDataSets = {
    income: [
      { month: "Jan", value: 30, label: "$8k" },
      { month: "Feb", value: 45, label: "$12k" },
      { month: "Mar", value: 60, label: "$15k" },
      { month: "Apr", value: 35, label: "$9k" },
      { month: "May", value: 55, label: "$14k" },
      { month: "Jun", value: 40, label: "$10k" },
    ],
    growth: [
      { month: "Jan", value: 20, label: "20%" },
      { month: "Feb", value: 35, label: "35%" },
      { month: "Mar", value: 50, label: "50%" },
      { month: "Apr", value: 25, label: "25%" },
      { month: "May", value: 45, label: "45%" },
      { month: "Jun", value: 30, label: "30%" },
    ],
    comparison: [
      { month: "Jan", income: 30, growth: 20 },
      { month: "Feb", income: 45, growth: 35 },
      { month: "Mar", income: 60, growth: 50 },
      { month: "Apr", income: 35, growth: 25 },
      { month: "May", income: 55, growth: 45 },
      { month: "Jun", income: 40, growth: 30 },
    ],
  }

  const handleCreateInvoice = () => {
    console.log("Create new invoice clicked")
    // Add your create invoice logic here
  }

  const handleBackClick = () => {
    console.log("Back button clicked")
    // Add navigation logic here
  }

  const handleProfileClick = () => {
    console.log("Profile clicked")
    // Add profile menu logic here
  }

  const handlePeriodChange = (period: string) => {
    setSelectedPeriod(period)
    console.log("Period changed to:", period)
  }

  const handleChartClick = () => {
    const views: Array<"income" | "growth" | "comparison"> = ["comparison", "income", "growth"]
    const currentIndex = views.indexOf(chartView)
    const nextView = views[(currentIndex + 1) % views.length]
    setChartView(nextView)
    console.log("Chart view changed to:", nextView)
  }

  const handleInvoiceClick = (invoiceId: number) => {
    console.log("Invoice clicked:", invoiceId)
    // Add invoice detail logic here
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "update":
        return <Badge className="bg-[#8134af] text-white hover:bg-[#8134af]/90 cursor-pointer">Update Status</Badge>
      case "unpaid":
        return (
          <Badge variant="outline" className="text-[#6b7280] border-[#d9d9d9] cursor-pointer">
            Unpaid
          </Badge>
        )
      case "disputed":
        return <Badge className="bg-[#ffb1b1] text-[#ff2d55] hover:bg-[#ffb1b1]/90 cursor-pointer">Disputed</Badge>
      case "paid":
        return <Badge className="bg-[#9cefb8] text-[#166534] hover:bg-[#9cefb8]/90 cursor-pointer">Paid</Badge>
      case "partially-paid":
        return (
          <Badge className="bg-[#fffae5] text-[#ffcc00] hover:bg-[#fffae5]/90 cursor-pointer">Partially Paid</Badge>
        )
      case "overdue":
        return <Badge className="bg-[#ffb1b1] text-[#ff2d55] hover:bg-[#ffb1b1]/90 cursor-pointer">Overdue</Badge>
      case "awaited":
        return <Badge className="bg-[#fffae5] text-[#ffcc00] hover:bg-[#fffae5]/90 cursor-pointer">Awaited</Badge>
      case "draft":
        return (
          <Badge variant="outline" className="text-[#6b7280] border-[#d9d9d9] cursor-pointer">
            Draft
          </Badge>
        )
      default:
        return <Badge variant="outline">Unknown</Badge>
    }
  }

  const getChartTitle = () => {
    switch (chartView) {
      case "income":
        return "Monthly Income"
      case "growth":
        return "Growth Percentage"
      case "comparison":
        return "Income Trend"
      default:
        return "Income Trend"
    }
  }

  return (
    <div className="min-h-screen bg-[#f7fcff] pb-20 max-w-md mx-auto lg:max-w-4xl lg:px-8">
      {/* Status Bar - hidden on desktop */}
      <div className="flex justify-between items-center px-4 py-2 text-sm font-medium lg:hidden">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-[#cccccc] rounded-full"></div>
          </div>
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none">
            <path d="M3 7H21L19 21H5L3 7Z" stroke="currentColor" strokeWidth="2" />
            <path d="M8 7V5C8 3 9 2 11 2H13C15 2 16 3 16 5V7" stroke="currentColor" strokeWidth="2" />
          </svg>
          <div className="w-6 h-3 border border-black rounded-sm">
            <div className="w-4 h-2 bg-black rounded-sm m-0.5"></div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between px-4 py-4 lg:py-6">
        <div className="flex items-center gap-3">
          <button onClick={handleBackClick} className="hover:bg-gray-100 p-1 rounded-full transition-colors">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-lg font-semibold lg:text-2xl">Dashboard</h1>
        </div>
        <button onClick={handleProfileClick} className="hover:opacity-80 transition-opacity">
          <Avatar className="w-8 h-8 lg:w-10 lg:h-10">
            <AvatarImage src="/diverse-profile-avatars.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </button>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:px-4">
        <div className="lg:space-y-6">
          {/* Create New Invoice */}
          <Card className="mx-4 lg:mx-0 mb-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-6 text-center">
              <button onClick={handleCreateInvoice} className="w-full hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-[#f3e8ff] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-6 h-6 text-[#8134af]" />
                </div>
                <h2 className="text-lg font-semibold text-[#8134af] mb-2">Create New Invoice</h2>
                <p className="text-sm text-[#6b7280] mb-4">Start by creating and sending new invoice</p>
                <p className="text-xs text-[#6b7280]">Or Upload an existing invoice and set payment reminder</p>
              </button>
            </CardContent>
          </Card>

          {/* Time Period */}
          <div className="px-4 lg:px-0 mb-6">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-[#6b7280]">Time Period</span>
              <span className="text-xs text-[#6b7280]">dd mm yyyy - dd mm yyyy</span>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button
                variant={selectedPeriod === "1 Month" ? "default" : "outline"}
                size="sm"
                className={
                  selectedPeriod === "1 Month"
                    ? "bg-[#8134af] text-white"
                    : "text-[#6b7280] border-[#d9d9d9] bg-transparent"
                }
                onClick={() => handlePeriodChange("1 Month")}
              >
                1 Month
              </Button>
              <Button
                variant={selectedPeriod === "3 Months" ? "default" : "outline"}
                size="sm"
                className={
                  selectedPeriod === "3 Months"
                    ? "bg-[#8134af] text-white"
                    : "text-[#6b7280] border-[#d9d9d9] bg-transparent"
                }
                onClick={() => handlePeriodChange("3 Months")}
              >
                3 Months
              </Button>
              <Button
                variant={selectedPeriod === "1 Year" ? "default" : "outline"}
                size="sm"
                className={`${selectedPeriod === "1 Year" ? "bg-[#8134af] text-white" : "text-[#6b7280] border-[#d9d9d9] bg-transparent"} flex items-center gap-1`}
                onClick={() => handlePeriodChange("1 Year")}
              >
                1 Year <Crown className="w-3 h-3" />
              </Button>
            </div>
            <Button
              variant="ghost"
              size="sm"
              className="text-[#6b7280] mt-2 p-0 h-auto hover:text-[#8134af]"
              onClick={() => handlePeriodChange("Custom")}
            >
              📅 Custom
            </Button>
          </div>

          {/* Total Earnings */}
          <div className="px-4 lg:px-0 mb-6">
            <p className="text-sm text-[#6b7280] mb-1">Total Earnings</p>
            <p className="text-2xl lg:text-3xl font-bold">$1,25,000</p>
          </div>

          {/* Payment Cards */}
          <div className="flex gap-4 px-4 lg:px-0 mb-6">
            <Card className="flex-1 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <p className="text-xs text-[#6b7280] mb-1">Payment Awaited</p>
                <p className="text-lg font-semibold">$25,000</p>
              </CardContent>
            </Card>
            <Card className="flex-1 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <p className="text-xs text-[#6b7280] mb-1">Payment Overdue</p>
                <p className="text-lg font-semibold">$25,000</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="lg:space-y-6">
          {/* Income Trend */}
          <div className="px-4 lg:px-0 mb-6">
            <h3 className="text-base lg:text-lg font-semibold mb-2">{getChartTitle()}</h3>
            <p className="text-sm text-[#6b7280] mb-4">
              {chartView === "comparison" && "Your monthly income and growth for the last 6 months."}
              {chartView === "income" && "Monthly income breakdown for the selected period."}
              {chartView === "growth" && "Growth percentage trends over the selected period."}
            </p>

            {/* Interactive Chart */}
            <div className="bg-white rounded-lg p-4 mb-4 hover:shadow-md transition-shadow">
              <button
                onClick={handleChartClick}
                className="w-full text-left hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <div className="flex justify-between items-end h-32 mb-2">
                  {chartView === "comparison" &&
                    chartDataSets.comparison.map((data, index) => (
                      <div key={data.month} className="flex flex-col items-center gap-1">
                        <div className="flex flex-col items-center gap-1">
                          <div
                            className="w-6 bg-[#8134af] rounded-t transition-all duration-300 hover:bg-[#8134af]/80"
                            style={{ height: `${data.income}px` }}
                          ></div>
                          <div
                            className="w-6 bg-[#8134af]/50 rounded-t transition-all duration-300 hover:bg-[#8134af]/30"
                            style={{ height: `${data.growth}px` }}
                          ></div>
                        </div>
                      </div>
                    ))}

                  {chartView === "income" &&
                    chartDataSets.income.map((data, index) => (
                      <div key={data.month} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 bg-[#8134af] rounded-t transition-all duration-300 hover:bg-[#8134af]/80"
                          style={{ height: `${data.value}px` }}
                        ></div>
                      </div>
                    ))}

                  {chartView === "growth" &&
                    chartDataSets.growth.map((data, index) => (
                      <div key={data.month} className="flex flex-col items-center gap-1">
                        <div
                          className="w-8 bg-gradient-to-t from-[#8134af] to-[#8134af]/60 rounded-t transition-all duration-300 hover:from-[#8134af]/80 hover:to-[#8134af]/40"
                          style={{ height: `${data.value}px` }}
                        ></div>
                      </div>
                    ))}
                </div>

                <div className="flex justify-between text-xs text-[#6b7280] mb-4">
                  {(chartView === "comparison"
                    ? chartDataSets.comparison
                    : chartView === "income"
                      ? chartDataSets.income
                      : chartDataSets.growth
                  ).map((data) => (
                    <span key={data.month}>{data.month}</span>
                  ))}
                </div>

                {chartView === "comparison" && (
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#8134af] rounded"></div>
                      <span className="text-[#6b7280]">Income</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-[#8134af]/50 rounded"></div>
                      <span className="text-[#6b7280]">Growth</span>
                    </div>
                  </div>
                )}

                {chartView !== "comparison" && (
                  <div className="flex items-center gap-2 text-xs">
                    <div className="w-3 h-3 bg-[#8134af] rounded"></div>
                    <span className="text-[#6b7280]">{chartView === "income" ? "Monthly Income" : "Growth Rate"}</span>
                  </div>
                )}

                <div className="text-xs text-[#8134af] mt-2 text-center">Click to switch view</div>
              </button>
            </div>

            <div className="flex justify-between items-center text-sm">
              <span className="text-[#6b7280]">{chartView === "growth" ? "0%" : "$0k"}</span>
              <span className="text-[#6b7280]">{chartView === "growth" ? "100%" : "$20k"}</span>
            </div>
          </div>

          {/* Your Invoices */}
          <div className="px-4 lg:px-0">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base lg:text-lg font-semibold">Your Invoices</h3>
              <button
                onClick={() => setInvoicesExpanded(!invoicesExpanded)}
                className="hover:bg-gray-100 p-1 rounded transition-colors"
              >
                <ChevronDown
                  className={`w-5 h-5 text-[#6b7280] transition-transform ${invoicesExpanded ? "rotate-180" : ""}`}
                />
              </button>
            </div>

            {invoicesExpanded && (
              <div className="space-y-3 lg:max-h-96 lg:overflow-y-auto">
                {invoices.map((invoice) => (
                  <Card key={invoice.id} className="bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <button
                        onClick={() => handleInvoiceClick(invoice.id)}
                        className="w-full text-left hover:bg-gray-50 p-2 rounded transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{invoice.client}</p>
                            <p className="text-xs text-[#6b7280]">
                              {invoice.amount}, Due: {invoice.date}
                            </p>
                          </div>
                          <div className="flex items-center gap-2">
                            {getStatusBadge(invoice.status)}
                            {(invoice.status === "overdue" || invoice.status === "awaited") && (
                              <Bell className="w-4 h-4 text-[#6b7280]" />
                            )}
                            {invoice.status === "draft" && <Edit3 className="w-4 h-4 text-[#6b7280]" />}
                          </div>
                        </div>
                      </button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Branding */}
      <div className="text-center py-8 lg:col-span-2">
        <p className="text-sm text-[#6b7280]">
          <span className="font-semibold">Sparks</span>Genny
        </p>
        <p className="text-xs text-[#6b7280]">Sparking the smarter economy</p>
      </div>
    </div>
  )
}
