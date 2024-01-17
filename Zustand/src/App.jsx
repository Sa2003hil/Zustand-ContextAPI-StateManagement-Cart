import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import CourseForm from './components/CourseForm'
import { ThemeProvider } from './contexts/theme'
import { useEffect, useState } from 'react'

function App() {

  const [themeMode, setThemeMode] = useState('light')

  // The functionality of the lightTheme and darkTheme methods are not yet implemented in the ThemeProvider context, so we can make the functionality it in the compenent itself by defining the methods(names must be same as in the context)

  const lightTheme = () => {
    setThemeMode('light')
  }

  const darkTheme = () => {
    setThemeMode('dark')
  }


  // acctual change in the theme

  useEffect(() => {
    document.querySelector('html').classList.remove('dark', 'light')
    document.querySelector('html').classList.add(themeMode)
  }, [themeMode])


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className=' text-lg font-bold bg-black w-[50%] rounded-full m-auto p-4 text-white'>Welcome to CodeAcadmey</div>
      <div className=' m-auto items-center justify-center flex mt-10'>
        <CourseForm />
      </div>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* Themebtn */}
            <ThemeBtn />
          </div>

          <Card />
          <div className=" flex w-[40%] mt-4 m-auto overflow-x-hidden">
            {/* Cards */}

            <div className="w-screen bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="/">
                <img className="p-8 rounded-xl" src="https://i.ytimg.com/vi/bMknfKXIFA8/maxresdefault.jpg" alt="product_image1" />
              </a>
              <div className="px-5 pb-5">
                <a href="/">
                  <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                    React state management crash course | Zustand
                  </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                  {/* Your star SVG icons */}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                  <a
                    href="/"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Add to cart
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
