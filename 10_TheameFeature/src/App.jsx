
import { useState, useEffect } from 'react'
import Card from './Component/Card'
import ThemeBtn from './Component/ThemeBtn'
import { ThemeProvider } from './context/theme'


function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  // Actual Change In theme

  useEffect(() => {
    const removedTheme = document.querySelector('html').classList.remove('dark', 'light')
    const addTheme = document.querySelector('html').classList.add(themeMode)

  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
