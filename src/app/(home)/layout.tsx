import { Hero } from "app/components/home/hero";


export default function HomeLayout({ children }: { children: React.ReactNode}) {
  return (
    <div>
      <Hero />
      {children}
    </div>
  )
}