import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Layout({ children }) {
  return (
    <div className={`${inter.className} relative min-h-screen bg-[#121212] text-white overflow-x-hidden`}>
      {/* Background gradient effects */}
      <div className="fixed top-0 left-0 right-0 bottom-0 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--primary)]/5 blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[var(--secondary)]/5 blur-[100px]" />
      </div>
      
      {/* Grid pattern overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `linear-gradient(var(--surface) 1px, transparent 1px),
            linear-gradient(90deg, var(--surface) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
