import { Search, User, ShoppingBag, ChevronDown } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex flex-col">
                <div className="text-2xl font-serif tracking-wider">BOXUP</div>
                <div className="text-xs text-gray-600 tracking-wide">Luxury Gifting</div>
              </div>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search"
                  className="pl-10 border-gray-200 focus:border-gray-300 focus:ring-0"
                />
              </div>
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="p-2">
                <User className="h-5 w-5 text-gray-600" />
              </Button>
              <Button variant="ghost" size="sm" className="p-2">
                <ShoppingBag className="h-5 w-5 text-gray-600" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Menu */}
      <nav className="border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-8 h-14">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-medium text-gray-700 hover:text-gray-900 bg-transparent hover:bg-transparent focus:bg-transparent data-[active]:bg-transparent data-[state=open]:bg-transparent">
                    Shop Gifts
                    <ChevronDown className="ml-1 h-3 w-3" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-48 p-4">
                      <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Gift Boxes
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Hampers
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded">
                        Seasonal Gifts
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
                    Make Your Own Hamper
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
                    All Gifts
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
                    New Arrivals
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink className="text-sm font-medium text-gray-700 hover:text-gray-900 px-3 py-2">
                    Corporate Gifting
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-gray-500">
          <span className="hover:text-gray-700 cursor-pointer">Home</span>
          <span className="mx-2">{">"}</span>
          <span>Luxury gift boxes & hampers for every celebration</span>
        </nav>
      </div>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-8 leading-tight">
            Luxury Gift Boxes & Hampers for Every Celebration
          </h1>

          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover the perfect <span className="font-medium text-gray-900">luxury gifts online</span> at BoxUp
              Gifting—where style meets substance. Whether you're celebrating a birthday, corporate milestone, festival,
              or wedding, our curated collection of{" "}
              <span className="font-medium text-gray-900">premium gift boxes and hampers</span> offers something unique
              for every occasion.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
