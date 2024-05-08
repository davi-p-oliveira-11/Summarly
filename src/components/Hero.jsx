const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <h2 className="logo_text">Summarly</h2>
        
        <button
          type="button"
          onClick={() => window.open('https://')}
          className="black_btn"
        >
          Github
        </button>
      </nav>

      <h1 className="head_text">
        Summarize Articles with <br className="max-md:hidden" />
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Master Efficiency: Our App Condenses Articles into Clear, Informative Summaries, Empowering You to Absorb Knowledge Faster. Experience the Difference!
      </h2>
    </header>
  )
}

export default Hero